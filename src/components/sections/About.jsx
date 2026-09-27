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
    faGraduationCap,
    faPaintBrush,
    faChalkboardTeacher,
    faCode
} from '@fortawesome/free-solid-svg-icons';
import { portfolioData } from '../../data/portfolioData';
import { usePortfolioData } from '../../context/PortfolioDataContext';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';

const About = ({ viewMode = 'normal', onToggleViewMode }) => {
    let portfolio = portfolioData;
    try {
        const context = usePortfolioData();
        if (context?.data) portfolio = context.data;
    } catch (e) {}
    const personalInfo = portfolio.personalInfo || portfolioData.personalInfo;

    const quantumProgression = [
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

    const normalProgression = [
        {
            stage: "Web Engineering",
            title: "Full-Stack Web Development",
            desc: "7+ years crafting scalable web applications with React, JavaScript, PHP, MySQL, Bootstrap, and RESTful API integrations.",
            icon: faCode,
            color: "#3b82f6"
        },
        {
            stage: "Creative Design",
            title: "UI/UX & Graphic Design",
            desc: "Creating high-fidelity wireframes, branding kits, logos, and digital marketing creatives with Figma, Photoshop & Illustrator.",
            icon: faPaintBrush,
            color: "#ec4899"
        },
        {
            stage: "Instruction",
            title: "CBT&A Technical Education",
            desc: "Instructor at Govt. Technical Training Institute delivering hands-on training, project-based learning, and freelancing guidance.",
            icon: faChalkboardTeacher,
            color: "#10b981"
        },
        {
            stage: "Innovation",
            title: "AI & Emerging Technologies",
            desc: "Practical exploration of machine learning pipelines, computer vision models, and generative AI prompt engineering.",
            icon: faBrain,
            color: "#8b5cf6"
        }
    ];

    const technicalProgression = viewMode === 'quantum' ? quantumProgression : normalProgression;

    return (
        <section id="about" className="py-5 about-section">
            <div className="container">
                <SectionHeader
                    title={viewMode === 'quantum' ? "About & Background" : "About Me"}
                    subtitle={viewMode === 'quantum' 
                        ? "Software engineering foundations evolving into quantum-classical research" 
                        : "Software engineer, web developer, graphic designer & CBT&A IT instructor"}
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
                                <FontAwesomeIcon icon={viewMode === 'quantum' ? faGraduationCap : faLaptopCode} />
                                <span className="text-uppercase small fw-bold tracking-wider">
                                    {viewMode === 'quantum' ? 'Research Trajectory' : 'Professional Journey'}
                                </span>
                            </div>

                            <h3 className="fw-bold mb-3">
                                {viewMode === 'quantum' 
                                    ? "Bridging Classical Systems with Quantum Optimization"
                                    : "Crafting High-Performance Web Solutions & Digital Identities"}
                            </h3>

                            {viewMode === 'quantum' ? (
                                <>
                                    <p className="text-secondary-emphasis lead fs-6 mb-3">
                                        I am a Software Engineering graduate and an MS/MPhil Computer Science researcher with a dedicated interest in Quantum Computing, Quantum Machine Learning, Artificial Intelligence, and combinatorial optimization.
                                    </p>

                                    <p className="text-secondary-emphasis mb-3">
                                        My work focuses on exploring how quantum and classical computational techniques can be combined to develop efficient approaches to challenging optimization problems. I am particularly interested in QAOA, quantum neural networks, variational quantum algorithms, hybrid optimization, and simulation-based quantum computing.
                                    </p>

                                    <p className="text-secondary-emphasis mb-4">
                                        Alongside research, I bring 7+ years of practical experience across software development, web engineering, database design, AI/ML tools, and technical education as a CBT&A Instructor.
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p className="text-secondary-emphasis lead fs-6 mb-3">
                                        I hold a BS in Software Engineering from Virtual University of Pakistan and bring 7+ years of hands-on experience across Full-Stack Web Development, UI/UX &amp; Graphic Design, and Technical Education.
                                    </p>

                                    <p className="text-secondary-emphasis mb-3">
                                        As an Instructor for Competency-Based Training &amp; Assessment (CBT&amp;A) at Govt. Technical Training Institute and a Developer at CZone Software House, I develop custom responsive web platforms, engineer relational database architectures, and mentor hundreds of aspiring developers in modern web standards, programming, and freelancing.
                                    </p>

                                    <p className="text-secondary-emphasis mb-4">
                                        I am passionate about building clean, efficient, and user-centric digital products that solve real-world problems for clients and empower students to thrive in the modern tech ecosystem.
                                    </p>
                                </>
                            )}

                            <div className="pt-3 border-top border-secondary-subtle">
                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <div className="small text-muted mb-1">Education</div>
                                        <div className="small fw-semibold text-light-emphasis">BS Software Engineering (VU)</div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="small text-muted mb-1">Current Role</div>
                                        <div className="small fw-semibold text-light-emphasis">Instructor CBT&amp;A (Web Dev)</div>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>

                    {/* Right Column: Progressive Journey Roadmap */}
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
                                {viewMode === 'quantum' ? 'Technical Journey & Research Evolution' : 'Core Disciplines & Expertise'}
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
