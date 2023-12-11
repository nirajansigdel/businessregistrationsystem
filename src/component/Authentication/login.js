import React from 'react'
import image1 from "../image/login1.png"

export default function 
Login() {
  return (
    <div>



<div className="flex">
            <div className="1">Login</div>
             <img src={image1} alt="" srcset="" />
        </div>
        <div className="our">
               <p className="">
                <span  className="flex "> Email/Username</span>
                <input type="text" placeholder="your username" />
               </p>
               <p className="">
                <span  className="flex "> password</span>
                <input type="password" placeholder="your password" />
               </p>
               
               <p>Forgot password ?</p>
        </div>
         <button>Login</button>
    </div>
  )
}
