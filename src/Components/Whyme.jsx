import { ArrowRight, MoveRight } from 'lucide-react'
import React from 'react'

const Whyme = () => {
  return (
    <div className=' bg-[#F1F5F6] py-20 pl-5 md:px-14'>
        <h1 className='text-black/50 font-medium text-5xl mb-5' >Why Me?</h1>

        <div className='grid md:grid-cols-2 '>
            <div>
                <h2 className='text-6xl py-10 lowercase '>I HELP YOU TO MAKE BEAUTIFUL WEBSITES</h2>
                <p className='md:w-[500px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis et, elementum, eu quis morbi arcu lectus. Vivamus est nibh id curabitur urna cursus amet. Sagittis tempor enim at montes, quis id pretium. Ac fermentum enim euismod non.</p>
            </div>
            <div>
                <div className='grid md:grid-cols-2'>
                    <div className='text-[#F36868] flex gap-4 border-b-2 border-[#F85D5D]/10 mr-10 my-10 pb-3'>
                        <MoveRight size={40}/>
                        <h1 className='text-black  text-xl hover:border-b-2 hover:border-black hover:ease-in hover:mx-3 mt-1'>Web design</h1>
                    </div>
                    <div className='text-[#F36868] flex gap-4 border-b-2 border-[#F85D5D]/10 mr-10 pb-3'>
                        <MoveRight size={40}/>
                        <h1 className='text-black text-xl hover:border-b-2 hover:border-black hover:ease-in hover:mx-3 mt-1'>Graphic & print</h1>
                    </div>
                    <div className='text-[#F36868] my-10 flex gap-4 border-b-2 border-[#F85D5D]/10 mr-10 pb-3'>
                        <MoveRight size={40}/>
                        <h1 className='text-black text-xl hover:border-b-2 hover:border-black hover:ease-in hover:mx-3 mt-1'>iOS design</h1>
                    </div>
                    <div className='text-[#F36868] md:my-10 flex gap-4 border-b-2 border-[#F85D5D]/10 mr-10 pb-3'>
                        <MoveRight size={40}/>
                        <h1 className='text-black text-xl hover:border-b-2 hover:border-black hover:ease-in hover:mx-3 mt-1'>Frot-end development</h1>
                    </div>
                    <div className='text-[#F36868] my-10 flex gap-4 border-b-2 border-[#F85D5D]/10 mr-10 pb-3'>
                        <MoveRight size={40}/>
                        <h1 className='text-black text-xl hover:border-b-2 hover:border-black hover:ease-in hover:mx-3 mt-1'>User experience</h1>
                    </div>
                    <div className='text-[#F36868] md:my-10 flex gap-4 border-b-2 border-[#F85D5D]/10 mr-10 pb-3'>
                        <MoveRight size={40}/>
                        <h1 className='text-black text-xl hover:border-b-2 hover:border-black hover:ease-in hover:mx-3 mt-1'>Branding</h1>
                    </div>
                    <div className='text-[#F36868] my-10 flex gap-4 border-b-2 border-[#F85D5D]/10 mr-10 pb-3'>
                        <MoveRight size={40}/>
                        <h1 className='text-black text-xl hover:border-b-2 hover:border-black hover:ease-in hover:mx-3 mt-1'>Back-end development</h1>
                    </div>
                    <div className='text-[#F36868] md:my-10 flex gap-4 border-b-2 border-[#F85D5D]/10 mr-10 pb-3'>
                        <MoveRight size={40}/>
                        <h1 className='text-black text-xl hover:border-b-2 hover:border-black hover:ease-in hover:mx-3 mt-1'>Responsive design</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Whyme