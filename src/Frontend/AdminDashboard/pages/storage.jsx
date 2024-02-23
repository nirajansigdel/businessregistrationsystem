import React, { useState } from "react";
import { Alayout } from "../layout";
import { useSelector } from "react-redux";
import { FaCross, FaEye, FaTimes } from "react-icons/fa";

export default function YourComponent() {
  const [activate, setActivate] = useState(false);

  const eyeview = () => {
    setActivate(true);
  };

  const searching = () => {
    console.log("searching");
  };
  const tabletitle = [
    { name: "Company Name" },
    { type: "Company Type" },
    { address: "Company Address" },
    { phone: "Company Phone" },
    { email: "Company Email " },
    { date: " Issue Date" },
    { Verify: "Verified By" },
    { doc: " Document" },
  ];
  const data = useSelector((state) => state.propsSlice.userData);
  console.log(data, "data here");
  return (
    <>
      <Alayout>
        (
        <div className="flex flex-col gap-4">
          <div className=" py-4 gap-2 flex justify-center items-center">
            <input
              type="text"
              className="w-[20vw] py-1 rounded-md pl-2 border-2 outline-none"
            />
            <button
              className="flex  text-lg bg-green-500 px-4 py-1 font-semibold border-2 rounded-md text-white  cursor-pointer"
              onClick={searching}
            >
              Searching
            </button>
          </div>
          <table className="flex flex-col min-h-[100vh]">
            <thead className="flex border-2">
              {tabletitle.map((item) => (
                <tr
                  key={Object.keys(item)[0]}
                  className="flex font-medium border-2 w-[500px]  justify-center "
                >
                  {" "}
                  {/* Add a unique key for each item */}
                  <th>{item.name}</th>
                  <th>{item.type}</th>
                  <th>{item.address}</th>
                  <th>{item.phone}</th>
                  <th>{item.email}</th>
                  <th>{item.date}</th>
                  <th>{item.Verify}</th>
                  <th>{item.doc}</th>
                </tr>
              ))}
            </thead>

            <tbody className="flex border-2 ">
              <tr className="flex  justify-center">
                <td className="flex  w-[180px] justify-center py-4 border-2">
                  {data.name}
                </td>
                <td className="flex w-[180px] justify-center py-4 border-2">
                  {data.type}
                </td>
                <td className="flex w-[179px] justify-center py-4 border-2">
                  {data.address}
                </td>
                <td className="flex w-[180px] justify-center py-4 border-2">
                  {data.Phone}
                </td>
                <td className="flex w-[180px] justify-center py-4 border-2">
                  {data.Email}
                </td>
                <td className="flex w-[180px] justify-center py-4 border-2">
                  {data.date}
                </td>
                <td className="flex w-[180px] justify-center py-4 border-2">
                  name
                </td>
                <td className="flex w-[180px] justify-center py-4 border-2">
                  <FaEye onClick={eyeview} className="cursor-pointer" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {activate && (
          <div className="rounded  divide-y z-50 fixed top-0 left-1/2 -translate-x-1/2 translate-y-0 mt-4 bg-white text-black min-w-[200px] lg:min-w-[80%]">
            <div className="w-full flex justify-end p-2">
            <FaTimes className=" text-5xl text-red-700" onClick={()=>setActivate(false)}/>
            </div>

            <div className="flex items-start justify-center gap-4">
              <div className="flex px-4 items-start justify-center gap-10  py-4  flex-col ">
                <div className="flex flex-col gap-6 ">
                  <div className="flex gap-3">
                    <span className="w-[140px]">Company Name:</span>
                    <span className="text-red-400">{data.name}</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-[140px]">Company Type:</span>
                    <span className="text-red-400">{data.type}</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-[140px]">Company Address:</span>
                    <span className="text-red-400">{data.address}</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-[140px]">Company Phone:</span>
                    <span className="text-red-400">{data.Phone}</span>
                  </div>

                  <div className="flex gap-3">
                    <span className="w-[140px]" clas>
                      Company Email:
                    </span>
                    <span className="text-red-400">{data.Email}</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-[140px]">Issue data:</span>
                    <span className="text-red-400">{data.date}</span>
                  </div>
                </div>
                
                <div className="flex w-96">
                    

                  <img
                    src={data.document}
                    alt=""
                    className="w-full h-full aspect-square object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        )
      </Alayout>

      {activate && (
        <div
          className="OVERLAY bg-black opacity-70 top-0 left-0 w-screen fixed h-screen overflow-hidden "
          onClick={() => setActivate(false)}
        ></div>
      )}
    </>
  );
}
