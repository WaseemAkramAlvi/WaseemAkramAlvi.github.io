import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBriefcase, 
    faCalendarAlt, 
    faMapMarkerAlt, 
    faChalkboardTeacher, 
    faCode, 
    faTruckMoving,
    faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import { portfolioData } from '../../data/portfolioData';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';

const Experience = () => {
    const { experience } = portfolioData;

    const roleIcons = [
        faChalkboardTeacher, // Instructor CBT&A
        faCode,               // Web Dev & Graphics Designer
        faTruckMoving         // Logistics Assistant Manager
    ];

    const roleHighlights = [
        [
            "Instructing CBT&A cohorts in Web Design & Development (HTML, CSS, JavaScript, PHP, MySQL)",
            "Hands-on mentoring in Database Architecture, AI Tools, and Prompt Engineering workflows",
            "Designing practical project-based lab curricula and guiding technical freelancing readiness"
        ],
        [
            "Engineered tailored full-stack websites and web applications for diverse enterprise clients",
            "Designed high-impact visual identities, digital marketing assets, and responsive UI components",
            "Managed client discovery, requirement specifications, and production deployment cycles"
        ],
        [
            "Coordinated logistics scheduling, cargo allocations, and fleet transit operations",
            "Managed day-to-day administrative reporting and operational logistics tracking",
            "Acquired direct domain experience in commercial transportation and route coordination"
        ]
    ];

    return (
        <section id="experience" className="py-5 experience-section">
            <div className="container">
                <SectionHeader
                    title="Professional Experience"
                    subtitle="Bridging software engineering, technical education, and domain operations"
                />

                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="experience-timeline position-relative">
                            {experience.map((exp, idx) => (
                                <motion.div
                                    key={idx}
                                    className="experience-item-card mb-4"
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                                >
                                    <GlassCard className="p-4 p-md-5 rounded-4">
                                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="role-icon-box">
                                                    <FontAwesomeIcon icon={roleIcons[idx] || faBriefcase} />
                                                </div>
                                                <div>
                                                    <h4 className="fw-bold mb-1">{exp.role}</h4>
                                                    <div className="text-cyan fw-semibold">
                                                        {exp.company}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-column align-items-md-end gap-1">
                                                <span className="badge bg-secondary-subtle text-secondary-emphasis px-3 py-2 rounded-pill font-mono small">
                                                    <FontAwesomeIcon icon={faCalendarAlt} className="me-1" />
                                                    {exp.date}
                                                </span>
                                                {exp.location && (
                                                    <span className="small text-muted">
                                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="me-1" />
                                                        {exp.location}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <p className="text-secondary-emphasis mb-3">
                                            {exp.desc}
                                        </p>

                                        {/* Specific responsibilities list */}
                                        {roleHighlights[idx] && (
                                            <ul className="role-highlights-list list-unstyled mb-0 pt-2 border-top border-secondary-subtle">
                                                {roleHighlights[idx].map((hl, hIdx) => (
                                                    <li key={hIdx} className="d-flex align-items-start gap-2 small text-muted mb-2">
                                                        <FontAwesomeIcon icon={faCheckCircle} className="text-cyan mt-1 flex-shrink-0" />
                                                        <span>{hl}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </GlassCard>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
