import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header.jsx'
import Home from './components/home.jsx'
import Aboutme from './components/aboutme.jsx'
import { Education, Experience } from './components/education-experience.jsx'
import Skills from './components/skills.jsx'
import Contact from './components/contactme.jsx'
import Projects from './components/projects.jsx'

const ParticlesBackground = lazy(() => import('./components/particlesBackground.jsx'));

const App = () => {

  return (
    <>
      <Suspense fallback={null}>
        <ParticlesBackground />
      </Suspense>
      <Header />
      <main className="flex flex-col gap-24 md:gap-20 pt-20 pb-24 overflow-x-hidden">
        <Home />
        <Aboutme />
        <Skills />
        <section id="education-experience" className="flex flex-col gap-12 w-full max-w-3xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 md:p-10 lg:p-12 shadow-[0_0_40px_rgba(0,0,0,0.3)]">
          <Education />
          <Experience />
        </section>
        <Projects />
        <Contact />
      </main>
    </>
  )
};

createRoot(document.getElementById('root')).render(<App />);
// flex flex-col items-center lg:flex-row lg:justify-center lg:gap-10