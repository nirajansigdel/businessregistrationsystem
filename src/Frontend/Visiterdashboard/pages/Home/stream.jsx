import React from "react";
import hero1 from "./image/hero1.png";

export default function Stream() {
  return (
    <div className="mt-0.5 flex w-[1460px] px-24 py-6  gap-48 ">
      <img src={hero1} alt="" srcset="" className="w-[500px] h-[500px] " />
      <div className="flex flex-col gap-5 ">
        <span className="flex text-4xl font-bold text-center text-[#092169]">
          Streamlined Company Registration Services in Nepal
        </span>
        <p className="flex flex-col text-[#5C5C5C] gap-2">
          <span>
            {" "}
            <span className="font-medium">
              Business Registration System (BRS)
            </span>{" "}
            emerges as a leading service provider for company registration,
            bringing a fresh perspective and a commitment to excellence in the
            industry. Our dedicated team acknowledges the complexities and time
            constraints associated with the company registration process.{" "}
          </span>
          <span>
            <span className="font-medium">Our mission is clear — </span> to
            deliver services that are not only efficient but also hassle-free.
            We understand the intricacies involved in registering a company and
            aim to simplify the experience for our clients.
          </span>
          <span>
            {" "}
            At BRS, we take pride in our outstanding services, having
            successfully assisted numerous clients in seamlessly registering
            their businesses. Trust us to guide you through the process with
            expertise and dedication, making your journey into entrepreneurship
            smoother and more rewarding.{" "}
          </span>
        </p>
      </div>
    </div>
  );
}
