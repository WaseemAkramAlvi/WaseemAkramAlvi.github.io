import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCodeBranch, faStar, faExternalLinkAlt, faAtom, faBrain, faLaptopCode, faBook } from '@fortawesome/free-solid-svg-icons';
import { portfolioData } from '../../data/portfolioData';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';

const GithubSection = () => {
    const { personalInfo } = portfolioData;

    const repoCategories = [
        {
            title: "Quantum Computing & QAOA",
            desc: "Simulation scripts, parameterized quantum circuits, and combinatorial optimization formulations using Qiskit.",
            icon: faAtom,
            tags: ["Qiskit", "Python", "QAOA", "CVRP", "Optimization"]
        },
        {
            title: "AI & Machine Learning",
            desc: "Deep learning models, computer vision diagnostic pipelines, data preprocessing, and model evaluation notebooks.",
            icon: faBrain,
            tags: ["TensorFlow", "PyTorch", "OpenCV", "Scikit-Learn"]
        },
        {
            title: "Web Engineering & Applications",
            desc: "Full-stack enterprise architectures, responsive React interfaces, relational database designs, and APIs.",
            icon: faLaptopCode,
            tags: ["React", "PHP", "MySQL", "JavaScript", "Bootstrap"]
        },
        {
            title: "Technical Training & Labs",
            desc: "Demonstration codebases, structured CBT&A student exercises, and practical tutorials for emerging technologists.",
            icon: faBook,
            tags: ["Web Dev", "Prompt Engineering", "Curriculum"]
        }
    ];

    return (
        <section id="github" className="py-5 github-section">
            <div className="container">
                <SectionHeader
                    title="Open Source & Repositories"
                    subtitle="Public code, algorithmic research implementations, and software projects"
                />

                <div className="row justify-content-center mb-5">
                    <div className="col-lg-10">
                        <GlassCard className="p-4 p-md-5 rounded-4 text-center">
                            <div className="d-inline-flex align-items-center justify-content-center p-3 rounded-circle bg-secondary-subtle mb-3">
                                <FontAwesomeIcon icon={faGithub} size="3x" />
                            </div>
                            <h3 className="fw-bold mb-2">@{personalInfo.githubUsername}</h3>
                            <p className="text-muted max-w-600 mx-auto mb-4">
                                Explore source code repositories spanning quantum optimization simulations, machine learning models, full-stack web platforms, and instructional coursework.
                            </p>
                            <a
                                href={`https://github.com/${personalInfo.githubUsername}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-custom px-4 py-2 rounded-pill shadow"
                            >
                                <FontAwesomeIcon icon={faGithub} className="me-2" />
                                View Full GitHub Profile
                                <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-2 small" />
                            </a>
                        </GlassCard>
                    </div>
                </div>

                <div className="row g-4">
                    {repoCategories.map((cat, idx) => (
                        <div key={idx} className="col-lg-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="h-100"
                            >
                                <GlassCard className="h-100 p-4 rounded-4 d-flex flex-column justify-content-between">
                                    <div>
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <div className="d-flex align-items-center gap-2 text-cyan">
                                                <FontAwesomeIcon icon={cat.icon} />
                                                <span className="fw-bold">{cat.title}</span>
                                            </div>
                                            <FontAwesomeIcon icon={faCodeBranch} className="text-muted small" />
                                        </div>
                                        <p className="small text-secondary-emphasis mb-3">
                                            {cat.desc}
                                        </p>
                                    </div>
                                    <div className="d-flex flex-wrap gap-2 pt-2 border-top border-secondary-subtle">
                                        {cat.tags.map((tag, tIdx) => (
                                            <span key={tIdx} className="badge bg-secondary-subtle text-muted small font-mono">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </GlassCard>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GithubSection;
