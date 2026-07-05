import { FaGraduationCap, FaCertificate, FaBriefcase } from "react-icons/fa";

export const educationData = [
    {
        icon: FaCertificate,
        iconColor: "text-fuchsia-400",
        title: "English Certificate Level B2",
        institution: "IES Martín Miranda",
        location: "Spain",
        date: "2023",
    },
    {
        icon: FaGraduationCap,
        iconColor: "text-fuchsia-400",
        title: "Higher National Diploma in Web Application Development",
        institution: "CIFP César Manrique",
        location: "Spain",
        date: "2023 - 2025",
    },
];

export const experienceData = [
    {
        icon: FaBriefcase,
        company: "FEMETE",
        role: "Backend Lead / Full Stack Developer",
        summary: "Technical lead for backend and full-stack developer on Domitila, a corporate ERP system for HR management and social projects.",
        responsibilities: [
            "Technical direction of the backend area, defining system architecture and design guidelines in Spring Boot/JPA for a 5-person backend team (within a 15-person project team).",
            "Designed and normalized a relational database schema in MySQL with 15+ tables, implementing engine-level automated logic (triggers, computed fields) to ensure the integrity of complex business relationships.",
            "Established strict development standards for the team: zero native queries, exclusive use of JPQL, decoupling via DTOs, and advanced entity mapping with @MapsId.",
            "Designed and implemented the system's security and authentication layer from scratch using Spring Security and JSON Web Tokens (JWT).",
            "Technical mentoring and code reviews for the development team, ensuring consistency across application layers.",
            "Contributed to the frontend, building dynamic interfaces with Vue.js 3 and global state management with Pinia.",
        ],
        techStack: ["Java", "Spring Boot", "Spring Security", "JWT", "JPA/Hibernate", "MySQL", "Vue.js 3", "Pinia", "Docker", "Git"],
        location: "Santa Cruz de Tenerife, Spain (On-site/Hybrid)",
        date: "May 2026 - Present",
    },
    {
        icon: FaBriefcase,
        company: "PRODANET INTERNATIONAL",
        role: "Trainee Developer",
        responsibilities: [
            "Web data extraction using JavaScript and regular expressions (RegExp)",
            "Automation of scraping and structured storage in databases",
            "Management and analysis of obtained data",
        ],
        location: "Santa Cruz de Tenerife, Spain",
        date: "Feb 2025 - May 2025",
    },
];
