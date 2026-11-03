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
    'VS Code': AppWindow,
    Git: GitBranch,
    GitHub: Github,
  };

  const activeCategory = skillCategories[activeIndex];

  // Keyboard accessibility for tab navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % skillCategories.length);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + skillCategories.length) % skillCategories.length);
    } else if (e.key === 'Home') {
      e.preventDefault();
      setActiveIndex(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setActiveIndex(skillCategories.length - 1);
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#721C35]/4 dark:bg-[#F28C28]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10">
        <SectionHeading
          badge="Technical Skills"
          title="Skills & Technologies"
          subtitle="Explore my technical toolkit across data analytics, machine learning, business intelligence, and software tools."
          className="mb-10 sm:mb-12 lg:mb-14"
        />

        {/* Bento Grid Layout: Categories Navigation + Interactive Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* LEFT SIDE — Categories List */}
          <div
            role="tablist"
            aria-label="Skill Categories"
            className="lg:col-span-5 xl:col-span-4 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-none"
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
                  onKeyDown={handleKeyDown}
                  className={`group relative text-left w-full shrink-0 lg:shrink flex items-center justify-between gap-3 px-3.5 py-3 rounded-xl border transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#721C35] dark:focus-visible:ring-[#F28C28] select-none snap-start cursor-pointer ${
                    isActive
                      ? 'bg-[#FFFFFF] dark:bg-[#1E1420] border-[#721C35]/40 dark:border-[#F28C28]/45 text-[#29231F] dark:text-white shadow-md shadow-[#721C35]/5 dark:shadow-[#481426]/30'
                      : 'bg-[#FAF6EE]/80 dark:bg-[#111116]/80 border-[#E2D7C5] dark:border-white/[0.06] text-[#5C524A] dark:text-slate-400 hover:text-[#29231F] dark:hover:text-slate-200 hover:bg-[#FFFFFF] dark:hover:bg-[#17151B] hover:border-[#DCCDB7] dark:hover:border-white/[0.1]'
                  }`}
                >
                  {/* Subtle active indicator bar */}
                  {isActive && (
                    <span className="hidden lg:block absolute left-0 top-2 bottom-2 w-1 bg-gradient-to-b from-[#721C35] to-[#A83250] dark:from-[#F28C28] dark:to-[#A83250] rounded-r" />
                  )}

                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={`font-mono text-xs font-bold transition-colors ${
                        isActive ? 'text-[#721C35] dark:text-[#FF9D32]' : 'text-[#7E7267] dark:text-slate-500 group-hover:text-[#5C524A] dark:group-hover:text-slate-400'
                      }`}
                    >
                      {category.number}
                    </span>

                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors shrink-0 ${
                        isActive
                          ? 'bg-[#721C35]/10 dark:bg-[#481426]/60 text-[#721C35] dark:text-[#FF9D32] border border-[#721C35]/30 dark:border-[#F28C28]/40'
                          : 'bg-[#FFFFFF] dark:bg-[#17151B] text-[#5C524A] dark:text-slate-400 border border-[#E2D7C5] dark:border-white/[0.06] group-hover:text-[#29231F] dark:group-hover:text-slate-300'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>

                    <span
                      className={`text-sm font-semibold tracking-tight whitespace-nowrap lg:whitespace-normal transition-colors ${
                        isActive ? 'text-[#29231F] dark:text-white' : 'text-[#5C524A] dark:text-slate-300 group-hover:text-[#29231F] dark:group-hover:text-white'
                      }`}
                    >
                      {category.title}
                    </span>
                  </div>

                  <div className="hidden sm:flex items-center gap-2 shrink-0">
                    <span
                      className={`text-[11px] font-mono px-2 py-0.5 rounded transition-colors ${
                        isActive
                          ? 'bg-[#721C35]/8 dark:bg-white/[0.08] text-[#721C35] dark:text-slate-200 border border-[#721C35]/20 dark:border-white/[0.08]'
                          : 'bg-[#EAE1D2]/50 dark:bg-white/[0.03] text-[#7E7267] dark:text-slate-500 border border-[#E2D7C5] dark:border-white/[0.03]'
                      }`}
                    >
                      {category.skills.length}
                    </span>
                    <ChevronRight
                      className={`w-3.5 h-3.5 transition-transform ${
                        isActive
                          ? 'text-[#721C35] dark:text-[#F28C28] translate-x-0.5'
                          : 'text-[#7E7267] dark:text-slate-600 opacity-0 group-hover:opacity-100'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT SIDE — Skills Display */}
          <div className="lg:col-span-7 xl:col-span-8 min-h-[360px] sm:min-h-[380px] lg:min-h-[420px]">
            <div className="relative rounded-2xl bg-[#FAF6EE]/95 dark:bg-[#111116]/95 border border-[#E2D7C5] dark:border-white/[0.08] backdrop-blur-md p-6 sm:p-8 lg:p-9 shadow-lg shadow-[#721C35]/5 dark:shadow-2xl dark:shadow-black/35 overflow-hidden flex flex-col justify-between min-h-full">
              {/* Subtle top ambient glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#721C35]/4 dark:bg-[#F28C28]/4 rounded-full blur-3xl pointer-events-none" />

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
                    <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#E2D7C5] dark:border-white/[0.08]">
                      <div>
                        <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#721C35] dark:text-[#FF9D32] mb-1.5">
                          <span>Category {activeCategory.number}</span>
                          <span className="text-[#7E7267] dark:text-slate-600">/</span>
                          <span className="text-[#5C524A] dark:text-slate-400 font-normal">
                            {activeCategory.skills.length} Specialized Competencies
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#29231F] dark:text-white tracking-tight">
                          {activeCategory.title}
                        </h3>
                        {activeCategory.description && (
                          <p className="text-sm sm:text-[15px] text-[#5C524A] dark:text-slate-300 mt-2 leading-relaxed max-w-2xl font-normal">
                            {activeCategory.description}
                          </p>
                        )}
                      </div>

                      <div className="hidden sm:flex flex-col items-end shrink-0">
                        <span className="text-2xl font-extrabold font-mono text-[#29231F] dark:text-white">
                          {String(activeCategory.skills.length).padStart(2, '0')}
                        </span>
                        <span className="text-[11px] font-mono text-[#7E7267] dark:text-slate-400 uppercase tracking-wider">
                          Skills
                        </span>
                      </div>
                    </div>

                    {/* Skills Display (Editorial layout) */}
                    <div className="pt-6">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#7E7267] dark:text-slate-400 mb-4 flex items-center gap-2">
                        <span>Tools, Frameworks & Methodologies</span>
                        <span className="h-px flex-1 bg-[#E2D7C5] dark:bg-white/[0.06]" />
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
                              className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-[#FFFFFF] dark:bg-[#17151B] text-[#29231F] dark:text-slate-200 border border-[#E2D7C5] dark:border-white/[0.08] hover:border-[#721C35]/40 dark:hover:border-[#F28C28]/40 hover:bg-[#FDFBF7] dark:hover:bg-[#201826] hover:text-[#721C35] dark:hover:text-white hover:-translate-y-0.5 transition-all duration-200 group/tag shadow-sm select-none"
                            >
                              <div className="w-5 h-5 rounded-md bg-[#F5EFE5] dark:bg-[#221620] border border-[#E2D7C5] dark:border-[#721C35]/30 flex items-center justify-center text-[#5C524A] dark:text-slate-400 group-hover/tag:text-[#721C35] dark:group-hover/tag:text-[#FF9D32] group-hover/tag:border-[#721C35]/40 dark:group-hover/tag:border-[#F28C28]/40 transition-colors shrink-0">
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
                  <div className="mt-8 pt-4 border-t border-[#E2D7C5] dark:border-white/[0.06] flex items-center justify-between text-xs text-[#7E7267] dark:text-slate-500 font-mono">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#721C35] dark:bg-[#F28C28]" />
                      <span>Category {activeCategory.number} of 07</span>
                    </span>
                    <span className="text-[#5C524A] dark:text-slate-400">Technical Expertise Map</span>
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
          className="mt-8 sm:mt-10 lg:mt-12 rounded-2xl bg-[#FAF6EE]/95 dark:bg-[#111116]/95 border border-[#E2D7C5] dark:border-white/[0.07] backdrop-blur-sm p-5 sm:p-6 shadow-md shadow-[#721C35]/5 dark:shadow-xl dark:shadow-black/30"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-[#E2D7C5] dark:border-white/[0.06]">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#721C35] dark:text-[#FF9D32]" />
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#29231F] dark:text-white">
                Core Technology Stack
              </h4>
            </div>
            <p className="text-xs text-[#5C524A] dark:text-slate-400">
              Primary technologies for analytics, predictive modeling & web APIs
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2.5 sm:gap-3">
            {coreTechnologyStack.map((tech, idx) => {
              const TechIcon = skillIcons[tech.name] || Code2;
              return (
                <div
                  key={tech.name}
                  className={`p-3 rounded-xl bg-[#FFFFFF] dark:bg-[#17151B] border border-[#E2D7C5] dark:border-white/[0.06] hover:border-[#721C35]/40 dark:hover:border-[#F28C28]/35 hover:bg-[#FDFBF7] dark:hover:bg-[#1C1622] transition-all group flex flex-col justify-between shadow-sm dark:shadow-none ${
                    idx === 6 ? 'col-span-2 sm:col-span-1' : ''
                  }`}
                >
                  <div className="flex items-center justify-between gap-1.5 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-[#F5EFE5] dark:bg-[#221620] border border-[#E2D7C5] dark:border-white/[0.06] flex items-center justify-center text-[#721C35] dark:text-[#FF9D32] group-hover:scale-105 transition-transform shrink-0">
                      <TechIcon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] font-mono text-[#7E7267] dark:text-slate-400 bg-[#EAE1D2]/50 dark:bg-white/[0.03] px-1.5 py-0.5 rounded border border-[#E2D7C5] dark:border-white/[0.04]">
                      {tech.category}
                    </span>
                  </div>

                  <div>
                    <h5 className="text-sm font-bold text-[#29231F] dark:text-white tracking-tight group-hover:text-[#721C35] dark:group-hover:text-[#FF9D32] transition-colors">
                      {tech.name}
                    </h5>
                    <p className="text-[11px] text-[#5C524A] dark:text-slate-400 mt-0.5 leading-snug">
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
