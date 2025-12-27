import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

const About = () => {
    const { personalInfo, experience } = portfolioData;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="about">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    About Me
                </motion.h2>
                <div className="row">
                    <motion.div
                        className="col-lg-6"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="about-text">
                            I hold a BS in Software Engineering from Virtual University of Pakistan and bring 7+ years
                            of professional experience as a Graphic Designer. Skilled in teaching, mentoring, and
                            curriculum development, I specialize in delivering project-based learning.
                        </p>
                        <p className="about-text">
                            I am dedicated to fostering innovation in education and staying enthusiastic about exploring
                            emerging technologies to empower learners in today's digital landscape.
                        </p>
                    </motion.div>
                    <div className="col-lg-6">
                        <motion.div
                            className="experience-list"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {experience.map((exp, index) => (
                                <motion.div key={index} className="experience-item" variants={itemVariants}>
                                    <span className="date-range">{exp.date}</span>
                                    <h4>{exp.role}</h4>
                                    <h5>{exp.company}</h5>
                                    <p>{exp.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
