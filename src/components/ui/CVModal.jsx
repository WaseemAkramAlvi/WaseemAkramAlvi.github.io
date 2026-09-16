import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faDownload, faPrint, faFilePdf, faGraduationCap, faBriefcase, faAtom, faCode, faAward } from '@fortawesome/free-solid-svg-icons';
import { portfolioData } from '../../data/portfolioData';

const CVModal = ({ isOpen, onClose }) => {
    const { personalInfo, education, experience, currentResearch, certifications } = portfolioData;
    const cvContentRef = useRef(null);

    if (!isOpen) return null;

    const handleDownloadPDF = () => {
        if (window.html2pdf && cvContentRef.current) {
            const opt = {
                margin: 8,
                filename: 'Waseem_Akram_Quantum_ML_CV.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, useCORS: true },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };
            window.html2pdf().set(opt).from(cvContentRef.current).save();
        } else {
            window.print();
        }
    };

    return (
        <AnimatePresence>
            <div className="cv-modal-backdrop" onClick={onClose}>
                <motion.div
                    className="cv-modal-dialog"
                    onClick={(e) => e.stopPropagation()}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Modal Top Actions */}
                    <div className="cv-modal-header d-flex align-items-center justify-content-between p-3 border-bottom border-secondary-subtle">
                        <div className="d-flex align-items-center gap-2">
                            <FontAwesomeIcon icon={faFilePdf} className="text-danger fs-5" />
                            <span className="fw-bold">Curriculum Vitae — Academic & Technical</span>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <button className="btn btn-sm btn-custom px-3" onClick={handleDownloadPDF}>
                                <FontAwesomeIcon icon={faDownload} className="me-1" /> Download PDF
                            </button>
                            <button className="btn btn-sm btn-outline-secondary px-3" onClick={() => window.print()}>
                                <FontAwesomeIcon icon={faPrint} className="me-1" /> Print
                            </button>
                            <button className="btn btn-sm btn-close-custom ms-2" onClick={onClose} aria-label="Close">
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                    </div>

                    {/* Printable CV Body */}
                    <div className="cv-modal-body p-4 p-md-5" ref={cvContentRef}>
                        {/* Header */}
                        <div className="cv-header text-center pb-4 mb-4 border-bottom">
                            <h1 className="h2 fw-bold text-uppercase mb-1 tracking-wider">{personalInfo.name}</h1>
                            <div className="text-primary fw-semibold mb-2">
                                {personalInfo.headline}
                            </div>
                            <div className="small text-muted mb-2">
                                {personalInfo.secondaryPositioning}
                            </div>
                            <div className="d-flex flex-wrap justify-content-center gap-3 small text-secondary">
                                <span><strong>Email:</strong> {personalInfo.email}</span>
                                <span><strong>Phone:</strong> {personalInfo.phone}</span>
                                <span><strong>Location:</strong> {personalInfo.location}</span>
                            </div>
                            <div className="d-flex flex-wrap justify-content-center gap-3 small text-secondary mt-1">
                                <span><strong>LinkedIn:</strong> linkedin.com/in/waseemakramalvi</span>
                                <span><strong>GitHub:</strong> github.com/WaseemAkramAlvi</span>
                            </div>
                        </div>

                        {/* Summary */}
                        <div className="cv-section mb-4">
                            <h5 className="cv-section-title">
                                PROFESSIONAL SUMMARY
                            </h5>
                            <p className="small text-secondary mb-0">
                                {personalInfo.summary}
                            </p>
                        </div>

                        {/* Current Thesis */}
                        <div className="cv-section mb-4">
                            <h5 className="cv-section-title">
                                CURRENT GRADUATE RESEARCH
                            </h5>
                            <div className="small">
                                <div className="fw-bold">{currentResearch.title}</div>
                                <div className="text-muted">{currentResearch.subtitle}</div>
                                <p className="text-secondary mt-1 mb-0">
                                    {currentResearch.description}
                                </p>
                            </div>
                        </div>

                        {/* Education */}
                        <div className="cv-section mb-4">
                            <h5 className="cv-section-title">
                                EDUCATION
                            </h5>
                            {education.map((edu, i) => (
                                <div key={i} className="mb-3 small">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="fw-bold">{edu.degree}</span>
                                        <span className="text-muted">{edu.period}</span>
                                    </div>
                                    <div className="text-primary">{edu.institution}</div>
                                    <div className="text-secondary">{edu.details}</div>
                                    {edu.cgpa && <div className="text-muted">CGPA: {edu.cgpa}</div>}
                                </div>
                            ))}
                        </div>

                        {/* Technical Skills */}
                        <div className="cv-section mb-4">
                            <h5 className="cv-section-title">
                                TECHNICAL COMPETENCIES
                            </h5>
                            <div className="small">
                                <div className="mb-1"><strong>Quantum Computing:</strong> QAOA, Variational Quantum Algorithms, Quantum Circuits, QUBO/Ising Mappings, Quantum Simulation (Qiskit).</div>
                                <div className="mb-1"><strong>Artificial Intelligence & ML:</strong> Machine Learning, Deep Learning, Neural Networks, TensorFlow, PyTorch, Scikit-learn, LangChain, Prompt Engineering.</div>
                                <div className="mb-1"><strong>Programming Languages:</strong> Python, JavaScript (ES6+), PHP, SQL, HTML5, CSS3.</div>
                                <div className="mb-1"><strong>Web & Full-Stack:</strong> React, Bootstrap, Node.js basics, RESTful APIs, Responsive UI/UX Systems.</div>
                                <div className="mb-1"><strong>Databases & Developer Tools:</strong> MySQL, Git, GitHub, VS Code, Jupyter Notebook, Linux basics.</div>
                            </div>
                        </div>

                        {/* Experience */}
                        <div className="cv-section mb-4">
                            <h5 className="cv-section-title">
                                PROFESSIONAL EXPERIENCE
                            </h5>
                            {experience.map((exp, i) => (
                                <div key={i} className="mb-3 small">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="fw-bold">{exp.role} — {exp.company}</span>
                                        <span className="text-muted">{exp.date}</span>
                                    </div>
                                    <p className="text-secondary mb-0">{exp.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Certifications */}
                        <div className="cv-section">
                            <h5 className="cv-section-title">
                                INDUSTRY CREDENTIALS & CERTIFICATIONS
                            </h5>
                            <div className="small text-secondary">
                                IBM UI/UX & Cloud Badges • Microsoft Azure Fundamentals & 365 • Meta Front-End Developer Program • Cisco Network Fundamentals & Security • Adobe Creative Cloud Specialist • Google Analytics & Cloud Foundations.
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default CVModal;
