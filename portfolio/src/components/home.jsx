import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import Button from "./ui/Button.jsx";
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
      <span className="font-normal text-gray-200">a Full Stack Developer.</span>
    </h1>
    <h2 className="text-lg md:text-xl font-medium text-cyan-300 mb-4">
      Full Stack Developer | Backend Technical Lead (Java · Spring Boot) | Vue.js 3 · MySQL · JWT
    </h2>
    <p className="text-gray-400 max-w-lg mb-6">
      I'm a Full Stack Developer specializing in backend architecture with Java and Spring Boot, and in building dynamic interfaces with Vue.js 3. I currently lead the backend area for Domitila, a corporate ERP system for HR management and social projects, setting architecture, security, and code quality standards for a 5-person development team. I complement this experience with independent, end-to-end software development in the .NET/React ecosystem, demonstrating command of core backend fundamentals independently of the framework.
    </p>
    <div className="flex gap-6 justify-center mb-6">
      <a
        href="https://github.com/prospi-dev"
        target="_blank"
        rel="noopener noreferrer"
        className="neon-icon transition hover:scale-110"
        aria-label="GitHub"
      >
        <FaGithub className="text-3xl text-white" />
      </a>
      <a
        href="https://www.linkedin.com/in/manuel-prosperi-664425274/"
        target="_blank"
        rel="noopener noreferrer"
        className="neon-icon transition hover:scale-110"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="text-3xl text-white" />
      </a>
    </div>
    <div className="flex flex-col md:flex-row md:flex-wrap gap-4 justify-center items-center w-full max-w-2xl mt-4">

      <Button
        href="#projects"
        variant="secondary"
        className="w-[70%] md:w-[48%] relative group overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

        <span className='relative z-10 transition-transform duration-300 group-hover:-translate-x-2'>My Projects</span>
        <FaArrowRight className="relative z-10 text-xl text-cyan-400 transition-all duration-300 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0" />
      </Button>

      <Button href="#contact" variant="primary" className="w-[70%] md:w-[48%]">
        Contact Me
      </Button>

      <Button
        href="/files/Manuel_Prosperi_CV_EN.pdf"
        download
        variant="ghost"
        className="w-[70%] md:w-[60%] mt-2 group"
      >
        <span className="transition-transform duration-300 group-hover:-translate-y-1">Download CV</span>
      </Button>
    </div>
  </section>

);

export default Home;