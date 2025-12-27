import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { portfolioData } from '../../data/portfolioData';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';

const Projects = () => {
    const { projects } = portfolioData;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    return (
        <section id="projects" style={{ background: 'var(--section-bg-alt)' }}>
            <div className="container">
                <SectionHeader
                    title="Featured Projects"
                    subtitle="A showcase of cross-disciplinary work spanning web and brand identity."
                />
                <motion.div
                    className="row"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {projects.map((project, index) => (
                        <div key={index} className="col-lg-4 col-md-6 mb-4">
                            <GlassCard className="project-card h-100 p-0 overflow-hidden">
                                <div className="project-img-wrapper text-center p-5">
                                    <FontAwesomeIcon icon={project.icon} size="4x" style={{ color: 'var(--accent-color)' }} />
                                </div>
                                <div className="project-content p-4">
                                    <h4>{project.title}</h4>
                                    <p>{project.desc}</p>
                                </div>
                            </GlassCard>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
