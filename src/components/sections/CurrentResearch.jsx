import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faAtom, 
    faRoute, 
    faProjectDiagram, 
    faCogs, 
    faMicrochip, 
    faChartLine, 
    faCheckCircle,
    faLayerGroup,
    faArrowsSplitUpAndLeft,
    faSliders
} from '@fortawesome/free-solid-svg-icons';
import { portfolioData } from '../../data/portfolioData';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';

const CurrentResearch = () => {
    const { currentResearch } = portfolioData;
    const [activeStepIndex, setActiveStepIndex] = useState(0);

    const stepIcons = [
        faRoute,            // 1: CVRP Formulation
        faLayerGroup,       // 2: Decomposition
        faCogs,             // 3: Classical Preprocessing
        faMicrochip,        // 4: Qubit-Efficient Encoding
        faSliders,          // 5: Warm Start Initialization
        faAtom,             // 6: QAOA Execution
        faProjectDiagram,   // 7: Classical Optimization
        faChartLine         // 8: Simulation Evaluation
    ];

    const pipelineStages = currentResearch.pipeline.map((p, idx) => ({
        ...p,
        icon: stepIcons[idx] || faAtom,
        domain: idx === 0 ? "Problem Domain" :
                idx <= 2 ? "Classical Phase" :
                idx === 3 || idx === 4 ? "Hybrid Interface" :
                idx === 5 ? "Quantum Subroutine" :
                idx === 6 ? "Classical Co-Optimizer" : "Validation"
    }));

    return (
        <section id="thesis" className="current-research-section py-5">
            <div className="container">
                <SectionHeader
                    title="Current Research"
                    subtitle="Graduate Thesis & Quantum-Classical Optimization Architecture"
                />

                {/* Thesis Highlight Banner */}
                <motion.div 
                    className="thesis-hero-card p-4 p-md-5 mb-5 rounded-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="row align-items-center g-4">
                        <div className="col-lg-8">
                            <div className="d-flex align-items-center gap-2 mb-3">
                                <span className="badge research-badge-primary">
                                    <FontAwesomeIcon icon={faAtom} className="me-2" /> MS / MPhil Thesis
                                </span>
                                <span className="badge research-badge-secondary">
                                    The Islamia University of Bahawalpur
                                </span>
                            </div>

                            <h2 className="thesis-title mb-3">
                                {currentResearch.title}
                            </h2>

                            <p className="thesis-description lead mb-4">
                                {currentResearch.description}
                            </p>

                            {/* Core Concepts Badges */}
                            <div className="concepts-container">
                                <h6 className="text-uppercase tracking-wider text-muted-research mb-2 small fw-bold">
                                    Core Research Concepts & Methodologies
                                </h6>
                                <div className="d-flex flex-wrap gap-2">
                                    {currentResearch.concepts.map((concept, i) => (
                                        <span key={i} className="concept-pill">
                                            <FontAwesomeIcon icon={faCheckCircle} className="concept-icon" />
                                            {concept}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="thesis-stat-card p-4 rounded-3 text-center">
                                <div className="circuit-mini-preview mb-3">
                                    <svg viewBox="0 0 200 120" className="w-100 h-auto" style={{ maxHeight: '120px' }}>
                                        {/* Circuit Lines */}
                                        <line x1="20" y1="30" x2="180" y2="30" stroke="var(--cyan-glow)" strokeWidth="1.5" strokeDasharray="3 3" />
                                        <line x1="20" y1="60" x2="180" y2="60" stroke="var(--cyan-glow)" strokeWidth="1.5" strokeDasharray="3 3" />
                                        <line x1="20" y1="90" x2="180" y2="90" stroke="var(--cyan-glow)" strokeWidth="1.5" strokeDasharray="3 3" />
                                        {/* Qubit labels */}
                                        <text x="5" y="34" fill="var(--text-muted)" fontSize="10" fontFamily="monospace">|q₀⟩</text>
                                        <text x="5" y="64" fill="var(--text-muted)" fontSize="10" fontFamily="monospace">|q₁⟩</text>
                                        <text x="5" y="94" fill="var(--text-muted)" fontSize="10" fontFamily="monospace">|qₙ⟩</text>
                                        {/* Gates */}
                                        <rect x="40" y="20" width="22" height="20" rx="4" fill="var(--bg-card)" stroke="var(--accent-purple)" strokeWidth="1.5" />
                                        <text x="51" y="34" fill="white" fontSize="10" textAnchor="middle">W</text>
                                        <rect x="40" y="50" width="22" height="20" rx="4" fill="var(--bg-card)" stroke="var(--accent-purple)" strokeWidth="1.5" />
                                        <text x="51" y="64" fill="white" fontSize="10" textAnchor="middle">W</text>
                                        <rect x="40" y="80" width="22" height="20" rx="4" fill="var(--bg-card)" stroke="var(--accent-purple)" strokeWidth="1.5" />
                                        <text x="51" y="94" fill="white" fontSize="10" textAnchor="middle">W</text>

                                        {/* Cost Hamiltonian Gate */}
                                        <rect x="80" y="20" width="35" height="80" rx="6" fill="rgba(6, 182, 212, 0.15)" stroke="var(--cyan-glow)" strokeWidth="1.5" />
                                        <text x="97" y="64" fill="var(--cyan-glow)" fontSize="10" textAnchor="middle" fontWeight="bold">U(C, γ)</text>

                                        {/* Mixer Gate */}
                                        <rect x="135" y="20" width="35" height="80" rx="6" fill="rgba(139, 92, 246, 0.15)" stroke="var(--accent-purple)" strokeWidth="1.5" />
                                        <text x="152" y="64" fill="var(--accent-purple)" fontSize="10" textAnchor="middle" fontWeight="bold">U(M, β)</text>
                                    </svg>
                                </div>
                                <h6 className="fw-bold mb-1">Warm-Started QAOA</h6>
                                <p className="small text-muted mb-3">Simulation-Based Hybrid Optimization</p>
                                <div className="p-2 rounded-2 bg-dark-subtle small text-start">
                                    <span className="d-block text-cyan font-mono small">Framework: Python & Qiskit</span>
                                    <span className="d-block text-muted small">Target: Qubit reduction in CVRP graphs</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 8-Stage Interactive Research Pipeline */}
                <div className="pipeline-section">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
                        <div>
                            <h3 className="h4 fw-bold mb-1">Visual Research Pipeline</h3>
                            <p className="text-muted small mb-0">
                                End-to-end decomposition, encoding, and variational optimization flow:
                            </p>
                        </div>
                        <span className="badge bg-secondary-subtle text-muted mt-2 mt-md-0">
                            Interactive: Select any stage to inspect
                        </span>
                    </div>

                    {/* Step Navigation Bar */}
                    <div className="pipeline-track-wrapper pb-3 mb-4">
                        <div className="pipeline-track d-flex gap-2">
                            {pipelineStages.map((stage, idx) => {
                                const isActive = activeStepIndex === idx;
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveStepIndex(idx)}
                                        className={`pipeline-step-node ${isActive ? 'active' : ''}`}
                                        aria-label={`Step ${stage.step}: ${stage.name}`}
                                    >
                                        <span className="step-num">{stage.step}</span>
                                        <FontAwesomeIcon icon={stage.icon} className="step-icon" />
                                        <span className="step-label d-none d-lg-inline">{stage.name}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Active Step Detailed Card */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeStepIndex}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.3 }}
                            className="pipeline-active-card p-4 rounded-4"
                        >
                            <div className="row align-items-center g-4">
                                <div className="col-md-2 text-center text-md-start">
                                    <div className="active-icon-circle mx-auto mx-md-0">
                                        <FontAwesomeIcon icon={pipelineStages[activeStepIndex].icon} size="2x" />
                                    </div>
                                    <span className="badge domain-badge mt-3">
                                        {pipelineStages[activeStepIndex].domain}
                                    </span>
                                </div>
                                <div className="col-md-7">
                                    <div className="small text-cyan font-mono mb-1">
                                        STAGE {pipelineStages[activeStepIndex].step} OF 8
                                    </div>
                                    <h4 className="fw-bold mb-2">
                                        {pipelineStages[activeStepIndex].name}
                                    </h4>
                                    <p className="text-secondary-emphasis mb-0 lead fs-6">
                                        {pipelineStages[activeStepIndex].desc}
                                    </p>
                                </div>
                                <div className="col-md-3 text-md-end">
                                    <div className="nav-controls d-flex gap-2 justify-content-center justify-content-md-end">
                                        <button 
                                            className="btn btn-sm btn-outline-secondary rounded-pill px-3"
                                            disabled={activeStepIndex === 0}
                                            onClick={() => setActiveStepIndex(prev => Math.max(0, prev - 1))}
                                        >
                                            Previous
                                        </button>
                                        <button 
                                            className="btn btn-sm btn-outline-cyan rounded-pill px-3"
                                            disabled={activeStepIndex === pipelineStages.length - 1}
                                            onClick={() => setActiveStepIndex(prev => Math.min(pipelineStages.length - 1, prev + 1))}
                                        >
                                            Next Stage
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Simulation Scope Note */}
                    <div className="mt-4 p-3 rounded-3 research-disclaimer-box d-flex align-items-start gap-3">
                        <FontAwesomeIcon icon={faAtom} className="text-cyan mt-1" />
                        <div className="small">
                            <strong>Research Scope & Methodology:</strong> {currentResearch.frameworkScope}
                            <span className="text-muted d-block mt-1">
                                Note: All quantum algorithmic evaluations are conducted via numerical simulation environments (Statevector and Qiskit Aer primitives). No exaggerated physical quantum hardware claims are made.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CurrentResearch;
