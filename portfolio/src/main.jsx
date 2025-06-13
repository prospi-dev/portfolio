import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header.jsx'
import Home from './components/home.jsx'
import Aboutme from './components/aboutme.jsx'
import Divider from './components/divider.jsx'
import Skills from './components/skills.jsx'
const App = () => {

  return (
    <>
      <Header />
      <Home />
      <Divider />
      <Aboutme />
      <Skills />
      <Divider />
    </>
  )
};

createRoot(document.getElementById('root')).render(<App />);
