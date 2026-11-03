import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown, Terminal } from 'lucide-react';
import { Button } from '../Buttons/Button';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section scroll spy
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF6EE]/90 dark:bg-[#0B0B10]/85 backdrop-blur-md border-b border-[#E2D7C5] dark:border-white/[0.06] shadow-sm shadow-[#29231F]/5 dark:shadow-md dark:shadow-black/40 py-2.5 sm:py-3'
          : 'bg-transparent py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl 2xl:max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="flex items-center justify-between gap-3">
          {/* Logo Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 sm:gap-2.5 group focus:outline-none min-w-0"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#721C35] to-[#A83250] dark:from-[#F28C28] dark:to-[#A83250] p-[1.5px] transition-transform duration-300 group-hover:scale-105 shrink-0">
              <div className="w-full h-full bg-[#FFFFFF] dark:bg-[#0B0B10] rounded-[7px] flex items-center justify-center">
                <Terminal className="w-3.5 h-3.5 text-[#721C35] dark:text-[#F28C28]" />
              </div>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm sm:text-base font-bold tracking-tight text-[#29231F] dark:text-white group-hover:text-[#721C35] dark:group-hover:text-[#F28C28] transition-colors truncate">
                Priyam Singh
              </span>
              <span className="text-[9px] font-medium tracking-wider uppercase text-[#655B50] dark:text-slate-400 truncate">
                Data Analyst | ML
              </span>
            </div>
          </a>

          {/* Clean Horizontal Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative py-1 text-[13px] font-medium tracking-wide transition-colors duration-200 select-none ${
                    isActive
                      ? 'text-[#721C35] dark:text-white font-semibold'
                      : 'text-[#5C524A] hover:text-[#29231F] dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#721C35] via-[#A83250] to-[#481426] dark:from-[#F28C28] dark:via-[#FF9D32] dark:to-[#A83250] rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Theme Switcher, Resume & Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Theme Toggle (Desktop & Tablet) */}
            <ThemeToggle className="hidden sm:inline-flex" />

            {/* Resume Button */}
            <Button
              href="/Priyam-Singh-Resume.pdf"
              download="Priyam-Singh-Resume.pdf"
              variant="outline"
              size="sm"
              leftIcon={<FileDown className="w-3.5 h-3.5 text-[#721C35] dark:text-[#F28C28]" />}
              className="hidden sm:inline-flex rounded-lg px-3.5 py-1.5 text-xs font-semibold hover:border-[#721C35] dark:hover:border-[#F28C28]"
            >
              Resume
            </Button>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#5C524A] dark:text-slate-300 hover:text-[#29231F] dark:hover:text-white bg-[#FFFFFF] dark:bg-[#17151B] border border-[#E2D7C5] dark:border-white/[0.08] focus:outline-none focus:ring-1 focus:ring-[#721C35] dark:focus:ring-[#F28C28] transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-[#FAF6EE]/98 dark:bg-[#111116]/98 border-b border-[#E2D7C5] dark:border-[#24222B] backdrop-blur-2xl shadow-2xl"
          >
            <div className="max-w-7xl 2xl:max-w-[1520px] mx-auto px-4 pt-3 pb-5 flex flex-col gap-1">
              {/* Mobile Theme Toggle Row */}
              <div className="pb-2 mb-1 border-b border-[#E2D7C5] dark:border-white/[0.08]">
                <ThemeToggle variant="full" />
              </div>

              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-3.5 py-2.5 rounded-lg text-xs font-semibold transition-all flex items-center justify-between ${
                      isActive
                        ? 'text-[#721C35] bg-[#721C35]/10 border-l-2 border-[#721C35] dark:text-[#FF9D32] dark:bg-[#481426]/40 dark:border-[#F28C28]'
                        : 'text-[#5C524A] hover:bg-[#F2EAE0] hover:text-[#29231F] dark:text-slate-300 dark:hover:bg-[#17151B] dark:hover:text-white'
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#721C35] dark:bg-[#F28C28]" />
                    )}
                  </a>
                );
              })}
              <div className="pt-2 mt-2 border-t border-[#E2D7C5] dark:border-white/[0.08]">
                <Button
                  href="/Priyam-Singh-Resume.pdf"
                  download="Priyam-Singh-Resume.pdf"
                  variant="primary"
                  size="sm"
                  leftIcon={<FileDown className="w-3.5 h-3.5" />}
                  className="w-full justify-center"
                >
                  Download Resume
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
