import React, { useState } from "react";
import image1 from "../../image/login1.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  
  const login = async () => {
    if (!email || !password) {
      alert("Field cannot be empty");
    }
    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        email,
        password,
      });
      const userRole = response.data.userDetail.role;
      setRole(userRole);
      localStorage.setItem("userProfile", JSON.stringify(response.data.userDetail))
      toast.success(" sucessfully!");
      if (userRole === "Admin") {
        window.location = "/admin";
        return;
      } else {
        localStorage.setItem("dartaDetails","{}");
        window.location = "/user";
      }
    } catch (error) {
      toast.error("Email or Password donot match");
    }
  };
  return (
    <div className="flex justify-center items-center h-[100vh] bg-[#D3E7FF] w-full ">
      <div className="bg-[#D3E7FF] gap-5 flex flex-col w-[28vw] py-5 justify-center items-center shadow-xl">
        <div className="flex flex-col justify-center items-center text-center gap-5 ">
          <div className="font-bold text-2xl">LOGIN</div>
          <img src={image1} alt="" srcset="" />
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <p className="flex gap-1 flex-col">
            <span className="flex font-medium "> Email/Username</span>
            <input
              onChange={(e) => setemail(e.target.value)}
              value={email}
              type="text"
              placeholder="Enter Your Name"
              className="w-[25vw] py-2 rounded-md pl-2 outline-none"
            />
          </p>

          <p className="flex gap-1 flex-col ">
            <span className="flex font-medium "> Password</span>
            <div className=" w-[25vw] rounded-md bg-white ">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                className="w-[23vw] py-2 rounded-md pl-2 mr-3 outline-none"
              />
              <button onClick={togglePasswordVisibility}>
                {showPassword ? (
                  <FaEyeSlash className="pr-1" />
                ) : (
                  <FaEye className="pr-1" />
                )}
              </button>
            </div>
          </p>

          <input
            onClick={login}
            type="button"
            value="Login"
            className="w-[25vw] rounded-md pl-2 outline-none  bg-[#2C3A64] py-2 text-white hover:text-slate-200"
          />
          <p className="font-serif">Forgot password ?</p>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}
