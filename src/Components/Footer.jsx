import { Facebook, Instagram, Mail, Smartphone, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#528c9b]  h-[300px] w-full'>
        <div className='text-lg font-normal md:flex justify-around grid  pt-10'>
            <div>
                <div className=' mx-auto w-8 mb-1'>
                    <Smartphone size={30} />
                </div>
                <h1>
                    <a href="#">+233 55 413 9957</a>
                </h1>
            </div>
            <div>
                <div className=' mx-auto w-8'>
                    <Mail size={30} />
                </div>
                <h1 >
                    <a href="#">email@domain.com</a>
                </h1>
            </div>
        </div>
        <div className='grid place-content-center'>
            <div className='flex justify-between mt-16 '>
                <a className='text-black hover:text-gray-400 my-3' href="#"><Facebook size={30} /></a>
                <a className='text-black hover:text-gray-400 my-3' href="#"><Twitter size={30} /></a>
                <a className='text-black hover:text-gray-400 my-3' href="#"><Instagram size={30}/></a>
            </div>
            <p className='font-normal text-sm'>© 2022 .Portfolio All  right reserved
            </p>
        </div>
    </div>
  )
}

export default Footer