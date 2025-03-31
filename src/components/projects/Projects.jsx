import React from 'react'
import travel from '../../assets/travel.png'
import shopsy from '../../assets/shopsy.png'
import cart from '../../assets/cart.png'
import todo from '../../assets/todo.png'
import res from '../../assets/res.png'
import etrack from '../../assets/etracker.png'
const Projects = () => {
  return (
    <div className='bg-black text-white pb-20' id='projects'>
        <div className='mx-auto px-8 md:px-16 lg:px-24'>
           <h1 className='text-4xl font-bold uppercase text-center mb-20'>PROJECTS</h1>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6 mb-12'>
               {/* project cards */}
              <div className='rounded-2xl border-4 border-cyan-400 p-4 hover:shadow-lg transform transition-transform
                     duration-300 hover:scale-105 flex flex-col items-center'>
                   <div className='mt-4'>
                      <img src={travel} alt="" className='w-60 h-40 rounded-2xl  border-1 border-neutral-800' />
                   </div>
                   <div className='flex flex-col items-center mb-4'>
                     <h1 className='mb-4 mt-4 text-2xl font-bold  text-transparent bg-clip-text
                             bg-gradient-to-r from-green-400 to-blue-500 text-center uppercase'>Travel- Website</h1>
                      <p className='text-lg text-gray-300'>NEXT JS </p>
                   </div>
                   <div className='flex flex-row justify-between gap-8 md:gap-30 mb-4'>
                       <a href="https://github.com/Shijin2k3/Travel-Website" className='rounded-2xl border-1 hover:border-neutral-800 border-cyan-300 py-2 px-5'>github</a>
                       <a href="https://travel-website-sable-two.vercel.app/" className='rounded-2xl border-1 hover:border-neutral-800 border-cyan-300 py-2 px-5'>Demo</a>
                   </div>  
              </div>
              <div className='rounded-2xl border-4 border-cyan-400 p-4 hover:shadow-lg transform transition-transform
                     duration-300 hover:scale-105 flex flex-col items-center'>
                   <div className='mt-4'>
                      <img src={shopsy} alt="" className='w-60 h-40 rounded-2xl  border-1 border-neutral-800'/>
                   </div>
                   <div className='flex flex-col items-center mb-4'>
                     <h1 className='mb-4 mt-4 text-2xl font-bold  text-transparent bg-clip-text
                             bg-gradient-to-r from-green-400 to-blue-500 text-center uppercase'>Shopsy</h1>
                      <p className='text-lg text-gray-300'>REACT JS</p>
                   </div>
                   <div className='flex flex-row justify-between gap-8 md:gap-30 mb-4'>
                       <a href="https://github.com/Shijin2k3/Shopsy" className='rounded-2xl border-1 hover:border-neutral-800 border-cyan-300 py-2 px-5'>github</a>
                       <a href="https://shopsy-ashy-nu.vercel.app/" className='rounded-2xl border-1 hover:border-neutral-800 border-cyan-300 py-2 px-5'>Demo</a>
                   </div>  
              </div>
              <div className='rounded-2xl border-4 border-cyan-400 p-4 hover:shadow-lg transform transition-transform
                     duration-300 hover:scale-105 flex flex-col items-center'>
                   <div className='mt-4'>
                   <img src={cart} alt="" className='w-60 h-40 rounded-2xl  border-1 border-neutral-800' />
                   </div>
                   <div className='flex flex-col items-center mb-4'>
                     <h1 className='mb-4 mt-4 text-2xl font-bold  text-transparent bg-clip-text
                             bg-gradient-to-r from-green-400 to-blue-500 text-center uppercase'>SHOPPING-CART</h1>
                      <p className='text-lg text-gray-300'>REACT JS</p>
                   </div>
                   <div className='flex flex-row justify-between gap-8 md:gap-30 mb-4'>
                       <a href="https://github.com/Shijin2k3/shopping-cart" className='rounded-2xl border-1 hover:border-neutral-800 border-cyan-300 py-2 px-5'>github</a>
                       <a href="https://shopping-cart-amber-ten.vercel.app/" className='rounded-2xl border-1 hover:border-neutral-800 border-cyan-300 py-2 px-5'>Demo</a>
                   </div>  
              </div>
              <div className='rounded-2xl border-4 border-cyan-400 p-4 hover:shadow-lg transform transition-transform
                     duration-300 hover:scale-105 flex flex-col items-center'>
                   <div className='mt-4'>
                   <img src={todo} alt="" className='w-60 h-40 rounded-2xl  border-1 border-neutral-800'/>
                   </div>
                   <div className='flex flex-col items-center mb-4'>
                     <h1 className='mb-4 mt-4 text-2xl font-bold  text-transparent bg-clip-text
                             bg-gradient-to-r from-green-400 to-blue-500 text-center uppercase'>TODO-LIST</h1>
                      <p className='text-lg text-gray-300'>MERN STACK</p>
                   </div>
                   <div className='flex flex-row justify-between gap-8 md:gap-30 mb-4'>
                       <a href="https://github.com/Shijin2k3/TODO-MERN" className='rounded-2xl border-1 hover:border-neutral-800 border-cyan-300 py-2 px-5'>github</a>
                   </div>  
              </div>
              <div className='rounded-2xl border-4 border-cyan-400 p-4 hover:shadow-lg transform transition-transform
                     duration-300 hover:scale-105 flex flex-col items-center'>
                   <div className='mt-4'>
                   <img src={res} alt="" className='w-60 h-40 rounded-2xl  border-1 border-neutral-800' />
                   </div>
                   <div className='flex flex-col items-center mb-4'>
                     <h1 className='mb-4 mt-4 text-2xl font-bold  text-transparent bg-clip-text
                             bg-gradient-to-r from-green-400 to-blue-500 text-center uppercase'>RES-LANDING-PAGE</h1>
                      <p className='text-lg text-gray-300'>HTML,CSS,JS</p>
                   </div>
                   <div className='flex flex-row justify-between gap-8 md:gap-30 mb-4'>
                       <a href="https://github.com/Shijin2k3/Restaurant-Landing-Page" className='rounded-2xl border-1 hover:border-neutral-800 border-cyan-300 py-2 px-5'>github</a>
                   </div>  
              </div>
              <div className='rounded-2xl border-4 border-cyan-400 p-4 hover:shadow-lg transform transition-transform
                     duration-300 hover:scale-105 flex flex-col items-center'>
                   <div className='mt-4'>
                   <img src={etrack} alt="" className='w-60 h-40 rounded-2xl  border-1 border-neutral-800'/>
                   </div>
                   <div className='flex flex-col items-center mb-4'>
                     <h1 className='mb-4 mt-4 text-2xl font-bold  text-transparent bg-clip-text
                             bg-gradient-to-r from-green-400 to-blue-500 text-center uppercase'>EXPENSE-TRACKER</h1>
                      <p className='text-lg text-gray-300'>REACT JS</p>
                   </div>
                   <div className='flex flex-row justify-between gap-8 md:gap-30 mb-4'>
                       <a href="https://github.com/Shijin2k3/Expense-Tracker" className='rounded-2xl border-1 hover:border-neutral-800 border-cyan-300 py-2 px-5'>github</a>
                       <a href="https://expense-tracker-rosy-three.vercel.app/" className='rounded-2xl border-1 hover:border-neutral-800 border-cyan-300 py-2 px-5'>Demo</a>
                   </div>  
              </div>
           </div>
        </div>
    </div>
  )
}

export default Projects