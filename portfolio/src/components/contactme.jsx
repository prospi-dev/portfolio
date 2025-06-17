import React from 'react'
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const contactme = () => {
    return (
        <footer>
            <motion.section
                id='contact'
                className="flex flex-col items-center justify-center px-4 py-8 text-center"
            >
                <h2 className="text-2xl font-semibold mb-4 pt-2">Contact</h2>
                <div className="flex gap-6 justify-center mb-6">
                    <a
                        href="https://github.com/prospi-dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="neon-btn p-3transition hover:scale-110"
                        aria-label="GitHub"
                    >
                        <FaGithub className="text-3xl text-white" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/manuel-prosperi-664425274/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="neon-btn2 p-3transition hover:scale-110"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin className="text-3xl text-white" />
                    </a>
                </div>
                <a
                    href="mailto:tuemail@ejemplo.com"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-xl transition shadow justify-center"
                >
                    <MdEmail className="text-2xl" />
                    Email Me
                </a>
                <p className="text-sm text-white/60 mt-4">
                    &copy; 2025 Manuel Prosperi. All rights reserved.
                </p>
            </motion.section>
        </footer>

    )
}

export default contactme