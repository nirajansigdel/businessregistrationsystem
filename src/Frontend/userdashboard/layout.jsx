import React from 'react'
import Umain from './Unav'

export  const Ulayout=({children}) =>{
  return (
     <div className="w-full max-w-[1440px] flex justify-center items-centern flex-col gap-2">  
        <Umain/>
        <div className="flex flex-col gap-12 bg-[#F2F5FF] justify-center items-center">
            {children}
            </div>
    </div>
  )
}
