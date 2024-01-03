import React from "react";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className=" flex flex-col  text-center gap-7 px-24  bg-[#092169] text-white py-5  ">
      <div className="flex justify-between ">
        <div className="flex font-extrabold">BRS</div>

        <div className="flex flex-col gap-2">
          <span className=" font-semibold">Quick Links</span>
          <span className="flex flex-col gap-1 cursor-pointer">
            <Link to="/">Home</Link>
            <Link to="/notice">Notice</Link>
            <Link to="/about">About Us</Link>
     
      
          </span>
        </div>

        <div className="flex flex-col gap-3 items-center">
          <span className=" font-semibold">Contact US</span>
          <span className="flex flex-col gap-2 ">
            <span>9840000000</span>
            <span>abc@gmail.com</span>
            <span>Kathmandu ,Nepal</span>
          </span>
        </div>
        <div className="flex flex-col gap-3 ">
          <span className=" font-semibold">Follow Us</span>
          <span className="flex gap-2">
            <CiFacebook className="w-[24px] h-[24px]" />
            <CiInstagram className="w-[24px] h-[24px]" />
            <CiTwitter className="w-[24px] h-[24px]" />
          </span>
        </div>
      </div>
      <div className="">@2023 Business registration system |All Right Reserved.</div>
    </div>
  );
}
