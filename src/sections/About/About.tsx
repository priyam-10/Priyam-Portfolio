import { motion } from 'framer-motion';
import {
  Brain,
  BarChart3,
  Database,
  MapPin,
  Target,
  GraduationCap,
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
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[#721C35]/4 dark:bg-[#F28C28]/4 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl 2xl:max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10">
        <SectionHeading
          badge="WHO I AM"
          title="About Me"
          subtitle="Turning Data Into Meaningful Insights"
          className="mb-8 sm:mb-10 lg:mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-start">
          {/* Left Column: Personal Introduction (Primary Editorial Narrative) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-7 xl:col-span-7 space-y-4 sm:space-y-4.5 max-w-2xl"
          >
            {/* Paragraph 1 */}
            <motion.p
              variants={fadeInUp}
              className="text-[15px] sm:text-base text-[#5C524A] dark:text-slate-300 leading-[1.75] font-normal"
            >
              I am <span className="text-[#29231F] dark:text-white font-semibold">Priyam Singh</span>, a Computer
              Science undergraduate focused on{' '}
              <span className="text-[#29231F] dark:text-white font-medium">Data Analytics</span>,{' '}
              <span className="text-[#29231F] dark:text-white font-medium">Machine Learning</span>, and{' '}
              <span className="text-[#29231F] dark:text-white font-medium">Business Intelligence</span>. I have a
              strong interest in working with data, developing predictive models, and applying
              analytical techniques to solve real-world problems.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              variants={fadeInUp}
              className="text-[15px] sm:text-base text-[#5C524A] dark:text-slate-300 leading-[1.75] font-normal"
            >
              My technical experience includes Python, SQL, Pandas, NumPy, Power BI, and
              Scikit-learn. I work across data preprocessing, exploratory data analysis,
              statistical analysis, data visualization, and machine learning techniques such as
              regression and classification.
            </motion.p>

            {/* Paragraph 3 */}
            <motion.p
              variants={fadeInUp}
              className="text-[15px] sm:text-base text-[#5C524A] dark:text-slate-300 leading-[1.75] font-normal"
            >
              I am particularly interested in the intersection of{' '}
              <span className="text-[#29231F] dark:text-white font-medium">Data Analytics and Machine Learning</span>—using
              data to uncover patterns, build predictive solutions, and generate insights that
              support smarter decision-making. Through hands-on projects and internship experience, I
              continue to strengthen my ability to develop practical, data-driven solutions.
            </motion.p>

            {/* Paragraph 4 */}
            <motion.p
              variants={fadeInUp}
              className="text-[15px] sm:text-base text-[#5C524A] dark:text-slate-300 leading-[1.75] font-normal"
            >
              My objective is to build a career in{' '}
              <span className="text-[#29231F] dark:text-white font-medium">Data Analytics and Machine Learning</span>,
              contributing to innovative projects that combine analytical thinking, programming, and
              intelligent technologies.
            </motion.p>

            {/* Core Career Interests */}
            <motion.div variants={fadeInUp} className="pt-4 sm:pt-5 border-t border-[#E2D7C5] dark:border-white/[0.08]">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#7E7267] dark:text-slate-400 mb-3 flex items-center gap-2">
                <Target className="w-3.5 h-3.5 text-[#721C35] dark:text-[#F28C28]" />
                <span>Core Career Interests</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {profileData.careerInterests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#FFFFFF] dark:bg-[#17151B] text-[#5C524A] dark:text-slate-300 border border-[#E2D7C5] dark:border-white/[0.08] hover:text-[#29231F] dark:hover:text-white hover:border-[#721C35]/40 dark:hover:border-[#F28C28]/40 hover:bg-[#721C35]/5 dark:hover:bg-[#F28C28]/5 transition-all shadow-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Refined Academic Snapshot & Focus Areas Panel */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-5 xl:col-span-5"
          >
            <motion.div
              variants={fadeInUp}
              className="rounded-2xl bg-[#FAF6EE]/95 dark:bg-[#111116]/95 border border-[#E2D7C5] dark:border-white/[0.08] hover:border-[#721C35]/40 dark:hover:border-[#A83250]/40 backdrop-blur-md shadow-lg shadow-[#721C35]/5 dark:shadow-xl dark:shadow-black/35 p-5 sm:p-6 transition-all duration-300 group"
            >
              {/* Part A: Academic Information */}
              <div className="pb-4">
                <div className="flex items-start justify-between gap-3 mb-1.5">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#721C35] dark:text-[#F28C28]">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Academic Foundation</span>
                  </span>
                  <span className="text-xs font-bold text-[#29231F] dark:text-white font-mono bg-[#FFFFFF] dark:bg-[#17151B] border border-[#E2D7C5] dark:border-white/[0.08] px-2.5 py-0.5 rounded-md shrink-0 shadow-sm shadow-[#721C35]/5 dark:shadow-[#481426]/20">
                    8.0 <span className="text-[10px] text-[#7E7267] dark:text-slate-400 font-normal">/ 10 CGPA</span>
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#29231F] dark:text-white tracking-tight">
                  3rd Year B.E. in Computer Science
                </h3>
                <p className="text-xs text-[#5C524A] dark:text-slate-400 mt-1 leading-snug">
                  Sagar Institute of Research and Technology–Excellence (SIRTE), Bhopal
                </p>

                {/* Location detail */}
                <div className="mt-3 pt-3 border-t border-[#E2D7C5]/70 dark:border-white/[0.06] flex items-center gap-2 text-xs text-[#5C524A] dark:text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-[#A83250] shrink-0" />
                  <span>Bhopal, Madhya Pradesh, India</span>
                </div>
              </div>

              {/* Part B: Professional Focus Areas */}
              <div className="pt-4 border-t border-[#E2D7C5] dark:border-white/[0.08]">
                <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#7E7267] dark:text-slate-400 mb-3">
                  Professional Focus Areas
                </h4>

                <div className="space-y-2.5">
                  {focusAreas.map((area, idx) => {
                    const Icon = area.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 rounded-xl bg-[#FFFFFF] dark:bg-[#17151B]/80 border border-[#E2D7C5] dark:border-white/[0.06] hover:border-[#721C35]/30 dark:hover:border-[#F28C28]/30 hover:bg-[#FDFBF7] dark:hover:bg-[#17151B] transition-all group/item shadow-sm dark:shadow-none"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#F5EFE5] dark:bg-[#221620] border border-[#E2D7C5] dark:border-[#721C35]/30 flex items-center justify-center text-[#721C35] dark:text-[#F28C28] shrink-0 mt-0.5 group-hover/item:border-[#721C35]/40 dark:group-hover/item:border-[#F28C28]/40 transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h5 className="text-sm font-semibold text-[#29231F] dark:text-white tracking-tight">
                            {area.title}
                          </h5>
                          <p className="text-xs text-[#5C524A] dark:text-slate-400 mt-0.5 leading-relaxed">
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
