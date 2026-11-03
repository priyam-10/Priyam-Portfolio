import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Calendar, Award } from 'lucide-react';
import type { CertificationItem } from '../../types';
import { backdropVariants, modalVariants } from '../../lib/animations';

interface CertificateModalProps {
  certificate: CertificationItem | null;
  onClose: () => void;
}

export const CertificateModal = ({ certificate, onClose }: CertificateModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (certificate) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose]);

  return (
    <AnimatePresence>
      {certificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-cert-title"
        >
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-4xl my-6 bg-[#FAF6EE] dark:bg-[#111116] border border-[#E2D7C5] dark:border-white/[0.09] rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col text-[#29231F] dark:text-[#EDEDF2]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-[#E2D7C5] dark:border-white/[0.07] bg-[#FFFFFF] dark:bg-[#17151B]">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-[#721C35]/10 dark:bg-[#481426]/30 text-[#721C35] dark:text-[#FF9D32] border border-[#721C35]/30 dark:border-[#F28C28]/35">
                  <Award className="w-4 h-4" />
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#29231F] dark:text-slate-200">
                  {certificate.issuer}
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close certificate preview"
                className="p-1.5 rounded-lg text-[#5C524A] dark:text-slate-400 hover:text-[#29231F] dark:hover:text-white hover:bg-[#EAE1D2] dark:hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#721C35] dark:focus:ring-[#F28C28] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto p-4 sm:p-6 space-y-4">
              {/* Certificate Image Preview */}
              <div className="relative rounded-xl overflow-hidden border border-[#E2D7C5] dark:border-white/[0.08] bg-[#FAF6EE] dark:bg-[#0B0B10] flex items-center justify-center p-2 sm:p-3 max-h-[62vh]">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  loading="eager"
                  decoding="async"
                  className="max-h-[58vh] w-auto max-w-full object-contain rounded-lg shadow-md"
                />
              </div>

              {/* Title & Metadata */}
              <div className="pt-2">
                <h3 id="modal-cert-title" className="text-lg sm:text-xl font-bold text-[#29231F] dark:text-white tracking-tight leading-snug">
                  {certificate.title}
                </h3>
                <div className="mt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#7E7267] dark:text-slate-400">
                  <span className="font-medium text-[#5C524A] dark:text-slate-300">
                    Issuer: <span className="text-[#29231F] dark:text-white font-semibold">{certificate.issuer}</span>
                  </span>
                  {certificate.completionDate && (
                    <span className="inline-flex items-center gap-1.5 text-[#5C524A] dark:text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-[#721C35] dark:text-[#F28C28]" />
                      Date: {certificate.completionDate}
                    </span>
                  )}
                </div>

                {certificate.topics && certificate.topics.length > 0 && (
                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {certificate.topics.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-[#FFFFFF] dark:bg-[#17151B] text-[#5C524A] dark:text-slate-300 border border-[#E2D7C5] dark:border-white/[0.06] shadow-sm dark:shadow-none"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 sm:p-5 border-t border-[#E2D7C5] dark:border-white/[0.07] bg-[#FFFFFF] dark:bg-[#17151B] flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-[#5C524A] dark:text-slate-300 hover:text-[#29231F] dark:hover:text-white bg-[#FAF6EE] dark:bg-[#1E1420] hover:bg-[#EAE1D2] dark:hover:bg-[#251828] border border-[#E2D7C5] dark:border-white/[0.08] transition-all cursor-pointer"
              >
                Close Preview
              </button>
              <a
                href={certificate.image}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#721C35] via-[#8C2342] to-[#481426] dark:from-[#F28C28] dark:via-[#E06D28] dark:to-[#A83250] hover:from-[#8C2342] hover:to-[#5E1A30] dark:hover:from-[#FF9D32] dark:hover:to-[#B83858] shadow-md shadow-[#721C35]/20 dark:shadow-orange-950/40 transition-all"
              >
                <span>Open Full Resolution</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
