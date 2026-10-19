import React, { createContext, useContext, useState, useEffect } from 'react';
import { portfolioData as initialPortfolioData } from '../data/portfolioData';

const PortfolioDataContext = createContext(null);

const STORAGE_KEY = 'waseem_portfolio_custom_data';
const PIN_STORAGE_KEY = 'waseem_admin_pin';
const AUTH_STORAGE_KEY = 'waseem_admin_authenticated';
const DEFAULT_PIN = '1234';

export const PortfolioDataProvider = ({ children }) => {
  // Load data merging localStorage with default initial data
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...initialPortfolioData,
          ...parsed,
          personalInfo: { ...initialPortfolioData.personalInfo, ...(parsed.personalInfo || {}) },
          normalTechnicalSkills: parsed.normalTechnicalSkills || initialPortfolioData.normalTechnicalSkills,
          technicalSkills: parsed.technicalSkills || initialPortfolioData.technicalSkills,
          certDetails: parsed.certDetails || initialPortfolioData.certDetails
        };
      }
    } catch (e) {
      console.warn('Failed to load custom portfolio data from localStorage:', e);
    }
    return initialPortfolioData;
  });

  // Admin Modal and Authentication State
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return sessionStorage.getItem(AUTH_STORAGE_KEY) === 'true';
    } catch (e) {
      return false;
    }
  });

  // Detect #admin or ?admin=true in URL on load & listen for popstate/hashchange
  useEffect(() => {
    const checkAdminInUrl = () => {
      try {
        const params = new URLSearchParams(window.location.search);
        if (params.get('admin') === 'true' || window.location.hash === '#admin') {
          setIsAdminOpen(true);
        }
      } catch (e) {}
    };

    checkAdminInUrl();
    window.addEventListener('hashchange', checkAdminInUrl);
    window.addEventListener('popstate', checkAdminInUrl);
    return () => {
      window.removeEventListener('hashchange', checkAdminInUrl);
      window.removeEventListener('popstate', checkAdminInUrl);
    };
  }, []);

  // Keyboard shortcut: Ctrl+Shift+A or Cmd+Shift+A to toggle admin
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        setIsAdminOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Persist data updates to state & localStorage
  const persistData = (updatedData) => {
    setData(updatedData);
    try {
      // Create a clean serializable snapshot (without DOM or circular refs)
      const serializableData = {
        personalInfo: updatedData.personalInfo,
        experience: updatedData.experience,
        education: updatedData.education,
        projects: updatedData.projects,
        normalTechnicalSkills: updatedData.normalTechnicalSkills,
        technicalSkills: updatedData.technicalSkills,
        certifications: updatedData.certifications.map(c => ({
          name: c.name,
          tooltip: c.tooltip,
          desc: c.desc
        })),
        certDetails: updatedData.certDetails,
        normalStats: updatedData.normalStats,
        quantumStats: updatedData.quantumStats,
        currentResearch: updatedData.currentResearch,
        lastUpdated: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(serializableData));
    } catch (e) {
      console.error('Failed to save portfolio data to localStorage:', e);
    }
  };

  // Updaters for specific sections
  const updateExperiences = (newExperienceList) => {
    const updated = { ...data, experience: newExperienceList };
    persistData(updated);
  };

  const updateEducation = (newEducationList) => {
    const updated = { ...data, education: newEducationList };
    persistData(updated);
  };

  const updateProjects = (newProjectsList) => {
    const updated = { ...data, projects: newProjectsList };
    persistData(updated);
  };

  const updatePersonalInfo = (newInfo) => {
    const updated = {
      ...data,
      personalInfo: { ...data.personalInfo, ...newInfo }
    };
    persistData(updated);
  };

  const updateNormalSkills = (newSkillsMap) => {
    const updated = { ...data, normalTechnicalSkills: newSkillsMap };
    persistData(updated);
  };

  const updateQuantumSkills = (newSkillsMap) => {
    const updated = { ...data, technicalSkills: newSkillsMap };
    persistData(updated);
  };

  const updateCertifications = (newCerts, newCertDetails) => {
    const updated = {
      ...data,
      certifications: newCerts,
      certDetails: newCertDetails || data.certDetails
    };
    persistData(updated);
  };

  // Reset to original codebase defaults
  const resetToDefaults = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
    setData(initialPortfolioData);
  };

  // Authentication Helpers
  const getStoredPin = () => {
    try {
      return localStorage.getItem(PIN_STORAGE_KEY) || DEFAULT_PIN;
    } catch (e) {
      return DEFAULT_PIN;
    }
  };

  const login = (enteredPin) => {
    const correctPin = getStoredPin();
    if (enteredPin === correctPin) {
      setIsAuthenticated(true);
      try {
        sessionStorage.setItem(AUTH_STORAGE_KEY, 'true');
      } catch (e) {}
      return { success: true };
    }
    return { success: false, error: 'Incorrect PIN. Please try again.' };
  };

  const logout = () => {
    setIsAuthenticated(false);
    try {
      sessionStorage.removeItem(AUTH_STORAGE_KEY);
    } catch (e) {}
  };

  const changePin = (currentPin, newPin) => {
    const correctPin = getStoredPin();
    if (currentPin !== correctPin) {
      return { success: false, error: 'Current PIN is incorrect.' };
    }
    if (!newPin || newPin.length < 4) {
      return { success: false, error: 'New PIN must be at least 4 digits.' };
    }
    try {
      localStorage.setItem(PIN_STORAGE_KEY, newPin);
      return { success: true };
    } catch (e) {
      return { success: false, error: 'Failed to update PIN in local storage.' };
    }
  };

  // Export updated data as formatted JavaScript code for src/data/portfolioData.js
  const generateExportCode = () => {
    const exportObject = {
      personalInfo: data.personalInfo,
      normalStats: data.normalStats,
      quantumStats: data.quantumStats,
      stats: data.normalStats,
      researchFocus: data.researchFocus,
      normalTechnicalSkills: data.normalTechnicalSkills,
      technicalSkills: data.technicalSkills,
      currentResearch: data.currentResearch,
      projects: data.projects,
      experience: data.experience,
      education: data.education,
      certifications: data.certifications,
      certDetails: data.certDetails,
      publications: data.publications
    };

    return `// Exported on ${new Date().toLocaleString()}
// Replace the contents of src/data/portfolioData.js with this code to publish changes to GitHub Pages!

import {
    faHtml5, faCss3Alt, faJs, faReact, faPython, faFigma, faNodeJs, faGitAlt, faBootstrap, faLinkedin, faGithub, faMicrosoft, faMeta, faGoogle, faWordpress
} from '@fortawesome/free-brands-svg-icons';
import {
    faCode, faPaintBrush, faBrain, faChalkboardTeacher, faLaptopCode, faLayerGroup, faPalette, faEnvelope, faPhone, faMapMarkerAlt, faPaperPlane, faAward, faNetworkWired,
    faDatabase, faMobileAlt, faServer, faExchangeAlt, faImage, faPenFancy, faGem, faShareAlt, faHeading, faLaptop, faFile, faChartLine, faCube, faChartBar, faTable, faChartPie,
    faSitemap, faCloud, faCogs, faBook, faProjectDiagram, faComments, faClipboardCheck, faUsers, faCompass, faVideo, faHandshake,
    faAtom, faMicrochip, faGraduationCap, faBriefcase, faFilePdf, faExternalLinkAlt, faCheckCircle, faRoute
} from '@fortawesome/free-solid-svg-icons';

export const portfolioData = ${JSON.stringify(exportObject, null, 4)};
`;
  };

  const value = {
    data,
    isAdminOpen,
    setIsAdminOpen,
    isAuthenticated,
    login,
    logout,
    changePin,
    updateExperiences,
    updateEducation,
    updateProjects,
    updatePersonalInfo,
    updateNormalSkills,
    updateQuantumSkills,
    updateCertifications,
    resetToDefaults,
    generateExportCode
  };

  return (
    <PortfolioDataContext.Provider value={value}>
      {children}
    </PortfolioDataContext.Provider>
  );
};

export const usePortfolioData = () => {
  const context = useContext(PortfolioDataContext);
  if (!context) {
    throw new Error('usePortfolioData must be used within a PortfolioDataProvider');
  }
  return context;
};
