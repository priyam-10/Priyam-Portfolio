import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Calendar, Award } from 'lucide-react';
import type { CertificationItem } from '../../types';
import { Button } from '../Buttons/Button';
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
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
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

          {/* Modal Content */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-4xl my-6 bg-[#121520] border border-[#262C3E] rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#202535] bg-[#161B28]">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#FF8C00]" />
                <span className="text-sm font-semibold text-slate-200">
                  {certificate.issuer}
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close certificate preview"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF8C00]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Certificate Preview Image */}
            <div className="overflow-y-auto p-4 sm:p-6 space-y-4">
              <div className="relative rounded-xl overflow-hidden border border-[#252C3D] bg-[#0A0D14] flex items-center justify-center max-h-[60vh]">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="max-h-[58vh] w-auto max-w-full object-contain rounded-lg shadow-lg"
                />
              </div>

              {/* Title & Info */}
              <div className="pt-2">
                <h3 id="modal-cert-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {certificate.title}
                </h3>
                <div className="mt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400">
                  <span className="font-medium text-slate-300">
                    Issuer: <span className="text-white font-semibold">{certificate.issuer}</span>
                  </span>
                  {certificate.completionDate && (
                    <span className="inline-flex items-center gap-1.5 text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-[#FF8C00]" />
                      Completed: {certificate.completionDate}
                    </span>
                  )}
                </div>

                {certificate.topics && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {certificate.topics.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-[#181D2B] text-slate-300 border border-[#252D40]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 sm:p-5 border-t border-[#202535] bg-[#161B28] flex items-center justify-between">
              <Button variant="ghost" size="sm" onClick={onClose}>
                Close
              </Button>
              <Button
                href={certificate.image}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="sm"
                rightIcon={<ExternalLink className="w-4 h-4" />}
              >
                Open Full Resolution
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

