import React from 'react'
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ContactForm from './contactForm';

const contactme = () => {
    return (
        <footer>
            <motion.section
                id='contact'
                className="flex flex-col items-center justify-center px-4 py-16 text-center"
            >
                <h2 className="text-3xl lg:text-4xl font-bold mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Get In Touch
                </h2>
                
                <div className='flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-8 max-w-4xl mx-auto'>
                    <ContactForm />
                    
                    <motion.div 
                        className="flex flex-col gap-6 bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl shadow-xl lg:row-span-1"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className='text-xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent'>
                            Contact Info
                        </h3>
                        
                        <div className='space-y-4'>
                            <div className='flex flex-row items-center gap-4 group cursor-pointer'>
                                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-yellow-400/20 transition-all duration-300">
                                    <FaGithub className='text-xl text-white group-hover:text-yellow-400 transition-colors' />
                                </div>
                                <div className='flex flex-col text-left'>
                                    <span className='text-white font-bold'>GitHub</span>
                                    <a 
                                        href="https://github.com/prospi-dev" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className='text-white/70 hover:text-yellow-400 transition-colors text-sm'
                                    >
                                        @prospi-dev
                                    </a>
                                </div>
                            </div>
                            
                            <div className='flex flex-row items-center gap-4 group cursor-pointer'>
                                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-blue-400/20 transition-all duration-300">
                                    <FaLinkedin className='text-xl text-white group-hover:text-blue-400 transition-colors' />
                                </div>
                                <div className='flex flex-col text-left'>
                                    <span className='text-white font-bold'>LinkedIn</span>
                                    <a 
                                        href="https://www.linkedin.com/in/prospi-dev" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className='text-white/70 hover:text-blue-400 transition-colors text-sm'
                                    >
                                        Manuel Prosperi
                                    </a>
                                </div>
                            </div>
                            
                            <div className='flex flex-row items-center gap-4 group cursor-pointer'>
                                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-red-400/20 transition-all duration-300">
                                    <MdEmail className='text-xl text-white group-hover:text-red-400 transition-colors' />
                                </div>
                                <div className='flex flex-col text-left'>
                                    <span className='text-white font-bold'>Email</span>
                                    <a 
                                        href="mailto:manuprosperi04@gmail.com" 
                                        className='text-white/70 hover:text-red-400 transition-colors text-sm'
                                    >
                                        manuprosperi04@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className='flex flex-row items-center gap-4 group'>
                                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-green-400/20 transition-all duration-300">
                                    <FaMapMarkerAlt className='text-xl text-white group-hover:text-green-400 transition-colors' />
                                </div>
                                <div className='flex flex-col text-left'>
                                    <span className='text-white font-bold'>Location</span>
                                    <span className='text-white/70 text-sm'>Tenerife, Spain</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-xl rounded-xl p-6 text-white lg:row-span-1"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-center flex flex-col gap-8">
                            <h3 className='font-bold mb-3 bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent text-2xl'>
                                Let's Build Something Amazing!
                            </h3>
                            <p className="text-white/80 mb-4 text-md leading-relaxed lg:text-xl">
                                Feel free to reach out if you have any questions, want to discuss a project, or just want to connect! 
                                I am always open to new opportunities and collaborations.
                            </p>
                            <div className="flex justify-center">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-300 hover:to-orange-300 text-black font-semibold px-6 py-2 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg text-sm"
                                >
                                    Start a Conversation
                                    <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.p 
                    className="text-sm text-white/60 mt-12 pt-8 border-t border-white/20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    Designed & Built with ❤️ by Manuel Prosperi &copy; 2025
                </motion.p>
            </motion.section>
        </footer>
    )
}

export default contactme