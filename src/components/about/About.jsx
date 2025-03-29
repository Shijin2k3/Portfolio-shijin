import React from 'react'
import about from '../../assets/profile.webp'

const About = () => {
  return (
    <div className='bg-black text-white pb-10 ' id='about'>
        <div className=' mx-auto px-8 md:px-16 lg:px-24'>
            <h1 className='text-4xl font-bold uppercase text-center mb-12'>About Me</h1>
            <div className='flex flex-col md:flex-row  items-center md:space-x-12'>
                <img src={about} alt=""
                className='w-72 h-80 rounded object-cover mb-8 md:mb-0' />
             <div className='flex-1'>
                <p className='text-lg mb-8'>I'am a passionate Full Stack Web Developer, I specialize in creating dynamic and responsive web applications 
                      that deliver exceptional user experiences. With a strong foundation in both front-end technologies like HTML,
                       CSS, and JavaScript, and back-end frameworks such as Node.js and Express, I am adept at building seamless, scalable solutions.
                </p>
                <div className='space-y-4'>
                  <div className='flex items-center'>
                      <label htmlFor="htmlandcss" className='w-2/12'>HTML & CSS</label>
                      <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                         transform transition-transform duration-300 hover:scale-105 w-10/12 cursor-pointer'></div>
                      </div>
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="react" className='w-2/12'>React Js</label>
                      <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                         transform transition-transform duration-300 hover:scale-105 w-9/12 cursor-pointer'></div>
                      </div> 
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="node" className='w-2/12'>Node Js</label>
                      <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                         transform transition-transform duration-300 hover:scale-105 w-/12 cursor-pointer'></div>
                      </div> 
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="next" className='w-2/12'>Next Js</label>
                      <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                         transform transition-transform duration-300 hover:scale-105 w-8/12 cursor-pointer'></div>
                      </div> 
                  </div>
                </div>
              </div>
           </div>
        </div>
    </div>
  )
}

export default About