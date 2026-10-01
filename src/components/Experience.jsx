import { GraduationCap, Award, Users, Code, Calendar, Terminal } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

const itemIcons = [GraduationCap, Award, Users, Code];

export default function Experience() {
  return (
    <section id="experience" className="reveal-on-scroll py-24 relative overflow-hidden bg-transparent">
      {/* Glow ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-std badge-cyan mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>ACTIVITIES & JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            Experience & <span className="gradient-text-cyan">Collaborations</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Focusing on execution, rapid hackathon builds, leadership, and continuous learning.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative max-w-4xl mx-auto">

          {/* Vertical Connecting Glow Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent -translate-x-1/2 opacity-30" />

          <div className="space-y-12">
            {experienceData.map((item, idx) => {
              const IconComp = itemIcons[idx % itemIcons.length];
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={item.role}
                  className={`relative flex flex-col sm:flex-row items-start ${isEven ? 'sm:flex-row-reverse' : ''
                    } gap-8`}
                >

                  {/* Timeline Center Node Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-900 border-2 border-cyan-500 text-cyan-400 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,242,254,0.4)] shrink-0">
                    <IconComp className="w-4 h-4" />
                  </div>

                  {/* Content Card */}
                  <div className={`w-full sm:w-[calc(50%-2.5rem)] ml-12 sm:ml-0 ${isEven ? 'sm:text-right' : 'sm:text-left'
                    }`}>
                    <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-cyan-500/40 transition-all group">

                      <div className={`flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2 ${isEven ? 'sm:justify-end' : 'sm:justify-start'
                        }`}>
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-purple-300">{item.type}</span>
                      </div>

                      <h3 className="text-lg font-bold text-white font-heading mb-1 group-hover:text-cyan-300 transition-colors">
                        {item.role}
                      </h3>

                      <h4 className="text-xs font-semibold text-slate-400 mb-3 font-mono">
                        {item.organization}
                      </h4>

                      <p className="text-xs text-slate-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className={`flex flex-wrap gap-1.5 ${isEven ? 'sm:justify-end' : 'sm:justify-start'
                        }`}>
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="tech-tag text-[10px]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
