import { ArrowUp, Github, Linkedin, Mail, Terminal, Heart } from 'lucide-react';

const footerNavItems = [
  { name: 'Home', href: '#home' },
  { name: 'About Me', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0B0B10] border-t border-[#24222B] pt-16 pb-12 relative overflow-hidden">
      {/* Background glow subtle aura */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#F28C28]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#24222B]">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F28C28] via-[#E06D28] to-[#A83250] p-[1.5px]">
                <div className="w-full h-full bg-[#0B0B10] rounded-[10px] flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-[#F28C28]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">Priyam Singh</h3>
                <p className="text-xs font-medium text-[#FF9D32]">
                  Data Analyst | Machine Learning Engineer
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Computer Science undergraduate dedicated to transforming complex data into clear,
              actionable business intelligence and high-accuracy predictive machine learning models.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/priyam-10"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-xl bg-[#17151B] border border-[#24222B] flex items-center justify-center text-slate-400 hover:text-white hover:border-[#F28C28]/50 hover:bg-[#1E1420] transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/priyamsingh10"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-xl bg-[#17151B] border border-[#24222B] flex items-center justify-center text-slate-400 hover:text-[#38BDF8] hover:border-[#38BDF8]/50 hover:bg-[#1E1420] transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:priyamsingh0017@gmail.com"
                aria-label="Send Email"
                className="w-10 h-10 rounded-xl bg-[#17151B] border border-[#24222B] flex items-center justify-center text-slate-400 hover:text-[#FF9D32] hover:border-[#F28C28]/50 hover:bg-[#1E1420] transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {footerNavItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm text-slate-400 hover:text-[#FF9D32] transition-colors py-1"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            © 2026 Priyam Singh. All Rights Reserved. Built with clean code & precision.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-xs text-slate-500 inline-flex items-center gap-1.5">
              <span>Made with analytical rigor</span>
              <Heart className="w-3.5 h-3.5 text-[#A83250] fill-[#A83250]" />
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white bg-[#17151B] border border-[#24222B] hover:border-[#F28C28]/50 hover:bg-[#1E1420] px-3 py-1.5 rounded-lg transition-all cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

