import React from "react";
import c1 from "./cr2.png";
import { Link } from "react-router-dom";

export default function umain() {
  const demo = () => [
    { title: "Darta", img: c1, to: "/adarta" },
    { title: "Notification", img: c1, to: "/adepartment" },
    
  ];

  return (
    <div className="flex flex-col gap-4 bg-[#b0c7e4] w-[1400px]  min-h-full ">
      <div className="flex justify-between px-2  shadow-xl text-white py-4">
        <span className="font-bold"> User type</span>
        <span className="font-semibold flex gap-3 justify-center items-center ">
          <span>nirajan</span>
          <img
            src={c1}
            alt=""
            srcset=""
            className="w-[40px] h-[40px] rounded-full bg-[#D3E7FF] p-1"
          />
        </span>
      </div>

      <div className="flex  gap-7 px-1">
        <div className="flex flex-col bg-[#6786ad]  gap-96 w-1/5 py-3 sticky top-0">
          <ul className="flex flex-col gap-2">
            <Link to="/udarta">
              <li className="bg-[#D3E7FF]   px-2 py-4 flex font-medium cursor-pointer font-white ">
                Darta
              </li>
            </Link>
            <Link to="/adepartment">
              {" "}
              <li className="bg-[#D3E7FF]   px-2 py-4 flex font-medium cursor-pointer font-white ">
                Notification
              </li>
            </Link>
         
            
          </ul>
          <button
            type="button"
            className="bg-[#D3E7FF] font-medium cursor-pointer   py-4"
          >
            {" "}
            Log Out
          </button>
        </div>
        <div className="flex  gap-7 justify-center ">
          {demo().map((demo) => (
            <Link to={demo.to}>
              <span className="flex  w-[40vh] bg-[#D3E7FF] h-[35vh] rounded-lg gap-3 items-center justify-center flex-col font-semibold ">
                <img src={demo.img} alt="" srcset="" />
                <span> {demo.title}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
