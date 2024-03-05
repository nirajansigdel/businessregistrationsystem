import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="flex justify-between bg-[#092169] px-24 py-10 items-center text-white text-center">
      <span className="font-extrabold">Logo</span>
      <ul className="flex gap-7 font-medium cursor-pointer font-white ">
        <li>
          <Link
            to="/"
            className={`${
              pathname === "/" ? "text-yellow-500 font-bold" : "text-white"
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/notice"
            className={`${
              pathname.includes("notice")
                ? "text-yellow-500 font-bold"
                : "text-white"
            }`}
          >
            Notice
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`${
              pathname.includes("about")
                ? "text-yellow-500 font-bold "
                : "text-white"
            }`}
          >
            About us
          </Link>
        </li>
      </ul>
      <div className="flex gap-6 font-medium cursor-pointer font-white ">
        <span className="font-semibold  border-2 rounded-md px-2 py-1">
          <Link to="/login">Login</Link>
        </span>
        <span className="font-semibold border-2 rounded-md px-2 py-1">
          <Link to="/register">Register</Link>
        </span>
      </div>
    </div>
  );
}
