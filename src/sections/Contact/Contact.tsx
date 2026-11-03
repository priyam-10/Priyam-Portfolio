import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, ArrowUpRight, Sparkles } from 'lucide-react';
import { profileData } from '../../data/profile';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { fadeInUp, staggerContainer } from '../../lib/animations';

export const Contact = () => {
  const openOpportunities = [
    'Data Analyst Internships',
    'Machine Learning Internships',
    'AI / Data Science Opportunities',
    'Entry-Level Data Analytics Roles',
    'Relevant Collaborations',
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-[#721C35]/4 dark:bg-[#F28C28]/4 rounded-full blur-[140px] pointer-events-none" />

      {/* Distinctive typographic background watermark */}
      <div className="absolute -bottom-8 -right-8 font-mono font-black text-[130px] sm:text-[180px] lg:text-[220px] text-[#29231F]/[0.02] dark:text-white/[0.012] select-none pointer-events-none tracking-tighter leading-none">
        CONNECT
      </div>

      <div className="max-w-7xl 2xl:max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10">
        {/* Integrated Section Heading */}
        <SectionHeading
          badge="Get In Touch"
          title="Let's Connect"
          subtitle="Open to Opportunities and Collaboration"
          className="mb-10 sm:mb-12 lg:mb-16"
        />

        {/* Asymmetric Two-Column Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column — Personal Contact Introduction & Availability */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Personal Introduction Block */}
            <motion.div variants={fadeInUp} className="space-y-4">
              {/* Availability Indicator */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#721C35]/10 dark:bg-[#481426]/35 text-[#721C35] dark:text-[#FF9D32] border border-[#721C35]/30 dark:border-[#F28C28]/35">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open to Opportunities</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#29231F] dark:text-white tracking-tight leading-snug">
                Let's start a conversation.
              </h3>

              <p className="text-sm sm:text-[15px] text-[#5C524A] dark:text-slate-300 leading-relaxed font-normal">
                I'm actively looking for opportunities to apply my skills in Data Analytics,
                Machine Learning, and software development. I'm open to internships, job
                opportunities, collaborations, and interesting projects where I can learn,
                contribute, and grow.
              </p>
            </motion.div>

            {/* Text-based Interactive Contact Details with Subtle Separators */}
            <motion.div
              variants={fadeInUp}
              className="pt-2 border-t border-[#E2D7C5] dark:border-white/[0.08] divide-y divide-[#E2D7C5] dark:divide-white/[0.06]"
            >
              {/* Email Link */}
              <a
                href={`mailto:${profileData.email}`}
                className="group py-3.5 flex items-center justify-between text-[#5C524A] hover:text-[#29231F] dark:text-slate-300 dark:hover:text-white transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="p-2 rounded-lg bg-[#FFFFFF] dark:bg-[#17151B] text-[#721C35] dark:text-[#F28C28] border border-[#E2D7C5] dark:border-white/[0.06] group-hover:border-[#721C35]/40 dark:group-hover:border-[#F28C28]/40 transition-colors shrink-0 shadow-sm dark:shadow-none">
                    <Mail className="w-4 h-4" />
                  </span>
                  <div className="min-w-0">
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-[#7E7267] dark:text-slate-400">
                      Email
                    </span>
                    <span className="text-sm font-semibold text-[#29231F] dark:text-white group-hover:text-[#721C35] dark:group-hover:text-[#FF9D32] transition-colors truncate block">
                      {profileData.email}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#7E7267] dark:text-slate-500 group-hover:text-[#721C35] dark:group-hover:text-[#F28C28] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 ml-2" />
              </a>

              {/* LinkedIn Link */}
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group py-3.5 flex items-center justify-between text-[#5C524A] hover:text-[#29231F] dark:text-slate-300 dark:hover:text-white transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="p-2 rounded-lg bg-[#FFFFFF] dark:bg-[#17151B] text-[#0A66C2] dark:text-[#38BDF8] border border-[#E2D7C5] dark:border-white/[0.06] group-hover:border-[#0A66C2]/40 dark:group-hover:border-[#38BDF8]/40 transition-colors shrink-0 shadow-sm dark:shadow-none">
                    <Linkedin className="w-4 h-4" />
                  </span>
                  <div className="min-w-0">
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-[#7E7267] dark:text-slate-400">
                      LinkedIn
                    </span>
                    <span className="text-sm font-semibold text-[#29231F] dark:text-white group-hover:text-[#0A66C2] dark:group-hover:text-[#38BDF8] transition-colors truncate block">
                      priyamsingh10
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#7E7267] dark:text-slate-500 group-hover:text-[#0A66C2] dark:group-hover:text-[#38BDF8] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 ml-2" />
              </a>

              {/* GitHub Link */}
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group py-3.5 flex items-center justify-between text-[#5C524A] hover:text-[#29231F] dark:text-slate-300 dark:hover:text-white transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="p-2 rounded-lg bg-[#FFFFFF] dark:bg-[#17151B] text-[#29231F] dark:text-white border border-[#E2D7C5] dark:border-white/[0.06] group-hover:border-[#721C35]/40 dark:group-hover:border-white/[0.2] transition-colors shrink-0 shadow-sm dark:shadow-none">
                    <Github className="w-4 h-4" />
                  </span>
                  <div className="min-w-0">
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-[#7E7267] dark:text-slate-400">
                      GitHub
                    </span>
                    <span className="text-sm font-semibold text-[#29231F] dark:text-white group-hover:text-[#721C35] dark:group-hover:text-slate-200 transition-colors truncate block">
                      priyam-10
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#7E7267] dark:text-slate-500 group-hover:text-[#721C35] dark:group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 ml-2" />
              </a>

              {/* Location (Non-clickable static detail) */}
              <div className="py-3.5 flex items-center gap-3 text-[#5C524A] dark:text-slate-300">
                <span className="p-2 rounded-lg bg-[#FFFFFF] dark:bg-[#17151B] text-[#A83250] border border-[#E2D7C5] dark:border-white/[0.06] shrink-0 shadow-sm dark:shadow-none">
                  <MapPin className="w-4 h-4" />
                </span>
                <div className="min-w-0">
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-[#7E7267] dark:text-slate-400">
                    Location
                  </span>
                  <span className="text-sm font-medium text-[#29231F] dark:text-slate-200">
                    {profileData.location}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Availability Panel (Compact tags, visually secondary) */}
            <motion.div variants={fadeInUp} className="pt-2">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#721C35] dark:text-[#F28C28]" />
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#7E7267] dark:text-slate-400">
                  Currently open to
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {openOpportunities.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#FFFFFF] dark:bg-[#17151B] text-[#5C524A] dark:text-slate-300 border border-[#E2D7C5] dark:border-white/[0.06] hover:border-[#721C35]/35 dark:hover:border-[#F28C28]/35 hover:text-[#721C35] dark:hover:text-white transition-colors shadow-sm dark:shadow-none"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column — Premium Interactive Contact Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-7"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
