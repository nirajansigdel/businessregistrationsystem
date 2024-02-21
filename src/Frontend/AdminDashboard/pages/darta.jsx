import React, { useState, useEffect } from "react";
import { Alayout } from "../layout";
import { useDispatch } from "react-redux";
import { addData } from "../../../redux/propsSlice";

export default function Adarta() {

  const dispatch = useDispatch()
  const [step, setStep] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showRejectSection, setShowRejectSection] = useState(false);
  const [items, setItems] = useState([]);

  const handleDispatch = () => {
    dispatch(addData("string"))
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/get-darta");
        if (response.ok) {
          const data = await response.json();
          setItems(data.dataResults); // Update state with dataResults array
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

  const accept = () => {
    window.confirm("send to department");
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowRejectSection(false);
  };

  const [activate, setActivate] = useState(false);
  console.log(selectedItem);
  return (
    <>
      <Alayout>



        <div className="flex gap-10">
          {/* Left Section (Scrollable) */}
          <div className="flex-shrink-0 p-4 overflow-y-auto w-1/4 bg-slate-300 gap-4 flex flex-col">
            {items.map((item) => (
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

          {/* Right Section (Openable) */}
          {/* Rest of your code */}
          {selectedItem && (
            <div>
              <div className="flex flex-grow mt-3  flex-col gap-8">
                <div>Email:{selectedItem?.Email}</div>
                <div>name:{selectedItem?.name}</div>
                <div>type:{selectedItem?.type}</div>
                <div>Phone:{selectedItem?.Phone}</div>
                <div>document:{selectedItem?.document}</div>
                <img
                  src={selectedItem?.document}
                  alt="Description of the image"
                  className="w-20 aspect-square object-contain"
                />

                {/* <img src={URL.createObjectURL(selectedItem?.document)}
          className='w-20 aspect-square object-contain' alt="" /> */}
                <div>{selectedItem?.address}</div>
                <div>data{selectedItem?.date}</div>

                <div>
                  {selectedItem && (
                    <>
            <button  className ="bg-green-500 border px-4 py-2" onClick={() => dispatch(addData(selectedItem))}>Accept</button>

                      <button
                        className="bg-red-500 border px-4 py-2"
                        onClick={() => setActivate(true)}
                      >
                        reject
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </Alayout>
      {activate && (
       <div className="flex items-center flex-col gap-4 p-3 bg-slate-300 z-20 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black border min-w-[500px] w-[200px] h-[500px]">
        <textarea name="" id="" cols="30" rows="10" className="w-full"></textarea>
        <button className="bg-red-400 py-4 w-fit px-4 rounded-md">SSend</button>
     </div>
      )}

      {activate && (
        <div
          className="BACKGROUND z-10 w-full fixed h-screen overflow-hidden bg-black opacity-10 flex justify-center items-center"
          onClick={() => setActivate(false)}
        ></div>
      )}
    </>
  );
}
