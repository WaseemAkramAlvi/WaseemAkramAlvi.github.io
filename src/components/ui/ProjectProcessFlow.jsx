import React from 'react';
import './ProjectProcessFlow.css';

const steps = [
  { label: 'Discovery', desc: 'Problem identification', color: '#ff6600', icon: '🖐️' },
  { label: 'Scoping', desc: 'Functions and Features', color: '#ffb300', icon: '📝' },
  { label: 'Estimating', desc: 'Duration and Cost', color: '#ffd600', icon: '💰' },
  { label: 'Proposal', desc: 'Request for Proposals', color: '#009688', icon: '📄' },
  { label: 'Award', desc: 'Contract to Consultant', color: '#009688', icon: '🏆' },
  { label: 'Document', desc: 'Consultant documentation', color: '#ffb300', icon: '📑' },
  { label: 'Logistics', desc: 'Technical arrangements', color: '#ffb300', icon: '🛠️' },
  { label: 'Scheduling', desc: 'Milestones and deliverables', color: '#ffb300', icon: '🌐' },
  { label: 'Execution', desc: 'Provide solutions to problem', color: '#ff6600', icon: '🚀' },
  { label: 'Completion', desc: 'Implement solutions', color: '#ffd600', icon: '🔧' },
  { label: 'Success', desc: 'Problem eliminated', color: '#ffd600', icon: '🎯' },
];

const ProjectProcessFlow = () => (
  <div className="process-flow-container">
    <div className="process-flow-steps">
      {steps.map((step, idx) => (
        <div key={step.label} className="process-step" style={{ borderTopColor: step.color }}>
          <div className="process-step-icon" style={{ color: step.color }}>{step.icon}</div>
          <div className="process-step-label" style={{ color: step.color }}>{step.label}</div>
          <div className="process-step-desc">{step.desc}</div>
        </div>
      ))}
    </div>
  </div>
);

export default ProjectProcessFlow;
