import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faAtom, faBrain, faCode, faProjectDiagram, faDatabase, faCogs, faCheck, faLayerGroup, faPaintBrush, faChalkboardTeacher, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { portfolioData } from '../../data/portfolioData';
import { usePortfolioData } from '../../context/PortfolioDataContext';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';

const Skills = ({ viewMode = 'normal' }) => {
    let portfolio = portfolioData;
    try {
        const context = usePortfolioData();
        if (context?.data) portfolio = context.data;
    } catch (e) {}
    const { technicalSkills, normalTechnicalSkills } = portfolio;
    const skillsSource = viewMode === 'quantum' 
        ? (technicalSkills || {})
        : (normalTechnicalSkills || technicalSkills || {});

    const categoryKeys = Object.keys(skillsSource);
    const [activeKey, setActiveKey] = useState(categoryKeys[0]);
    const [architectureModalOpen, setArchitectureModalOpen] = useState(false);

    // Keep activeKey aligned if viewMode changes
    React.useEffect(() => {
        const keys = Object.keys(skillsSource);
        if (!keys.includes(activeKey)) {
            setActiveKey(keys[0]);
        }
    }, [viewMode, skillsSource]);

    const activeCategory = skillsSource[activeKey] || skillsSource[categoryKeys[0]] || { title: 'Technical Skills', skills: [] };

    const categoryIcons = {
        web: faCode,
        design: faPaintBrush,
        mentoring: faChalkboardTeacher,
        quantum: faAtom,
        aiml: faBrain,
        programming: faLaptopCode,
        frameworks: faProjectDiagram,
        databases: faDatabase,
        tools: faCogs
    };

    const categoryColors = {
        web: '#3b82f6',
        design: '#ec4899',
        mentoring: '#f59e0b',
        quantum: '#06b6d4',
        aiml: '#8b5cf6',
        programming: '#10b981',
        frameworks: '#10b981',
        databases: '#f59e0b',
        tools: '#ec4899'
    };

    return (
        <section id="skills" className="py-5 skills-section">
            <div className="container">
                <SectionHeader
                    title="Technical Expertise"
                    subtitle={viewMode === 'quantum' 
                        ? "Organized competency matrix across quantum algorithms, machine learning, and software engineering"
                        : "Core competencies across full-stack web engineering, UI/UX design, database architectures, and technical mentoring"}
                />

                {/* Category Navigation Tabs */}
                <div className="skills-nav-container mb-5">
                    <div className="d-flex flex-wrap justify-content-center gap-2">
                        {categoryKeys.map((key) => {
                            const cat = skillsSource[key] || {};
                            const isActive = activeKey === key;
                            const color = categoryColors[key] || '#06b6d4';
                            return (
                                <button
                                    key={key}
                                    onClick={() => setActiveKey(key)}
                                    className={`skill-cat-pill ${isActive ? 'active' : ''}`}
                                    style={{
                                        '--pill-color': color
                                    }}
                                >
                                    <FontAwesomeIcon icon={categoryIcons[key] || faCode} className="me-2" />
                                    <span>{cat.title || key}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Active Category Display Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeKey}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.35 }}
                        className="active-category-container"
                    >
                        <div className="row g-4 justify-content-center">
                            {activeCategory.skills.map((skill, idx) => (
                                <div key={idx} className="col-lg-4 col-md-6">
                                    <GlassCard className="h-100 p-4 rounded-4 skill-item-card d-flex flex-column justify-content-between">
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                                <h5 className="fw-bold mb-0 text-light-emphasis">{skill.name}</h5>
                                                <span 
                                                    className="skill-badge-dot" 
                                                    style={{ backgroundColor: categoryColors[activeKey] }}
                                                />
                                            </div>
                                            <p className="small text-secondary-emphasis mb-0">
                                                {skill.desc}
                                            </p>
                                        </div>
                                        <div className="pt-3 mt-3 border-top border-secondary-subtle d-flex align-items-center justify-content-between">
                                            <span className="badge bg-secondary-subtle text-muted small font-mono">
                                                {activeCategory.title.split('&')[0].trim()}
                                            </span>
                                            <FontAwesomeIcon icon={faCheck} className="text-cyan small" />
                                        </div>
                                    </GlassCard>
                                </div>
                            ))}
                        </div>

                        {/* Interactive Architecture Modal Trigger */}
                        <div className="text-center mt-5">
                            <button
                                className="btn btn-outline-research px-4 py-2 rounded-pill shadow-sm"
                                onClick={() => setArchitectureModalOpen(true)}
                            >
                                <FontAwesomeIcon icon={faLayerGroup} className="me-2 text-cyan" />
                                View {activeCategory.title} Architecture Flow
                            </button>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Architecture Flow Modal */}
                <AnimatePresence>
                    {architectureModalOpen && (
                        <div 
                            className="cert-modal show" 
                            onClick={(e) => { if (e.target === e.currentTarget) setArchitectureModalOpen(false); }}
                        >
                            <div className="modal-content-wrapper skill-modal-dark">
                                <motion.div 
                                    className="skill-dark-card p-4 p-md-5"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                >
                                    <button 
                                        className="skill-dark-close" 
                                        onClick={() => setArchitectureModalOpen(false)} 
                                        aria-label="Close modal"
                                    >
                                        <FontAwesomeIcon icon={faTimes} />
                                    </button>

                                    <span className="badge bg-secondary-subtle text-cyan mb-2 font-mono">
                                        SYSTEM METHODOLOGY
                                    </span>
                                    <h3 className="fw-bold mb-3">{activeCategory.title} Architecture</h3>
                                    <p className="text-muted small mb-4">
                                        Methodological workflow, toolchain integration, and runtime pipeline for {activeCategory.title}.
                                    </p>

                                    {/* Workflow Grid */}
                                    <div className="row g-3">
                                        {activeCategory.skills.map((s, i) => (
                                            <div key={i} className="col-md-6">
                                                <div className="p-3 rounded-3 bg-dark-subtle border border-secondary-subtle">
                                                    <div className="d-flex align-items-center gap-2 mb-1">
                                                        <span className="badge bg-cyan-subtle text-cyan font-mono small">
                                                            0{i + 1}
                                                        </span>
                                                        <h6 className="fw-bold mb-0 text-light">{s.name}</h6>
                                                    </div>
                                                    <p className="small text-muted mb-0">{s.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Skills;
