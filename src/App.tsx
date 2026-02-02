import { useEffect } from 'react';
import './App.css';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import TechStack from './sections/TechStack';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll polyfill for older browsers
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-portfolio-bg text-portfolio-text overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
