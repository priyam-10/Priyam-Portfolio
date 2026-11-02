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
  Sparkles,
} from 'lucide-react';
import { profileData } from '../../data/profile';
import { Button } from '../../components/Buttons/Button';
import { fadeInUp, staggerContainer, scaleUp } from '../../lib/animations';

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
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-center overflow-hidden"
    >
      {/* Background radial gradients for ambient lighting */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#FF8C00]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[#FF3D71]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Intro */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Status pill */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#161B28] border border-[#262C3E] text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Internships & Opportunities</span>
              </span>
            </motion.div>

            {/* Name & Title */}
            <motion.div variants={fadeInUp} className="space-y-2">
              <p className="text-sm sm:text-base font-semibold tracking-wider uppercase text-[#FF8C00]">
                Hi there, I am {profileData.name}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Turning Data into{' '}
                <span className="text-gradient">Actionable Insights</span>
              </h1>
              <p className="text-base sm:text-lg font-medium text-slate-300 pt-1">
                {profileData.professionalTitle}
              </p>
            </motion.div>

            {/* Introduction paragraph */}
            <motion.p
              variants={fadeInUp}
              className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              {profileData.introduction}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => handleScroll('projects')}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                View Projects
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => handleScroll('contact')}
                leftIcon={<Mail className="w-4 h-4 text-[#FF8C00]" />}
              >
                Get in Touch
              </Button>

              <Button
                href="/Priyam-Singh-Resume.pdf"
                download="Priyam-Singh-Resume.pdf"
                variant="secondary"
                size="lg"
                leftIcon={<FileDown className="w-4 h-4 text-[#FF3D71]" />}
              >
                Download Resume
              </Button>
            </motion.div>

            {/* Social link strip */}
            <motion.div
              variants={fadeInUp}
              className="pt-4 flex items-center justify-center lg:justify-start gap-4"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Connect
              </span>
              <div className="h-4 w-px bg-[#262C3E]" />
              <div className="flex items-center gap-2">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 rounded-xl bg-[#141824] border border-[#222838] text-slate-400 hover:text-white hover:border-[#FF8C00] transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 rounded-xl bg-[#141824] border border-[#222838] text-slate-400 hover:text-[#38BDF8] hover:border-[#38BDF8] transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${profileData.email}`}
                  aria-label="Direct Email"
                  className="p-2 rounded-xl bg-[#141824] border border-[#222838] text-slate-400 hover:text-[#FF3D71] hover:border-[#FF3D71] transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Original Profile Photo */}
          <motion.div
            variants={scaleUp}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#FF8C00] via-[#FF6A4D] to-[#FF3D71] rounded-3xl opacity-75 blur-xl group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />

              {/* Photo Frame Container */}
              <div className="relative rounded-3xl bg-[#121520] border border-[#2A3142] p-2.5 overflow-hidden shadow-2xl">
                <div className="relative aspect-[4/4.8] w-full rounded-2xl overflow-hidden bg-[#0A0D14]">
                  <img
                    src="/assets/profile/profile.png"
                    alt="Priyam Singh - Data Analyst and Machine Learning Engineer"
                    className="w-full h-full object-cover object-top filter contrast-[1.03] hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D13]/70 via-transparent to-transparent pointer-events-none" />

                  {/* Corner Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#0B0D13]/80 backdrop-blur-md border border-[#222838] flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white">Priyam Singh</p>
                      <p className="text-[10px] text-[#FF8C00] font-medium">
                        Bhopal, MP, India
                      </p>
                    </div>
                    <div className="w-7 h-7 rounded-lg bg-[#FF8C00]/15 border border-[#FF8C00]/30 flex items-center justify-center">
                      <Sparkles className="w-3.5 h-3.5 text-[#FF8C00]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Four Highlight Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {profileData.highlightCards.map((card) => {
            const IconComponent = iconMap[card.icon] || Sparkles;
            return (
              <motion.div
                key={card.title}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-5 rounded-2xl bg-[#131622] border border-[#222838] hover:border-[#FF8C00]/40 hover:bg-[#171B2B] transition-all flex items-start gap-4 shadow-lg shadow-black/20"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FF8C00]/15 to-[#FF3D71]/15 border border-[#FF8C00]/30 flex items-center justify-center shrink-0">
                  <IconComponent className="w-5 h-5 text-[#FF8C00]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">
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
