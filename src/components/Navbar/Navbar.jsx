import React from 'react'

import { Link } from 'react-scroll'
import { HiMiniBars3BottomLeft } from 'react-icons/hi2'
import { navItems } from '../../data/data'

const Navbar = ({openNav}) => {
  
  return (
    <div className='w-full h-[12vh] fixed bg-black text-white transition-all duration-200 z-[1000]'>
        <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
            <div>
                <h1 className='uppercase font-bold text-xl md:text-2xl italic'>SHIJIN</h1>
            </div>
            <div className='hidden lg:flex items-center space-x-10'>
              {navItems.map(({link,path})=>(
                <Link key={path} className="relative uppercase text-white text-base font-medium w-fit block after:block
                 after:content-[''] after:absolute after:h-[3px] after:bg-cyan-300 after:w-full after:scale-x-0 hover:after:scale-x-100
                  after:transition duration-300 after:origin-right"
                to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
              ))}
            </div>
            <div className='flex  items-center space-x-4'>
                <button className='hidden md:block md:px-12 md:py-2.5 px-8 py-2 text-black
                 text-base  bg-white hover:bg-gray-200
                  transition-all duration-200 rounded-lg'>Connect Me</button>

                  <HiMiniBars3BottomLeft  onClick={openNav}  className='w-8 h-8 cursor-pointer text-white lg:hidden'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar