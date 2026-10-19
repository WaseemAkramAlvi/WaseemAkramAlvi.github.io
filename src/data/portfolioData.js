import {
    faHtml5, faCss3Alt, faJs, faReact, faPython, faFigma, faNodeJs, faGitAlt, faBootstrap, faLinkedin, faGithub, faMicrosoft, faMeta, faGoogle, faWordpress
} from '@fortawesome/free-brands-svg-icons';
import {
    faCode, faPaintBrush, faBrain, faChalkboardTeacher, faLaptopCode, faLayerGroup, faPalette, faEnvelope, faPhone, faMapMarkerAlt, faPaperPlane, faAward, faNetworkWired,
    faDatabase, faMobileAlt, faServer, faExchangeAlt, faImage, faPenFancy, faGem, faShareAlt, faHeading, faLaptop, faFile, faChartLine, faCube, faChartBar, faTable, faChartPie,
    faSitemap, faCloud, faCogs, faBook, faProjectDiagram, faComments, faClipboardCheck, faUsers, faCompass, faVideo, faHandshake,
    faAtom, faMicrochip, faGraduationCap, faBriefcase, faFilePdf, faExternalLinkAlt, faCheckCircle, faRoute
} from '@fortawesome/free-solid-svg-icons';

export const portfolioData = {
    personalInfo: {
        name: "Waseem Akram Alvi",
        shortName: "Waseem Akram",
        // Normal Portfolio Positioning
        normalTitle: "Full-Stack Web Developer & Graphic Designer",
        normalHeadline: "Full-Stack Web Developer | Graphic Designer | CBT&A Instructor",
        normalSubtitle: "Building High-Performance Web Applications, Digital Brands & Mentoring Emerging Tech Talent",
        normalSummary: "Passionate Software Engineer, Web Developer, and CBT&A Instructor with 7+ years of hands-on experience across Full-Stack Web Development (React, PHP, MySQL, JavaScript), UI/UX & Graphic Design (Photoshop, Illustrator, Figma), and Technical IT Education.",
        normalAboutNarrative: "I hold a BS in Software Engineering from Virtual University of Pakistan and bring 7+ years of professional experience across Full-Stack Web Development, UI/UX & Graphic Design, and Technical Education.\n\nAs an Instructor for Competency-Based Training & Assessment (CBT&A) at Govt. Technical Training Institute and a Developer at CZone Software House, I develop custom responsive web platforms, engineer relational database architectures, and mentor hundreds of aspiring developers in modern web standards, programming, and freelancing.\n\nAlongside web engineering and design, I am actively engaged in graduate research in Computer Science at The Islamia University of Bahawalpur, exploring practical applications of artificial intelligence, machine learning, and advanced computing.",

        // Quantum Research Positioning (Special Mode)
        quantumHeadline: "Quantum Software Engineer | Machine Learning Specialist",
        quantumSubtitle: "Developing Quantum-Classical Hybrid Systems | Optimization & Quantum Neural Networks",
        quantumBrandStatement: "Quantum Computing × AI/ML × Optimization × Software Engineering",
        quantumSummary: "I am a Software Engineering graduate and Computer Science researcher working at the intersection of Quantum Computing, Machine Learning, Optimization, and Software Engineering. My current research focuses on developing practical quantum-classical approaches to complex optimization problems using simulation-based quantum computing.",
        quantumAboutNarrative: "I hold a BS in Software Engineering from Virtual University of Pakistan and am currently pursuing MS/MPhil Computer Science research at The Islamia University of Bahawalpur with a focus on Quantum Computing, Quantum Machine Learning, Artificial Intelligence, and combinatorial optimization.\n\nMy work focuses on exploring how quantum and classical computational techniques can be combined to develop efficient approaches to challenging optimization problems. I am particularly interested in QAOA, quantum neural networks, variational quantum algorithms, hybrid optimization, and simulation-based quantum computing.\n\nAlongside research, I have 7+ years of practical experience across software development, web engineering, database systems, AI/ML tools, and technical education as an Instructor.",

        // Defaults for backward compatibility
        headline: "Full-Stack Web Developer | Graphic Designer | CBT&A Instructor",
        secondaryPositioning: "Building High-Performance Web Applications, Digital Brands & Mentoring Emerging Tech Talent",
        brandStatement: "Full-Stack Web Dev × Graphic Design × CBT&A IT Mentoring",
        summary: "Passionate Software Engineer, Web Developer, and CBT&A Instructor with 7+ years of hands-on experience across Full-Stack Web Development (React, PHP, MySQL, JavaScript), UI/UX & Graphic Design (Photoshop, Illustrator, Figma), and Technical IT Education.",
        aboutNarrative: "I hold a BS in Software Engineering from Virtual University of Pakistan and bring 7+ years of professional experience across Full-Stack Web Development, UI/UX & Graphic Design, and Technical Education.\n\nAs an Instructor for Competency-Based Training & Assessment (CBT&A) at Govt. Technical Training Institute and a Developer at CZone Software House, I develop custom responsive web platforms, engineer relational database architectures, and mentor hundreds of aspiring developers in modern web standards, programming, and freelancing.\n\nAlongside web engineering and design, I am actively engaged in graduate research in Computer Science at The Islamia University of Bahawalpur, exploring practical applications of artificial intelligence, machine learning, and advanced computing.",

        email: "waseemgtti@gmail.com",
        phone: "+92 307 5579 807",
        location: "Rahim Yar Khan, Punjab, Pakistan",
        githubUsername: "WaseemAkramAlvi",
        socials: [
            { name: "LinkedIn", icon: faLinkedin, url: "https://www.linkedin.com/in/waseemakramalvi/" },
            { name: "GitHub", icon: faGithub, url: "https://github.com/WaseemAkramAlvi" }
        ]
    },

    // Normal Portfolio Stats
    normalStats: [
        { value: "7+ Years", label: "Professional Exp" },
        { value: "50+", label: "Completed Projects" },
        { value: "10+", label: "Industry Credentials" },
        { value: "500+", label: "Students Trained" }
    ],

    // Quantum Research Stats
    quantumStats: [
        { value: "MS / BS", label: "Academic Track (IUB / VU)" },
        { value: "QAOA & QML", label: "Primary Research Focus" },
        { value: "7+ Years", label: "Software & IT Training" },
        { value: "10+", label: "Industry Credentials" }
    ],

    // Default stats
    stats: [
        { value: "7+ Years", label: "Professional Exp" },
        { value: "50+", label: "Completed Projects" },
        { value: "10+", label: "Industry Credentials" },
        { value: "500+", label: "Students Trained" }
    ],

    // 6 Dedicated Research Focus Areas
    researchFocus: [
        {
            id: "quantum-computing",
            title: "Quantum Computing",
            icon: faAtom,
            color: "#06b6d4",
            summary: "Quantum algorithms, quantum circuits, variational algorithms, qubit-efficient approaches, and quantum simulation.",
            details: "Focusing on parameterized quantum circuits (PQCs), state preparation heuristics, error mitigation in simulated environments, and resource-bounded gate compilations."
        },
        {
            id: "quantum-ml",
            title: "Quantum Machine Learning",
            icon: faBrain,
            color: "#8b5cf6",
            summary: "Quantum neural networks, variational quantum circuits, hybrid quantum-classical learning, and trainability.",
            details: "Investigating quantum kernel methods, barren plateau mitigation, expressibility of parameterized circuits, and classical-quantum feature embedding."
        },
        {
            id: "combinatorial-opt",
            title: "Combinatorial Optimization",
            icon: faRoute,
            color: "#3b82f6",
            summary: "Vehicle routing, constrained optimization, graph-based optimization, and practical optimization problems.",
            details: "Formulating NP-hard routing problems into Quadratic Unconstrained Binary Optimization (QUBO) and Ising representations with constraint penalty balancing."
        },
        {
            id: "qaoa",
            title: "QAOA & Variational Methods",
            icon: faMicrochip,
            color: "#10b981",
            summary: "Quantum Approximate Optimization Algorithm and warm-started/hybrid approaches for optimization problems.",
            details: "Developing warm-started mixer Hamiltonians, continuous-to-binary relaxation mappings, and multi-angle parameter transfer strategies."
        },
        {
            id: "hybrid-systems",
            title: "Quantum-Classical Hybrid Systems",
            icon: faProjectDiagram,
            color: "#ec4899",
            summary: "Combining classical preprocessing, decomposition, optimization, and quantum optimization components.",
            details: "Architecting co-processing loops where classical algorithms handle clustering, route seeding, and outer-loop parameter updates while quantum subroutines evaluate combinatorial kernels."
        },
        {
            id: "ai-ml",
            title: "Artificial Intelligence & Machine Learning",
            icon: faChartLine,
            color: "#f59e0b",
            summary: "Machine learning, deep learning, generative AI, LLMs, and AI engineering.",
            details: "Practical implementation of supervised predictive pipelines, neural architectures, prompt engineering, and intelligent workflow automation."
        }
    ],

    // Current Research / Thesis Details
    currentResearch: {
        title: "A Hybrid Decomposition-Based Warm-Started QAOA Framework for Qubit-Efficient Capacitated Vehicle Routing",
        subtitle: "MS/MPhil Computer Science Thesis Research — The Islamia University of Bahawalpur",
        description: "My current research explores a hybrid decomposition-based framework for solving Capacitated Vehicle Routing Problems (CVRP) using warm-started QAOA while considering qubit efficiency and practical simulation constraints.",
        concepts: [
            "Capacitated Vehicle Routing Problem (CVRP)",
            "Problem Decomposition Heuristics",
            "Classical Preprocessing & Seeding",
            "Warm-Started QAOA Formulations",
            "Qubit-Efficient Encodings",
            "Quantum-Classical Co-Optimization",
            "Simulation-Based Performance Evaluation",
            "Combinatorial QUBO/Ising Mappings"
        ],
        pipeline: [
            { step: 1, name: "CVRP Formulation", desc: "Customer nodes, fleet capacities, demand vectors, and depot network modeling." },
            { step: 2, name: "Decomposition", desc: "Clustering large problem instances into partitionable sub-routing graphs." },
            { step: 3, name: "Classical Preprocessing", desc: "Continuous relaxation and heuristic route seeding for baseline optimization." },
            { step: 4, name: "Qubit-Efficient Encoding", desc: "Compact binary/qubit mapping minimizing physical register requirements." },
            { step: 5, name: "Warm Start Initialization", desc: "Biasing initial quantum state toward high-quality classical candidate solutions." },
            { step: 6, name: "QAOA Execution", desc: "Parameterized alternating cost and mixer Hamiltonian evolution in simulation." },
            { step: 7, name: "Classical Optimization", desc: "Outer-loop classical optimizer (e.g. COBYLA/Nelder-Mead) refining variational parameters." },
            { step: 8, name: "Simulation Evaluation", desc: "Validating approximation ratios, convergence profiles, and constraint satisfaction." }
        ],
        frameworkScope: "Investigating computational trade-offs, qubit savings, and solution quality across benchmark instances via simulation-based quantum execution frameworks (Python & Qiskit)."
    },

    // Research Interests
    researchInterests: [
        "Quantum Computing",
        "Quantum Machine Learning",
        "Quantum Optimization",
        "QAOA",
        "Variational Quantum Algorithms",
        "Quantum Neural Networks",
        "Hybrid Quantum-Classical Algorithms",
        "Combinatorial Optimization",
        "Vehicle Routing Problems (CVRP)",
        "Quantum Circuit Optimization",
        "Qubit-Efficient Quantum Algorithms",
        "Artificial Intelligence",
        "Machine Learning",
        "Generative AI"
    ],

    // Normal Portfolio Technical Skills (Web, Design, Programming, AI, Mentoring)
    normalTechnicalSkills: {
        web: {
            title: "Web Development",
            icon: faCode,
            color: "#3b82f6",
            skills: [
                { name: "React", desc: "Component architecture, custom hooks, state management, modern SPAs" },
                { name: "JavaScript ES6+", desc: "Async/await, closures, modern ES6+ syntax, API integrations" },
                { name: "PHP & MySQL", desc: "Server-side scripting, relational schemas, secure CRUD operations" },
                { name: "HTML5 & CSS3", desc: "Semantic structure, responsive layouts, Flexbox, Grid, CSS animations" },
                { name: "Bootstrap", desc: "Mobile-first frameworks, utility systems, accessible component kits" },
                { name: "Node.js & Express", desc: "Backend RESTful APIs, routing middleware, server environments" },
                { name: "WordPress", desc: "Theme customization, dynamic CMS configuration, responsive design" },
                { name: "REST APIs", desc: "Endpoint design, JSON protocols, HTTP methods, frontend integration" }
            ]
        },
        design: {
            title: "Graphic Design & UI/UX",
            icon: faPaintBrush,
            color: "#ec4899",
            skills: [
                { name: "Figma", desc: "UI/UX wireframing, high-fidelity prototypes, component design systems" },
                { name: "Adobe Photoshop", desc: "Photo editing, visual composition, marketing banners, social creatives" },
                { name: "Adobe Illustrator", desc: "Vector graphics, brand identity logos, custom vector illustrations" },
                { name: "Logo & Brand Identity", desc: "Comprehensive brand identity kits, color theory, typography" },
                { name: "Social Media Graphics", desc: "Marketing post designs, promotional campaigns, ad creative kits" },
                { name: "UI/UX Wireframing", desc: "User flows, interaction patterns, accessibility, responsive UI" }
            ]
        },
        programming: {
            title: "Programming & Databases",
            icon: faLaptopCode,
            color: "#10b981",
            skills: [
                { name: "PHP", desc: "Object-oriented backend engineering, session auth, data validation" },
                { name: "JavaScript", desc: "Full-stack scripting, event-driven programming, DOM manipulation" },
                { name: "Python", desc: "Scripting, algorithm development, data analysis, automation pipelines" },
                { name: "MySQL", desc: "Relational database modeling, query optimization, indexing, ACID transactions" },
                { name: "Git & GitHub", desc: "Version control workflows, branch management, collaborative codebases" },
                { name: "VS Code", desc: "Primary development environment, debugging tools, extensions workflow" }
            ]
        },
        aiml: {
            title: "AI & Emerging Tech",
            icon: faBrain,
            color: "#8b5cf6",
            skills: [
                { name: "Machine Learning", desc: "Supervised predictive pipelines, classification, regression with Scikit-learn" },
                { name: "Computer Vision", desc: "Convolutional neural networks, OpenCV, plant disease detection models" },
                { name: "Python Data Science", desc: "NumPy, Pandas, Matplotlib, exploratory data analysis workflows" },
                { name: "Prompt Engineering & GenAI", desc: "LLM orchestration, prompt optimization, AI-assisted development" }
            ]
        },
        mentoring: {
            title: "CBT&A Training & Mentoring",
            icon: faChalkboardTeacher,
            color: "#f59e0b",
            skills: [
                { name: "CBT&A Curriculum", desc: "Competency-based training standards, curriculum design for web tech" },
                { name: "Project-Based Learning", desc: "Leading hands-on capstone projects simulating client deliverables" },
                { name: "Interactive Instruction", desc: "Technical lab facilitation, live coding sessions, concept reviews" },
                { name: "Freelancing Coaching", desc: "Profile optimization, client proposals, freelancing marketplace skills" },
                { name: "Student Assessment", desc: "Skill gap evaluation, structured feedback, practical exams" }
            ]
        }
    },

    // Quantum Research Skills (Special Mode)
    technicalSkills: {
        quantum: {
            title: "Quantum Computing & QML",
            icon: faAtom,
            skills: [
                { name: "QAOA", desc: "Quantum Approximate Optimization Algorithm & warm-start mixers" },
                { name: "Variational Algorithms", desc: "VQE, Parameterized Quantum Circuits (PQCs)" },
                { name: "Quantum Circuits", desc: "Gate synthesis, circuit depth, entanglement layouts" },
                { name: "Quantum Optimization", desc: "QUBO, Ising formulations, combinatorial mappings" },
                { name: "Quantum Machine Learning", desc: "Quantum neural networks & hybrid classifiers" },
                { name: "Quantum Simulation", desc: "Statevector, matrix product states, noisy simulation" }
            ]
        },
        aiml: {
            title: "AI & Machine Learning",
            icon: faBrain,
            skills: [
                { name: "Machine Learning", desc: "Supervised & unsupervised learning, classification, regression" },
                { name: "Deep Learning", desc: "Multi-layer perceptrons, CNNs, optimization strategies" },
                { name: "Generative AI", desc: "Prompt engineering, workflow integration, model tuning" },
                { name: "Large Language Models", desc: "LLM integration, context management, API orchestration" },
                { name: "RAG Systems", desc: "Retrieval-augmented generation fundamentals & vector retrieval" },
                { name: "AI Engineering", desc: "End-to-end model evaluation, testing, and deployment workflows" }
            ]
        },
        programming: {
            title: "Programming Languages",
            icon: faCode,
            skills: [
                { name: "Python", desc: "Core scientific computing, NumPy, SciPy, algorithm development" },
                { name: "JavaScript", desc: "ES6+, asynchronous patterns, modern UI architectures" },
                { name: "PHP", desc: "Server-side logic, backend services, legacy & modern systems" },
                { name: "SQL", desc: "Relational queries, schema design, database normalization" },
                { name: "HTML5 & CSS3", desc: "Semantic markup, modern CSS layouts, responsive design" }
            ]
        },
        frameworks: {
            title: "Frameworks & Libraries",
            icon: faProjectDiagram,
            skills: [
                { name: "Qiskit", desc: "Quantum circuit building, algorithms, operator primitives, simulators" },
                { name: "TensorFlow & Keras", desc: "Deep learning model construction, training, validation" },
                { name: "PyTorch", desc: "Tensor operations, neural architectures, autograd computation" },
                { name: "Scikit-learn", desc: "Classical statistical modeling, preprocessing, evaluation metrics" },
                { name: "LangChain", desc: "LLM chaining, prompt structuring, retrieval orchestration" },
                { name: "React", desc: "Component architecture, hooks, state management, modern SPAs" },
                { name: "Bootstrap", desc: "Grid systems, accessible UI components, responsive foundations" }
            ]
        },
        databases: {
            title: "Databases & Storage",
            icon: faDatabase,
            skills: [
                { name: "MySQL", desc: "Relational database management, query optimization, transactions" },
                { name: "Database Design", desc: "Entity relationships, indexing strategies, integrity constraints" }
            ]
        },
        tools: {
            title: "Developer Tools & Platforms",
            icon: faCogs,
            skills: [
                { name: "Git & GitHub", desc: "Version control, branching workflows, collaborative repositories" },
                { name: "VS Code", desc: "Primary IDE, debugging, Python & React environments" },
                { name: "Jupyter Notebook", desc: "Interactive scientific computing, simulation experiments, visualization" }
            ]
        }
    },

    // Legacy skills array for backward compatibility with existing components
    skills: [
        { title: "Quantum & QML", icon: faAtom, color: "#06b6d4", desc: "QAOA, Variational Circuits, Quantum Simulation, Qiskit" },
        { title: "AI & Machine Learning", icon: faBrain, color: "#8b5cf6", desc: "Machine Learning, Deep Learning, Generative AI, PyTorch" },
        { title: "Software Engineering", icon: faLaptopCode, color: "#3b82f6", desc: "Python, JavaScript, PHP, MySQL, React, Full-Stack Architecture" },
        { title: "Technical Education", icon: faChalkboardTeacher, color: "#10b981", desc: "CBT&A Instructor, Curriculum Development, Hands-on Mentoring" }
    ],

    techStack: [
        'QISKIT', 'PYTHON', 'QAOA', 'TENSORFLOW', 'PYTORCH', 'SCIKIT-LEARN',
        'REACT', 'JAVASCRIPT', 'PHP', 'MYSQL', 'GIT', 'GITHUB'
    ],

    // Authentic Projects Categorized (All, Quantum, AI/ML, Software, Web)
    projects: [
        {
            id: "thesis-qaoa-cvrp",
            title: "Qubit-Efficient Warm-Started QAOA for CVRP",
            category: "Quantum",
            badge: "Featured Research Project",
            isFeatured: true,
            problem: "Capacitated Vehicle Routing is NP-hard. Standard quantum QUBO formulations require an impractical number of qubits that exceed NISQ and simulation constraints.",
            technology: ["Python", "Qiskit", "QAOA", "Combinatorial Optimization", "CVRP", "Quantum Simulation"],
            description: "A research-oriented hybrid quantum-classical framework exploring decomposition and warm-start strategies for solving capacitated vehicle routing problems while reducing quantum resource requirements.",
            keyContribution: "Formulated a problem-decomposition and warm-started initialization pipeline that significantly scales down required qubit registers, enabling simulation-based evaluation of routing instances.",
            github: null, // TODO: add the real repository URL here when published
            demo: null,
            documentation: "#research-thesis"
        },
        {
            id: "crop-care-ai",
            title: "Crop Care Disease Prediction System",
            category: "AI/ML",
            badge: "Computer Vision & AI",
            isFeatured: false,
            problem: "Agricultural crop diseases often go undetected in early stages, leading to significant yield reduction and economic loss for farmers.",
            technology: ["Python", "TensorFlow", "OpenCV", "Flask", "Scikit-learn"],
            description: "AI-powered diagnostic system that utilizes convolutional neural network models to identify leaf plant diseases from visual imagery and suggest preventive remedies.",
            keyContribution: "Trained and evaluated deep neural classifiers on plant disease datasets, integrating preprocessing pipelines and an accessible diagnostic interface.",
            github: null, // TODO: add the real repository URL here when published
            demo: null,
            documentation: null
        },
        {
            id: "college-mgmt-system",
            title: "College Management & Academic Platform",
            category: "Software",
            badge: "Enterprise Web App",
            isFeatured: false,
            problem: "Educational institutions require unified administrative workflows for admissions, student records, fee reconciliation, and faculty grading.",
            technology: ["React", "PHP", "MySQL", "Bootstrap", "REST APIs"],
            description: "A comprehensive digital administration platform supporting multi-role access (administrators, instructors, students) with attendance, examination tracking, and reporting.",
            keyContribution: "Designed modular relational database architecture, role-based authentication, and responsive administrative dashboards.",
            github: null, // TODO: add the real repository URL here when published
            demo: null,
            documentation: null
        },
        {
            id: "transport-logistics-system",
            title: "Transport & Fleet Logistics System",
            category: "Software",
            badge: "Logistics Software",
            isFeatured: false,
            problem: "Managing freight operations, route assignments, vehicle scheduling, and delivery tracking without digital central coordination causes operational delays.",
            technology: ["React", "PHP", "MySQL", "JavaScript"],
            description: "A centralized logistics tracking application for vehicle allocation, consignment logging, route coordination, and operational fleet analytics.",
            keyContribution: "Implemented fleet scheduling logic, shipment status lifecycle management, and relational tracking tables.",
            github: null, // TODO: add the real repository URL here when published
            demo: null,
            documentation: null
        },
        {
            id: "custom-web-engineering",
            title: "Full-Stack Web Engineering Solutions",
            category: "Web",
            badge: "Client Web Engineering",
            isFeatured: false,
            problem: "Businesses need robust, responsive web platforms optimized for search engines, fast load times, and structured database operations.",
            technology: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
            description: "Developed custom dynamic websites and content platforms at CZone Software House tailored to client requirements with clean backend scripting and secure data handling.",
            keyContribution: "Engineered performant, responsive web interfaces and server-side CRUD modules adhering to web standards.",
            github: null, // TODO: add the real repository URL here when published
            demo: null,
            documentation: null
        },
        {
            id: "uiux-brand-design",
            title: "UI/UX & Brand Identity Systems",
            category: "Web",
            badge: "Design & Prototyping",
            isFeatured: false,
            problem: "Tech products and emerging platforms often suffer from cluttered user interfaces and inconsistent visual identity.",
            technology: ["Figma", "Adobe Photoshop", "Illustrator", "Design Systems"],
            description: "End-to-end design systems, high-fidelity prototypes, and brand collateral for software applications and organizations (including iAXON branding).",
            keyContribution: "Established comprehensive component libraries, user journey wireframes, and production-ready visual brand guidelines.",
            github: null, // TODO: add the real repository URL here when published
            demo: null,
            documentation: null
        }
    ],

    // Education Timeline
    education: [
        {
            degree: "MS / MPhil in Computer Science",
            institution: "The Islamia University of Bahawalpur",
            period: "In Progress (Research Phase)",
            status: "Current Graduate Research",
            details: "Specializing in Quantum Computing, Quantum Machine Learning, and Combinatorial Optimization.",
            thesis: "A Hybrid Decomposition-Based Warm-Started QAOA Framework for Qubit-Efficient Capacitated Vehicle Routing"
        },
        {
            degree: "BS in Software Engineering",
            institution: "Virtual University of Pakistan",
            period: "Graduated: September 2025",
            status: "Completed",
            cgpa: "2.89 / 4.00",
            details: "Core focus on Software Architecture, Object-Oriented Programming, Data Structures & Algorithms, Database Design, Web Engineering, and Artificial Intelligence."
        }
    ],

    // Professional Experience Timeline
    experience: [
        {
            date: "2024 - Present",
            role: "Instructor CBT&A (Web Development & IT)",
            company: "Govt. Technical Training Institute",
            location: "Rahim Yar Khan, Pakistan",
            desc: "Delivering Competency-Based Training & Assessment (CBT&A) courses in Web Design & Development (HTML, CSS, JavaScript, PHP, MySQL), Database Fundamentals, AI Tools, and Prompt Engineering. Mentoring aspiring developers through project-based learning and freelancing readiness."
        },
        {
            date: "2022 - Present",
            role: "Web Developer & Graphics Designer",
            company: "CZone Software House",
            location: "Rahim Yar Khan, Pakistan",
            desc: "Developing custom responsive websites, dynamic web applications, and comprehensive brand identity designs. Collaborating with clients to translate business requirements into functional digital products."
        },
        {
            date: "2015 - 2017",
            role: "Assistant Manager",
            company: "Al-Hassan Lajpal Trailer Service",
            location: "Rahim Yar Khan, Pakistan",
            desc: "Coordinated daily freight logistics, fleet management schedules, and operational reporting, building practical insight into real-world transport and routing challenges."
        }
    ],

    // Authentic Certifications
    certifications: [
        { name: "IBM", icon: faAward, tooltip: "AI, UI/UX & Cloud credentials", desc: "IBM AI, Design Thinking and Cloud Professional badges" },
        { name: "Microsoft", icon: faMicrosoft, tooltip: "Azure Fundamentals & Microsoft 365", desc: "Cloud computing and developer suite certifications" },
        { name: "Meta", icon: faMeta, tooltip: "Front-End Developer & UX programs", desc: "Front-end development and modern web practices" },
        { name: "CISCO", icon: faNetworkWired, tooltip: "Networking & Security Essentials", desc: "Network routing, switching, and security foundations" },
        { name: "Adobe", icon: faAward, tooltip: "Creative Cloud Specialist", desc: "Professional visual design and digital media workflows" },
        { name: "Google", icon: faGoogle, tooltip: "Analytics & Cloud Fundamentals", desc: "Data analytics and cloud foundations" }
    ],

    certDetails: {
        IBM: {
            title: "IBM Credentials",
            certs: [
                { title: "IBM UI/UX Designer", institute: "IBM", date: "Sep 2023" },
                { title: "Enterprise Design Thinking Practitioner", institute: "IBM", date: "Aug 2023" },
                { title: "IBM Cloud Foundations", institute: "IBM", date: "Mar 2021" }
            ]
        },
        Microsoft: {
            title: "Microsoft Credentials",
            certs: [
                { title: "Microsoft Azure Fundamentals", institute: "Microsoft", date: "Dec 2023" },
                { title: "Microsoft 365 Certified", institute: "Microsoft", date: "Nov 2023" }
            ]
        },
        Meta: {
            title: "Meta Credentials",
            certs: [
                { title: "Meta Front-End Developer Track", institute: "Meta", date: "Oct 2023" },
                { title: "Meta Digital & Social Media Foundations", institute: "Meta", date: "Sep 2023" }
            ]
        },
        CISCO: {
            title: "Cisco Credentials",
            certs: [
                { title: "Cisco Network Fundamentals", institute: "Cisco", date: "Aug 2023" },
                { title: "Cisco Security Essentials", institute: "Cisco", date: "Jul 2023" }
            ]
        },
        Adobe: {
            title: "Adobe Credentials",
            certs: [
                { title: "Adobe Photoshop Specialist", institute: "Adobe", date: "Mar 2024" },
                { title: "Adobe Illustrator Expert", institute: "Adobe", date: "Feb 2024" }
            ]
        },
        Google: {
            title: "Google Credentials",
            certs: [
                { title: "Google Analytics Qualification", institute: "Google", date: "Jun 2023" },
                { title: "Google Data Analytics Certificate", institute: "Google", date: "May 2023" }
            ]
        }
    },

    // Publications (Transparent & Factual)
    publications: {
        statusText: "Research publications and technical manuscripts will be added as they become available.",
        activeManuscripts: [
            {
                title: "A Hybrid Decomposition-Based Warm-Started QAOA Framework for Qubit-Efficient Capacitated Vehicle Routing",
                venue: "MS Thesis Research (Under Investigation)",
                focus: "Decomposition heuristics, warm-started QAOA circuits, qubit resource reduction, simulation-based benchmarking on CVRP instances."
            }
        ]
    }
};