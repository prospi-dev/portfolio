import { FaReact, FaGithub } from "react-icons/fa";
import { SiJavascript, SiSpring, SiFigma, SiDotnet, SiHtml5, SiCss3 } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
    { icon: <FaReact className="text-cyan-400 text-5xl" />, label: "React" },
    { icon: <SiJavascript className="text-yellow-300 text-5xl" />, label: "JavaScript" },
    { icon: <SiDotnet className="text-sky-400 text-5xl" />, label: ".NET" },
    { icon: <SiHtml5 className="text-orange-400 text-5xl" />, label: "HTML5" },
    { icon: <SiCss3 className="text-blue-400 text-5xl" />, label: "CSS3" },
    { icon: <SiSpring className="text-green-400 text-5xl" />, label: "Spring" },
    { icon: <FaGithub className="text-gray-200 text-5xl" />, label: "GitHub" },
    { icon: <SiFigma className="text-pink-400 text-5xl" />, label: "Figma" },
];

const Skills = () => (
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
        <div className="skills grid grid-cols-2 sm:grid-cols-4 gap-y-10 gap-x-8">
            {skills.map(({ icon, label }) => (
                <div key={label} className="flex flex-col items-center  hover:scale-120 transition-transform duration-300">
                    {icon}
                    <span className="mt-2 text-lg">{label}</span>
                </div>
            ))}
        </div>
    </motion.section>
);

export default Skills;