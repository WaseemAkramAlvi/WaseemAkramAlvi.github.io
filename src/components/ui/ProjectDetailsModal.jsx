import React from 'react';
import './ProjectDetailsModal.css';

const techIcons = {
  HTML: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  CSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  JS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  PHP: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  MySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  Bootstrap: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  TensorFlow: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  Flask: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
  OpenCV: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  Figma: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  Photoshop: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg',
  Illustrator: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  WordPress: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg',
  'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  'Tensorflow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
};

const ProjectDetailsModal = ({ open, onClose, project }) => {
  if (!open || !project) return null;
  return (
    <div className="project-details-modal-overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="project-details-modal">
        <button className="project-details-close" onClick={onClose}>&times;</button>
        <div className="project-details-header">
          <span className="project-details-icon">{project.icon}</span>
          <div>
            <div className="project-details-title">{project.title}</div>
            <span className="project-details-badge">{project.badge}</span>
          </div>
        </div>
        <div className="project-details-body">
          <div className="project-details-main">
            <div className="project-details-section">
              <div className="project-details-section-title">Project Overview</div>
              <div className="project-details-overview">{project.overview}</div>
            </div>
            <div className="project-details-section">
              <div className="project-details-section-title">Technologies Used</div>
              <div className="project-details-techs">
                {project.technologies.map(tech => (
                  <span className="project-details-tech-badge" key={tech}>
                    <img src={techIcons[tech]} alt={tech} /> {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="project-details-section">
              <div className="project-details-section-title">Development Process</div>
              <div className="project-details-process">
                {project.process.map((step, idx) => (
                  <div className="project-details-process-step" key={idx}>
                    <span className="project-details-process-icon">{step.icon}</span>
                    <span>{step.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="project-details-section">
              <div className="project-details-section-title">Project Preview</div>
              <ul className="project-details-preview-list">
                {project.preview.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="project-details-actions">
              {project.demo && <a href={project.demo} className="project-details-btn" target="_blank" rel="noopener noreferrer">Live Demo</a>}
              {project.code && <a href={project.code} className="project-details-btn alt" target="_blank" rel="noopener noreferrer">View Code</a>}
              <button className="project-details-btn close" onClick={onClose}>Close</button>
            </div>
          </div>
          {project.image && (
            <div className="project-details-image">
              <img src={project.image} alt="Project Screenshot" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;
