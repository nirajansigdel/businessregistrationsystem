import React from 'react'
import { Link } from 'react-router-dom'

export default function Anav() {
    const logout=()=>{
        console.log("kkk")
    }
  return (
    <div className="flex justify-between bg-[#b0c7e4] font-medium  px-2 shadow-xl  py-7 items-center sticky top-0 z-10"> {/* Added 'sticky' and 'top-0' classes */}
      <span className="font-bold text-white "> User Name</span>
  <ul className="flex gap-7 font-medium cursor-pointer font-white ">
        <li><Link to="/admin"> Darta</Link></li>
        <li><Link to="/adepartment">Department</Link></li>
        <li><Link to="/astorage">Storage</Link></li>
   
      </ul>

    <span className="text-xl cursor-pointer text-white border-2 py-2 px-4 rounded-md " onClick={logout}>Logout</span>  
</div>
  )
}
