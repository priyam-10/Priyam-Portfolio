import { motion } from 'framer-motion';
import {
  Brain,
  BarChart3,
  Database,
  MapPin,
  Target,
  Sparkles,
} from 'lucide-react';
import { profileData } from '../../data/profile';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import { fadeInUp, staggerContainer } from '../../lib/animations';

export const About = () => {
  const focusAreas = [
    {
      icon: Database,
      title: 'Data Analytics & ETL',
      desc: 'Preprocessing, EDA, statistical analysis & actionable insights.',
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      desc: 'Classification, regression, predictive modeling & evaluation.',
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      desc: 'Interactive Power BI dashboards, DAX measures & visual storytelling.',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[#FF8C00]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-48 w-96 h-96 bg-[#FF3D71]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Container matching global max-width */}
      <div className="max-w-7xl 2xl:max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10">
        <SectionHeading
          badge="WHO I AM"
          title="About Me"
          subtitle="Turning Data Into Meaningful Insights"
          className="mb-8 sm:mb-10 lg:mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column: Personal Introduction (Primary Editorial Narrative) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-7 xl:col-span-7 space-y-4 sm:space-y-5"
          >
            {/* Paragraph 1 */}
            <motion.p
              variants={fadeInUp}
              className="text-[15px] sm:text-base lg:text-[16.5px] text-slate-300 leading-[1.75] font-normal"
            >
              I am <span className="text-white font-semibold">Priyam Singh</span>, a Computer
              Science undergraduate focused on{' '}
              <span className="text-white font-medium">Data Analytics</span>,{' '}
              <span className="text-white font-medium">Machine Learning</span>, and{' '}
              <span className="text-white font-medium">Business Intelligence</span>. I have a
              strong interest in working with data, developing predictive models, and applying
              analytical techniques to solve real-world problems.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              variants={fadeInUp}
              className="text-[15px] sm:text-base lg:text-[16.5px] text-slate-300 leading-[1.75] font-normal"
            >
              My technical experience includes{' '}
              <span className="text-[#FF8C00] font-medium">Python</span>,{' '}
              <span className="text-[#FF8C00] font-medium">SQL</span>,{' '}
              <span className="text-white font-medium">Pandas</span>,{' '}
              <span className="text-white font-medium">NumPy</span>,{' '}
              <span className="text-white font-medium">Power BI</span>, and{' '}
              <span className="text-white font-medium">Scikit-learn</span>. I work across data
              preprocessing, exploratory data analysis, statistical analysis, data visualization,
              and machine learning techniques such as regression and classification.
            </motion.p>

            {/* Paragraph 3 */}
            <motion.p
              variants={fadeInUp}
              className="text-[15px] sm:text-base lg:text-[16.5px] text-slate-300 leading-[1.75] font-normal"
            >
              I am particularly interested in the intersection of{' '}
              <span className="text-white font-medium">Data Analytics and Machine Learning</span>—using
              data to uncover patterns, build predictive solutions, and generate insights that
              support smarter decision-making. Through hands-on projects and internship experience, I
              continue to strengthen my ability to develop practical, data-driven solutions.
            </motion.p>

            {/* Paragraph 4 */}
            <motion.p
              variants={fadeInUp}
              className="text-[15px] sm:text-base lg:text-[16.5px] text-slate-300 leading-[1.75] font-normal"
            >
              My objective is to build a career in{' '}
              <span className="text-white font-medium">Data Analytics and Machine Learning</span>,
              contributing to innovative projects that combine analytical thinking, programming, and
              intelligent technologies.
            </motion.p>

            {/* Core Career Interests (Refined, visually connected) */}
            <motion.div variants={fadeInUp} className="pt-3 sm:pt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Target className="w-3.5 h-3.5 text-[#FF8C00]" />
                <span>Core Career Interests</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {profileData.careerInterests.map((interest) => (
                  <span
                    key={interest}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#121522] border border-white/[0.08] text-slate-200 hover:border-[#FF8C00]/50 hover:text-white transition-all shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF8C00]" />
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Unified Professional Profile Snapshot & Focus Areas */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-5 xl:col-span-5"
          >
            <motion.div
              variants={fadeInUp}
              className="rounded-2xl bg-[#10131E]/80 border border-white/[0.08] backdrop-blur-md shadow-xl shadow-black/30 p-6 sm:p-7 relative overflow-hidden"
            >
              {/* Subtle top ambient glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF8C00]/5 rounded-full blur-3xl pointer-events-none" />

              {/* Part A: Academic Standing (Primary Item) */}
              <div className="pb-5 border-b border-white/[0.07] relative z-10">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#FF8C00]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Academic Standing</span>
                  </span>
                  <span className="text-xs font-bold text-white font-mono bg-[#161B27] border border-[#252E40] px-2.5 py-1 rounded-lg shrink-0">
                    CGPA: 8.0 <span className="text-[10px] text-slate-400 font-normal">/ 10</span>
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  3rd Year B.E. in Computer Science
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-400 mt-1 leading-snug">
                  Sagar Institute of Research and Technology–Excellence (SIRTE), Bhopal
                </p>
              </div>

              {/* Location (Secondary Detail) */}
              <div className="py-3.5 border-b border-white/[0.07] flex items-center gap-2.5 text-xs text-slate-300 relative z-10">
                <MapPin className="w-3.5 h-3.5 text-[#FF3D71] shrink-0" />
                <span>
                  Location:{' '}
                  <strong className="text-white font-medium">Bhopal, Madhya Pradesh, India</strong>
                </span>
              </div>

              {/* Part B: Professional Focus Areas (Refined Vertical List) */}
              <div className="pt-5 relative z-10">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3.5">
                  Professional Focus Areas
                </h4>

                <div className="divide-y divide-white/[0.06]">
                  {focusAreas.map((area, idx) => {
                    const Icon = area.icon;
                    return (
                      <div
                        key={idx}
                        className="py-3.5 first:pt-1 last:pb-1 flex items-start gap-3.5 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#161B27] border border-[#242C3E] group-hover:border-[#FF8C00]/50 flex items-center justify-center text-[#FF8C00] shrink-0 transition-colors mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h5 className="text-sm font-bold text-white tracking-tight group-hover:text-[#FF8C00] transition-colors">
                            {area.title}
                          </h5>
                          <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                            {area.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
