import React from 'react'
import { FaArrowUp, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaMailBulk } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-10'>
        <div >
            <div className='border-t  border-gray-600 pt-4 flex flex-col md:flex-row
                 justify-between items-center'>
                <p className='text-gray-300'>
                    &copy; {new Date().getFullYear()}
                </p>
                <div className='flex space-x-4 my-4 md:my-0'>
                    <a href="#">
                      <FaFacebook  className='text-lg text-gray-400 hover:text-white'/>
                    </a>
                    <a href="#">
                      <FaLinkedin  className='text-lg text-gray-400 hover:text-white'/>
                    </a>
                    <a href="https://github.com/Shijin2k3">
                      <FaGithub  className='text-lg text-gray-400 hover:text-white'/>
                    </a>
                    <a href="#">
                      <FaInstagram  className='text-lg text-gray-400 hover:text-white'/>
                    </a>
                </div>
                <div className='flex space-x-4'>
                    <a href="#" className=' text-gray-400 hover:text-white'>
                        Privacy
                    </a>
                    <a href="#" className='text-gray-400 hover:text-white'>
                        Terms Of Services
                    </a>
                </div>
            </div>
              {/* scroll */}
            <div id='icon-box' className='hover:bg-gray-800 hover:text-cyan-400 p-3 rounded-full
             bg-cyan-400 text-black cursor-pointer fixed lg:bottom-6 right-6 
              bottom-6'>
             <Link to='home' spy={true} offset={-100} smooth={true}>
             <FaArrowUp className='w-[35px] h-[35px] '/>
             </Link>
            </div>
        </div>
        
    </footer>
  )
}

export default Footer