import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, ChevronDown, ChevronUp } from 'lucide-react';
import { projectsData } from '../../data/projects';
import type { ProjectItem } from '../../types';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { ProjectModal } from '../../components/Modal/ProjectModal';
import { Button } from '../../components/Buttons/Button';
import { staggerContainer } from '../../lib/animations';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [showAll, setShowAll] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filterOptions = [
    'All',
    'Machine Learning',
    'Data Analytics',
    'Business Intelligence',
    'Artificial Intelligence',
    'Hackathon',
  ];

  // Base list depending on "showAll"
  const baseProjects = showAll
    ? projectsData
    : projectsData.filter((p) => p.featured);

  // Apply category filtering
  const filteredProjects =
    selectedFilter === 'All'
      ? baseProjects
      : projectsData.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Portfolio"
          title="Featured Projects"
          subtitle="Turning Ideas into Data-Driven Solutions"
        />

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setSelectedFilter(option)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                selectedFilter === option
                  ? 'bg-gradient-to-r from-[#FF8C00] to-[#FF3D71] text-white shadow-md shadow-orange-500/20'
                  : 'bg-[#141824] text-slate-400 hover:text-white border border-[#222838]'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={(p) => setSelectedProject(p)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects Interaction Toggle */}
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="md"
            onClick={() => {
              setShowAll(!showAll);
              if (showAll) {
                setSelectedFilter('All');
              }
            }}
            leftIcon={<Layers className="w-4 h-4 text-[#FF8C00]" />}
            rightIcon={
              showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
            }
          >
            {showAll ? 'Show Featured Only' : `View All 7 Verified Projects`}
          </Button>
          <p className="mt-2 text-xs text-slate-500 font-mono">
            Directly inspecting all public repositories & analytical case studies
          </p>
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
