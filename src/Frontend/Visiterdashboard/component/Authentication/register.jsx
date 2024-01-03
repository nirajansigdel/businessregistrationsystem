import React, { useState } from "react";
import image1 from "../../image/login1.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const Register =async (data) => {
    if (!email || !password || !confirmpassword) {
      await toast.error("field cannot be empty");
    }
    if(password!= confirmpassword){
      await toast.error("Password must be same")

    }
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*\W)(?!.*\s).*$/;
     if(!passwordRegex.test(password)){
      toast.error(" At least one digit, one uppercase letter, and one special character.")
     }
    try {
      // Make a POST request to the server's registration endpoint
      await axios.post('http://localhost:3000/api/register', { email, password });
      await toast.success("Register sucessfully!",{
       position:"top-center"
      });
      window.location='/login' ;    
      console.log('User registered successfully');
  
    } 
    catch (error) {
      console.error('Error registering user:', error);
    }

  };

  return (
    <div className="flex justify-center items-center h-[100vh] bg-[#D3E7FF] w-full ">
      <div className="bg-[#D3E7FF] gap-5 flex flex-col w-[28vw] py-5 justify-center items-center shadow-xl">
        <div className="flex flex-col justify-center items-center text-center gap-5 ">
          <div className="font-bold text-2xl">REGISTER</div>
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
            <input
              onChange={(e) => setpassword(e.target.value)}
              value={password}
              type="text"
              placeholder="Enter Your Password"
              className="w-[25vw] py-2 rounded-md pl-2  outline-none"
            />
          </p>
          <p className="flex gap-1 flex-col ">
            <span classNampe="flex font-medium "> Confirm Password</span>
            <input
              onChange={(e) => setconfirmpassword(e.target.value)}
              value={confirmpassword}
              type="text"
              placeholder="Confirm Password"
              className="w-[25vw] py-2 rounded-md pl-2  outline-none cursor-pointer"
            />
          </p>

          <input
            onClick={Register}
            type="button"
            value="Register"
            className="w-[25vw] rounded-md pl-2 outline-none  bg-[#2C3A64] py-2 text-white hover:text-slate-200"
          />
          <Link to="/login">
            <p className=" font-serif cursor-pointer">
              Already Have An Account ?
            </p>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
