import { useEffect, useState } from "react";
import { Ulayout } from "./layout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dartaimage from "./dartaimage.png";
import ImgCompressor from "./compress";
import { useNavigate } from "react-router-dom";
import { getDartaByEmail } from "../Profile/api";

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
  const [geterror, setGeterror] = useState("");
  const [compressedImg, setCompressedImg] = useState(null);
  const [dartaSuccess, setDartaSuccess] = useState(false);
  const navigator = useNavigate();
  const dartaDetail = JSON.parse(localStorage.getItem("userProfile"));

  const [dartaEmail, setEmail] = useState(dartaDetail.email);
  const [dartaProfile, setDartaProfile] = useState(null);
  const [editable, setIsEditable] = useState(false);
  const [showEditButton, setShowEditButton] = useState(false);

  useEffect(() => {
    if (dartaEmail) {
      const getProfile = async () => {
        const profileData = await getDartaByEmail(dartaEmail);
        if (profileData?.data?.length) {
          setDartaProfile(profileData.data);
          setIsEditable(true);
        }
      };
      getProfile();
    }
  }, [dartaEmail]);

  useEffect(() => {
    if (dartaProfile && dartaProfile.length > 0) {
      const {
        name,
        type,
        address,
        Phone,
        date,
        document,
        Email,
        isFormVerified,
        isDocVerified,
        isPaymentVerified,
      } = dartaProfile[0];
      setname(name);
      setemail(Email);
      setaddress(address);
      setdate(date);
      setphone(Phone);
      settype(type);
      setdocument(document);

      console.log(!!isFormVerified);
      const isShowEditButton =
        !isFormVerified ||
        !isDocVerified ||
        !isPaymentVerified ||
        isFormVerified === null ||
        isDocVerified === null ||
        isPaymentVerified === null;
      setShowEditButton(isShowEditButton);
    }
  }, [dartaProfile]);

  console.log({ showEditButton, editable });
  // for title only
  const titlename = [
    { id: 1, dname: "Company Name:" },
    { id: 2, dtype: "Company Type:" },
    { id: 3, daddress: "Company Address:" },
    { id: 4, dphone: "Company Phone:" },
    { id: 5, demail: "Company Email:" },
    { id: 6, ddate: "Issue Date:" },
  ];

  const edit = () => {
    setprevious(false);
    setdetail(false);
  };

  const registerbusiness = () => {
    if (!name || !type || !address || !phone || !email || !date) {
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

    const emailregex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailregex.test(email)) {
      toast.error("Email must have email format");
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
      let isValidFields;
      let cloudinaryResponse;
      let cloudinaryData;

      if (!editable) {
        isValidFields = await verifyValidFields({
          name: name,
          email: email,
        });
      }
      if (isValidFields || editable) {
        try {
          // Upload document to Cloudinary

          console.log({ compressedImg });
          const formData = new FormData();
          formData.append("file", compressedImg);
          formData.append("upload_preset", "nirajan");
          formData.append("cloud_name", "dy6obggnfn");

          if (compressedImg)
            cloudinaryResponse = await fetch(
              "https://api.cloudinary.com/v1_1/dy6obggnf/image/upload",
              {
                method: "POST",
                body: formData,
              }
            );

          // if (!cloudinaryResponse.ok) {
          //   const cloudinaryErrorData = await cloudinaryResponse.json();
          // }
          if (cloudinaryResponse) {
            cloudinaryData = await cloudinaryResponse.json();
            if (!cloudinaryResponse.ok) return;
          }

          // Send data to backend
          let backendResponse;
          backendResponse = await fetch(
            "http://localhost:3000/api/register-darta",
            {
              method: `${editable ? "PUT" : "POST"}`,
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
                document: compressedImg ? cloudinaryData.secure_url : document,
              }),
            }
          );

          if (backendResponse.ok) {
            const backendData = await backendResponse.json();
            toast.success(backendData.message);
            const dartaData = await fetch(
              `http://localhost:3000/api/getDartaByEmail/${email}`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            const darta = await dartaData.json();
            console.log({ darta });
            localStorage.setItem("dartaDetails", JSON.stringify(darta.data));
            localStorage.setItem("phone", phone);
            setDartaSuccess(dartaData.ok);
            navigator("/user/wallet");
          } else {
            toast.error("Phone number must be unique");
          }
        } catch (error) {
          console.log("bro where ?", error);
        }
      }
    }
  };

  const verifyValidFields = async (payload) => {
    const isEmail = await fetch(
      `http://localhost:3000/api/isDupEmail/${payload.email}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    if (isEmail.ok) {
      const isName = await fetch(
        `http://localhost:3000/api/isDupName/${payload.name}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      if (isName.ok) {
        return true;
      } else {
        const nameError = await isName.json();
        toast.error(nameError.message);
      }
    } else {
      const emailError = await isEmail.json();
      toast.error(emailError.message);
      return false;
    }
  };

  console.log(dartaProfile);
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
                    Company Name(English)* :
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
                  <span className="flex font-medium w-[210px]">
                    Company Type* :
                  </span>
                  <select
                    value={type}
                    onChange={(e) => settype(e.target.value)}
                    className="py-2 rounded-md pl-2 outline-none"
                    style={{ width: "25vw" }}
                  >
                    <option value="Online Business">Online Business</option>
                    <option value="Hotel">Hotel</option>
                    <option value="School">School</option>
                  </select>
                </span>

                <span className="flex">
                  <span className="flex font-medium w-[210px]">
                    Company Address* :
                  </span>
                  <input
                    type="text"
                    placeholder="Enter Address"
                    className="w-[25vw] py-2 rounded-md pl-2 outline-none"
                    value={address}
                    onChange={(e) => setaddress(e.target.value)}
                  />
                </span>
                <span className="flex">
                  <span className="flex font-medium   w-[210px]">
                    Company Phone Number :
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
                    Company Email Address* :
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
                    Issues Date* :
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
              <div className="flex flex-col px-2 ">
                {compressedImg ? (
                  <img
                    src={URL.createObjectURL(compressedImg)}
                    alt="Selected Document"
                    className="p-5"
                    style={{ maxHeight: "500px", maxWidth: "700px" }}
                  />
                ) : (
                  editable &&
                  ((
                    <img
                      src={`${document}`}
                      height="400"
                      width="400"
                      alt="darta.jpg"
                    />
                  ) ||
                    "")
                )}
                <br />
                {showEditButton || !editable ? (
                  <span className="flex  items-center gap-5">
                    <ImgCompressor
                      setCompressedFile={(file) => setCompressedImg(file)}
                      editFile={editable}
                    />
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
            {editable && showEditButton && (
              <button
                className="py-4 text-xl font-semibold bg-[#FFBB00] w-1/5 rounded-md "
                onClick={registerbusiness}
              >
                Update Register
              </button>
            )}
            {!editable && (
              <button
                className="py-4 text-xl font-semibold bg-[#FFBB00] w-1/5 rounded-md "
                onClick={registerbusiness}
              >
                Register
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="flex mx-10 px-3 my-2 flex-col gap-7 justify-center items-center bg-white ">
          <div></div>
          <div className="flex gap-16 w-[1200px] p-3">
            <div className="w-full">
              <div>
                <div className="bg-[#092169] text-white px-2 py-3">company</div>
                <div className=" flex px-16 py-5 border-2 my-5 m ">
                  <div>
                    {titlename.map((details) => (
                      <div
                        key={details.id}
                        className="w-[150px] justify-center flex flex-col gap-[6px] font-medium "
                      >
                        <p>{details.dname}</p>
                        <p>{details.dtype}</p>
                        <p>{details.daddress}</p>
                        <p>{details.dphone}</p>
                        <p>{details.demail}</p>
                        <p>{details.ddate}</p>
                      </div>
                    ))}
                  </div>
                  <div>
                    {/* {accessdata.map((items) => (  ))} */}
                    <div className="flex justify-center flex-col gap-8 w-[400px] ">
                      <p className="border-2 px-2 ">{name}</p>
                      <p className="border-2  px-2  ">{type}</p>
                      <p className=" border-2 px-2  ">{address}</p>
                      <p className="border-2  px-2  ">{phone}</p>
                      <p className="border-2  px-2   ">{email}</p>
                      <p className="border-2 px-2  ">{date}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-[#092169] text-white px-2 py-3">
                  Document
                </div>
                <div className="flex justify-center">
                  {compressedImg ? (
                    <img
                      src={URL.createObjectURL(compressedImg)}
                      alt="Selected Document"
                      className="p-5"
                      style={{ maxHeight: "500px", maxWidth: "700px" }}
                    />
                  ) : (
                    editable &&
                    ((
                      <img
                        src={`${document}`}
                        height="400"
                        width="400"
                        alt="darta.jpg"
                      />
                    ) ||
                      "")
                  )}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-5 mb-4">
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
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </Ulayout>
  );
}
