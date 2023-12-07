import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainHome from './Components/home/Main.Home'
import About from './Components/About/About';
import Services from './Components/Service/Services';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';


function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contactus" element={<Contact />} />
          


        </Routes>
      </Router>
    </>
  )
}

export default App
