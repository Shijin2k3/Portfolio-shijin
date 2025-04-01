import React from 'react'
import about from '../../assets/profile.webp'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='bg-black text-white pb-10 ' id='about'>
        <div className=' mx-auto px-8 md:px-16 lg:px-24'>
            <h1 className='text-4xl font-bold uppercase text-center mb-12'>About Me</h1>
            <div className='flex flex-col lg:flex-row  items-center lg:space-x-12'>
                <motion.img src={about} alt="" whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.5}}
                className='w-72 h-80 rounded object-cover mb-8 lg:mb-0' />
             <div className='flex-1'>
                <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.5}}
                className='text-lg mb-8'>I'am a passionate Full Stack Web Developer, I specialize in creating dynamic and responsive web applications 
                      that deliver exceptional user experiences. With a strong foundation in both front-end technologies like HTML,
                       CSS, and JavaScript, and back-end frameworks such as Node.js and Express, I am adept at building seamless, scalable solutions.
                </motion.p>
                <motion.div className='space-y-4' whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.5}}>
                  <div className='flex items-center gap-16 md:gap-0'>
                      <label htmlFor="frontend" className='w-2/12'>Frontend</label>
                      <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                         transform transition-transform duration-300 hover:scale-105 w-10/12 cursor-pointer'></div>
                      </div>
                  </div>
                  <div className='flex items-center gap-16 md:gap-0'>
                      <label htmlFor="backend" className='w-2/12'>Backend</label>
                      <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                         transform transition-transform duration-300 hover:scale-105 w-10/12 cursor-pointer'></div>
                      </div> 
                  </div>
                  <div className='flex items-center gap-16 md:gap-0'>
                      <label htmlFor="programming" className='w-2/12'>Programming</label>
                      <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                         transform transition-transform duration-300 hover:scale-105 w-9/12 cursor-pointer'></div>
                      </div> 
                  </div>
               </motion.div>
              </div>
           </div>
        </div>
    </div>
  )
}

export default About