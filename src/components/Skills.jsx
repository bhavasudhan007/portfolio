import { useState } from 'react';
import {
  Code2,
  Coffee,
  Terminal,
  FileCode,
  Palette,
  Cpu,
  Database,
  Server,
  Layers,
  Box,
  Zap,
  GitBranch,
  Globe,
  Sparkles,
  Search
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { skillsCategories, skillsData } from '../data/portfolioData';

const iconMap = {
  Code2,
  Coffee,
  Terminal,
  FileCode,
  Palette,
  Cpu,
  Database,
  Server,
  Layers,
  Box,
  Zap,
  GitBranch,
  Github: GithubIcon,
  Globe,
  Sparkles
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory =
      activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="reveal-on-scroll py-24 relative overflow-hidden bg-transparent">
      {/* Subtle Glow Overlay */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            Tools, Technologies & <span className="gradient-text-purple">Core Foundations</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Structured computer science fundamentals paired with modern software development toolchains.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 mb-12 bg-slate-900/70 p-2.5 rounded-2xl border border-white/10 backdrop-blur-md shadow-[0_15px_35px_-25px_rgba(56,189,248,0.4)]">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {skillsCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`btn-tab ${activeCategory === cat.id ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-std pl-10 py-2 text-xs font-mono"
            />
          </div>

        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
          {filteredSkills.map((skill) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <div
                key={skill.name}
                className="glass-card rounded-2xl p-6 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-500/40 group-hover:text-cyan-300 transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="badge-std badge-cyan text-[10px]">
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-heading mb-2 group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {skill.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                  <span>Category: {skill.category}</span>
                  <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    ● Verified Skill
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-slate-500 font-mono text-sm">
            No matching skills found for "{searchQuery}".
          </div>
        )}

      </div>
    </section>
  );
}
