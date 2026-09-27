import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCalendarAlt, faUniversity, faAtom } from '@fortawesome/free-solid-svg-icons';
import { portfolioData } from '../../data/portfolioData';
import { usePortfolioData } from '../../context/PortfolioDataContext';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';

const Education = () => {
    let portfolio = portfolioData;
    try {
        const context = usePortfolioData();
        if (context?.data) portfolio = context.data;
    } catch (e) {}
    const { education } = portfolio;

    return (
        <section id="education" className="py-5 education-section">
            <div className="container">
                <SectionHeader
                    title="Academic Foundation"
                    subtitle="Formal education in Computer Science and Software Engineering"
                />

                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="education-timeline position-relative">
                            {education.map((edu, idx) => (
                                <motion.div
                                    key={idx}
                                    className="timeline-block mb-4"
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? -25 : 25 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                                >
                                    <GlassCard className="p-4 p-md-5 rounded-4 position-relative overflow-hidden">
                                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="edu-icon-badge">
                                                    <FontAwesomeIcon icon={faGraduationCap} />
                                                </div>
                                                <div>
                                                    <h4 className="fw-bold mb-0">{edu.degree}</h4>
                                                    <div className="text-cyan small fw-semibold">
                                                        <FontAwesomeIcon icon={faUniversity} className="me-1" />
                                                        {edu.institution}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="badge bg-secondary-subtle text-secondary-emphasis px-3 py-2 rounded-pill font-mono small">
                                                <FontAwesomeIcon icon={faCalendarAlt} className="me-1" />
                                                {edu.period}
                                            </div>
                                        </div>

                                        {edu.status && (
                                            <span className="badge bg-primary-subtle text-primary border border-primary-subtle mb-3">
                                                {edu.status}
                                            </span>
                                        )}

                                        <p className="text-secondary-emphasis mb-3">
                                            {edu.details}
                                        </p>

                                        {edu.thesis && (
                                            <div className="thesis-callout p-3 rounded-3 mt-3">
                                                <div className="small text-cyan font-mono fw-bold mb-1">
                                                    <FontAwesomeIcon icon={faAtom} className="me-1" /> THESIS TOPIC
                                                </div>
                                                <div className="fw-semibold text-light-emphasis">
                                                    {edu.thesis}
                                                </div>
                                            </div>
                                        )}

                                        {edu.cgpa && (
                                            <div className="d-flex align-items-center gap-2 text-muted small mt-2">
                                                <span>Cumulative Grade Point Average:</span>
                                                <span className="font-mono fw-semibold text-secondary">{edu.cgpa}</span>
                                            </div>
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

export default Education;
