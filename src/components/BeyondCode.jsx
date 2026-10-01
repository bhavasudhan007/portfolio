import { Flame, Target, Rocket, CheckCircle2 } from 'lucide-react';
import { beyondCodeData } from '../data/portfolioData';

export default function BeyondCode() {
  return (
    <section id="beyond-code" className="reveal-on-scroll py-24 relative overflow-hidden bg-transparent">
      {/* Background radial lights */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-std badge-cyan mb-4">
            <Flame className="w-3.5 h-3.5" />
            <span>PERSONALITY & DRIVES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            Beyond the <span className="gradient-text-cyan">Terminal</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            High performance isn't limited to software—it spans athletic discipline and product strategy.
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Cricket Passion Card */}
          <div className="glass-card rounded-2xl p-8 border border-white/10 hover:border-cyan-500/40 transition-all group flex flex-col justify-between spotlight-card">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <span className="badge-std badge-cyan text-[10px] mb-1">
                    Athletic Pursuit
                  </span>
                  <h3 className="text-2xl font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                    {beyondCodeData.cricket.title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {beyondCodeData.cricket.description}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 font-medium">
                Key Mindset Parallels:
              </h4>
              <div className="space-y-2">
                {beyondCodeData.cricket.takeaways.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Entrepreneurship Card */}
          <div className="glass-card rounded-2xl p-8 border border-white/10 hover:border-purple-500/40 transition-all group flex flex-col justify-between spotlight-card">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                  <Rocket className="w-6 h-6" />
                </div>
                <div>
                  <span className="badge-std badge-purple text-[10px] mb-1">
                    Product & Business
                  </span>
                  <h3 className="text-2xl font-bold text-white font-heading group-hover:text-purple-300 transition-colors">
                    {beyondCodeData.entrepreneurship.title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {beyondCodeData.entrepreneurship.description}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                Core Principles:
              </h4>
              <div className="space-y-2">
                {beyondCodeData.entrepreneurship.takeaways.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
