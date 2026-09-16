import React, { useState, useEffect } from 'react';
import QuantumParticles from './QuantumParticles';

const Loader = ({ onEnter }) => {
    const [isEntered, setIsEntered] = useState(false);

    const triggerEnter = () => {
        if (isEntered) return;
        setIsEntered(true);
        onEnter();
    };

    // Auto-dismiss after 3.5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            triggerEnter();
        }, 3500);
        return () => clearTimeout(timer);
    }, []);

    const handleEnterClick = (e) => {
        e?.stopPropagation();
        triggerEnter();
    };

    return (
        <div className="loader-wrapper" id="loaderWrapper">
            {/* Quantum Background */}
            <QuantumParticles />

            {/* Floating Research & Engineering Elements */}
            <div className="floating-elements" aria-hidden="true">
                <div className="float-skill skill-1"><i className="fas fa-atom" /> Quantum Computing</div>
                <div className="float-skill skill-2"><i className="fas fa-microchip" /> QAOA</div>
                <div className="float-skill skill-3"><i className="fab fa-python" /> Qiskit &amp; Python</div>
                <div className="float-skill skill-4"><i className="fas fa-brain" /> Quantum ML</div>
                <div className="float-skill skill-5"><i className="fas fa-route" /> CVRP Optimization</div>
                <div className="float-skill skill-6"><i className="fas fa-project-diagram" /> Hybrid Systems</div>
                <div className="float-skill skill-7"><i className="fas fa-chart-line" /> Machine Learning</div>
                <div className="float-skill skill-8"><i className="fab fa-react" /> React &amp; Full Stack</div>
                <div className="float-skill skill-9"><i className="fas fa-database" /> MySQL</div>
                <div className="float-skill skill-10"><i className="fab fa-git-alt" /> Git &amp; GitHub</div>
            </div>

            <div className="loader-content text-center">
                <div className="loader-logo mb-3">
                    <i className="fas fa-atom" style={{ fontSize: '3.5rem', color: '#06b6d4', filter: 'drop-shadow(0 0 16px rgba(6,182,212,0.6))' }} />
                </div>
                <h2 className="loader-title text-white fw-bold mb-1">Waseem Akram</h2>
                <p className="loader-subtitle text-cyan mb-3">
                    Quantum Software Engineer &amp; Machine Learning Specialist
                </p>
                <div className="loader-progress mb-4">
                    <div className="loader-progress-bar" />
                </div>
                <button className="btn-enter" id="enterBtn" onClick={handleEnterClick}>
                    {isEntered ? 'Entering...' : 'Enter Portfolio'}
                </button>
            </div>
        </div>
    );
};

export default Loader;
