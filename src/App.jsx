import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import LearningRoadmap from './components/LearningRoadmap';
import Achievements from './components/Achievements';
import BeyondCode from './components/BeyondCode';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HeroCanvas from './components/HeroCanvas';
import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const revealItems = document.querySelectorAll('.reveal-on-scroll');

    const handleScroll = () => {
      const scrollY = window.scrollY;
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          if (sectionId) setActiveSection(sectionId);
        }
      });
    };

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px'
      }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200 relative">
      {/* Global Viewport Particle Node Canvas */}
      <HeroCanvas />
      
      <Navbar activeSection={activeSection} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <LearningRoadmap />
        <Achievements />
        <BeyondCode />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
