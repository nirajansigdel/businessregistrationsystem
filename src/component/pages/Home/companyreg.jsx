import React from "react";
import cr1 from "../Home/image/cr1.png";
import cr2 from "../Home/image/cr2.png";
import cr3 from "../Home/image/cr3.png";
import cr4 from "../Home/image/cr4.png";
import cr5 from "../Home/image/cr5.png";
import cr6 from "../Home/image/cr6.png";
import cr7 from "../Home/image/cr7.png";

export default function CompanyReg() {
  const demo = () => [
    { title: "Real State", image: cr1 },
    { title: "Import/Export", image: cr2 },
    { title: "Online Shopping", image: cr3 },
    { title: "IT Company", image: cr4 },
    { title: "Hotel And Resort", image: cr5 },
    { title: "Media / News", image: cr6 },
    { title: "Job Agency", image: cr7 },
    { title: "Remittance", image: cr7 },
    { title: "NGO", image: cr7 },
    { title: "Consultancy", image: cr7 },
    { title: "Travel Agency", image: cr7 },
    { title: "Furniture", image: cr7 },
    { title: "Hospital / Clinic", image: cr7 },
    { title: "Agricultural Farm", image: cr7 },
    { title: "Montessori / College", image: cr7 },
    { title: "Auto Servicing, Recondition", image: cr7 },
  ];

  return (
    <div className="pl-16 flex flex-col justify-center items-center py-12 px-24 gap-12 bg-[#F2F5FF]">
      <div className="flex flex-col justify-center text-center text-[#092169]  gap-3 font-normal ">
        <span className="text-3xl font-bold ">
          Company registration for any industry{" "}
        </span>
        <span>
          Let us handle the registration so you can focus on your business.
        </span>
      </div>
      <div className=" flex flex-wrap w-3/4 justify-center  ">
        {demo().map((demo) => (
          <span className="flex  flex-col gap-3 mb-8 w-[215px] mr-6 justify-center items-center py-7 bg-white border-[1px] border-[#C5C5C5] rounded-xl">
            <img src={demo.image} alt="" srcset="" className="w-[65px] h-[65px]" />
            <span  className="font-normal" key={demo.title}>{demo.title}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
