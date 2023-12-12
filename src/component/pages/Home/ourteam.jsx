import React from "react";
import t1 from "./image/t1.png";
import t2 from "./image/t2.png";
import t3 from "./image/t3.png";
import t4 from "./image/t4.png";

export default function OurTeam() {
  const demo = () => [
    {
      title: "Nirajan Sigdel",
      image: t1,
      des: "CEO",
    },

    {
      title: "Yuvraj Badu",
      image: t2,
      des: "Legal Expert",
    },

    {
      title: "Sostika Upreti",
      image: t3,
      des: "Manager",
    },

    {
      title: "Suzal Sigdel",
      image: t4,
      des: "Data Protection Officer",
    },

    {
      title: "Unique Badu",
      image: t4,
      des:"Registration Specialist",
    },
  ];
  return (
    <div className="pl-16 flex flex-col justify-center items-center py-12 px-24 gap-7 ">
   
        <span className="text-3xl font-bold flex justify-center text-center text-[#092169]  ">
        Our team{" "}
        </span>
      <div className=" flex flex-wrap justify-center  text-center gap-5 ">
        {demo().map((demo) => (
          <span className="flex  flex-col justify-center  items-center w-[150px] gap-1">
            <img
              src={demo.image}
              alt=""
              srcset=""
              className="w-[120px] h-[120px]"
            />
            <span className="font-bold text-[#092169] " key={demo.title}>
              {demo.title}
            </span>
            <span>{demo.des}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
