import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom, faCode, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { portfolioData } from '../../data/portfolioData';
import { usePortfolioData } from '../../context/PortfolioDataContext';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const Footer = ({ viewMode = 'normal', onToggleViewMode }) => {
    let portfolio = portfolioData;
    let setIsAdminOpen = null;
    try {
        const context = usePortfolioData();
        if (context?.data) portfolio = context.data;
        if (context?.setIsAdminOpen) setIsAdminOpen = context.setIsAdminOpen;
    } catch (e) {}
    const personalInfo = portfolio.personalInfo || portfolioData.personalInfo;

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer-research py-5 border-top border-secondary-subtle">
            <div className="container">
                <div className="row g-4 align-items-center justify-content-between mb-4">
                    <div className="col-md-6 text-center text-md-start">
                        <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mb-2">
                            <FontAwesomeIcon icon={viewMode === 'quantum' ? faAtom : faCode} className="text-cyan fs-5" />
                            <h5 className="fw-bold mb-0 text-light-emphasis">
                                {viewMode === 'quantum' ? personalInfo.shortName || personalInfo.name : personalInfo.name}
                            </h5>
                        </div>
                        <p className="text-secondary small mb-1">
                            {viewMode === 'quantum' ? personalInfo.quantumHeadline : personalInfo.normalHeadline}
                        </p>
                        <p className="text-muted small mb-0">
                            {viewMode === 'quantum' ? personalInfo.quantumSubtitle : personalInfo.normalSubtitle}
                        </p>
                    </div>

                    <div className="col-md-6 text-center text-md-end">
                        <div className="d-flex justify-content-center justify-content-md-end gap-3 mb-3">
                            <a 
                                href="https://www.linkedin.com/in/waseemakramalvi/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="footer-social-link"
                                title="LinkedIn"
                            >
                                <FontAwesomeIcon icon={faLinkedin} size="lg" />
                            </a>
                            <a 
                                href={`https://github.com/${personalInfo.githubUsername}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="footer-social-link"
                                title="GitHub"
                            >
                                <FontAwesomeIcon icon={faGithub} size="lg" />
                            </a>
                            <button 
                                onClick={scrollToTop} 
                                className="footer-social-link border-0"
                                title="Scroll to Top"
                            >
                                <FontAwesomeIcon icon={faArrowUp} />
                            </button>
                        </div>
                        <div className="small text-muted font-mono mb-2">
                            {viewMode === 'quantum' 
                                ? 'Quantum Computing × AI/ML × Optimization × Software Engineering'
                                : 'Full-Stack Web Dev × Graphic Design × CBT&A IT Mentoring'}
                        </div>
                        {onToggleViewMode && (
                            <div>
                                {viewMode === 'normal' ? (
                                    <button
                                        onClick={() => onToggleViewMode('quantum')}
                                        className="btn btn-sm btn-link text-cyan p-0 text-decoration-none font-mono small"
                                    >
                                        <FontAwesomeIcon icon={faAtom} className="me-1" />
                                        Special Quantum Research Edition →
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => onToggleViewMode('normal')}
                                        className="btn btn-sm btn-link text-success p-0 text-decoration-none font-mono small"
                                    >
                                        <FontAwesomeIcon icon={faCode} className="me-1" />
                                        Return to Normal Web Developer Portfolio →
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                <div className="border-top border-secondary-subtle pt-3 d-flex flex-wrap align-items-center justify-content-between gap-2 small text-muted">
                    <div>
                        &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved. Professional portfolio.
                    </div>
                    {setIsAdminOpen && (
                        <div>
                            <button 
                                onClick={() => setIsAdminOpen(true)}
                                className="btn btn-sm btn-link text-muted p-0 text-decoration-none d-inline-flex align-items-center gap-1 font-mono"
                                style={{ fontSize: '0.78rem' }}
                                title="Open Content Admin Dashboard (Ctrl+Shift+A)"
                            >
                                <FontAwesomeIcon icon={faLock} className="text-secondary" />
                                <span>Admin Portal</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
