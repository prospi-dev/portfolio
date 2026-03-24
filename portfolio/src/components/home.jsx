import React from 'react';
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import '../index.css'

const Home = () => (
  <section
    id="home"
    className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center"
  >
    <h2 className="text-2xl md:text-3xl font-medium mb-2">
      Hello! <span role="img" aria-label="wave">👋</span>
    </h2>
    <h1 className="text-3xl md:text-4xl font-bold mb-2">
      I’m <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]">Manuel Prosperi</span>,
      <br />
      <span className="font-normal text-gray-200">a Full-Stack Developer.</span>
    </h1>
    <p className="text-gray-400 max-w-lg mb-6">
      Passionate Full-Stack Developer with expertise in React, .NET, and modern web technologies.
      I create efficient, scalable applications and love solving complex problems through code.
    </p>
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
    <div className="home-button_container flex flex-col md:flex-row md:flex-wrap gap-4 justify-center items-center w-full max-w-2xl mt-4">

      <a
        href="#projects"
        className="w-[70%] md:w-[48%] relative group overflow-hidden bg-white/5 backdrop-blur-md text-white font-medium py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border border-white/20 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
        id='projects-button'
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

        <span className='relative z-10 transition-transform duration-300 group-hover:-translate-x-2'>My Projects</span>
        <FaArrowRight className="relative z-10 text-xl text-cyan-400 transition-all duration-300 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0" />
      </a>

      <a
        href="#contact"
        className="w-[70%] md:w-[48%] bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(192,38,211,0.5)] hover:shadow-[0_0_25px_rgba(192,38,211,0.8)] flex items-center justify-center py-3 hover:-translate-y-1"
        id="contact-button"
      >
        Contact Me
      </a>

      <a
        href="/files/Manuel-Prosperi-CV-EN.pdf"
        download
        className="bg-gray-900 w-[70%] md:w-[60%] mt-2 text-gray-400 font-medium py-3 rounded-xl transition-all duration-300 flex items-center justify-center border-b border-transparent hover:border-fuchsia-500 hover:text-fuchsia-400 group"
        id="downloadcv-button"
      >
        <span className="transition-transform duration-300 group-hover:-translate-y-1">Download CV</span>
      </a>
    </div>
  </section>

);

export default Home;