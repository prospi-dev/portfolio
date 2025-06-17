import { useState } from "react";
import { FaLaptopCode, FaCog, FaTools } from "react-icons/fa"; // Usa los iconos que prefieras
import { FaReact, FaGithub } from "react-icons/fa";
import { SiJavascript, SiSpring, SiFigma, SiDotnet, SiHtml5, SiCss3 } from "react-icons/si";
import { motion } from "framer-motion";
const techOptions = [
    { key: "frontend", icon: <FaLaptopCode size={32} />, label: "Frontend" },
    { key: "backend", icon: <FaCog size={32} />, label: "Backend" },
    { key: "tools", icon: <FaTools size={32} />, label: "Tools" },
];

// Ejemplo de skills por tecnología
const skillsByTech = {
    frontend: [<FaReact className="text-cyan-400 text-5xl" label="React" />, <SiHtml5 className="text-orange-400 text-5xl" label="HTML5" />,
    <SiCss3 className="text-blue-400 text-5xl" label="CSS3" />, <SiJavascript className="text-yellow-300 text-5xl" label="JavaScript" />],
    backend: [<SiDotnet className="text-sky-400 text-5xl" label=".Net" />, <SiSpring className="text-green-400 text-5xl" label="JavaSpring" />],
    tools: [<FaGithub className="text-gray-200 text-5xl" label="GitHub" />, <SiFigma className="text-pink-400 text-5xl" label="Figma" />],
};
const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};
const Skills = () => {
    const [selected, setSelected] = useState("frontend");

    return (
        <motion.section
            id="skills"
            className="py-8 flex flex-col items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
        >
            <h2 className="text-3xl font-semibold mb-8">Skills</h2>
            <div className="w-full flex flex-col items-center">
                <motion.div className="flex flex-wrap gap-6 justify-center transition-transform duration-300"
                    variants={container}
                    initial="hidden"
                    animate="show"
                    key={selected}
                >
                    {skillsByTech[selected].map((skill) => (
                        <motion.div
                            variants={item}
                            className="flex flex-col items-center"
                        >
                            <span
                                key={skill}
                                className="flex flex-col items-center  hover:scale-120 transition-transform duration-300"
                            >
                                {skill}
                                <span className="text-gray-300 mt-2">{skill.props.label}</span>
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
                <h3 className="text-2xl font-semibold pt-10 ">{techOptions.find(t => t.key === selected).label}</h3>
                {/* Line with circles */}
                <div className="relative w-full max-w-xs flex items-center py-2">
                    {/* Line */}
                    <div className="absolute left-10 right-0 h-1 bg-white rounded-full max-w-5/6" />
                    {/* Circles */}
                    <div className="w-full flex justify-between z-10">
                        {techOptions.map((tech) => (
                            <button
                                key={tech.key}
                                onClick={() => setSelected(tech.key)}
                                className={`bg-white flex items-center justify-center rounded-full border-2 transition-all duration-200
                            ${selected === tech.key ? "border-yellow-300 scale-100 shadow-lg" : "border-transparent scale-60"}
                            w-14 h-14`}
                                aria-label={tech.label}
                            >
                                <span className={`text-black`}>{tech.icon}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Skills;
