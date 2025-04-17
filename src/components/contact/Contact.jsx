import React from 'react'
import contact from '../../assets/contact.jpg'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import { FaMapLocation } from 'react-icons/fa6'
import resume from '../../assets/resume.pdf'
import { motion } from 'framer-motion'


const Contact = () => {
  return (
    <div className='bg-black text-white pb-20'  id='contact'>
       <div className='mx-auto px-8 md:px-16 lg:px-24'>
          <h1 className='text-4xl font-bold uppercase text-center mb-20'>CONTACT ME</h1>
          <div className='flex flex-col md:flex-row  items-center md:space-x-12 md:gap-30'>
             <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.5,delay:0}}
             className='mt-4 pb-8'>
                <img src={contact} alt="CONTACT" 
                className='w-72 h-80 rounded object-cover mb-8 md:mb-0'/>
             </motion.div>
             <div className='flex flex-col  md:items-start mt-4 pb-8 p-2'>
                <motion.h1 whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.5,delay:0.5}}
                className='text-4xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Let's talk</motion.h1>
                <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.5,delay:1}}
                 className='text-lg text-gray-400 mb-4'>I'm Open to talk about web development projects and partneship projects </motion.p>
                 <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.5,delay:1.5}}
                 className='mb-8 mt-4 text-white text-2xl mr-2 '>
                    <FaEnvelope className='inline-block' />
                    <span className='ml-1 md:ml-3 text-sm md:text-lg'>shijinkumar2003@gmail.com</span>
                 </motion.div>
                 <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.5,delay:1.5}}
                 className='mb-8  text-white text-2xl mr-2 '>
                    <FaPhone className='inline-block' />
                    <span className='ml-3 text-sm md:text-lg'>+91-8589841118</span>
                 </motion.div>
                 <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.5,delay:1.5}}
                 className='mb-8  text-white text-2xl mr-2 '>
                    <FaMapLocation className='inline-block' />
                    <span className='ml-3 text-sm md:text-lg'>Tamilnadu</span>
                 </motion.div>
                 <motion.a whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.5,delay:1.5}}
                 href={resume} download='Shijin_Resume.pdf'>
                  <button className='font-medium md:px-6 md:py-2.5 px-4 py-2 text-black
                                   text-base  bg-cyan-400 hover:bg-cyan-300
                                   cursor-pointer transition-all duration-200 rounded-lg'>Download Resume</button>
                  </motion.a>
                  
             </div>
             
          </div>
       </div>
    </div>
  )
}

export default Contact