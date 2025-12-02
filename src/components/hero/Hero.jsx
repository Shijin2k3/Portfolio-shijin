import React from 'react'
import profile from '../../assets/hero.jpg'
import {motion} from 'framer-motion'
 
const container=(delay) =>({
  hidden:{x:-100,opacity:0},
  visible:{
    x:0,opacity:1,
    transition:{duration:0.5,delay:delay}
  }
})

const Hero = () => {
  return (
    <div className='bg-black pb-10'  id='home'>
    <div className='relative w-full   mt-10 bg-black text-white py-20'>
      <div className='w-[90%] xl:w-[80%] m-auto flex flex-col md:flex-row  items-center md:space-x-12 '>
         <div className='w-full lg:w-[50%] '>
            <div className='flex flex-col items-center justify-center  md:items-start'>
              <motion.h1 variants={container(0)} initial='hidden' animate='visible' 
              className='pb-16 text-4xl font-medium tracking-tight lg:mt-16 lg:text-6xl '>SHIJIN KUMAR</motion.h1>
              <motion.span variants={container(0.5)} initial='hidden' animate='visible'
               className='bg-gradient-to-r from-green-300  via-slate-400 to-cyan-400
               font-medium bg-clip-text text-2xl tracking-tight text-transparent'>
                Full Stack Web Developer
              </motion.span>
              <motion.p variants={container(1)} initial='hidden' animate='visible'
               className=' max-w-xl text-lg mb-8 py-6 font-light tracking-tighter '>I'am a passionate Full Stack Web Developer, I specialize in creating dynamic and responsive web applications 
                that deliver exceptional user experiences. With a strong foundation in both front-end technologies like HTML,
                 CSS, and JavaScript, and back-end frameworks such as Node.js and Express, I am adept at building seamless, scalable solutions</motion.p>
            </div>
         </div>
         <div className='w-full  lg:w-[50%] flex items-center justify-center hover:shadow-lg transform transition-transform
                     duration-300 hover:scale-105'>
            <motion.img initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,delay:1.2}}
            src={profile} alt="profile" className='w-70 h-70 md:w-85 md:h-85 object-cover rounded-full border-3 border-cyan-400' />
         </div>

        
      </div>
      
    </div>
    </div>
  )
}

export default Hero