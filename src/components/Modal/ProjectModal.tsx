import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, CheckCircle2, Layers, AlertCircle } from 'lucide-react';
import type { ProjectItem } from '../../types';
import { Button } from '../Buttons/Button';
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
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
            className="relative w-full max-w-3xl my-8 bg-[#12151F] border border-[#262C3D] rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
          >
            {/* Header with Close */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#202535] bg-[#161A26]">
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FF8C00]/15 text-[#FF8C00] border border-[#FF8C00]/30">
                  {project.category}
                </span>
                {project.liveDemoUrl && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live Deployed
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF8C00]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Modal Content */}
            <div className="overflow-y-auto p-6 space-y-6">
              {/* Project Image Banner */}
              {project.image ? (
                <div className="relative rounded-xl overflow-hidden border border-[#242A38] bg-[#0E1017] aspect-video max-h-72">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12151F] via-transparent to-transparent opacity-40" />
                </div>
              ) : (
                <div className="rounded-xl p-8 border border-dashed border-[#262C3D] bg-[#161A26]/50 text-center">
                  <Layers className="w-10 h-10 text-slate-500 mx-auto mb-2" />
                  <p className="text-xs text-slate-400">
                    Verified repository analysis & exploratory data architecture
                  </p>
                </div>
              )}

              {/* Title & Description */}
              <div>
                <h3 id="modal-project-title" className="text-2xl font-bold text-white tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
                  {project.shortDescription}
                </p>
              </div>

              {/* Problem Addressed */}
              <div className="p-4 rounded-xl bg-[#161B28] border border-[#222838]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF8C00] flex items-center gap-2 mb-2">
                  <AlertCircle className="w-4 h-4" />
                  Problem Addressed
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>

              {/* Key Implementation */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Key Implementation Details
                </h4>
                <ul className="space-y-2.5">
                  {project.keyImplementation.map((point, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF8C00] mt-2 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metrics or Outcomes if available */}
              {project.metricsOrOutcomes && project.metricsOrOutcomes.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                    Outcomes & Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {project.metricsOrOutcomes.map((metric, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-[#161B28] border border-[#222838] text-center"
                      >
                        <p className="text-xs font-medium text-slate-200">{metric}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Verified Technologies */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
                  Verified Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-lg bg-[#1B202F] text-slate-200 border border-[#2B3347]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer with Actions */}
            <div className="p-4 sm:p-6 border-t border-[#202535] bg-[#161A26] flex flex-wrap items-center justify-between gap-3">
              <Button variant="ghost" size="sm" onClick={onClose}>
                Close
              </Button>

              <div className="flex items-center gap-3">
                <Button
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="sm"
                  leftIcon={<Github className="w-4 h-4" />}
                >
                  View Source Code
                </Button>
                {project.liveDemoUrl && (
                  <Button
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="sm"
                    rightIcon={<ExternalLink className="w-4 h-4" />}
                  >
                    Launch Live Demo
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
