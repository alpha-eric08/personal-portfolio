import React from 'react'
import { icon } from '../assets'

function Education() {
  return (
    <div className='py-20 mx-16'>
        <div className='flex font-medium text-xl gap-5'>
          <img className="h-7" src={icon} alt="" />
          <h1>EDUCATION</h1>
        </div>

         {/* My experience  */}

        <div>
         <div className="card border-t-black/10 mt-16  border-t-2 flex py-5 gap-10">
           <div className='border-r-2 border-black/10 p-16 text-lg'>
             <p>(2005-2007)</p>
           </div>
           <div className='grid place-content-center'>
             <p className='font-medium text-xl text-[#727171]'>Matric</p>
             <p className='text-lg font-medium '>80%</p>
           </div>
         </div> 
         <div className="card border-t-black/10 mt-16  border-t-2 flex py-5 gap-10">
           <div className='border-r-2 border-black/10 p-16 text-lg'>
             <p>(2005-2007)</p>
           </div>
           <div className='grid place-content-center'>
             <p className='font-medium text-xl text-[#727171]'>Matric</p>
             <p className='text-lg font-medium '>80%</p>
           </div>
         </div> 
         <div className="card border-t-black/10 mt-16  border-t-2 flex py-5 gap-10">
           <div className='border-r-2 border-black/10 p-16 text-lg'>
             <p>(2005-2007)</p>
           </div>
           <div className='grid place-content-center'>
             <p className='font-medium text-xl text-[#727171]'>Matric</p>
             <p className='text-lg font-medium '>80%</p>
           </div>
         </div> 
        </div>
    </div>
  )
}

export default Education


{/* 

      {}
    //   */}