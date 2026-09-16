import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faLaptopCode, 
    faBrain, 
    faAtom, 
    faRoute, 
    faProjectDiagram, 
    faArrowDown,
    faCheckCircle,
    faGraduationCap
} from '@fortawesome/free-solid-svg-icons';
import { portfolioData } from '../../data/portfolioData';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';

const About = () => {
    const { personalInfo } = portfolioData;

    const technicalProgression = [
        {
            stage: "Foundation",
            title: "Software Engineering Core",
            desc: "BS in Software Engineering (Virtual University). Full-stack web technologies, database architecture, and systematic software development.",
            icon: faLaptopCode,
            color: "#3b82f6"
        },
        {
            stage: "Expansion",
            title: "AI & Machine Learning",
            desc: "Neural architectures, predictive modeling with TensorFlow & PyTorch, computer vision, and prompt engineering.",
            icon: faBrain,
            color: "#8b5cf6"
        },
        {
            stage: "Specialization",
            title: "Quantum Computing & QML",
            desc: "Parameterized quantum circuits, quantum state simulation in Qiskit, and variational quantum machine learning algorithms.",
            icon: faAtom,
            color: "#06b6d4"
        },
        {
            stage: "Convergence",
            title: "Hybrid Combinatorial Optimization",
            desc: "Decomposition-based Warm-Started QAOA for Capacitated Vehicle Routing (CVRP), balancing qubit efficiency with practical constraints.",
            icon: faProjectDiagram,
            color: "#10b981"
        }
    ];

    return (
        <section id="about" className="py-5 about-section">
            <div className="container">
                <SectionHeader
                    title="About & Background"
                    subtitle="Software engineering foundations evolving into quantum-classical research"
                />

                <div className="row g-5 align-items-center mb-5">
                    {/* Left Column: Academic & Technical Narrative */}
                    <motion.div 
                        className="col-lg-6"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <GlassCard className="p-4 p-md-5 rounded-4 h-100">
                            <div className="d-flex align-items-center gap-2 mb-3 text-cyan">
                                <FontAwesomeIcon icon={faGraduationCap} />
                                <span className="text-uppercase small fw-bold tracking-wider">Research Trajectory</span>
                            </div>

                            <h3 className="fw-bold mb-3">
                                Bridging Classical Systems with Quantum Optimization
                            </h3>

                            <p className="text-secondary-emphasis lead fs-6 mb-3">
                                I am a Software Engineering graduate and an MS/MPhil Computer Science researcher with a dedicated interest in Quantum Computing, Quantum Machine Learning, Artificial Intelligence, and combinatorial optimization.
                            </p>

                            <p className="text-secondary-emphasis mb-3">
                                My work focuses on exploring how quantum and classical computational techniques can be combined to develop efficient approaches to challenging optimization problems. I am particularly interested in QAOA, quantum neural networks, variational quantum algorithms, hybrid optimization, and simulation-based quantum computing.
                            </p>

                            <p className="text-secondary-emphasis mb-4">
                                Alongside research, I bring 7+ years of practical experience across software development, web engineering, database design, AI/ML tools, and technical education as a CBT&A Instructor.
                            </p>

                            <div className="pt-3 border-top border-secondary-subtle">
                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <div className="small text-muted mb-1">Affiliation</div>
                                        <div className="small fw-semibold text-light-emphasis">The Islamia University of Bahawalpur</div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="small text-muted mb-1">Undergraduate</div>
                                        <div className="small fw-semibold text-light-emphasis">Virtual University of Pakistan</div>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>

                    {/* Right Column: Progressive Technical Journey Infographic */}
                    <motion.div 
                        className="col-lg-6"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="progression-roadmap p-3 p-md-4 rounded-4">
                            <h5 className="fw-bold mb-4 d-flex align-items-center gap-2">
                                <span className="progression-dot"></span>
                                Technical Journey & Research Evolution
                            </h5>

                            <div className="progression-steps position-relative">
                                {technicalProgression.map((step, idx) => (
                                    <div key={idx} className="progression-step-card d-flex gap-3 mb-3 position-relative">
                                        <div 
                                            className="step-icon-wrap flex-shrink-0"
                                            style={{ backgroundColor: `${step.color}15`, color: step.color, borderColor: `${step.color}40` }}
                                        >
                                            <FontAwesomeIcon icon={step.icon} />
                                        </div>
                                        <div className="step-content p-3 rounded-3 flex-grow-1">
                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                                <h6 className="fw-bold mb-0 text-light-emphasis">{step.title}</h6>
                                                <span className="badge bg-secondary-subtle text-muted small font-mono">{step.stage}</span>
                                            </div>
                                            <p className="small text-muted mb-0">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
