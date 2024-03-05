import React, { useEffect, useMemo, useState } from "react";
import { Alayout } from "../layout";
import { useSelector } from "react-redux";
import { FaEye, FaTimesCircle } from "react-icons/fa";
import axios from "axios";

export default function YourComponent() {
  const [activate, setActivate] = useState(false);

  const [searchData, setSearchData] = useState("");
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

  // const data = useSelector((state) => state.propsSlice.userData);
  const [apiFetchedData, setApiFetchedData] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      const res = await axios.get(
        "http://localhost:3000/api/get-accepted-darta"
      );
      setApiFetchedData(res.data.dataResults);
    };
    apiCall();
  }, []);

  const displayData = useMemo(() => {
    return apiFetchedData?.filter((val) => {
      const formattedName = val?.name.toLowerCase();
      return formattedName.includes(searchData.toLowerCase());
    });
  }, [apiFetchedData, searchData]);

  const [modalData, setModalData] = useState(null);

  const eyeview = (id) => {
    setActivate(true);

    const modalKoData = apiFetchedData.find((val) => {
      // const datId = (val.id).toString()
      // const sendId = id.toString()
      return val.id === id;
    });

    setModalData(modalKoData);
  };

  return (
    <>
      <Alayout>
        <div className="flex flex-col gap-4">
          <div className=" py-4 gap-2 flex justify-center items-center">
            <input
              type="text"
              className="w-[20vw] py-1 rounded-md pl-2 border-2 outline-none"
              onChange={(e) => setSearchData(e.target.value)}
            />
            <button className="flex  text-lg bg-green-500 px-4 py-1 font-semibold border-2 rounded-md text-white  cursor-pointer">
              Searching
            </button>
          </div>
          <table className="flex flex-col  border-2">
            <thead className="flex border-2">
              {tabletitle.map((item) => (
                <tr
                  key={Object.keys(item)[0]}
                  className="flex font-medium border-2 p-3 w-[500px]  justify-center "
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



            <tbody className="divide-y">
              {displayData.map((item) => (
                <tr key={item.id} className="divide-x">
                  <td className="py-3 px-2 w-[180px] overflow-hidden">{item.name}</td>
                  <td className="py-3 px-2 w-[180px] overflow-hidden">{item.type}</td>
                  <td className="py-3 px-2 w-[180px] overflow-hidden">{item.address}</td>
                  <td className="py-3 px-2 w-[180px] overflow-hidden">{item.Phone}</td>
                  <td className="py-3 px-2 w-[180px] overflow-hidden ">{item.Email}</td>
                  <td className="py-3 px-2 w-[178px] overflow-hidden">{item.date}</td>
                  {/* <td  className="py-3 px-[66px]">{item.is_verified === 1 ? 'Yes' : 'No'}</td>
          <td  className="py-3 px-[66px] ">{item.rejection_message}</td> */}
                  <td className="py-3 px-2  w-[180px]">{item.created_by}</td>
                  <td>
                    {/* <img src={item.document} alt="Document" style={{ width: '100px', height: 'auto' }} /> */}
                    <td className="py-3 flex justify-center w-[178px]">
                      <FaEye
                        onClick={() => eyeview(item.id)}
                        className="cursor-pointer"
                      />
                    </td>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {activate && (
          <div className="rounded  divide-y z-50 fixed top-0 left-1/2 -translate-x-1/2 translate-y-0 mt-4 bg-white text-black min-w-[200px] lg:min-w-[80%]">
            <div className="w-full flex justify-end p-2">
              <FaTimesCircle
                className=" text-4xl text-red-700"
                onClick={() => setActivate(false)}
              />
            </div>

            <div className="flex items-start justify-center gap-4">
              <div className="flex px-4 items-start justify-center gap-10  py-4  flex-col ">
                <div className="flex flex-col gap-6 ">
                  <div className="flex gap-3">
                    <span className="w-[140px]">Company Name:</span>
                    <span className="text-red-400">{modalData.name}</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-[140px]">Company Type:</span>
                    <span className="text-red-400">{modalData.type}</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-[140px]">Company Address:</span>
                    <span className="text-red-400">{modalData.address}</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-[140px]">Company Phone:</span>
                    <span className="text-red-400">{modalData.Phone}</span>
                  </div>

                  <div className="flex gap-3">
                    <span className="w-[140px]" clas>
                      Company Email:
                    </span>
                    <span className="text-red-400">{modalData.Email}</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-[140px]">Issue data:</span>
                    <span className="text-red-400">{modalData.date}</span>
                  </div>
                </div>

                <div className="flex w-96">
                  <img
                    src={modalData.document}
                    alt=""
                    className="w-full h-full aspect-square object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
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
