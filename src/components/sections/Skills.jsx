import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { portfolioData } from '../../data/portfolioData';
import SectionHeader from '../ui/SectionHeader';

/* ── Clean Light Flow Diagrams for each expertise ── */

const WebDevFlow = ({ color }) => (
    <svg className="bento-flow-svg" viewBox="0 0 420 380" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Top nodes */}
        <g className="flow-node flow-node-d1">
            <rect x="70" y="8" width="120" height="32" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <foreignObject x="78" y="12" width="20" height="20">
                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                    <FontAwesomeIcon icon={portfolioData.skillsDetail['Web Development'].items[3].icon} style={{ color: '#94a3b8', fontSize: '10px' }} />
                </div>
            </foreignObject>
            <text x="102" y="29" fill="#475569" fontSize="10" fontWeight="700" fontFamily="'Courier New', monospace" letterSpacing="1">HTML/CSS</text>
        </g>
        <g className="flow-node flow-node-d1">
            <rect x="230" y="8" width="120" height="32" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <foreignObject x="238" y="12" width="20" height="20">
                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                    <FontAwesomeIcon icon={portfolioData.skillsDetail['Web Development'].items[1].icon} style={{ color: '#94a3b8', fontSize: '10px' }} />
                </div>
            </foreignObject>
            <text x="262" y="29" fill="#475569" fontSize="10" fontWeight="700" fontFamily="'Courier New', monospace" letterSpacing="1">JAVASCRIPT</text>
        </g>

        {/* Lines to center hub */}
        <g className="flow-node flow-node-d2">
            <line x1="130" y1="40" x2="210" y2="120" stroke="#cbd5e1" strokeWidth="1" opacity="0.6" />
            <line x1="290" y1="40" x2="210" y2="120" stroke="#cbd5e1" strokeWidth="1" opacity="0.6" />
        </g>

        {/* Center hub — large circle with icon */}
        <g className="flow-node flow-node-d2">
            <circle cx="210" cy="165" r="52" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1.5" />
            <foreignObject x="185" y="140" width="50" height="50">
                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                    <FontAwesomeIcon icon={portfolioData.skillsDetail['Web Development'].items[0].icon} style={{ color: '#334155', fontSize: '28px' }} />
                </div>
            </foreignObject>
        </g>

        {/* Side labels */}
        <g className="flow-node flow-node-d3">
            <text x="295" y="145" fill="#94a3b8" fontSize="9.5" fontFamily="'Courier New', monospace" letterSpacing="0.5">REST APIs</text>
            <text x="295" y="165" fill="#94a3b8" fontSize="9.5" fontFamily="'Courier New', monospace" letterSpacing="0.5">Node.js</text>
            <text x="295" y="185" fill="#94a3b8" fontSize="9.5" fontFamily="'Courier New', monospace" letterSpacing="0.5">MySQL</text>
            <line x1="262" y1="165" x2="290" y2="155" stroke="#e2e8f0" strokeWidth="0.8" opacity="0.5" />
        </g>

        {/* Line down to mid label */}
        <g className="flow-node flow-node-d4">
            <line x1="210" y1="217" x2="210" y2="255" stroke="#cbd5e1" strokeWidth="1" opacity="0.5" />
            <circle cx="210" cy="236" r="2.5" fill={color} opacity="0.6" />
        </g>

        {/* Mid label */}
        <g className="flow-node flow-node-d4">
            <rect x="175" y="257" width="70" height="26" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <text x="210" y="275" textAnchor="middle" fill="#64748b" fontSize="10" fontWeight="600" fontFamily="'Courier New', monospace" letterSpacing="0.5">PHP</text>
        </g>

        {/* Line to bottom */}
        <g className="flow-node flow-node-d5">
            <line x1="210" y1="283" x2="210" y2="310" stroke="#cbd5e1" strokeWidth="1" opacity="0.5" />
            <circle cx="210" cy="296" r="2.5" fill={color} opacity="0.6" />
        </g>

        {/* Bottom output card */}
        <g className="flow-node flow-node-d6">
            <rect x="135" y="315" width="150" height="55" rx="12" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.2" />
            <foreignObject x="155" y="322" width="30" height="30">
                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                    <FontAwesomeIcon icon={portfolioData.skillsDetail['Web Development'].items[0].icon} style={{ color: color, fontSize: '14px' }} />
                </div>
            </foreignObject>
            <text x="210" y="360" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="700" fontFamily="'Courier New', monospace" letterSpacing="1.5">LIVE WEBSITE</text>
        </g>
    </svg>
);

