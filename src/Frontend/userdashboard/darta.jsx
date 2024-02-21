import { useState } from "react";
import { Ulayout } from "./layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dartaimage from "./dartaimage.png";
import { MdDeleteForever } from "react-icons/md";

export default function Udarta() {
  const [name, setname] = useState("");
  const [type, settype] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [date, setdate] = useState("");
  const [document, setdocument] = useState(null);
  const [detail, setdetail] = useState(false);
  const [previous, setprevious] = useState(false);

  const edit = () => {
    setprevious(false);
    setdetail(false);
  };

  const deletedocument = () => {
    const confirms = window.confirm("Are you sure");
    if (confirms) {
      setdocument(null);
    }
  };

  const registerbusiness = () => {
    if (
      !name ||
      !type ||
      !address ||
      !phone ||
      !email ||
      !date ||
      !document
    ) {
      toast.error("Fields cannot be empty");
      return;
    }
    // Validate phone number format (10 digits)
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    toast.error("Phone number must contain 10 digits");
    return;
  }
 // Validate email format (contains '@' symbol)
 if (!email.includes("@")) {
  toast.error("Email must contain '@' symbol");
  return;
}


    // Validate date format
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(date)) {
    toast.error("Date must be in the format YYYY-MM-DD");
    return;
  }

  

 



    setdetail(true);
  };
  const submitconfirm = async () => {
    const isConfirm = window.confirm("Are you sure to register");

    if (isConfirm) {
      try {
        // Upload document to Cloudinary
        const formData = new FormData();
        formData.append("file", document);
        formData.append("upload_preset", "nirajan");
        formData.append("cloud_name", "dy6obggnfn");

        const cloudinaryResponse = await fetch(
          "https://api.cloudinary.com/v1_1/dy6obggnf/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );
        console.log(document);
        if (!cloudinaryResponse.ok) {
          const cloudinaryErrorData = await cloudinaryResponse.json();
          console.error("Cloudinary Upload Error:", cloudinaryErrorData);
          return;
        }

        const cloudinaryData = await cloudinaryResponse.json();
        console.log("Cloudinary Upload Response:", cloudinaryData);
        console.log("sucess");

        // Send data to backend
        const backendResponse = await fetch(
          "http://localhost:3000/api/register-darta",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              type,
              phone,
              address,
              email,
              date,
              document: cloudinaryData.secure_url,
            }),
          }
        );

        if (backendResponse.ok) {
          const backendData = await backendResponse.json();
          console.log("Backend Response:", backendData);

          // Clear form data if the backend operation is successful
          setname("");
          settype("");
          setphone("");
          setaddress("");
          setemail("");
          setdate("");
          setdocument(null);
          setprevious(false);
          setdetail(false);
        } else {
          console.error("Backend Error:", backendResponse.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <Ulayout>
      {!detail && !previous ? (
        <>
          <img src={dartaimage} alt="" />
          <div className="flex flex-col  items-center gap-5 py-5 pb-16 ">
            <div className="flex text-3xl font-bold pb-4 text-[#092169]">
              Company Registration form
            </div>
            <div className="flex flex-col gap-5 w-[900px]">
              <div className="bg-[#092169] text-white px-2 py-3">
                Company Details
              </div>
              <div className="flex flex-col gap-4 px-2">
                <span className="flex">
                  <span className="flex font-medium  w-[210px]">
                    {" "}
                    Company Name(English)*{" "}
                  </span>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="w-[25vw] py-2 rounded-md pl-2 outline-none"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                  />
                </span>
                <span className="flex">
                  <span className="flex font-medium    w-[210px]">
                    {" "}
                    Company Type* :{" "}
                  </span>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    value={type}
                    onChange={(e) => settype(e.target.value)}
                    className="w-[25vw] py-2 rounded-md pl-2 outline-none"
                  />
                </span>
              
                <span className="flex">
                  <span className="flex font-medium w-[210px]">
                    Company Address* :{" "}
                  </span>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="w-[25vw] py-2 rounded-md pl-2 outline-none"
                    value={address}
                    onChange={(e) => setaddress(e.target.value)}
                  />
                </span>
                <span className="flex">
                  <span className="flex font-medium   w-[210px]">
                    Company Phone Number :{" "}
                  </span>
                  <input
                    type="text"
                    placeholder="98000000000"
                    className="w-[25vw] py-2 rounded-md pl-2 outline-none"
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                  />
                </span>
                <span className="flex">
                  <span className="flex font-medium w-[210px] ">
                    Company Email Address* :{" "}
                  </span>
                  <input
                    type="text"
                    placeholder="example@gmail.com"
                    className="w-[25vw] py-2 rounded-md pl-2 outline-none"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </span>
                <span className="flex">
                  <span className="flex font-medium w-[210px] ">
                    Issues Date* :{" "}
                  </span>
                  <input
                    type="text"
                    placeholder="YYYY-MM-DD"
                    className="w-[25vw] py-2 rounded-md pl-2 outline-none"
                    value={date}
                    onChange={(e) => setdate(e.target.value)}
                  />
                </span>
              </div>
            </div>
            <div className="flex flex-col w-[900px] gap-5">
              <div className="bg-[#092169] text-white px-2 py-3">
                Your document
              </div>
              <div className="flex flex-col px-2 gap-4">
                {" "}
                <span className="flex  items-center gap-5">
                  <span className="w-[100px]">Pan No.</span>
                  <input
                    type="file"
                    onChange={(event) => setdocument(event.target.files[0])}
                  />
                </span>
                {/* <span className="flex  items-center gap-5">
               
               <span className="w-[100px]">supported document</span>
               <input type="file" onChange={(event) => setdocument(event.target.files[0])} />

             </span> */}
                {/* <p className="font-semibold">
                  You must upload in pdf format with following order{" "}
                  <span className="text-red-300 font-bold px-3">1.pan no</span>{" "}
                  <span className="text-blue-600">2.supported Document</span>
                </p> */}
              </div>
            </div>
            <div className="flex flex-col bg-white gap-5">
              <div className="bg-[#092169] text-white px-2 py-3">
                Document Details
              </div>
              <div className="flex flex-col bg-white py-5 px-2 w-[900px] gap-5">
                <div className="flex justify-between">
                  <span>{document ? document.name : "No file selected"}</span>
                  <MdDeleteForever
                    className="w-[34px] h-[34px]  cursor-pointer hover:text-red-700"
                    onClick={deletedocument}
                  />
                </div>
              </div>
            </div>

            <button
              className="py-4 text-xl font-semibold bg-[#FFBB00] w-1/5 rounded-md "
              onClick={registerbusiness}
            >
              Register Now
            </button>
          </div>
        </>
      ) : (
        <div className="flex pb-10 flex-col gap-10 justify-center items-center ">
          <div className="flex gap-16">
            <div className="flex flex-col gap-4 font-semibold">
              <span>
                Company Name(English):
                <span className="text-red-600 font-bold text-xl">{name}</span>
              </span>
              <span>
                {" "}
                Company Type*:
                <span className="text-red-600 font-bold text-xl">{type}</span>
              </span>
              <span>
                {" "}
                Company Phone Number:
                <span className="text-red-600 font-bold text-xl">{phone}</span>
              </span>
              <span>
                {" "}
                Company email addrress:
                <span className="text-red-600 font-bold text-xl">{email}</span>
              </span>
              <span>
                {" "}
                company address:
                <span className="text-red-600 font-bold text-xl">
                  {address}
                </span>
              </span>
              <span>
                {" "}
                company structure:
                <span className="text-red-600 font-bold text-xl"></span>
                {/* {pan} */}
              </span>
              <span>
                {" "}
                Issues Date:
                <span className="text-red-600 font-bold text-xl"></span>
                {date}
              </span>
            </div>
            {document && (
              <div>
                <img
                  src={URL.createObjectURL(document)}
                  alt="Selected Document"
                  style={{ maxWidth: "100%", maxHeight: "250px" }}
                />
              </div>
            )}
          </div>
          <div>
            <div className="flex gap-5">
              <button
                className="py-2 text-xl px-6 font-semibold bg-[#FFBB00] rounded-md"
                onClick={edit}
              >
                Edit
              </button>
              <button
                className="py-2 px-6 text-xl font-semibold bg-[#FFBB00]  rounded-md "
                onClick={submitconfirm}
              >
                Confirm{" "}
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </Ulayout>
  );
}
