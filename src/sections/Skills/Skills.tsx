import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  BarChart4,
  Sigma,
  Cpu,
  Server,
  Wrench,
} from 'lucide-react';
import { skillCategories } from '../../data/skills';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import { fadeInUp, staggerContainer } from '../../lib/animations';

export const Skills = () => {
  const categoryIcons: Record<string, typeof Code2> = {
    'Programming Languages': Code2,
    'Data Analysis and Manipulation': Database,
    'Business Intelligence and Data Visualization': BarChart4,
    Statistics: Sigma,
    'Machine Learning': Cpu,
    'Backend Development': Server,
    'Development Tools': Wrench,
  };

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Expertise"
          title="Skills & Technologies"
          subtitle="Specialized competencies across data analytics, machine learning, business intelligence, and APIs."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => {
            const Icon = categoryIcons[category.title] || Code2;
            const isHighlight =
              category.title === 'Machine Learning' ||
              category.title === 'Data Analysis and Manipulation';

            return (
              <motion.div
                key={category.title}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`p-6 rounded-2xl bg-[#121520] border transition-all duration-300 flex flex-col justify-between ${
                  isHighlight
                    ? 'border-[#FF8C00]/40 bg-gradient-to-b from-[#141824] to-[#11141E] shadow-lg shadow-orange-500/5'
                    : 'border-[#202535] hover:border-[#2E374D]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#181D2A] border border-[#262E40] flex items-center justify-center text-[#FF8C00]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                          skill === 'FastAPI' || skill === 'Python' || skill === 'Power BI'
                            ? 'bg-[#FF8C00]/15 text-[#FF8C00] border border-[#FF8C00]/30 font-semibold'
                            : 'bg-[#181C28] text-slate-300 border border-[#252C3D] hover:text-white hover:border-slate-500'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1C2230] flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>{category.skills.length} competencies</span>
                  <span className="text-[#FF8C00]">verified</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

