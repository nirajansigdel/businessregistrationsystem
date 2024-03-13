import React, { useState, useEffect } from "react";
import { Alayout } from "../layout";
import { useDispatch } from "react-redux";
import { addData } from "../../../redux/propsSlice";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import VerifyRegistration from "../../VerifyRegistration";

export default function Adarta() {
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showRejectSection, setShowRejectSection] = useState(false);
  const [activate, setActivate] = useState(false);
  const [items, setItems] = useState([]);
  const [displayArray, setDisplayArray] = useState(items);

  const [rMessage, setRmessage] = useState("");

  const rejectmessage = async (id) => {
    try {
      await axios.post("http://localhost:3000/api/verify-darta", {
        mobileNumber: selectedItem.Phone,
        status: "0",
        rejectionMessage: rMessage,
      });

      setActivate(false);

      const filteredArray = displayArray.filter((val) => val.id !== id);
      setSelectedItem(null);
      setDisplayArray(filteredArray);
      // updateBackend(filteredArray);
    } catch (error) {}
  };

  const Rejectcancel = () => {
    setActivate(false);
  };
  const titlename = [
    { id: 1, dname: "Company Name:" },
    { id: 2, dtype: "Company Type:" },
    { id: 3, daddress: "Company Address:" },
    { id: 4, dphone: "Company Phone:" },
    { id: 5, demail: "Company Email:" },
    { id: 6, ddate: "Issue Date:" },
  ];

  const handleDispatch = () => {
    dispatch(addData("string"));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/getUnverifiedDarta");
        if (response.ok) {
          const data = await response.json();
          setItems(data); // Update state with dataResults array
          setDisplayArray(data); // Update state with dataResults array
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const sendto = () => {
    setStep(1);
    setSelectedItem(null);
    setShowRejectSection(false);
  };

  const reject = () => {
    setStep(2);
    setSelectedItem(null);
    setShowRejectSection(true);
  };

  const handleAccept = async (id) => {
    console.log(selectedItem.Phone);
    try {
      await axios.post("http://localhost:3000/api/verify-darta", {
        mobileNumber: selectedItem.Phone,
        status: "1",
        rejectionMessage: "",
      });
  
      setActivate(false);
    } catch (error) {
      console.log(error);
    }

    dispatch(addData(selectedItem));
    const filteredArray = displayArray.filter((val) => val.id !== id);
    setSelectedItem(null);
    setDisplayArray(filteredArray);
    // updateBackend(filteredArray);
  };

  const accept = () => {
    window.confirm("send to department");
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowRejectSection(false);
  };

  return (
    <>
      <Alayout>
        <div className="flex gap-10">
          {/* Left Section (Scrollable) */}
          <div className="flex-shrink-0 p-4 overflow-y-auto w-1/4 bg-slate-300 gap-4 flex flex-col">
            {/* {items.map((item) => ( */}
            {displayArray.map((item) => (
              <div
                key={item.id}
                className={`cursor-pointer p-2 py-6 border shadow-md rounded-md gap-5 flex hover:bg-gray-30 ${
                  selectedItem === item ? " bg-slate-600  text-white" : ""
                }`}
                onClick={() => handleItemClick(item)}
              >
                <span className="font-medium">{item.name}</span>
              </div>
            ))}
          </div>
          {selectedItem && <VerifyRegistration item={selectedItem}/>}
        </div>
      </Alayout>
      {activate && (
        <div className=" flex items-center flex-col px-6  rounded-md bg-[#FFFFFD] z-20 fixed top-1/2 left-1/2 -translate-x-[320px] -translate-y-[190px] text-black border min-w-[500px] ">
          <div className="flex justify-end w-full py-2">
            <FaTimes
              className=" text-5xl text-red-700 cursor-pointer"
              onClick={Rejectcancel}
            />
          </div>
          <textarea
            name=""
            id=""
            cols="80"
            rows="10"
            className=" rounded-md border-2 outline-none"
            onChange={(e) => setRmessage(e.target.value)}
          ></textarea>
          <button
            className="bg-red-400 py-4 w-fit px-4 rounded-md my-4 font-md text-white disabled:bg-slate-400"
            onClick={() => rejectmessage(selectedItem.id)}
            disabled={!rMessage}
          >
            Reject Message
          </button>
        </div>
      )}

      {activate && (
        <div
          className=" OVERLAY bg-black opacity-80 top-0 left-0 w-screen fixed h-screen overflow-hidden "
          onClick={() => setActivate(false)}
        ></div>
      )}
    </>
  );
}
