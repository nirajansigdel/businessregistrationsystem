import React from "react";
import { Alayout } from "../layout";
import { useSelector } from "react-redux";

export default function YourComponent() {

  const data = useSelector(state =>state.propsSlice)
  console.log(data)
  return (
    <Alayout>
      <table className="flex flex-col min-h-[100vh]">
        <thead>
          <tr className="border border-red-800 flex text-center">
            <th className="flex w-32 justify-center py-4 border-2">Date</th>
            <th className="flex w-60 justify-center py-4 border-2">Company Name</th>
            <th className="flex w-48 justify-center py-4 border-2">Company Type</th>
            <th className="flex w-48 justify-center py-4 border-2">Company Address</th>
            <th className="flex w-48 justify-center py-4 border-2">Phone Number</th>
            <th className="flex w-48 justify-center py-4 border-2">Email Address</th>
            <th className="flex w-48 justify-center py-4 border-2">Document</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-red-800 flex  text-center">
            <td className="flex w-32 justify-center py-4 border-2">{data.name}</td>
            <td className="flex w-60 justify-center py-4 border-2 whitespace-wrap overflow-auto">{data.address}</td>
            <td className="flex w-48 justify-center py-4 border-2">{data.Email}</td>
            <td className="flex w-48 justify-center py-4 border-2">{data.type}</td>
            <td className="flex w-48 justify-center py-4 border-2">{data.Phone}</td>
            <td className="flex w-48 justify-center py-4 border-2">{data.document}</td>
            <td className="flex w-48 justify-center py-4 border-2 overflow-auto">{data.Email}</td>
            <td className="flex w-48 justify-center py-4 border-2">{data.date}</td>
        
       
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </Alayout>
  );
}
