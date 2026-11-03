import { motion } from 'framer-motion';
import { Calendar, MapPin, Check } from 'lucide-react';
import { educationData } from '../../data/education';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import { fadeInUp, staggerContainer } from '../../lib/animations';

export const Education = () => {
  const collegeItem = educationData.find((item) => item.id === 'sirte-btech') || educationData[0];
  const schoolItem = educationData.find((item) => item.id === 'rosemary-xii') || educationData[1];

  return (
    <section id="education" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 -right-48 w-80 h-80 bg-[#721C35]/4 dark:bg-[#F28C28]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Academic Background"
          title="Education"
          subtitle="Academic foundations in computer science, engineering, and quantitative sciences."
          className="mb-10 sm:mb-12 lg:mb-14"
        />

        {/* Academic Cards Grid (2 balanced cards side-by-side on desktop, stacked on mobile) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch"
        >
          {/* Card 1 — College: Primary Academic Profile */}
          <motion.article
            variants={fadeInUp}
            className="relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] dark:bg-[#111116]/95 border border-[#E2D7C5] dark:border-white/[0.08] hover:border-[#721C35]/40 dark:hover:border-[#F28C28]/40 hover:bg-[#FDFBF7] dark:hover:bg-[#17151B] transition-all duration-300 shadow-md shadow-[#721C35]/5 dark:shadow-xl dark:shadow-black/30 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#721C35]/12 dark:hover:shadow-2xl dark:hover:shadow-orange-950/20 group overflow-hidden h-full"
          >
            {/* Vibrant top-edge highlight for primary degree */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#721C35] via-[#A83250] to-[#481426] dark:from-[#F28C28] dark:via-[#A83250] dark:to-[#721C35] opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="flex flex-col flex-1 justify-between">
              <div>
                {/* 1. Small label & Current Status */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold tracking-wider uppercase bg-[#FAF6EE] dark:bg-[#1E1420] text-[#721C35] dark:text-[#FF9D32] border border-[#721C35]/30 dark:border-[#F28C28]/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#721C35] dark:bg-[#F28C28] animate-pulse" />
                    {collegeItem.typeLabel}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-[#FAF6EE] dark:bg-[#17151B] text-[#5C524A] dark:text-slate-200 border border-[#E2D7C5] dark:border-white/[0.08]">
                    3rd Year • Pursuing
                  </span>
                </div>

                {/* 2. Degree title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#29231F] dark:text-white tracking-tight group-hover:text-[#721C35] dark:group-hover:text-white transition-colors">
                  {collegeItem.degree}
                </h3>

                {/* 3. Institution name */}
                <div className="mt-2 text-sm sm:text-[15px] font-semibold text-[#5C524A] dark:text-slate-200 leading-snug">
                  {collegeItem.institution}
                </div>

                {/* 4. Duration and Location */}
                <div className="mt-2.5 flex flex-wrap items-center gap-3 text-xs text-[#7E7267] dark:text-slate-400">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#721C35] dark:text-[#F28C28]" />
                    {collegeItem.duration}
                  </span>
                  <span className="text-[#DCCDB7] dark:text-slate-600">•</span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#A83250]" />
                    {collegeItem.location}
                  </span>
                </div>

                {/* 5. Prominent Clean CGPA Display */}
                <div className="mt-5 p-3.5 rounded-xl bg-[#FAF6EE] dark:bg-[#17151B] border border-[#E2D7C5] dark:border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs font-medium text-[#5C524A] dark:text-slate-300">
                    Cumulative Performance
                  </span>
                  <div className="inline-flex items-baseline gap-1.5 px-3 py-1 rounded-lg bg-[#FFFFFF] dark:bg-[#481426]/30 border border-[#721C35]/25 dark:border-[#F28C28]/35 shadow-sm">
                    <span className="text-[11px] font-mono text-[#7E7267] dark:text-slate-400">CGPA</span>
                    <span className="text-base font-bold font-mono text-[#721C35] dark:text-[#FF9D32]">8.0</span>
                    <span className="text-xs font-mono text-[#7E7267] dark:text-slate-400">/ 10.0</span>
                  </div>
                </div>

                {/* 6. Academic Focus Areas as compact tags */}
                {collegeItem.focusAreas && (
                  <div className="mt-6 pt-5 border-t border-[#E2D7C5] dark:border-white/[0.06]">
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-[#7E7267] dark:text-slate-400 mb-3">
                      Academic Focus Areas
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {collegeItem.focusAreas.map((area) => (
                        <span
                          key={area}
                          className="px-2.5 py-1 text-xs font-medium rounded-lg bg-[#FAF6EE] dark:bg-[#17151B] text-[#5C524A] dark:text-slate-300 border border-[#E2D7C5] dark:border-white/[0.06] hover:border-[#721C35]/40 dark:hover:border-[#F28C28]/40 hover:text-[#721C35] dark:hover:text-white transition-colors"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.article>

          {/* Card 2 — School: Secondary Education */}
          <motion.article
            variants={fadeInUp}
            className="relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] dark:bg-[#111116]/95 border border-[#E2D7C5] dark:border-white/[0.08] hover:border-[#721C35]/40 dark:hover:border-[#A83250]/40 hover:bg-[#FDFBF7] dark:hover:bg-[#17151B] transition-all duration-300 shadow-md shadow-[#721C35]/5 dark:shadow-xl dark:shadow-black/30 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#721C35]/12 dark:hover:shadow-2xl dark:hover:shadow-black/35 group overflow-hidden h-full"
          >
            {/* Restrained top-edge highlight */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#721C35]/70 via-[#A83250]/60 to-[#481426]/50 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="flex flex-col flex-1 justify-between">
              <div>
                {/* 1. Small label & Completion status */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold tracking-wider uppercase bg-[#FAF6EE] dark:bg-[#17151B] text-[#5C524A] dark:text-slate-300 border border-[#E2D7C5] dark:border-white/[0.08]">
                    {schoolItem.typeLabel}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-[#FAF6EE] dark:bg-[#17151B] text-[#5C524A] dark:text-slate-200 border border-[#E2D7C5] dark:border-white/[0.08]">
                    {schoolItem.status}
                  </span>
                </div>

                {/* 2. Qualification title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#29231F] dark:text-white tracking-tight group-hover:text-[#721C35] dark:group-hover:text-white transition-colors">
                  {schoolItem.degree}
                </h3>

                {/* 3. School name */}
                <div className="mt-2 text-sm sm:text-[15px] font-semibold text-[#5C524A] dark:text-slate-200 leading-snug">
                  {schoolItem.institution}
                </div>

                {/* 4. Duration and Location */}
                <div className="mt-2.5 flex flex-wrap items-center gap-3 text-xs text-[#7E7267] dark:text-slate-400">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#7E7267] dark:text-slate-400" />
                    {schoolItem.duration}
                  </span>
                  <span className="text-[#DCCDB7] dark:text-slate-600">•</span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#A83250]" />
                    {schoolItem.location}
                  </span>
                </div>

                {/* 5. Stream + Prominent Academic Score Display */}
                <div className="mt-5 p-3.5 rounded-xl bg-[#FAF6EE] dark:bg-[#17151B] border border-[#E2D7C5] dark:border-white/[0.06] flex items-center justify-between">
                  <div>
                    <span className="block text-xs font-medium text-[#5C524A] dark:text-slate-300">
                      {schoolItem.stream}
                    </span>
                    <span className="text-[11px] font-mono text-[#7E7267] dark:text-slate-500">
                      Senior Secondary Aggregate
                    </span>
                  </div>
                  <div className="inline-flex items-baseline gap-1.5 px-3 py-1 rounded-lg bg-[#FFFFFF] dark:bg-[#481426]/25 border border-[#721C35]/25 dark:border-[#F28C28]/30 shadow-sm">
                    <span className="text-[11px] font-mono text-[#7E7267] dark:text-slate-400">Score</span>
                    <span className="text-base sm:text-lg font-bold font-mono text-[#721C35] dark:text-[#FF9D32]">{schoolItem.scoreValue}</span>
                  </div>
                </div>

                {/* 6. Academic Highlights */}
                {schoolItem.highlights && (
                  <div className="mt-6 pt-5 border-t border-[#E2D7C5] dark:border-white/[0.06]">
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-[#7E7267] dark:text-slate-400 mb-3">
                      Academic Highlights
                    </span>
                    <ul className="space-y-3">
                      {schoolItem.highlights.map((highlight, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#5C524A] dark:text-slate-300 leading-relaxed"
                        >
                          <span className="p-1 rounded-md bg-[#FAF6EE] dark:bg-[#221620] border border-[#E2D7C5] dark:border-[#F28C28]/20 text-[#721C35] dark:text-[#F28C28] mt-0.5 shrink-0 shadow-sm dark:shadow-none">
                            <Check className="w-3 h-3 text-[#721C35] dark:text-[#F28C28]" />
                          </span>
                          <span className="text-[#5C524A] dark:text-slate-300/90 font-normal">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
};
