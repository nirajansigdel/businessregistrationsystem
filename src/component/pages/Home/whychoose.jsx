import React from "react";
import w1 from "./image/1.png";
import w2 from "./image/2.png";
import w4 from "./image/4.png";
import w5 from "./image/5.png";

export default function WhyChoose() {
  const demo = () => [
    {
      title: "Expert Guidence",
      image: w1,
      des: "Navigate the registration process with the support of seasoned professionals dedicated to your success.",
    },

    {
      title: " Customized Solutions",
      image: w2,
      des: " Tailor your registration experience to fit your business needs for a personalized approach.",
    },

    {
      title: "Compliance Assurance",
      image: w2,
      des: "Our team is dedicated to assisting you at every step, ensuring clarity and confidence.",
    },

    {
      title: "Streamlined Processes",
      image: w4,
      des: "Experience a seamless and efficient registration journey on our user-friendly platform.",
    },

    {
      title: "Resource Empowerment",
      image: w5,
      des: "Unlock a wealth of resources, support, and networking opportunities to propel your business forward.",
    },
  ];
  return (
    <div className="pl-16 flex flex-col justify-center items-center py-12 px-24 gap-12 ">
   
        <span className="text-3xl font-bold flex justify-center text-center text-[#092169]  gap-3  ">
        Why Choose US{" "}
        </span>
      <div className=" flex flex-wrap  justify-center  text-center ">
        {demo().map((demo) => (
          <span className="flex  flex-col gap-3 mb-8 w-[225px] px-3 justify-center  items-center py-5 mr-7 bg-white shadow-xl rounded-xl">
            <img
              src={demo.image}
              alt=""
              srcset=""
              className="w-[65px] h-[65px]"
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
