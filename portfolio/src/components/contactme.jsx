import React from 'react'
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ContactForm from './contactForm';
const contactme = () => {
    return (
        <footer>
            <section
                id='contact'
                className="flex flex-col items-center justify-center px-2 py-8 text-center"
            >
                <h2 className="text-2xl font-semibold mb-4 pt-2">Get In Touch</h2>
                <div className='flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-6 max-w-4xl mx-auto'>
                    <ContactForm />
                    <div className="flex flex-col gap-6 bg-white/10 p-6 rounded-lg shadow-lg lg:row-span-1 transition hover:scale-[1.02] hover:shadow-2xl">
                        <h3 className='text-xl font-semibold mb-2 text-left'>Contact Info</h3>
                        <div className='flex flex-row items-center gap-4'>
                            <FaGithub className='text-3xl' />
                            <div className='flex flex-col'>
                                <span className='text-white flex font-bold'>GitHub</span>
                                <a href="https://github.com/prospi-dev" target="_blank" rel="noopener noreferrer" className='text-white/60 hover:text-amber-300'>https://github.com/prospi-dev</a>
                            </div>
                        </div>
                        <div className='flex flex-row items-center gap-4'>
                            <FaLinkedin className='text-3xl' />
                            <div className='flex flex-col'>
                                <span className='text-white flex font-bold'>LinkedIn</span>
                                <a href="https://www.linkedin.com/in/prospi-dev" target="_blank" rel="noopener noreferrer" className='text-white/60 hover:text-amber-300'>https://www.linkedin.com/in/prospi-dev</a>
                            </div>
                        </div>
                        <div className='flex flex-row items-center gap-4'>
                            <MdEmail className='text-3xl' />
                            <div className='flex flex-col'>
                                <span className='text-white flex font-bold'>Email</span>
                                <a href="mailto:your-email@example.com" className='text-white/60 hover:text-amber-300'>manuprosperi04@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm shadow-xl rounded-xl p-8 h-full max-w-lg mx-auto text-white transition hover:scale-[1.02] hover:shadow-2xl mb-auto">
                        <h3 className='text-xl font-semibold mb-2 text-left'>Reach me out!</h3>
                        <p className="text-base leading-relaxed text-white/70 text-left">
                            Feel free to reach out if you have any questions, want to discuss a project, or just want to connect! I am always open to new opportunities, collaborations, or simply having a chat about technology, programming, or anything else you find interesting.
                        </p>
                    </div>
                </div>

                <p className="text-sm text-white/60 mt-4">
                    Designed & Built by Manuel Prosperi &copy; 2025
                </p>
            </section>
        </footer>

    )
}

export default contactme