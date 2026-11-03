import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { projectsData } from '../../data/projects';
import type { ProjectItem } from '../../types';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { ProjectModal } from '../../components/Modal/ProjectModal';
import { staggerContainer } from '../../lib/animations';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // Exactly 5 category filters as specified
  const filterCategories = [
    { label: 'All', value: 'All' },
    { label: 'Machine Learning', value: 'Machine Learning' },
    { label: 'Data Analytics', value: 'Data Analytics' },
    { label: 'Artificial Intelligence', value: 'Artificial Intelligence' },
    { label: 'Hackathon', value: 'Hackathon' },
  ];

  // Calculate project counts for each category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: projectsData.length };
    projectsData.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered & sliced project list:
  // - "All": initially 3 cards in 1 row on desktop, all 7 when expanded
  // - Category filter: displays ALL projects in that category without cutoff
  const displayedProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return isExpanded ? projectsData : projectsData.slice(0, 3);
    }
    return projectsData.filter((p) => p.category === activeFilter);
  }, [activeFilter, isExpanded]);

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    setIsExpanded(false);
  };

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-[#F28C28]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10">
        <SectionHeading
          badge="Featured Engineering"
          title="Projects & Practical Work"
          subtitle="Real-world applications of data analytics, machine learning, and intelligent technologies."
          className="mb-8 sm:mb-10 lg:mb-12"
        />

        {/* Category Filter Pills (Exactly 5 filters) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8 sm:mb-10">
          {filterCategories.map((tab) => {
            const count = categoryCounts[tab.value] || 0;
            const isActive = activeFilter === tab.value;

            return (
              <button
                key={tab.value}
                type="button"
                onClick={() => handleFilterChange(tab.value)}
                className={`inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer select-none ${
                  isActive
                    ? 'bg-[#1E1420] text-[#FF9D32] border border-[#F28C28]/45 shadow-sm shadow-[#481426]/30'
                    : 'bg-[#111116]/80 text-slate-400 hover:text-white border border-white/[0.06] hover:border-white/[0.12] hover:bg-[#17151B]'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`font-mono text-[10px] px-1.5 py-0.2 rounded ${
                    isActive
                      ? 'bg-[#481426]/70 text-[#FF9D32]'
                      : 'bg-white/[0.04] text-slate-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Clean 3-Column Modern Portfolio Gallery Grid (3 on desktop, 2 on tablet, 1 on mobile) */}
        <motion.div
          layout
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch"
        >
          <AnimatePresence>
            {displayedProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={(p) => setSelectedProject(p)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Expand / Collapse Button for "All" view */}
        {activeFilter === 'All' && projectsData.length > 3 && (
          <div className="mt-10 sm:mt-12 text-center">
            <button
              type="button"
              onClick={() => setIsExpanded((prev) => !prev)}
              aria-expanded={isExpanded}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-[#17151B] hover:bg-[#221824] text-white border border-white/[0.08] hover:border-[#F28C28]/50 transition-all duration-200 shadow-lg shadow-black/25 hover:shadow-[#F28C28]/15 cursor-pointer group"
            >
              <span>{isExpanded ? 'Show Less' : 'Show All Projects'}</span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 text-[#F28C28] transition-transform group-hover:-translate-y-0.5" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#F28C28] transition-transform group-hover:translate-y-0.5" />
              )}
            </button>
            <p className="mt-2.5 text-xs text-slate-500 font-mono">
              {isExpanded
                ? 'Displaying all 7 verified projects'
                : 'Showing 3 featured projects · 4 more available'}
            </p>
          </div>
        )}

        {/* Filter Category Summary Note */}
        {activeFilter !== 'All' && (
          <div className="mt-10 text-center">
            <p className="text-xs text-slate-500 font-mono">
              Displaying all {displayedProjects.length} {displayedProjects.length === 1 ? 'project' : 'projects'} in {activeFilter}
            </p>
          </div>
        )}
      </div>

      {/* Detail Modal Window */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
