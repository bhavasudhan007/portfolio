import { useState } from 'react';
import {
  ArrowRight,
  Download,
  Mail,
  Terminal,
  MapPin,
  Building2,
  Cpu,
  CheckCircle2,
  Copy,
  Check
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import HeroCanvas from './HeroCanvas';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      className="reveal-on-scroll relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-transparent"
    >
      {/* Radial Gradient Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Badge */}
            <div className="badge-std badge-cyan mb-6 shadow-[0_0_15px_rgba(0,242,254,0.15)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>{personalInfo.availability}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[5rem] font-extrabold tracking-[-0.06em] text-white font-heading leading-[0.96] mb-4">
              Hi, I'm <span className="gradient-text-cyan">{personalInfo.name}</span>
            </h1>

            <h2 className="text-2xl sm:text-3xl lg:text-[2.4rem] font-bold tracking-[-0.05em] text-slate-300 font-heading mb-6">
              {personalInfo.headline}
            </h2>

            {/* Introduction Paragraph */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              <span className="text-slate-200 font-medium">B.Tech Computer Science Engineering student</span> at{' '}
              <span className="text-cyan-300 font-semibold">{personalInfo.university}</span>, Bengaluru. 
              A passionate <span className="text-purple-300 font-medium">Software Developer</span>,{' '}
              <span className="text-cyan-300 font-medium">AI/ML enthusiast</span>, and relentless problem solver focused on building practical, scalable products.
            </p>

            {/* Quick Metadata Info Pills */}
            <div className="flex flex-wrap gap-3 text-xs font-mono text-slate-400 mb-8">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900/80 border border-white/10 text-slate-300">
                <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personalInfo.university} ({personalInfo.year})</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900/80 border border-white/10 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="btn-base btn-primary btn-md w-full sm:w-auto group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="btn-base btn-secondary btn-md w-full sm:w-auto"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>

              <a
                href={personalInfo.links.resume}
                className="btn-base btn-outline btn-md w-full sm:w-auto"
              >
                <Download className="w-4 h-4 text-purple-400" />
                <span>Resume / Bio</span>
              </a>
            </div>

            {/* Social Links & Quick Contact */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10 w-full">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-medium">
                Connect:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={personalInfo.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-icon"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-icon"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn-icon gap-2 px-3 text-xs font-mono"
                  title="Copy Email Address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied' : 'Email'}</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Developer Terminal Card */}
          <div className="lg:col-span-5 w-full">
            <div className="glass-panel rounded-2xl border border-cyan-500/20 shadow-2xl overflow-hidden spotlight-card transform lg:hover:-rotate-1 transition-transform duration-500">
              
              {/* Terminal Window Header */}
              <div className="bg-slate-950/80 px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>bhavasudhan-dev-workspace</span>
                </div>
                <div className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  LIVE
                </div>
              </div>

              {/* Terminal Code Body */}
              <div className="p-5 font-mono text-xs leading-relaxed text-slate-300 bg-[#0A0E1A]/90 space-y-3">
                
                <div className="text-slate-500">// Initialize Developer Environment</div>
                
                <div className="flex items-center gap-2 text-cyan-400">
                  <span className="text-purple-400">const</span> developer = <span className="text-amber-300">new</span> Developer();
                </div>

                <div className="text-slate-300 pl-4 border-l border-cyan-500/30 space-y-1.5 my-2">
                  <div><span className="text-slate-500">name:</span> <span className="text-emerald-300">"{personalInfo.name}"</span>,</div>
                  <div><span className="text-slate-500">university:</span> <span className="text-emerald-300">"REVA University"</span>,</div>
                  <div><span className="text-slate-500">degree:</span> <span className="text-emerald-300">"B.Tech CSE (2nd Year)"</span>,</div>
                  <div>
                    <span className="text-slate-500">interests:</span> [
                    <span className="text-amber-300">"Software Engineering"</span>, 
                    <span className="text-amber-300">"AI/ML"</span>, 
                    <span className="text-amber-300">"IoT"</span>
                    ],
                  </div>
                  <div>
                    <span className="text-slate-500">featuredProjects:</span> [
                    <span className="text-cyan-300">"WeatherGPT"</span>, 
                    <span className="text-cyan-300">"LogIT"</span>, 
                    <span className="text-cyan-300">"Smart Glove"</span>
                    ]
                  </div>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Status: Ready to build high-impact tech</span>
                  </div>
                </div>

                {/* Quick Interactive Snippet Execution */}
                <div className="mt-4 p-3 rounded-xl bg-slate-900/90 border border-white/10 flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-purple-400 animate-spin" />
                    <span className="text-slate-300">Current Focus: AI Applications & C/Python</span>
                  </div>
                  <span className="text-cyan-400 font-semibold">REVA CSE '27</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
