import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header.jsx'
const App = () => {

  return (
    <>
      <Header />
    </>
  )
};

createRoot(document.getElementById('root')).render(<App />);
