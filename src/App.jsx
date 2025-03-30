import { useState } from 'react'
import './App.css'
import ResponsiveNav from './components/Navbar/ResponsiveNav'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Education from './components/education/Education'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'

function App() {
 

  return (
  
      <div className='overflow-hidden'>
        <ResponsiveNav />
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
      </div>
     
    
  )
}

export default App
