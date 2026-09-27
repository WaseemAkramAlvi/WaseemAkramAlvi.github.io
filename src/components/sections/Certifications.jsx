import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faAward, faCheckCircle, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { portfolioData } from '../../data/portfolioData';
import { usePortfolioData } from '../../context/PortfolioDataContext';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';
import ibmLogo from '/assets/ibm.svg';

const Certifications = () => {
    let portfolio = portfolioData;
    try {
        const context = usePortfolioData();
        if (context?.data) portfolio = context.data;
    } catch (e) {}
    const certifications = portfolio.certifications || [];
    const certDetails = portfolio.certDetails || {};

    const [selectedBrand, setSelectedBrand] = useState(null);

    const closeModal = () => setSelectedBrand(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') closeModal();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const activeBrandData = selectedBrand ? certDetails[selectedBrand] : null;

    return (
        <section id="certifications" className="py-5 certifications-section">
            <div className="container">
                <SectionHeader
                    title="Certifications & Credentials"
                    subtitle="Industry recognized certifications spanning AI, Cloud, Front-End, and Networking"
                />

                {/* Grid of Certification Badges */}
                <div className="row g-4 justify-content-center mb-4">
                    {certifications.map((cert) => (
                        <div key={cert.name} className="col-lg-4 col-md-6">
                            <GlassCard 
                                className="h-100 p-4 rounded-4 cert-card text-center d-flex flex-column justify-content-between"
                                onClick={() => setSelectedBrand(cert.name)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div>
                                    <div className="cert-brand-icon mx-auto mb-3">
                                        {cert.name === 'IBM' ? (
                                            <img src={ibmLogo} alt="IBM" style={{ height: '36px', width: 'auto' }} />
                                        ) : (
                                            <FontAwesomeIcon icon={cert.icon} size="2x" className="text-cyan" />
                                        )}
                                    </div>
                                    <h4 className="fw-bold mb-2">{cert.name}</h4>
                                    <p className="small text-muted mb-3">{cert.desc}</p>
                                </div>
                                <div>
                                    <button 
                                        className="btn btn-sm btn-outline-cyan rounded-pill px-3"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedBrand(cert.name);
                                        }}
                                    >
                                        View Credentials
                                    </button>
                                </div>
                            </GlassCard>
                        </div>
                    ))}
                </div>
            </div>

            {/* Certifications Modal */}
            {selectedBrand && activeBrandData && (
                <div 
                    className="cert-modal show" 
                    onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
                >
                    <div className="modal-content-wrapper">
                        <div className="lightning-card p-4 p-md-5">
                            <button className="cert-modal-close" onClick={closeModal} aria-label="Close modal">
                                <FontAwesomeIcon icon={faTimes} />
                            </button>

                            <div className="text-center mb-4">
                                <div className="cert-badge-large mb-3 mx-auto">
                                    {selectedBrand === 'IBM' ? (
                                        <img src={ibmLogo} alt="IBM" style={{ width: 100 }} />
                                    ) : (
                                        <FontAwesomeIcon icon={faAward} size="3x" className="text-cyan" />
                                    )}
                                </div>
                                <h3 className="fw-bold mb-1">{activeBrandData.title}</h3>
                                <p className="text-muted small">
                                    {activeBrandData.certs.length} verified certification records
                                </p>
                            </div>

                            <hr className="border-secondary-subtle mb-4" />

                            <div className="cert-list">
                                {activeBrandData.certs.map((c, idx) => (
                                    <div key={idx} className="cert-item p-3 rounded-3 mb-3 d-flex align-items-center gap-3">
                                        <div className="cert-badge text-cyan flex-shrink-0">
                                            <FontAwesomeIcon icon={faCheckCircle} size="lg" />
                                        </div>
                                        <div className="cert-text text-start flex-grow-1">
                                            <h6 className="fw-bold mb-1 text-light-emphasis">{c.title}</h6>
                                            <div className="small text-muted">
                                                <strong>Issuer:</strong> {c.institute} • <strong>Date:</strong> {c.date}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="text-center mt-4">
                                <button className="btn btn-outline-secondary btn-sm rounded-pill px-4" onClick={closeModal}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Certifications;