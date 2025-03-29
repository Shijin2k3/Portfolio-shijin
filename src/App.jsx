import { useState } from 'react'
import './App.css'
import ResponsiveNav from './components/Navbar/ResponsiveNav'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Education from './components/education/Education'

function App() {
 

  return (
  
      <div className='overflow-hidden'>
        <ResponsiveNav />
        <Hero />
        <About />
        <Education />
      </div>
     
    
  )
}

export default App
