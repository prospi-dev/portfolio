import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaGithub, FaLinkedin,FaArrowRight } from "react-icons/fa";
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
      I’m <span className="text-yellow-400">Manuel Prosperi</span>,
      <br />
      <span className="font-normal">a Full-Stack Developer.</span>
    </h1>
    <p className="text-gray-300 max-w-md mb-6">
      I’m a passionate Web Developer recently graduated in Web Application Development. I’m interested in both frontend and backend development.
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
    <div className="home-button_container flex flex-col gap-4 items-center">
      <a
        href="#projects"
        className="neon-btn3 flex items-center justify-center gap-2 shadow group overflow-hidden" 
        id='projects-button'
      >
        <span className='transition-transform duration-300 group-hover:translate-x-5'>My Projects</span> <FaArrowRight className="text-xl text-white transition-transform duration-300 group-hover:translate-x-20 group-hover:scale-110" />
      </a>
      <a
        href="#contact"
        className="bg-yellow-400 hover:bg-yellow-300 text-[#222] font-medium rounded-xl transition shadow flex items-center justify-center"
        id="contact-button"
      >
        Contact Me
      </a>
      <a
        href="/cv.pdf"
        download
        className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 rounded-xl transition flex items-center justify-center gap-2 border border-gray-400 group overflow-hidden"
        id="downloadcv-button"
      >
        <span className="text-white transition-transform duration-500 group-hover:-translate-x-100">Download CV</span>
        <MdOutlineFileDownload className="text-2xl text-white transition-transform duration-300 group-hover:-translate-x-13 group-hover:scale-110" />
      </a>
    </div>
  </section>
);

export default Home;