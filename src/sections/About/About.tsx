import { motion } from 'framer-motion';
import {
  Brain,
  BarChart3,
  Database,
  MapPin,
  GraduationCap,
  Sparkles,
  Target,
} from 'lucide-react';
import { profileData } from '../../data/profile';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import { fadeInUp, staggerContainer } from '../../lib/animations';

export const About = () => {
  const highlights = [
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
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Who I Am"
          title="About Me"
          subtitle="Turning Data Into Meaningful Insights"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Story & Narrative */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-7 space-y-5"
          >
            {profileData.aboutContent.map((paragraph, idx) => (
              <motion.p
                key={idx}
                variants={fadeInUp}
                className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal"
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Career Interests Tags */}
            <motion.div variants={fadeInUp} className="pt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Target className="w-4 h-4 text-[#FF8C00]" />
                Core Career Interests
              </h4>
              <div className="flex flex-wrap gap-2">
                {profileData.careerInterests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-[#161B28] border border-[#262C3E] text-slate-200 hover:border-[#FF8C00] transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Key Pillars & Quick Facts Card */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Quick Fact Box */}
            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-2xl bg-[#121520] border border-[#222838] shadow-xl relative overflow-hidden"
            >
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF8C00] mb-4">
                <Sparkles className="w-4 h-4" />
                <span>Quick Snapshot</span>
              </div>

              <div className="space-y-3.5 text-sm">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-[#FF8C00] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-slate-400">Current Academic Standing</p>
                    <p className="font-semibold text-white">
                      3rd Year B.E. in Computer Science
                    </p>
                    <p className="text-xs text-slate-400">SIRTE, Bhopal (CGPA: 8.0)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-[#1C2230]">
                  <MapPin className="w-4 h-4 text-[#FF3D71] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-slate-400">Location</p>
                    <p className="font-semibold text-white">Bhopal, Madhya Pradesh, India</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Three Pillar Cards */}
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="p-4 rounded-xl bg-[#121520] border border-[#202534] hover:border-[#FF8C00]/40 transition-all flex items-start gap-3.5"
                >
                  <div className="p-2.5 rounded-lg bg-[#181D2B] border border-[#252D40] text-[#FF8C00] shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-tight">
                      {h.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">{h.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

