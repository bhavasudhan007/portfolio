import { useEffect } from 'react';
import {
  X,
  ExternalLink,
  CheckCircle2,
  Terminal,
  Sparkles
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-xl animate-fadeIn">
      {/* Backdrop click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Content Window */}
      <div className="relative w-full max-w-4xl bg-[#0B0F1A] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-slate-950/90 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="badge-std badge-cyan">
              {project.badge}
            </span>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              Project ID: #{project.id}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="btn-icon p-2"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5 text-slate-300" />
          </button>
        </div>

        {/* Modal Scroll Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-8">
          
          {/* Title & Tagline */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mb-3">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-cyan-300 font-medium leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Problem Solved Highlight Box */}
          <div className="glass-panel p-6 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-950/30 to-purple-950/30">
            <div className="flex items-center gap-2 text-cyan-400 font-heading font-bold text-sm mb-2">
              <Sparkles className="w-4 h-4" />
              <span>THE PROBLEM SOLVED</span>
            </div>
            <p className="text-sm text-slate-200 leading-relaxed font-sans">
              {project.problemSolved}
            </p>
          </div>

          {/* Detailed Overview */}
          <div>
            <h3 className="text-lg font-bold text-white font-heading mb-3">
              Project Architecture & Overview
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Engineering Highlights */}
          <div>
            <h3 className="text-lg font-bold text-white font-heading mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              <span>Key Features & Innovations</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-2.5 text-xs text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Code Snippet / Technical Highlights */}
          {project.codeSnippet && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-white font-heading flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-purple-400" />
                  <span>Architecture Code Snippet</span>
                </h3>
                <span className="text-[10px] font-mono text-slate-500">Source Preview</span>
              </div>
              <pre className="p-4 rounded-xl bg-slate-950 border border-white/10 text-slate-300 font-mono text-xs overflow-x-auto leading-relaxed">
                <code>{project.codeSnippet}</code>
              </pre>
            </div>
          )}

          {/* Tech Stack Used */}
          <div>
            <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider mb-3">
              Technologies & Concepts:
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="tech-tag"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Action Buttons Footer */}
        <div className="px-6 py-4 bg-slate-950/90 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-secondary btn-sm"
            >
              <GithubIcon className="w-4 h-4 text-cyan-400" />
              <span>Source Repository</span>
            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-primary btn-sm"
            >
              <span>Live Demonstration</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="btn-base btn-outline btn-sm"
          >
            Close [ESC]
          </button>
        </div>

      </div>
    </div>
  );
}
