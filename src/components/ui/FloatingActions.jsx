import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp, faAtom, faCode, faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { portfolioData } from '../../data/portfolioData';

const FloatingActions = ({ onReplayIntro, viewMode = 'normal', onToggleViewMode }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const whatsappLink = `https://wa.me/${portfolioData.personalInfo.phone.replace(/[\s\+]+/g, '')}?text=Hello%20Waseem%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.`;

    return (
        <div className="floating-actions-container">
            {/* Quick Switch Mode Button */}
            {viewMode === 'normal' ? (
                <motion.button
                    className="floating-btn intro-replay-btn quantum-edition-quick-btn"
                    onClick={() => onToggleViewMode && onToggleViewMode('quantum')}
                    title="Switch to Special Quantum Research Edition"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FontAwesomeIcon icon={faAtom} className="text-cyan quantum-spin-hover" />
                </motion.button>
            ) : (
                <motion.button
                    className="floating-btn intro-replay-btn normal-portfolio-quick-btn"
                    onClick={() => onToggleViewMode && onToggleViewMode('normal')}
                    title="Return to Normal Web Developer Portfolio"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FontAwesomeIcon icon={faCode} className="text-success" />
                </motion.button>
            )}

            {/* Replay Intro Button (if in Quantum mode) */}
            {viewMode === 'quantum' && onReplayIntro && (
                <motion.button
                    className="floating-btn intro-replay-btn"
                    onClick={onReplayIntro}
                    title="Replay Quantum Intro Animation"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FontAwesomeIcon icon={faRotateRight} className="text-warning" />
                </motion.button>
            )}

            {/* WhatsApp Button - Always Visible */}
            <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="floating-btn whatsapp-btn"
                title="Chat on WhatsApp"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <FontAwesomeIcon icon={faWhatsapp} />
            </motion.a>

            {/* Scroll To Top Button - Conditional */}
            <AnimatePresence>
                {scrolled && (
                    <motion.button
                        className="floating-btn scroll-top-btn"
                        onClick={scrollToTop}
                        title="Back to Top"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FontAwesomeIcon icon={faArrowUp} />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FloatingActions;
