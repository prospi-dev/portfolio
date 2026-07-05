import { FaReact, FaGithub, FaExternalLinkAlt, FaEye, FaLock } from "react-icons/fa";
import { SiDotnet, SiJsonwebtokens, SiSpotify, SiCloudinary, SiOpenjdk, SiSpringboot, SiHibernate, SiMysql, SiVuedotjs, SiDocker } from "react-icons/si";
import { BiServer } from "react-icons/bi";
import FitTrackImage from '../assets/images/FitTrack-landing_page.png';
import BeatHubImage from '../assets/images/BeatHub-landing_page.png';
import { motion } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "FitTrack",
        description: "A full-stack training management application for creating workout routines, logging sessions, and tracking strength progression. Features JWT authentication with BCrypt hashing, an exercise catalogue with a user request/admin approval flow, and a custom admin panel.",
        image: FitTrackImage,
        technologies: [
            { name: "React 19", icon: <FaReact className="text-cyan-400" />, color: "cyan" },
            { name: "ASP.NET Core 9", icon: <SiDotnet className="text-blue-400" />, color: "blue" },
            { name: "Entity Framework Core", icon: <BiServer className="text-gray-300" />, color: "gray" },
            { name: "PostgreSQL", icon: <BiServer className="text-gray-300" />, color: "gray" },
            { name: "JWT", icon: <SiJsonwebtokens className="text-pink-400" />, color: "pink" },
        ],
        github: "https://github.com/prospi-dev/FitTrack",
        demo: "https://fittrack-prospi.netlify.app/",
        featured: true
    },
    {
        id: 2,
        title: "BeatHub",
        description: "A community-driven music discovery platform integrated with the Spotify API (\"Letterboxd for Music\"). Includes a full social system (followers, activity feed), custom JWT authentication, and Cloudinary-powered image uploads. Uses Axios interceptors for session renewal/expiration and custom debounce hooks to optimize calls to the external API.",
        image: BeatHubImage,
        technologies: [
            { name: "React", icon: <FaReact className="text-cyan-400" />, color: "cyan" },
            { name: ".NET 8", icon: <SiDotnet className="text-blue-400" />, color: "blue" },
            { name: "Entity Framework Core", icon: <BiServer className="text-gray-300" />, color: "gray" },
            { name: "PostgreSQL", icon: <BiServer className="text-gray-300" />, color: "gray" },
            { name: "Spotify API", icon: <SiSpotify className="text-green-400" />, color: "green" },
            { name: "Cloudinary", icon: <SiCloudinary className="text-sky-400" />, color: "sky" },
        ],
        github: "https://github.com/prospi-dev/BeatHub",
        demo: "https://beathub-prospi.netlify.app/",
        featured: true
    },
    {
        id: 3,
        title: "Domitila",
        description: "Corporate ERP system for HR management and social projects. Designed a 15+ table MySQL relational schema with engine-level business logic (triggers, computed fields) and a custom security architecture built with Spring Security + JWT.",
        image: null,
        technologies: [
            { name: "Java", icon: <SiOpenjdk className="text-orange-400" />, color: "orange" },
            { name: "Spring Boot", icon: <SiSpringboot className="text-green-400" />, color: "green" },
            { name: "JPA/Hibernate", icon: <SiHibernate className="text-yellow-600" />, color: "yellow" },
            { name: "MySQL", icon: <SiMysql className="text-blue-500" />, color: "blue" },
            { name: "Vue.js 3", icon: <SiVuedotjs className="text-emerald-400" />, color: "emerald" },
            { name: "Pinia", icon: <SiVuedotjs className="text-yellow-400" />, color: "yellow" },
            { name: "Docker", icon: <SiDocker className="text-blue-400" />, color: "blue" },
        ],
        github: null,
        demo: null,
        featured: true,
        private: true
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    },
};

const Projects = () => (
    <motion.section
        id="projects"
        className="py-16 px-4 flex flex-col items-center scroll-mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
    >
        <div className="max-w-6xl mx-auto w-full">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Featured Projects
            </h2>
            <motion.div
                className="grid gap-8 md:gap-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {projectsData.map((project, index) => (
                    <motion.div
                        key={project.id}
                        variants={itemVariants}
                        className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                            }`}
                    >
                        <div className="flex-1 group">
                            <div className="relative overflow-hidden rounded-xl shadow-2xl">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={`${project.title} Screenshot`}
                                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full aspect-video flex flex-col items-center justify-center gap-3 bg-white/5 border border-white/10">
                                        <FaLock className="text-4xl text-gray-500" />
                                        <span className="text-gray-400 text-sm">Private corporate repository</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="flex gap-4">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all hover:scale-110"
                                                aria-label="View GitHub Repository"
                                            >
                                                <FaGithub className="text-white text-xl" />
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all hover:scale-110"
                                                aria-label="View Live Demo"
                                            >
                                                <FaExternalLinkAlt className="text-white text-xl" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 text-center lg:text-left">
                            <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
                                <h3 className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-fuchsia-600 drop-shadow-[0_0_8px_rgba(192,38,211,0.5)]">
                                    {project.title}
                                </h3>
                                {project.featured && (
                                    <span className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-xs font-medium rounded-full border border-cyan-400/30 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                                        Featured
                                    </span>
                                )}
                                {project.private && (
                                    <span className="px-3 py-1 bg-gray-400/10 text-gray-300 text-xs font-medium rounded-full border border-gray-400/30 flex items-center gap-1">
                                        <FaLock className="text-[10px]" />
                                        Professional Project
                                    </span>
                                )}
                            </div>

                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-3 mb-6 justify-center lg:justify-start">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech.name}
                                        className="flex items-center gap-2 bg-white/5 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:-translate-y-1 transition-all duration-300 cursor-default"
                                    >
                                        <span className="text-lg">{tech.icon}</span>
                                        {tech.name}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 justify-center lg:justify-start">
                                {project.github ? (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 border border-white/20"
                                    >
                                        <FaGithub className="text-lg" />
                                        View Code
                                    </a>
                                ) : (
                                    <span className="flex items-center gap-2 bg-white/5 text-gray-400 font-medium px-6 py-3 rounded-xl border border-white/10">
                                        <FaLock className="text-lg" />
                                        Private Repository
                                    </span>
                                )}
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(192,38,211,0.5)] hover:shadow-[0_0_25px_rgba(192,38,211,0.8)]"
                                    >
                                        <FaEye className="text-lg" />
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </motion.section>
);

export default Projects;