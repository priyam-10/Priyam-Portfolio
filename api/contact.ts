import { Resend } from 'resend';

interface ContactPayload {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  _gotcha?: string;
}

// In-memory rate limiting map: IP -> timestamp array
// NOTE: In serverless environments (like Vercel), instances are ephemeral and may scale horizontally.
// This in-memory store protects warm instances from bursts/spam, but for globally persistent rate
// limiting across multiple cold instances, an external store like Upstash Redis / Vercel KV is required.
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 5; // max 5 submissions per 15 min per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitMap.set(ip, validTimestamps);
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);

  // Periodically clean up old entries to prevent memory leak
  if (rateLimitMap.size > 1000) {
    for (const [key, times] of rateLimitMap.entries()) {
      const active = times.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
      if (active.length === 0) {
        rateLimitMap.delete(key);
      } else {
        rateLimitMap.set(key, active);
      }
    }
  }

  return false;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function sendResponse(
  res: any,
  statusCode: number,
  data: { success: boolean; message: string; errors?: Record<string, string> },
  headers: Record<string, string> = {}
) {
  for (const [key, value] of Object.entries(headers)) {
    if (typeof res.setHeader === 'function') {
      res.setHeader(key, value);
    }
  }

  if (typeof res.status === 'function' && typeof res.json === 'function') {
    return res.status(statusCode).json(data);
  }

  res.statusCode = statusCode;
  if (typeof res.setHeader === 'function') {
    res.setHeader('Content-Type', 'application/json');
  }
  res.end(JSON.stringify(data));
}

async function parseBody(req: any): Promise<ContactPayload | null> {
  if (req.body && typeof req.body === 'object') {
    return req.body;
  }

  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body);
    } catch {
      return null;
    }
  }

  return new Promise((resolve) => {
    let body = '';
    req.on('data', (chunk: any) => {
      body += chunk;
      // Safeguard against large payloads (> 64KB)
      if (body.length > 65536) {
        resolve(null);
      }
    });
    req.on('end', () => {
      try {
        resolve(JSON.parse(body));
      } catch {
        resolve(null);
      }
    });
    req.on('error', () => resolve(null));
  });
}

