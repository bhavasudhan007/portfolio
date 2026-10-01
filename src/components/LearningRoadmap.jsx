import { ArrowRight, CheckCircle2, Compass, Sparkles, TrendingUp, Smartphone, Globe } from 'lucide-react';
import { roadmapData } from '../data/portfolioData';

export default function LearningRoadmap() {
  return (
    <section id="roadmap" className="reveal-on-scroll py-24 relative overflow-hidden bg-transparent">
      {/* Background Radial Lights */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-std badge-cyan mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>EVOLVING ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            Development Journey & <span className="gradient-text-cyan">Next Horizons</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A dynamic visual graph of mastered foundations and ongoing technical progression.
          </p>
        </div>

        {/* Roadmap Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Current Foundations */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span>Current Foundation Node Graph</span>
              </h3>
              <span className="badge-std badge-cyan text-xs">
                Active & Mastered
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {roadmapData.foundations.map((item) => (
                <div
                  key={item.name}
                  className="glass-card rounded-2xl p-5 border border-white/10 hover:border-cyan-500/40 transition-all group relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="tech-tag text-xs">
                      {item.name}
                    </span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </div>

                  <h4 className="text-base font-bold text-white font-heading mb-1 group-hover:text-cyan-300 transition-colors">
                    {item.target}
                  </h4>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-cyan-400">
                    <span>Status: {item.status}</span>
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Connecting Connector Arrow for Large Screens */}
          <div className="hidden lg:flex lg:col-span-1 items-center justify-center py-24">
            <div className="flex flex-col items-center gap-2 text-cyan-400 animate-pulse">
              <TrendingUp className="w-6 h-6 rotate-90" />
              <span className="text-[10px] font-mono tracking-widest uppercase rotate-90 my-4">
                TRAJECTORY
              </span>
              <ArrowRight className="w-6 h-6" />
            </div>
          </div>

          {/* Column 2: Upcoming & Horizon Learning */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span>Next Horizons</span>
              </h3>
              <span className="badge-std badge-purple text-xs">
                Learning Direction
              </span>
            </div>

            <div className="space-y-4">
              {roadmapData.upcoming.map((item, idx) => (
                <div
                  key={item.name}
                  className="glass-card rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all group bg-gradient-to-r from-slate-950/80 to-purple-950/20"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {idx === 0 ? (
                        <Globe className="w-5 h-5 text-cyan-400" />
                      ) : (
                        <Smartphone className="w-5 h-5 text-purple-400" />
                      )}
                      <span className="text-xs font-mono text-purple-300">
                        {item.name}
                      </span>
                    </div>
                    <span className="badge-std badge-purple text-[10px]">
                      {item.status}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white font-heading mb-1 group-hover:text-purple-300 transition-colors">
                    {item.target}
                  </h4>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote / Mindset card */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 text-xs font-mono text-slate-300 leading-relaxed">
              <span className="text-cyan-400 font-bold block mb-1">
                // Continuous Iteration Principle:
              </span>
              "Master fundamental data structures first, then orchestrate intelligent fullstack & mobile experiences."
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
