import React from 'react'
import { education } from '../../data/data'
import { motion } from 'framer-motion'

const Education = () => {
  return (
    <div className='bg-black text-white py-20 pb-30' id='education'>
        <div className='mx-auto px-8 md:px-16 lg:px-24'>
           <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1}}
           className='text-4xl font-bold uppercase text-center mb-12'>Education</motion.h1>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center  gap-8'>
             {
                education.map((e,id)=>(
                    <motion.div key={e.id} whileInView={{opacity:1,y:0}} initial={{opacity:0,y:100}} transition={{duration:1}}
                    className='bg-gray-950 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform
                     duration-300 hover:scale-105 flex flex-col items-center cursor-pointer'>
                        <div>
                        <img src={e.image} alt="" className='mt-8 h-20 w-20 rounded-lg scale-110 overflow-hidden bg-gray-300'/>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h2 className='mt-8 font-bold  text-transparent bg-clip-text
                             bg-gradient-to-r from-green-400 to-blue-500 text-center'>{e.name}</h2>
                             <p className='mt-2 text-gray-300 text-center'>{e.address}</p>
                             <p className='mt-2 text-white text-xl'>{e.year}</p>
                             <p className='mt-2 text-gray-300 text-center'>{e.class}</p>
                             <h2 className='mt-4 font-bold text-2xl text-transparent bg-clip-text
                             bg-gradient-to-r from-green-400 to-blue-500'>{e.grade}</h2>
                        </div>
                    </motion.div>
                ))
             }
           </div>
        </div>
    </div>
  )
}

export default Education