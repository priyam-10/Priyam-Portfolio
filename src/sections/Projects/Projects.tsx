import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../../data/projects';
import type { ProjectItem } from '../../types';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { ProjectModal } from '../../components/Modal/ProjectModal';
import { staggerContainer } from '../../lib/animations';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  // Categories present across the verified projects
  const filterCategories = [
    { label: 'All', value: 'All' },
    { label: 'Machine Learning', value: 'Machine Learning' },
    { label: 'Data Analytics', value: 'Data Analytics' },
    { label: 'Business Intelligence', value: 'Business Intelligence' },
    { label: 'Exploratory Data Analysis', value: 'Exploratory Data Analysis' },
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

  // Filtered project list (All 7 visible by default)
  const displayedProjects = useMemo(() => {
    if (activeFilter === 'All') return projectsData;
    return projectsData.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-[#FF8C00]/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-[#FF3D71]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10">
        <SectionHeading
          badge="Portfolio Gallery"
          title="Selected Projects"
          subtitle="Practical applications of data analytics, machine learning, and intelligent technologies."
          className="mb-8 sm:mb-10 lg:mb-12"
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8 sm:mb-10">
          {filterCategories.map((tab) => {
            const count = categoryCounts[tab.value] || 0;
            const isActive = activeFilter === tab.value;

            return (
              <button
                key={tab.value}
                type="button"
                onClick={() => setActiveFilter(tab.value)}
                className={`inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer select-none ${
                  isActive
                    ? 'bg-[#181D2C] text-[#FF8C00] border border-[#FF8C00]/40 shadow-sm'
                    : 'bg-[#10131E]/80 text-slate-400 hover:text-white border border-white/[0.06] hover:border-white/[0.12] hover:bg-[#141824]'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`font-mono text-[10px] px-1.5 py-0.2 rounded ${
                    isActive
                      ? 'bg-[#FF8C00]/20 text-[#FF8C00]'
                      : 'bg-white/[0.04] text-slate-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Responsive 3-Column Modern Editorial Gallery Grid */}
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

        {/* Gallery Baseline Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 font-mono">
            Showing {displayedProjects.length} of {projectsData.length} verified projects with open source repositories
          </p>
        </div>
      </div>

      {/* Detail Modal Window */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
