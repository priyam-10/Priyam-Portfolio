import { motion } from 'framer-motion';
import { fadeInUp } from '../../lib/animations';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading = ({
  badge,
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : 'text-left'}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 border border-[#FF8C00]/30 bg-[#FF8C00]/10 text-[#FF8C00] ${
            centered ? 'mx-auto' : ''
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF8C00] animate-pulse" />
          {badge}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto font-normal">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#FF8C00] via-[#FF6A4D] to-[#FF3D71] ${
          centered ? 'mx-auto' : ''
        }`}
      />
    </motion.div>
  );
};

