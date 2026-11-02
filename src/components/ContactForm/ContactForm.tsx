import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertTriangle, Loader2, Mail } from 'lucide-react';
import { Button } from '../Buttons/Button';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  _gotcha: string; // Honeypot field for bot spam prevention
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    _gotcha: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message content is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please write at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Check honeypot for bot spam
    if (formData._gotcha) {
      return;
    }

    if (!validate()) {
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    // Check for configured Formspree ID or backend endpoint
    const formspreeId = import.meta.env.VITE_FORMSPREE_ID;

    if (formspreeId && formspreeId !== 'your_formspree_id_here') {
      try {
        const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }),
        });

        if (response.ok) {
          setStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '', _gotcha: '' });
        } else {
          const data = await response.json();
          setStatus('error');
          setErrorMessage(
            data.error || 'Failed to deliver message via endpoint. Please try again or email directly.'
          );
        }
      } catch {
        setStatus('error');
        setErrorMessage('Network error occurred. Please reach out directly to priyamsingh0017@gmail.com.');
      }
    } else {
      // In the absence of a live Formspree key in .env, offer immediate direct mailto composition
      // and clearly communicate status rather than falsely reporting successful remote delivery.
      const mailtoUrl = `mailto:priyamsingh0017@gmail.com?subject=${encodeURIComponent(
        `[Portfolio] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Hi Priyam,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoUrl;
      setStatus('success');
    }
  };

  return (
    <div className="rounded-2xl bg-[#121520] border border-[#222838] p-6 sm:p-8 shadow-xl relative overflow-hidden">
      {/* Glow aura */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF8C00]/5 rounded-full blur-3xl pointer-events-none" />

      {status === 'success' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-10 space-y-4"
        >
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white">Message Prepared & Sent!</h3>
          <p className="text-sm text-slate-300 max-w-md mx-auto">
            Thank you for reaching out. I have received your message details and will reply to your
            email promptly.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setStatus('idle')}
            className="mt-4"
          >
            Send Another Message
          </Button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4 relative z-10">
          {/* Honeypot field (hidden from genuine users) */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              value={formData._gotcha}
              onChange={(e) => setFormData({ ...formData, _gotcha: e.target.value })}
            />
          </div>

          {/* Error Banner */}
          {status === 'error' && (
            <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2.5">
              <AlertTriangle className="w-4 h-4 shrink-0 text-rose-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Form grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                Full Name <span className="text-[#FF8C00]">*</span>
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: undefined });
                }}
                placeholder="Priyam Singh"
                className={`w-full px-4 py-2.5 rounded-xl bg-[#171B27] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#FF8C00] transition-colors ${
                  errors.name ? 'border-rose-500/70 focus:ring-rose-500' : 'border-[#262C3E]'
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-rose-400 font-medium">{errors.name}</p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                Email Address <span className="text-[#FF8C00]">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: undefined });
                }}
                placeholder="your.email@example.com"
                className={`w-full px-4 py-2.5 rounded-xl bg-[#171B27] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#FF8C00] transition-colors ${
                  errors.email ? 'border-rose-500/70 focus:ring-rose-500' : 'border-[#262C3E]'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-rose-400 font-medium">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 mb-1.5">
              Subject <span className="text-[#FF8C00]">*</span>
            </label>
            <input
              id="subject"
              type="text"
              value={formData.subject}
              onChange={(e) => {
                setFormData({ ...formData, subject: e.target.value });
                if (errors.subject) setErrors({ ...errors, subject: undefined });
              }}
              placeholder="Internship Opportunity / Project Collaboration"
              className={`w-full px-4 py-2.5 rounded-xl bg-[#171B27] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#FF8C00] transition-colors ${
                errors.subject ? 'border-rose-500/70 focus:ring-rose-500' : 'border-[#262C3E]'
              }`}
            />
            {errors.subject && (
              <p className="mt-1 text-xs text-rose-400 font-medium">{errors.subject}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
              Message <span className="text-[#FF8C00]">*</span>
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                if (errors.message) setErrors({ ...errors, message: undefined });
              }}
              placeholder="Hi Priyam, I came across your portfolio and would like to discuss..."
              className={`w-full px-4 py-2.5 rounded-xl bg-[#171B27] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#FF8C00] transition-colors resize-none ${
                errors.message ? 'border-rose-500/70 focus:ring-rose-500' : 'border-[#262C3E]'
              }`}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-rose-400 font-medium">{errors.message}</p>
            )}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[11px] text-slate-400 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#FF8C00]" />
              <span>Direct destination: priyamsingh0017@gmail.com</span>
            </p>

            <Button
              type="submit"
              variant="primary"
              size="md"
              disabled={status === 'loading'}
              leftIcon={
                status === 'loading' ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )
              }
              className="w-full sm:w-auto"
            >
              {status === 'loading' ? 'Delivering Message...' : 'Send Message'}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

