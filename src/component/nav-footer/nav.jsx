import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Nav() {
  return (
    <div className="flex justify-between bg-[#092169] px-24 py-10 items-center text-white  text-center">
      <span className="font-extrabold">Logo</span>
      <ul className="flex gap-7 font-medium cursor-pointer font-white ">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/notice"> Notice</Link></li>
        {/* <li><Link to="/darta">Admindash</Link></li> */}
        <li><Link to="/usermain">Udash</Link></li>
        <li><Link to='/about'>About us</Link></li>
      </ul>
      <div className="flex gap-6 font-medium cursor-pointer font-white ">
        <span className="tfont-semibold bg-[#FFBB00]  rounded-md px-2 py-1"><Link to="/login">Login</Link></span>
        <span className=" font-semibold bg-[#FFBB00]  rounded-md px-2 py-1"><Link to="/register">Register</Link></span>
        <span className=" font-semibold bg-[#FFBB00]  rounded-md px-2 py-1 md:hidden">Log Out</span>
      </div>
    </div>
  );
}
