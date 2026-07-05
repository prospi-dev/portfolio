import { motion } from "framer-motion";
import projectsData from "../data/projects.jsx";
import ProjectCard from "./ProjectCard.jsx";

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
                    <motion.div key={project.id} variants={itemVariants}>
                        <ProjectCard project={project} reversed={index % 2 === 1} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </motion.section>
);

export default Projects;
