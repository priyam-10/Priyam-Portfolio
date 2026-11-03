import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Github,
  ExternalLink,
  Target,
  CheckCircle2,
  Workflow,
  Sparkles,
  AlertCircle,
  Database,
  ImageIcon,
} from 'lucide-react';
import type { ProjectItem } from '../../types';
import { backdropVariants, modalVariants } from '../../lib/animations';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Dialog Container */}
          <motion.div
            ref={modalRef}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-3xl my-6 bg-[#FAF6EE] dark:bg-[#111116] border border-[#E2D7C5] dark:border-white/[0.09] rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col text-[#29231F] dark:text-[#EDEDF2]"
          >
            {/* Header with Close */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-[#E2D7C5] dark:border-white/[0.07] bg-[#FFFFFF] dark:bg-[#17151B]">
              <div className="flex items-center gap-2.5">
                <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-[#721C35]/10 dark:bg-[#481426]/40 text-[#721C35] dark:text-[#FF9D32] border border-[#721C35]/30 dark:border-[#F28C28]/35">
                  {project.category}
                </span>
                {project.liveDemoUrl && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live Deployed
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="p-1.5 rounded-lg text-[#5C524A] dark:text-slate-400 hover:text-[#29231F] dark:hover:text-white hover:bg-[#EAE1D2] dark:hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#721C35] dark:focus:ring-[#F28C28] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Modal Content */}
            <div className="overflow-y-auto p-5 sm:p-6 md:p-8 space-y-6">
              {/* Primary Project Image Banner */}
              {project.image && (
                <div className="relative rounded-xl overflow-hidden border border-[#E2D7C5] dark:border-white/[0.07] bg-[#F4EDE2] dark:bg-[#0E1017] aspect-video max-h-80 w-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    width={1672}
                    height={941}
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              )}

              {/* Title & Detailed Overview */}
              <div>
                <h3 id="modal-project-title" className="text-xl sm:text-2xl font-bold text-[#29231F] dark:text-white tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm sm:text-[15px] text-[#5C524A] dark:text-slate-300 leading-relaxed font-normal">
                  {project.shortDescription}
                </p>
              </div>

              {/* Problem Statement */}
              {project.problemStatement && (
                <div className="p-4 rounded-xl bg-[#FFFFFF] dark:bg-[#141824] border border-[#E2D7C5] dark:border-white/[0.06] shadow-sm dark:shadow-none">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#721C35] dark:text-[#F28C28] flex items-center gap-2 mb-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Problem Statement</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5C524A] dark:text-slate-300 leading-relaxed">
                    {project.problemStatement}
                  </p>
                </div>
              )}

              {/* Dataset or Input Information */}
              {project.datasetInfo && (
                <div className="p-4 rounded-xl bg-[#FFFFFF] dark:bg-[#141824] border border-[#E2D7C5] dark:border-white/[0.06] shadow-sm dark:shadow-none">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A66C2] dark:text-[#38BDF8] flex items-center gap-2 mb-2">
                    <Database className="w-4 h-4 shrink-0" />
                    <span>Dataset &amp; Input Attributes</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5C524A] dark:text-slate-300 leading-relaxed">
                    {project.datasetInfo}
                  </p>
                </div>
              )}

              {/* Project Objectives */}
              {project.objectives && project.objectives.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#29231F] dark:text-slate-300 mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4 text-[#721C35] dark:text-[#F28C28] shrink-0" />
                    <span>Project Objectives</span>
                  </h4>
                  <ul className="space-y-2">
                    {project.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5C524A] dark:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#721C35] dark:bg-[#F28C28] mt-2 shrink-0" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Methodology & Technical Workflow */}
              {project.approach && project.approach.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#29231F] dark:text-slate-300 mb-3 flex items-center gap-2">
                    <Workflow className="w-4 h-4 text-[#A83250] dark:text-[#38BDF8] shrink-0" />
                    <span>Methodology &amp; Technical Approach</span>
                  </h4>
                  <ul className="space-y-2">
                    {project.approach.map((step, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5C524A] dark:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A83250] dark:bg-[#38BDF8] mt-2 shrink-0" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Implementation Features */}
              {project.keyImplementation && project.keyImplementation.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#29231F] dark:text-slate-300 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Key Features &amp; Implementation</span>
                  </h4>
                  <ul className="space-y-2">
                    {project.keyImplementation.map((point, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5C524A] dark:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 mt-2 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Additional Visuals */}
              {project.additionalImages && project.additionalImages.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#29231F] dark:text-slate-300 mb-3 flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-[#721C35] dark:text-[#F28C28] shrink-0" />
                    <span>Visual Analysis Charts from Repository</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.additionalImages.map((imgSrc, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl overflow-hidden border border-[#E2D7C5] dark:border-white/[0.07] bg-[#FFFFFF] dark:bg-[#0E1017] aspect-video"
                      >
                        <img
                          src={imgSrc}
                          alt={`${project.title} visualization ${idx + 1}`}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Verified Results & Findings */}
              {project.metricsOrOutcomes && project.metricsOrOutcomes.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#29231F] dark:text-slate-300 mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#721C35] dark:text-[#F28C28] shrink-0" />
                    <span>Verified Outcomes &amp; Insights</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {project.metricsOrOutcomes.map((metric, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-[#FFFFFF] dark:bg-[#141824] border border-[#E2D7C5] dark:border-white/[0.06] text-center shadow-sm dark:shadow-none"
                      >
                        <p className="text-xs font-medium text-[#29231F] dark:text-slate-200">{metric}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Verified Technology Stack */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#7E7267] dark:text-slate-400 mb-2.5">
                  Verified Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-lg bg-[#FFFFFF] dark:bg-[#141824] text-[#29231F] dark:text-slate-200 border border-[#E2D7C5] dark:border-white/[0.07] shadow-sm dark:shadow-none"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer with Actions */}
            <div className="p-4 sm:p-5 border-t border-[#E2D7C5] dark:border-white/[0.07] bg-[#FFFFFF] dark:bg-[#17151B] flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-[#5C524A] dark:text-slate-400 hover:text-[#29231F] dark:hover:text-white hover:bg-[#FAF6EE] dark:hover:bg-white/[0.05] transition-colors cursor-pointer"
              >
                Close Details
              </button>

              <div className="flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-[#29231F] dark:text-slate-200 bg-[#FAF6EE] dark:bg-[#221824] hover:bg-[#EAE1D2] dark:hover:bg-[#2A1E2C] hover:text-[#721C35] dark:hover:text-white border border-[#E2D7C5] dark:border-white/[0.08] transition-all shadow-sm dark:shadow-none"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                </a>

                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#721C35] via-[#8C2342] to-[#481426] dark:from-[#F28C28] dark:to-[#A83250] hover:from-[#8C2342] hover:to-[#5E1A30] dark:hover:from-[#FF9D32] dark:hover:to-[#BD3D5E] shadow-md shadow-[#721C35]/20 dark:shadow-orange-950/40 transition-all"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
