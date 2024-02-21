import React from 'react'
import hero1 from "./image/hero1.png";
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <div className='mt-0.5 flex px-24 py-6 bg-[#092169] justify-center items-center gap-3'>
    <div className='flex flex-col gap-10'>
       <div className=' flex flex-col'>
          <span className='flex text-5xl font-bold text-white'>Elevate Your Business  </span>
          <span  className='text-[#FFBB00]  text-5xl font-bold pt-2 pb-4'>Instant Registration, Limitless Potentials.</span>
          <p className='text-white'>Register with BRS to unleash the full potential of your enterprise. </p>
       </div>
       <Link to='/register'> <button className='py-4 text-xl font-semibold bg-[#FFBB00] border border-white w-1/4 rounded-md hover:text-white'>Register Now</button></Link>
      
       </div>
   <img src={hero1} alt="" srcset="" className='w-[500px] h-[500px] '/>
   </div>
  )
}
