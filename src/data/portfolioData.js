faHtml5, faCss3Alt, faJs, faReact, faPython, faFigma, faNodeJs, faGitAlt, faBootstrap, faLinkedin, faGithub, faTwitter, faInstagram, faMicrosoft, faMeta, faGoogle, faWordpress
} from '@fortawesome/free-brands-svg-icons';
import {
    faCode, faPaintBrush, faBrain, faChalkboardTeacher, faLaptopCode, faLayerGroup, faPalette, faEnvelope, faPhone, faMapMarkerAlt, faPaperPlane, faAward, faNetworkWired,
    faDatabase, faMobileAlt, faServer, faExchangeAlt, faImage, faPenFancy, faGem, faShareAlt, faHeading, faLaptop, faFile, faChartLine, faCube, faChartBar, faTable, faChartPie,
    faSitemap, faCloud, faCogs, faBook, faProjectDiagram, faComments, faClipboardCheck, faUsers, faCompass, faVideo, faHandshake
} from '@fortawesome/free-solid-svg-icons';

export const portfolioData = {
    personalInfo: {
        name: "Waseem Akram Alvi",
        title: "Instructor & IT Specialist",
        description: "Passionate Instructor & IT Specialist with a strong background in Web Designing & Development, Graphics Designing, and MS Office Training. BS in Software Engineering with 7+ years of experience.",
        email: "waseemgtti@gmail.com",
        phone: "+92 307 5579 807",
        location: "Rahim Yar Khan, Punjab, Pakistan",
        socials: [
            { name: "LinkedIn", icon: faLinkedin, url: "https://www.linkedin.com/in/waseemakramalvi/" },
            { name: "GitHub", icon: faGithub, url: "https://github.com/WaseemAkramAlvi" },
            { name: "Twitter", icon: faTwitter, url: "#" },
            { name: "Instagram", icon: faInstagram, url: "#" }
        ]
    },
    stats: [
        { value: "7+", label: "Years Exp" },
        { value: "50+", label: "Projects Completed" },
        { value: "10+", label: "Certs Earned" }
    ],
    experience: [
        {
            date: "2024 - Present",
            role: "Instructor CBT&A (Web Dev)",
            company: "Govt. Technical Training Institute",
            desc: "Teaching HTML, CSS, JS, PHP, MySQL and guiding students on freelancing."
        },
        {
            date: "2022 - Present",
            role: "Web Dev & Graphics Designer",
            company: "CZone Software House",
            desc: "Developing custom websites and designing branding materials for clients."
        },
        {
            date: "2015 - 2017",
            role: "Assistant Manager",
            company: "Al-Hassan Lajpal Traler Service",
            desc: "Oversaw daily operational tasks and logistics management."
        }
    ],
    skills: [
        { title: "Web Development", icon: faCode, color: "#e34f26", desc: "HTML, CSS, JavaScript, PHP, Bootstrap, WordPress" },
        { title: "Graphic Design", icon: faPaintBrush, color: "#264de4", desc: "Adobe Photoshop, Illustrator, Figma, Logo Design" },
        { title: "AI & Tech", icon: faBrain, color: "#f7df1e", desc: "Artificial Intelligence, Python, MS Office Suite" },
        { title: "Mentoring", icon: faChalkboardTeacher, color: "#61dafb", desc: "Curriculum Development, Project-Based Learning" }
    ],
    techStack: [
        'GIT', 'GITHUB', 'FIGMA', 'PHOTOSHOP', 'HTML5', 'CSS3',
        'JAVASCRIPT', 'REACT', 'NODE.JS', 'PHP', 'MYSQL', 'PYTHON'
    ],
    certifications: [
        { name: "IBM", icon: faAward, tooltip: "AI, Data Science & Cloud fundamentals" },
        { name: "Adobe", icon: faAward, tooltip: "Creative Cloud design tools & workflows" },
        { name: "Microsoft", icon: faMicrosoft, tooltip: "Cloud, productivity & development badges" },
        { name: "Meta", icon: faMeta, tooltip: "Front-end, UX & social platforms" },
        { name: "CISCO", icon: faNetworkWired, tooltip: "Networking, security & infrastructure" },
        { name: "Google", icon: faGoogle, tooltip: "Analytics, cloud & automation" }
    ],
    projects: [
        { title: "Custom Web Development", icon: faLaptopCode, desc: "Developed full-stack web solutions for various clients at CZone Software House using PHP and MySQL." },
        { title: "UI/UX Capstone Project", icon: faLayerGroup, desc: "Completed a comprehensive UI/UX solution including user research, wireframing, and high-fidelity prototyping." },
        { title: "Brand Identity Design", icon: faPalette, desc: "Created logos, marketing graphics, and social media creatives for diverse industry clients." }
    ],
    skillsDetail: {
        'Web Development': {
            icon: faCode,
            items: [
                { title: 'React', icon: faReact, desc: 'Component-based UI libraries, Hooks, State Management' },
                { title: 'JavaScript ES6+', icon: faJs, desc: 'Async/Await, Arrow Functions, Destructuring' },
                { title: 'PHP & MySQL', icon: faDatabase, desc: 'Server-side scripting, Database Design, CRUD Operations' },
                { title: 'HTML5 & CSS3', icon: faCode, desc: 'Semantic HTML, Flexbox, Grid, Animations' },
                { title: 'Bootstrap', icon: faMobileAlt, desc: 'Mobile-first Design, Media Queries, Component Library' },
                { title: 'Node.js & Express', icon: faServer, desc: 'API Development, Middleware, Authentication' },
                { title: 'WordPress', icon: faWordpress, desc: 'Theme Customization, Plugin Development, SEO' },
                { title: 'REST APIs', icon: faExchangeAlt, desc: 'API Design, JSON, HTTP Methods, Integration' }
            ]
        },
        'Graphic Design': {
            icon: faPaintBrush,
            items: [
                { title: 'Adobe Photoshop', icon: faImage, desc: 'Photo Editing, Layer Management, Effects & Filters' },
                { title: 'Adobe Illustrator', icon: faPenFancy, desc: 'Vector Graphics, Logo Design, Typography' },
                { title: 'Figma', icon: faFigma, desc: 'UI/UX Design, Prototyping, Design Systems' },
                { title: 'Logo Design', icon: faGem, desc: 'Brand Identity, Icon Design, Visual Communication' },
                { title: 'Social Media', icon: faShareAlt, desc: 'Banners, Posts, Stories, Thumbnails' },
                { title: 'Color Theory', icon: faPalette, desc: 'Color Harmony, Psychology, Accessibility' },
                { title: 'Typography', icon: faHeading, desc: 'Font Selection, Spacing, Hierarchy, Readability' },
                { title: 'Web Design UI/UX', icon: faLaptop, desc: 'Wireframing, Prototyping, User Experience' },
                { title: 'InDesign Layout', icon: faFile, desc: 'Print Design, Brochures, Posters, Publications' }
            ]
        },
        'AI & Tech': {
            icon: faBrain,
            items: [
                { title: 'Machine Learning', icon: faChartLine, desc: 'Supervised Learning, Classification, Regression' },
                { title: 'Deep Learning', icon: faCube, desc: 'Neural Networks, CNNs, RNNs, TensorFlow' },
                { title: 'Python', icon: faPython, desc: 'Data Analysis, Libraries: NumPy, Pandas, Scikit-learn' },
                { title: 'Data Analysis', icon: faChartBar, desc: 'Data Visualization, Statistical Analysis, Insights' },
                { title: 'Excel Advanced', icon: faTable, desc: 'Formulas, Pivot Tables, Data Modeling' },
                { title: 'Power BI', icon: faChartPie, desc: 'Dashboard Creation, Data Visualization, BI Analytics' },
                { title: 'IoT Basics', icon: faSitemap, desc: 'Arduino, Sensors, Connected Devices' },
                { title: 'Cloud Computing', icon: faCloud, desc: 'AWS, Azure, Google Cloud Basics' },
                { title: 'Automation Scripts', icon: faCogs, desc: 'Task Automation, Scripting, Process Optimization' }
            ]
        },
        'Mentoring': {
            icon: faChalkboardTeacher,
            items: [
                { title: 'Curriculum Dev', icon: faBook, desc: 'Course Design, Learning Objectives, Content Structure' },
                { title: 'Project-Based Learning', icon: faProjectDiagram, desc: 'Hands-on Projects, Real-world Applications, Case Studies' },
                { title: 'Interactive Teaching', icon: faComments, desc: 'Class Engagement, Q&A Sessions, Discussions' },
                { title: 'Student Assessment', icon: faClipboardCheck, desc: 'Evaluation, Grading, Feedback, Progress Tracking' },
                { title: 'Workshops', icon: faUsers, desc: 'Group Sessions, Seminars, Training Programs' },
                { title: 'Career Guidance', icon: faCompass, desc: 'Career Path Planning, Skill Development, Mentorship' },
                { title: 'Online Teaching', icon: faVideo, desc: 'Virtual Classes, LMS Management, Video Tutorials' },
                { title: 'Soft Skills', icon: faHandshake, desc: 'Communication, Leadership, Problem-solving, Teamwork' }
            ]
        }
    }
};
