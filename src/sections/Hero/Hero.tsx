import { motion } from 'framer-motion';
import {
  ArrowRight,
  FileDown,
  Mail,
  Github,
  Linkedin,
  GraduationCap,
  Cpu,
  FolderGit2,
  Briefcase,
  TrendingUp,
} from 'lucide-react';
import { profileData } from '../../data/profile';
import { Button } from '../../components/Buttons/Button';
import { fadeInUp, staggerContainer } from '../../lib/animations';

export const Hero = () => {
  const iconMap: Record<string, typeof GraduationCap> = {
    GraduationCap,
    Cpu,
    FolderGit2,
    Briefcase,
  };

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] pt-18 pb-4 lg:pt-20 lg:pb-5 flex flex-col justify-between overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-36 w-80 h-80 bg-[#FF8C00]/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 -right-36 w-80 h-80 bg-[#FF3D71]/8 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-between">
        {/* Two-Column Hero Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center my-auto py-2 sm:py-4">
          {/* Left Column: Information Layout & Typography */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-3.5 text-center lg:text-left"
          >
            {/* Availability Indicator */}
            <motion.div variants={fadeInUp} className="inline-flex items-center">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#131622] border border-[#222838] text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Internships & Opportunities</span>
              </span>
            </motion.div>

            {/* Short Greeting & Main Headline */}
            <motion.div variants={fadeInUp} className="space-y-1">
              <p className="text-xs sm:text-sm font-semibold tracking-wide text-slate-400">
                Hi, I'm <span className="text-white font-bold">{profileData.name}</span>
              </p>
              <h1 className="text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] font-extrabold text-white tracking-tight leading-[1.16]">
                Turning Data into <br className="hidden sm:inline" />
                <span className="text-gradient">Actionable Insights</span>
              </h1>
              <p className="text-sm sm:text-base font-semibold text-[#FF8C00] pt-0.5">
                {profileData.professionalTitle}
              </p>
            </motion.div>

            {/* Concise Professional Description */}
            <motion.p
              variants={fadeInUp}
              className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              {profileData.introduction}
            </motion.p>

            {/* Action Buttons Row */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1"
            >
              <Button
                variant="primary"
                size="md"
                onClick={() => handleScroll('projects')}
                rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg"
              >
                View Projects
              </Button>

              <Button
                variant="outline"
                size="md"
                onClick={() => handleScroll('contact')}
                leftIcon={<Mail className="w-3.5 h-3.5 text-[#FF8C00]" />}
                className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg hover:border-[#FF8C00]"
              >
                Get in Touch
              </Button>

              <Button
                href="/Priyam-Singh-Resume.pdf"
                download="Priyam-Singh-Resume.pdf"
                variant="secondary"
                size="md"
                leftIcon={<FileDown className="w-3.5 h-3.5 text-[#FF3D71]" />}
                className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg"
              >
                Download Resume
              </Button>
            </motion.div>

            {/* Social Links Strip */}
            <motion.div
              variants={fadeInUp}
              className="pt-1.5 flex items-center justify-center lg:justify-start gap-3 text-xs"
            >
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Connect
              </span>
              <div className="h-3 w-px bg-[#262C3E]" />
              <div className="flex items-center gap-2">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-1.5 rounded-lg bg-[#141824] border border-[#222838] text-slate-400 hover:text-white hover:border-[#FF8C00] transition-all"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-1.5 rounded-lg bg-[#141824] border border-[#222838] text-slate-400 hover:text-[#38BDF8] hover:border-[#38BDF8] transition-all"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a
                  href={`mailto:${profileData.email}`}
                  aria-label="Direct Email"
                  className="p-1.5 rounded-lg bg-[#141824] border border-[#222838] text-slate-400 hover:text-[#FF3D71] hover:border-[#FF3D71] transition-all"
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Editorial Portrait Composition with Data Workspace Atmosphere */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex items-center justify-center relative select-none"
          >
            <div className="relative w-full max-w-[360px] sm:max-w-[400px] flex items-center justify-center">
              {/* Soft Organic Background Shape in warm muted tones */}
              <div className="absolute inset-0 m-auto w-[270px] h-[330px] sm:w-[320px] sm:h-[370px] lg:w-[340px] lg:h-[390px] rounded-[50%_50%_56%_44%/48%_52%_48%_52%] bg-gradient-to-tr from-[#1B161B] via-[#121522] to-[#111726] border border-white/[0.06] shadow-[0_0_60px_-10px_rgba(255,140,0,0.14)] -z-0" />

              {/* Subtle Orbital Graph Ring */}
              <svg
                className="absolute inset-0 m-auto w-[330px] h-[330px] sm:w-[380px] sm:h-[380px] pointer-events-none opacity-20 -z-0"
                viewBox="0 0 380 380"
                fill="none"
              >
                <circle
                  cx="190"
                  cy="190"
                  r="170"
                  stroke="#FF8C00"
                  strokeWidth="1"
                  strokeDasharray="4 6"
                />
                <circle
                  cx="190"
                  cy="190"
                  r="135"
                  stroke="#FF3D71"
                  strokeWidth="0.8"
                  strokeDasharray="2 4"
                />
                <circle cx="355" cy="150" r="2.5" fill="#FF8C00" />
                <circle cx="35" cy="220" r="2.5" fill="#FF3D71" />
              </svg>

              {/* Data Analytics Visual Badge 1: Top Right Metric */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                className="absolute -top-1 right-1 sm:right-3 lg:-right-1 z-20 px-3 py-1.5 rounded-xl bg-[#121522]/90 backdrop-blur-md border border-white/[0.08] shadow-xl flex items-center gap-2"
              >
                <div className="w-6 h-6 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <TrendingUp className="w-3 h-3" />
                </div>
                <div className="text-left">
                  <p className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold leading-none">
                    Accuracy
                  </p>
                  <p className="text-xs font-bold text-white font-mono flex items-center gap-1 leading-none mt-0.5">
                    <span>94.8%</span>
                    <span className="text-[8px] text-emerald-400 font-normal">ROC</span>
                  </p>
                </div>
              </motion.div>

              {/* Data Analytics Visual Badge 2: Bottom Left Data Pipeline */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="absolute bottom-4 -left-2 sm:left-2 lg:-left-2 z-20 px-3 py-1.5 rounded-xl bg-[#121522]/90 backdrop-blur-md border border-white/[0.08] shadow-xl flex items-center gap-2.5"
              >
                {/* Minimal SVG Bar Chart */}
                <div className="flex items-end gap-1 h-5">
                  <span className="w-1.5 h-2 rounded-sm bg-[#FF8C00]/40" />
                  <span className="w-1.5 h-3.5 rounded-sm bg-[#FF8C00]/75" />
                  <span className="w-1.5 h-5 rounded-sm bg-gradient-to-t from-[#FF8C00] to-[#FF3D71]" />
                  <span className="w-1.5 h-3 rounded-sm bg-[#FF3D71]/60" />
                </div>
                <div className="text-left">
                  <p className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold leading-none">
                    Analytics
                  </p>
                  <p className="text-xs font-bold text-white flex items-center gap-1 leading-none mt-0.5">
                    <span>Live Pipeline</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </p>
                </div>
              </motion.div>

              {/* Subtle Workspace Code Accent Pill */}
              <div className="absolute -bottom-2 right-4 z-20 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0E1119]/85 border border-white/[0.07] backdrop-blur-sm text-[10px] font-mono text-slate-400 shadow-md">
                <span className="text-[#FF8C00]">df</span>.insights() <span className="text-emerald-400">✓</span>
              </div>

              {/* Priyam's Original Transparent Portrait (Dominant Central Subject) */}
              <img
                src="/assets/profile/profile.png"
                alt="Priyam Singh - Data Analyst and Machine Learning Engineer"
                className="relative z-10 max-h-[300px] sm:max-h-[340px] lg:max-h-[370px] xl:max-h-[390px] w-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)] pointer-events-none filter contrast-[1.02]"
              />
            </div>
          </motion.div>
        </div>

        {/* Separate Elegant Information Strip at the Bottom of the Hero */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mt-4 pt-3 pb-1"
        >
          <div className="w-full rounded-2xl bg-[#10131D]/80 border border-white/[0.08] backdrop-blur-md shadow-lg shadow-black/25 p-2 sm:p-2.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06]">
              {profileData.highlightCards.map((card) => {
                const IconComponent = iconMap[card.icon] || Cpu;
                return (
                  <div
                    key={card.title}
                    className="flex items-center gap-3 py-2 px-3 sm:px-4 hover:bg-white/[0.02] transition-colors rounded-xl"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#181D2A] border border-[#252E40] flex items-center justify-center text-[#FF8C00] shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xs sm:text-sm font-bold text-white tracking-tight truncate">
                        {card.title}
                      </h3>
                      <p className="text-[11px] text-slate-400 font-medium truncate mt-0.5">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
