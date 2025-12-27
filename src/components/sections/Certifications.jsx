import React, { useEffect, useState, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { portfolioData } from '../../data/portfolioData';
import ibmLogo from '/assets/ibm.svg';

const Certifications = () => {
    const { certifications, skills } = portfolioData;

    // --- State ---
    const [isOpen, setIsOpen] = useState(false);
    const [modalType, setModalType] = useState('cert'); // Tracks 'cert' or 'skill'
    const [modalBrand, setModalBrand] = useState(null);
    const [modalItems, setModalItems] = useState([]);
    const [modalIconClass, setModalIconClass] = useState(''); // To track specific icon for skills

    // --- Data Preparation ---

    // 1. Detailed Certs Data
    const certData = {
        Microsoft: {
            icon: 'fab fa-microsoft',
            certs: [
                { title: 'Microsoft Azure Fundamentals', institute: 'Microsoft', date: 'Dec 2023' },
                { title: 'Microsoft 365 Certified', institute: 'Microsoft', date: 'Nov 2023' }
            ]
        },
        IBM: {
            icon: 'fas fa-award',
            certs: [
                { title: 'IBM Data Science Professional', institute: 'IBM', date: 'Oct 2022' },
                { title: 'IBM Cloud Foundations', institute: 'IBM', date: 'Mar 2021' }
            ]
        },
        Adobe: {
            icon: 'fab fa-adobe',
            certs: [
                { title: 'Adobe Photoshop Expert', institute: 'Adobe', date: 'Jun 2022' }
            ]
        },
        Google: {
            icon: 'fab fa-google',
            certs: [
                { title: 'Google Analytics Individual Qualification', institute: 'Google', date: 'May 2021' }
            ]
        },
        Meta: {
            icon: 'fab fa-meta',
            certs: [
                { title: 'Meta Front-End Developer', institute: 'Meta', date: 'Aug 2022' }
            ]
        },
        CISCO: {
            icon: 'fas fa-network-wired',
            certs: [
                { title: 'Cisco Network Fundamentals', institute: 'Cisco', date: 'Jan 2020' }
            ]
        }
    };

    // 2. Map Skills Data (Logic ported from your JS)
    // We use useMemo to avoid recalculating on every render
    const skillsData = useMemo(() => {
        const mappedSkills = {};
        if (skills) {
            skills.forEach(s => {
                mappedSkills[s.title] = {
                    icon: s.icon || 'fas fa-code', // Default icon if missing
                    items: [{ title: s.title, desc: s.desc }]
                };
            });
        }
        return mappedSkills;
    }, [skills]);

    // --- Handlers ---

    function openCertModal(name) {
        const data = certData[name];
        if (!data) return;

        setModalType('cert');
        setModalBrand(name);
        setModalIconClass(data.icon);
        setModalItems(data.certs);
        setIsOpen(true);
    }

    // Logic to open Skill Modal (can be triggered by passing this function to child components if needed)
    function openSkillModal(name) {
        const data = skillsData[name];
        if (!data) return;

        setModalType('skill');
        setModalBrand(name);
        setModalIconClass(data.icon); // Skills often have specific icons
        setModalItems(data.items);
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
        setModalBrand(null);
        setModalItems([]);
        setModalType('cert');
    }

    // Handle Escape Key
    useEffect(() => {
        function onKey(e) { if (e.key === 'Escape') closeModal(); }
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    return (
        <section id="certifications">
            <div className="container">
                <h2 className="section-title">Certifications</h2>
            </div>

            {/* Ticker Section */}
            <div className="cert-ticker-section">
                <div className="cert-track">
                    {[...certifications, ...certifications, ...certifications].map((cert, idx) => (
                        <div
                            key={`${cert.name}-${idx}`}
                            className="cert-ticker-item"
                            data-tooltip={cert.tooltip}
                            data-detail={cert.desc || ''}
                            onClick={() => openCertModal(cert.name)}
                        >
                            {cert.name === 'IBM' ? (
                                <img src={ibmLogo} alt="ibm logo" className="cert-icon cert-ibm" />
                            ) : cert.name === 'Adobe' ? (
                                <svg className="cert-icon cert-adobe" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624Z" />
                                </svg>
                            ) : (
                                <i className={`cert-icon ${cert.icon?.iconName ? 'fab fa-' + cert.icon.iconName : ''}`} />
                            )}
                            <span>{cert.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- MODAL --- 
               Adjusted to handle both Certs and Skills logic 
            */}
            <div id="certModal" className={`cert-modal ${isOpen ? 'show' : ''} ${modalType === 'skill' ? 'skill-mode' : ''}`} aria-hidden={!isOpen} onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}>
                <div className="modal-content-wrapper">
                    <div className="lightning-card">
                        <div className="diagonal-highlight" />
                        <button className="cert-modal-close" onClick={closeModal} aria-label="Close modal">
                            <FontAwesomeIcon icon={faTimes} />
                        </button>

                        <div className="card-content p-5 text-left">
                            {/* Modal Icon / Header Logo */}
                            <div className="cert-badge-large mb-4 mx-auto" id="certIcon">
                                {modalBrand === 'IBM' ? (
                                    <img src={ibmLogo} alt="IBM" style={{ width: 120 }} />
                                ) : modalBrand === 'Adobe' ? (
                                    <svg style={{ width: 120 }} viewBox="0 0 24 24" fill="currentColor"><path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624Z" /></svg>
                                ) : (
                                    // Uses modalIconClass which is dynamic for both Certs and Skills
                                    <i className={modalIconClass || 'fas fa-award'} style={{ fontSize: 80 }} />
                                )}
                            </div>

                            <div className="cert-details">
                                <h2 className="fw-bold mb-3" id="certBrand">
                                    {modalBrand ? (modalType === 'cert' ? `${modalBrand} Certifications` : modalBrand) : 'Details'}
                                </h2>

                                {/* Only show sub-text for Certifications */}
                                {modalType === 'cert' && (
                                    <p className="lead opacity-75">
                                        {modalBrand && certData[modalBrand]?.certs?.length
                                            ? `${certData[modalBrand].certs.length} badges and certificates`
                                            : ''}
                                    </p>
                                )}
                                <hr />

                                <div id="certListContainer" className="cert-list">
                                    {modalItems && modalItems.length > 0 ? (
                                        modalItems.map((it, i) => (
                                            <div className="cert-item" key={i}>
                                                <div className="cert-badge">
                                                    {/* If Skill, use Item icon. If Cert, use Award icon */}
                                                    <i className={modalType === 'skill' ? (it.icon || 'fas fa-check-circle') : "fas fa-award"} />
                                                </div>
                                                <div className="cert-text">
                                                    <h5>{it.title}</h5>

                                                    {/* Conditional Rendering based on Modal Type */}
                                                    {modalType === 'cert' ? (
                                                        // Render Certification Details
                                                        <>
                                                            <p><strong>Institute:</strong> {it.institute}</p>
                                                            <p className="date">Issued: {it.date}</p>
                                                        </>
                                                    ) : (
                                                        // Render Skill Details (Description)
                                                        <p>{it.desc}</p>
                                                    )}
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="small text-muted">No items to display.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;