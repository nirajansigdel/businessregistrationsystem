import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="flex justify-between bg-[#092169] px-24 py-10 items-center text-white text-center">
      <span className="font-extrabold">Logo</span>
      <ul className="flex gap-7 font-medium cursor-pointer font-white ">
        <li>
          <Link to="/" activeClassName="active" className="text-red">
            Home
          </Link>
        </li>
        <li>
          <Link to="/notice" activeClassName="active" className="text-red">
            Notice
          </Link>
        </li>
        <li>
          <Link to="/about" activeClassName="active" className="text-red">
            About us
          </Link>
        </li>
      </ul>
      <div className="flex gap-6 font-medium cursor-pointer font-white ">
        <span className="font-semibold  border-2 rounded-md px-2 py-1">
          <Link to="/login" >
            Login
          </Link>
        </span>
        <span className="font-semibold border-2 rounded-md px-2 py-1">
          <Link to="/register" >
            Register
          </Link>
        </span>
      </div>
    </div>
  );
}
