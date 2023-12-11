import React from 'react'
import hero1 from "./image/hero1.png";

export default function HeroSection() {
  return (
    <div className='mt-0.5 flex px-24 py-6 bg-[#092169] justify-center items-center gap-3'>
    <div className='flex flex-col '>
       <div className=' flex flex-col'>
          <span className='flex text-5xl font-bold text-white'>Elevate Your Business  </span>
          <span  className='text-[#FFBB00]  text-5xl font-bold pt-2 pb-4'>Instant Registration, Limitless Potentials.</span>
          <p className='text-white'>Register with BRS to unleash the full potential of your enterprise. </p>
       </div>
       <button>Register Now</button>
       </div>
   <img src={hero1} alt="" srcset="" className='w-[500px] h-[500px] '/>
   </div>
  )
}
