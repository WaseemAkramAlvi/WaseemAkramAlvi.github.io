import React, { useState } from 'react';
import { motion } from 'framer-motion';
import QuantumParticles from './QuantumParticles'; // Import the background

const Loader = ({ onEnter }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleEnterClick = (e) => {
        e?.stopPropagation();
        if (isClicked) return;
        setIsClicked(true);
        onEnter();
    };

    return (
        <div className="loader-wrapper" id="loaderWrapper">
            {/* Quantum Background */}
            <QuantumParticles />

            {/* Floating Skill Elements + Loader Content (user provided) */}
            <div className="floating-elements">
                <div className="float-skill skill-1"><i className="fab fa-html5" /> HTML</div>
                <div className="float-skill skill-2"><i className="fab fa-css3-alt" /> CSS</div>
                <div className="float-skill skill-3"><i className="fab fa-js" /> JavaScript</div>
                <div className="float-skill skill-4"><i className="fab fa-react" /> React</div>
                <div className="float-skill skill-5"><i className="fab fa-python" /> Python</div>
                <div className="float-skill skill-6"><i className="fab fa-figma" /> Figma</div>
                <div className="float-skill skill-7"><i className="fas fa-brain" /> Artificial Intelligence</div>
                <div className="float-skill skill-8"><i className="fas fa-robot" /> ML Engineer</div>
                <div className="float-skill skill-9"><i className="fab fa-node-js" /> Node.js</div>
                <div className="float-skill skill-10"><i className="fab fa-git-alt" /> Git</div>
                <div className="float-skill skill-11"><i className="fab fa-bootstrap" /> Bootstrap</div>
                <div className="float-skill skill-12"><i className="fas fa-database" /> Database</div>
            </div>

            <div className="loader-content text-center">
                <div className="loader-logo" style={{ marginBottom: 20 }}>
                    <i className="fas fa-code" style={{ fontSize: '4rem', color: 'white' }} />
                </div>
                <h2 className="loader-title" style={{ color: 'white' }}>Welcome to My Portfolio</h2>
                <p className="loader-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>Crafting Digital Excellence</p>
                <div className="loader-progress">
                    <div className="loader-progress-bar" />
                </div>
                <button className="btn-enter" id="enterBtn" onClick={handleEnterClick}>{isClicked ? 'Entering...' : 'Enter'}</button>
            </div>
        </div>
    );
};

export default Loader;
