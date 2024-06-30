import React from 'react'
import { icon } from '../assets'

const DevSkills = () => {
  return (
    <div className='pb-20 mx-16'>
        <div className='flex font-medium text-xl gap-5'>
          <img className="h-7" src={icon} alt="" />
          <h1>DEVELOPMENT SKILLS</h1>
        </div>

        {/* My Development Skills */}
        <div>
            <div>
                <p className='mt-12'>Php 85%</p>
                <progress min="0" max="100" value="85" className=' accent-[#ff9936] w-full rounded-full h-2'/>
            </div>
            <div>
                <p className='mt-12'>Java 60%</p>
                <progress min="0" max="100" value="60" className=' accent-[#ff9936] w-full rounded-full h-2'/>
            </div>
            <div>
                <p className='mt-12'>Html 50%</p>
                <progress min="0" max="100" value="50" className=' accent-[#ff9936] w-full rounded-full h-2'/>
            </div>
            <div>
                <p className='mt-12'>UI/UX 90%</p>
                <progress min="0" max="100" value="90" className=' accent-[#ff9936] w-full rounded-full h-2'/>
            </div>
        </div>

    </div>
  )
}

export default DevSkills