const GraphicDesignFlow = ({ color }) => (
    <svg className="bento-flow-svg" viewBox="0 0 420 380" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Top: Client Brief */}
        <g className="flow-node flow-node-d1">
            <rect x="155" y="8" width="110" height="32" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <foreignObject x="163" y="12" width="20" height="20">
                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                    <FontAwesomeIcon icon={portfolioData.skillsDetail['Graphic Design'].items[3].icon} style={{ color: '#94a3b8', fontSize: '10px' }} />
                </div>
            </foreignObject>
            <text x="187" y="29" fill="#475569" fontSize="10" fontWeight="700" fontFamily="'Courier New', monospace" letterSpacing="1">CLIENT BRIEF</text>
        </g>

        {/* Line down */}
        <g className="flow-node flow-node-d2">
            <line x1="210" y1="40" x2="210" y2="100" stroke="#cbd5e1" strokeWidth="1" opacity="0.6" />
        </g>

        {/* Center hub */}
        <g className="flow-node flow-node-d2">
            <circle cx="210" cy="150" r="52" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1.5" />
            <foreignObject x="185" y="125" width="50" height="50">
                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                    <FontAwesomeIcon icon={portfolioData.skillsDetail['Graphic Design'].icon} style={{ color: '#334155', fontSize: '28px' }} />
                </div>
            </foreignObject>
        </g>

        {/* Left labels */}
        <g className="flow-node flow-node-d3">
            <text x="30" y="130" fill="#94a3b8" fontSize="9.5" fontFamily="'Courier New', monospace">Photoshop</text>
            <text x="30" y="150" fill="#94a3b8" fontSize="9.5" fontFamily="'Courier New', monospace">Illustrator</text>
            <text x="30" y="170" fill="#94a3b8" fontSize="9.5" fontFamily="'Courier New', monospace">Figma</text>
            <line x1="100" y1="140" x2="158" y2="148" stroke="#e2e8f0" strokeWidth="0.8" opacity="0.5" />
            <line x1="100" y1="150" x2="158" y2="150" stroke="#e2e8f0" strokeWidth="0.8" opacity="0.5" />
            <line x1="100" y1="168" x2="158" y2="155" stroke="#e2e8f0" strokeWidth="0.8" opacity="0.5" />
        </g>

        {/* Line down */}
        <g className="flow-node flow-node-d4">
            <line x1="210" y1="202" x2="210" y2="240" stroke="#cbd5e1" strokeWidth="1" opacity="0.5" />
            <circle cx="210" cy="221" r="2.5" fill={color} opacity="0.6" />
        </g>

        {/* Branch to outputs */}
        <g className="flow-node flow-node-d4">
            <line x1="210" y1="240" x2="135" y2="275" stroke="#cbd5e1" strokeWidth="1" opacity="0.5" />
            <line x1="210" y1="240" x2="285" y2="275" stroke="#cbd5e1" strokeWidth="1" opacity="0.5" />
            <circle cx="172" cy="258" r="2.5" fill={color} opacity="0.5" />
            <circle cx="248" cy="258" r="2.5" fill={color} opacity="0.5" />
        </g>

        {/* Output boxes */}
        <g className="flow-node flow-node-d5">
            <rect x="65" y="280" width="140" height="55" rx="12" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.2" />
            <foreignObject x="105" y="287" width="30" height="30">
                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                    <FontAwesomeIcon icon={portfolioData.skillsDetail['Graphic Design'].items[3].icon} style={{ color: color, fontSize: '14px' }} />
                </div>
            </foreignObject>
            <text x="135" y="325" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="700" fontFamily="'Courier New', monospace" letterSpacing="1">LOGO & BRAND</text>
        </g>

        <g className="flow-node flow-node-d6">
            <rect x="215" y="280" width="140" height="55" rx="12" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.2" />
            <foreignObject x="255" y="287" width="30" height="30">
                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                    <FontAwesomeIcon icon={portfolioData.skillsDetail['Graphic Design'].items[4].icon} style={{ color: color, fontSize: '14px' }} />
                </div>
            </foreignObject>
            <text x="285" y="325" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="700" fontFamily="'Courier New', monospace" letterSpacing="1">SOCIAL MEDIA</text>
        </g>
    </svg>
);

