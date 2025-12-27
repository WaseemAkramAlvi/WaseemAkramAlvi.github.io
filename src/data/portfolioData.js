import {
    faHtml5, faCss3Alt, faJs, faReact, faPython, faFigma, faNodeJs, faGitAlt, faBootstrap, faLinkedin, faGithub, faTwitter, faInstagram, faMicrosoft, faMeta, faGoogle
} from '@fortawesome/free-brands-svg-icons';
import {
    faCode, faPaintBrush, faBrain, faChalkboardTeacher, faLaptopCode, faLayerGroup, faPalette, faEnvelope, faPhone, faMapMarkerAlt, faPaperPlane, faAward, faNetworkWired
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
    ]
};
