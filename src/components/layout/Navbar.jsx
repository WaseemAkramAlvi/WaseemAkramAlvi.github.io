import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

const Navbar = ({ darkMode, setDarkMode }) => {
    const { personalInfo } = portfolioData;
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Projects', href: '#projects' },
    ];

    return (
        <motion.nav
            className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="container">
                <a className="navbar-brand" href="#home">
                    {personalInfo.name.split(' ').slice(0, 2).join('.')}.<span className="brand-purple">Alvi</span>
                </a>

                <button
                    className="navbar-toggler border-0"
                    type="button"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav ms-auto align-items-center">
                        {navLinks.map((link, index) => (
                            <motion.li
                                key={index}
                                className="nav-item"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.5 }}
                            >
                                <a className="nav-link" href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                                    {link.name}
                                </a>
                            </motion.li>
                        ))}
                        <motion.li
                            className="nav-item ms-lg-3 mt-3 mt-lg-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        >
                            <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)} title="Toggle Theme">
                                <AnimatePresence mode="wait">
                                    <motion.i
                                        key={darkMode ? 'moon' : 'sun'}
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={`fas ${darkMode ? 'fa-moon' : 'fa-sun'}`}
                                    ></motion.i>
                                </AnimatePresence>
                            </button>
                        </motion.li>
                        <motion.li
                            className="nav-item ms-lg-3 mt-3 mt-lg-0"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.2 }}
                        >
                            <a href="#contact-me" className="btn btn-custom btn-sm px-4 rounded-pill">Get in Touch</a>
                        </motion.li>
                    </ul>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
