import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { portfolioData } from '../../data/portfolioData';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';

const Skills = () => {
    const { skills } = portfolioData;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    return (
        <section id="skills" style={{ background: 'var(--section-bg-alt)' }}>
            <div className="container">
                <SectionHeader
                    title="My Expertise"
                    subtitle="Combining technical proficiency with creative design thinking."
                />
                <div className="skills-slider-wrapper position-relative overflow-hidden py-4">
                    <div className="skills-track d-flex">
                        {[...skills, ...skills, ...skills].map((skill, index) => (
                            <div key={index} className="skills-item px-3 flex-shrink-0" style={{ width: '300px' }}>
                                <motion.div
                                    className="premium-glass-card h-100 text-center p-4 border-radius-20"
                                    initial={{ opacity: 0.5 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <div className="skill-icon-wrapper mb-3" style={{ color: skill.color || 'var(--accent-color)' }}>
                                        <FontAwesomeIcon icon={skill.icon} size="3x" />
                                    </div>
                                    <h5 className="fw-bold mb-2">{skill.title}</h5>
                                    <p className="skill-desc small opacity-75 mb-0">{skill.desc}</p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
