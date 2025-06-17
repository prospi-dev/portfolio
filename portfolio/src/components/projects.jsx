import { FaReact, FaGithub } from "react-icons/fa";
import { SiDotnet } from "react-icons/si";
import { BiServer } from "react-icons/bi";
import ScoreHubImage from '../assets/images/scorehub.png';
import { motion } from "framer-motion";
const projects = () => (
    <motion.section
        id="projects"
        className="py-6 flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
    >
        <h2 className="text-3xl font-semibold mb-8">Projects</h2>
        <div className="rounded-lg overflow-hidden shadow-lg mb-6 w-full max-w-90 lg:max-w-160">
            <img
                src={ScoreHubImage}
                alt="ScoreHub Screenshot"
                className="w-full object-cover"
            />
        </div>
        <div className=" w-full max-w-90 text-left">
            <div className="flex items-center gap-2 mb-1">
                <span className="text-yellow-300 font-semibold text-lg">ScoreHub</span>
                <a
                    href="https://github.com/prospi-dev/scorehub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:scale-120"
                >
                    <FaGithub className="text-2xl" />
                </a>
            </div>
            <p className="text-gray-300 mb-4">
                A football match information platform integrating a local API to display match schedules, teams, and player stats.
            </p>
            <div className="flex flex-wrap gap-2">
                <span className="flex items-center gap-2 bg-white/10 text-white px-3 py-1 rounded-full text-sm hover:scale-110">
                    <FaReact className="text-cyan-400 text-2xl" /> React
                </span>
                <span className="flex items-center gap-2 bg-white/10 text-white px-3 py-1 rounded-full text-sm hover:scale-110">
                    <SiDotnet className="text-blue-400 text-2xl" /> API
                </span>
                <span className="flex items-center gap-2 bg-white/10 text-white px-3 py-1 rounded-full text-sm hover:scale-110">
                    <BiServer className="text-gray-300 text-2xl" /> SQL Server
                </span>
            </div>
        </div>
    </motion.section>
);

export default projects;