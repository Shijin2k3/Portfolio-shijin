import React from 'react'
import { FaCss3Alt, FaGithub, FaHtml5, FaJsSquare, FaNodeJs, FaPython } from 'react-icons/fa'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { motion } from 'framer-motion'

const iconVariants=(duration)=>({
    inital:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:'linear',
            repeat:Infinity,
            repeatType:'reverse'
        }
    }
})

const Skills = () => {
  return (
    <div className='bg-black text-white pb-10' id='skills'>
        <div className='mx-auto px-8 md:px-16 lg:px-24'>
           <h1 className='text-4xl font-bold uppercase text-center mb-12'>What i do</h1>
             <motion.h2 whileInView={{opacity:1,x:0}} initial={{opacity:0,x:90}} transition={{duration:0.4}}
              className='text-xl font-medium text-center text-gray-400 mb-12'>" CRAZY FULLSTACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK "</motion.h2>

             <div className='flex flex-wrap items-center justify-center gap-4 mb-12'>
                <motion.div variants={iconVariants(2.5)} initial='initial' animate='animate'
                className='rounded-2xl border-4 border-neutral-800 p-4 hover:shadow-lg transform transition-transform
                     duration-300 hover:scale-105'>
                    <RiReactjsLine  className='text-cyan-300 text-7xl'/>
                </motion.div>
                <motion.div  variants={iconVariants(3)} initial='initial' animate='animate'
                className='rounded-2xl border-4 border-neutral-800 p-4 hover:shadow-lg transform transition-transform
                     duration-300 hover:scale-105'>
                    <TbBrandNextjs  className='text-gray-400 text-7xl'/>
                </motion.div>
                <motion.div variants={iconVariants(5)} initial='initial' animate='animate' 
                className='rounded-2xl border-4 border-neutral-800 p-4 hover:shadow-lg transform transition-transform
                     duration-300 hover:scale-105'>
                    <SiMongodb  className='text-green-500 text-7xl'/>
                </motion.div>
                <motion.div variants={iconVariants(2.5)} initial='initial' animate='animate'
                 className='rounded-2xl border-4 border-neutral-800 p-4 hover:shadow-lg transform transition-transform
                     duration-300 hover:scale-105'>
                    <FaNodeJs  className='text-green-600 text-7xl'/>
                </motion.div>
                <motion.div variants={iconVariants(3)} initial='initial' animate='animate'
                 className='rounded-2xl border-4 border-neutral-800 p-4 hover:shadow-lg transform transition-transform
                     duration-300 hover:scale-105'>
                    <FaHtml5  className='text-orange-400 text-7xl'/>
                </motion.div>
                <motion.div variants={iconVariants(5)} initial='initial' animate='animate'
                className='rounded-2xl border-4 border-neutral-800 p-4 hover:shadow-lg transform transition-transform
                     duration-300 hover:scale-105'>
                    <FaCss3Alt  className='text-blue-400 text-7xl'/>
                </motion.div>
                <motion.div variants={iconVariants(2.5)} initial='initial' animate='animate'
                className='rounded-2xl border-4 border-neutral-800 p-4 hover:shadow-lg transform transition-transform
                     duration-300 hover:scale-105'>
                    <FaJsSquare  className='text-yellow-300 text-7xl'/>
                </motion.div>
                <motion.div variants={iconVariants(3)} initial='initial' animate='animate'
                className='rounded-2xl border-4 border-neutral-800 p-4 hover:shadow-lg transform transition-transform
                     duration-300 hover:scale-105'>
                    <FaPython  className='text-yellow-300 text-7xl'/>
                </motion.div>
                <motion.div variants={iconVariants(5)} initial='initial' animate='animate'
                className='rounded-2xl border-4 border-neutral-800 p-4 hover:shadow-lg transform transition-transform
                     duration-300 hover:scale-105'>
                    <FaGithub  className='text-white text-7xl'/>
                </motion.div>
               
             </div>
             <div className='flex items-center justify-center mb-10 mt-20'>
                 <a href='https://github.com/Shijin2k3' >
                    <button className='font-medium md:px-12 md:py-2.5 px-4 py-2 text-black
                     text-base  bg-cyan-400 hover:bg-cyan-300
                    cursor-pointer transition-all duration-200 rounded-lg'>View Github</button>
                 </a>
             </div>
             
        </div>
    </div>
  )
}

export default Skills