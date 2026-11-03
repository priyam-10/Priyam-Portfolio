import { motion } from 'framer-motion';
import { Award, Eye, Calendar, ArrowUpRight } from 'lucide-react';
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
      className="group relative flex flex-col rounded-2xl bg-[#111116]/95 border border-white/[0.08] hover:border-[#F28C28]/40 hover:bg-[#17151B] transition-all duration-300 overflow-hidden shadow-lg shadow-black/30 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-orange-950/20 h-full justify-between"
    >
      {/* Restrained top-edge highlight */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#F28C28] via-[#A83250] to-[#721C35] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Certificate Image Preview (Uncropped with object-contain) */}
        <div
          onClick={() => onOpenModal(certificate)}
          className="relative aspect-[16/11] w-full overflow-hidden bg-[#0B0B10] border-b border-white/[0.06] flex items-center justify-center p-3 cursor-pointer group/img"
          title={`Click to preview certificate: ${certificate.title}`}
        >
          <img
            src={certificate.thumbnail || certificate.image}
            alt={certificate.title}
            width={640}
            height={440}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-contain rounded transition-transform duration-500 ease-out group-hover/img:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/30 transition-colors flex items-center justify-center">
            <span className="opacity-0 group-hover/img:opacity-100 transition-opacity inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#111116]/95 text-white border border-white/[0.15] shadow-lg backdrop-blur-sm">
              <Eye className="w-3.5 h-3.5 text-[#F28C28]" />
              Preview
            </span>
          </div>
        </div>

        {/* Certificate Information */}
        <div className="p-4 sm:p-5">
          {/* Issuer & Date Row */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF9D32] truncate">
              <Award className="w-3.5 h-3.5 text-[#F28C28] shrink-0" />
              <span className="truncate">{certificate.issuer}</span>
            </span>
            {certificate.completionDate && (
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 shrink-0">
                <Calendar className="w-3 h-3 text-slate-500" />
                {certificate.completionDate}
              </span>
            )}
          </div>

          {/* Certificate Title */}
          <h3 className="text-sm sm:text-[15px] font-bold text-white tracking-tight leading-snug group-hover:text-[#FF9D32] transition-colors line-clamp-2">
            {certificate.title}
          </h3>

          {/* Skill Tags */}
          {certificate.topics && certificate.topics.length > 0 && (
            <div className="mt-3.5 pt-3 border-t border-white/[0.06] flex flex-wrap gap-1.5">
              {certificate.topics.slice(0, 3).map((topic) => (
                <span
                  key={topic}
                  className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-[#17151B] text-slate-300 border border-white/[0.06]"
                >
                  {topic}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Action Row */}
      <div className="p-4 sm:p-5 pt-0">
        <button
          type="button"
          onClick={() => onOpenModal(certificate)}
          className="w-full py-2 px-3 rounded-xl text-xs font-semibold text-slate-200 bg-[#17151B] hover:bg-[#1E1420] hover:text-white border border-white/[0.08] hover:border-[#F28C28]/40 transition-all flex items-center justify-center gap-1.5 cursor-pointer group/btn"
        >
          <span>View Certificate</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#F28C28] transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </button>
      </div>
    </motion.article>
  );
};
