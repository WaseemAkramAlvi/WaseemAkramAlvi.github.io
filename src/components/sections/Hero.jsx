import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faAtom, 
    faMicrochip, 
    faProjectDiagram, 
    faDownload, 
    faArrowRight, 
    faGraduationCap, 
    faCode, 
    faCircleCheck,
    faExternalLinkAlt,
    faUserCheck,
    faLaptopCode
} from '@fortawesome/free-solid-svg-icons';
import { portfolioData } from '../../data/portfolioData';
import { usePortfolioData } from '../../context/PortfolioDataContext';
import TechTicker from './TechTicker';
import HeroImage from '/assets/WASEEM_PIC.png';
import QuantumAtom from '../layout/QuantumAtom';

const Hero = ({ onOpenCV, viewMode = 'normal', onToggleViewMode, profile = null }) => {
    let portfolio = portfolioData;
    try {
        const context = usePortfolioData();
        if (context?.data) portfolio = context.data;
    } catch (e) {}
    const personalInfo = portfolio.personalInfo || portfolioData.personalInfo;
    const normalStats = portfolio.normalStats || portfolioData.normalStats;
    const quantumStats = portfolio.quantumStats || portfolioData.quantumStats;
    const stats = viewMode === 'quantum' ? quantumStats : normalStats;
    // Active profile config (drives hero copy per profile)
    const profileList = portfolio.profiles || portfolioData.profiles || [];
    const activeProfileData = profileList.find(p => p.id === profile) || null;
    const heroBadge = activeProfileData?.heroBadge;
    const heroLine1 = activeProfileData?.heroLine1;
    const heroLine2 = activeProfileData?.heroLine2;
    const heroSubtitle = activeProfileData?.heroSubtitle;
    const heroSummary = activeProfileData?.heroSummary;
    const [visualMode, setVisualMode] = useState(viewMode === 'quantum' ? 'circuit' : 'photo'); // 'circuit', 'atom', or 'photo'

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 25 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };

    return (
        <section className={`hero position-relative overflow-hidden ${viewMode === 'quantum' ? 'hero-research-theme' : 'hero-normal-theme'}`} id="home">
            {/* Background Ambient Grid */}
            <div className="hero-quantum-grid" aria-hidden="true"></div>

            <div className="container position-relative py-5" style={{ zIndex: 5 }}>
                <div className="row align-items-center g-5 min-vh-80">
                    {/* Left Column: Narrative & Positioning */}
                    <div className="col-lg-7 text-center text-lg-start pe-lg-4">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {/* Role / Focus Badge — driven by the active profile */}
                            <motion.div variants={itemVariants} className="d-inline-flex align-items-center gap-2 mb-3">
                                {heroBadge ? (
                                    <span className="hero-research-pill normal-hero-pill">
                                        {activeProfileData.icon && (
                                            <FontAwesomeIcon icon={activeProfileData.icon} className="text-cyan me-1" />
                                        )}
                                        {heroBadge}
                                    </span>
                                ) : viewMode === 'quantum' ? (
                                    <span className="hero-research-pill">
                                        <FontAwesomeIcon icon={faAtom} className="text-cyan me-1" />
                                        Quantum Computing × AI/ML × Optimization
                                    </span>
                                ) : (
                                    <span className="hero-research-pill normal-hero-pill">
                                        <FontAwesomeIcon icon={faCode} className="text-cyan me-1" />
                                        Full-Stack Web Dev × Graphic Design × CBT&amp;A Instructor
                                    </span>
                                )}
                            </motion.div>

                            {/* Main Heading — driven by the active profile */}
                            <motion.h1 variants={itemVariants} className="hero-research-title mb-3 fw-bold">
                                {heroLine1 ? (
                                    <>
                                        {heroLine1} <span className="text-gradient-cyan">&amp;</span> {heroLine2}
                                    </>
                                ) : viewMode === 'quantum' ? (
                                    <>
                                        Quantum Software Engineer <span className="text-gradient-cyan">&amp;</span> Machine Learning Specialist
                                    </>
                                ) : (
                                    <>
                                        Full-Stack Web Developer <span className="text-gradient-cyan">&amp;</span> Graphic Designer
                                    </>
                                )}
                            </motion.h1>

                            {/* Supporting Headline */}
                            <motion.p variants={itemVariants} className="hero-supporting-headline mb-3 fw-medium">
                                {heroSubtitle || (viewMode === 'quantum' 
                                    ? personalInfo.quantumSubtitle || personalInfo.secondaryPositioning
                                    : personalInfo.normalSubtitle || personalInfo.secondaryPositioning)}
                            </motion.p>

                            {/* Factual Short Introduction */}
                            <motion.p variants={itemVariants} className="hero-intro-text lead mb-4 fs-6 text-secondary-emphasis">
                                {heroSummary || (viewMode === 'quantum' ? personalInfo.quantumSummary : personalInfo.normalSummary)}
                            </motion.p>

                            {/* Call to Actions */}
                            <motion.div variants={itemVariants} className="d-flex gap-3 mb-5 justify-content-center justify-content-lg-start flex-wrap align-items-center">
                                {viewMode === 'quantum' ? (
                                    <>
                                        <a href="#thesis" className="btn btn-custom-cyan px-4 py-2 rounded-pill shadow-lg">
                                            View My Research
                                            <FontAwesomeIcon icon={faArrowRight} className="ms-2 small" />
                                        </a>

                                        <a href="#projects" className="btn btn-outline-research px-4 py-2 rounded-pill">
                                            Explore Projects
                                        </a>
                                    </>
                                ) : (
                                    <>
                                        <a href="#projects" className="btn btn-custom-cyan px-4 py-2 rounded-pill shadow-lg">
                                            Explore Projects
                                            <FontAwesomeIcon icon={faArrowRight} className="ms-2 small" />
                                        </a>

                                        <a href="#contact" className="btn btn-outline-research px-4 py-2 rounded-pill">
                                            Let's Talk
                                        </a>
                                    </>
                                )}

                                <button 
                                    onClick={onOpenCV}
                                    className="btn btn-outline-cv px-4 py-2 rounded-pill d-inline-flex align-items-center gap-2"
                                    title={viewMode === 'quantum' ? "View & Download Quantum Research CV" : "View & Download Full-Stack Developer CV"}
                                >
                                    <FontAwesomeIcon icon={viewMode === 'quantum' ? faAtom : faDownload} />
                                    <span>{viewMode === 'quantum' ? 'Quantum CV' : 'Download CV'}</span>
                                </button>

                                {/* Direct toggle to other mode */}
                                {viewMode === 'normal' ? (
                                    <button
                                        onClick={() => onToggleViewMode && onToggleViewMode('quantum')}
                                        className="btn btn-special-quantum-pill px-4 py-2 rounded-pill d-inline-flex align-items-center gap-2"
                                        title="Explore Special Quantum Computing & QAOA Research Portfolio"
                                    >
                                        <FontAwesomeIcon icon={faAtom} className="text-cyan quantum-spin-hover" />
                                        <span className="fw-semibold text-white">Quantum Edition →</span>
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => onToggleViewMode && onToggleViewMode('normal')}
                                        className="btn btn-special-quantum-pill px-4 py-2 rounded-pill d-inline-flex align-items-center gap-2"
                                        title="Return to Normal Portfolio"
                                    >
                                        <FontAwesomeIcon icon={faCode} className="text-success" />
                                        <span className="fw-semibold text-white">Normal Portfolio →</span>
                                    </button>
                                )}
                            </motion.div>

                            {/* Key Stats Row */}
                            <motion.div variants={itemVariants} className="hero-stats-grid pt-3 border-top border-secondary-subtle">
                                <div className="row g-3">
                                    {stats.map((st, i) => (
                                        <div key={i} className="col-6 col-md-3">
                                            <div className="stat-card-clean">
                                                <div className="stat-val font-mono fw-bold">{st.value}</div>
                                                <div className="stat-lbl small text-uppercase tracking-wider">{st.label}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Column: Visual Showcase */}
                    <div className="col-lg-5 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="hero-visual-card position-relative p-3 rounded-4 shadow-2xl"
                        >
                            {/* Visual Mode Selector Tabs */}
                            <div className="d-flex justify-content-between align-items-center mb-3 px-2">
                                <div className="d-flex align-items-center gap-2 small font-mono text-cyan">
                                    <FontAwesomeIcon icon={viewMode === 'quantum' ? faMicrochip : faLaptopCode} />
                                    <span>{viewMode === 'quantum' ? 'QUANTUM-CLASSICAL CO-PROCESSOR' : 'FULL-STACK SOFTWARE ENGINEER'}</span>
                                </div>
                                <div className="btn-group btn-group-sm visual-mode-toggle" role="group">
                                    {viewMode === 'quantum' && (
                                        <>
                                            <button 
                                                type="button" 
                                                className={`btn btn-sm ${visualMode === 'circuit' ? 'btn-cyan-active' : 'btn-ghost'}`}
                                                onClick={() => setVisualMode('circuit')}
                                                title="View Quantum Circuit Architecture"
                                            >
                                                Circuit
                                            </button>
                                            <button 
                                                type="button" 
                                                className={`btn btn-sm ${visualMode === 'atom' ? 'btn-cyan-active' : 'btn-ghost'}`}
                                                onClick={() => setVisualMode('atom')}
                                                title="View 3D Quantum Atom & Orbitals"
                                            >
                                                3D Atom
                                            </button>
                                        </>
                                    )}
                                    <button 
                                        type="button" 
                                        className={`btn btn-sm ${visualMode === 'photo' ? 'btn-cyan-active' : 'btn-ghost'}`}
                                        onClick={() => setVisualMode('photo')}
                                        title="View Profile Portrait"
                                    >
                                        Profile
                                    </button>
                                </div>
                            </div>

                            {visualMode === 'atom' ? (
                                /* Interactive 3D Quantum Atom Display */
                                <div className="hero-atom-stage p-4 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '340px' }}>
                                    <div className="py-2">
                                        <QuantumAtom />
                                    </div>
                                    <div className="mt-4 text-center">
                                        <span className="badge bg-dark-subtle text-cyan font-mono border border-cyan-subtle px-3 py-2">
                                            <FontAwesomeIcon icon={faAtom} className="me-2" />
                                            QUANTUM BOHR-SOMMERFELD ATOMIC MODEL // HOVER OR CLICK TO EXCITE
                                        </span>
                                    </div>
                                </div>
                            ) : visualMode === 'circuit' ? (
                                /* Interactive Quantum-Classical Graph & Circuit Diagram */
                                <div className="quantum-circuit-canvas p-3 rounded-3 position-relative">
                                    <svg viewBox="0 0 440 330" className="w-100 h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <linearGradient id="qGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                                                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
                                            </linearGradient>
                                            <filter id="nodeGlow" x="-20%" y="-20%" width="140%" height="140%">
                                                <feGaussianBlur stdDeviation="3" result="blur" />
                                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                            </filter>
                                        </defs>

                                        {/* Background Grid Lines */}
                                        <line x1="20" y1="40" x2="420" y2="40" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                                        <line x1="20" y1="90" x2="420" y2="90" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                                        <line x1="20" y1="140" x2="420" y2="140" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                                        <line x1="20" y1="190" x2="420" y2="190" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

                                        {/* Qubit Wire 0 */}
                                        <text x="15" y="44" fill="#94a3b8" fontSize="11" fontFamily="monospace">|q₀⟩</text>
                                        <line x1="50" y1="40" x2="350" y2="40" stroke="#06b6d4" strokeWidth="1.5" strokeOpacity="0.7" />

                                        {/* Qubit Wire 1 */}
                                        <text x="15" y="94" fill="#94a3b8" fontSize="11" fontFamily="monospace">|q₁⟩</text>
                                        <line x1="50" y1="90" x2="350" y2="90" stroke="#06b6d4" strokeWidth="1.5" strokeOpacity="0.7" />

                                        {/* Qubit Wire 2 */}
                                        <text x="15" y="144" fill="#94a3b8" fontSize="11" fontFamily="monospace">|q₂⟩</text>
                                        <line x1="50" y1="140" x2="350" y2="140" stroke="#06b6d4" strokeWidth="1.5" strokeOpacity="0.7" />

                                        {/* Qubit Wire 3 */}
                                        <text x="15" y="194" fill="#94a3b8" fontSize="11" fontFamily="monospace">|qₙ⟩</text>
                                        <line x1="50" y1="190" x2="350" y2="190" stroke="#06b6d4" strokeWidth="1.5" strokeOpacity="0.7" />

                                        {/* State Prep Gates (Hadamard / Warm-Start Rotations) */}
                                        <rect x="70" y="26" width="28" height="28" rx="5" fill="#1e293b" stroke="#06b6d4" strokeWidth="1.5" />
                                        <text x="84" y="44" fill="#06b6d4" fontSize="11" textAnchor="middle" fontWeight="bold">Ry(θ)</text>

                                        <rect x="70" y="76" width="28" height="28" rx="5" fill="#1e293b" stroke="#06b6d4" strokeWidth="1.5" />
                                        <text x="84" y="94" fill="#06b6d4" fontSize="11" textAnchor="middle" fontWeight="bold">Ry(θ)</text>

                                        <rect x="70" y="126" width="28" height="28" rx="5" fill="#1e293b" stroke="#06b6d4" strokeWidth="1.5" />
                                        <text x="84" y="144" fill="#06b6d4" fontSize="11" textAnchor="middle" fontWeight="bold">Ry(θ)</text>

                                        <rect x="70" y="176" width="28" height="28" rx="5" fill="#1e293b" stroke="#06b6d4" strokeWidth="1.5" />
                                        <text x="84" y="194" fill="#06b6d4" fontSize="11" textAnchor="middle" fontWeight="bold">Ry(θ)</text>

                                        {/* Entanglement CNOTs */}
                                        <circle cx="125" cy="40" r="4" fill="#8b5cf6" />
                                        <line x1="125" y1="40" x2="125" y2="90" stroke="#8b5cf6" strokeWidth="1.5" />
                                        <circle cx="125" cy="90" r="9" fill="none" stroke="#8b5cf6" strokeWidth="1.5" />
                                        <line x1="125" y1="81" x2="125" y2="99" stroke="#8b5cf6" strokeWidth="1.5" />
                                        <line x1="116" y1="90" x2="134" y2="90" stroke="#8b5cf6" strokeWidth="1.5" />

                                        <circle cx="150" cy="90" r="4" fill="#8b5cf6" />
                                        <line x1="150" y1="90" x2="150" y2="140" stroke="#8b5cf6" strokeWidth="1.5" />
                                        <circle cx="150" cy="140" r="9" fill="none" stroke="#8b5cf6" strokeWidth="1.5" />
                                        <line x1="150" y1="131" x2="150" y2="149" stroke="#8b5cf6" strokeWidth="1.5" />
                                        <line x1="141" y1="140" x2="159" y2="140" stroke="#8b5cf6" strokeWidth="1.5" />

                                        {/* Cost Unitary Box */}
                                        <rect x="180" y="24" width="65" height="182" rx="8" fill="rgba(6, 182, 212, 0.12)" stroke="#06b6d4" strokeWidth="1.8" />
                                        <text x="212" y="118" fill="#06b6d4" fontSize="12" textAnchor="middle" fontWeight="bold" fontFamily="monospace">{'e^{-iγ H_C}'}</text>
                                        <text x="212" y="136" fill="#94a3b8" fontSize="9" textAnchor="middle">Cost Unitary</text>

                                        {/* Mixer Unitary Box */}
                                        <rect x="260" y="24" width="65" height="182" rx="8" fill="rgba(139, 92, 246, 0.12)" stroke="#8b5cf6" strokeWidth="1.8" />
                                        <text x="292" y="118" fill="#a78bfa" fontSize="12" textAnchor="middle" fontWeight="bold" fontFamily="monospace">{'e^{-iβ H_M}'}</text>
                                        <text x="292" y="136" fill="#94a3b8" fontSize="9" textAnchor="middle">Mixer Unitary</text>

                                        {/* Measurement Symbols */}
                                        <rect x="340" y="26" width="26" height="28" rx="4" fill="#0f172a" stroke="#64748b" strokeWidth="1.2" />
                                        <path d="M 346 45 A 7 7 0 0 1 360 45" stroke="#94a3b8" strokeWidth="1" fill="none" />
                                        <line x1="353" y1="45" x2="361" y2="34" stroke="#94a3b8" strokeWidth="1.2" />

                                        <rect x="340" y="76" width="26" height="28" rx="4" fill="#0f172a" stroke="#64748b" strokeWidth="1.2" />
                                        <path d="M 346 95 A 7 7 0 0 1 360 95" stroke="#94a3b8" strokeWidth="1" fill="none" />
                                        <line x1="353" y1="95" x2="361" y2="84" stroke="#94a3b8" strokeWidth="1.2" />

                                        <rect x="340" y="126" width="26" height="28" rx="4" fill="#0f172a" stroke="#64748b" strokeWidth="1.2" />
                                        <path d="M 346 145 A 7 7 0 0 1 360 145" stroke="#94a3b8" strokeWidth="1" fill="none" />
                                        <line x1="353" y1="145" x2="361" y2="134" stroke="#94a3b8" strokeWidth="1.2" />

                                        <rect x="340" y="176" width="26" height="28" rx="4" fill="#0f172a" stroke="#64748b" strokeWidth="1.2" />
                                        <path d="M 346 195 A 7 7 0 0 1 360 195" stroke="#94a3b8" strokeWidth="1" fill="none" />
                                        <line x1="353" y1="195" x2="361" y2="184" stroke="#94a3b8" strokeWidth="1.2" />

                                        {/* Classical Feedback Loop */}
                                        <path d="M 368 115 L 395 115 L 395 260 L 130 260 L 130 220" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 3" fill="none" />
                                        <polygon points="130,215 126,224 134,224" fill="#f59e0b" />

                                        {/* Classical Optimizer Node */}
                                        <rect x="180" y="240" width="160" height="40" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
                                        <text x="260" y="258" fill="#f59e0b" fontSize="10" textAnchor="middle" fontWeight="bold">Classical Optimizer</text>
                                        <text x="260" y="272" fill="#94a3b8" fontSize="9" textAnchor="middle">COBYLA / Update (γ, β)</text>

                                        {/* CVRP Routing Node Callout */}
                                        <g transform="translate(10, 240)">
                                            <rect x="0" y="0" width="130" height="40" rx="6" fill="#0f172a" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                                            <text x="12" y="17" fill="#38bdf8" fontSize="9" fontWeight="bold">CVRP Graph</text>
                                            <text x="12" y="30" fill="#94a3b8" fontSize="8">Qubit-Efficient Encoding</text>
                                        </g>
                                    </svg>
                                    <div className="d-flex justify-content-between align-items-center mt-2 px-1 text-muted small font-mono">
                                        <span>State: |ψ(γ, β)⟩</span>
                                        <span className="text-cyan">Simulation Engine: Qiskit Aer</span>
                                    </div>
                                </div>
                            ) : (
                                /* Profile Visual */
                                <div className="profile-view-wrapper p-3 rounded-3 text-center position-relative">
                                    <div className="hero-photo-frame mx-auto mb-3 position-relative">
                                        <img 
                                            src={HeroImage} 
                                            alt={personalInfo.name} 
                                            className="img-fluid rounded-4 shadow"
                                            style={{ maxHeight: '290px', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <h5 className="fw-bold mb-1 text-white">{personalInfo.name}</h5>
                                    {viewMode === 'quantum' ? (
                                        <>
                                            <p className="small text-cyan mb-1 fw-medium">MS / MPhil Computer Science Researcher</p>
                                            <p className="small text-light-subtle mb-0">The Islamia University of Bahawalpur</p>
                                        </>
                                    ) : (
                                        <>
                                            <p className="small text-cyan mb-1 fw-medium">Full-Stack Web Dev &amp; Graphic Designer</p>
                                            <p className="small text-light-subtle mb-0">Instructor CBT&amp;A @ Govt. Technical Training Institute</p>
                                        </>
                                    )}
                                </div>
                            )}

                            {/* Under-Card Micro Specs */}
                            {viewMode === 'quantum' ? (
                                <div className="visual-card-footer d-flex justify-content-around text-start mt-3 pt-3 border-top border-secondary-subtle">
                                    <div>
                                        <span className="d-block text-cyan-light small text-uppercase font-mono">Architecture</span>
                                        <span className="small fw-semibold text-white">Hybrid QAOA + CVRP</span>
                                    </div>
                                    <div>
                                        <span className="d-block text-cyan-light small text-uppercase font-mono">Simulators</span>
                                        <span className="small fw-semibold text-white">Statevector / Aer</span>
                                    </div>
                                    <div>
                                        <span className="d-block text-cyan-light small text-uppercase font-mono">Status</span>
                                        <span className="small fw-semibold text-cyan">Active Research</span>
                                    </div>
                                </div>
                            ) : (
                                <div className="visual-card-footer d-flex justify-content-around text-start mt-3 pt-3 border-top border-secondary-subtle">
                                    <div>
                                        <span className="d-block text-cyan-light small text-uppercase font-mono">Specialization</span>
                                        <span className="small fw-semibold text-white">Full-Stack &amp; UI/UX</span>
                                    </div>
                                    <div>
                                        <span className="d-block text-cyan-light small text-uppercase font-mono">Tech Stack</span>
                                        <span className="small fw-semibold text-white">React, PHP, MySQL</span>
                                    </div>
                                    <div>
                                        <span className="d-block text-cyan-light small text-uppercase font-mono">Availability</span>
                                        <span className="small fw-semibold text-success">Open for Projects</span>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Tech Ticker */}
            <TechTicker />
        </section>
    );
};

export default Hero;
