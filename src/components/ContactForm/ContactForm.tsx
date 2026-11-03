import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertTriangle, Loader2, Sparkles, Mail } from 'lucide-react';

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

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          _gotcha: formData._gotcha,
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '', _gotcha: '' });
      } else {
        setStatus('error');
        setErrorMessage(
          data?.message ||
            'Unable to deliver your message at this time. Please retry or contact priyamsingh0017@gmail.com directly.'
        );
      }
    } catch {
      setStatus('error');
      setErrorMessage(
        'A network connection error occurred while contacting the server. Please check your connection or reach out directly to priyamsingh0017@gmail.com.'
      );
    }
  };

  return (
    <div className="relative rounded-2xl bg-[#111116]/95 border border-white/[0.08] p-6 sm:p-8 lg:p-9 shadow-2xl shadow-black/30 overflow-hidden">
      {/* Restrained top-edge highlight bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#F28C28] via-[#A83250] to-[#721C35] opacity-80" />

      {/* Form Header */}
      <div className="mb-6 sm:mb-8">
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Send me a message
        </h3>
        <p className="mt-1.5 text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
          Have an opportunity, idea, or project in mind? I'd be happy to hear from you.
        </p>
      </div>

      {status === 'success' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8 sm:py-10 space-y-4"
        >
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h4 className="text-lg sm:text-xl font-bold text-white">Message Sent Successfully!</h4>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            Thank you for reaching out. Your message has been submitted successfully. I'll get back to you as soon as possible.
          </p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-[#17151B] hover:bg-[#1E1420] text-slate-200 hover:text-white border border-white/[0.08] hover:border-[#F28C28]/40 transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#F28C28]" />
            <span>Send Another Message</span>
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5 relative z-10">
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

          {/* Name & Email Row (Side by side on desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                Full Name <span className="text-[#F28C28]">*</span>
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
                className={`w-full px-4 py-2.5 rounded-xl bg-[#17151B] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F28C28] transition-colors ${
                  errors.name ? 'border-rose-500/70 focus:ring-rose-500' : 'border-white/[0.08] focus:border-[#F28C28]/50'
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-rose-400 font-medium">{errors.name}</p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                Email Address <span className="text-[#F28C28]">*</span>
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
                className={`w-full px-4 py-2.5 rounded-xl bg-[#17151B] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F28C28] transition-colors ${
                  errors.email ? 'border-rose-500/70 focus:ring-rose-500' : 'border-white/[0.08] focus:border-[#F28C28]/50'
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
              Subject <span className="text-[#F28C28]">*</span>
            </label>
            <input
              id="subject"
              type="text"
              value={formData.subject}
              onChange={(e) => {
                setFormData({ ...formData, subject: e.target.value });
                if (errors.subject) setErrors({ ...errors, subject: undefined });
              }}
              placeholder="Internship inquiry / Project collaboration"
              className={`w-full px-4 py-2.5 rounded-xl bg-[#17151B] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F28C28] transition-colors ${
                errors.subject ? 'border-rose-500/70 focus:ring-rose-500' : 'border-white/[0.08] focus:border-[#F28C28]/50'
              }`}
            />
            {errors.subject && (
              <p className="mt-1 text-xs text-rose-400 font-medium">{errors.subject}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
              Message <span className="text-[#F28C28]">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                if (errors.message) setErrors({ ...errors, message: undefined });
              }}
              placeholder="Hi Priyam, I came across your portfolio and would like to discuss..."
              className={`w-full px-4 py-2.5 rounded-xl bg-[#17151B] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F28C28] transition-colors resize-none ${
                errors.message ? 'border-rose-500/70 focus:ring-rose-500' : 'border-white/[0.08] focus:border-[#F28C28]/50'
              }`}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-rose-400 font-medium">{errors.message}</p>
            )}
          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[11px] text-slate-400 flex items-center gap-1.5 order-2 sm:order-1">
              <Mail className="w-3.5 h-3.5 text-[#F28C28]" />
              <span className="font-mono">Direct destination: priyamsingh0017@gmail.com</span>
            </p>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#F28C28] via-[#E06D28] to-[#A83250] hover:from-[#FF9D32] hover:to-[#B83858] shadow-md shadow-orange-950/40 hover:shadow-orange-950/60 active:scale-[0.98] transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed order-1 sm:order-2"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Delivering Message...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
