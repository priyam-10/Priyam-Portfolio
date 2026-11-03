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
            className="relative w-full max-w-3xl my-6 bg-[#111116] border border-white/[0.09] rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
          >
            {/* Header with Close */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/[0.07] bg-[#17151B]">
              <div className="flex items-center gap-2.5">
                <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-[#481426]/40 text-[#FF9D32] border border-[#F28C28]/35">
                  {project.category}
                </span>
                {project.liveDemoUrl && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live Deployed
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F28C28] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Modal Content */}
            <div className="overflow-y-auto p-5 sm:p-6 md:p-8 space-y-6">
              {/* Primary Project Image Banner */}
              {project.image && (
                <div className="relative rounded-xl overflow-hidden border border-white/[0.07] bg-[#0E1017] aspect-video max-h-80 w-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              )}

              {/* Title & Detailed Overview */}
              <div>
                <h3 id="modal-project-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm sm:text-[15px] text-slate-300 leading-relaxed font-normal">
                  {project.shortDescription}
                </p>
              </div>

              {/* Problem Statement */}
              {project.problemStatement && (
                <div className="p-4 rounded-xl bg-[#141824] border border-white/[0.06]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF8C00] flex items-center gap-2 mb-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Problem Statement</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.problemStatement}
                  </p>
                </div>
              )}

              {/* Dataset or Input Information */}
              {project.datasetInfo && (
                <div className="p-4 rounded-xl bg-[#141824] border border-white/[0.06]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#38BDF8] flex items-center gap-2 mb-2">
                    <Database className="w-4 h-4 shrink-0" />
                    <span>Dataset &amp; Input Attributes</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.datasetInfo}
                  </p>
                </div>
              )}

              {/* Project Objectives */}
              {project.objectives && project.objectives.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4 text-[#FF8C00] shrink-0" />
                    <span>Project Objectives</span>
                  </h4>
                  <ul className="space-y-2">
                    {project.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF8C00] mt-2 shrink-0" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Methodology & Technical Workflow */}
              {project.approach && project.approach.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                    <Workflow className="w-4 h-4 text-[#38BDF8] shrink-0" />
                    <span>Methodology &amp; Technical Approach</span>
                  </h4>
                  <ul className="space-y-2">
                    {project.approach.map((step, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] mt-2 shrink-0" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Implementation Features */}
              {project.keyImplementation && project.keyImplementation.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Key Features &amp; Implementation</span>
                  </h4>
                  <ul className="space-y-2">
                    {project.keyImplementation.map((point, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Additional Visuals (e.g. UIDAI Hackathon Charts) */}
              {project.additionalImages && project.additionalImages.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-[#FF8C00] shrink-0" />
                    <span>Visual Analysis Charts from Repository</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.additionalImages.map((imgSrc, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl overflow-hidden border border-white/[0.07] bg-[#0E1017] aspect-video"
                      >
                        <img
                          src={imgSrc}
                          alt={`${project.title} visualization ${idx + 1}`}
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
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#FF8C00] shrink-0" />
                    <span>Verified Outcomes &amp; Insights</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {project.metricsOrOutcomes.map((metric, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-[#141824] border border-white/[0.06] text-center"
                      >
                        <p className="text-xs font-medium text-slate-200">{metric}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Verified Technology Stack */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Verified Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-lg bg-[#141824] text-slate-200 border border-white/[0.07]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer with Actions */}
            <div className="p-4 sm:p-5 border-t border-white/[0.07] bg-[#17151B] flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors cursor-pointer"
              >
                Close Details
              </button>

              <div className="flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-[#221824] hover:bg-[#2A1E2C] hover:text-white border border-white/[0.08] transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                </a>

                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#F28C28] to-[#A83250] hover:from-[#FF9D32] hover:to-[#BD3D5E] shadow-md shadow-orange-950/40 transition-all"
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
