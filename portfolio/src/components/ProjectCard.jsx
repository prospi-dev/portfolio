import { FaGithub, FaExternalLinkAlt, FaEye, FaLock } from "react-icons/fa";

const ProjectCard = ({ project, reversed }) => (
    <div
        className={`flex flex-col lg:flex-row gap-8 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}
    >
        <div className="flex-1 group">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={`${project.title} Screenshot`}
                        loading="lazy"
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
                                aria-label={`View ${project.title} GitHub repository`}
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
                                aria-label={`View ${project.title} live demo`}
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
    </div>
);

export default ProjectCard;
