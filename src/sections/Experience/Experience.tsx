import { motion } from 'framer-motion';
import { Calendar, Building2, Check } from 'lucide-react';
import { experienceData } from '../../data/experience';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import { fadeInUp, staggerContainer } from '../../lib/animations';

export const Experience = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 -right-48 w-80 h-80 bg-[#721C35]/4 dark:bg-[#F28C28]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Work History"
          title="Professional Experience"
          subtitle="Building practical experience through data analytics, problem-solving, and AI-assisted research."
          className="mb-10 sm:mb-12 lg:mb-14"
        />

        {/* Editorial Experience Cards Grid (2 equal columns on desktop, stacked on mobile/tablet) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch"
        >
          {experienceData.map((exp) => (
            <motion.article
              key={exp.id}
              variants={fadeInUp}
              className="relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] dark:bg-[#111116]/95 border border-[#E2D7C5] dark:border-white/[0.08] hover:border-[#721C35]/40 dark:hover:border-[#F28C28]/40 hover:bg-[#FDFBF7] dark:hover:bg-[#17151B] transition-all duration-300 shadow-md shadow-[#721C35]/5 dark:shadow-xl dark:shadow-black/30 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#721C35]/12 dark:hover:shadow-2xl dark:hover:shadow-black/45 group overflow-hidden h-full"
            >
              {/* Restrained top-edge highlight bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#721C35] via-[#A83250] to-[#481426] dark:from-[#F28C28] dark:via-[#A83250] dark:to-[#721C35] opacity-85 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* 1. Date label at the top & Remote status */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4 sm:mb-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-[#FAF6EE] dark:bg-[#17151B] text-[#721C35] dark:text-[#FF9D32] border border-[#721C35]/30 dark:border-[#F28C28]/35 shadow-sm shadow-[#721C35]/5 dark:shadow-[#481426]/20">
                    <Calendar className="w-3.5 h-3.5 text-[#721C35] dark:text-[#F28C28]" />
                    <span>{exp.duration}</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-[#FAF6EE] dark:bg-[#17151B] text-[#5C524A] dark:text-slate-300 border border-[#E2D7C5] dark:border-white/[0.08]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A83250]" />
                    <span>{exp.workMode}</span>
                  </span>
                </div>

                {/* 2. Role title as main heading */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#29231F] dark:text-white tracking-tight group-hover:text-[#721C35] dark:group-hover:text-white transition-colors">
                  {exp.position}
                </h3>

                {/* 3. Organization name */}
                <div className="mt-2 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#7E7267] dark:text-slate-400 shrink-0" />
                  <span className="text-sm sm:text-[15px] font-semibold text-[#5C524A] dark:text-slate-200">
                    {exp.organization}
                  </span>
                </div>

                {/* 4. Subtle divider */}
                <div className="my-5 sm:my-6 h-[1px] bg-gradient-to-r from-[#E2D7C5] dark:from-white/[0.08] via-[#E2D7C5]/50 dark:via-white/[0.04] to-transparent" />

                {/* 5. Responsibilities with clean check icons */}
                <ul className="space-y-3.5">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li
                      key={rIdx}
                      className="flex items-start gap-3 text-xs sm:text-[13px] lg:text-sm text-[#5C524A] dark:text-slate-300 leading-relaxed group/item"
                    >
                      <span className="p-1 rounded-md bg-[#FAF6EE] dark:bg-[#221620] border border-[#E2D7C5] dark:border-white/[0.08] text-[#721C35] dark:text-[#F28C28] mt-0.5 shrink-0 group-hover/item:border-[#721C35]/40 dark:group-hover/item:border-[#F28C28]/40 transition-colors shadow-sm">
                        <Check className="w-3 h-3 text-[#721C35] dark:text-[#F28C28]" />
                      </span>
                      <span className="text-[#5C524A] dark:text-slate-300/95 leading-relaxed font-normal">
                        {resp}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
