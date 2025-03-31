import React from 'react'
import { experiences } from '../../data/data'

const Experience = () => {
  return (
    <div className='bg-black text-white pb-20' id='contact'>
       <div className='mx-auto px-8 md:px-16 lg:px-24'>
          <h1 className='text-4xl font-bold uppercase text-center mb-20'>Experience</h1>
          {
               experiences.map((experience,id) =>(
                 <div key={experience.id} className='flex flex-col md:flex-row mb-8 md:justify-center'>
                   
                     <div className='w-full md:w-1/4 flex md:items-center'>
                       <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
                     </div>
                     <div className='w-full max-w-xl md:w-3/4'>
                       <h6 className='mb-2 font-semibold'>{experience.role} - <span className='text-sm'>{experience.company}</span></h6>
                      <p className='mb-4 text-neutral-400'> {experience.description}</p>
                       {
                        experience.technologies.map((tech,index) =>(
                          <span key={index} className='mr-2 mt-4 rounded bg-neutral-900
                           px-2 py-1 text-sm font-medium text-cyan-400'>{tech}</span>
                        ))
                       }
                     </div>
                     
                 </div>
          ))
        }
       </div>
    </div>
  )
}

export default Experience