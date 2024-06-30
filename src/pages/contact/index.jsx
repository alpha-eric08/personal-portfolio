import React from 'react'
import Reachout from '../../Components/Reachout'
import Forms from '../../Components/Forms'
import { contactbg } from '../../assets'
import Remark from '../../Components/Remark'

const Contactus = () => {
  return (
    <div id='contact'>
        <div>
          <img className='absolute h-[930px] w-screen' src={contactbg} alt="" />
          <div className='grid md:grid-cols-2 grid-cols-1 relative'>
            <Reachout />
            <Forms />
          </div>
          <div className='relative'>
            <Remark/>
          </div>
        </div>
    </div>
  )
}

export default Contactus