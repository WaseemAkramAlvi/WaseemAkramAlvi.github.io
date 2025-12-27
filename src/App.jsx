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

  useEffect(() => {
    // Check if user has already seen the splash screen in this session
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');

    if (hasSeenSplash) {
      setIsLoaded(true);
      setShowMainContent(true);
    }
  }, []);

  const handleEnter = () => {
    // Matches the exit animation of the loader
    setTimeout(() => {
      setIsLoaded(true);
      document.body.style.overflow = 'auto';
      sessionStorage.setItem('hasSeenSplash', 'true');
      setTimeout(() => {
        setShowMainContent(true);
      }, 100);
    }, 1600);
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
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
      >
        <a href={`https://wa.me/${portfolioData.personalInfo.phone.replace(/[\s\+]+/g, '')}?text=Hello%20Waseem%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.`}
          target="_blank" className="whatsapp-button" title="Chat on WhatsApp">
          <i className="fab fa-whatsapp"></i>
        </a>

        <button className="scroll-to-top" id="scrollToTop" title="Back to Top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <i className="fas fa-arrow-up"></i>
        </button>
      </motion.div>
    </div>
  );
}

export default App;
