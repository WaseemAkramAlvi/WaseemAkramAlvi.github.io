import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLock, faUnlock, faTimes, faBriefcase, faGraduationCap, faCogs, 
  faAward, faProjectDiagram, faUser, faFileCode, faPlus, faTrash, 
  faEdit, faCheck, faDownload, faCopy, faUndo, faArrowUp, faArrowDown,
  faEye, faEyeSlash, faKey, faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';
import { usePortfolioData } from '../../context/PortfolioDataContext';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const {
    data,
    isAdminOpen,
    setIsAdminOpen,
    isAuthenticated,
    login,
    logout,
    changePin,
    updateExperiences,
    updateEducation,
    updateProjects,
    updatePersonalInfo,
    updateNormalSkills,
    updateQuantumSkills,
    updateCertifications,
    resetToDefaults,
    generateExportCode
  } = usePortfolioData();

  // Navigation tab state
  const [activeTab, setActiveTab] = useState('experience');
  
  // PIN Login state
  const [pinInput, setPinInput] = useState('');
  const [showPin, setShowPin] = useState(false);
  const [loginError, setLoginError] = useState('');
  
  // Status notification state
  const [statusMessage, setStatusMessage] = useState('');

  // Experience edit/add state
  const [expEditIndex, setExpEditIndex] = useState(null);
  const [expForm, setExpForm] = useState({ role: '', company: '', location: '', date: '', desc: '' });

  // Education edit/add state
  const [eduEditIndex, setEduEditIndex] = useState(null);
  const [eduForm, setEduForm] = useState({ degree: '', institution: '', period: '', details: '', cgpa: '' });

  // Skills edit/add state
  const [skillMode, setSkillMode] = useState('normal'); // 'normal' | 'quantum'
  const [selectedSkillCat, setSelectedSkillCat] = useState('');
  const [newSkillForm, setNewSkillForm] = useState({ name: '', desc: '' });
  const [newCatName, setNewCatName] = useState('');

  // Project edit/add state
  const [projEditIndex, setProjEditIndex] = useState(null);
  const [projForm, setProjForm] = useState({
    title: '', category: 'web', description: '', technology: '', github: '', demo: '', highlights: ''
  });

  // Certifications edit/add state
  const [selectedBrand, setSelectedBrand] = useState('IBM');
  const [certForm, setCertForm] = useState({ title: '', institute: '', date: '' });

  // Profile edit state
  const [profileForm, setProfileForm] = useState(data.personalInfo);

  // Sync profile form when data changes
  React.useEffect(() => {
    setProfileForm(data.personalInfo);
  }, [data.personalInfo]);

  // Flash status message helper
  const flashStatus = (msg) => {
    setStatusMessage(msg);
    setTimeout(() => setStatusMessage(''), 3500);
  };

  if (!isAdminOpen) return null;

  // Handle PIN Login Submission
  const handlePinSubmit = (e) => {
    e.preventDefault();
    const result = login(pinInput);
    if (result.success) {
      setPinInput('');
      setLoginError('');
      flashStatus('Unlocked Admin Session Successfully');
    } else {
      setLoginError(result.error);
    }
  };

  // Close Dashboard
  const handleClose = () => {
    setIsAdminOpen(false);
    // Remove #admin from URL hash cleanly if present
    if (window.location.hash === '#admin') {
      window.history.pushState(null, '', window.location.pathname + window.location.search);
    }
  };

  // ==================== EXPERIENCE HANDLERS ====================
  const handleSaveExperience = (e) => {
    e.preventDefault();
    if (!expForm.role || !expForm.company) return;
    const list = [...(data.experience || [])];
    if (expEditIndex !== null) {
      list[expEditIndex] = expForm;
    } else {
      list.unshift(expForm);
    }
    updateExperiences(list);
    setExpEditIndex(null);
    setExpForm({ role: '', company: '', location: '', date: '', desc: '' });
    flashStatus('Experience Saved & Applied to Public Portfolio');
  };

  const handleDeleteExperience = (index) => {
    if (window.confirm('Are you sure you want to remove this experience?')) {
      const list = [...data.experience];
      list.splice(index, 1);
      updateExperiences(list);
      flashStatus('Experience Deleted');
    }
  };

  const handleMoveExperience = (index, direction) => {
    const list = [...data.experience];
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= list.length) return;
    const temp = list[index];
    list[index] = list[targetIndex];
    list[targetIndex] = temp;
    updateExperiences(list);
  };

  // ==================== EDUCATION HANDLERS ====================
  const handleSaveEducation = (e) => {
    e.preventDefault();
    if (!eduForm.degree || !eduForm.institution) return;
    const list = [...(data.education || [])];
    if (eduEditIndex !== null) {
      list[eduEditIndex] = eduForm;
    } else {
      list.push(eduForm);
    }
    updateEducation(list);
    setEduEditIndex(null);
    setEduForm({ degree: '', institution: '', period: '', details: '', cgpa: '' });
    flashStatus('Education Record Saved & Live');
  };

  const handleDeleteEducation = (index) => {
    if (window.confirm('Delete this education entry?')) {
      const list = [...data.education];
      list.splice(index, 1);
      updateEducation(list);
      flashStatus('Education Entry Removed');
    }
  };

  // ==================== SKILLS HANDLERS ====================
  const currentSkillsSource = skillMode === 'quantum' ? data.technicalSkills : data.normalTechnicalSkills;
  const currentCatKey = selectedSkillCat || Object.keys(currentSkillsSource || {})[0];

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (!newSkillForm.name || !currentCatKey) return;
    const sourceCopy = JSON.parse(JSON.stringify(currentSkillsSource));
    if (!sourceCopy[currentCatKey]) {
      sourceCopy[currentCatKey] = { title: currentCatKey, skills: [] };
    }
    sourceCopy[currentCatKey].skills.push({ name: newSkillForm.name, desc: newSkillForm.desc });
    if (skillMode === 'quantum') {
      updateQuantumSkills(sourceCopy);
    } else {
      updateNormalSkills(sourceCopy);
    }
    setNewSkillForm({ name: '', desc: '' });
    flashStatus(`Added "${newSkillForm.name}" to ${sourceCopy[currentCatKey].title}`);
  };

  const handleDeleteSkill = (catKey, skillIndex) => {
    const sourceCopy = JSON.parse(JSON.stringify(currentSkillsSource));
    sourceCopy[catKey].skills.splice(skillIndex, 1);
    if (skillMode === 'quantum') {
      updateQuantumSkills(sourceCopy);
    } else {
      updateNormalSkills(sourceCopy);
    }
    flashStatus('Skill Removed');
  };

  // ==================== PROJECT HANDLERS ====================
  const handleSaveProject = (e) => {
    e.preventDefault();
    if (!projForm.title) return;
    const list = [...(data.projects || [])];
    const techArray = typeof projForm.technology === 'string'
      ? projForm.technology.split(',').map(s => s.trim()).filter(Boolean)
      : projForm.technology;

    const highlightsArray = typeof projForm.highlights === 'string'
      ? projForm.highlights.split(',').map(s => s.trim()).filter(Boolean)
      : projForm.highlights;

    const formattedProj = {
      ...projForm,
      id: projForm.id || projForm.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      technology: techArray,
      highlights: highlightsArray
    };

    if (projEditIndex !== null) {
      list[projEditIndex] = formattedProj;
    } else {
      list.unshift(formattedProj);
    }

    updateProjects(list);
    setProjEditIndex(null);
    setProjForm({ title: '', category: 'web', description: '', technology: '', github: '', demo: '', highlights: '' });
    flashStatus('Project Saved & Live on Portfolio');
  };

  const handleDeleteProject = (index) => {
    if (window.confirm('Delete this project?')) {
      const list = [...data.projects];
      list.splice(index, 1);
      updateProjects(list);
      flashStatus('Project Deleted');
    }
  };

  // ==================== CERTIFICATION HANDLERS ====================
  const handleAddCert = (e) => {
    e.preventDefault();
    if (!certForm.title || !selectedBrand) return;
    const detailsCopy = JSON.parse(JSON.stringify(data.certDetails || {}));
    if (!detailsCopy[selectedBrand]) {
      detailsCopy[selectedBrand] = { title: `${selectedBrand} Credentials`, certs: [] };
    }
    detailsCopy[selectedBrand].certs.push(certForm);
    updateCertifications(data.certifications, detailsCopy);
    setCertForm({ title: '', institute: '', date: '' });
    flashStatus(`Added credential under ${selectedBrand}`);
  };

  const handleDeleteCert = (brand, certIdx) => {
    const detailsCopy = JSON.parse(JSON.stringify(data.certDetails || {}));
    detailsCopy[brand].certs.splice(certIdx, 1);
    updateCertifications(data.certifications, detailsCopy);
    flashStatus('Credential Removed');
  };

  // ==================== PROFILE HANDLERS ====================
  const handleSaveProfile = (e) => {
    e.preventDefault();
    updatePersonalInfo(profileForm);
    flashStatus('Personal Profile & Headlines Saved Live');
  };

  // ==================== EXPORT CODE HANDLERS ====================
  const handleDownloadCode = () => {
    const code = generateExportCode();
    const blob = new Blob([code], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfolioData.js';
    a.click();
    URL.revokeObjectURL(url);
    flashStatus('Downloaded portfolioData.js! Replace src/data/portfolioData.js to commit');
  };

  const handleCopyCode = () => {
    const code = generateExportCode();
    navigator.clipboard.writeText(code).then(() => {
      flashStatus('Export code copied to clipboard!');
    });
  };

  const handleReset = () => {
    if (window.confirm('Reset all custom additions and edits back to original defaults?')) {
      resetToDefaults();
      flashStatus('Reset to Factory Defaults');
    }
  };

  return (
    <AnimatePresence>
      <div className="admin-overlay" onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}>
        
        {/* ==================== 1. PIN LOGIN GATE ==================== */}
        {!isAuthenticated ? (
          <motion.div 
            className="admin-lock-card"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <div className="admin-lock-icon">
              <FontAwesomeIcon icon={faLock} />
            </div>
            <h3 className="fw-bold mb-2">Portfolio Admin Gate</h3>
            <p className="small text-muted mb-4">
              Enter your PIN to manage experiences, education, skills, credentials, and projects live.
            </p>

            <form onSubmit={handlePinSubmit}>
              <div className="admin-form-group text-start position-relative">
                <label className="admin-form-label">Admin Security PIN</label>
                <div className="d-flex align-items-center">
                  <input
                    type={showPin ? "text" : "password"}
                    className="admin-form-input text-center font-mono fs-5"
                    placeholder="Enter PIN"
                    value={pinInput}
                    onChange={(e) => setPinInput(e.target.value)}
                    autoFocus
                  />
                  <button
                    type="button"
                    className="btn btn-sm text-secondary position-absolute end-0 me-3"
                    style={{ zIndex: 5 }}
                    onClick={() => setShowPin(!showPin)}
                  >
                    <FontAwesomeIcon icon={showPin ? faEyeSlash : faEye} />
                  </button>
                </div>
              </div>

              {loginError && (
                <div className="alert alert-danger py-2 small mb-3">{loginError}</div>
              )}

              <div className="d-flex gap-2 justify-content-center mt-4">
                <button type="button" className="btn btn-admin-outline" onClick={handleClose}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-admin-primary px-4">
                  <FontAwesomeIcon icon={faUnlock} className="me-2" /> Unlock Dashboard
                </button>
              </div>
            </form>
          </motion.div>
        ) : (
          
          /* ==================== 2. MAIN ADMIN DASHBOARD ==================== */
          <motion.div 
            className="admin-dialog"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
          >
            {/* Header */}
            <div className="admin-header d-flex flex-wrap align-items-center justify-content-between gap-3">
              <div className="d-flex align-items-center gap-3">
                <div className="live-indicator">
                  <span className="live-dot" /> LIVE PORTFOLIO SYNC
                </div>
                <div>
                  <h4 className="fw-bold mb-0 text-white">Portfolio Content Manager</h4>
                  <span className="small text-muted">Updates display immediately on your portfolio</span>
                </div>
              </div>

              <div className="d-flex align-items-center gap-2">
                <button className="btn btn-sm btn-admin-outline" onClick={handleDownloadCode} title="Download updated portfolioData.js file">
                  <FontAwesomeIcon icon={faDownload} className="me-1 text-cyan" /> Export Code
                </button>
                <button className="btn btn-sm btn-admin-outline" onClick={logout} title="Lock Admin Session">
                  <FontAwesomeIcon icon={faLock} className="me-1" /> Logout
                </button>
                <button className="btn btn-sm btn-close-custom text-white ms-2" onClick={handleClose} aria-label="Close Admin">
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
            </div>

            {/* Notification Toast */}
            {statusMessage && (
              <div className="bg-success text-white py-1.5 px-3 text-center small font-mono">
                <FontAwesomeIcon icon={faCheck} className="me-2" /> {statusMessage}
              </div>
            )}

            {/* Nav Tabs */}
            <div className="admin-nav-tabs">
              <button 
                className={`admin-tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
                onClick={() => setActiveTab('experience')}
              >
                <FontAwesomeIcon icon={faBriefcase} /> Experience ({data.experience?.length || 0})
              </button>
              <button 
                className={`admin-tab-btn ${activeTab === 'education' ? 'active' : ''}`}
                onClick={() => setActiveTab('education')}
              >
                <FontAwesomeIcon icon={faGraduationCap} /> Education ({data.education?.length || 0})
              </button>
              <button 
                className={`admin-tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
                onClick={() => setActiveTab('skills')}
              >
                <FontAwesomeIcon icon={faCogs} /> Technical Skills
              </button>
              <button 
                className={`admin-tab-btn ${activeTab === 'certifications' ? 'active' : ''}`}
                onClick={() => setActiveTab('certifications')}
              >
                <FontAwesomeIcon icon={faAward} /> Certifications
              </button>
              <button 
                className={`admin-tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
                onClick={() => setActiveTab('projects')}
              >
                <FontAwesomeIcon icon={faProjectDiagram} /> Projects ({data.projects?.length || 0})
              </button>
              <button 
                className={`admin-tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => setActiveTab('profile')}
              >
                <FontAwesomeIcon icon={faUser} /> Profile &amp; Headlines
              </button>
              <button 
                className={`admin-tab-btn ${activeTab === 'export' ? 'active' : ''}`}
                onClick={() => setActiveTab('export')}
              >
                <FontAwesomeIcon icon={faFileCode} /> Export &amp; Git Sync
              </button>
            </div>

            {/* Admin Body Content */}
            <div className="admin-body">
              
              {/* ==================== TAB 1: EXPERIENCES ==================== */}
              {activeTab === 'experience' && (
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="fw-bold mb-0 text-white">Work &amp; Professional Experience</h5>
                    <button 
                      className="btn btn-sm btn-admin-primary"
                      onClick={() => {
                        setExpEditIndex(null);
                        setExpForm({ role: '', company: '', location: '', date: '', desc: '' });
                      }}
                    >
                      <FontAwesomeIcon icon={faPlus} className="me-1" /> Add New Experience
                    </button>
                  </div>

                  {/* Form to Add / Edit */}
                  <form onSubmit={handleSaveExperience} className="admin-item-card p-3 mb-4 border-cyan-subtle">
                    <h6 className="fw-bold text-cyan mb-3">
                      {expEditIndex !== null ? `Edit Experience (#${expEditIndex + 1})` : 'Create New Experience'}
                    </h6>
                    <div className="row g-2">
                      <div className="col-md-6 admin-form-group">
                        <label className="admin-form-label">Job Title / Role *</label>
                        <input
                          type="text"
                          required
                          className="admin-form-input"
                          placeholder="e.g. Senior Full-Stack Engineer"
                          value={expForm.role}
                          onChange={(e) => setExpForm({ ...expForm, role: e.target.value })}
                        />
                      </div>
                      <div className="col-md-6 admin-form-group">
                        <label className="admin-form-label">Company / Organization *</label>
                        <input
                          type="text"
                          required
                          className="admin-form-input"
                          placeholder="e.g. Govt. Technical Training Institute"
                          value={expForm.company}
                          onChange={(e) => setExpForm({ ...expForm, company: e.target.value })}
                        />
                      </div>
                      <div className="col-md-6 admin-form-group">
                        <label className="admin-form-label">Time Period / Dates *</label>
                        <input
                          type="text"
                          required
                          className="admin-form-input"
                          placeholder="e.g. 2021 – Present"
                          value={expForm.date}
                          onChange={(e) => setExpForm({ ...expForm, date: e.target.value })}
                        />
                      </div>
                      <div className="col-md-6 admin-form-group">
                        <label className="admin-form-label">Location</label>
                        <input
                          type="text"
                          className="admin-form-input"
                          placeholder="e.g. Rahim Yar Khan, Pakistan"
                          value={expForm.location}
                          onChange={(e) => setExpForm({ ...expForm, location: e.target.value })}
                        />
                      </div>
                      <div className="col-12 admin-form-group">
                        <label className="admin-form-label">Description &amp; Key Deliverables *</label>
                        <textarea
                          required
                          rows="3"
                          className="admin-form-textarea"
                          placeholder="Describe key responsibilities, technologies used, and outcomes..."
                          value={expForm.desc}
                          onChange={(e) => setExpForm({ ...expForm, desc: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-end gap-2 mt-2">
                      {expEditIndex !== null && (
                        <button 
                          type="button" 
                          className="btn btn-admin-outline" 
                          onClick={() => {
                            setExpEditIndex(null);
                            setExpForm({ role: '', company: '', location: '', date: '', desc: '' });
                          }}
                        >
                          Cancel
                        </button>
                      )}
                      <button type="submit" className="btn btn-admin-primary">
                        <FontAwesomeIcon icon={faCheck} className="me-1" />
                        {expEditIndex !== null ? 'Save Changes' : 'Add Experience'}
                      </button>
                    </div>
                  </form>

                  {/* List of existing experiences */}
                  <div className="experiences-list">
                    {data.experience?.map((exp, idx) => (
                      <div key={idx} className="admin-item-card d-flex flex-column flex-md-row justify-content-between align-items-start gap-3">
                        <div className="flex-grow-1">
                          <div className="d-flex align-items-center gap-2">
                            <span className="badge bg-secondary-subtle text-cyan font-mono small">#{idx + 1}</span>
                            <h6 className="fw-bold mb-0 text-white">{exp.role}</h6>
                            <span className="text-muted">at</span>
                            <span className="text-primary fw-semibold">{exp.company}</span>
                          </div>
                          <div className="small text-muted mt-1 mb-2">
                            <span>📅 {exp.date}</span> • <span>📍 {exp.location || 'N/A'}</span>
                          </div>
                          <p className="small text-secondary-emphasis mb-0">{exp.desc}</p>
                        </div>
                        <div className="d-flex align-items-center gap-1 flex-shrink-0">
                          <button 
                            className="btn btn-sm btn-admin-outline" 
                            disabled={idx === 0} 
                            onClick={() => handleMoveExperience(idx, -1)}
                            title="Move Up"
                          >
                            <FontAwesomeIcon icon={faArrowUp} />
                          </button>
                          <button 
                            className="btn btn-sm btn-admin-outline" 
                            disabled={idx === (data.experience.length - 1)} 
                            onClick={() => handleMoveExperience(idx, 1)}
                            title="Move Down"
                          >
                            <FontAwesomeIcon icon={faArrowDown} />
                          </button>
                          <button 
                            className="btn btn-sm btn-admin-outline text-cyan" 
                            onClick={() => {
                              setExpEditIndex(idx);
                              setExpForm(exp);
                            }}
                            title="Edit"
                          >
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                          <button 
                            className="btn btn-sm btn-admin-danger" 
                            onClick={() => handleDeleteExperience(idx)}
                            title="Delete"
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ==================== TAB 2: EDUCATION ==================== */}
              {activeTab === 'education' && (
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="fw-bold mb-0 text-white">Academic Qualifications &amp; Education</h5>
                    <button 
                      className="btn btn-sm btn-admin-primary"
                      onClick={() => {
                        setEduEditIndex(null);
                        setEduForm({ degree: '', institution: '', period: '', details: '', cgpa: '' });
                      }}
                    >
                      <FontAwesomeIcon icon={faPlus} className="me-1" /> Add Qualification
                    </button>
                  </div>

                  {/* Form to Add / Edit */}
                  <form onSubmit={handleSaveEducation} className="admin-item-card p-3 mb-4 border-cyan-subtle">
                    <h6 className="fw-bold text-cyan mb-3">
                      {eduEditIndex !== null ? `Edit Degree (#${eduEditIndex + 1})` : 'Add New Academic Degree'}
                    </h6>
                    <div className="row g-2">
                      <div className="col-md-6 admin-form-group">
                        <label className="admin-form-label">Degree / Certificate Name *</label>
                        <input
                          type="text"
                          required
                          className="admin-form-input"
                          placeholder="e.g. BS Software Engineering"
                          value={eduForm.degree}
                          onChange={(e) => setEduForm({ ...eduForm, degree: e.target.value })}
                        />
                      </div>
                      <div className="col-md-6 admin-form-group">
                        <label className="admin-form-label">Institution / University *</label>
                        <input
                          type="text"
                          required
                          className="admin-form-input"
                          placeholder="e.g. Virtual University of Pakistan"
                          value={eduForm.institution}
                          onChange={(e) => setEduForm({ ...eduForm, institution: e.target.value })}
                        />
                      </div>
                      <div className="col-md-6 admin-form-group">
                        <label className="admin-form-label">Years / Period *</label>
                        <input
                          type="text"
                          required
                          className="admin-form-input"
                          placeholder="e.g. 2017 – 2021"
                          value={eduForm.period}
                          onChange={(e) => setEduForm({ ...eduForm, period: e.target.value })}
                        />
                      </div>
                      <div className="col-md-6 admin-form-group">
                        <label className="admin-form-label">CGPA / Grade (Optional)</label>
                        <input
                          type="text"
                          className="admin-form-input"
                          placeholder="e.g. 3.4 / 4.0"
                          value={eduForm.cgpa}
                          onChange={(e) => setEduForm({ ...eduForm, cgpa: e.target.value })}
                        />
                      </div>
                      <div className="col-12 admin-form-group">
                        <label className="admin-form-label">Focus &amp; Details</label>
                        <textarea
                          rows="2"
                          className="admin-form-textarea"
                          placeholder="Key coursework, specialization, research thesis..."
                          value={eduForm.details}
                          onChange={(e) => setEduForm({ ...eduForm, details: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-end gap-2 mt-2">
                      {eduEditIndex !== null && (
                        <button 
                          type="button" 
                          className="btn btn-admin-outline" 
                          onClick={() => {
                            setEduEditIndex(null);
                            setEduForm({ degree: '', institution: '', period: '', details: '', cgpa: '' });
                          }}
                        >
                          Cancel
                        </button>
                      )}
                      <button type="submit" className="btn btn-admin-primary">
                        <FontAwesomeIcon icon={faCheck} className="me-1" />
                        {eduEditIndex !== null ? 'Save Qualification' : 'Add Qualification'}
                      </button>
                    </div>
                  </form>

                  {/* List of existing degrees */}
                  <div className="education-list">
                    {data.education?.map((edu, idx) => (
                      <div key={idx} className="admin-item-card d-flex flex-column flex-md-row justify-content-between align-items-start gap-3">
                        <div className="flex-grow-1">
                          <div className="d-flex align-items-center gap-2">
                            <span className="badge bg-secondary-subtle text-cyan font-mono small">#{idx + 1}</span>
                            <h6 className="fw-bold mb-0 text-white">{edu.degree}</h6>
                            <span className="text-primary fw-semibold">{edu.institution}</span>
                          </div>
                          <div className="small text-muted mt-1 mb-2">
                            <span>📅 {edu.period}</span> {edu.cgpa && <span>• CGPA: {edu.cgpa}</span>}
                          </div>
                          <p className="small text-secondary-emphasis mb-0">{edu.details}</p>
                        </div>
                        <div className="d-flex align-items-center gap-1 flex-shrink-0">
                          <button 
                            className="btn btn-sm btn-admin-outline text-cyan" 
                            onClick={() => {
                              setEduEditIndex(idx);
                              setEduForm(edu);
                            }}
                            title="Edit"
                          >
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                          <button 
                            className="btn btn-sm btn-admin-danger" 
                            onClick={() => handleDeleteEducation(idx)}
                            title="Delete"
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ==================== TAB 3: SKILLS ==================== */}
              {activeTab === 'skills' && (
                <div>
                  <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
                    <div>
                      <h5 className="fw-bold mb-0 text-white">Technical Competencies Matrix</h5>
                      <span className="small text-muted">Manage competencies across Normal Developer and Quantum views</span>
                    </div>

                    {/* Mode Toggle */}
                    <div className="btn-group">
                      <button 
                        className={`btn btn-sm ${skillMode === 'normal' ? 'btn-primary' : 'btn-outline-secondary'}`}
                        onClick={() => { setSkillMode('normal'); setSelectedSkillCat(''); }}
                      >
                        Normal Portfolio Skills
                      </button>
                      <button 
                        className={`btn btn-sm ${skillMode === 'quantum' ? 'btn-info text-dark' : 'btn-outline-secondary'}`}
                        onClick={() => { setSkillMode('quantum'); setSelectedSkillCat(''); }}
                      >
                        Quantum Research Skills
                      </button>
                    </div>
                  </div>

                  {/* Categories Selector */}
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {Object.keys(currentSkillsSource || {}).map((catKey) => {
                      const cat = currentSkillsSource[catKey];
                      const isSelected = catKey === currentCatKey;
                      return (
                        <button
                          key={catKey}
                          onClick={() => setSelectedSkillCat(catKey)}
                          className={`btn btn-sm rounded-pill px-3 ${isSelected ? 'btn-admin-primary' : 'btn-admin-outline'}`}
                        >
                          {cat.title || catKey} ({cat.skills?.length || 0})
                        </button>
                      );
                    })}
                  </div>

                  {/* Add skill to active category */}
                  <form onSubmit={handleAddSkill} className="admin-item-card p-3 mb-4 border-cyan-subtle">
                    <h6 className="fw-bold text-cyan mb-2">
                      Add New Skill to &quot;{currentSkillsSource[currentCatKey]?.title || currentCatKey}&quot;
                    </h6>
                    <div className="row g-2">
                      <div className="col-md-5 admin-form-group">
                        <label className="admin-form-label">Skill Name *</label>
                        <input
                          type="text"
                          required
                          className="admin-form-input"
                          placeholder="e.g. Next.js, Docker, QAOA"
                          value={newSkillForm.name}
                          onChange={(e) => setNewSkillForm({ ...newSkillForm, name: e.target.value })}
                        />
                      </div>
                      <div className="col-md-7 admin-form-group">
                        <label className="admin-form-label">Proficiency &amp; Context *</label>
                        <input
                          type="text"
                          required
                          className="admin-form-input"
                          placeholder="Brief description of application and practical depth..."
                          value={newSkillForm.desc}
                          onChange={(e) => setNewSkillForm({ ...newSkillForm, desc: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="text-end mt-1">
                      <button type="submit" className="btn btn-admin-primary btn-sm">
                        <FontAwesomeIcon icon={faPlus} className="me-1" /> Add Skill
                      </button>
                    </div>
                  </form>

                  {/* Skills Grid for Selected Category */}
                  <div className="row g-2">
                    {currentSkillsSource[currentCatKey]?.skills?.map((skill, idx) => (
                      <div key={idx} className="col-md-6">
                        <div className="admin-item-card p-3 h-100 d-flex justify-content-between align-items-center">
                          <div>
                            <strong className="text-white d-block">{skill.name}</strong>
                            <span className="small text-secondary-emphasis">{skill.desc}</span>
                          </div>
                          <button
                            className="btn btn-sm btn-admin-danger ms-2"
                            onClick={() => handleDeleteSkill(currentCatKey, idx)}
                            title="Delete Skill"
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ==================== TAB 4: CERTIFICATIONS ==================== */}
              {activeTab === 'certifications' && (
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <h5 className="fw-bold mb-0 text-white">Certifications &amp; Credentials</h5>
                      <span className="small text-muted">Manage industry credentials by provider badge</span>
                    </div>
                  </div>

                  {/* Provider Pills */}
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {Object.keys(data.certDetails || {}).map((brand) => (
                      <button
                        key={brand}
                        onClick={() => setSelectedBrand(brand)}
                        className={`btn btn-sm rounded-pill px-3 ${selectedBrand === brand ? 'btn-admin-primary' : 'btn-admin-outline'}`}
                      >
                        {brand} ({data.certDetails[brand]?.certs?.length || 0})
                      </button>
                    ))}
                  </div>

                  {/* Add Credential Form */}
                  <form onSubmit={handleAddCert} className="admin-item-card p-3 mb-4 border-cyan-subtle">
                    <h6 className="fw-bold text-cyan mb-2">
                      Add New Credential under {selectedBrand}
                    </h6>
                    <div className="row g-2">
                      <div className="col-md-5 admin-form-group">
                        <label className="admin-form-label">Certificate Title *</label>
                        <input
                          type="text"
                          required
                          className="admin-form-input"
                          placeholder="e.g. AWS Solutions Architect"
                          value={certForm.title}
                          onChange={(e) => setCertForm({ ...certForm, title: e.target.value })}
                        />
                      </div>
                      <div className="col-md-4 admin-form-group">
                        <label className="admin-form-label">Issuing Body *</label>
                        <input
                          type="text"
                          required
                          className="admin-form-input"
                          placeholder="e.g. Amazon Web Services"
                          value={certForm.institute}
                          onChange={(e) => setCertForm({ ...certForm, institute: e.target.value })}
                        />
                      </div>
                      <div className="col-md-3 admin-form-group">
                        <label className="admin-form-label">Issue Date *</label>
                        <input
                          type="text"
                          required
                          className="admin-form-input"
                          placeholder="e.g. Nov 2024"
                          value={certForm.date}
                          onChange={(e) => setCertForm({ ...certForm, date: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="text-end mt-1">
                      <button type="submit" className="btn btn-admin-primary btn-sm">
                        <FontAwesomeIcon icon={faPlus} className="me-1" /> Add Credential
                      </button>
                    </div>
                  </form>

                  {/* List Credentials for Selected Brand */}
                  <div className="row g-2">
                    {data.certDetails[selectedBrand]?.certs?.map((c, idx) => (
                      <div key={idx} className="col-md-6">
                        <div className="admin-item-card p-3 d-flex justify-content-between align-items-center">
                          <div>
                            <strong className="text-white d-block">{c.title}</strong>
                            <div className="small text-muted">
                              <span>🏛️ {c.institute}</span> • <span>📅 {c.date}</span>
                            </div>
                          </div>
                          <button
                            className="btn btn-sm btn-admin-danger"
                            onClick={() => handleDeleteCert(selectedBrand, idx)}
                            title="Delete"
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ==================== TAB 5: PROJECTS ==================== */}
              {activeTab === 'projects' && (
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="fw-bold mb-0 text-white">Project Showcase</h5>
                    <button 
                      className="btn btn-sm btn-admin-primary"
                      onClick={() => {
                        setProjEditIndex(null);
                        setProjForm({ title: '', category: 'web', description: '', technology: '', github: '', demo: '', highlights: '' });
                      }}
                    >
                      <FontAwesomeIcon icon={faPlus} className="me-1" /> Add New Project
                    </button>
                  </div>

                  {/* Project Form */}
                  <form onSubmit={handleSaveProject} className="admin-item-card p-3 mb-4 border-cyan-subtle">
                    <h6 className="fw-bold text-cyan mb-2">
                      {projEditIndex !== null ? `Edit Project (#${projEditIndex + 1})` : 'Add New Portfolio Project'}
                    </h6>
                    <div className="row g-2">
                      <div className="col-md-6 admin-form-group">
                        <label className="admin-form-label">Project Title *</label>
                        <input
                          type="text"
                          required
                          className="admin-form-input"
                          placeholder="e.g. Modern E-Commerce Platform"
                          value={projForm.title}
                          onChange={(e) => setProjForm({ ...projForm, title: e.target.value })}
                        />
                      </div>
                      <div className="col-md-6 admin-form-group">
                        <label className="admin-form-label">Category *</label>
                        <select
                          className="admin-form-select"
                          value={projForm.category}
                          onChange={(e) => setProjForm({ ...projForm, category: e.target.value })}
                        >
                          <option value="web">Web Engineering</option>
                          <option value="quantum">Quantum Computing</option>
                          <option value="ai">AI &amp; Machine Learning</option>
                          <option value="design">UI/UX &amp; Graphic Design</option>
                          <option value="mobile">Mobile Systems</option>
                        </select>
                      </div>
                      <div className="col-12 admin-form-group">
                        <label className="admin-form-label">Technologies (Comma separated)</label>
                        <input
                          type="text"
                          className="admin-form-input"
                          placeholder="e.g. React, Node.js, MySQL, TailwindCSS"
                          value={Array.isArray(projForm.technology) ? projForm.technology.join(', ') : projForm.technology}
                          onChange={(e) => setProjForm({ ...projForm, technology: e.target.value })}
                        />
                      </div>
                      <div className="col-md-6 admin-form-group">
                        <label className="admin-form-label">GitHub URL</label>
                        <input
                          type="text"
                          className="admin-form-input"
                          placeholder="https://github.com/..."
                          value={projForm.github || ''}
                          onChange={(e) => setProjForm({ ...projForm, github: e.target.value })}
                        />
                      </div>
                      <div className="col-md-6 admin-form-group">
                        <label className="admin-form-label">Live Demo URL</label>
                        <input
                          type="text"
                          className="admin-form-input"
                          placeholder="https://..."
                          value={projForm.demo || ''}
                          onChange={(e) => setProjForm({ ...projForm, demo: e.target.value })}
                        />
                      </div>
                      <div className="col-12 admin-form-group">
                        <label className="admin-form-label">Description *</label>
                        <textarea
                          required
                          rows="2"
                          className="admin-form-textarea"
                          placeholder="Key goals, architecture, and results achieved..."
                          value={projForm.description}
                          onChange={(e) => setProjForm({ ...projForm, description: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-end gap-2 mt-2">
                      {projEditIndex !== null && (
                        <button 
                          type="button" 
                          className="btn btn-admin-outline" 
                          onClick={() => {
                            setProjEditIndex(null);
                            setProjForm({ title: '', category: 'web', description: '', technology: '', github: '', demo: '', highlights: '' });
                          }}
                        >
                          Cancel
                        </button>
                      )}
                      <button type="submit" className="btn btn-admin-primary">
                        <FontAwesomeIcon icon={faCheck} className="me-1" />
                        {projEditIndex !== null ? 'Save Project' : 'Add Project'}
                      </button>
                    </div>
                  </form>

                  {/* Existing Projects List */}
                  <div className="projects-list">
                    {data.projects?.map((proj, idx) => (
                      <div key={idx} className="admin-item-card d-flex flex-column flex-md-row justify-content-between align-items-start gap-3">
                        <div className="flex-grow-1">
                          <div className="d-flex align-items-center gap-2">
                            <span className="badge bg-secondary-subtle text-cyan font-mono small">#{idx + 1}</span>
                            <h6 className="fw-bold mb-0 text-white">{proj.title}</h6>
                            <span className="badge bg-info-subtle text-cyan font-mono">{proj.category}</span>
                          </div>
                          <p className="small text-secondary-emphasis mt-2 mb-2">{proj.description}</p>
                          <div className="d-flex flex-wrap gap-1">
                            {proj.technology?.map((t, ti) => (
                              <span key={ti} className="badge bg-dark border border-secondary small text-muted font-mono">{t}</span>
                            ))}
                          </div>
                        </div>
                        <div className="d-flex align-items-center gap-1 flex-shrink-0">
                          <button 
                            className="btn btn-sm btn-admin-outline text-cyan" 
                            onClick={() => {
                              setProjEditIndex(idx);
                              setProjForm(proj);
                            }}
                            title="Edit"
                          >
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                          <button 
                            className="btn btn-sm btn-admin-danger" 
                            onClick={() => handleDeleteProject(idx)}
                            title="Delete"
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ==================== TAB 6: PROFILE & HEADLINES ==================== */}
              {activeTab === 'profile' && (
                <div>
                  <h5 className="fw-bold mb-3 text-white">Personal Identity &amp; Positioning</h5>
                  <form onSubmit={handleSaveProfile} className="admin-item-card p-4">
                    <div className="row g-3">
                      <div className="col-md-6 admin-form-group">
                        <label className="admin-form-label">Full Name</label>
                        <input
                          type="text"
                          className="admin-form-input"
                          value={profileForm.name || ''}
                          onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                        />
                      </div>
                      <div className="col-md-6 admin-form-group">
                        <label className="admin-form-label">Short Name / Moniker</label>
                        <input
                          type="text"
                          className="admin-form-input"
                          value={profileForm.shortName || ''}
                          onChange={(e) => setProfileForm({ ...profileForm, shortName: e.target.value })}
                        />
                      </div>
                      <div className="col-md-4 admin-form-group">
                        <label className="admin-form-label">Email</label>
                        <input
                          type="email"
                          className="admin-form-input"
                          value={profileForm.email || ''}
                          onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                        />
                      </div>
                      <div className="col-md-4 admin-form-group">
                        <label className="admin-form-label">Phone</label>
                        <input
                          type="text"
                          className="admin-form-input"
                          value={profileForm.phone || ''}
                          onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                        />
                      </div>
                      <div className="col-md-4 admin-form-group">
                        <label className="admin-form-label">Location</label>
                        <input
                          type="text"
                          className="admin-form-input"
                          value={profileForm.location || ''}
                          onChange={(e) => setProfileForm({ ...profileForm, location: e.target.value })}
                        />
                      </div>

                      <div className="col-12"><hr className="border-secondary-subtle" /></div>

                      {/* Normal View Positioning */}
                      <div className="col-12">
                        <h6 className="text-cyan fw-bold">Normal Portfolio Positioning (Default View)</h6>
                      </div>
                      <div className="col-md-6 admin-form-group">
                        <label className="admin-form-label">Normal Headline</label>
                        <input
                          type="text"
                          className="admin-form-input"
                          value={profileForm.normalHeadline || ''}
                          onChange={(e) => setProfileForm({ ...profileForm, normalHeadline: e.target.value })}
                        />
                      </div>
                      <div className="col-md-6 admin-form-group">
                        <label className="admin-form-label">Normal Subtitle</label>
                        <input
                          type="text"
                          className="admin-form-input"
                          value={profileForm.normalSubtitle || ''}
                          onChange={(e) => setProfileForm({ ...profileForm, normalSubtitle: e.target.value })}
                        />
                      </div>
                      <div className="col-12 admin-form-group">
                        <label className="admin-form-label">Normal Professional Summary</label>
                        <textarea
                          rows="3"
                          className="admin-form-textarea"
                          value={profileForm.normalSummary || ''}
                          onChange={(e) => setProfileForm({ ...profileForm, normalSummary: e.target.value })}
                        />
                      </div>

                      <div className="col-12"><hr className="border-secondary-subtle" /></div>

                      {/* Quantum View Positioning */}
                      <div className="col-12">
                        <h6 className="text-cyan fw-bold">Quantum Research Positioning (Special Mode)</h6>
                      </div>
                      <div className="col-md-6 admin-form-group">
                        <label className="admin-form-label">Quantum Headline</label>
                        <input
                          type="text"
                          className="admin-form-input"
                          value={profileForm.quantumHeadline || ''}
                          onChange={(e) => setProfileForm({ ...profileForm, quantumHeadline: e.target.value })}
                        />
                      </div>
                      <div className="col-md-6 admin-form-group">
                        <label className="admin-form-label">Quantum Subtitle</label>
                        <input
                          type="text"
                          className="admin-form-input"
                          value={profileForm.quantumSubtitle || ''}
                          onChange={(e) => setProfileForm({ ...profileForm, quantumSubtitle: e.target.value })}
                        />
                      </div>
                      <div className="col-12 admin-form-group">
                        <label className="admin-form-label">Quantum Research Summary</label>
                        <textarea
                          rows="3"
                          className="admin-form-textarea"
                          value={profileForm.quantumSummary || ''}
                          onChange={(e) => setProfileForm({ ...profileForm, quantumSummary: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="text-end mt-3">
                      <button type="submit" className="btn btn-admin-primary px-4">
                        <FontAwesomeIcon icon={faCheck} className="me-2" /> Save Profile Details
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* ==================== TAB 7: EXPORT & GIT SYNC ==================== */}
              {activeTab === 'export' && (
                <div>
                  <h5 className="fw-bold mb-2 text-white">One-Click Code Export &amp; GitHub Sync</h5>
                  <p className="small text-muted mb-4">
                    Your changes are already active live in your browser session. To publish them permanently to GitHub Pages so every public visitor sees them, click below to export or copy the updated <code>portfolioData.js</code> code.
                  </p>

                  <div className="d-flex flex-wrap gap-2 mb-4">
                    <button className="btn btn-admin-primary" onClick={handleDownloadCode}>
                      <FontAwesomeIcon icon={faDownload} className="me-2" /> Download portfolioData.js
                    </button>
                    <button className="btn btn-admin-outline" onClick={handleCopyCode}>
                      <FontAwesomeIcon icon={faCopy} className="me-2" /> Copy Code to Clipboard
                    </button>
                    <button className="btn btn-admin-danger ms-auto" onClick={handleReset}>
                      <FontAwesomeIcon icon={faUndo} className="me-2" /> Reset Factory Defaults
                    </button>
                  </div>

                  <h6 className="admin-form-label text-cyan">Code Preview (src/data/portfolioData.js)</h6>
                  <div className="admin-code-box">
                    {generateExportCode()}
                  </div>
                </div>
              )}

            </div>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default AdminDashboard;
