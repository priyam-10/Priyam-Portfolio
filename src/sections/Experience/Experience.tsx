import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../../data/experience';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import { fadeInUp, staggerContainer } from '../../lib/animations';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Work History"
          title="Professional Experience"
          subtitle="Practical industry experience delivering analytics, data insights, and AI-assisted research."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="relative border-l-2 border-[#202535] ml-4 md:ml-32 space-y-12"
        >
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              variants={fadeInUp}
              className="relative pl-8 md:pl-10 group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#121520] border-2 border-[#FF8C00] group-hover:bg-[#FF8C00] group-hover:scale-125 transition-all duration-300" />

              {/* Date tag for large screens (placed on left) */}
              <div className="hidden md:block absolute -left-36 top-1 text-right w-28">
                <span className="text-xs font-mono font-semibold text-[#FF8C00]">
                  {exp.duration}
                </span>
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#121520] border border-[#202535] group-hover:border-[#FF8C00]/40 group-hover:shadow-xl group-hover:shadow-orange-500/5 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-[#181D2A] border border-[#252D40] text-[#FF8C00]">
                      <Briefcase className="w-4 h-4" />
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {exp.position}
                    </h3>
                  </div>

                  {/* Mobile duration indicator */}
                  <span className="md:hidden inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono bg-[#181D2A] text-[#FF8C00] border border-[#252D40]">
                    <Calendar className="w-3 h-3" />
                    {exp.duration}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 mb-5">
                  <span className="font-semibold text-slate-200">
                    {exp.organization}
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-[#FF3D71]" />
                    {exp.workMode}
                  </span>
                </div>

                {/* Responsibilities list */}
                <ul className="space-y-2.5">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li
                      key={rIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 pt-4 border-t border-[#1C2230] flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Internship Experience {idx + 1} of 2</span>
                  <span className="text-emerald-400">Verified by Resume</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
