import { useState } from 'react';
import {
  Code2,
  ExternalLink,
  Maximize2,
  Sparkles,
  Layers,
  Bot,
  Radio,
  FileText
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const projectIcons = {
  weathergpt: Bot,
  logit: Code2,
  smartglove: Radio,
  lineeditor: FileText
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & Machine Learning' },
    { id: 'iot', label: 'IoT & Hardware' },
    { id: 'systems', label: 'Systems & C' }
  ];

  const filteredProjects = projectsData.filter((proj) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'ai')
      return proj.badge.toLowerCase().includes('ai') || proj.technologies.includes('AI/ML');
    if (activeFilter === 'iot')
      return proj.badge.toLowerCase().includes('iot') || proj.technologies.includes('IoT');
    if (activeFilter === 'systems')
      return proj.badge.toLowerCase().includes('systems') || proj.technologies.includes('C');
    return true;
  });

  return (
    <section id="projects" className="reveal-on-scroll py-24 relative overflow-hidden bg-transparent">
      {/* Glow Backdrops */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            Projects Built for <span className="gradient-text-cyan">Impact & Understanding</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Practical products spanning AI platforms, developer tools, hardware IoT, and systems programming.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setActiveFilter(f.id)}
              className={`btn-tab ${activeFilter === f.id ? 'active' : ''}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8">
          {filteredProjects.map((project) => {
            const IconComponent = projectIcons[project.id] || Code2;
            return (
              <div
                key={project.id}
                className="glass-card rounded-2xl border border-white/10 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group flex flex-col justify-between spotlight-card"
              >
                
                {/* Visual Preview Header Bar */}
                <div className="p-6 bg-slate-950/60 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="badge-std badge-cyan text-[10px] px-2.5 py-0.5 mb-1 inline-block">
                        {project.badge}
                      </span>
                      <h3 className="text-xl font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="btn-icon"
                    title="Expand Project Details"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Card Main Body */}
                <div className="p-6 space-y-4 flex-1">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.tagline}
                  </p>

                  {/* Problem Statement Preview */}
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 text-xs">
                    <span className="font-mono text-cyan-400 font-semibold block mb-1">
                      Problem Solved:
                    </span>
                    <p className="text-slate-400 line-clamp-2">
                      {project.problemSolved}
                    </p>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
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

                {/* Card Actions Footer */}
                <div className="p-6 bg-slate-950/40 border-t border-white/5 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="btn-base btn-secondary btn-sm group/btn"
                  >
                    <span>View Architecture</span>
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400 group-hover/btn:rotate-12 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-icon"
                      title="GitHub Repository"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-icon"
                      title="Live Demo"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Modal Popup */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
