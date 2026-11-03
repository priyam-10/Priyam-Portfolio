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
      className="relative min-h-[calc(100vh-4.5rem)] pt-20 sm:pt-22 pb-4 lg:pb-6 flex flex-col justify-between overflow-hidden"
    >
      {/* Technical blueprint architectural grid for Hero section */}
      <div className="absolute inset-0 bg-tech-grid-dense pointer-events-none -z-0 opacity-80" />

      {/* Subtle ambient lighting in Burnt Orange */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#F28C28]/6 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Hero Container */}
      <div className="max-w-7xl 2xl:max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full flex-1 flex flex-col justify-between">
        {/* Two-Column Hero Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center my-auto py-2 sm:py-3">
          {/* Left Column: Information Layout & Balanced Typography */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 xl:col-span-7 space-y-3.5 sm:space-y-4 text-center lg:text-left z-10"
          >
            {/* 1. Availability Indicator */}
            <motion.div variants={fadeInUp} className="inline-flex items-center">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#17151B] border border-white/[0.08] text-slate-200 shadow-sm shadow-[#481426]/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Internships & Opportunities</span>
              </span>
            </motion.div>

            {/* 2. Refined Greeting & Name with Animated Underline */}
            <motion.div variants={fadeInUp} className="space-y-2">
              <div className="flex items-center justify-center lg:justify-start gap-2 flex-wrap">
                <span className="text-sm sm:text-base lg:text-lg font-medium text-[#EDEDF2] tracking-tight">
                  Hi, I'm
                </span>
                <span className="relative inline-block font-extrabold text-xl sm:text-2xl lg:text-3xl tracking-tight">
                  <span className="bg-gradient-to-r from-[#FF9D32] via-[#F28C28] to-[#FFB45C] bg-clip-text text-transparent">
                    {profileData.name}
                  </span>
                  {/* Subtle animated underline stroke */}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#F28C28] via-[#A83250] to-[#721C35] rounded-full origin-left"
                  />
                </span>
              </div>

              {/* 3. Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[46px] 2xl:text-[52px] font-black text-white tracking-tight leading-[1.14]">
                Turning Data into <br className="hidden sm:inline" />
                <span className="text-gradient">Actionable Insights</span>
              </h1>

              {/* 4. Professional Title */}
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-[#F28C28] pt-0.5 tracking-tight">
                {profileData.professionalTitle}
              </p>
            </motion.div>

            {/* 5. Concise Professional Description */}
            <motion.p
              variants={fadeInUp}
              className="text-xs sm:text-sm lg:text-[15px] xl:text-[16px] text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              {profileData.introduction}
            </motion.p>

            {/* 6. Action Buttons Row */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-1"
            >
              <Button
                variant="primary"
                size="md"
                onClick={() => handleScroll('projects')}
                rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                className="px-4.5 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-xl"
              >
                View Projects
              </Button>

              <Button
                variant="outline"
                size="md"
                onClick={() => handleScroll('contact')}
                leftIcon={<Mail className="w-3.5 h-3.5 text-[#F28C28]" />}
                className="px-4.5 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-xl hover:border-[#F28C28]"
              >
                Get in Touch
              </Button>

              <Button
                href="/Priyam-Singh-Resume.pdf"
                download="Priyam-Singh-Resume.pdf"
                variant="secondary"
                size="md"
                leftIcon={<FileDown className="w-3.5 h-3.5 text-[#A83250]" />}
                className="px-4.5 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-xl"
              >
                Download Resume
              </Button>
            </motion.div>

            {/* 7. CONNECT Label & Social Links */}
            <motion.div
              variants={fadeInUp}
              className="pt-2 flex items-center justify-center lg:justify-start gap-3 text-xs"
            >
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Connect
              </span>
              <div className="h-3 w-px bg-white/[0.1]" />
              <div className="flex items-center gap-2">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 rounded-xl bg-[#17151B] border border-white/[0.08] text-slate-300 hover:text-white hover:border-[#F28C28] hover:bg-[#F28C28]/10 transition-all shadow-sm"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 rounded-xl bg-[#17151B] border border-white/[0.08] text-slate-300 hover:text-[#38BDF8] hover:border-[#38BDF8] hover:bg-[#38BDF8]/10 transition-all shadow-sm"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a
                  href={`mailto:${profileData.email}`}
                  aria-label="Direct Email"
                  className="p-2 rounded-xl bg-[#17151B] border border-white/[0.08] text-slate-300 hover:text-[#A83250] hover:border-[#A83250] hover:bg-[#A83250]/10 transition-all shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Editorial Portrait with Layered Architectural Backdrop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 xl:col-span-5 flex items-end justify-center lg:justify-end relative select-none lg:mb-[-28px] xl:mb-[-34px]"
          >
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[460px] xl:max-w-[500px] flex items-end justify-center">
              {/* Layer 1: Ambient Backdrop Glow with subtle warm light */}
              <div className="absolute inset-0 m-auto w-[280px] sm:w-[350px] lg:w-[400px] h-[340px] sm:h-[400px] lg:h-[460px] bg-gradient-to-tr from-[#F28C28]/10 via-[#F28C28]/4 to-transparent rounded-full blur-[70px] pointer-events-none -z-10" />

              {/* Layer 2: Outer Sculptural Form (The Architectural Canvas) */}
              <div className="absolute inset-x-0 bottom-0 mx-auto w-[290px] sm:w-[350px] lg:w-[390px] xl:w-[430px] h-[380px] sm:h-[440px] lg:h-[480px] xl:h-[510px] rounded-t-[200px] rounded-br-[130px] rounded-bl-[45px] bg-gradient-to-b from-[#1C1A22]/95 via-[#141318]/90 to-[#0B0B10]/95 border border-white/[0.08] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] -z-0 overflow-hidden flex items-center justify-center">
                {/* Layer 3: Inner Sculptural Tonal Layer */}
                <div className="w-[90%] h-[92%] rounded-t-[180px] rounded-br-[115px] rounded-bl-[35px] bg-gradient-to-tr from-[#17151B] via-[#0E0E14] to-[#1C1622]/80 border border-white/[0.04] relative overflow-hidden">
                  {/* Layer 4: Integrated Abstract Analytical Data Lines */}
                  <svg
                    className="absolute inset-0 w-full h-full opacity-[0.18] pointer-events-none"
                    viewBox="0 0 420 510"
                    fill="none"
                  >
                    <defs>
                      <linearGradient id="flowCurveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F28C28" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#A83250" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#721C35" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                    {/* Flowing predictive spline curves */}
                    <path
                      d="M 20 410 C 110 370, 160 280, 260 230 S 350 150, 400 80"
                      stroke="url(#flowCurveGrad)"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 50 440 C 120 400, 180 330, 280 280 S 370 200, 410 150"
                      stroke="url(#flowCurveGrad)"
                      strokeWidth="1"
                      strokeDasharray="4 6"
                      strokeLinecap="round"
                    />
                    {/* Subtle analytical grid axes */}
                    <line x1="105" y1="50" x2="105" y2="490" stroke="#FFFFFF" strokeWidth="0.75" strokeDasharray="3 5" />
                    <line x1="210" y1="30" x2="210" y2="490" stroke="#FFFFFF" strokeWidth="0.75" strokeDasharray="3 5" />
                    <line x1="315" y1="60" x2="315" y2="490" stroke="#FFFFFF" strokeWidth="0.75" strokeDasharray="3 5" />
                    <line x1="30" y1="150" x2="390" y2="150" stroke="#FFFFFF" strokeWidth="0.75" strokeDasharray="3 5" />
                    <line x1="30" y1="280" x2="390" y2="280" stroke="#FFFFFF" strokeWidth="0.75" strokeDasharray="3 5" />
                    <line x1="30" y1="410" x2="390" y2="410" stroke="#FFFFFF" strokeWidth="0.75" strokeDasharray="3 5" />
                    {/* Data coordinate nodes */}
                    <circle cx="260" cy="230" r="3" fill="#F28C28" opacity="0.8" />
                    <circle cx="315" cy="180" r="2.5" fill="#A83250" opacity="0.7" />
                    <circle cx="210" cy="270" r="2.5" fill="#38BDF8" opacity="0.6" />
                  </svg>
                </div>
              </div>

              {/* Layer 5: Foreground Subject — Authentic Portrait with Modern WebP & High Fetch Priority */}
              <picture className="relative z-10 contents">
                <source srcSet="/assets/profile/profile.webp" type="image/webp" />
                <img
                  src="/assets/profile/profile.png"
                  alt="Priyam Singh - Data Analyst and Machine Learning Engineer"
                  width={838}
                  height={1024}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="relative z-10 max-h-[340px] sm:max-h-[400px] lg:max-h-[440px] xl:max-h-[480px] w-auto object-contain select-none pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
                />
              </picture>
            </div>
          </motion.div>
        </div>

        {/* 8. Highlight Strip — Forms the Clean Bottom Edge */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="relative z-20 w-full mt-4 sm:mt-5 lg:mt-3 pb-2"
        >
          <div className="w-full rounded-2xl bg-[#111116]/95 border border-white/[0.08] backdrop-blur-xl shadow-2xl shadow-black/50 p-2 sm:p-2.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.07]">
              {profileData.highlightCards.map((card) => {
                const IconComponent = iconMap[card.icon] || Cpu;
                return (
                  <div
                    key={card.title}
                    className="flex items-center gap-3 py-2 px-3 sm:px-4 xl:px-5 hover:bg-white/[0.02] transition-colors rounded-xl min-w-0"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#17151B] border border-[#24222B] flex items-center justify-center text-[#F28C28] shrink-0 shadow-sm shadow-[#481426]/20">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xs sm:text-[13px] xl:text-sm font-bold text-white tracking-tight leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-[11px] xl:text-xs text-slate-400 font-medium leading-tight mt-0.5">
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
