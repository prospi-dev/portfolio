import { useState } from "react";
import { motion } from "framer-motion";
import { techOptions, skillsByTech } from "../data/skills.jsx";

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
    const [selected, setSelected] = useState("languages");

    return (
        <motion.section
            id="skills"
            className="py-16 px-4 flex flex-col items-center scroll-mt-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="max-w-4xl mx-auto w-full">
                <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Skills
                </h2>
                <motion.div
                    className="flex flex-row flex-wrap gap-8 w-full justify-around"
                    variants={container}
                    initial="hidden"
                    animate="show"
                    key={selected}
                >
                    {skillsByTech[selected].map(({ icon, label }, index) => (
                        <motion.div
                            key={label}
                            variants={item}
                            className="flex flex-col items-center group cursor-pointer"
                        >
                            <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                                {icon}
                            </div>
                            <span className="text-gray-300 mt-3 text-lg font-medium group-hover:text-white transition-colors">
                                {label}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
                <div className="flex flex-col items-center">
                    <h3 className="text-2xl font-semibold mb-8 mt-10 text-yellow-400">
                        {techOptions.find(t => t.key === selected).label}
                    </h3>
                    <div className="relative w-full max-w-2xl flex items-center">
                        <div className="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 bg-white/30 rounded-full" />
                        <div className="w-full flex justify-between z-10">
                            {techOptions.map((tech) => (
                                <button
                                    key={tech.key}
                                    onClick={() => setSelected(tech.key)}
                                    className={`bg-white flex items-center justify-center rounded-full border-2 transition-all duration-300 hover:scale-110
                                        ${selected === tech.key
                                            ? "border-yellow-400 scale-110 shadow-lg shadow-yellow-400/20"
                                            : "border-white/30 scale-90 opacity-70 hover:opacity-100"}
                                        w-10 h-10 md:w-14 md:h-14`}
                                    aria-label={tech.label}
                                >
                                    <span className="text-black text-sm md:text-base">{tech.icon}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Skills;