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
      className="group relative flex flex-col rounded-2xl bg-[#FFFFFF] dark:bg-[#111116]/95 border border-[#E2D7C5] dark:border-white/[0.08] hover:border-[#721C35]/40 dark:hover:border-[#F28C28]/40 hover:bg-[#FDFBF7] dark:hover:bg-[#17151B] transition-all duration-300 overflow-hidden shadow-md shadow-[#721C35]/5 dark:shadow-xl dark:shadow-black/30 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#721C35]/12 dark:hover:shadow-2xl dark:hover:shadow-black/50 h-full justify-between"
    >
      {/* Restrained top-edge highlight bar on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#721C35] via-[#A83250] to-[#481426] dark:from-[#F28C28] dark:via-[#A83250] dark:to-[#721C35] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

      {/* 1. Genuine Project Screenshot / Visualization (16:9 Aspect Ratio) */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#FAF6EE] dark:bg-[#0B0B10] border-b border-[#E2D7C5] dark:border-white/[0.06]">
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
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#FAF6EE] dark:bg-[#17151B]">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#721C35] dark:text-[#FF9D32]">
              {project.category}
            </span>
            <span className="text-sm font-bold text-[#29231F] dark:text-white mt-1">
              {project.title}
            </span>
          </div>
        )}

        {/* 2. One Category Label (Top-Left) */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#FFFFFF]/95 dark:bg-[#111116]/95 text-[#721C35] dark:text-[#FF9D32] border border-[#E2D7C5] dark:border-white/[0.08] backdrop-blur-md shadow-sm">
            {project.category}
          </span>
        </div>

        {/* 8. Live Demo Badge (Top-Right, ONLY when verified) */}
        {project.liveDemoUrl && (
          <div className="absolute top-3 right-3 z-10">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-semibold bg-[#FFFFFF]/95 dark:bg-[#111116]/95 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 backdrop-blur-md shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live Demo
            </span>
          </div>
        )}
      </div>

      {/* Content Area with Aligned Heights */}
      <div className="flex flex-col flex-1 p-5 sm:p-5.5 justify-between">
        <div>
          {/* 3. Project Title */}
          <h3 className="text-base sm:text-[17px] font-bold text-[#29231F] dark:text-white tracking-tight group-hover:text-[#721C35] dark:group-hover:text-[#FF9D32] transition-colors line-clamp-1">
            {project.title}
          </h3>

          {/* 4. One Concise, Accurate Description (2–3 lines) */}
          <p className="mt-2 text-xs sm:text-[13px] text-[#5C524A] dark:text-slate-300 line-clamp-2 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        <div>
          {/* 5. 3–5 Verified Technology Tags */}
          <div className="mt-4 pt-3.5 border-t border-[#E2D7C5] dark:border-white/[0.06] flex flex-wrap gap-1.5 items-center">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 text-[11px] font-medium rounded-md bg-[#FAF6EE] dark:bg-[#17151B] text-[#5C524A] dark:text-slate-300 border border-[#E2D7C5] dark:border-white/[0.06]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-1.5 py-0.5 text-[10px] font-mono text-[#7E7267] dark:text-slate-500">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Action Row */}
          <div className="mt-4 pt-3 border-t border-[#E2D7C5] dark:border-white/[0.06] flex items-center justify-between gap-3">
            {/* 6. View Details Button */}
            <button
              type="button"
              onClick={() => onOpenModal(project)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#721C35] dark:text-[#F28C28] hover:text-[#A83250] dark:hover:text-[#FF9D32] transition-colors focus:outline-none focus-visible:underline cursor-pointer group/btn"
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
                className="p-2 rounded-lg bg-[#FAF6EE] dark:bg-[#17151B] hover:bg-[#F2EAE0] dark:hover:bg-[#221824] text-[#5C524A] dark:text-slate-400 hover:text-[#29231F] dark:hover:text-white border border-[#E2D7C5] dark:border-white/[0.08] hover:border-[#DCCDB7] dark:hover:border-white/[0.18] transition-all shadow-sm dark:shadow-none"
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
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#721C35]/10 dark:bg-[#481426]/40 hover:bg-[#721C35]/20 dark:hover:bg-[#721C35]/50 text-[#721C35] dark:text-[#FF9D32] hover:text-[#481426] dark:hover:text-white border border-[#721C35]/30 dark:border-[#F28C28]/40 hover:border-[#721C35]/50 dark:hover:border-[#F28C28]/70 transition-all text-xs font-semibold shadow-sm"
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
