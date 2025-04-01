import { useEffect, useState } from 'react'
import './App.css'
import ResponsiveNav from './components/Navbar/ResponsiveNav'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Education from './components/education/Education'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Experience from './components/experience/Experience'
import { Loading } from './components/loader/Loader'


function App() {
  const [isLoading,setIsLoading]=useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  if(isLoading) return <Loading />

  return (
  
      <div className='overflow-hidden'>
        <ResponsiveNav />
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
     
    
  )
}

export default App
