import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Determine active section
      const sections = navLinks.map(link => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isScrolled ? 0 : -100,
          opacity: isScrolled ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="glass-strong rounded-2xl px-6 py-3 flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xl font-bold text-gradient"
            >
              Gulshair
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${activeSection === link.href.slice(1)
                      ? 'text-portfolio-indigo'
                      : 'text-portfolio-muted hover:text-portfolio-text'
                    }`}
                >
                  {link.label}
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-portfolio-indigo rounded-full"
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-4 py-2 rounded-lg bg-portfolio-indigo/10 text-portfolio-indigo text-sm font-medium hover:bg-portfolio-indigo/20 transition-colors"
              >
                Hire Me
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-lg bg-portfolio-surface flex items-center justify-center text-portfolio-text"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-portfolio-bg/90 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-portfolio-surface border-l border-portfolio-indigo/20 p-6 pt-20"
            >
              <div className="space-y-2">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    onClick={() => scrollToSection(link.href)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition-colors ${activeSection === link.href.slice(1)
                        ? 'bg-portfolio-indigo/10 text-portfolio-indigo'
                        : 'text-portfolio-muted hover:text-portfolio-text hover:bg-portfolio-bg'
                      }`}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="mt-8 pt-8 border-t border-portfolio-indigo/20"
              >
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full btn-primary"
                >
                  Hire Me
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
