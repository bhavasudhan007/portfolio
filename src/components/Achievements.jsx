import { Trophy, Rocket, Users, Award, Star } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

const iconMap = {
  Trophy,
  Rocket,
  Users,
  Award
};

export default function Achievements() {
  return (
    <section id="achievements" className="reveal-on-scroll py-24 relative overflow-hidden bg-transparent">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-std badge-purple mb-4">
            <Trophy className="w-3.5 h-3.5" />
            <span>MILESTONES & RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            Key <span className="gradient-text-purple">Achievements</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Milestones across competitive hackathons, software execution, and technical community participation.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementsData.map((item) => {
            const IconComp = iconMap[item.icon] || Trophy;
            return (
              <div
                key={item.title}
                className="glass-card rounded-2xl p-6 border border-white/10 hover:border-purple-500/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:border-purple-500/50 transition-all">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="badge-std badge-purple text-[10px]">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white font-heading mb-2 group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>REVA University CSE</span>
                  <Star className="w-3.5 h-3.5 text-purple-400 fill-purple-400/20" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
