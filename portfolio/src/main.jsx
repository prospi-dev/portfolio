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
      <Divider />
      <Aboutme />
      <Divider2 />
      <Skills />
      <Divider />
      <section id="education-experience" className="flex flex-col items-center lg:flex-row lg:justify-center lg:gap-10">
        <Education />
        <Experience />
      </section>
      <Divider2 />
      <Projects />
      <Divider />
      <Contact />
    </>
  )
};

createRoot(document.getElementById('root')).render(<App />);
