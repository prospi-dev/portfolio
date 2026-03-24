import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header.jsx'
import Home from './components/home.jsx'
import Aboutme from './components/aboutme.jsx'
import { Divider, Divider2 } from './components/divider.jsx'
import { Education, Experience } from './components/education-experience.jsx'
import Skills from './components/skills.jsx'
import Contact from './components/contactme.jsx'
import Projects from './components/projects.jsx'
const App = () => {

  return (
    <>
      <Header />
      <Home />
      <Aboutme />
      <Skills />
      <section id="education-experience" className="flex flex-col lg:flex-row gap-10 
                                                    items-center w-fit max-w-[95vw] lg:w-full mx-auto bg-white/5 backdrop-blur-lg border 
                                                    border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(0,0,0,0.3)]
                                                    lg:justify-center ">
        <Education />
        <Experience />
      </section>
      <Projects />
      <Contact />
    </>
  )
};

createRoot(document.getElementById('root')).render(<App />);
// flex flex-col items-center lg:flex-row lg:justify-center lg:gap-10