import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faAtom, 
    faBrain, 
    faLaptopCode, 
    faGlobe, 
    faExternalLinkAlt, 
    faBookOpen, 
    faFilter, 
    faCheckCircle,
    faStar
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { portfolioData } from '../../data/portfolioData';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';
import ProjectDetailsModal from '../ui/ProjectDetailsModal';

const Projects = () => {
    const { projects } = portfolioData;
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const categories = ['All', 'Quantum', 'AI/ML', 'Software', 'Web'];

    const filteredProjects = activeFilter === 'All' 
        ? projects 
        : projects.filter(p => p.category.toLowerCase() === activeFilter.toLowerCase());

    const featuredProject = projects.find(p => p.isFeatured) || projects[0];

    const categoryIcons = {
        Quantum: faAtom,
        'AI/ML': faBrain,
        Software: faLaptopCode,
        Web: faGlobe
    };

    return (
        <section id="projects" className="py-5 projects-section">
            <div className="container">
                <SectionHeader
                    title="Research & Software Projects"
                    subtitle="Algorithmic research implementations, machine learning models, and engineering architectures"
                />

                {/* Prominent Featured Thesis Project Spotlight */}
                <div className="featured-project-spotlight mb-5">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <GlassCard className="p-4 p-md-5 rounded-4 featured-spotlight-card position-relative overflow-hidden">
                            <div className="d-flex align-items-center gap-2 mb-3">
                                <span className="badge bg-warning-subtle text-warning border border-warning-subtle px-3 py-1 font-mono">
                                    <FontAwesomeIcon icon={faStar} className="me-1" /> FEATURED RESEARCH PROJECT
                                </span>
                                <span className="badge bg-cyan-subtle text-cyan font-mono">
                                    MS Thesis Implementation
                                </span>
                            </div>

                            <div className="row g-4 align-items-center">
                                <div className="col-lg-8">
                                    <h3 className="fw-bold mb-3 featured-title">
                                        {featuredProject.title}
                                    </h3>

                                    <div className="featured-problem-box p-3 rounded-3 mb-3">
                                        <div className="small text-muted text-uppercase fw-bold font-mono mb-1">
                                            Problem Statement:
                                        </div>
                                        <p className="small text-secondary-emphasis mb-0">
                                            {featuredProject.problem}
                                        </p>
                                    </div>

                                    <p className="text-secondary-emphasis mb-3">
                                        {featuredProject.description}
                                    </p>

                                    <div className="key-contribution-box p-3 rounded-3 mb-4 bg-dark-subtle border border-secondary-subtle">
                                        <div className="small text-cyan text-uppercase fw-bold font-mono mb-1">
                                            <FontAwesomeIcon icon={faCheckCircle} className="me-1" /> Key Research Contribution:
                                        </div>
                                        <p className="small text-light-emphasis mb-0">
                                            {featuredProject.keyContribution}
                                        </p>
                                    </div>

                                    <div className="d-flex flex-wrap gap-2 mb-4">
                                        {featuredProject.technology.map((tech, tIdx) => (
                                            <span key={tIdx} className="badge bg-secondary-subtle text-light font-mono small">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="d-flex flex-wrap gap-3">
                                        <a 
                                            href="#thesis" 
                                            className="btn btn-custom px-4 py-2 rounded-pill shadow"
                                        >
                                            <FontAwesomeIcon icon={faBookOpen} className="me-2" />
                                            View Research Pipeline
                                        </a>

                                        {featuredProject.github && (
                                            <a 
                                                href={featuredProject.github} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="btn btn-outline-secondary px-4 py-2 rounded-pill d-inline-flex align-items-center gap-2"
                                            >
                                                <FontAwesomeIcon icon={faGithub} />
                                                <span>GitHub Codebase</span>
                                                <FontAwesomeIcon icon={faExternalLinkAlt} className="small" />
                                            </a>
                                        )}

                                        <button 
                                            className="btn btn-outline-cyan px-4 py-2 rounded-pill"
                                            onClick={() => setSelectedProject(featuredProject)}
                                        >
                                            Detailed Specs
                                        </button>
                                    </div>
                                </div>

                                <div className="col-lg-4 text-center">
                                    <div className="p-4 rounded-4 bg-dark-subtle border border-cyan-subtle text-center">
                                        <div className="featured-icon-circle mx-auto mb-3">
                                            <FontAwesomeIcon icon={faAtom} size="3x" className="text-cyan" />
                                        </div>
                                        <h5 className="fw-bold mb-1">QAOA + CVRP</h5>
                                        <p className="small text-muted mb-3">Qubit-Efficient Hybrid Simulation</p>
                                        <div className="p-2 rounded-2 bg-body-tertiary small text-start font-mono text-muted">
                                            <div>&gt; target: NP-hard Routing</div>
                                            <div>&gt; mode: Warm-start Mixer</div>
                                            <div>&gt; framework: Qiskit</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>

                {/* Filter Tabs */}
                <div className="projects-filter-bar d-flex justify-content-center flex-wrap gap-2 mb-4">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`filter-tab-btn ${activeFilter === cat ? 'active' : ''}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div 
                    layout 
                    className="row g-4"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.35 }}
                                className="col-lg-4 col-md-6"
                            >
                                <GlassCard className="h-100 p-4 rounded-4 project-grid-card d-flex flex-column justify-content-between">
                                    <div>
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <span className="badge bg-secondary-subtle text-cyan font-mono small">
                                                <FontAwesomeIcon icon={categoryIcons[project.category] || faLaptopCode} className="me-1" />
                                                {project.category}
                                            </span>
                                            <span className="badge bg-body-tertiary text-muted small">
                                                {project.badge}
                                            </span>
                                        </div>

                                        <h4 className="fw-bold mb-2 project-card-title">{project.title}</h4>

                                        <div className="small text-muted mb-3 project-card-problem">
                                            <strong>Problem:</strong> {project.problem}
                                        </div>

                                        <p className="small text-secondary-emphasis mb-3">
                                            {project.description}
                                        </p>

                                        {project.keyContribution && (
                                            <div className="p-2 rounded-2 bg-dark-subtle mb-3 small text-muted border-start border-cyan border-2">
                                                <strong className="text-light-emphasis">Contribution:</strong> {project.keyContribution}
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <div className="d-flex flex-wrap gap-1 mb-3 pt-2 border-top border-secondary-subtle">
                                            {project.technology.slice(0, 4).map((tech, i) => (
                                                <span key={i} className="badge bg-secondary-subtle text-muted small font-mono">
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.technology.length > 4 && (
                                                <span className="badge bg-secondary-subtle text-muted small font-mono">
                                                    +{project.technology.length - 4}
                                                </span>
                                            )}
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center pt-2">
                                            <button
                                                className="btn btn-sm btn-outline-cyan rounded-pill px-3"
                                                onClick={() => setSelectedProject(project)}
                                            >
                                                Details &amp; Architecture
                                            </button>

                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-secondary hover-cyan"
                                                    title="GitHub Repository"
                                                >
                                                    <FontAwesomeIcon icon={faGithub} size="lg" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Project Details Modal */}
                <ProjectDetailsModal
                    open={selectedProject !== null}
                    onClose={() => setSelectedProject(null)}
                    project={selectedProject}
                />
            </div>
        </section>
    );
};

export default Projects;
