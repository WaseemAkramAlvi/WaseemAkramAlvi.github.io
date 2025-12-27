import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { portfolioData } from '../../data/portfolioData';
import TechTicker from './TechTicker';
import HeroImage from '/assets/WASEEM_PIC.png';

const Hero = () => {
    const { personalInfo, stats } = portfolioData;

    const [skillModalOpen, setSkillModalOpen] = useState(false);
    const [skillModalData, setSkillModalData] = useState(null);

    function openSkillModal(skill) {
        setSkillModalData(skill);
        setSkillModalOpen(true);
    }

    function closeSkillModal() {
        setSkillModalOpen(false);
        setSkillModalData(null);
    }

    useEffect(() => {
        function onKey(e) { if (e.key === 'Escape') closeSkillModal(); }
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.5
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section className="hero" id="home">
            <div className="code-symbols-container">
                {['</>', '{ }', '//', '<div>', 'func'].map((sym, i) => (
                    <motion.div
                        key={i}
                        className={`code-symbol sym-${i + 1}`}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                            duration: 3 + i,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        {sym}
                    </motion.div>
                ))}
            </div>

            <div className="hero-background-blobs">
                <div className="hero-blob blob-1"></div>
                <div className="hero-blob blob-2"></div>
            </div>

            <div className="container min-vh-100 d-flex flex-column justify-content-center py-5" style={{ position: 'relative', zIndex: 10 }}>
                <div className="row align-items-center g-5">
                    {/* Left Column: Content */}
                    <div className="col-md-6 text-center text-md-start order-2 order-md-1 pe-md-5">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.h1 variants={itemVariants} className="display-4 fw-bold mb-4 hero-title">
                                {personalInfo.title}
                            </motion.h1>
                            <motion.p variants={itemVariants} className="lead mb-4 hero-description">
                                {personalInfo.description}
                            </motion.p>

                            <motion.div variants={itemVariants} className="d-flex gap-3 mb-5 justify-content-center justify-content-md-start flex-wrap">
                                <button className="btn btn-custom px-4 py-2 rounded-pill shadow-lg">Let's Talk</button>
                                <button className="btn btn-outline-cv px-4 py-2 rounded-pill">Download CV</button>
                            </motion.div>

                            {/* Stats Row */}
                            <motion.div variants={itemVariants} className="stats-row-alt d-flex mt-4 gap-4 pt-4 flex-wrap justify-content-center justify-content-md-start">
                                {stats.map((stat, index) => (
                                    <div key={index} className="stat-box">
                                        <h2 className="fw-bold mb-0" style={{ fontSize: '2.5rem' }}>{stat.value}</h2>
                                        <p className="small text-muted text-uppercase fw-semibold mb-0 ls-1">{stat.label}</p>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="col-md-6 order-1 order-md-2 ps-md-5">
                        <motion.div
                            className="hero-image-wrapper text-center overflow-visible"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="image-main-container-v2">
                                {/* Circular Frame Background */}
                                <div className="hero-circle-frame"></div>
                                <div className="circle-ornament-left"></div>
                                <div className="circle-ornament-right"></div>
                                <img src={HeroImage} alt={personalInfo.name} className="hero-main-img img-fluid" style={{ maxHeight: '65vh', width: 'auto', minWidth: '320px', position: 'relative', zIndex: 10 }} />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Floating skill badges (re-uses .float-skill, .skill-1..6 classes in CSS) — animated on load */}
            <div className="floating-skills-wrapper" aria-hidden>
                {portfolioData.skills.slice(0, 6).map((s, i) => (
                    <motion.div
                        key={i}
                        className={`float-skill skill-${i + 1}`}
                        title={s.title}
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.6 + i * 0.12, duration: 0.7, type: 'spring', stiffness: 140 }}
                        onClick={() => openSkillModal(s)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openSkillModal(s); }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <FontAwesomeIcon icon={s.icon} style={{ color: s.color, fontSize: '1.05rem' }} />
                            <span style={{ color: '#111', fontWeight: 600, fontSize: '0.95rem' }}>{s.title}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <TechTicker />

            {/* Skill Modal */}
            <div id="skillModal" className={`cert-modal ${skillModalOpen ? 'show skill-mode' : ''}`} aria-hidden={!skillModalOpen} onClick={(e) => { if (e.target === e.currentTarget) closeSkillModal(); }}>
                <div className="modal-content-wrapper">
                    <div className="lightning-card">
                        <button className="cert-modal-close" onClick={closeSkillModal} aria-label="Close modal">
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        <div className="card-content p-5 text-left">
                            <div className="cert-badge-large mb-4 mx-auto" id="skillIcon">
                                {skillModalData ? (
                                    <FontAwesomeIcon icon={skillModalData.icon} style={{ fontSize: 96, color: skillModalData.color }} />
                                ) : null}
                            </div>
                            <div className="cert-details">
                                <h2 className="fw-bold mb-3">{skillModalData ? skillModalData.title : 'Skill'}</h2>
                                <p className="lead opacity-75">{skillModalData ? skillModalData.desc : ''}</p>
                                <hr />
                                <div className="cert-list">
                                    {/* Optionally expand with more skill items or projects */}
                                    <div className="cert-item">
                                        <div className="cert-badge"><FontAwesomeIcon icon={skillModalData ? skillModalData.icon : null} /></div>
                                        <div className="cert-text">
                                            <h5>{skillModalData ? skillModalData.title : ''}</h5>
                                            <p>{skillModalData ? skillModalData.desc : ''}</p>
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

export default Hero;
