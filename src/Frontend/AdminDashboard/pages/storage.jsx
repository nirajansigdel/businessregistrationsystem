import React from 'react'
import { Alayout } from '../layout'

export default function Astorage() {
  return (
    <Alayout>
      <div className='flex justify-center flex-col items-center gap-5 mt-5'>
      <span className='flex items-center gap-2 border-[4px] mb-4'>
        <span className=' font-regular pl-2'>Search Company</span>
        <input type="text" placeholder="" className="w-[20vw] py-2 rounded-md  outline-none " />
      </span>
    <table className='table-auto flex gap-10  '>
      <thead>
        <tr className='border border-red-800 flex gap-[76px] px-4 ml-4  py-4'>
          <th className="">Date</th>
          <th>Company Name</th>
          <th>Capital Struct</th>
          <th>Company Type</th>
          <th>Company Address</th>
          <th>Phone Number</th>
          <th>Email Address</th>
          <th>document</th>
   
         
        </tr>
      </thead>
      <tbody>
    
      </tbody>
    </table>
    </div>
    </Alayout>
  )
}
