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
import { usePortfolioData } from '../../context/PortfolioDataContext';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';
import ProjectDetailsModal from '../ui/ProjectDetailsModal';

const Projects = ({ viewMode = 'normal', onToggleViewMode }) => {
    let portfolio = portfolioData;
    try {
        const context = usePortfolioData();
        if (context?.data) portfolio = context.data;
    } catch (e) {}
    const projects = portfolio.projects || [];
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const normalCategories = ['All', 'Web', 'Software', 'AI/ML', 'Design', 'Quantum'];
    const quantumCategories = ['All', 'Quantum', 'AI/ML', 'Software', 'Web'];
    const categories = viewMode === 'quantum' ? quantumCategories : normalCategories;

    const filteredProjects = activeFilter === 'All' 
        ? projects 
        : projects.filter(p => {
            const pCat = p.category.toLowerCase();
            const filterCat = activeFilter.toLowerCase();
            if (filterCat === 'design') return pCat.includes('design') || pCat.includes('web');
            return pCat === filterCat;
        });

    const normalFeatured = projects.find(p => p.id === 'custom-web-engineering') || projects[0];
    const quantumFeatured = projects.find(p => p.id === 'thesis-qaoa-cvrp') || projects[0];
    const featuredProject = viewMode === 'quantum' ? quantumFeatured : normalFeatured;

    const categoryIcons = {
        Quantum: faAtom,
        'AI/ML': faBrain,
        Software: faLaptopCode,
        Web: faGlobe,
        Design: faGlobe
    };

    return (
        <section id="projects" className="py-5 projects-section">
            <div className="container">
                <SectionHeader
                    title={viewMode === 'quantum' ? "Research & Software Projects" : "Featured Projects & Solutions"}
                    subtitle={viewMode === 'quantum' 
                        ? "Algorithmic research implementations, machine learning models, and engineering architectures"
                        : "Full-stack web applications, dynamic enterprise platforms, and brand identity systems"}
                />

                {/* Prominent Featured Project Spotlight */}
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
                                    <FontAwesomeIcon icon={faStar} className="me-1" /> {viewMode === 'quantum' ? 'FEATURED RESEARCH PROJECT' : 'FEATURED FULL-STACK SOLUTION'}
                                </span>
                                <span className="badge bg-cyan-subtle text-cyan font-mono">
                                    {featuredProject.badge}
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
                                            <FontAwesomeIcon icon={faCheckCircle} className="me-1" /> {viewMode === 'quantum' ? 'Key Research Contribution:' : 'Key Engineering Deliverable:'}
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
                                        {viewMode === 'quantum' ? (
                                            <a 
                                                href="#thesis" 
                                                className="btn btn-custom px-4 py-2 rounded-pill shadow"
                                            >
                                                <FontAwesomeIcon icon={faBookOpen} className="me-2" />
                                                View Research Pipeline
                                            </a>
                                        ) : (
                                            <a 
                                                href="#contact" 
                                                className="btn btn-custom px-4 py-2 rounded-pill shadow"
                                            >
                                                <FontAwesomeIcon icon={faGlobe} className="me-2" />
                                                Discuss Project
                                            </a>
                                        )}

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
                                            <FontAwesomeIcon icon={viewMode === 'quantum' ? faAtom : faLaptopCode} size="3x" className="text-cyan" />
                                        </div>
                                        <h5 className="fw-bold mb-1">{viewMode === 'quantum' ? 'QAOA + CVRP' : 'Full-Stack Architecture'}</h5>
                                        <p className="small text-muted mb-3">{viewMode === 'quantum' ? 'Qubit-Efficient Hybrid Simulation' : 'Modular, Scalable & Secure'}</p>
                                        <div className="p-2 rounded-2 bg-body-tertiary small text-start font-mono text-muted">
                                            <div>&gt; frontend: {viewMode === 'quantum' ? 'Qiskit Aer' : 'React / Modern UI'}</div>
                                            <div>&gt; backend: {viewMode === 'quantum' ? 'Warm-start Mixer' : 'PHP & MySQL'}</div>
                                            <div>&gt; standard: {viewMode === 'quantum' ? 'Combinatorial QUBO' : 'REST APIs & Security'}</div>
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
