import React from "react";

export default function Nav() {
  return (
    <div className="flex justify-between bg-[#092169] px-24 py-10 items-center text-white">
      <span className="font-extrabold">Logo</span>
      <ul className="flex gap-7 font-medium cursor-pointer font-white ">
        <li>Home</li>
        <li>Notice</li>
        <li>Darta</li>
        <li>About us</li>
      </ul>
    </div>
  );
}
