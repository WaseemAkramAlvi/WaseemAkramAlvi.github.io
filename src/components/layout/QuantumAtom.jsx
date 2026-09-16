import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * QuantumAtom Component
 * A high-fidelity 3D-styled Quantum Atomic Model featuring:
 * - Multi-nucleon pulsating core (protons, neutrons, fusion energy)
 * - 4 distinct elliptical 3D orbital planes with probability paths
 * - Luminous electrons orbiting continuously around the nucleus with photon trails
 * - Quantum wave-packet emission ripples and probability cloud
 * - Interactive excitation state (|0⟩ -> |1⟩) on hover/click
 */
const QuantumAtom = ({ onExcite }) => {
    const [isExcited, setIsExcited] = useState(false);

    const handleInteraction = () => {
        setIsExcited(true);
        if (onExcite) onExcite();
        setTimeout(() => setIsExcited(false), 2000);
    };

    return (
        <div 
            className={`quantum-atom-system ${isExcited ? 'excited-state' : ''}`}
            onClick={handleInteraction}
            onMouseEnter={() => setIsExcited(true)}
            onMouseLeave={() => setIsExcited(false)}
            role="img"
            aria-label="Interactive Quantum Atom with Orbiting Electrons"
            title="Click or hover to excite quantum energy state"
        >
            {/* Outer Quantum Probability Field / Halo */}
            <div className="quantum-orbital-cloud" aria-hidden="true" />

            {/* Quantum Wave-Packet Emission Rings (Emanating from Nucleus) */}
            <div className="quantum-wave-ring wave-ring-1" aria-hidden="true" />
            <div className="quantum-wave-ring wave-ring-2" aria-hidden="true" />
            <div className="quantum-wave-ring wave-ring-3" aria-hidden="true" />

            {/* 3D Orbit 1: Rotated 30° on Z, 68° on X (Cyan Energy Path) */}
            <div className="atom-orbit-plane orbit-plane-1" aria-hidden="true">
                <div className="orbit-track track-cyan" />
                <div className="electron-carrier electron-carrier-1">
                    <div className="quantum-electron electron-cyan">
                        <div className="electron-core" />
                        <div className="electron-halo" />
                        <div className="electron-trail" />
                        <span className="electron-spin">e⁻</span>
                    </div>
                </div>
            </div>

            {/* 3D Orbit 2: Rotated 90° on Z, 68° on X (Violet/Purple Energy Path) */}
            <div className="atom-orbit-plane orbit-plane-2" aria-hidden="true">
                <div className="orbit-track track-violet" />
                <div className="electron-carrier electron-carrier-2">
                    <div className="quantum-electron electron-violet">
                        <div className="electron-core" />
                        <div className="electron-halo" />
                        <div className="electron-trail" />
                        <span className="electron-spin">e⁻</span>
                    </div>
                </div>
            </div>

            {/* 3D Orbit 3: Rotated 150° on Z, 68° on X (Magenta/Pink Energy Path) */}
            <div className="atom-orbit-plane orbit-plane-3" aria-hidden="true">
                <div className="orbit-track track-magenta" />
                <div className="electron-carrier electron-carrier-3">
                    <div className="quantum-electron electron-magenta">
                        <div className="electron-core" />
                        <div className="electron-halo" />
                        <div className="electron-trail" />
                        <span className="electron-spin">e⁻</span>
                    </div>
                </div>
            </div>

            {/* 3D Orbit 4: Rotated -45° on Z, 60° on X (Electric Blue Energy Path) */}
            <div className="atom-orbit-plane orbit-plane-4" aria-hidden="true">
                <div className="orbit-track track-blue" />
                <div className="electron-carrier electron-carrier-4">
                    <div className="quantum-electron electron-blue">
                        <div className="electron-core" />
                        <div className="electron-halo" />
                        <div className="electron-trail" />
                        <span className="electron-spin">e⁻</span>
                    </div>
                </div>
            </div>

            {/* Central Quantum Nucleus */}
            <div className="atom-nucleus-complex">
                {/* Nucleus Energy Corona */}
                <div className="nucleus-corona" />

                {/* Subatomic Nucleon Cluster (Protons & Neutrons) */}
                <div className="nucleons-cluster">
                    <div className="nucleon nucleon-proton proton-1" title="Proton |+⟩" />
                    <div className="nucleon nucleon-neutron neutron-1" title="Neutron |0⟩" />
                    <div className="nucleon nucleon-proton proton-2" title="Proton |+⟩" />
                    <div className="nucleon nucleon-neutron neutron-2" title="Neutron |0⟩" />
                    <div className="nucleon nucleon-proton proton-3" title="Proton |+⟩" />
                </div>

                {/* Core Fusion Energy Point */}
                <div className="nucleus-fusion-core" />

                {/* Quantum State Label */}
                <div className="quantum-state-tag">
                    {isExcited ? '|1⟩ EXCITED' : '|ψ⟩ GROUND'}
                </div>
            </div>

            {/* Subtle Quantum Orbit Coordinates Overlay (Bloch Sphere Lines) */}
            <svg className="atom-bloch-overlay" viewBox="0 0 200 200" aria-hidden="true">
                <circle cx="100" cy="100" r="95" fill="none" stroke="rgba(6,182,212,0.12)" strokeDasharray="3 4" />
                <ellipse cx="100" cy="100" rx="95" ry="32" fill="none" stroke="rgba(139,92,246,0.15)" strokeDasharray="2 4" />
                <line x1="100" y1="5" x2="100" y2="195" stroke="rgba(6,182,212,0.2)" strokeDasharray="2 3" />
                <line x1="5" y1="100" x2="195" y2="100" stroke="rgba(6,182,212,0.2)" strokeDasharray="2 3" />
                {/* Polar Coordinates */}
                <text x="104" y="16" fill="rgba(6,182,212,0.7)" fontSize="8" fontFamily="monospace">|0⟩</text>
                <text x="104" y="192" fill="rgba(139,92,246,0.7)" fontSize="8" fontFamily="monospace">|1⟩</text>
                <text x="178" y="96" fill="rgba(6,182,212,0.6)" fontSize="8" fontFamily="monospace">|+⟩</text>
                <text x="10" y="96" fill="rgba(236,72,153,0.6)" fontSize="8" fontFamily="monospace">|-⟩</text>
            </svg>
        </div>
    );
};

export default QuantumAtom;
