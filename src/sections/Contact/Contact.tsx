import { motion } from 'framer-motion';
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  CheckCircle,
  Clock,
} from 'lucide-react';
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
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get In Touch"
          title="Let's Connect"
          subtitle="Open to Opportunities and Collaboration"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Info & Opportunities */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Introduction Card */}
            <motion.div
              variants={fadeInUp}
              className="p-6 sm:p-7 rounded-2xl bg-[#121520] border border-[#222838] space-y-4"
            >
              <h3 className="text-xl font-bold text-white tracking-tight">
                Let's talk data, modeling & impact.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                I'm actively looking for opportunities to apply my skills in Data Analytics,
                Machine Learning, and software development. I'm open to internships, job
                opportunities, collaborations, and interesting projects where I can learn,
                contribute, and grow.
              </p>

              {/* Direct channels */}
              <div className="space-y-3 pt-3 border-t border-[#1C2230]">
                {/* Email */}
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#171B27] border border-[#262D40] hover:border-[#FF8C00] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FF8C00]/15 border border-[#FF8C00]/30 flex items-center justify-center text-[#FF8C00] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[11px] font-medium text-slate-400">Direct Email</p>
                    <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#FF8C00] transition-colors truncate">
                      {profileData.email}
                    </p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#171B27] border border-[#262D40] hover:border-[#38BDF8] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#38BDF8]/15 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8] shrink-0">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-slate-400">LinkedIn Profile</p>
                    <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#38BDF8] transition-colors">
                      priyamsingh10
                    </p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#171B27] border border-[#262D40] hover:border-slate-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-slate-400">GitHub Repositories</p>
                    <p className="text-xs sm:text-sm font-semibold text-white transition-colors">
                      priyam-10
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#171B27] border border-[#262D40]">
                  <div className="w-10 h-10 rounded-lg bg-[#FF3D71]/15 border border-[#FF3D71]/30 flex items-center justify-center text-[#FF3D71] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-slate-400">Location</p>
                    <p className="text-xs sm:text-sm font-semibold text-white">
                      {profileData.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Opportunities Checklist */}
            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-2xl bg-[#121520] border border-[#222838]"
            >
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FF8C00]" />
                Available & Open To
              </h4>
              <ul className="space-y-2">
                {openOpportunities.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Column: Functional Contact Form */}
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

