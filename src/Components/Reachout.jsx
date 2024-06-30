import { Mail } from 'lucide-react'
import React from 'react'

const Reachout = () => {
  return (
    <div className='mx-6 text-white md:mx-32 mb-10 pt-20 md:mb-0 md:pt-28'>
        <div>
            <h1 className='font-medium  text-6xl'>Have a Project in mind?</h1>
            <p className=' font-normal text-xl py-28 md:py-32 w-80'>Reach out to us . We can make something togeather</p>
        </div>
        <div className='flex justify-between pt-20'>
             <div className='hover:bg-black hover:px-5 hover:py-3 rounded-md cursor-pointer transition-all duration-300 ease-out'>
                <div className='flex justify-center mb-5'>
                    <Mail size={30} />
                </div>
                <h1 >
                    <a href="#">email@domain.com</a>
                </h1>
            </div>
            <div className='hover:bg-black hover:px-5 hover:py-3 rounded-md cursor-pointer transition-all duration-300 ease-out'>
                <div className='flex justify-center mb-5'>
                    <Mail size={30} />
                </div>
                <h1 >
                    <a href="#">email@domain.com</a>
                </h1>
            </div>
            
        </div>
        <div className='flex justify-center mt-10 hover:bg-black hover:px-5 hover:py-3 rounded-md cursor-pointer transition-all duration-300 ease-out'>
            <div>
              <div className='flex justify-center mb-5'>
                <Mail size={30} />
              </div>
              <h1 >
                <a href="#">email@domain.com</a>
              </h1>
            </div>
        </div>
    </div>
  )
}

export default Reachout