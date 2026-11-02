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
      className="relative min-h-[calc(100vh-4rem)] pt-20 pb-6 lg:pt-20 lg:pb-6 flex flex-col justify-between overflow-hidden"
    >
      {/* Background ambient gradient glow */}
      <div className="absolute top-1/4 -left-36 w-80 h-80 bg-[#FF8C00]/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 -right-36 w-80 h-80 bg-[#FF3D71]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        {/* Two-Column Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center my-auto">
          {/* Left Column: Information Layout */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-4 text-center lg:text-left"
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
              <p className="text-sm font-semibold tracking-wide text-slate-300">
                Hi, I'm <span className="text-white font-bold">{profileData.name}</span>
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold text-white tracking-tight leading-[1.18]">
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
              className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              {profileData.introduction}
            </motion.p>

            {/* CTA Buttons Row */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1"
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
              className="pt-2 flex items-center justify-center lg:justify-start gap-3 text-xs"
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

          {/* Right Column: Original Transparent PNG Portrait (Natural Cutout, No Box/Frame) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex items-center justify-center lg:justify-end relative"
          >
            {/* Subtle soft ambient glow behind cutout */}
            <div className="absolute w-64 h-64 sm:w-72 sm:h-72 bg-gradient-to-tr from-[#FF8C00]/15 via-[#FF6A4D]/10 to-[#FF3D71]/15 rounded-full blur-3xl pointer-events-none" />

            {/* Naturally positioned transparent cutout portrait */}
            <img
              src="/assets/profile/profile.png"
              alt="Priyam Singh - Data Analyst and Machine Learning Engineer"
              className="relative z-10 max-h-[320px] sm:max-h-[360px] lg:max-h-[390px] xl:max-h-[410px] w-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.65)] select-none pointer-events-none filter contrast-[1.02]"
            />
          </motion.div>
        </div>

        {/* Four Highlight Cards — Single Horizontal Row on Desktop */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-6 pt-4 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 xl:gap-4"
        >
          {profileData.highlightCards.map((card) => {
            const IconComponent = iconMap[card.icon] || Cpu;
            return (
              <motion.div
                key={card.title}
                variants={fadeInUp}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-3.5 rounded-xl bg-[#121520]/80 border border-[#202535] hover:border-[#FF8C00]/40 transition-all flex items-center gap-3 shadow-sm"
              >
                <div className="w-9 h-9 rounded-lg bg-[#181D2A] border border-[#252E40] flex items-center justify-center text-[#FF8C00] shrink-0">
                  <IconComponent className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-white tracking-tight truncate">
                    {card.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 font-medium truncate mt-0.5">
                    {card.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
