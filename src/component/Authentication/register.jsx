import image1 from "../image/login1.png"

export default function Register() {
  return (
    <div className="">
        <div className="flex">
            <div className="1">Register</div>
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
               <p className="">
                <span  className="flex ">Confirm password</span>
                <input type="password" placeholder="confirm" />
               </p>
               <p>Already have account ?</p>
        </div>
         <button>Register</button>
     
    </div>
  );
}



