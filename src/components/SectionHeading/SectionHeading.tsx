import { motion } from 'framer-motion';
import { fadeInUp } from '../../lib/animations';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading = ({
  badge,
  title,
  subtitle,
  centered = true,
  className = '',
}: SectionHeadingProps) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={`mb-10 sm:mb-12 ${centered ? 'text-center' : 'text-left'} ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 border border-[#721C35]/25 dark:border-[#F28C28]/35 bg-[#721C35]/8 dark:bg-[#481426]/35 text-[#721C35] dark:text-[#FF9D32] shadow-sm shadow-[#721C35]/5 dark:shadow-[#481426]/30 ${
            centered ? 'mx-auto' : ''
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#721C35] dark:bg-[#F28C28] animate-pulse" />
          <span>{badge}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#29231F] dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-[#5C524A] dark:text-slate-400 max-w-2xl mx-auto font-normal">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#721C35] via-[#A83250] to-[#481426] dark:from-[#F28C28] dark:via-[#A83250] dark:to-[#721C35] ${
          centered ? 'mx-auto' : ''
        }`}
      />
    </motion.div>
  );
};
