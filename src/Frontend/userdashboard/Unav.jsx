import React from "react";

import { Link } from "react-router-dom";
import { IoNotifications } from "react-icons/io5";
export default function Umain() {
  const logout = () => {
    const ok = window.confirm("Are You Sure to logout");
    if (ok) {
      window.location = "/";
    }
  };

  return (
    <div className="flex justify-between bg-[#092169] font-medium  px-5 shadow-xl  py-6 items-center sticky top-0 z-10">
      {/* Added 'sticky' and 'top-0' classes */}
      <div>
      <Link to="/user">
      <span className="font-bold text-white ">Client</span>
        </Link>
      <Link to="/user/wallet">
      <span className="font-bold text-white ml-4">Payment</span>
        </Link>
        <Link to="/user/form-tracker">
      <span className="font-bold text-white ml-4">Progress Tracker</span>
        </Link>
      </div>
     
      <ul className="flex gap-2"></ul>
      <div className="flex items-center gap-5">
        <Link to="/unotification">
          <IoNotifications className="w-[30px] h-[30px] text-white " />
        </Link>
        <span
          className="font-semibold border-2 rounded-md px-2 py-1  text-white "
          onClick={logout}
        >
          Logout
        </span>
      </div>
    </div>
  );
}
