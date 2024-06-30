import React from 'react'
import { data } from './data';

const Images = () => {
  return (
<div className='md:mx-40'>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      {data.map((item) => (
        <div
          key={item.id}
          className={`relative h-[450px] md:w-[450px] bg-cover bg-center`}
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className="absolute inset-0 bg-[#F36868]/50 transition-all duration-300 ease-in-out opacity-0 hover:opacity-100">
            <div className="absolute mx-20 mt-40">
              <h1 className="text-2xl font-semibold text-white cursor-pointer">
                {item.title}
              </h1>
              <p className='text-white text-center font-semibold pt-10'>{item.description}</p>
              {/* <p className="text-sm font-light text-white cursor-pointer mt-2 hover:bg-white transition-all duration-300 ease-out hover:text-black hover:p-4">
                {item.description}
              </p> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Images