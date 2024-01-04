import React, { useState } from 'react'
import { Alayout } from '../layout'
import ma from "../ma.png";

export default function Adepartment() {
  const [step, setStep] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showRejectSection, setShowRejectSection] = useState(false);

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

  const accept = () => {
    window.confirm("send to department");
  };

  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowRejectSection(false);
  };

  return (
    <Alayout>
      <div className="flex gap-10">
        {/* Left Section (Scrollable) */}
        <div className="flex-shrink-0 p-4 overflow-y-auto w-1/4 bg-slate-300 gap-4 flex flex-col">
          {items.map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer p-2 py-6 border shadow-md rounded-md gap-5 flex hover:bg-gray-30 ${
                selectedItem === item ? " bg-slate-600  text-white" : ""
              }`}
              onClick={() => handleItemClick(item)}
            >
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>

        {/* Right Section (Openable) */}
        <div className="flex-grow mt-3">
          {selectedItem && !showRejectSection ? (
            <div className="flex flex-col ">
              <div className="bg-white p-4 border rounded shadow">
                <h2 className="text-xl font-bold mb-4">
                  Selected {selectedItem}
                </h2>
                <div className="flex flex-col gap-5 pl-2">
                <span className="flex">
                    <span className="flex font-medium w-[210px] ">
                      Company Name:
                    </span>
                    <span> Company Name(English):</span>
                  </span>
                  <span className="flex">
                    <span className="flex font-medium w-[210px] ">
                      Company Type*:
                    </span>
                    <span>hello1</span>
                  </span>
                  <span className="flex">
                    <span className="flex font-medium w-[210px] ">
                      Company Phone Number:{" "}
                    </span>
                    <span>hello</span>
                  </span>
                  <span className="flex">
                    <span className="flex font-medium w-[210px] ">
                      Company Email Address:{" "}
                    </span>
                    <span>hello1</span>
                  </span>
                  <span className="flex">
                    <span className="flex font-medium w-[210px] ">
                      company address:
                    </span>
                    <span>hello1</span>
                  </span>
                  <span className="flex">
                    <span className="flex font-medium w-[210px] ">
                      company structure:
                    </span>
                    <span>hello1</span>
                  </span>
                  <span className="flex">
                    <span className="flex font-medium w-[210px] ">
                      Issues Date* :{" "}
                    </span>
                    <span>2078-3-4</span>
                  </span>
                  <span className="flex gap-4 mt-5">
                    {" "}
                    <img src={ma} alt="" className="w-[500px] border-4" />
                    <img src={ma} alt="" className="w-[500px] border-4 " />
                  </span>
                </div>
                <div className="flex gap-4 mt-5 pl-60 text-white font-medium">
                  <button
                    className="bg-yellow-500 w-1/4 rounded-md"
                    onClick={reject}
                  >
                    Reject
                  </button>
                  <button
                    className="bg-green-600 p-3 w-1/4 rounded-md"
                    onClick={accept}
                  >
                    Accept
                  </button>
                </div>
              </div>
            </div>
          ) : showRejectSection ? (
            <div className="flex flex-col gap-5 py-7 mt-6 text-center items-center">
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                className="min-w-[600px] outline-none border-2"
              ></textarea>
              <button
                className="bg-yellow-400 px-16 text-white py-4 font-medium rounded-md"
                onClick={sendto}
              >
                Send
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </Alayout>
  );
}
