import React from 'react'
import { FaBootstrap, FaCss3Alt, FaGithub, FaHtml5, FaJsSquare, FaNodeJs, FaPython } from 'react-icons/fa'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

const Skills = () => {
  return (
    <div className='bg-black text-white pb-10'>
        <div className='mx-auto px-8 md:px-16 lg:px-24'>
           <h1 className='text-4xl font-bold uppercase text-center mb-12'>What i do</h1>
             <div className='flex flex-wrap items-center justify-center gap-4'>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsLine  className='text-cyan-300 text-7xl'/>
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <TbBrandNextjs  className='text-gray-400 text-7xl'/>
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiMongodb  className='text-green-500 text-7xl'/>
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaNodeJs  className='text-green-600 text-7xl'/>
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaHtml5  className='text-orange-400 text-7xl'/>
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaCss3Alt  className='text-blue-400 text-7xl'/>
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaJsSquare  className='text-yellow-300 text-7xl'/>
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaPython  className='text-yellow-300 text-7xl'/>
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaGithub  className='text-white text-7xl'/>
                </div>
               
             </div>
        </div>
    </div>
  )
}

export default Skills