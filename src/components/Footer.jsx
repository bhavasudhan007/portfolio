import { ArrowUp, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-transparent border-t border-white/10 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/10">
          
          {/* Brand Signature */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-white">
                {personalInfo.name}
              </h3>
              <p className="text-xs font-mono text-cyan-400 italic">
                "Building. Learning. Improving."
              </p>
            </div>
          </div>

          {/* Quick Nav Anchors */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
            <a href="#about" className="hover:text-cyan-300 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-300 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-300 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-cyan-300 transition-colors">Experience</a>
            <a href="#roadmap" className="hover:text-cyan-300 transition-colors">Roadmap</a>
            <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
          </div>

          {/* Scroll to Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="btn-base btn-secondary btn-sm group font-mono"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Designed & Engineered for</span>
            <span className="text-cyan-400 font-semibold">REVA University Student Portfolio</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
