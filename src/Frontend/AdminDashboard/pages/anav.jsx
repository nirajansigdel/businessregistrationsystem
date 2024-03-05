import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Anav() {
  const { pathname } = useLocation();
  const logout = () => {
    const isConfirmed = window.confirm("Are you sure you want to log out?");
    if (isConfirmed) {
      window.location = "/";
    }
  };

  return (
    <div className="flex justify-between bg-[#092169] font-medium  px-5 shadow-xl  py-7 items-center sticky top-0 z-10">
      {" "}
      {/* Added 'sticky' and 'top-0' classes */}
      <span className="font-bold text-white "> Admin</span>
      <ul className="flex gap-7 font-medium cursor-pointer text-white ">
        <li>
          {" "}
          <Link
            to="/admin"
            className={`${
              pathname === "/admin" ? "text-yellow-500 font-bold" : "text-white"
            }`}
          >
            Darta
          </Link>
        </li>
        <li>
          {" "}
          <Link
            to="/astorage"
            className={`${
              pathname === "/astorage"
                ? "text-yellow-500 font-bold"
                : "text-white"
            }`}
          >
            Storage
          </Link>
        </li>
        <li>
          {" "}
          <Link
            to="/admin/report"
            className={`${
              pathname === "/astorage"
                ? "text-yellow-500 font-bold"
                : "text-white"
            }`}
          >
            Report
          </Link>
        </li>
      </ul>
      <span
        className="text-xl cursor-pointer text-white border-2 py-2 px-4 rounded-md "
        onClick={logout}
      >
        Logout
      </span>
    </div>
  );
}
