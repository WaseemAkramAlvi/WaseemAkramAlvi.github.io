import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom, faCode, faFilePdf, faMoon, faSun, faBars, faTimes, faLaptopCode, faRepeat } from '@fortawesome/free-solid-svg-icons';
import { portfolioData } from '../../data/portfolioData';
import { usePortfolioData } from '../../context/PortfolioDataContext';

const Navbar = ({ darkMode, setDarkMode, onOpenCV, onReplayIntro, viewMode = 'normal', onToggleViewMode, profile = null, onSelectProfile = null }) => {
    let portfolio = portfolioData;
    let setIsAdminOpen = null;
    try {
        const context = usePortfolioData();
        if (context?.data) portfolio = context.data;
        if (context?.setIsAdminOpen) setIsAdminOpen = context.setIsAdminOpen;
    } catch (e) {}
    const personalInfo = portfolio.personalInfo || portfolioData.personalInfo;
    const activeProfileData = (portfolio.profiles || portfolioData.profiles || []).find(p => p.id === profile);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = viewMode === 'quantum' ? [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Thesis', href: '#thesis' },
        { name: 'Research', href: '#research' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Education', href: '#education' },
        { name: 'Experience', href: '#experience' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Contact', href: '#contact' }
    ] : [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Education', href: '#education' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Contact', href: '#contact' }
    ];

    const handleNavClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <motion.nav
            className={`navbar navbar-expand-xl fixed-top research-navbar ${isScrolled ? 'scrolled' : ''} ${viewMode === 'quantum' ? 'quantum-navbar-active' : 'normal-navbar-active'}`}
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="container-fluid px-lg-5">
                {/* Brand */}
                <a 
                    className="navbar-brand d-flex align-items-center gap-2" 
                    href="#home"
                    onClick={(e) => {
                        if (onReplayIntro && window.scrollY < 80) {
                            e.preventDefault();
                            onReplayIntro();
                        }
                    }}
                    title={viewMode === 'quantum' ? "Click to replay Quantum Intro" : "Waseem Akram Alvi Portfolio"}
                >
                    <span className="brand-logo-icon">
                        <FontAwesomeIcon 
                            icon={viewMode === 'quantum' ? faAtom : faCode} 
                            className="text-cyan" 
                        />
                    </span>
                    <span className="fw-bold tracking-tight text-light-emphasis">
                        {viewMode === 'quantum' ? personalInfo.shortName || personalInfo.name : personalInfo.name}
                    </span>
                    <span className="badge bg-secondary-subtle text-cyan d-none d-sm-inline-block font-mono small">
                        {viewMode === 'quantum' ? 'Quantum & ML' : 'Web Dev & Design'}
                    </span>
                </a>

                {/* Mobile Hamburger Toggle */}
                <button
                    className="navbar-toggler border-0 text-light p-2"
                    type="button"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle navigation"
                >
                    <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} size="lg" />
                </button>

                {/* Links Collapse */}
                <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-xl-center gap-1">
                        {navLinks.map((link, idx) => (
                            <li key={idx} className="nav-item">
                                <a 
                                    className="nav-link py-2 px-3 rounded-pill" 
                                    href={link.href} 
                                    onClick={handleNavClick}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}

                        {/* Profile Switcher — jump back to the profile selector */}
                        <li className="nav-item ms-xl-2 my-2 my-xl-0">
                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    if (onSelectProfile) onSelectProfile(null);
                                }}
                                className="profile-switcher-btn"
                                title="Switch to a different profile"
                            >
                                {activeProfileData && (
                                    <FontAwesomeIcon icon={activeProfileData.icon} style={{ color: activeProfileData.color }} />
                                )}
                                <span className="fw-semibold">{activeProfileData ? activeProfileData.label : 'Profile'}</span>
                                <FontAwesomeIcon icon={faRepeat} className="small opacity-75" />
                            </button>
                        </li>

                        {/* CV Button */}
                        <li className="nav-item ms-xl-2 my-2 my-xl-0">
                            <button 
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    if (onOpenCV) onOpenCV();
                                }}
                                className="btn btn-sm btn-outline-cyan rounded-pill px-3 py-1.5 d-inline-flex align-items-center gap-2"
                                title={viewMode === 'quantum' ? "Open Quantum Research CV" : "Open Full-Stack Developer CV"}
                            >
                                <FontAwesomeIcon icon={faFilePdf} />
                                <span>{viewMode === 'quantum' ? "Quantum CV" : "CV"}</span>
                            </button>
                        </li>

                        {/* Theme Toggle Button — hidden in Quantum mode: the Special Research
                            Edition is a dark-only immersive experience */}
                        {viewMode !== 'quantum' && (
                        <li className="nav-item ms-xl-2 my-2 my-xl-0">
                            <button
                                className="theme-toggle btn btn-sm rounded-circle"
                                onClick={() => setDarkMode(!darkMode)}
                                title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                                aria-label="Toggle Theme"
                            >
                                <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
                            </button>
                        </li>
                        )}
                    </ul>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
