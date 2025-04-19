import React from 'react'
import { Card } from '@mui/material'
import './App.css'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {

  return (
    <>
  <ResponsiveAppBar>
  <Router>
      <ResponsiveAppBar /> {/* AppBar always visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </ResponsiveAppBar>
  <Home>

  <Card
    sx={{
      width: '100vw',
      height: '600px',
      placeSelf: 'center',
      alignContent:'center',
      justifyItems: 'center',
    }}>
      <p
      style={{
        fontSize: '60px',
        color: '#006C67',
      }}>Mary Connelly</p>
      
      <p style={{
        fontSize: '40px', 
        color: '#003844'
      }}>Web Developer</p>

  </Card>
      </Home>

      <Skills>

  <Card
    sx={{
      width: '150px',
      height: '150px',
    }}>
    <ul>Languages
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
      <li>React</li>
      </ul>
  </Card>

  <Card
    sx={{
      width: '150px',
      height: '150px',
    }}>
    <ul>Dev Tools
      <li>GitHub & GitFlow</li>
      <li>Netlify</li>
      <li>VSCode</li>
      <li>React</li>
      <li>APIs</li>
      </ul>
  </Card>
  </Skills>
  
  <Experience>


  <Card
    sx={{
      width: '150px',
      height: '150px',
    }}>
    <ul>Experience
      <li>
        <p>2022</p>
        <p>Store Manager & Women's Buyer</p>
        <p>Fontenelle Supply Co.</p>
      </li>

      <li><p>2019</p>
        <p>ESL Teacher & Private Tutor</p>
        <p>VIPKid, Self-Employed</p></li>

      <li><p>2014</p>
        <p>Teacher & Team Leader</p>
        <p>Elkhorn Public Schools</p></li>
     </ul>

  </Card>

  <Card
    sx={{
      width: '150px',
      height: '150px',
    }}>
    <ul>Education
      <li>
        <p>2015</p>
        <p>Peru State College</p>
        <p>Curriculum & Instruction</p>
      </li>

      <li><p>2009</p>
        <p>University of Nebraska at Omaha</p>
        <p>Secondary Education with endorsements in English & History</p></li>

     </ul>     
  </Card>
      </Experience>

      <Contact>
        
      </Contact>


      </>
  )
}

export default App
