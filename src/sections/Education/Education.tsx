import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award, MapPin, Calendar } from 'lucide-react';
import { educationData } from '../../data/education';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import { fadeInUp, staggerContainer } from '../../lib/animations';

export const Education = () => {
  return (
    <section id="education" className="py-20 lg:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academic Background"
          title="Education"
          subtitle="Formal academic foundations in Computer Science, engineering fundamentals, and quantitative sciences."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {educationData.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="p-6 sm:p-8 rounded-2xl bg-[#121520] border border-[#222838] hover:border-[#FF8C00]/40 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF8C00]/15 to-[#FF3D71]/15 border border-[#FF8C00]/30 flex items-center justify-center text-[#FF8C00]">
                    {idx === 0 ? (
                      <GraduationCap className="w-5 h-5" />
                    ) : (
                      <BookOpen className="w-5 h-5" />
                    )}
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#181D2B] text-slate-300 border border-[#252E42]">
                    {item.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight">
                  {item.degree}
                </h3>

                <p className="mt-1 text-sm font-medium text-[#FF8C00]">
                  {item.institution}
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {item.duration}
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#FF3D71]" />
                    {item.location}
                  </span>
                </div>

                {/* Score highlight */}
                <div className="mt-5 p-3.5 rounded-xl bg-[#171B27] border border-[#262D40] flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#FF8C00]" />
                    {item.scoreLabel}
                  </span>
                  <span className="text-base font-extrabold text-white font-mono">
                    {item.scoreValue}
                  </span>
                </div>

                {/* Details */}
                {item.details && (
                  <ul className="mt-5 space-y-2">
                    {item.details.map((detail, dIdx) => (
                      <li
                        key={dIdx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-slate-400"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF8C00] mt-1.5 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-[#1C2230] text-[11px] font-mono text-slate-500">
                SIRTE Bhopal • Affiliated Institution
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

