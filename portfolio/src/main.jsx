import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header.jsx'
import Home from './components/home.jsx'
import Aboutme from './components/aboutme.jsx'
import Divider from './components/divider.jsx'
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
      <Skills />
      <Divider />
      <Education />
      <Experience />
      <Divider />
      <Projects />
      <Contact />
    </>
  )
};

createRoot(document.getElementById('root')).render(<App />);
