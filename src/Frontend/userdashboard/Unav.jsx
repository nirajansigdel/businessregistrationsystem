import React from "react";

import { Link } from "react-router-dom";
import { IoNotifications } from "react-icons/io5";
export default function Umain() {
  const logout=()=>{
    window.confirm("ARE You Sure to lagout")

  }
  

  return (
    
    <div className="flex justify-between bg-[#b0c7e4] font-medium  px-2 shadow-xl  py-6 items-center sticky top-0 z-10"> {/* Added 'sticky' and 'top-0' classes */}
      <span className="font-bold text-white "> User Name</span>
      <ul className="flex gap-2">
  </ul>
   <div className="flex items-center gap-5">
      <Link to="/unotification">
      <IoNotifications className="w-[30px] h-[30px] text-white " />
    </Link> 
    <span className="text-xl cursor-pointer text-white border-2 py-2 px-4 rounded-md " onClick={logout}>Logout</span> 
    </div>  
</div>

)


  }