const AITechFlow = ({ color }) => (
    <svg className="bento-flow-svg" viewBox="0 0 420 380" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Top: Data input */}
        <g className="flow-node flow-node-d1">
            <rect x="85" y="8" width="110" height="32" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <foreignObject x="93" y="12" width="20" height="20">
                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                    <FontAwesomeIcon icon={portfolioData.skillsDetail['AI & Tech'].items[3].icon} style={{ color: '#94a3b8', fontSize: '10px' }} />
                </div>
            </foreignObject>
            <text x="117" y="29" fill="#475569" fontSize="10" fontWeight="700" fontFamily="'Courier New', monospace" letterSpacing="1">DATA INPUT</text>
        </g>
        <g className="flow-node flow-node-d1">
            <rect x="225" y="8" width="120" height="32" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <foreignObject x="233" y="12" width="20" height="20">
                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                    <FontAwesomeIcon icon={portfolioData.skillsDetail['AI & Tech'].items[0].icon} style={{ color: '#94a3b8', fontSize: '10px' }} />
                </div>
            </foreignObject>
            <text x="257" y="29" fill="#475569" fontSize="10" fontWeight="700" fontFamily="'Courier New', monospace" letterSpacing="1">ML MODELS</text>
        </g>

        {/* Lines to center */}
        <g className="flow-node flow-node-d2">
            <line x1="140" y1="40" x2="210" y2="110" stroke="#cbd5e1" strokeWidth="1" opacity="0.6" />
            <line x1="285" y1="40" x2="210" y2="110" stroke="#cbd5e1" strokeWidth="1" opacity="0.6" />
        </g>

        {/* Center hub */}
        <g className="flow-node flow-node-d2">
            <circle cx="210" cy="155" r="52" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1.5" />
            <foreignObject x="185" y="130" width="50" height="50">
                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                    <FontAwesomeIcon icon={portfolioData.skillsDetail['AI & Tech'].icon} style={{ color: '#334155', fontSize: '28px' }} />
                </div>
            </foreignObject>
        </g>

        {/* Side labels */}
        <g className="flow-node flow-node-d3">
            <text x="295" y="140" fill="#94a3b8" fontSize="9.5" fontFamily="'Courier New', monospace">Python</text>
            <text x="295" y="158" fill="#94a3b8" fontSize="9.5" fontFamily="'Courier New', monospace">Pandas</text>
            <text x="295" y="176" fill="#94a3b8" fontSize="9.5" fontFamily="'Courier New', monospace">Cloud</text>
            <line x1="262" y1="155" x2="290" y2="150" stroke="#e2e8f0" strokeWidth="0.8" opacity="0.5" />
        </g>

        {/* Line down */}
        <g className="flow-node flow-node-d4">
            <line x1="210" y1="207" x2="210" y2="240" stroke="#cbd5e1" strokeWidth="1" opacity="0.5" />
            <circle cx="210" cy="224" r="2.5" fill={color} opacity="0.6" />
        </g>

        {/* Mid label: Inference */}
        <g className="flow-node flow-node-d4">
            <rect x="170" y="242" width="80" height="26" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <text x="210" y="260" textAnchor="middle" fill="#64748b" fontSize="10" fontWeight="600" fontFamily="'Courier New', monospace" letterSpacing="0.5">INFERENCE</text>
        </g>

        {/* Line to bottom */}
        <g className="flow-node flow-node-d5">
            <line x1="210" y1="268" x2="210" y2="300" stroke="#cbd5e1" strokeWidth="1" opacity="0.5" />
            <circle cx="210" cy="284" r="2.5" fill={color} opacity="0.6" />
        </g>

        {/* Bottom output card */}
        <g className="flow-node flow-node-d6">
            <rect x="130" y="305" width="160" height="60" rx="12" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.2" />
            <foreignObject x="175" y="312" width="30" height="30">
                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                    <FontAwesomeIcon icon={portfolioData.skillsDetail['AI & Tech'].items[5].icon} style={{ color: color, fontSize: '16px' }} />
                </div>
            </foreignObject>
            <text x="210" y="356" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="700" fontFamily="'Courier New', monospace" letterSpacing="1.5">INSIGHTS</text>
        </g>
    </svg>
);

