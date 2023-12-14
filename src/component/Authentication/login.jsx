import React from "react";
import image1 from "../image/login1.png";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-[100vh] bg-[#D3E7FF] w-full ">
    <div className="bg-[#D3E7FF] gap-5 flex flex-col w-[28vw] py-5 justify-center items-center shadow-xl">
      <div className="flex flex-col justify-center items-center text-center gap-5 ">
        <div className="font-bold text-2xl">LOGIN</div>
        <img src={image1} alt="" srcset="" />
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <p className="flex gap-1 flex-col">
          <span className="flex font-medium "> Email/Username</span>
          <input type="text" placeholder="Enter Your Name" className="w-[25vw] py-2 rounded-md pl-2 outline-none"/>
        </p>
        <p className="flex gap-1 flex-col ">
          <span classNampe="flex font-medium "> Password</span>
          <input type="password" placeholder="Enter Your Password" className="w-[25vw] py-2 rounded-md pl-2  outline-none" />
        </p>

      <input type="button" value="Login" className="w-[25vw] rounded-md pl-2 outline-none  bg-[#2C3A64] py-2 text-white hover:text-slate-200" />
      <p className="font-serif">Forgot password ?</p>
      </div>
    </div>
    </div>
  );
}
