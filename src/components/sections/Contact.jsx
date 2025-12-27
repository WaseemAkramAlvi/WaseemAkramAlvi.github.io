import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { portfolioData } from '../../data/portfolioData';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';

const Contact = () => {
    const { personalInfo } = portfolioData;

    const contactItems = [
        { icon: faEnvelope, label: "Email", info: personalInfo.email, href: `mailto:${personalInfo.email}` },
        { icon: faPhone, label: "Phone", info: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s+/g, '')}` },
        { icon: faMapMarkerAlt, label: "Location", info: personalInfo.location }
    ];

    return (
        <section id="contact-me" className="premium-gradient-bg">
            <div className="container">
                <SectionHeader
                    title="Get In Touch"
                    subtitle="Let's collaborate on your next digital or creative project."
                />
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <GlassCard className="contact-me-wrapper p-0 overflow-hidden">
                            <div className="row g-0">
                                <div className="col-lg-6 p-5 contact-info-sidebar">
                                    <h4 className="mb-4">Contact Information</h4>
                                    <div className="contact-info-items">
                                        {contactItems.map((item, index) => (
                                            <motion.div
                                                key={index}
                                                className="contact-info-item d-flex align-items-center mb-4"
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                <div className="contact-icon-box me-3">
                                                    <FontAwesomeIcon icon={item.icon} />
                                                </div>
                                                <div>
                                                    <h6>{item.label}</h6>
                                                    {item.href ? (
                                                        <a href={item.href}>{item.info}</a>
                                                    ) : (
                                                        <p className="mb-0">{item.info}</p>
                                                    )}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="social-links mt-5">
                                        <h6>Follow My Work</h6>
                                        <div className="social-icons-group d-flex gap-3">
                                            {personalInfo.socials.map((social, index) => (
                                                <motion.a
                                                    key={index}
                                                    href={social.url}
                                                    className="social-link"
                                                    whileHover={{ y: -5, scale: 1.1 }}
                                                >
                                                    <FontAwesomeIcon icon={social.icon} />
                                                </motion.a>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 p-5">
                                    <h4 className="mb-4">Send a Message</h4>
                                    <form className="contact-form-wrapper" onSubmit={(e) => e.preventDefault()}>
                                        <div className="mb-3">
                                            <input type="text" className="form-control form-input" placeholder="Your Name" required />
                                        </div>
                                        <div className="mb-3">
                                            <input type="email" className="form-control form-input" placeholder="Your Email" required />
                                        </div>
                                        <div className="mb-3">
                                            <textarea className="form-control form-input" rows="4" placeholder="Your Message" required></textarea>
                                        </div>
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            type="submit"
                                            className="btn btn-custom w-100 py-3"
                                        >
                                            <FontAwesomeIcon icon={faPaperPlane} className="me-2" /> Send Message
                                        </motion.button>
                                    </form>
                                </div>
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
