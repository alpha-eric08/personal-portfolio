import React from 'react'
import { pic } from '../assets'

const Banner = () => {
  return (
    <div className='bg-[#F1F5F6] md:h-screen w-full md:flex' id='home'>
        <div className='md:py-44 py-16 md:pl-12 px-4'>
            <h3 className=' md:text-6xl text-4xl font-extrabold'>Creative Product</h3>
            <h1 className='text-[#F36868]  text-6xl md:text-[140px] font-extrabold pb-3'>Designer</h1>
            <p className=' font-medium text-lg'>I work on with digital startups and entreprenurs on design
            and branding.need help on your project?  <span className='text-[#F36868] font-medium text-lg hover:text-[#6D7578]'><a href="#">say hello</a></span></p>
        </div>
        <div>
            <img src={pic} alt="pic" />
        </div>
    </div>
  )
}

export default Banner