import { useState } from 'react';
import {
  Mail,
  Send,
  MapPin,
  Building2,
  Copy,
  Check,
  Sparkles,
  MessageSquareCheck
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) newErrors.message = 'Message content is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="reveal-on-scroll py-24 relative overflow-hidden bg-transparent">
      {/* Background glow overlay */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header CTA */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white font-heading tracking-tight mb-4">
            Have an idea <span className="gradient-text-cyan">worth building?</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Whether you have an interesting hackathon collaboration, AI project idea, tech discussion, or developer opportunity—my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white font-heading">
                Contact Details
              </h3>

              {/* Email Box */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">
                      Direct Email
                    </span>
                    <span className="text-xs font-mono text-cyan-300 font-semibold">
                      {personalInfo.links.email}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn-icon"
                  title="Copy Email Address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location & University */}
              <div className="space-y-3 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-3">
                  <Building2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>{personalInfo.university}, Bengaluru</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-3">
                  Developer Profiles:
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalInfo.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-base btn-secondary btn-sm justify-start font-mono"
                  >
                    <GithubIcon className="w-4 h-4 text-cyan-400" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-base btn-secondary btn-sm justify-start font-mono"
                  >
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Response Time Badge */}
            <div className="badge-std badge-cyan w-full justify-center py-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Response Window: Typically within 24 hours</span>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl">
              
              <h3 className="text-2xl font-bold text-white font-heading mb-6">
                Send a Direct Message
              </h3>

              {submitted ? (
                <div className="p-8 text-center rounded-2xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 space-y-3 animate-fadeIn">
                  <MessageSquareCheck className="w-12 h-12 text-cyan-400 mx-auto" />
                  <h4 className="text-xl font-bold font-heading text-white">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out, Bhavasudhan S will review your message and respond shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Input */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`input-std ${
                          errors.name ? 'border-rose-500 focus:border-rose-500' : ''
                        }`}
                      />
                      {errors.name && (
                        <span className="text-[10px] font-mono text-rose-400 mt-1 block">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email Input */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`input-std ${
                          errors.email ? 'border-rose-500 focus:border-rose-500' : ''
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[10px] font-mono text-rose-400 mt-1 block">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                      Subject / Topic *
                    </label>
                    <input
                      type="text"
                      placeholder="Project Collaboration / Opportunity"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`input-std ${
                        errors.subject ? 'border-rose-500 focus:border-rose-500' : ''
                      }`}
                    />
                    {errors.subject && (
                      <span className="text-[10px] font-mono text-rose-400 mt-1 block">
                        {errors.subject}
                      </span>
                    )}
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                      Message Content *
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell me about your project, idea, or challenge..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`input-std resize-none ${
                        errors.message ? 'border-rose-500 focus:border-rose-500' : ''
                      }`}
                    />
                    {errors.message && (
                      <span className="text-[10px] font-mono text-rose-400 mt-1 block">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-base btn-primary btn-md w-full"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Transmitting Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
