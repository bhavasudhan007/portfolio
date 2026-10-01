import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Roadmap', href: '#roadmap' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Beyond Code', href: '#beyond-code' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060b12]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_14px_35px_-20px_rgba(0,0,0,0.9)] py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo / Brand */}
          <a
            href="#hero"
            className="flex items-center gap-3 group shrink-0"
            aria-label="Bhavasudhan S Home"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400/20 via-cyan-500/10 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.12)] group-hover:scale-[1.04] transition-transform duration-300">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-heading font-bold text-lg tracking-[-0.04em] text-white group-hover:text-cyan-300 transition-colors">
                Bhavasudhan S
              </span>
              <span className="text-[9px] font-mono uppercase tracking-[0.18em] text-slate-400 mt-1.5">
                Builder & Developer
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-slate-950/60 px-2 py-1.5 backdrop-blur-md shadow-[0_10px_25px_-20px_rgba(0,242,254,0.4)]">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-cyan-300 bg-cyan-500/15 border border-cyan-500/30 font-semibold shadow-[0_0_12px_rgba(0,242,254,0.2)]'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="btn-base btn-primary btn-sm"
            >
              <span>Contact Me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden btn-icon p-2"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[66px] bg-[#080C14]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-5 px-5 transition-all animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`px-3.5 py-2.5 text-sm font-medium rounded-xl transition-all ${
                    isActive
                      ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="btn-base btn-primary btn-md w-full"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
