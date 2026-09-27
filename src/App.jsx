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
import AdminDashboard from './components/admin/AdminDashboard';
import { PortfolioDataProvider } from './context/PortfolioDataContext';

import './index.css';
import './App.css';

function AppContent() {
  // Determine initial view mode: 'quantum' if ?mode=quantum or #quantum, else default to 'normal'
  const [viewMode, setViewMode] = useState(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const modeParam = params.get('mode') || params.get('view');
      if (modeParam === 'quantum' || window.location.hash === '#quantum') {
        return 'quantum';
      }
    } catch (e) {}
    return 'normal'; // Default to Normal Portfolio view!
  });

  const [isLoaded, setIsLoaded] = useState(false);
  // Default to Dark Mode as primary theme
  const [darkMode, setDarkMode] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);
  const [isCVOpen, setIsCVOpen] = useState(false);

  // Sync mode changes with URL without full page reload
  const handleToggleViewMode = (targetMode) => {
    const nextMode = targetMode || (viewMode === 'normal' ? 'quantum' : 'normal');
    setViewMode(nextMode);
    try {
      const url = new URL(window.location.href);
      if (nextMode === 'quantum') {
        url.searchParams.set('mode', 'quantum');
        window.history.pushState({ mode: 'quantum' }, '', url.toString());
      } else {
        url.searchParams.delete('mode');
        url.searchParams.delete('view');
        if (url.hash === '#quantum') {
          url.hash = '';
        }
        window.history.pushState({ mode: 'normal' }, '', url.pathname + (url.search ? url.search : '') + url.hash);
      }
    } catch (e) {}
  };

  // Listen for browser popstate or hashchange
  useEffect(() => {
    const handleUrlChange = () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const modeParam = params.get('mode') || params.get('view');
        if (modeParam === 'quantum' || window.location.hash === '#quantum') {
          setViewMode('quantum');
        } else {
          setViewMode('normal');
        }
      } catch (e) {}
    };

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

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
    setIsLoaded(true);
    document.body.style.overflow = 'auto';
    setShowMainContent(true);
  };

  const handleReplayIntro = () => {
    setIsLoaded(false);
    setShowMainContent(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'} mode-${viewMode}`}>
      <ScrollProgress />
      <CustomCursor />
      <ParticlesBackground />
      
      <AnimatePresence mode="wait">
        {!isLoaded && (
          <motion.div
            key={`loader-${viewMode}`}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Loader 
              onEnter={handleEnter} 
              viewMode={viewMode} 
              onToggleViewMode={handleToggleViewMode} 
            />
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
          {/* Top banner if in Special Quantum Mode */}
          {viewMode === 'quantum' && (
            <div className="quantum-mode-banner py-1 px-3 bg-dark-subtle border-bottom border-cyan-subtle">
              <div className="container d-flex justify-content-between align-items-center flex-wrap gap-2">
                <span className="small text-cyan font-mono d-inline-flex align-items-center gap-2">
                  <i className="fas fa-atom" />
                  <span>Viewing: Special Quantum Research Edition</span>
                </span>
                <button 
                  onClick={() => handleToggleViewMode('normal')}
                  className="btn btn-sm btn-outline-success rounded-pill py-0 px-3 font-mono"
                  style={{ fontSize: '0.78rem' }}
                  title="Switch to Normal Web Developer Portfolio"
                >
                  ← Return to Normal Portfolio
                </button>
              </div>
            </div>
          )}

          <Navbar 
            darkMode={darkMode} 
            setDarkMode={setDarkMode} 
            onOpenCV={() => setIsCVOpen(true)}
            onReplayIntro={handleReplayIntro}
            viewMode={viewMode}
            onToggleViewMode={handleToggleViewMode}
          />

          <main id="main-portfolio-flow">
            <Hero 
              onOpenCV={() => setIsCVOpen(true)} 
              viewMode={viewMode}
              onToggleViewMode={handleToggleViewMode}
            />

            <About 
              viewMode={viewMode}
              onToggleViewMode={handleToggleViewMode}
            />

            {/* In Quantum Mode, display Research & Thesis sections prominently */}
            {viewMode === 'quantum' && (
              <>
                <CurrentResearch />
                <ResearchFocus />
              </>
            )}

            {/* In Normal Mode, display an attractive Teaser Card for the Quantum Research */}
            {viewMode === 'normal' && (
              <section className="py-4 quantum-teaser-section">
                <div className="container">
                  <div className="quantum-teaser-card p-4 p-md-5 rounded-4 d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-4">
                    <div className="teaser-content">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <span className="badge bg-cyan-subtle text-cyan font-mono small">
                          SPECIAL RESEARCH EDITION
                        </span>
                        <span className="badge bg-secondary-subtle text-light font-mono small">
                          IUB Graduate Track
                        </span>
                      </div>
                      <h4 className="fw-bold mb-2 text-white">
                        Explore Quantum Computing &amp; QAOA Optimization Research
                      </h4>
                      <p className="text-secondary-emphasis mb-0 small">
                        Looking for Waseem's research on Qubit-Efficient Warm-Started QAOA for Vehicle Routing, quantum circuits, and simulation?
                      </p>
                    </div>
                    <button 
                      onClick={() => handleToggleViewMode('quantum')}
                      className="btn btn-custom-cyan px-4 py-2 rounded-pill flex-shrink-0 d-inline-flex align-items-center gap-2 shadow-lg"
                      title="Switch to Special Quantum Mode"
                    >
                      <i className="fas fa-atom" />
                      <span>Launch Quantum Edition →</span>
                    </button>
                  </div>
                </div>
              </section>
            )}

            <Projects 
              viewMode={viewMode}
              onToggleViewMode={handleToggleViewMode}
            />

            <Skills 
              viewMode={viewMode}
              onToggleViewMode={handleToggleViewMode}
            />

            <Experience />
            
            <Education />

            <Certifications />

            <GithubSection />

            <Contact />
          </main>

          <Footer 
            viewMode={viewMode}
            onToggleViewMode={handleToggleViewMode}
          />

          {/* Dynamic Curriculum Vitae Modal (Switches with viewMode) */}
          <CVModal 
            isOpen={isCVOpen} 
            onClose={() => setIsCVOpen(false)} 
            viewMode={viewMode}
            onToggleViewMode={handleToggleViewMode}
          />
        </motion.div>
      )}

      {/* Floating Action Buttons */}
      <FloatingActions 
        onReplayIntro={handleReplayIntro} 
        viewMode={viewMode}
        onToggleViewMode={handleToggleViewMode}
      />

      {/* Admin Content Management Dashboard */}
      <AdminDashboard />
    </div>
  );
}

export default function App() {
  return (
    <PortfolioDataProvider>
      <AppContent />
    </PortfolioDataProvider>
  );
}
