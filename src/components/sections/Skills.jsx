import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { portfolioData } from '../../data/portfolioData';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';

const Skills = () => {
    const { skills, skillsDetail } = portfolioData;
    const [skillModalOpen, setSkillModalOpen] = React.useState(false);
    const [selectedSkillData, setSelectedSkillData] = React.useState(null);

    const openSkillModal = (skillTitle) => {
        const detailData = skillsDetail[skillTitle];
        if (detailData) {
            setSelectedSkillData({ ...detailData, title: skillTitle });
            setSkillModalOpen(true);
        }
    };

    const closeSkillModal = () => {
        setSkillModalOpen(false);
        setSelectedSkillData(null);
    };

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
                                    onClick={() => openSkillModal(skill.title)}
                                    style={{ cursor: 'pointer' }}
                                    whileHover={{ scale: 1.05 }}
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

            {/* Detailed Skill Modal */}
            <div className={`cert-modal ${skillModalOpen ? 'show skill-mode' : ''}`} aria-hidden={!skillModalOpen} onClick={(e) => { if (e.target === e.currentTarget) closeSkillModal(); }}>
                <div className="modal-content-wrapper">
                    <div className="lightning-card">
                        <button className="cert-modal-close" onClick={closeSkillModal} aria-label="Close modal">
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        <div className="card-content">
                            <div className="row g-0 w-100 align-items-stretch">
                                {/* Left Side: Brand/Icon */}
                                <div className="col-md-4 d-flex flex-column align-items-center justify-content-center cert-badge-large border-end-md">
                                    <div className="brand-logo text-center">
                                        {selectedSkillData && (
                                            <>
                                                <div className="mb-3" style={{ color: 'var(--accent-color)', fontSize: '4rem' }}>
                                                    <FontAwesomeIcon icon={selectedSkillData.icon} />
                                                </div>
                                                <h3 className="fw-bold brand-purple">{selectedSkillData.title}</h3>
                                            </>
                                        )}
                                    </div>
                                </div>

                                {/* Right Side: List */}
                                <div className="col-md-8">
                                    <div className="cert-details h-100">
                                        <h4 className="mb-4 fw-bold">Specialized Competencies</h4>
                                        <div className="cert-list">
                                            {selectedSkillData?.items?.map((item, idx) => (
                                                <div key={idx} className="cert-item">
                                                    <div className="cert-badge">
                                                        <FontAwesomeIcon icon={item.icon} />
                                                    </div>
                                                    <div className="cert-text">
                                                        <h5>{item.title}</h5>
                                                        <p>{item.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
