import { FaCode, FaServer, FaLaptopCode, FaDatabase, FaShieldAlt, FaTools, FaReact, FaGithub, FaKey } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import {
    SiJavascript,
    SiMysql,
    SiSpringboot,
    SiSpringsecurity,
    SiHibernate,
    SiDotnet,
    SiVuedotjs,
    SiTailwindcss,
    SiPostgresql,
    SiJsonwebtokens,
    SiDocker,
    SiGit,
    SiRender,
    SiNetlify,
    SiOpenjdk,
} from "react-icons/si";

export const techOptions = [
    { key: "languages", icon: <FaCode size={20} />, label: "Languages" },
    { key: "backend", icon: <FaServer size={20} />, label: "Backend / Frameworks" },
    { key: "frontend", icon: <FaLaptopCode size={20} />, label: "Frontend" },
    { key: "databases", icon: <FaDatabase size={20} />, label: "Databases" },
    { key: "security", icon: <FaShieldAlt size={20} />, label: "Security & Auth" },
    { key: "tools", icon: <FaTools size={20} />, label: "DevOps / Tools" },
];

export const skillsByTech = {
    languages: [
        { icon: <SiOpenjdk className="text-orange-400 text-3xl md:text-4xl" />, label: "Java" },
        { icon: <SiJavascript className="text-yellow-300 text-3xl md:text-4xl" />, label: "JavaScript" },
        { icon: <FaDatabase className="text-blue-400 text-3xl md:text-4xl" />, label: "SQL" },
        { icon: <TbBrandCSharp className="text-purple-400 text-3xl md:text-4xl" />, label: "C#" },
    ],
    backend: [
        { icon: <SiSpringboot className="text-green-400 text-3xl md:text-4xl" />, label: "Spring Boot" },
        { icon: <SiSpringsecurity className="text-green-500 text-3xl md:text-4xl" />, label: "Spring Security" },
        { icon: <SiHibernate className="text-yellow-600 text-3xl md:text-4xl" />, label: "JPA/Hibernate" },
        { icon: <SiDotnet className="text-sky-400 text-3xl md:text-4xl" />, label: "ASP.NET Core" },
        { icon: <SiDotnet className="text-purple-400 text-3xl md:text-4xl" />, label: "Entity Framework Core" },
    ],
    frontend: [
        { icon: <SiVuedotjs className="text-emerald-400 text-3xl md:text-4xl" />, label: "Vue.js 3" },
        { icon: <SiVuedotjs className="text-yellow-400 text-3xl md:text-4xl" />, label: "Pinia" },
        { icon: <FaReact className="text-cyan-400 text-3xl md:text-4xl" />, label: "React" },
        { icon: <SiTailwindcss className="text-teal-400 text-3xl md:text-4xl" />, label: "Tailwind CSS" },
    ],
    databases: [
        { icon: <SiMysql className="text-blue-500 text-3xl md:text-4xl" />, label: "MySQL" },
        { icon: <SiPostgresql className="text-sky-400 text-3xl md:text-4xl" />, label: "PostgreSQL" },
        { icon: <FaDatabase className="text-red-400 text-3xl md:text-4xl" />, label: "SQL Server" },
    ],
    security: [
        { icon: <SiJsonwebtokens className="text-pink-400 text-3xl md:text-4xl" />, label: "JWT" },
        { icon: <FaKey className="text-yellow-400 text-3xl md:text-4xl" />, label: "BCrypt" },
    ],
    tools: [
        { icon: <SiDocker className="text-blue-400 text-3xl md:text-4xl" />, label: "Docker" },
        { icon: <SiGit className="text-orange-500 text-3xl md:text-4xl" />, label: "Git" },
        { icon: <FaGithub className="text-gray-200 text-3xl md:text-4xl" />, label: "GitHub" },
        { icon: <SiRender className="text-emerald-400 text-3xl md:text-4xl" />, label: "Render" },
        { icon: <SiNetlify className="text-teal-400 text-3xl md:text-4xl" />, label: "Netlify" },
    ],
};
