import React, { useEffect, useState } from "react";
import { Ulayout } from "./layout";
import axios from "axios";

export default function Notification() {
  const [apiData, setApiData] = useState([]);

  const phone = localStorage.getItem("phone");

  useEffect(() => {
    console.log(phone);
    try {
      if (phone) {
        const apiCall = async () => {
          const res = await axios.post(
            "http://localhost:3000/api/get-user-darta-message",
            {
              mobileNumber: phone,
            }
          );
          setApiData(res.data.data);
        };
        apiCall();
      }
    } catch (error) {}
  }, [phone]);

  return (
    <Ulayout>
      <div className="flex flex-col w-[1000px]  pb-10 pt-4 items-center gap-5">
        {apiData?.map((val) => (
          <div key={val.id}>{val.accept_reject_message}</div>
        ))}
      </div>
    </Ulayout>
  );
}
