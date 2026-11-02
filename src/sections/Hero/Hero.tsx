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
      className="relative min-h-[calc(100vh-4.5rem)] pt-20 sm:pt-24 pb-4 lg:pb-6 flex flex-col justify-between overflow-hidden"
    >
      {/* Background ambient lighting in soft warm tones */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#FF8C00]/8 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[#FF3D71]/8 rounded-full blur-[130px] pointer-events-none" />

      {/* Main Hero Container — expanded for full-screen viewports up to 1520px */}
      <div className="max-w-7xl 2xl:max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full flex-1 flex flex-col justify-between">
        {/* Two-Column Hero Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 2xl:gap-20 items-center my-auto py-3 sm:py-6">
          {/* Left Column: Information Layout & Strong Typography */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 xl:col-span-7 space-y-4 xl:space-y-5 text-center lg:text-left z-10"
          >
            {/* Availability Indicator */}
            <motion.div variants={fadeInUp} className="inline-flex items-center">
              <span className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-semibold bg-[#131622] border border-[#222838] text-slate-200 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Internships & Opportunities</span>
              </span>
            </motion.div>

            {/* Short Greeting & Main Headline */}
            <motion.div variants={fadeInUp} className="space-y-1.5">
              <p className="text-sm sm:text-base lg:text-lg font-semibold tracking-wide text-slate-300">
                Hi, I'm <span className="text-white font-bold">{profileData.name}</span>
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[54px] 2xl:text-[60px] font-black text-white tracking-tight leading-[1.12]">
                Turning Data into <br className="hidden sm:inline" />
                <span className="text-gradient">Actionable Insights</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-[#FF8C00] pt-1 tracking-tight">
                {profileData.professionalTitle}
              </p>
            </motion.div>

            {/* Concise Professional Description */}
            <motion.p
              variants={fadeInUp}
              className="text-sm sm:text-base lg:text-[17px] xl:text-[18px] 2xl:text-[19px] text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              {profileData.introduction}
            </motion.p>

            {/* Action Buttons Row */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => handleScroll('projects')}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold rounded-xl"
              >
                View Projects
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => handleScroll('contact')}
                leftIcon={<Mail className="w-4 h-4 text-[#FF8C00]" />}
                className="px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold rounded-xl hover:border-[#FF8C00]"
              >
                Get in Touch
              </Button>

              <Button
                href="/Priyam-Singh-Resume.pdf"
                download="Priyam-Singh-Resume.pdf"
                variant="secondary"
                size="lg"
                leftIcon={<FileDown className="w-4 h-4 text-[#FF3D71]" />}
                className="px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold rounded-xl"
              >
                Download Resume
              </Button>
            </motion.div>

            {/* Social Links Strip */}
            <motion.div
              variants={fadeInUp}
              className="pt-2 flex items-center justify-center lg:justify-start gap-3.5 text-xs sm:text-sm"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Connect
              </span>
              <div className="h-3.5 w-px bg-[#262C3E]" />
              <div className="flex items-center gap-2.5">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 sm:p-2.5 rounded-xl bg-[#141824] border border-[#222838] text-slate-300 hover:text-white hover:border-[#FF8C00] hover:bg-[#FF8C00]/10 transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 sm:p-2.5 rounded-xl bg-[#141824] border border-[#222838] text-slate-300 hover:text-[#38BDF8] hover:border-[#38BDF8] hover:bg-[#38BDF8]/10 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${profileData.email}`}
                  aria-label="Direct Email"
                  className="p-2 sm:p-2.5 rounded-xl bg-[#141824] border border-[#222838] text-slate-300 hover:text-[#FF3D71] hover:border-[#FF3D71] hover:bg-[#FF3D71]/10 transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Editorial Portrait with Layered Architectural Backdrop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 xl:col-span-5 flex items-end justify-center lg:justify-end relative select-none"
          >
            <div className="relative w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[480px] xl:max-w-[530px] 2xl:max-w-[570px] flex items-end justify-center">
              {/* Layer 1: Ambient Backdrop Glow */}
              <div className="absolute inset-0 m-auto w-[300px] sm:w-[380px] lg:w-[440px] h-[360px] sm:h-[440px] lg:h-[500px] bg-gradient-to-tr from-[#FF8C00]/10 via-[#FF6A4D]/8 to-[#FF3D71]/8 rounded-full blur-[70px] pointer-events-none -z-10" />

              {/* Layer 2: Outer Sculptural Form (The Architectural Canvas) */}
              <div className="absolute inset-x-0 bottom-0 mx-auto w-[310px] sm:w-[370px] lg:w-[410px] xl:w-[450px] 2xl:w-[480px] h-[400px] sm:h-[460px] lg:h-[500px] xl:h-[540px] 2xl:h-[570px] rounded-t-[210px] rounded-br-[140px] rounded-bl-[50px] bg-gradient-to-b from-[#1E1926]/95 via-[#131522]/90 to-[#0A0D15]/95 border border-white/[0.08] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_50px_-10px_rgba(255,140,0,0.12)] -z-0 overflow-hidden flex items-center justify-center">
                {/* Layer 3: Inner Sculptural Tonal Layer */}
                <div className="w-[90%] h-[92%] rounded-t-[190px] rounded-br-[120px] rounded-bl-[35px] bg-gradient-to-tr from-[#16131D] via-[#0F121C] to-[#181D2E]/80 border border-white/[0.04] relative overflow-hidden">
                  {/* Layer 4: Integrated Abstract Analytical Data Lines */}
                  <svg
                    className="absolute inset-0 w-full h-full opacity-[0.16] pointer-events-none"
                    viewBox="0 0 440 540"
                    fill="none"
                  >
                    <defs>
                      <linearGradient id="flowCurveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF8C00" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#FF6A4D" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#FF3D71" stopOpacity="0.2" />
                      </linearGradient>
                    </defs>
                    {/* Flowing predictive spline curves */}
                    <path
                      d="M 20 440 C 110 400, 170 300, 270 250 S 370 160, 420 90"
                      stroke="url(#flowCurveGrad)"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 50 470 C 130 430, 190 350, 300 300 S 390 210, 430 160"
                      stroke="url(#flowCurveGrad)"
                      strokeWidth="1"
                      strokeDasharray="4 6"
                      strokeLinecap="round"
                    />
                    {/* Subtle analytical grid axes */}
                    <line x1="110" y1="50" x2="110" y2="520" stroke="#FFFFFF" strokeWidth="0.75" strokeDasharray="3 5" />
                    <line x1="220" y1="30" x2="220" y2="520" stroke="#FFFFFF" strokeWidth="0.75" strokeDasharray="3 5" />
                    <line x1="330" y1="60" x2="330" y2="520" stroke="#FFFFFF" strokeWidth="0.75" strokeDasharray="3 5" />
                    <line x1="30" y1="160" x2="410" y2="160" stroke="#FFFFFF" strokeWidth="0.75" strokeDasharray="3 5" />
                    <line x1="30" y1="300" x2="410" y2="300" stroke="#FFFFFF" strokeWidth="0.75" strokeDasharray="3 5" />
                    <line x1="30" y1="430" x2="410" y2="430" stroke="#FFFFFF" strokeWidth="0.75" strokeDasharray="3 5" />
                    {/* Data coordinate nodes */}
                    <circle cx="270" cy="250" r="3" fill="#FF8C00" opacity="0.7" />
                    <circle cx="330" cy="190" r="2.5" fill="#FF3D71" opacity="0.6" />
                    <circle cx="220" cy="285" r="2.5" fill="#38BDF8" opacity="0.5" />
                  </svg>
                </div>
              </div>

              {/* Layer 5: Foreground Subject — Authentic Transparent PNG Portrait */}
              <img
                src="/assets/profile/profile.png"
                alt="Priyam Singh - Data Analyst and Machine Learning Engineer"
                className="relative z-10 max-h-[360px] sm:max-h-[430px] lg:max-h-[480px] xl:max-h-[530px] 2xl:max-h-[570px] w-auto object-contain select-none pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.65)]"
              />
            </div>
          </motion.div>
        </div>

        {/* Highlight Strip Forming the Bottom Edge of the Hero (Overlapping lower portrait on desktop) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="relative z-20 w-full mt-4 lg:-mt-10 xl:-mt-14 2xl:-mt-16 pb-2"
        >
          <div className="w-full rounded-2xl bg-[#0D1018]/90 border border-white/[0.08] backdrop-blur-xl shadow-2xl shadow-black/50 p-2.5 sm:p-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.07]">
              {profileData.highlightCards.map((card) => {
                const IconComponent = iconMap[card.icon] || Cpu;
                return (
                  <div
                    key={card.title}
                    className="flex items-center gap-3.5 py-2.5 px-3.5 sm:px-5 hover:bg-white/[0.02] transition-colors rounded-xl"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#161B27] border border-[#242C3E] flex items-center justify-center text-[#FF8C00] shrink-0">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm sm:text-base font-bold text-white tracking-tight truncate">
                        {card.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-medium truncate mt-0.5">
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
