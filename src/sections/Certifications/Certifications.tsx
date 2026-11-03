import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { certificationsData } from '../../data/certifications';
import type { CertificationItem } from '../../types';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import { CertificateCard } from '../../components/CertificateCard/CertificateCard';
import { CertificateModal } from '../../components/Modal/CertificateModal';
import { staggerContainer } from '../../lib/animations';

export const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // Sliced certificate list: 4 initially, all 7 when expanded
  const displayedCertificates = useMemo(() => {
    return isExpanded ? certificationsData : certificationsData.slice(0, 4);
  }, [isExpanded]);

  return (
    <section id="certifications" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 -right-48 w-80 h-80 bg-[#721C35]/4 dark:bg-[#F28C28]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        <SectionHeading
          badge="Credentials"
          title="Certifications & Professional Learning"
          subtitle="Professional credentials and continuous learning across data analytics, AI, and technology."
          className="mb-10 sm:mb-12 lg:mb-14"
        />

        {/* Responsive Certificate Gallery Grid */}
        <motion.div
          layout
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch"
        >
          <AnimatePresence>
            {displayedCertificates.map((cert) => (
              <CertificateCard
                key={cert.id}
                certificate={cert}
                onOpenModal={(c) => setSelectedCert(c)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Centered Show All / Show Less Toggle Button */}
        {certificationsData.length > 4 && (
          <div className="mt-10 sm:mt-12 text-center">
            <button
              type="button"
              onClick={() => setIsExpanded((prev) => !prev)}
              aria-expanded={isExpanded}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-[#FFFFFF] dark:bg-[#17151B] hover:bg-[#FAF6EE] dark:hover:bg-[#1E1420] text-[#29231F] dark:text-white border border-[#E2D7C5] dark:border-white/[0.08] hover:border-[#721C35]/50 dark:hover:border-[#F28C28]/50 transition-all duration-200 shadow-md shadow-[#721C35]/5 dark:shadow-lg dark:shadow-black/25 hover:shadow-[#721C35]/15 dark:hover:shadow-orange-950/20 cursor-pointer group"
            >
              <span>{isExpanded ? 'Show Less' : 'Show All Certifications'}</span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 text-[#721C35] dark:text-[#F28C28] transition-transform group-hover:-translate-y-0.5" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#721C35] dark:text-[#F28C28] transition-transform group-hover:translate-y-0.5" />
              )}
            </button>
            <p className="mt-2.5 text-xs text-[#7E7267] dark:text-slate-500 font-mono">
              {isExpanded
                ? 'Displaying all 7 verified certificates'
                : 'Showing 4 featured certificates · 3 more available'}
            </p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};
