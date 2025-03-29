import React from 'react'
import profile from '../../assets/Hero.jpg'

const Hero = () => {
  return (
    <div className='bg-black' id='home'>
    <div className='relative w-full h-[120vh] sm:h-[100vh] mt-10 bg-black text-white py-20'>
      <div className='w-[90%] xl:w-[80%] m-auto flex flex-col md:flex-row  items-center md:space-x-12 '>
         <div className='w-full lg:w-[50%] '>
            <div className='flex flex-col items-center lg:items-start'>
              <h1 className='pb-16 text-4xl font-medium tracking-tight lg:mt-16 lg:text-6xl'>SHIJIN KUMAR</h1>
              <span className='bg-gradient-to-r from-green-300  via-slate-400 to-cyan-400
               bg-clip-text text-2xl tracking-tight text-transparent'>
                Full Stack Web Developer
              </span>
              <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>I'am a passionate Full Stack Web Developer, I specialize in creating dynamic and responsive web applications 
                that deliver exceptional user experiences. With a strong foundation in both front-end technologies like HTML,
                 CSS, and JavaScript, and back-end frameworks such as Node.js and Express, I am adept at building seamless, scalable solutions</p>
            </div>
         </div>
         <div className='w-full lg:w-[50%] flex items-center justify-center'>
            <img src={profile} alt="profile" className='w-85 h-85 object-cover mb-8 md:mb-0 rounded-full' />
         </div>

        
      </div>
      
    </div>
    </div>
  )
}

export default Hero