import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from './components/layout/CustomCursor';
import ScrollProgress from './components/layout/ScrollProgress';

// Layout Components
import ProfileSelector from './components/layout/ProfileSelector';
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
import { portfolioData } from './data/portfolioData';

import './index.css';
import './App.css';

const PROFILE_IDS = ['developer', 'designer', 'instructor', 'quantum'];

function readInitialProfile() {
  try {
    const params = new URLSearchParams(window.location.search);
    const p = params.get('profile');
    if (PROFILE_IDS.includes(p)) return p;
    // Legacy support: ?mode=quantum / #quantum deep links
    const modeParam = params.get('mode') || params.get('view');
    if (modeParam === 'quantum' || window.location.hash === '#quantum') {
      return 'quantum';
    }
  } catch (e) {}
  return null; // null => show the profile selector entry gate
}

function AppContent() {
  // Active profile: 'developer' | 'designer' | 'instructor' | 'quantum' | null (selector)
  const [profile, setProfile] = useState(readInitialProfile);
  // viewMode is derived from the profile: only 'quantum' uses the research edition
  const viewMode = profile === 'quantum' ? 'quantum' : 'normal';

  // Default to Dark Mode as primary theme
  const [darkMode, setDarkMode] = useState(true);
  const [isCVOpen, setIsCVOpen] = useState(false);

  // Select a profile (or null to go back to the selector)
  const selectProfile = (id) => {
    setProfile(id);
    try {
      const url = new URL(window.location.href);
      if (id) {
        url.searchParams.set('profile', id);
      } else {
        url.searchParams.delete('profile');
      }
      url.hash = ''; // don't carry a stale section hash across profiles
      window.history.pushState({}, '', url.toString());
    } catch (e) {}
    window.scrollTo({ top: 0 });
  };

  // Sync mode changes with URL without full page reload (kept for legacy toggle buttons)
  const handleToggleViewMode = (targetMode) => {
    const nextMode = targetMode || (viewMode === 'normal' ? 'quantum' : 'normal');
    if (nextMode === 'quantum') {
      selectProfile('quantum');
    } else {
      selectProfile(profile === 'quantum' ? 'developer' : (profile || 'developer'));
    }
  };

  // Listen for browser popstate or hashchange
  useEffect(() => {
    const handleUrlChange = () => {
      const next = readInitialProfile();
      // Only react when the URL actually names a profile; back-button to the
      // bare URL keeps the current profile instead of bouncing to the selector.
      if (next) setProfile(next);
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

  // "Replay intro" now returns to the profile selector (acts as profile switcher)
  const handleReplayIntro = () => {
    selectProfile(null);
  };

  // Keep the browser tab title in sync with the active profile
  useEffect(() => {
    const label = (portfolioData.profiles || []).find(p => p.id === profile)?.label;
    document.title = label
      ? `Waseem Akram | ${label}`
      : 'Waseem Akram | Full-Stack Web Developer & Graphic Designer';
  }, [profile]);

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'} mode-${viewMode}`}>
      <ScrollProgress />
      <CustomCursor />
      <ParticlesBackground />
      
      <AnimatePresence mode="wait">
        {!profile ? (
          <motion.div
            key="profile-selector"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <ProfileSelector onSelect={selectProfile} />
          </motion.div>
        ) : (
        <motion.div
          key={`main-${profile}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="main-content zoom-in"
          id="mainContent"
        >
          <Navbar 
            darkMode={darkMode} 
            setDarkMode={setDarkMode} 
            onOpenCV={() => setIsCVOpen(true)}
            onReplayIntro={handleReplayIntro}
            viewMode={viewMode}
            onToggleViewMode={handleToggleViewMode}
            profile={profile}
            onSelectProfile={selectProfile}
          />

          <main id="main-portfolio-flow">
            <Hero 
              onOpenCV={() => setIsCVOpen(true)} 
              viewMode={viewMode}
              onToggleViewMode={handleToggleViewMode}
              profile={profile}
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
              profile={profile}
            />

            <Skills 
              viewMode={viewMode}
              onToggleViewMode={handleToggleViewMode}
              profile={profile}
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
      </AnimatePresence>

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
