import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { portfolioData } from '../../data/portfolioData';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';
import ProjectDetailsModal from '../ui/ProjectDetailsModal';

const Projects = () => {
    const { projects } = portfolioData;
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

    // Example details for each project (expand as needed)
    // Detailed data for all project popups
    const projectDetails = [
        {
            icon: <span style={{fontSize:'2rem'}}>💻</span>,
            title: 'Custom Web Development',
            badge: 'Full Stack Development',
            overview: 'Developed a scalable full-stack web solution for business clients using modern web technologies. The project focused on performance optimization, responsive design, and clean architecture.',
            technologies: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL', 'Bootstrap'],
            process: [
                { icon: '🔍', label: 'Requirement Analysis' },
                { icon: '📝', label: 'Wireframing & Planning' },
                { icon: '🎨', label: 'UI/UX Design' },
                { icon: '💻', label: 'Development' },
                { icon: '🗄️', label: 'Database Integration' },
                { icon: '✅', label: 'Testing & Deployment' },
            ],
            preview: [
                'Responsive Design',
                'Secure Authentication',
                'Database Management',
                'Performance Optimization',
                'SEO Friendly Structure',
            ],
            demo: '#',
            code: '#',
            image: 'https://user-images.githubusercontent.com/placeholder/project-screenshot.png',
        },
        {
            icon: <span style={{fontSize:'2rem'}}>🧑‍🎨</span>,
            title: 'UI/UX Capstone Project',
            badge: 'UI/UX Design',
            overview: 'Completed a comprehensive UI/UX solution including user research, wireframing, and high-fidelity prototyping. Focused on user-centered design and seamless experience.',
            technologies: ['Figma', 'HTML', 'CSS', 'JS'],
            process: [
                { icon: '🔬', label: 'User Research' },
                { icon: '📝', label: 'Wireframing' },
                { icon: '🎨', label: 'UI/UX Design' },
                { icon: '🧪', label: 'Usability Testing' },
                { icon: '💻', label: 'Prototyping' },
            ],
            preview: [
                'User Research',
                'Wireframes & Prototypes',
                'Usability Testing',
                'Responsive UI',
                'Design System',
            ],
            demo: '#',
            code: '#',
            image: 'https://user-images.githubusercontent.com/placeholder/uiux-screenshot.png',
        },
        {
            icon: <span style={{fontSize:'2rem'}}>🎨</span>,
            title: 'Brand Identity Design',
            badge: 'Graphic Design',
            overview: 'Created logos, marketing graphics, and social media creatives for diverse industry clients. Emphasized brand consistency and visual impact.',
            technologies: ['Photoshop', 'Illustrator', 'Figma'],
            process: [
                { icon: '🔍', label: 'Brand Discovery' },
                { icon: '💡', label: 'Concept Ideation' },
                { icon: '🖌️', label: 'Logo Design' },
                { icon: '📦', label: 'Brand Assets' },
                { icon: '📢', label: 'Marketing Collateral' },
            ],
            preview: [
                'Logo & Branding',
                'Social Media Kit',
                'Marketing Graphics',
                'Brand Guidelines',
                'Client Handover',
            ],
            demo: '#',
            code: '#',
            image: 'https://user-images.githubusercontent.com/placeholder/brand-screenshot.png',
        },
        {
            icon: <span style={{fontSize:'2rem'}}>🏫</span>,
            title: 'College Management System',
            badge: 'React, PHP, MySQL',
            overview: 'A comprehensive platform for managing college operations including admissions, attendance, exams, and staff. Features dashboards for students, teachers, and admins.',
            technologies: ['React', 'PHP', 'MySQL', 'Bootstrap'],
            process: [
                { icon: '📝', label: 'Requirement Gathering' },
                { icon: '🗂️', label: 'Database Design' },
                { icon: '💻', label: 'Frontend & Backend Dev' },
                { icon: '🔗', label: 'Integration' },
                { icon: '✅', label: 'Testing & Launch' },
            ],
            preview: [
                'Student/Staff Dashboards',
                'Attendance & Exams',
                'Fee Management',
                'Reports & Analytics',
                'Role-based Access',
            ],
            demo: '#',
            code: '#',
            image: 'https://user-images.githubusercontent.com/placeholder/college-mgmt.png',
        },
        {
            icon: <span style={{fontSize:'2rem'}}>🌾</span>,
            title: 'Crop Care Disease Prediction',
            badge: 'Python, AI',
            overview: 'AI-powered system for predicting crop diseases using image recognition and environmental data. Helps farmers take preventive actions and improve yield.',
            technologies: ['Python', 'TensorFlow', 'Flask', 'OpenCV'],
            process: [
                { icon: '🔬', label: 'Data Collection' },
                { icon: '🧠', label: 'Model Training' },
                { icon: '🖼️', label: 'Image Processing' },
                { icon: '🌱', label: 'Prediction & Advice' },
                { icon: '📱', label: 'Web/Mobile Interface' },
            ],
            preview: [
                'Disease Detection',
                'Farmer Dashboard',
                'Preventive Tips',
                'Image Upload',
                'Realtime Results',
            ],
            demo: '#',
            code: '#',
            image: 'https://user-images.githubusercontent.com/placeholder/cropcare.png',
        },
        {
            icon: <span style={{fontSize:'2rem'}}>🚚</span>,
            title: 'Transport Management System',
            badge: 'React, PHP, MySQL',
            overview: 'A digital solution for managing transport fleets, bookings, and logistics. Includes vehicle tracking, route planning, and reporting modules.',
            technologies: ['React', 'PHP', 'MySQL', 'Bootstrap'],
            process: [
                { icon: '📝', label: 'Requirement Analysis' },
                { icon: '🗺️', label: 'Route & Fleet Design' },
                { icon: '💻', label: 'System Development' },
                { icon: '🔗', label: 'Integration' },
                { icon: '✅', label: 'Testing & Deployment' },
            ],
            preview: [
                'Fleet Management',
                'Booking System',
                'Live Tracking',
                'Route Optimization',
                'Reports & Analytics',
            ],
            demo: '#',
            code: '#',
            image: 'https://user-images.githubusercontent.com/placeholder/transport-mgmt.png',
        },
        {
            icon: <span style={{fontSize:'2rem'}}>🅸</span>,
            title: 'iAXON Branding',
            badge: 'Graphics Design',
            overview: 'Developed a complete branding package for iAXON, including logo, business cards, and social media graphics. Focused on modern, tech-inspired visuals.',
            technologies: ['Photoshop', 'Illustrator', 'Figma'],
            process: [
                { icon: '🔍', label: 'Brand Research' },
                { icon: '💡', label: 'Concept Development' },
                { icon: '🖌️', label: 'Logo & Visuals' },
                { icon: '📦', label: 'Asset Creation' },
                { icon: '📢', label: 'Brand Launch' },
            ],
            preview: [
                'Logo Design',
                'Business Cards',
                'Social Media Kit',
                'Brand Guidelines',
                'Client Handover',
            ],
            demo: '#',
            code: '#',
            image: 'https://user-images.githubusercontent.com/placeholder/iaxon-branding.png',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    return (
        <section id="projects" style={{ background: 'var(--section-bg-alt)' }}>
            <div className="container">
                <SectionHeader
                    title="Featured Projects"
                    subtitle="A showcase of cross-disciplinary work spanning web and brand identity."
                />
                <motion.div
                    className="row"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {projects.map((project, index) => (
                        <div key={index} className="col-lg-4 col-md-6 mb-4">
                            <GlassCard
                                className="project-card h-100 p-0 overflow-hidden project-clickable"
                                onClick={() => {
                                    setSelectedProjectIndex(index);
                                    setModalOpen(true);
                                }}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="project-img-wrapper text-center p-5">
                                    <FontAwesomeIcon icon={project.icon} size="4x" style={{ color: 'var(--accent-color)' }} />
                                </div>
                                <div className="project-content p-4">
                                    <h4>{project.title}</h4>
                                    <p>{project.desc}</p>
                                </div>
                            </GlassCard>
                        </div>
                    ))}
                </motion.div>

                {/* Modern glassmorphism modal for project details */}
                <ProjectDetailsModal
                    open={modalOpen && selectedProjectIndex !== null}
                    onClose={() => {
                        setModalOpen(false);
                        setSelectedProjectIndex(null);
                    }}
                    project={selectedProjectIndex !== null ? { ...projects[selectedProjectIndex], ...projectDetails[selectedProjectIndex] } : null}
                />
            </div>
        </section>
    );
};

export default Projects;
