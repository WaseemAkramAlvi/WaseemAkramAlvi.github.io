import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faEnvelope, 
    faPhone, 
    faMapMarkerAlt, 
    faPaperPlane, 
    faCheck, 
    faInfoCircle,
    faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { portfolioData } from '../../data/portfolioData';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';

const Contact = () => {
    const { personalInfo } = portfolioData;

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [statusMessage, setStatusMessage] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Frontend validation
        if (!formState.name || !formState.email || !formState.message) {
            setStatusMessage({ type: 'error', text: 'Please fill in all required fields.' });
            return;
        }

        // Inform user about backend configuration + provide mailto pre-fill
        const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formState.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`)}`;

        setStatusMessage({
            type: 'success',
            text: `Message prepared! You can also send directly via email client or WhatsApp below.`,
            mailtoUrl: mailtoUrl
        });
    };

    return (
        <section id="contact" className="py-5 contact-section">
            <div className="container">
                <SectionHeader
                    title="Get In Touch"
                    subtitle="Open to academic research collaborations, MS/PhD opportunities, and technical consulting"
                />

                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <GlassCard className="p-0 rounded-4 overflow-hidden shadow-2xl">
                            <div className="row g-0">
                                {/* Contact Info Sidebar */}
                                <div className="col-lg-5 p-4 p-md-5 contact-sidebar d-flex flex-column justify-content-between">
                                    <div>
                                        <h4 className="fw-bold mb-3 text-light-emphasis">Contact Information</h4>
                                        <p className="text-secondary-emphasis small mb-4">
                                            Feel free to reach out regarding quantum computing research, variational optimization, machine learning projects, or technical opportunities.
                                        </p>

                                        <div className="contact-details-list d-flex flex-column gap-3 mb-4">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="contact-icon-box text-cyan">
                                                    <FontAwesomeIcon icon={faEnvelope} />
                                                </div>
                                                <div>
                                                    <div className="small text-muted">Email</div>
                                                    <a href={`mailto:${personalInfo.email}`} className="text-light-emphasis fw-semibold small text-decoration-none hover-cyan">
                                                        {personalInfo.email}
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="d-flex align-items-center gap-3">
                                                <div className="contact-icon-box text-cyan">
                                                    <FontAwesomeIcon icon={faPhone} />
                                                </div>
                                                <div>
                                                    <div className="small text-muted">Phone / WhatsApp</div>
                                                    <a href={`https://wa.me/${personalInfo.phone.replace(/[\s\+]+/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-light-emphasis fw-semibold small text-decoration-none hover-cyan">
                                                        {personalInfo.phone}
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="d-flex align-items-center gap-3">
                                                <div className="contact-icon-box text-cyan">
                                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                                </div>
                                                <div>
                                                    <div className="small text-muted">Location</div>
                                                    <span className="text-light-emphasis small">
                                                        {personalInfo.location}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Social Connect */}
                                    <div className="pt-3 border-top border-secondary-subtle">
                                        <div className="small text-muted mb-2 text-uppercase font-mono">Academic &amp; Professional Profiles</div>
                                        <div className="d-flex gap-2">
                                            <a
                                                href="https://www.linkedin.com/in/waseemakramalvi/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-sm btn-outline-cyan rounded-pill px-3"
                                                title="LinkedIn Profile"
                                            >
                                                <FontAwesomeIcon icon={faLinkedin} className="me-1" /> LinkedIn
                                            </a>
                                            <a
                                                href={`https://github.com/${personalInfo.githubUsername}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-sm btn-outline-secondary rounded-pill px-3"
                                                title="GitHub Profile"
                                            >
                                                <FontAwesomeIcon icon={faGithub} className="me-1" /> GitHub
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Form */}
                                <div className="col-lg-7 p-4 p-md-5">
                                    <h4 className="fw-bold mb-3">Send a Direct Message</h4>

                                    {statusMessage && (
                                        <div className={`alert ${statusMessage.type === 'success' ? 'alert-success' : 'alert-danger'} p-3 rounded-3 mb-4`}>
                                            <div className="d-flex align-items-center gap-2 small">
                                                <FontAwesomeIcon icon={faInfoCircle} />
                                                <span>{statusMessage.text}</span>
                                            </div>
                                            {statusMessage.mailtoUrl && (
                                                <div className="mt-2">
                                                    <a 
                                                        href={statusMessage.mailtoUrl} 
                                                        className="btn btn-sm btn-outline-success rounded-pill px-3"
                                                    >
                                                        Open in Default Mail Client
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    <form onSubmit={handleFormSubmit} className="contact-form">
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label className="small text-muted mb-1">Your Name *</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formState.name}
                                                    onChange={handleInputChange}
                                                    className="form-control form-input-research"
                                                    placeholder="e.g. Dr. John Doe"
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="small text-muted mb-1">Your Email *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formState.email}
                                                    onChange={handleInputChange}
                                                    className="form-control form-input-research"
                                                    placeholder="e.g. jdoe@institution.edu"
                                                    required
                                                />
                                            </div>
                                            <div className="col-12">
                                                <label className="small text-muted mb-1">Subject *</label>
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    value={formState.subject}
                                                    onChange={handleInputChange}
                                                    className="form-control form-input-research"
                                                    placeholder="Research Inquiry / Collaboration / Opportunity"
                                                    required
                                                />
                                            </div>
                                            <div className="col-12">
                                                <label className="small text-muted mb-1">Message *</label>
                                                <textarea
                                                    name="message"
                                                    rows="4"
                                                    value={formState.message}
                                                    onChange={handleInputChange}
                                                    className="form-control form-input-research"
                                                    placeholder="Write your message here..."
                                                    required
                                                ></textarea>
                                            </div>
                                            <div className="col-12">
                                                <button
                                                    type="submit"
                                                    className="btn btn-custom w-100 py-3 rounded-pill shadow-lg"
                                                >
                                                    <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
                                                    Submit Message
                                                </button>
                                            </div>
                                        </div>
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
