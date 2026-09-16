import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom, faFilePdf, faMoon, faSun, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { portfolioData } from '../../data/portfolioData';

const Navbar = ({ darkMode, setDarkMode, onOpenCV }) => {
    const { personalInfo } = portfolioData;
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
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
    ];

    const handleNavClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <motion.nav
            className={`navbar navbar-expand-xl fixed-top research-navbar ${isScrolled ? 'scrolled' : ''}`}
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="container-fluid px-lg-5">
                {/* Brand */}
                <a className="navbar-brand d-flex align-items-center gap-2" href="#home">
                    <span className="brand-logo-icon">
                        <FontAwesomeIcon icon={faAtom} className="text-cyan" />
                    </span>
                    <span className="fw-bold tracking-tight text-light-emphasis">
                        {personalInfo.name}
                    </span>
                    <span className="badge bg-secondary-subtle text-cyan d-none d-sm-inline-block font-mono small">
                        Quantum &amp; ML
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

                        {/* CV Button */}
                        <li className="nav-item ms-xl-2 my-2 my-xl-0">
                            <button 
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    if (onOpenCV) onOpenCV();
                                }}
                                className="btn btn-sm btn-outline-cyan rounded-pill px-3 py-1.5 d-inline-flex align-items-center gap-2"
                                title="Open Curriculum Vitae"
                            >
                                <FontAwesomeIcon icon={faFilePdf} />
                                <span>CV</span>
                            </button>
                        </li>

                        {/* Theme Toggle Button */}
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
                    </ul>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
