import React, { useEffect, useState } from "react";
import { Ulayout } from "./layout";
import Card from "../../components/Card";

export default function Notification() {
  const [apiData, setApiData] = useState([]);
  const dartaDetail = JSON.parse(localStorage.getItem("dartaDetails"));
  const [email, setEmail] = useState(dartaDetail.Email);

  useEffect(() => {
    try {
      if (email) {
        const apiCall = async () => {
          const res = await fetch(
            `http://localhost:3000/api/getNotificationsById/${email}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const { data } = await res.json();
          console.log({ data });

          setApiData(data);
        };
        apiCall();
      }
    } catch (error) {}
  }, [email]);

  return (
    <Ulayout>
      <div className="p-8">
        <Card className="p-8">
          <div className="flex flex-col w-[1000px]  pb-10 pt-4 items-center gap-5">
            {apiData?.map((val) => (
              <div key={val.id}>{val.accept_reject_message}</div>
            ))}
          </div>
        </Card>
      </div>
    </Ulayout>
  );
}
