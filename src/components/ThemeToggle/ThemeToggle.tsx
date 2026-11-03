import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  variant?: 'compact' | 'full';
}

export const ThemeToggle = ({ className = '', variant = 'compact' }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const shouldReduceMotion = useReducedMotion();

  if (variant === 'full') {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={isDark ? 'Switch to Light theme (Desert Sand & Burgundy)' : 'Switch to Dark theme (Original Black & Orange)'}
        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-semibold transition-all cursor-pointer border ${
          isDark
            ? 'bg-[#17151B] text-slate-200 border-white/[0.08] hover:border-[#F28C28]/40 hover:text-white'
            : 'bg-[#FFFFFF] text-[#29231F] border-[#E2D7C5] hover:border-[#721C35]/40 hover:text-[#721C35] shadow-sm'
        } ${className}`}
      >
        <span className="flex items-center gap-2.5">
          <div className="relative w-4 h-4 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              {isDark ? (
                <motion.div
                  key="mobile-sun"
                  initial={shouldReduceMotion ? { opacity: 0 } : { rotate: -90, scale: 0.5, opacity: 0 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { rotate: 0, scale: 1, opacity: 1 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { rotate: 90, scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center justify-center"
                >
                  <Sun className="w-4 h-4 text-[#FF9D32]" />
                </motion.div>
              ) : (
                <motion.div
                  key="mobile-moon"
                  initial={shouldReduceMotion ? { opacity: 0 } : { rotate: 90, scale: 0.5, opacity: 0 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { rotate: 0, scale: 1, opacity: 1 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { rotate: -90, scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center justify-center"
                >
                  <Moon className="w-4 h-4 text-[#721C35]" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <span>Theme: {isDark ? 'Dark (Black & Orange)' : 'Light (Desert Sand & Burgundy)'}</span>
        </span>

        <span
          className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider transition-colors duration-300 ${
            isDark ? 'bg-[#24222B] text-[#FF9D32]' : 'bg-[#F5EFE5] text-[#721C35]'
          }`}
        >
          {isDark ? 'Dark' : 'Light'}
        </span>
      </button>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileTap={{ scale: shouldReduceMotion ? 1 : 0.92 }}
      whileHover={{ scale: shouldReduceMotion ? 1 : 1.05 }}
      aria-label={isDark ? 'Switch to Light theme (Desert Sand & Burgundy)' : 'Switch to Dark theme (Original Black & Orange)'}
      title={isDark ? 'Switch to Desert Sand & Burgundy (Light)' : 'Switch to Black & Orange (Dark)'}
      className={`relative p-2 rounded-lg transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#721C35] dark:focus-visible:ring-[#F28C28] ${
        isDark
          ? 'bg-[#17151B] border border-white/[0.08] text-slate-300 hover:text-[#FF9D32] hover:border-[#F28C28]/50 hover:bg-[#201826]'
          : 'bg-[#FFFFFF] border border-[#E2D7C5] text-[#5C524A] hover:text-[#721C35] hover:border-[#721C35]/50 hover:bg-[#FAF6EE] shadow-sm'
      } ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="sun"
              initial={shouldReduceMotion ? { opacity: 0 } : { rotate: -90, scale: 0.5, opacity: 0 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { rotate: 0, scale: 1, opacity: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { rotate: 90, scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center"
            >
              <Sun className="w-4 h-4 text-[#FF9D32]" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={shouldReduceMotion ? { opacity: 0 } : { rotate: 90, scale: 0.5, opacity: 0 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { rotate: 0, scale: 1, opacity: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { rotate: -90, scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center"
            >
              <Moon className="w-4 h-4 text-[#721C35]" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  );
};
