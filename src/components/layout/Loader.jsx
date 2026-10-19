import React, { useState, useEffect, useRef } from 'react';
import QuantumParticles from './QuantumParticles';
import QuantumAtom from './QuantumAtom';

/**
 * Enhanced Quantum Computing Intro Screen (Loader)
 * Centerpiece: Interactive 3D Quantum Atom with Electrons Orbiting Nucleus
 * Surrounding: Quantum Telemetry HUD, Dirac Bra-Ket equations, and Coherence Sequencer
 */
const Loader = ({ onEnter, viewMode = 'normal', onToggleViewMode }) => {
    const [progress, setProgress] = useState(0);
    const [statusMessage, setStatusMessage] = useState('Initializing quantum vacuum state...');
    const [isEntered, setIsEntered] = useState(false);
    const [telemetryFidelity, setTelemetryFidelity] = useState('99.92%');
    const enteredRef = useRef(false);

    // Audio synthesizer for interaction chime
    const playQuantumTone = (freq = 520, duration = 0.35) => {
        try {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (!AudioCtx) return;
            const ctx = new AudioCtx();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(freq * 1.5, ctx.currentTime + duration);
            
            gain.gain.setValueAtTime(0.12, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
            
            osc.connect(gain);
            gain.connect(ctx.destination);
            
            osc.start();
            osc.stop(ctx.currentTime + duration);
        } catch (e) {
            // Browser autoplay policy graceful fallback
        }
    };

    const triggerEnter = () => {
        if (enteredRef.current) return;
        enteredRef.current = true;
        setIsEntered(true);
        playQuantumTone(660, 0.4);
        onEnter();
    };

    // Loading sequencer
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setStatusMessage('System Ready // Welcome to Portfolio');
                    setTelemetryFidelity('99.99%');
                    return 100;
                }
                const increment = viewMode === 'normal' 
                    ? Math.floor(Math.random() * 8) + 6 
                    : Math.floor(Math.random() * 4) + 2;
                const nextVal = Math.min(prev + increment, 100);

                if (viewMode === 'quantum') {
                    if (nextVal < 25) {
                        setStatusMessage('Calibrating superconducting transmon qubits...');
                        setTelemetryFidelity('99.82%');
                    } else if (nextVal < 50) {
                        setStatusMessage('Constructing QAOA parameterized circuit ansatz...');
                        setTelemetryFidelity('99.91%');
                    } else if (nextVal < 75) {
                        setStatusMessage('Applying Hadamard superposition & entangling CNOT gates...');
                        setTelemetryFidelity('99.95%');
                    } else if (nextVal < 99) {
                        setStatusMessage('Optimizing hybrid Hamiltonian convergence [COBYLA]...');
                        setTelemetryFidelity('99.98%');
                    } else {
                        setStatusMessage('Quantum Coherence 100% // Ready for Exploration');
                        setTelemetryFidelity('99.99%');
                    }
                } else {
                    if (nextVal < 35) {
                        setStatusMessage('Loading developer assets & UI styles...');
                    } else if (nextVal < 70) {
                        setStatusMessage('Compiling projects & skill frameworks...');
                    } else {
                        setStatusMessage('Portfolio Loaded Successfully');
                    }
                }

                return nextVal;
            });
        }, viewMode === 'normal' ? 60 : 80);

        // Auto transition timer (quick brand flash for normal mode: 1.2s; 12s for quantum intro)
        const autoTimeoutDuration = viewMode === 'normal' ? 1200 : 12000;
        const autoTimer = setTimeout(() => {
            triggerEnter();
        }, autoTimeoutDuration);

        // Keydown listener to enter with Space or Enter key
        const handleKeyDown = (e) => {
            if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
                triggerEnter();
            }
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            clearInterval(interval);
            clearTimeout(autoTimer);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [viewMode]);

    const handleEnterClick = (e) => {
        e?.stopPropagation();
        triggerEnter();
    };

    const handleAtomExcite = () => {
        playQuantumTone(880, 0.25);
    };

    // NORMAL VIEW LOADER
    if (viewMode === 'normal') {
        return (
            <div className="loader-wrapper normal-portfolio-loader" id="loaderWrapper">
                <QuantumParticles />

                {/* Floating Developer Skill Badges */}
                <div className="floating-elements" aria-hidden="true">
                    <div className="float-skill skill-1"><i className="fab fa-html5" /> HTML5</div>
                    <div className="float-skill skill-2"><i className="fab fa-css3-alt" /> CSS3</div>
                    <div className="float-skill skill-3"><i className="fab fa-js" /> JavaScript</div>
                    <div className="float-skill skill-4"><i className="fab fa-react" /> React</div>
                    <div className="float-skill skill-5"><i className="fab fa-php" /> PHP</div>
                    <div className="float-skill skill-6"><i className="fas fa-database" /> MySQL</div>
                    <div className="float-skill skill-7"><i className="fab fa-figma" /> Figma</div>
                    <div className="float-skill skill-8"><i className="fab fa-python" /> Python</div>
                    <div className="float-skill skill-9"><i className="fab fa-bootstrap" /> Bootstrap</div>
                    <div className="float-skill skill-10"><i className="fab fa-git-alt" /> Git &amp; GitHub</div>
                    <div className="float-skill skill-11"><i className="fas fa-brain" /> AI &amp; Tech</div>
                    <div className="float-skill skill-12"><i className="fas fa-chalkboard-teacher" /> CBT&amp;A Training</div>
                </div>

                <div className="loader-content text-center">
                    <div className="loader-logo mb-3">
                        <i className="fas fa-code" style={{ fontSize: '3.5rem', color: '#06b6d4', filter: 'drop-shadow(0 0 16px rgba(6,182,212,0.6))' }} />
                    </div>
                    <h1 className="loader-title text-white fw-bold mb-1" style={{ fontSize: '2.2rem' }}>
                        Waseem Akram Alvi
                    </h1>
                    <p className="loader-subtitle text-cyan mb-3 fs-6">
                        Full-Stack Web Developer &amp; Graphic Designer | CBT&amp;A Instructor
                    </p>
                    <div className="loader-progress mb-4">
                        <div className="loader-progress-bar" style={{ width: `${progress}%` }} />
                    </div>
                    <div className="d-flex flex-column align-items-center gap-2">
                        <button className="btn-enter" id="enterBtn" onClick={handleEnterClick}>
                            {isEntered ? 'Entering Portfolio...' : 'Enter Portfolio'}
                        </button>
                        {onToggleViewMode && (
                            <button 
                                type="button" 
                                onClick={(e) => { e.stopPropagation(); onToggleViewMode('quantum'); }}
                                className="btn btn-sm text-cyan text-decoration-none mt-2 opacity-75 hover-opacity-100 font-mono"
                                style={{ background: 'none', border: 'none', fontSize: '0.82rem' }}
                                title="Switch to special quantum research mode"
                            >
                                <i className="fas fa-atom me-1" /> Looking for Special Quantum Edition? Click here
                            </button>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    // QUANTUM RESEARCH INTRO (SPECIAL MODE)
    return (
        <div className="quantum-intro-wrapper" id="loaderWrapper">
            {/* Background Entanglement Particles */}
            <QuantumParticles />

            {/* Ambient Quantum Grid Lines */}
            <div className="quantum-ambient-grid" aria-hidden="true" />

            {/* Top Telemetry HUD Bar */}
            <div className="quantum-hud-bar" aria-hidden="true">
                <div className="hud-metric">
                    <span className="hud-label">ARCHITECTURE:</span>
                    <span className="hud-value text-cyan">IBM QUANTUM AER</span>
                </div>
                <div className="hud-metric d-none d-md-flex">
                    <span className="hud-label">COHERENCE:</span>
                    <span className="hud-value text-success">{telemetryFidelity}</span>
                </div>
                <div className="hud-metric">
                    <span className="hud-label">STATE:</span>
                    <span className="hud-value text-purple">|ψ⟩ = α|0⟩ + β|1⟩</span>
                </div>
                <div className="hud-metric d-none d-lg-flex">
                    <span className="hud-label">QUBITS:</span>
                    <span className="hud-value text-warning">16 VIRTUAL REGISTER</span>
                </div>
            </div>

            {/* Floating Dirac Bra-Ket Mathematical Elements */}
            <div className="quantum-dirac-floating" aria-hidden="true">
                <div className="dirac-chip dirac-1">|ψ⟩ = α|0⟩ + β|1⟩</div>
                <div className="dirac-chip dirac-2">H = ∑ Jᵢⱼ Zᵢ Zⱼ + ∑ hᵢ Zᵢ</div>
                <div className="dirac-chip dirac-3">U(C, γ) = e⁻ⁱᵞᴴᶜ</div>
                <div className="dirac-chip dirac-4">|Φ⁺⟩ = (|00⟩+|11⟩)/√2</div>
                <div className="dirac-chip dirac-5">Δx · Δp ≥ ℏ/2</div>
                <div className="dirac-chip dirac-6">Qiskit Runtime · CVRP</div>
                <div className="dirac-chip dirac-7">⟨ψ| H |ψ⟩ → min</div>
                <div className="dirac-chip dirac-8">QAOA Layer p=4</div>
            </div>

            {/* Central Quantum Presentation Core */}
            <div className="quantum-intro-content text-center">
                {/* 3D Quantum Atom with Electrons Orbiting Around Nucleus */}
                <div className="atom-centerpiece-container mb-3">
                    <QuantumAtom onExcite={handleAtomExcite} />
                </div>

                {/* Scientist & Engineer Identity */}
                <div className="intro-badge-row mb-2">
                    <span className="quantum-intro-pill">
                        <i className="fas fa-atom text-cyan me-1" />
                        QUANTUM HYBRID COMPUTING
                    </span>
                    <span className="quantum-intro-pill d-none d-sm-inline-flex">
                        <i className="fas fa-microchip text-purple me-1" />
                        QAOA OPTIMIZATION
                    </span>
                </div>

                <h1 className="quantum-intro-name mb-1">
                    Waseem Akram
                </h1>
                
                <p className="quantum-intro-role text-cyan mb-3">
                    Quantum Software Engineer &amp; Machine Learning Specialist
                </p>

                {/* Dynamic Telemetry / Status */}
                <div className="quantum-status-box mb-3">
                    <div className="status-indicator-dot" />
                    <span className="status-code-font">{statusMessage}</span>
                </div>

                {/* Coherence Progress Bar */}
                <div className="quantum-coherence-container mb-4">
                    <div className="coherence-header d-flex justify-content-between">
                        <span className="coherence-title">STATE COHERENCE INITIALIZATION</span>
                        <span className="coherence-percent">{progress}%</span>
                    </div>
                    <div className="quantum-progress-track">
                        <div 
                            className="quantum-progress-fill" 
                            style={{ width: `${progress}%` }}
                        >
                            <div className="quantum-sparkle-head" />
                        </div>
                    </div>
                </div>

                {/* Interactive Enter Action */}
                <div className="intro-action-container">
                    <button 
                        className={`btn-quantum-enter ${isEntered ? 'active-transition' : ''} ${progress >= 100 ? 'coherence-ready' : ''}`}
                        id="enterBtn" 
                        onClick={handleEnterClick}
                        title="Click to initialize and enter portfolio"
                    >
                        <span className="corner-bracket top-left" />
                        <span className="corner-bracket top-right" />
                        <span className="corner-bracket bottom-left" />
                        <span className="corner-bracket bottom-right" />
                        <span className="btn-text-content">
                            <i className="fas fa-bolt text-cyan me-2" />
                            {isEntered ? 'ENTERING QUANTUM SPACE...' : progress >= 100 ? 'ENTER QUANTUM PORTFOLIO' : 'INITIALIZE PORTFOLIO'}
                        </span>
                    </button>
                    <p className="enter-hint mt-2 text-muted">
                        Click button or press Enter to explore portfolio
                    </p>
                </div>
            </div>

            {/* Bottom HUD Coordinates */}
            <div className="quantum-footer-telemetry" aria-hidden="true">
                <span>COORD: [30.1575° N, 71.5249° E]</span>
                <span className="d-none d-sm-inline">QUANTUM TELEMETRY ACTIVE</span>
                <span>STATE VECTOR [2ⁿ = 65,536]</span>
            </div>
        </div>
    );
};

export default Loader;
