import { Code2, Brain, Rocket, Compass, Terminal } from 'lucide-react';
import { aboutData, personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="reveal-on-scroll py-24 relative overflow-hidden bg-transparent">
      {/* Background Subtle Lighting */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-std badge-cyan mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            Engineering Code with a <span className="gradient-text-cyan">Builder Mindset</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Beyond standard computer science coursework, I bridge theory with real-world product engineering.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-10 items-stretch mb-16">
          
          {/* Main Story Card */}
          <div className="glass-card rounded-[1.75rem] p-7 sm:p-8 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-heading">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">
                    B.Tech CSE Student @ REVA University, Bengaluru
                  </p>
                </div>
              </div>

              <p className="text-slate-300 text-base leading-relaxed mb-5">
                {aboutData.narrative}
              </p>

              <p className="text-slate-400 text-sm leading-relaxed mb-0">
                Located in Bengaluru—India's primary technology hub—I immerse myself in software development, exploring how low-level systems (C, Data Structures) connect with high-level AI services (Python, FastAPI) and dynamic web interfaces.
              </p>
            </div>

            {/* Core Values Tag Grid */}
            <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap gap-2.5">
              <span className="tech-tag text-cyan-300">
                #ProblemSolver
              </span>
              <span className="tech-tag text-purple-300">
                #AIMLEnthusiast
              </span>
              <span className="tech-tag text-blue-300">
                #StartupMindset
              </span>
              <span className="tech-tag text-emerald-300">
                #REVACSE
              </span>
            </div>
          </div>

          {/* Highlights & Core Pillars */}
          <div className="flex flex-col gap-4">
            {aboutData.points.map((pt, idx) => {
              const icons = [Code2, Brain, Rocket];
              const IconComp = icons[idx % icons.length];
              return (
                <div
                  key={pt.title}
                  className="glass-card rounded-[1.4rem] p-5 border border-white/10 hover:border-cyan-500/40 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-500/40 transition-all shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white font-heading mb-1 group-hover:text-cyan-300 transition-colors">
                        {pt.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {pt.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {personalInfo.stats.map((st) => (
            <div
              key={st.label}
              className="glass-card rounded-xl p-5 border border-white/10 text-center hover:border-cyan-500/30 transition-all"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono mb-1">
                {st.value}
              </div>
              <div className="text-xs font-medium text-slate-400">
                {st.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