export default async function handler(req: any, res: any) {
  // 1. CORS & Allowed Origins configuration
  const origin = req.headers?.origin || '';
  const allowedOriginsEnv = process.env.ALLOWED_ORIGINS || '';
  const allowedOrigins = allowedOriginsEnv
    .split(',')
    .map((o) => o.trim())
    .filter(Boolean);

  let corsOrigin = '*';
  if (allowedOrigins.length > 0) {
    if (allowedOrigins.includes(origin)) {
      corsOrigin = origin;
    } else {
      corsOrigin = allowedOrigins[0];
    }
  }

  const corsHeaders: Record<string, string> = {
    'Access-Control-Allow-Origin': corsOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Accept',
  };

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return sendResponse(res, 204, { success: true, message: 'Preflight OK' }, corsHeaders);
  }

  // 2. Reject non-POST HTTP methods
  if (req.method !== 'POST') {
    corsHeaders['Allow'] = 'POST';
    return sendResponse(
      res,
      405,
      { success: false, message: 'Method not allowed. Only POST requests are supported.' },
      corsHeaders
    );
  }

  // 3. Client IP extraction & Rate limiting check
  const forwardedFor = req.headers?.['x-forwarded-for'];
  const clientIp =
    (typeof forwardedFor === 'string' ? forwardedFor.split(',')[0].trim() : null) ||
    req.socket?.remoteAddress ||
    '127.0.0.1';

  if (isRateLimited(clientIp)) {
    return sendResponse(
      res,
      429,
      { success: false, message: 'Too many messages sent. Please wait a few minutes before trying again.' },
      corsHeaders
    );
  }

  // 4. Parse request body
  const body = await parseBody(req);
  if (!body) {
    return sendResponse(
      res,
      400,
      { success: false, message: 'Invalid or missing JSON payload in request body.' },
      corsHeaders
    );
  }

  // 5. Bot spam prevention: Honeypot check
  if (body._gotcha) {
    // Return success to confuse bots without dispatching any email
    return sendResponse(
      res,
      200,
      { success: true, message: 'Message sent successfully.' },
      corsHeaders
    );
  }

  // 6. Server-side validation
  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const subject = typeof body.subject === 'string' ? body.subject.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  const errors: Record<string, string> = {};

  if (!name) {
    errors.name = 'Full name is required.';
  } else if (name.length < 2) {
    errors.name = 'Full name must be at least 2 characters.';
  } else if (name.length > 100) {
    errors.name = 'Full name must not exceed 100 characters.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    errors.email = 'Email address is required.';
  } else if (!emailRegex.test(email)) {
    errors.email = 'Please provide a valid email address.';
  } else if (email.length > 100) {
    errors.email = 'Email address must not exceed 100 characters.';
  }

  if (!subject) {
    errors.subject = 'Subject is required.';
  } else if (subject.length < 3) {
    errors.subject = 'Subject must be at least 3 characters.';
  } else if (subject.length > 200) {
    errors.subject = 'Subject must not exceed 200 characters.';
  }

  if (!message) {
    errors.message = 'Message content is required.';
  } else if (message.length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  } else if (message.length > 5000) {
    errors.message = 'Message must not exceed 5000 characters.';
  }

  if (Object.keys(errors).length > 0) {
    return sendResponse(
      res,
      400,
      { success: false, message: 'Validation failed. Please correct the fields.', errors },
      corsHeaders
    );
  }

  // 7. Verify Resend credentials
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.error('[Contact API Error]: RESEND_API_KEY environment variable is not configured.');
    return sendResponse(
      res,
      500,
      {
        success: false,
        message: 'Email service is currently unconfigured on the server. Please contact directly at priyamsingh0017@gmail.com.',
      },
      corsHeaders
    );
  }

  const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
  const toEmail = process.env.CONTACT_TO_EMAIL || 'priyamsingh0017@gmail.com';

  const resend = new Resend(resendApiKey);

  // 8. Sanitize HTML & format email
  const escapedName = escapeHtml(name);
  const escapedEmail = escapeHtml(email);
  const escapedSubject = escapeHtml(subject);
  const escapedMessage = escapeHtml(message).replace(/\n/g, '<br/>');
  const submissionTimestamp = new Date().toUTCString();

  const htmlEmail = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Portfolio Contact Inquiry</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0b10; color: #ededf2; padding: 32px 16px; margin: 0;">
  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #111116; border: 1px solid #24222b; border-radius: 12px; overflow: hidden;">
    <tr>
      <td style="padding: 24px 28px; background: linear-gradient(135deg, #f28c28, #a83250); text-align: left;">
        <h1 style="color: #ffffff; font-size: 20px; font-weight: bold; margin: 0; letter-spacing: -0.5px;">
          Priyam Singh Portfolio — New Inquiry
        </h1>
      </td>
    </tr>
    <tr>
      <td style="padding: 28px;">
        <table width="100%" style="margin-bottom: 20px; font-size: 14px; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #94a3b8; width: 90px; vertical-align: top; font-weight: 600;">From:</td>
            <td style="padding: 8px 0; color: #ffffff; font-weight: bold;">${escapedName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8; vertical-align: top; font-weight: 600;">Email:</td>
            <td style="padding: 8px 0;">
              <a href="mailto:${escapedEmail}" style="color: #f28c28; text-decoration: none;">${escapedEmail}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8; vertical-align: top; font-weight: 600;">Subject:</td>
            <td style="padding: 8px 0; color: #ededf2;">${escapedSubject}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8; vertical-align: top; font-weight: 600;">Date:</td>
            <td style="padding: 8px 0; color: #94a3b8; font-size: 13px;">${submissionTimestamp}</td>
          </tr>
        </table>
        
        <div style="border-top: 1px solid #24222b; padding-top: 20px;">
          <h2 style="font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #f28c28; margin: 0 0 12px 0;">Message Content:</h2>
          <div style="background-color: #17151b; border: 1px solid #24222b; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.6; color: #e2e8f0;">
            ${escapedMessage}
          </div>
        </div>

        <p style="margin-top: 24px; font-size: 12px; color: #64748b; border-top: 1px solid #1c1a22; padding-top: 16px;">
          Tip: You can click &quot;Reply&quot; in your email client to respond directly to ${escapedName} (${escapedEmail}).
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  const textEmail = `
New Portfolio Contact Message
-----------------------------
From: ${name}
Email: ${email}
Subject: ${subject}
Date: ${submissionTimestamp}

Message:
${message}

-----------------------------
Reply-To is configured to ${email}. You can reply directly to this email.
  `.trim();

  // 9. Dispatch email via Resend
  try {
    const { data, error } = await resend.emails.send({
      from: `Priyam Portfolio <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: htmlEmail,
      text: textEmail,
    });

    if (error) {
      console.error('[Contact API Resend Error]:', error.message);
      return sendResponse(
        res,
        502,
        {
          success: false,
          message: 'Unable to deliver message at this time. Please email priyamsingh0017@gmail.com directly.',
        },
        corsHeaders
      );
    }

    if (!data?.id) {
      return sendResponse(
        res,
        502,
        {
          success: false,
          message: 'Delivery service did not return a confirmation ID. Please retry or contact directly.',
        },
        corsHeaders
      );
    }

    // Success response
    return sendResponse(
      res,
      200,
      {
        success: true,
        message: 'Your message has been sent successfully.',
      },
      corsHeaders
    );
  } catch (err: any) {
    console.error('[Contact API Exception]:', err?.message || 'Unexpected exception');
    return sendResponse(
      res,
      500,
      {
        success: false,
        message: 'An unexpected server error occurred while sending your message. Please try again later.',
      },
      corsHeaders
    );
  }
}