const MentoringFlow = ({ color }) => (
    <svg className="bento-flow-svg" viewBox="0 0 420 380" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Top: Cloud Traffic */}
        <g className="flow-node flow-node-d1">
            <rect x="150" y="8" width="120" height="32" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <foreignObject x="158" y="12" width="20" height="20">
                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                    <FontAwesomeIcon icon={portfolioData.skillsDetail['Mentoring'].items[4].icon} style={{ color: '#94a3b8', fontSize: '10px' }} />
                </div>
            </foreignObject>
            <text x="182" y="29" fill="#475569" fontSize="10" fontWeight="700" fontFamily="'Courier New', monospace" letterSpacing="1">STUDENTS</text>
        </g>

        {/* Line down */}
        <g className="flow-node flow-node-d2">
            <line x1="210" y1="40" x2="210" y2="100" stroke="#cbd5e1" strokeWidth="1" opacity="0.6" />
        </g>

        {/* Center hub */}
        <g className="flow-node flow-node-d2">
            <circle cx="210" cy="150" r="52" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1.5" />
            <foreignObject x="185" y="125" width="50" height="50">
                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                    <FontAwesomeIcon icon={portfolioData.skillsDetail['Mentoring'].icon} style={{ color: '#334155', fontSize: '28px' }} />
                </div>
            </foreignObject>
        </g>

        {/* Left labels */}
        <g className="flow-node flow-node-d3">
            <text x="30" y="130" fill="#94a3b8" fontSize="9.5" fontFamily="'Courier New', monospace">Curriculum</text>
            <text x="30" y="150" fill="#94a3b8" fontSize="9.5" fontFamily="'Courier New', monospace">Projects</text>
            <text x="30" y="170" fill="#94a3b8" fontSize="9.5" fontFamily="'Courier New', monospace">Workshops</text>
            <line x1="105" y1="140" x2="158" y2="148" stroke="#e2e8f0" strokeWidth="0.8" opacity="0.5" />
            <line x1="105" y1="150" x2="158" y2="150" stroke="#e2e8f0" strokeWidth="0.8" opacity="0.5" />
            <line x1="105" y1="168" x2="158" y2="155" stroke="#e2e8f0" strokeWidth="0.8" opacity="0.5" />
        </g>

        {/* Lines down */}
        <g className="flow-node flow-node-d4">
            <line x1="210" y1="202" x2="140" y2="250" stroke="#cbd5e1" strokeWidth="1" opacity="0.5" />
            <line x1="210" y1="202" x2="280" y2="250" stroke="#cbd5e1" strokeWidth="1" opacity="0.5" />
            <circle cx="175" cy="226" r="2.5" fill={color} opacity="0.5" />
            <circle cx="245" cy="226" r="2.5" fill={color} opacity="0.5" />
        </g>

        {/* Tag labels */}
        <g className="flow-node flow-node-d4">
            <rect x="100" y="252" width="80" height="24" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <text x="140" y="268" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="600" fontFamily="'Courier New', monospace" letterSpacing="0.5">ASSESS</text>
            <rect x="240" y="252" width="80" height="24" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <text x="280" y="268" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="600" fontFamily="'Courier New', monospace" letterSpacing="0.5">GUIDE</text>
        </g>

        {/* Lines to bottom */}
        <g className="flow-node flow-node-d5">
            <line x1="140" y1="276" x2="140" y2="300" stroke="#cbd5e1" strokeWidth="1" opacity="0.4" />
            <line x1="280" y1="276" x2="280" y2="300" stroke="#cbd5e1" strokeWidth="1" opacity="0.4" />
        </g>

        {/* Output boxes */}
        <g className="flow-node flow-node-d5">
            <rect x="70" y="305" width="140" height="55" rx="12" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.2" />
            <foreignObject x="110" y="312" width="30" height="30">
                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                    <FontAwesomeIcon icon={portfolioData.skillsDetail['Mentoring'].items[0].icon} style={{ color: color, fontSize: '14px' }} />
                </div>
            </foreignObject>
            <text x="140" y="350" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="700" fontFamily="'Courier New', monospace" letterSpacing="1">SKILLED GRADS</text>
        </g>

        <g className="flow-node flow-node-d6">
            <rect x="210" y="305" width="140" height="55" rx="12" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.2" />
            <foreignObject x="250" y="312" width="30" height="30">
                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                    <FontAwesomeIcon icon={portfolioData.skillsDetail['Mentoring'].items[5].icon} style={{ color: color, fontSize: '14px' }} />
                </div>
            </foreignObject>
            <text x="280" y="350" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="700" fontFamily="'Courier New', monospace" letterSpacing="1">CAREER READY</text>
        </g>
    </svg>
);

