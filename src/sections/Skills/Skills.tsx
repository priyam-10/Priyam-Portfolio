import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  Code2,
  Database,
  BarChart3,
  Sigma,
  Brain,
  Server,
  Terminal,
  Table,
  Binary,
  Filter,
  Search,
  Sliders,
  Calculator,
  Percent,
  FlaskConical,
  TrendingUp,
  Target,
  Network,
  CheckCircle2,
  Sparkles,
  FileSpreadsheet,
  LineChart,
  PieChart,
  LayoutDashboard,
  Eye,
  Zap,
  AppWindow,
  Globe,
  BookOpen,
  GitBranch,
  Github,
  ChevronRight,
  type LucideIcon,
} from 'lucide-react';
import { skillCategories, coreTechnologyStack } from '../../data/skills';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import { fadeInUp, staggerContainer } from '../../lib/animations';

export const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  // Category-level icons mapping
  const categoryIcons: Record<string, LucideIcon> = {
    'Programming Languages': Code2,
    'Data Analysis & Manipulation': Database,
    'Business Intelligence & Data Visualization': BarChart3,
    Statistics: Sigma,
    'Machine Learning': Brain,
    'Backend Development': Server,
    'Development Tools': Terminal,
  };

  // Skill-level micro-icons mapping for tasteful, scannable tags
  const skillIcons: Record<string, LucideIcon> = {
    // 01 — Programming Languages
    Python: Code2,
    SQL: Database,

    // 02 — Data Analysis & Manipulation
    Pandas: Table,
    NumPy: Binary,
    'Data Cleaning': Filter,
    'Exploratory Data Analysis': Search,
    'Data Preprocessing': Sliders,

    // 03 — Business Intelligence & Data Visualization
    'Power BI': BarChart3,
    'Power Query': Database,
    DAX: Calculator,
    'Microsoft Excel': FileSpreadsheet,
    Matplotlib: LineChart,
    Seaborn: PieChart,
    'Dashboard Development': LayoutDashboard,
    'Data Visualization': Eye,

    // 04 — Statistics
    'Descriptive Statistics': Calculator,
    Probability: Percent,
    'Hypothesis Testing': FlaskConical,
    'Correlation Analysis': TrendingUp,

    // 05 — Machine Learning
    'Scikit-learn': Brain,
    Regression: TrendingUp,
    Classification: Target,
    Clustering: Network,
    'Model Evaluation': CheckCircle2,
    'Feature Scaling': Sliders,
    'Predictive Modeling': Sparkles,

    // 06 — Backend Development
    FastAPI: Zap,
    Streamlit: AppWindow,
    'REST APIs': Globe,

    // 07 — Development Tools
    'Jupyter Notebook': BookOpen,
    Git: GitBranch,
    GitHub: Github,
  };

  const activeCategory = skillCategories[activeIndex] || skillCategories[0];

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = (index + 1) % skillCategories.length;
      setActiveIndex(nextIndex);
      const nextButton = document.getElementById(`tab-${nextIndex}`);
      nextButton?.focus();
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = (index - 1 + skillCategories.length) % skillCategories.length;
      setActiveIndex(prevIndex);
      const prevButton = document.getElementById(`tab-${prevIndex}`);
      prevButton?.focus();
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#FF8C00]/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#FF3D71]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10">
        <SectionHeading
          badge="Expertise Map"
          title="Skills & Technologies"
          subtitle="Technical skills and tools I use to analyze data, build predictive solutions, and develop practical applications."
          className="mb-8 sm:mb-10 lg:mb-12"
        />

        {/* Structured Two-Part Technical Expertise Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-start">
          {/* LEFT SIDE — Expertise Navigation */}
          <div
            role="tablist"
            aria-label="Skill Categories"
            className="lg:col-span-5 xl:col-span-4 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-3 lg:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory"
          >
            {skillCategories.map((category, idx) => {
              const Icon = categoryIcons[category.title] || Code2;
              const isActive = activeIndex === idx;

              return (
                <button
                  key={category.title}
                  role="tab"
                  id={`tab-${idx}`}
                  aria-controls={`panel-${idx}`}
                  aria-selected={isActive}
                  tabIndex={0}
                  onClick={() => setActiveIndex(idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className={`group relative text-left w-full shrink-0 lg:shrink flex items-center justify-between gap-3 px-3.5 py-3 rounded-xl border transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#FF8C00] select-none snap-start ${
                    isActive
                      ? 'bg-[#151926] border-[#FF8C00]/40 text-white shadow-md shadow-black/20'
                      : 'bg-[#10131E]/60 border-white/[0.05] text-slate-400 hover:text-slate-200 hover:bg-[#131622] hover:border-white/[0.1]'
                  }`}
                >
                  {/* Subtle active indicator bar */}
                  {isActive && (
                    <span className="hidden lg:block absolute left-0 top-2 bottom-2 w-1 bg-gradient-to-b from-[#FF8C00] to-[#FF3D71] rounded-r" />
                  )}

                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={`font-mono text-xs font-bold transition-colors ${
                        isActive ? 'text-[#FF8C00]' : 'text-slate-500 group-hover:text-slate-400'
                      }`}
                    >
                      {category.number}
                    </span>

                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors shrink-0 ${
                        isActive
                          ? 'bg-[#FF8C00]/15 text-[#FF8C00] border border-[#FF8C00]/30'
                          : 'bg-[#161A26] text-slate-400 border border-white/[0.05] group-hover:text-slate-300'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>

                    <span
                      className={`text-sm font-semibold tracking-tight whitespace-nowrap lg:whitespace-normal transition-colors ${
                        isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
                      }`}
                    >
                      {category.title}
                    </span>
                  </div>

                  <div className="hidden sm:flex items-center gap-2 shrink-0">
                    <span
                      className={`text-[11px] font-mono px-2 py-0.5 rounded transition-colors ${
                        isActive
                          ? 'bg-white/[0.08] text-slate-300 border border-white/[0.08]'
                          : 'bg-white/[0.03] text-slate-500 border border-white/[0.03]'
                      }`}
                    >
                      {category.skills.length}
                    </span>
                    <ChevronRight
                      className={`w-3.5 h-3.5 transition-transform ${
                        isActive
                          ? 'text-[#FF8C00] translate-x-0.5'
                          : 'text-slate-600 opacity-0 group-hover:opacity-100'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT SIDE — Skills Display */}
          <div className="lg:col-span-7 xl:col-span-8 min-h-[360px] sm:min-h-[380px] lg:min-h-[420px]">
            <div className="relative rounded-2xl bg-[#10131E]/85 border border-white/[0.08] backdrop-blur-md p-6 sm:p-8 lg:p-9 shadow-xl shadow-black/25 overflow-hidden flex flex-col justify-between min-h-full">
              {/* Subtle top ambient glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF8C00]/4 rounded-full blur-3xl pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory.title}
                  id={`panel-${activeIndex}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${activeIndex}`}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Panel Header */}
                    <div className="flex items-start justify-between gap-4 pb-5 border-b border-white/[0.07]">
                      <div>
                        <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#FF8C00] mb-1.5">
                          <span>Category {activeCategory.number}</span>
                          <span className="text-slate-600">/</span>
                          <span className="text-slate-400 font-normal">
                            {activeCategory.skills.length} Specialized Competencies
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                          {activeCategory.title}
                        </h3>
                        {activeCategory.description && (
                          <p className="text-sm sm:text-[15px] text-slate-300 mt-2 leading-relaxed max-w-2xl font-normal">
                            {activeCategory.description}
                          </p>
                        )}
                      </div>

                      <div className="hidden sm:flex flex-col items-end shrink-0">
                        <span className="text-2xl font-extrabold font-mono text-white">
                          {String(activeCategory.skills.length).padStart(2, '0')}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                          Skills
                        </span>
                      </div>
                    </div>

                    {/* Skills Display (Editorial layout) */}
                    <div className="pt-6">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                        <span>Tools, Frameworks & Methodologies</span>
                        <span className="h-px flex-1 bg-white/[0.05]" />
                      </h4>

                      <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-wrap gap-2.5 sm:gap-3"
                      >
                        {activeCategory.skills.map((skill) => {
                          const SkillIcon = skillIcons[skill] || CheckCircle2;
                          return (
                            <motion.div
                              key={skill}
                              variants={fadeInUp}
                              className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-[#141824] text-slate-200 border border-white/[0.07] hover:border-white/[0.18] hover:bg-[#181D2C] hover:text-white transition-all duration-200 group/tag shadow-sm select-none"
                            >
                              <div className="w-5 h-5 rounded-md bg-[#1B2130] border border-white/[0.06] flex items-center justify-center text-slate-400 group-hover/tag:text-[#FF8C00] group-hover/tag:border-[#FF8C00]/30 transition-colors shrink-0">
                                <SkillIcon className="w-3 h-3" />
                              </div>
                              <span className="text-xs sm:text-sm font-medium tracking-tight">
                                {skill}
                              </span>
                            </motion.div>
                          );
                        })}
                      </motion.div>
                    </div>
                  </div>

                  {/* Panel Footer Context */}
                  <div className="mt-8 pt-4 border-t border-white/[0.05] flex items-center justify-between text-xs text-slate-500 font-mono">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF8C00]" />
                      <span>Category {activeCategory.number} of 07</span>
                    </span>
                    <span className="text-slate-400">Technical Expertise Map</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Featured Technology Strip: Core Technology Stack */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mt-8 sm:mt-10 lg:mt-12 rounded-2xl bg-[#10131E]/70 border border-white/[0.07] backdrop-blur-sm p-5 sm:p-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FF8C00]" />
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                Core Technology Stack
              </h4>
            </div>
            <p className="text-xs text-slate-400">
              Primary technologies for analytics, predictive modeling & web APIs
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2.5 sm:gap-3">
            {coreTechnologyStack.map((tech, idx) => {
              const TechIcon = skillIcons[tech.name] || Code2;
              return (
                <div
                  key={tech.name}
                  className={`p-3 rounded-xl bg-[#131724] border border-white/[0.06] hover:border-[#FF8C00]/35 hover:bg-[#161C2C] transition-all group flex flex-col justify-between ${
                    idx === 6 ? 'col-span-2 sm:col-span-1' : ''
                  }`}
                >
                  <div className="flex items-center justify-between gap-1.5 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-[#181E2B] border border-white/[0.06] flex items-center justify-center text-[#FF8C00] group-hover:scale-105 transition-transform shrink-0">
                      <TechIcon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 bg-white/[0.03] px-1.5 py-0.5 rounded border border-white/[0.04]">
                      {tech.category}
                    </span>
                  </div>

                  <div>
                    <h5 className="text-sm font-bold text-white tracking-tight group-hover:text-[#FF8C00] transition-colors">
                      {tech.name}
                    </h5>
                    <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                      {tech.role}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
