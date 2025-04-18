import React from 'react'
import { Card } from '@mui/material'
import './App.css'


function App() {
 

  return (
    <>
  <Card
    sx={{
      width: '150px',
      height: '150px'
      
    }}>

      <p>Mary Connelly</p>
      <p>Web Developer</p>

  </Card>

  <Card>
    <ul>Languages
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
      <li>React</li>
      </ul>
  </Card>

  <Card>
    <ul>Dev Tools
      <li>GitHub & GitFlow</li>
      <li>Netlify</li>
      <li>VSCode</li>
      <li>React</li>
      <li>APIs</li>
      </ul>
  </Card>

  <Card>
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

  <Card>
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


      </>
  )
}

export default App
