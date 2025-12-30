import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from './data/portfolioData';
import CustomCursor from './components/layout/CustomCursor';


// Layout Components
import Loader from './components/layout/Loader';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Section Components
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Certifications from './components/sections/Certifications';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

// Particles
import ParticlesBackground from './components/ParticlesBackground';

// UI
import FloatingActions from './components/ui/FloatingActions';

import './index.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const handleEnter = () => {
    // Matches the exit animation of the loader
    setTimeout(() => {
      setIsLoaded(true);
      document.body.style.overflow = 'auto'; // Re-enable scroll
      setTimeout(() => {
        setShowMainContent(true);
      }, 100);
    }, 900);
  };

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      <CustomCursor />
      <ParticlesBackground />
      <AnimatePresence mode="wait">

        {!isLoaded && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Loader onEnter={handleEnter} />
          </motion.div>
        )}
      </AnimatePresence>

      {isLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={`main-content ${showMainContent ? 'zoom-in' : ''}`}
          id="mainContent"
        >
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Hero />
          <About />
          <Skills />
          <Certifications />
          <Projects />
          <Contact />
          <Footer />
        </motion.div>
      )}

      {/* Floating Action Buttons */}
      <FloatingActions />
    </div>
  );
}

export default App;
