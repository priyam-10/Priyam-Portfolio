import { motion } from 'framer-motion';
import {
  Code2,
  Brain,
  BarChart3,
  Database,
  Sigma,
  Server,
  Terminal,
  TrendingUp,
  Target,
  Network,
  CheckCircle2,
  Sliders,
  Sparkles,
  Calculator,
  FileSpreadsheet,
  LineChart,
  PieChart,
  LayoutDashboard,
  Eye,
  Table,
  Binary,
  Filter,
  Search,
  Percent,
  FlaskConical,
  Zap,
  AppWindow,
  Globe,
  BookOpen,
  GitBranch,
  Github,
  type LucideIcon,
} from 'lucide-react';
import { skillCategories } from '../../data/skills';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import { fadeInUp, staggerContainer } from '../../lib/animations';

export const Skills = () => {
  // Category-level icons mapping
  const categoryIcons: Record<string, LucideIcon> = {
    'Programming Languages': Code2,
    'Machine Learning': Brain,
    'Business Intelligence & Data Visualization': BarChart3,
    'Data Analysis & Manipulation': Database,
    Statistics: Sigma,
    'Backend Development': Server,
    'Development Tools': Terminal,
  };

  // Skill-level micro-icons mapping for tasteful, scannable tags
  const skillIcons: Record<string, LucideIcon> = {
    // Programming Languages
    Python: Code2,
    SQL: Database,

    // Machine Learning
    'Scikit-learn': Brain,
    Regression: TrendingUp,
    Classification: Target,
    Clustering: Network,
    'Model Evaluation': CheckCircle2,
    'Feature Scaling': Sliders,
    'Predictive Modeling': Sparkles,

    // Business Intelligence & Data Visualization
    'Power BI': BarChart3,
    'Power Query': Database,
    DAX: Calculator,
    'Microsoft Excel': FileSpreadsheet,
    Matplotlib: LineChart,
    Seaborn: PieChart,
    'Dashboard Development': LayoutDashboard,
    'Data Visualization': Eye,

    // Data Analysis & Manipulation
    Pandas: Table,
    NumPy: Binary,
    'Data Cleaning': Filter,
    'Exploratory Data Analysis': Search,
    'Data Preprocessing': Sliders,

    // Statistics
    'Descriptive Statistics': Calculator,
    Probability: Percent,
    'Hypothesis Testing': FlaskConical,
    'Correlation Analysis': TrendingUp,

    // Backend Development
    FastAPI: Zap,
    Streamlit: AppWindow,
    'REST APIs': Globe,

    // Development Tools
    'Jupyter Notebook': BookOpen,
    Git: GitBranch,
    GitHub: Github,
  };

  // Responsive bento grid layout classes
  // Row 1: Programming Languages (1 col) + Machine Learning (2 cols) = 3 cols
  // Row 2: BI & Data Visualization (2 cols) + Data Analysis (1 col) = 3 cols
  // Row 3: Statistics (1 col) + Backend Development (1 col) + Development Tools (1 col) = 3 cols
  const getCategoryLayoutClasses = (index: number) => {
    switch (index) {
      case 0: // Programming Languages
        return 'col-span-1 md:col-span-1 lg:col-span-1';
      case 1: // Machine Learning
        return 'col-span-1 md:col-span-1 lg:col-span-2';
      case 2: // Business Intelligence & Data Visualization
        return 'col-span-1 md:col-span-1 lg:col-span-2';
      case 3: // Data Analysis & Manipulation
        return 'col-span-1 md:col-span-1 lg:col-span-1';
      case 4: // Statistics
        return 'col-span-1 md:col-span-1 lg:col-span-1';
      case 5: // Backend Development
        return 'col-span-1 md:col-span-1 lg:col-span-1';
      case 6: // Development Tools
        return 'col-span-1 md:col-span-2 lg:col-span-1';
      default:
        return 'col-span-1';
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#FF8C00]/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#FF3D71]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10">
        <SectionHeading
          badge="Technical Competencies"
          title="Skills & Technologies"
          subtitle="Technical skills and tools I use to analyze data, build predictive solutions, and develop practical applications."
          className="mb-8 sm:mb-10 lg:mb-12"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 items-stretch"
        >
          {skillCategories.map((category, idx) => {
            const CategoryIcon = categoryIcons[category.title] || Code2;
            const layoutClasses = getCategoryLayoutClasses(idx);

            return (
              <motion.div
                key={category.title}
                variants={fadeInUp}
                className={`group relative rounded-2xl bg-[#10131E]/85 border border-white/[0.07] backdrop-blur-md p-5 sm:p-6 transition-all duration-300 hover:border-white/[0.14] hover:bg-[#121624] shadow-lg shadow-black/20 flex flex-col justify-between ${layoutClasses}`}
              >
                {/* Subtle top-corner illumination */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#FF8C00]/3 rounded-full blur-2xl pointer-events-none group-hover:bg-[#FF8C00]/6 transition-all duration-300" />

                <div className="relative z-10">
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-3 mb-1.5">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-[#151926] border border-[#232B3C] text-[#FF8C00] group-hover:border-[#FF8C00]/40 transition-colors flex items-center justify-center shrink-0">
                        <CategoryIcon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-[15px] sm:text-base font-bold text-white tracking-tight truncate">
                          {category.title}
                        </h3>
                        {category.description && (
                          <p className="text-xs text-slate-400 mt-0.5 line-clamp-1 leading-snug font-normal">
                            {category.description}
                          </p>
                        )}
                      </div>
                    </div>
                    <span className="text-[11px] font-mono font-medium text-slate-400 bg-[#161B27] border border-[#242C3E] px-2 py-0.5 rounded-md shrink-0">
                      {category.skills.length} skills
                    </span>
                  </div>

                  {/* Subtle divider */}
                  <div className="mt-3.5 mb-4 border-t border-white/[0.06]" />

                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2 sm:gap-2.5 items-center">
                    {category.skills.map((skill) => {
                      const SkillIcon = skillIcons[skill] || CheckCircle2;
                      return (
                        <div
                          key={skill}
                          className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-lg text-xs sm:text-[13px] font-medium bg-[#141824] text-slate-300 border border-white/[0.06] hover:bg-[#1A2030] hover:text-white hover:border-white/[0.14] transition-all duration-200 select-none group/tag"
                        >
                          <SkillIcon className="w-3.5 h-3.5 text-slate-400 group-hover/tag:text-[#FF8C00] transition-colors shrink-0" />
                          <span className="leading-tight">{skill}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
