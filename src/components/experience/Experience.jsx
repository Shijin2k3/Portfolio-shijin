import React from 'react'
import { experiences } from '../../data/data'

const Experience = () => {
  return (
    <div className='bg-black text-white pb-20' id='contact'>
       <div className='mx-auto px-8 md:px-16 lg:px-24'>
          <h1 className='text-4xl font-bold uppercase text-center mb-20'>Experience</h1>
          {
               experiences.map((experience,id) =>(
                 <div key={experience.id} className='flex flex-col md:flex-row mb-8'>
                   
                     <div className='w-full md:w-1/4'>
                       <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
                     </div>
                     <div className='w-full max-w-xl md:w-3/4'>
                       <h6 className='mb-2 font-semibold'></h6>
                     </div>
                     
                 </div>
          ))
        }
       </div>
    </div>
  )
}

export default Experience