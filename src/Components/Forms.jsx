import { Mail } from 'lucide-react'
import React from 'react'

const Forms = () => {
  return (
    <div className='bg-black  text-white px-6 md:px-32'>
        <div className=' font-medium text-4xl pt-28 pb-16'>
            <h1>Contact Me</h1>
        </div>
        <form>
            <div>
                <label htmlFor="name">Your Name</label>
                <div className='flex bg-white text-black gap-3 mt-3 mb-8 rounded pl-2'>
                    <Mail size={30}/>
                    <input type="text" placeholder='Enter your name' className='outline-none text-black w-full py-1 rounded' />
                </div>
            </div>
            <div>
                <label htmlFor="name">Your Name</label>
                <div className='flex bg-white text-black gap-3 mt-3 mb-8 rounded pl-2'>
                    <Mail size={30}/>
                    <input type="text" placeholder='Enter your name' className='outline-none text-black w-full py-1 rounded' />
                </div>
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <div className='flex bg-white text-black gap-3 md:mb-20 mt-3 rounded p-2'>
                    <textarea name="messages" placeholder='Enter your name' id="message" className='outline-none text-black w-full h-40 rounded resize-none'></textarea>
                </div>
            </div>
            <div className='md:pb-36 my-16 md:my-0'>
                <button className=' bg-white rounded font-medium text-black py-1 px-4 hover:bg-white/80 hover:text-black/80'>SEND MESSAGE</button>
            </div>
        </form>
    </div>
  )
}

export default Forms