const flowComponents = [WebDevFlow, GraphicDesignFlow, AITechFlow, MentoringFlow];

const Skills = () => {
    const { skills, skillsDetail } = portfolioData;
    const [skillModalOpen, setSkillModalOpen] = React.useState(false);
    const [selectedSkillData, setSelectedSkillData] = React.useState(null);

    const openSkillModal = (skillTitle, skillColor) => {
        const detailData = skillsDetail[skillTitle];
        if (detailData) {
            setSelectedSkillData({ ...detailData, title: skillTitle, color: skillColor });
            setSkillModalOpen(true);
        }
    };

    const closeSkillModal = () => {
        setSkillModalOpen(false);
        setSelectedSkillData(null);
    };

    React.useEffect(() => {
        function onKey(e) { if (e.key === 'Escape') closeSkillModal(); }
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    const tagColors = ['#a855f7', '#22d3ee', '#facc15', '#34d399'];

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' }
        })
    };

    return (
        <section id="skills">
            <div className="container">
                <SectionHeader
                    title="My Expertise"
                    subtitle="Combining technical proficiency with creative design thinking."
                />

                <div className="bento-grid">
                    {skills.map((skill, index) => {
                        // Card content for each expertise
                        // You can customize the icons, tool badges, and features for each skill below
                        let cardTitle = skill.title;
                        let cardDesc = skill.desc;
                        let toolBadges = [];
                        let features = [];
                        if (skill.title === 'Graphic Design') {
                            toolBadges = [
                                { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg', label: 'Photoshop' },
                                { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg', label: 'Illustrator' },
                                { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', label: 'Figma' },
                            ];
                            features = [
                                { icon: '💎', title: 'Logo & Branding' },
                                { icon: '📱', title: 'Social Media Design' },
                                { icon: '🎨', title: 'UI/UX Design' },
                            ];
                        } else if (skill.title === 'Web Development') {
                            toolBadges = [
                                { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', label: 'React' },
                                { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', label: 'JavaScript' },
                                { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', label: 'Bootstrap' },
                            ];
                            features = [
                                { icon: '⚛️', title: 'React Apps' },
                                { icon: '🗄️', title: 'Node.js & Express' },
                                { icon: '🗃️', title: 'REST APIs' },
                            ];
                        } else if (skill.title === 'AI & Tech') {
                            toolBadges = [
                                { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', label: 'Python' },
                                { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', label: 'Pandas' },
                                { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', label: 'Cloud' },
                            ];
                            features = [
                                { icon: '🤖', title: 'ML Models' },
                                { icon: '📊', title: 'Data Analysis' },
                                { icon: '🔍', title: 'Insights' },
                            ];
                        } else if (skill.title === 'Mentoring') {
                            toolBadges = [
                                { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/education/education-original.svg', label: 'Curriculum' },
                                { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', label: 'Projects' },
                                { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg', label: 'Workshops' },
                            ];
                            features = [
                                { icon: '🎓', title: 'Skilled Grads' },
                                { icon: '🧑‍🏫', title: 'Guidance' },
                                { icon: '🚀', title: 'Career Ready' },
                            ];
                        }
                        return (
                            <motion.div
                                key={index}
                                className="bento-card glass-design-card"
                                custom={index}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <div className="design-header">
                                    <span className="bento-tag" style={{ color: '#3b82f6', fontWeight: 700, letterSpacing: 2 }}>
                                        {cardTitle.toUpperCase()}
                                    </span>
                                    <h3 className="bento-heading" style={{ fontSize: '2rem', marginBottom: 8 }}>{cardDesc}</h3>
                                    <div className="design-tools" style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
                                        {toolBadges.map((tb, i) => (
                                            <span className="tool-badge" key={i}><img src={tb.icon} alt={tb.label} style={{ width: 20, marginRight: 6 }} />{tb.label}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="design-features" style={{ display: 'flex', gap: 18, justifyContent: 'center', marginTop: 12 }}>
                                    {features.map((f, i) => (
                                        <div className="feature-card" key={i}>
                                            <div className="feature-icon" style={{ fontSize: 32, marginBottom: 8 }}>{f.icon}</div>
                                            <div className="feature-title">{f.title}</div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Detailed Skill Modal — Dark Flow Diagram Style */}
            <div className={`cert-modal ${skillModalOpen ? 'show' : ''}`} aria-hidden={!skillModalOpen} onClick={(e) => { if (e.target === e.currentTarget) closeSkillModal(); }}>
                <div className="modal-content-wrapper skill-modal-dark">
                    <div className="skill-dark-card">
                        {/* Dot grid background */}
                        <div className="skill-dot-grid" />

                        {/* Close button */}
                        <button className="skill-dark-close" onClick={closeSkillModal} aria-label="Close modal">
                            <FontAwesomeIcon icon={faTimes} />
                        </button>

                        {/* Tag */}
                        <span className="skill-dark-tag" style={{ color: selectedSkillData?.color || '#a855f7' }}>
                            {selectedSkillData?.title?.toUpperCase() || ''}
                        </span>

                        {/* Heading */}
                        <h2 className="skill-dark-heading">
                            {selectedSkillData?.desc || ''}
                        </h2>

                        {/* Flow Diagram SVG */}
                        {selectedSkillData && (
                            <div className="skill-dark-flow">
                                <svg className="skill-dark-flow-svg" viewBox="0 0 1100 720" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {(() => {
                                        const items = selectedSkillData.items || [];
                                        const color = selectedSkillData.color || '#a855f7';
                                        const half = Math.ceil(items.length / 2);
                                        const leftItems = items.slice(0, half);
                                        const rightItems = items.slice(half);
                                        const hubX = 550, hubY = 340;

                                        return (
                                            <>
                                                {/* Left side items */}
                                                {leftItems.map((item, i) => {
                                                    const y = 30 + i * 95;
                                                    const x = 30;
                                                    return (
                                                        <g key={`l-${i}`} className="flow-node" style={{ animationDelay: `${0.2 + i * 0.12}s` }}>
                                                            {/* Dashed line to hub */}
                                                            <line x1={x + 250} y1={y + 12} x2={hubX - 130} y2={hubY}
                                                                stroke={color} strokeWidth="1.5" strokeDasharray="8 5" opacity="0.35" className="flow-line" />
                                                            {/* Pulsing dot on line */}
                                                            <circle className="flow-dot" cx={(x + 250 + hubX - 130) / 2} cy={(y + 12 + hubY) / 2} r="5" fill={color} style={{ animationDelay: `${i * 0.3}s` }} />
                                                            {/* Icon circle */}
                                                            <circle cx={x + 22} cy={y + 10} r="24" fill={`${color}18`} stroke={color} strokeWidth="1.4" opacity="0.5" />
                                                            {/* FontAwesome icon */}
                                                            <foreignObject x={x + 6} y={y - 8} width="32" height="32">
                                                                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                                                                    <FontAwesomeIcon icon={item.icon} style={{ color: color, fontSize: '14px', opacity: 0.85 }} />
                                                                </div>
                                                            </foreignObject>
                                                            {/* Text */}
                                                            <text x={x + 58} y={y + 6} fill="rgba(255,255,255,0.92)" fontSize="17" fontWeight="700" fontFamily="'Segoe UI', sans-serif">
                                                                {item.title}
                                                            </text>
                                                            <text x={x + 58} y={y + 28} fill="rgba(255,255,255,0.45)" fontSize="13" fontFamily="'Segoe UI', sans-serif">
                                                                {item.desc.length > 40 ? item.desc.substring(0, 40) + '…' : item.desc}
                                                            </text>
                                                            {/* Vertical connector to next */}
                                                            {i < leftItems.length - 1 && (
                                                                <line x1={x + 22} y1={y + 36} x2={x + 22} y2={y + 73}
                                                                    stroke={color} strokeWidth="1.2" strokeDasharray="4 4" opacity="0.2" className="flow-line" />
                                                            )}
                                                        </g>
                                                    );
                                                })}

                                                {/* Center hub — large with FontAwesome icon */}
                                                <g className="flow-node" style={{ animationDelay: '0.1s' }}>
                                                    <circle className="flow-hub-glow" cx={hubX} cy={hubY} r="120" stroke={color} fill="none" />
                                                    <circle className="flow-hub-ring" cx={hubX} cy={hubY} r="95" stroke={color} strokeWidth="2.5" strokeDasharray="8 6" opacity="0.4" fill={`${color}08`} />
                                                    <circle cx={hubX} cy={hubY} r="65" fill={`${color}12`} stroke={color} strokeWidth="1.8" opacity="0.3" />
                                                    {/* FontAwesome category icon */}
                                                    <foreignObject x={hubX - 30} y={hubY - 30} width="60" height="60">
                                                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                                                            <FontAwesomeIcon icon={selectedSkillData.icon} style={{ color: color, fontSize: '34px', opacity: 0.95, filter: `drop-shadow(0 0 12px ${color})` }} />
                                                        </div>
                                                    </foreignObject>
                                                </g>

                                                {/* Right side items */}
                                                {rightItems.map((item, i) => {
                                                    const y = 30 + i * 95;
                                                    const x = 790;
                                                    return (
                                                        <g key={`r-${i}`} className="flow-node" style={{ animationDelay: `${0.4 + i * 0.12}s` }}>
                                                            {/* Dashed line from hub */}
                                                            <line x1={hubX + 130} y1={hubY} x2={x} y2={y + 12}
                                                                stroke={color} strokeWidth="1.5" strokeDasharray="8 5" opacity="0.35" className="flow-line" />
                                                            {/* Pulsing dot */}
                                                            <circle className="flow-dot" cx={(hubX + 130 + x) / 2} cy={(hubY + y + 12) / 2} r="5" fill={color} style={{ animationDelay: `${(i + half) * 0.3}s` }} />
                                                            {/* Icon circle */}
                                                            <circle cx={x + 22} cy={y + 10} r="24" fill={`${color}18`} stroke={color} strokeWidth="1.4" opacity="0.5" />
                                                            {/* FontAwesome icon */}
                                                            <foreignObject x={x + 6} y={y - 8} width="32" height="32">
                                                                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                                                                    <FontAwesomeIcon icon={item.icon} style={{ color: color, fontSize: '14px', opacity: 0.85 }} />
                                                                </div>
                                                            </foreignObject>
                                                            {/* Text */}
                                                            <text x={x + 58} y={y + 6} fill="rgba(255,255,255,0.92)" fontSize="17" fontWeight="700" fontFamily="'Segoe UI', sans-serif">
                                                                {item.title}
                                                            </text>
                                                            <text x={x + 58} y={y + 28} fill="rgba(255,255,255,0.45)" fontSize="13" fontFamily="'Segoe UI', sans-serif">
                                                                {item.desc.length > 40 ? item.desc.substring(0, 40) + '…' : item.desc}
                                                            </text>
                                                            {/* Vertical connector to next */}
                                                            {i < rightItems.length - 1 && (
                                                                <line x1={x + 22} y1={y + 36} x2={x + 22} y2={y + 73}
                                                                    stroke={color} strokeWidth="1.2" strokeDasharray="4 4" opacity="0.2" className="flow-line" />
                                                            )}
                                                        </g>
                                                    );
                                                })}

                                                {/* Bottom output node */}
                                                <g className="flow-node" style={{ animationDelay: '0.8s' }}>
                                                    <line x1={hubX} y1={hubY + 110} x2={hubX} y2={630}
                                                        stroke={color} strokeWidth="1.5" strokeDasharray="8 5" opacity="0.35" className="flow-line" />
                                                    <circle className="flow-dot" cx={hubX} cy={hubY + 140} r="5" fill={color} style={{ animationDelay: '1.5s' }} />
                                                    <rect x={hubX - 100} y={640} width={200} height={55} rx="14" fill="rgba(255,255,255,0.05)" stroke={color} strokeWidth="1.4" opacity="0.5" />
                                                    <text x={hubX} y={675} textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="16" fontWeight="700" fontFamily="'Segoe UI', sans-serif">
                                                        {selectedSkillData.title === 'Web Development' ? '🌐 Live Website' :
                                                         selectedSkillData.title === 'Graphic Design' ? '💎 Deliverables' :
                                                         selectedSkillData.title === 'AI & Tech' ? '📊 Insights' : '🎓 Skilled Graduates'}
                                                    </text>
                                                </g>
                                            </>
                                        );
                                    })()}
                                </svg>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
