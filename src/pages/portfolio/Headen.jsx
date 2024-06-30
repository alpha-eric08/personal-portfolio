import React, { useState } from 'react'
import { data } from './data';

const Headen = () => {

  const [category, setCategory] = useState("all");

   const handlewebdev = (() => {
    <ItemsList data={data} category={category} />
     setCategory("WEBDESIGN");
   })


  

  return (
    <div className='mb-10 md:text-lg flex justify-center gap-5 md:gap-10'>
        <button>ALL</button>
        <button onClick={handlewebdev}>WEBDESIGN</button>
        <button>DEVELOPMENT</button>
        <button>PHOTOGRAPHY</button>
    </div>
  )
}

export default Headen