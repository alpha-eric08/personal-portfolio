import { Mail } from 'lucide-react'
import React from 'react'

const Forms = () => {
  return (
    <div className='bg-black h-[1000px] text-white'>
        <div>
            <h1>Contact Me</h1>
        </div>
        <form action="">
            <div>
                <label htmlFor="name">Your Name</label>
                <div className='flex bg-red-400'>
                    <Mail />
                    <input type="text" placeholder='Enter your name' className='outline-none text-black' />
                </div>
            </div>
        </form>
    </div>
  )
}

export default Forms