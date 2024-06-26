import { Menu, X } from 'lucide-react';
import React, { useState } from 'react'

const Navbar = () => {
      let Links =[
        {name:"HOME",link:"#home"},
        {name:"PORTFOLIO",link:"#portfolio"},
        {name:"SKILLS",link:"#skills"},
        {name:"SERVICES",link:"#services"},
        {name:"CONTACT",link:"#contact"},
      ];

      let [open,setOpen]=useState(false);

  return (
    <div className='  w-full fixed z-10 top-0 left-0'>
      <div className='md:flex items-center justify-between py-1 md:px-10 px-7'>
      <div>
          <a href="/"><img src="" alt="logo" className='rounded-xl h-16 md:ml-10'/></a>
       </div>
       <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
       {open ?<X/> : <Menu />}
       </div>
       <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
         {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8   md:my-0 my-7'>
              <a href={link.link} className=' hover:text-[#F36868] active:text-[#F36868] duration-500 text-lg font-inter text-[#6D7578] font-semibold'>{link.name}</a>
            </li>
          ))
        }
       </ul>
      </div>
    </div>
   )
 }

export default Navbar
