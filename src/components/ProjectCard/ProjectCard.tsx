import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import type { ProjectItem } from '../../types';
import { fadeInUp } from '../../lib/animations';

interface ProjectCardProps {
  project: ProjectItem;
  onOpenModal: (project: ProjectItem) => void;
}

export const ProjectCard = ({ project, onOpenModal }: ProjectCardProps) => {
  return (
    <motion.article
      variants={fadeInUp}
      className="group relative flex flex-col rounded-2xl bg-[#111116]/95 border border-white/[0.08] hover:border-[#F28C28]/40 hover:bg-[#17151B] transition-all duration-300 overflow-hidden shadow-xl shadow-black/30 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/50 h-full justify-between"
    >
      {/* Restrained top-edge highlight bar on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#F28C28] via-[#A83250] to-[#721C35] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

      {/* 1. Genuine Project Screenshot / Visualization (16:9 Aspect Ratio) */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0B0B10] border-b border-white/[0.06]">
        {project.thumbnail || project.image ? (
          <img
            src={project.thumbnail || project.image}
            alt={`${project.title} visualization`}
            width={800}
            height={450}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#17151B]">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF9D32]">
              {project.category}
            </span>
            <span className="text-sm font-bold text-white mt-1">
              {project.title}
            </span>
          </div>
        )}

        {/* 2. One Category Label (Top-Left) */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#111116]/95 text-[#FF9D32] border border-white/[0.08] backdrop-blur-md shadow-sm">
            {project.category}
          </span>
        </div>

        {/* 8. Live Demo Badge (Top-Right, ONLY when verified) */}
        {project.liveDemoUrl && (
          <div className="absolute top-3 right-3 z-10">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-semibold bg-[#111116]/95 text-emerald-400 border border-emerald-500/30 backdrop-blur-md shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live Demo
            </span>
          </div>
        )}
      </div>

      {/* Content Area with Aligned Heights */}
      <div className="flex flex-col flex-1 p-5 sm:p-5.5 justify-between">
        <div>
          {/* 3. Project Title */}
          <h3 className="text-base sm:text-[17px] font-bold text-white tracking-tight group-hover:text-[#FF9D32] transition-colors line-clamp-1">
            {project.title}
          </h3>

          {/* 4. One Concise, Accurate Description (2–3 lines) */}
          <p className="mt-2 text-xs sm:text-[13px] text-slate-300 line-clamp-2 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        <div>
          {/* 5. 3–5 Verified Technology Tags */}
          <div className="mt-4 pt-3.5 border-t border-white/[0.06] flex flex-wrap gap-1.5 items-center">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 text-[11px] font-medium rounded-md bg-[#17151B] text-slate-300 border border-white/[0.06]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-500">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Action Row */}
          <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between gap-3">
            {/* 6. View Details Button */}
            <button
              type="button"
              onClick={() => onOpenModal(project)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F28C28] hover:text-[#FF9D32] transition-colors focus:outline-none focus-visible:underline cursor-pointer group/btn"
            >
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
            </button>

            {/* Links Group */}
            <div className="flex items-center gap-2">
              {/* 7. GitHub Link */}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="p-2 rounded-lg bg-[#17151B] hover:bg-[#221824] text-slate-400 hover:text-white border border-white/[0.08] hover:border-white/[0.18] transition-all"
                title="View GitHub Repository"
              >
                <Github className="w-3.5 h-3.5" />
              </a>

              {/* 8. Live Demo Link (ONLY when verified) */}
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Live Demo for ${project.title}`}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#481426]/40 hover:bg-[#721C35]/50 text-[#FF9D32] hover:text-white border border-[#F28C28]/40 hover:border-[#F28C28]/70 transition-all text-xs font-semibold"
                  title="Live Demo"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
