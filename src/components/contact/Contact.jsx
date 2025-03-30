import React from 'react'
import contact from '../../assets/contact.jpg'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import { FaMapLocation } from 'react-icons/fa6'

const Contact = () => {
  return (
    <div className='bg-black text-white pb-20' id='contact'>
       <div className='mx-auto px-8 md:px-16 lg:px-24'>
          <h1 className='text-4xl font-bold uppercase text-center mb-20'>CONTACT ME</h1>
          <div className='flex flex-col md:flex-row  items-center md:space-x-12 md:gap-30'>
             <div className='mt-4 pb-8'>
                <img src={contact} alt="CONTACT" 
                className='w-72 h-80 rounded object-cover mb-8 md:mb-0'/>
             </div>
             <div className='flex flex-col  md:items-start mt-4 pb-8 p-2'>
                <h1 className='text-4xl font-semibold mb-4'>Let's talk</h1>
                <p className='text-lg text-gray-400 mb-4'>I'm Open to talk about web development projects and partneship projects </p>
                 <div className='mb-8 mt-4 text-white text-2xl mr-2 '>
                    <FaEnvelope className='inline-block' />
                    <span className='ml-1 md:ml-3 text-sm md:text-lg'>shijinkumar2003@gmail.com</span>
                 </div>
                 <div className='mb-8  text-white text-2xl mr-2 '>
                    <FaPhone className='inline-block' />
                    <span className='ml-3 text-sm md:text-lg'>858984118</span>
                 </div>
                 <div className='mb-8  text-white text-2xl mr-2 '>
                    <FaMapLocation className='inline-block' />
                    <span className='ml-3 text-sm md:text-lg'>Tamilnadu</span>
                 </div>
                  
             </div>
             
          </div>
       </div>
    </div>
  )
}

export default Contact