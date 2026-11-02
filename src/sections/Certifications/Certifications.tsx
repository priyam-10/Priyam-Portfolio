import { useState } from 'react';
import { motion } from 'framer-motion';
import { certificationsData } from '../../data/certifications';
import type { CertificationItem } from '../../types';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import { CertificateCard } from '../../components/CertificateCard/CertificateCard';
import { CertificateModal } from '../../components/Modal/CertificateModal';
import { staggerContainer } from '../../lib/animations';

export const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Credentials"
          title="Certifications & Professional Learning"
          subtitle="Continuous Learning and Skill Development"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {certificationsData.map((cert) => (
            <CertificateCard
              key={cert.id}
              certificate={cert}
              onOpenModal={(c) => setSelectedCert(c)}
            />
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};

