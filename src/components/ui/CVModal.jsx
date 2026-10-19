import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faTimes, faDownload, faPrint, faGraduationCap, faBriefcase, 
    faAtom, faCode, faAward, faLaptopCode, faPaintBrush, faChalkboardTeacher, 
    faDatabase, faExchangeAlt
} from '@fortawesome/free-solid-svg-icons';
import { portfolioData } from '../../data/portfolioData';
import { usePortfolioData } from '../../context/PortfolioDataContext';

const CVModal = ({ isOpen, onClose, viewMode = 'normal', onToggleViewMode }) => {
    let portfolio = portfolioData;
    try {
        const context = usePortfolioData();
        if (context?.data) portfolio = context.data;
    } catch (e) {}
    const { personalInfo, education, experience, currentResearch, certifications, publications } = portfolio;
    const cvContentRef = useRef(null);

    if (!isOpen) return null;

    const isQuantum = viewMode === 'quantum';

    const handleDownloadPDF = () => {
        if (window.html2pdf && cvContentRef.current) {
            const opt = {
                margin: 8,
                filename: isQuantum ? 'Waseem_Akram_Quantum_ML_CV.pdf' : 'Waseem_Akram_Alvi_FullStack_CV.pdf',
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
                    {/* Modal Top Actions Header */}
                    <div className="cv-modal-header d-flex flex-wrap align-items-center justify-content-between p-3 border-bottom border-secondary-subtle gap-2">
                        <div className="d-flex align-items-center gap-2">
                            <FontAwesomeIcon 
                                icon={isQuantum ? faAtom : faCode} 
                                className={isQuantum ? "text-cyan fs-5 quantum-spin-hover" : "text-primary fs-5"} 
                            />
                            <div>
                                <span className="fw-bold d-block">
                                    {isQuantum 
                                        ? "Curriculum Vitae — Quantum Computing & AI Research" 
                                        : "Curriculum Vitae — Full-Stack Web Developer & Designer"}
                                </span>
                                <span className="small text-muted font-mono" style={{ fontSize: '0.78rem' }}>
                                    {isQuantum 
                                        ? "Academic & Research Edition • QAOA & QML Optimization Track" 
                                        : "Professional Edition • Web Engineering, UI/UX & CBT&A Instructor"}
                                </span>
                            </div>
                        </div>

                        <div className="d-flex align-items-center gap-2">
                            {onToggleViewMode && (
                                <button 
                                    className={`btn btn-sm ${isQuantum ? 'btn-outline-primary' : 'btn-outline-cyan'} rounded-pill px-3 py-1 font-mono`}
                                    onClick={() => onToggleViewMode(isQuantum ? 'normal' : 'quantum')}
                                    title={`Switch to ${isQuantum ? 'Normal' : 'Quantum'} CV`}
                                >
                                    <FontAwesomeIcon icon={faExchangeAlt} className="me-1" />
                                    <span>{isQuantum ? "View Normal CV" : "View Quantum CV"}</span>
                                </button>
                            )}
                            <button className="btn btn-sm btn-custom px-3" onClick={handleDownloadPDF} title="Download printable PDF">
                                <FontAwesomeIcon icon={faDownload} className="me-1" /> PDF
                            </button>
                            <button className="btn btn-sm btn-outline-secondary px-3" onClick={() => window.print()} title="Print document">
                                <FontAwesomeIcon icon={faPrint} className="me-1" /> Print
                            </button>
                            <button className="btn btn-sm btn-close-custom ms-1" onClick={onClose} aria-label="Close CV">
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                    </div>

                    {/* Printable CV Body */}
                    <div className="cv-modal-body p-4 p-md-5" ref={cvContentRef}>
                        {/* CV Header */}
                        <div className="cv-header text-center pb-4 mb-4 border-bottom">
                            <h1 className="h2 fw-bold text-uppercase mb-1 tracking-wider cv-name" style={{ color: '#090d16' }}>
                                {isQuantum ? personalInfo.shortName : personalInfo.name}
                            </h1>
                            <div className="text-primary fw-semibold mb-1" style={{ fontSize: '1.05rem' }}>
                                {isQuantum ? personalInfo.quantumHeadline : personalInfo.normalHeadline}
                            </div>
                            <div className="small text-muted mb-3">
                                {isQuantum ? personalInfo.quantumSubtitle : personalInfo.normalSubtitle}
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

                        {/* Professional / Research Summary */}
                        <div className="cv-section mb-4">
                            <h5 className="cv-section-title">
                                {isQuantum ? "RESEARCH SUMMARY & POSITIONING" : "PROFESSIONAL PROFILE"}
                            </h5>
                            <p className="small text-secondary mb-0" style={{ lineHeight: '1.6' }}>
                                {isQuantum ? personalInfo.quantumSummary : personalInfo.normalSummary}
                            </p>
                        </div>

                        {/* SECTION: If Quantum -> Current Graduate Research & Thesis */}
                        {isQuantum ? (
                            <div className="cv-section mb-4">
                                <h5 className="cv-section-title">
                                    CURRENT GRADUATE RESEARCH & THESIS
                                </h5>
                                <div className="small">
                                    <div className="fw-bold text-dark">{currentResearch.title}</div>
                                    <div className="text-primary font-mono small mb-1">{currentResearch.subtitle}</div>
                                    <p className="text-secondary mb-2" style={{ lineHeight: '1.5' }}>
                                        {currentResearch.description}
                                    </p>
                                    <div className="p-2 bg-light rounded border text-muted small">
                                        <strong>Core Research Pillars:</strong> Capacitated Vehicle Routing Problem (CVRP) • Quadratic Unconstrained Binary Optimization (QUBO) • Parameterized Quantum Circuits (PQCs) • Warm-start Mixer Hamiltonians • IBM Qiskit Aer Statevector Simulation.
                                    </div>
                                </div>
                            </div>
                        ) : (
                            /* SECTION: If Normal -> Selected Engineering & Design Deliverables */
                            <div className="cv-section mb-4">
                                <h5 className="cv-section-title">
                                    KEY ENGINEERING & DESIGN DELIVERABLES
                                </h5>
                                <div className="row g-2 small">
                                    <div className="col-md-6">
                                        <div className="p-2 bg-light rounded border h-100">
                                            <div className="fw-bold text-dark">Client Web Engineering Platform</div>
                                            <div className="text-primary small font-mono mb-1">React • PHP • MySQL • REST APIs</div>
                                            <p className="text-secondary mb-0 small">Engineered modular full-stack web platforms with role-based authentication, relational schema modeling, and automated business workflows.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-2 bg-light rounded border h-100">
                                            <div className="fw-bold text-dark">College Management & Academic Portal</div>
                                            <div className="text-primary small font-mono mb-1">PHP • MySQL • Bootstrap • JavaScript</div>
                                            <p className="text-secondary mb-0 small">Enterprise institutional software managing student admissions, fee structures, academic results, and multi-tier administrative dashboards.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-2 bg-light rounded border h-100">
                                            <div className="fw-bold text-dark">Freight Fleet & Logistics Software</div>
                                            <div className="text-primary small font-mono mb-1">Web Systems • MySQL • Operational Dispatch</div>
                                            <p className="text-secondary mb-0 small">Operational dispatch and freight ledger software for fleet allocation, route coordination, and consignment tracking.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-2 bg-light rounded border h-100">
                                            <div className="fw-bold text-dark">Crop Care AI & Precision Agriculture</div>
                                            <div className="text-primary small font-mono mb-1">Python • TensorFlow • OpenCV • Flask</div>
                                            <p className="text-secondary mb-0 small">Deep learning computer vision application detecting plant leaf diseases from user-uploaded images with automated remedy suggestions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Technical Competencies */}
                        <div className="cv-section mb-4">
                            <h5 className="cv-section-title">
                                {isQuantum ? "RESEARCH & TECHNICAL COMPETENCIES" : "CORE TECHNICAL & DESIGN COMPETENCIES"}
                            </h5>
                            <div className="small">
                                {isQuantum ? (
                                    <>
                                        <div className="mb-1"><strong>Quantum Computing:</strong> QAOA, Variational Quantum Algorithms (VQE), Parameterized Quantum Circuits (PQCs), QUBO & Ising Mappings, Quantum Simulation (Qiskit Aer, Statevector).</div>
                                        <div className="mb-1"><strong>Artificial Intelligence & ML:</strong> Machine Learning, Deep Learning, Neural Networks, TensorFlow, PyTorch, Scikit-learn, LangChain, Prompt Engineering, Computer Vision.</div>
                                        <div className="mb-1"><strong>Programming Languages:</strong> Python (NumPy, SciPy, Matplotlib), JavaScript (ES6+), PHP, SQL, HTML5, CSS3.</div>
                                        <div className="mb-1"><strong>Quantum-Classical Hybrid:</strong> Co-processing Pipelines, Decomposition Heuristics, Classical Optimization Solvers (COBYLA, Nelder-Mead).</div>
                                        <div className="mb-1"><strong>Databases & Developer Tools:</strong> MySQL, Git, GitHub, VS Code, Jupyter Notebook, Linux, LaTeX.</div>
                                    </>
                                ) : (
                                    <>
                                        <div className="mb-1"><strong>Full-Stack Web Development:</strong> React, JavaScript (ES6+), PHP, HTML5, CSS3, Bootstrap, RESTful APIs, Single-Page Applications (SPAs), Responsive Layouts.</div>
                                        <div className="mb-1"><strong>Graphic Design & UI/UX:</strong> Adobe Photoshop, Adobe Illustrator, Figma, Visual Identity Systems, Wireframing, Vector Art, Brand Guidelines, Digital Media Assets.</div>
                                        <div className="mb-1"><strong>Relational Databases & Backend:</strong> MySQL, Database Schema Design, Query Optimization, CRUD Architectures, Session Authentication, Data Security.</div>
                                        <div className="mb-1"><strong>Programming & Version Control:</strong> Python, Git & GitHub, VS Code, Cross-Browser Compatibility, Performance Optimization.</div>
                                        <div className="mb-1"><strong>CBT&A Training & Mentoring:</strong> Competency-Based Training Curriculum, Practical Labs Facilitation, Freelancing Mentorship (Upwork/Fiverr), Student Assessments.</div>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Professional Experience */}
                        <div className="cv-section mb-4">
                            <h5 className="cv-section-title">
                                {isQuantum ? "RESEARCH & PROFESSIONAL EXPERIENCE" : "PROFESSIONAL EXPERIENCE"}
                            </h5>
                            {isQuantum ? (
                                <>
                                    <div className="mb-3 small">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="fw-bold">Graduate Researcher — Quantum Computing & AI</span>
                                            <span className="text-muted">2023 – Present</span>
                                        </div>
                                        <div className="text-primary">The Islamia University of Bahawalpur</div>
                                        <p className="text-secondary mb-0">Conducting MS research into decomposition-based warm-started QAOA for Capacitated Vehicle Routing Problems (CVRP). Investigating qubit-efficient circuits, constraint formulations in QUBO, and simulated benchmarking on Qiskit Aer.</p>
                                    </div>
                                    <div className="mb-3 small">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="fw-bold">Instructor (CBT&A) — Computer Science & Web Tech</span>
                                            <span className="text-muted">2021 – Present</span>
                                        </div>
                                        <div className="text-primary">Govt. Technical Training Institute (GTTI), Rahim Yar Khan</div>
                                        <p className="text-secondary mb-0">Delivering competency-based curriculum in software development, algorithms, web technologies, and database architecture. Mentoring students through practical project evaluations.</p>
                                    </div>
                                    <div className="mb-3 small">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="fw-bold">Software Developer & Web Engineer</span>
                                            <span className="text-muted">2017 – 2021</span>
                                        </div>
                                        <div className="text-primary">CZone Software House, Rahim Yar Khan</div>
                                        <p className="text-secondary mb-0">Engineered dynamic software systems, relational database models, and algorithm-driven web solutions using PHP, MySQL, and JavaScript.</p>
                                    </div>
                                    <div className="mb-2 small">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="fw-bold">Assistant Manager</span>
                                            <span className="text-muted">2015 – 2017</span>
                                        </div>
                                        <div className="text-primary">Al-Hassan Lajpal Trailer Service</div>
                                        <p className="text-secondary mb-0">Coordinated daily freight logistics, fleet management schedules, and operational reporting, building practical insight into real-world transport and routing challenges.</p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="mb-3 small">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="fw-bold">Instructor (CBT&A) — Web Development & Graphic Design</span>
                                            <span className="text-muted">2021 – Present</span>
                                        </div>
                                        <div className="text-primary">Govt. Technical Training Institute (GTTI), Rahim Yar Khan</div>
                                        <p className="text-secondary mb-0">Conduct Competency-Based Training & Assessment (CBT&A) under the National Vocational Qualifications Framework. Trained 500+ students in HTML5, CSS3, JavaScript, PHP, MySQL, Photoshop, Illustrator, and online freelancing.</p>
                                    </div>
                                    <div className="mb-3 small">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="fw-bold">Web Developer & UI Designer</span>
                                            <span className="text-muted">2017 – 2021</span>
                                        </div>
                                        <div className="text-primary">CZone Software House, Rahim Yar Khan</div>
                                        <p className="text-secondary mb-0">Architected and deployed custom dynamic web applications and database solutions using PHP, MySQL, and JavaScript. Designed responsive web UI and branding materials for commercial clients.</p>
                                    </div>
                                    <div className="mb-3 small">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="fw-bold">Freelance Web Developer & Graphic Designer</span>
                                            <span className="text-muted">2015 – Present</span>
                                        </div>
                                        <div className="text-primary">Self-Employed / Remote Freelancing</div>
                                        <p className="text-secondary mb-0">Engineered and delivered 50+ custom web applications, commercial websites, corporate identities, UI kits, and vector illustrations for domestic and international clients.</p>
                                    </div>
                                    <div className="mb-2 small">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="fw-bold">Assistant Manager</span>
                                            <span className="text-muted">2015 – 2017</span>
                                        </div>
                                        <div className="text-primary">Al-Hassan Lajpal Trailer Service</div>
                                        <p className="text-secondary mb-0">Managed daily freight scheduling, fleet operations, consignment records, and customer communications.</p>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Education */}
                        <div className="cv-section mb-4">
                            <h5 className="cv-section-title">
                                EDUCATION & ACADEMIC BACKGROUND
                            </h5>
                            {education.map((edu, i) => (
                                <div key={i} className="mb-2 small">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="fw-bold">{edu.degree}</span>
                                        <span className="text-muted">{edu.period}</span>
                                    </div>
                                    <div className="text-primary">{edu.institution}</div>
                                    <div className="text-secondary">{edu.details}</div>
                                </div>
                            ))}
                        </div>

                        {/* Active Publications (Quantum Mode Only) */}
                        {isQuantum && publications?.activeManuscripts && (
                            <div className="cv-section mb-4">
                                <h5 className="cv-section-title">
                                    ACTIVE MANUSCRIPTS & RESEARCH DISCLOSURES
                                </h5>
                                {publications.activeManuscripts.map((pub, i) => (
                                    <div key={i} className="small mb-2">
                                        <div className="fw-bold text-dark">{pub.title}</div>
                                        <div className="text-primary font-mono small">{pub.venue}</div>
                                        <p className="text-secondary mb-0 small">{pub.focus}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Certifications */}
                        <div className="cv-section">
                            <h5 className="cv-section-title">
                                INDUSTRY CREDENTIALS & CERTIFICATIONS
                            </h5>
                            <div className="small text-secondary" style={{ lineHeight: '1.6' }}>
                                {isQuantum ? (
                                    <>
                                        <strong>IBM:</strong> AI & UI/UX Credentials, Enterprise Design Thinking Practitioner, Cloud Foundations • 
                                        <strong> Microsoft:</strong> Azure Fundamentals (AZ-900), Microsoft 365 Certified • 
                                        <strong> Meta:</strong> Front-End Developer Program • 
                                        <strong> Cisco:</strong> Network Fundamentals, Security Essentials • 
                                        <strong> Google:</strong> Analytics Qualification, Data Analytics Certificate • 
                                        <strong> Adobe:</strong> Creative Cloud Specialist.
                                    </>
                                ) : (
                                    <>
                                        <strong>IBM:</strong> UI/UX Designer, Enterprise Design Thinking Practitioner, IBM Cloud Foundations • 
                                        <strong> Adobe:</strong> Photoshop Specialist, Illustrator Expert • 
                                        <strong> Meta:</strong> Front-End Developer Program, Digital & Social Media Foundations • 
                                        <strong> Microsoft:</strong> Azure Fundamentals, Microsoft 365 Certified • 
                                        <strong> Cisco:</strong> Network Fundamentals, Security Essentials • 
                                        <strong> Google:</strong> Analytics Qualification, Data Analytics Certificate.
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default CVModal;
