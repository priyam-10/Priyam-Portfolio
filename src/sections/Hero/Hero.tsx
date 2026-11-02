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
      className="relative min-h-[calc(100vh-4rem)] pt-18 sm:pt-20 pb-4 lg:pt-20 lg:pb-5 flex flex-col justify-between overflow-hidden"
    >
      {/* Background ambient lighting in soft warm tones */}
      <div className="absolute top-1/4 -left-36 w-80 h-80 bg-[#FF8C00]/6 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/3 -right-36 w-80 h-80 bg-[#FF3D71]/6 rounded-full blur-[110px] pointer-events-none" />

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-between">
        {/* Two-Column Hero Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center my-auto py-2 sm:py-3">
          {/* Left Column: Information Layout & Typography */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-3.5 text-center lg:text-left z-10"
          >
            {/* Availability Indicator */}
            <motion.div variants={fadeInUp} className="inline-flex items-center">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#131622] border border-[#222838] text-slate-300 shadow-sm">
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

          {/* Right Column: Editorial Portrait with Architectural Backdrop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex items-end justify-center lg:justify-end relative select-none"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px] flex items-end justify-center">
              {/* Single Cohesive Architectural Arch Backdrop */}
              <div className="absolute inset-x-0 bottom-0 mx-auto w-[280px] sm:w-[320px] lg:w-[350px] h-[370px] sm:h-[420px] lg:h-[450px] rounded-t-[175px] rounded-b-2xl bg-gradient-to-b from-[#1C1822] via-[#141622] to-[#0E1119] border border-white/[0.07] shadow-[0_20px_50px_-15px_rgba(255,140,0,0.1)] -z-0 overflow-hidden">
                {/* Subtle Integrated Analytical Geometry (Low-contrast, behind portrait) */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-[0.14] pointer-events-none"
                  viewBox="0 0 350 450"
                  fill="none"
                >
                  <defs>
                    <linearGradient id="archGridGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#FF8C00" stopOpacity="0.8" />
                      <stop offset="60%" stopColor="#FF3D71" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* Architectural grid lines */}
                  <line x1="88" y1="50" x2="88" y2="450" stroke="#FFFFFF" strokeWidth="0.75" strokeDasharray="3 4" />
                  <line x1="175" y1="30" x2="175" y2="450" stroke="#FFFFFF" strokeWidth="0.75" strokeDasharray="3 4" />
                  <line x1="262" y1="50" x2="262" y2="450" stroke="#FFFFFF" strokeWidth="0.75" strokeDasharray="3 4" />
                  <line x1="30" y1="150" x2="320" y2="150" stroke="#FFFFFF" strokeWidth="0.75" strokeDasharray="3 4" />
                  <line x1="30" y1="260" x2="320" y2="260" stroke="#FFFFFF" strokeWidth="0.75" strokeDasharray="3 4" />
                  <line x1="30" y1="370" x2="320" y2="370" stroke="#FFFFFF" strokeWidth="0.75" strokeDasharray="3 4" />
                  {/* Restrained analytical trajectory line */}
                  <path
                    d="M 50 360 C 110 330, 150 250, 220 220 S 280 150, 310 110"
                    stroke="url(#archGridGrad)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  {/* Subtle coordinate data nodes */}
                  <circle cx="175" cy="242" r="2.5" fill="#FF8C00" opacity="0.6" />
                  <circle cx="262" cy="172" r="2.5" fill="#FF3D71" opacity="0.6" />
                </svg>
              </div>

              {/* Foreground Subject: Authentic Transparent PNG Portrait */}
              <img
                src="/assets/profile/profile.png"
                alt="Priyam Singh - Data Analyst and Machine Learning Engineer"
                className="relative z-10 max-h-[340px] sm:max-h-[390px] lg:max-h-[430px] xl:max-h-[450px] w-auto object-contain select-none pointer-events-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
              />
            </div>
          </motion.div>
        </div>

        {/* Highlight Strip Forming the Bottom Edge of the Hero (Overlapping lower portrait on desktop) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="relative z-20 w-full mt-4 lg:-mt-8 xl:-mt-10 pb-1"
        >
          <div className="w-full rounded-2xl bg-[#0E111A]/90 border border-white/[0.08] backdrop-blur-md shadow-2xl shadow-black/40 p-2 sm:p-2.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06]">
              {profileData.highlightCards.map((card) => {
                const IconComponent = iconMap[card.icon] || Cpu;
                return (
                  <div
                    key={card.title}
                    className="flex items-center gap-3 py-2 px-3 sm:px-4 hover:bg-white/[0.02] transition-colors rounded-xl"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#161B26] border border-[#242C3E] flex items-center justify-center text-[#FF8C00] shrink-0">
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
