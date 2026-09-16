import React, { useState, useEffect, useRef } from 'react';
import QuantumParticles from './QuantumParticles';
import QuantumAtom from './QuantumAtom';

/**
 * Enhanced Quantum Computing Intro Screen (Loader)
 * Centerpiece: Interactive 3D Quantum Atom with Electrons Orbiting Nucleus
 * Surrounding: Quantum Telemetry HUD, Dirac Bra-Ket equations, and Coherence Sequencer
 */
const Loader = ({ onEnter }) => {
    const [progress, setProgress] = useState(0);
    const [statusMessage, setStatusMessage] = useState('Initializing quantum vacuum state...');
    const [isEntered, setIsEntered] = useState(false);
    const [telemetryFidelity, setTelemetryFidelity] = useState('99.92%');
    const enteredRef = useRef(false);

    // Audio synthesizer for quantum interaction chime
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

    // Coherence loading sequencer
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setStatusMessage('Quantum Coherence 100% // Ready for Exploration');
                    setTelemetryFidelity('99.99%');
                    return 100;
                }
                const increment = Math.floor(Math.random() * 4) + 2;
                const nextVal = Math.min(prev + increment, 100);

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

                return nextVal;
            });
        }, 80);

        // Auto transition after 12 seconds so users have ample time to watch orbits
        const autoTimer = setTimeout(() => {
            triggerEnter();
        }, 12000);

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
    }, []);

    const handleEnterClick = (e) => {
        e?.stopPropagation();
        triggerEnter();
    };

    const handleAtomExcite = () => {
        playQuantumTone(880, 0.25);
    };

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
