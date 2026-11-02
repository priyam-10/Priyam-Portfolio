import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, Layers } from 'lucide-react';
import type { ProjectItem } from '../../types';
import { Button } from '../Buttons/Button';
import { fadeInUp } from '../../lib/animations';

interface ProjectCardProps {
  project: ProjectItem;
  onOpenModal: (project: ProjectItem) => void;
}

export const ProjectCard = ({ project, onOpenModal }: ProjectCardProps) => {
  const categoryColors: Record<string, string> = {
    'Machine Learning': 'bg-[#FF8C00]/15 text-[#FF8C00] border-[#FF8C00]/30',
    'Data Analytics': 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
    'Business Intelligence': 'bg-purple-500/15 text-purple-400 border-purple-500/30',
    'Exploratory Data Analysis': 'bg-blue-500/15 text-blue-400 border-blue-500/30',
    'Artificial Intelligence': 'bg-rose-500/15 text-rose-400 border-rose-500/30',
    Hackathon: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
  };

  const badgeClass =
    categoryColors[project.category] ||
    'bg-[#FF8C00]/15 text-[#FF8C00] border-[#FF8C00]/30';

  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group relative flex flex-col rounded-2xl bg-[#131620] border border-[#222838] hover:border-[#FF8C00]/50 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 overflow-hidden"
    >
      {/* Top Banner / Screenshot */}
      <div className="relative aspect-video w-full overflow-hidden bg-[#0D0F17] border-b border-[#1C2230]">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#121520] to-[#0D0F17]">
            <Layers className="w-10 h-10 text-slate-600 mb-2 group-hover:text-[#FF8C00] transition-colors" />
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
              {project.category}
            </span>
          </div>
        )}

        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span
            className={`px-3 py-1 rounded-full text-[11px] font-semibold border backdrop-blur-md ${badgeClass}`}
          >
            {project.category}
          </span>
        </div>

        {project.liveDemoUrl && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-black/60 text-emerald-400 border border-emerald-500/40 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#FF8C00] transition-colors line-clamp-1">
          {project.title}
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed flex-1">
          {project.shortDescription}
        </p>

        {/* Technology Tags */}
        <div className="mt-4 pt-4 border-t border-[#1C2230] flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 text-[11px] font-medium rounded-md bg-[#191E2C] text-slate-300 border border-[#242C3E]"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-transparent text-slate-500 border border-dashed border-[#242C3E]">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-5 pt-3 border-t border-[#1C2230] flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => onOpenModal(project)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF8C00] hover:text-[#FF6A4D] transition-colors focus:outline-none"
          >
            <span>Project Details</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>

          <div className="flex items-center gap-2">
            <Button
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="sm"
              aria-label={`View ${project.title} on GitHub`}
              className="p-2"
            >
              <Github className="w-3.5 h-3.5" />
            </Button>

            {project.liveDemoUrl && (
              <Button
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="sm"
                aria-label={`View live demo for ${project.title}`}
                className="p-2"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

