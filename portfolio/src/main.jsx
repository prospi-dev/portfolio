import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header.jsx'
import Home from './components/home.jsx'
import Aboutme from './components/aboutme.jsx'
import Divider from './components/divider.jsx'
import { Education, Experience } from './components/education-experience.jsx'
const App = () => {

  return (
    <>
      <Header />
      <Home />
      <Divider />
      <Aboutme />
      <Divider />
      <Education />
      <Experience />
    </>
  )
};

createRoot(document.getElementById('root')).render(<App />);
