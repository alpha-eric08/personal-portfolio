import React from 'react'
import { icon } from '../../assets'

const Services = () => {
  return (
    <div className='bg-[#F1F5F6] px-12 py-20' id='services'>
      <h1 className='font-medium text-4xl pb-12'>SERVICES</h1>

      {/* The services i provide */}
      
      <div className='grid md:grid-cols-2 mx-auto md:w-[1150px]'>
        <div className="w-96">
          <div className="flex gap-5 font-medium text-xl">
            <img className='h-7' src={icon} alt="" />
            <h2>BRAND DESIGN</h2>
          </div>
          <p className=' pt-5 pb-10 ml-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac, proin dolor maecenas cras ultrices.</p>
        </div>
        <div className="w-96">
          <div className="flex gap-5 font-medium text-xl">
            <img className='h-7' src={icon} alt="" />
            <h2>GAME DEVELOPMENT</h2>
          </div>
          <p className=' pt-5 pb-10 ml-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac, proin dolor maecenas cras ultrices.</p>
        </div>
        <div className="w-96">
          <div className="flex gap-5 font-medium text-xl">
            <img className='h-7' src={icon} alt="" />
            <h2>WEB DESIGN</h2>
          </div>
          <p className=' pt-5 pb-10 ml-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac, proin dolor maecenas cras ultrices.</p>
        </div>
        <div className="w-96">
          <div className="flex gap-5 font-medium text-xl">
            <img className='h-7' src={icon} alt="" />
            <h2>MARKETING</h2>
          </div>
          <p className=' pt-5 pb-10 ml-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac, proin dolor maecenas cras ultrices.</p>
        </div>
        <div className="w-96">
          <div className="flex gap-5 font-medium text-xl">
            <img className='h-7' src={icon} alt="" />
            <h2>GAME DEVELOPMENT</h2>
          </div>
          <p className=' pt-5 pb-10 ml-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac, proin dolor maecenas cras ultrices.</p>
        </div>
        <div className="w-96">
          <div className="flex gap-5 font-medium text-xl">
            <img className='h-7' src={icon} alt="" />
            <h2>UI/UX DESIGNER</h2>
          </div>
          <p className=' pt-5 pb-10 ml-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac, proin dolor maecenas cras ultrices.</p>
        </div>
      </div>
    </div>
  )
}

export default Services