import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from './components/layout/CustomCursor';
import ScrollProgress from './components/layout/ScrollProgress';

// Layout Components
import Loader from './components/layout/Loader';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Section Components
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import CurrentResearch from './components/sections/CurrentResearch';
import ResearchFocus from './components/sections/ResearchFocus';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Certifications from './components/sections/Certifications';
import GithubSection from './components/sections/GithubSection';
import Contact from './components/sections/Contact';

// Particles & UI
import ParticlesBackground from './components/ParticlesBackground';
import FloatingActions from './components/ui/FloatingActions';
import CVModal from './components/ui/CVModal';

import './index.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  // Default to Dark Mode as primary theme
  const [darkMode, setDarkMode] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);
  const [isCVOpen, setIsCVOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove('light-mode');
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
      document.documentElement.classList.remove('dark-mode');
      document.documentElement.classList.add('light-mode');
      document.documentElement.setAttribute('data-bs-theme', 'light');
    }
  }, [darkMode]);

  const handleEnter = () => {
    setTimeout(() => {
      setIsLoaded(true);
      document.body.style.overflow = 'auto';
      setTimeout(() => {
        setShowMainContent(true);
      }, 100);
    }, 800);
  };

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <ScrollProgress />
      <CustomCursor />
      <ParticlesBackground />
      
      <AnimatePresence mode="wait">
        {!isLoaded && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <Loader onEnter={handleEnter} />
          </motion.div>
        )}
      </AnimatePresence>

      {isLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={`main-content ${showMainContent ? 'zoom-in' : ''}`}
          id="mainContent"
        >
          <Navbar 
            darkMode={darkMode} 
            setDarkMode={setDarkMode} 
            onOpenCV={() => setIsCVOpen(true)}
          />

          <main id="main-portfolio-flow">
            <Hero onOpenCV={() => setIsCVOpen(true)} />
            <About />
            <CurrentResearch />
            <ResearchFocus />
            <Projects />
            <Skills />
            <Education />
            <Experience />
            <Certifications />
            <GithubSection />
            <Contact />
          </main>

          <Footer />

          {/* Academic & Technical CV Modal */}
          <CVModal 
            isOpen={isCVOpen} 
            onClose={() => setIsCVOpen(false)} 
          />
        </motion.div>
      )}

      {/* Floating Action Buttons */}
      <FloatingActions />
    </div>
  );
}

export default App;
