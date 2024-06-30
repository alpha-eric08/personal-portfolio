import { Facebook, Instagram, Mail, Smartphone, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#F1F5F6] w-full pb-10'>
        <div className='text-lg font-normal md:flex justify-around grid  pt-10'>
            <div className='hover:bg-black hover:px-5 my-10 md:my-0 hover:py-3 rounded-md cursor-pointer transition-all duration-300 ease-out hover:text-white'>
                <div className=' mx-auto w-8 mb-1'>
                    <Smartphone size={30} />
                </div>
                <h1>
                    <a href="0554139957">+233 55 413 9957</a>
                </h1>
            </div>
            <div className='hover:bg-black hover:px-5 my-10 md:my-0 hover:py-3 rounded-md cursor-pointer transition-all duration-300 ease-out hover:text-white'>
                <div className='flex justify-center'>
                    <Mail size={30} />
                </div>
                <h1 >
                    <a href="owusuansaheric08@gmail.com">owusuansaheric08@gmail.com</a>
                </h1>
            </div>
            
        </div>
        <div className='grid place-content-center'>
            <div className='flex justify-between mt-16 '>
                <a className='text-black hover:text-gray-400 my-3' href="#"><Facebook size={30} /></a>
                <a className='text-black hover:text-gray-400 my-3' href="#"><Twitter size={30} /></a>
                <a className='text-black hover:text-gray-400 my-3' href="#"><Instagram size={30}/></a>
            </div>
            <p className='font-normal text-sm'>© 2024 .Portfolio All  right reserved
            </p>
        </div>
    </div>
  )
}

export default Footer