import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header.jsx'
import Home from './components/home.jsx'
const App = () => {

  return (
    <>
      <Header />
      <Home />
    </>
  )
};

createRoot(document.getElementById('root')).render(<App />);
