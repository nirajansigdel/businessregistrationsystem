import React from "react";
import { MdDeleteForever } from "react-icons/md";
import i1 from "./cr2.png"

export default function Udarta() {
  return (
    <div className="flex justify-center items-center  w-[1440px] ">
      <div className="flex flex-col w-[1000px] bg-[#F2F5FF] gap-5 py-10  items-center">
        <div className="flex text-3xl font-bold ">
          Company Registration form
        </div>
        <div className="flex flex-col  w-[900px]">
          <div className="bg-[#092169] text-white px-2 py-3">
            Company Details
          </div>
          <div className="flex flex-col gap-2 px-2">
            <span className="flex gap-4">
              <span className="flex font-medium ">
                Company Name(English)* :{" "}
              </span>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-[25vw] py-2 rounded-md pl-2 outline-none"
              />
            </span>
            <span className="flex gap-4">
              <span className="flex font-medium "> Company Type* : </span>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-[25vw] py-2 rounded-md pl-2 outline-none"
              />
            </span>
            <span className="flex">
              <span className="flex font-medium ">Capital structure : </span>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-[25vw] py-2 rounded-md pl-2 outline-none"
              />
            </span>
            <span className="flex">
              <span className="flex font-medium ">Company Address* : </span>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-[25vw] py-2 rounded-md pl-2 outline-none"
              />
            </span>
            <span className="flex">
              <span className="flex font-medium ">Company Phone Number : </span>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-[25vw] py-2 rounded-md pl-2 outline-none"
              />
            </span>
            <span className="flex">
              <span className="flex font-medium ">
                Company Email Address* :{" "}
              </span>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-[25vw] py-2 rounded-md pl-2 outline-none"
              />
            </span>
          </div>
        </div>
        <div className="flex flex-col w-[900px]">
         
          <div className="bg-[#092169] text-white px-2 py-3">Your document</div>
          <div className="flex flex-col px-2">
            {" "}
            <span>upload image 1</span>
            <span>upload  image 2</span>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="bg-[#092169] text-white px-2 py-3">
            Document Details
          </div>
          <div className="flex flex-col bg-white py-5 px-2 w-[900px]">
            <div className="flex justify-between">
              <span>image</span>
              <MdDeleteForever className="w-[24px] h-[24px]" />
            </div>
            <div>
              ......................................................................................................................................................................................................................................................................................
            </div>
            <div className="flex justify-between">
              <span>image</span>
              <MdDeleteForever className="w-[24px] h-[24px]" />
            </div>
          </div>
        </div>

        
        <button className="py-4 text-xl font-semibold bg-[#FFBB00] w-1/5 rounded-md ">
          Register Now
        </button>
      </div>
    </div>
  );
}
