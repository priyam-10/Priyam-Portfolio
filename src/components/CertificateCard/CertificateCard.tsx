import { motion } from 'framer-motion';
import { Award, Eye, Calendar } from 'lucide-react';
import type { CertificationItem } from '../../types';
import { fadeInUp } from '../../lib/animations';

interface CertificateCardProps {
  certificate: CertificationItem;
  onOpenModal: (certificate: CertificationItem) => void;
}

export const CertificateCard = ({ certificate, onOpenModal }: CertificateCardProps) => {
  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className="group relative flex flex-col rounded-2xl bg-[#121520] border border-[#202535] hover:border-[#FF8C00]/50 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 overflow-hidden"
    >
      {/* Certificate Image Preview */}
      <div
        onClick={() => onOpenModal(certificate)}
        className="relative aspect-[4/3] w-full overflow-hidden bg-[#0A0D14] cursor-pointer"
      >
        <img
          src={certificate.image}
          alt={`Certificate: ${certificate.title}`}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121520] via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Hover overlay hint */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#FF8C00] text-black shadow-lg">
            <Eye className="w-3.5 h-3.5" />
            Enlarge Certificate
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF8C00]">
            <Award className="w-3.5 h-3.5" />
            {certificate.issuer}
          </span>
          {certificate.completionDate && (
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-400">
              <Calendar className="w-3 h-3 text-slate-500" />
              {certificate.completionDate}
            </span>
          )}
        </div>

        <h3 className="text-sm font-bold text-white tracking-tight leading-snug group-hover:text-[#FF8C00] transition-colors line-clamp-2 flex-1">
          {certificate.title}
        </h3>

        {certificate.topics && (
          <div className="mt-3 pt-3 border-t border-[#1C2230] flex flex-wrap gap-1">
            {certificate.topics.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-[10px] font-medium rounded bg-[#181D2A] text-slate-400 border border-[#22293C]"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <button
          type="button"
          onClick={() => onOpenModal(certificate)}
          className="mt-4 w-full py-2 px-3 rounded-xl text-xs font-semibold text-slate-200 bg-[#171B27] hover:bg-[#FF8C00] hover:text-black border border-[#252C3D] hover:border-[#FF8C00] transition-all flex items-center justify-center gap-1.5"
        >
          <Eye className="w-3.5 h-3.5" />
          View Certificate
        </button>
      </div>
    </motion.article>
  );
};
