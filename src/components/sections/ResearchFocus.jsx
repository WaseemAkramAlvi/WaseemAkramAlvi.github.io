import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faBookOpen, faCompass } from '@fortawesome/free-solid-svg-icons';
import { portfolioData } from '../../data/portfolioData';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';

const ResearchFocus = () => {
    const { researchFocus, researchInterests, publications } = portfolioData;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 25 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <section id="research" className="py-5 research-focus-section">
            <div className="container">
                <SectionHeader
                    title="Research Focus"
                    subtitle="Exploring the frontiers of Quantum Computing, QML, and Algorithmic Optimization"
                />

                {/* 6 Research Focus Cards */}
                <motion.div 
                    className="row g-4 mb-5"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {researchFocus.map((focus) => (
                        <motion.div key={focus.id} className="col-lg-4 col-md-6" variants={cardVariants}>
                            <GlassCard className="research-card h-100 p-4 d-flex flex-column justify-content-between">
                                <div>
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div 
                                            className="research-icon-box"
                                            style={{ backgroundColor: `${focus.color}15`, color: focus.color }}
                                        >
                                            <FontAwesomeIcon icon={focus.icon} size="lg" />
                                        </div>
                                        <span className="research-card-indicator" style={{ backgroundColor: focus.color }}></span>
                                    </div>
                                    <h4 className="research-card-title mb-2">{focus.title}</h4>
                                    <p className="research-card-summary mb-3 text-secondary-emphasis">
                                        {focus.summary}
                                    </p>
                                </div>
                                <div className="research-card-footer pt-3 border-top border-secondary-subtle">
                                    <p className="small text-muted mb-0">{focus.details}</p>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Research Interests Section */}
                <div className="research-interests-card p-4 p-md-5 rounded-4 mb-5">
                    <div className="row align-items-center g-4">
                        <div className="col-lg-4">
                            <div className="d-flex align-items-center gap-2 mb-2 text-cyan">
                                <FontAwesomeIcon icon={faCompass} />
                                <span className="text-uppercase small fw-bold tracking-wider">Academic Vectors</span>
                            </div>
                            <h3 className="h4 fw-bold mb-2">Research Interests</h3>
                            <p className="text-muted small mb-0">
                                Specific domain competencies and specialized research areas targeted across graduate studies and technical collaborations.
                            </p>
                        </div>
                        <div className="col-lg-8">
                            <div className="d-flex flex-wrap gap-2">
                                {researchInterests.map((interest, idx) => (
                                    <span key={idx} className="interest-chip">
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Research & Publications Section (Factual & Transparent) */}
                <div className="publications-wrapper p-4 rounded-4 text-center">
                    <div className="d-inline-flex align-items-center justify-content-center p-3 rounded-circle bg-secondary-subtle mb-3">
                        <FontAwesomeIcon icon={faBookOpen} size="2x" className="text-cyan" />
                    </div>
                    <h4 className="fw-bold mb-2">Research & Publications</h4>
                    <p className="text-muted max-w-600 mx-auto mb-4">
                        {publications.statusText}
                    </p>
                    
                    <div className="active-manuscript-box p-3 p-md-4 rounded-3 text-start mx-auto max-w-750">
                        <div className="d-flex align-items-center justify-content-between mb-2 flex-wrap gap-2">
                            <span className="badge bg-primary-subtle text-primary border border-primary-subtle">
                                <FontAwesomeIcon icon={faFileAlt} className="me-1" /> Active Thesis Project
                            </span>
                            <span className="small text-muted font-mono">In Progress</span>
                        </div>
                        <h6 className="fw-bold text-light-emphasis mb-2">
                            {publications.activeManuscripts[0].title}
                        </h6>
                        <p className="small text-muted mb-0">
                            <strong>Focus:</strong> {publications.activeManuscripts[0].focus}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResearchFocus;
