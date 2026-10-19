import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import QuantumParticles from './QuantumParticles';
import { portfolioData } from '../../data/portfolioData';

/**
 * ProfileSelector — entry gate of the portfolio.
 * The visitor picks one of the four professional profiles; the site then
 * adapts its hero, project filter and skills tab to that profile.
 */
const ProfileSelector = ({ onSelect }) => {
    const profiles = portfolioData.profiles || [];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
    };
    const cardVariants = {
        hidden: { opacity: 0, y: 32 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
    };

    return (
        <div className="profile-selector-wrapper">
            <QuantumParticles />

            <motion.div
                className="profile-selector-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={cardVariants} className="text-center mb-2">
                    <span className="profile-selector-eyebrow">
                        Waseem Akram Alvi — Portfolio
                    </span>
                </motion.div>

                <motion.h1 variants={cardVariants} className="profile-selector-title text-center">
                    Choose Your <span className="text-gradient-cyan">Journey</span>
                </motion.h1>

                <motion.p variants={cardVariants} className="profile-selector-subtitle text-center">
                    Select a profile to explore the work, projects and expertise most relevant to you.
                </motion.p>

                <div className="profile-cards-grid">
                    {profiles.map((p) => (
                        <motion.button
                            key={p.id}
                            variants={cardVariants}
                            whileHover={{ y: -8 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => onSelect(p.id)}
                            className="profile-card"
                            style={{ '--profile-color': p.color || '#06b6d4' }}
                        >
                            <span className="profile-card-glow" aria-hidden="true" />
                            <span className="profile-card-icon">
                                <FontAwesomeIcon icon={p.icon} />
                            </span>
                            <span className="profile-card-label">{p.label}</span>
                            <span className="profile-card-tagline">{p.tagline}</span>
                            <span className="profile-card-desc">{p.description}</span>
                            <span className="profile-card-cta">
                                Enter Profile <FontAwesomeIcon icon={faArrowRight} className="ms-1" />
                            </span>
                        </motion.button>
                    ))}
                </div>

                <motion.p variants={cardVariants} className="profile-selector-note text-center">
                    You can switch profiles anytime from the navigation bar.
                </motion.p>
            </motion.div>
        </div>
    );
};

export default ProfileSelector;
