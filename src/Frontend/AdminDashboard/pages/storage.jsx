import React from "react";
import { Alayout } from "../layout";

export default function YourComponent() {
  return (
    <Alayout>
      <table className="flex flex-col min-h-[100vh]">
        <thead>
          <tr className="border border-red-800 flex text-center">
            <th className="flex w-32 justify-center py-4 border-2">Date</th>
            <th className="flex w-60 justify-center py-4 border-2">Company Name</th>
            <th className="flex w-48 justify-center py-4 border-2">Capital Struct</th>
            <th className="flex w-48 justify-center py-4 border-2">Company Type</th>
            <th className="flex w-48 justify-center py-4 border-2">Company Address</th>
            <th className="flex w-48 justify-center py-4 border-2">Phone Number</th>
            <th className="flex w-48 justify-center py-4 border-2">Email Address</th>
            <th className="flex w-48 justify-center py-4 border-2">Document</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-red-800 flex  text-center">
            <td className="flex w-32 justify-center py-4 border-2">2078/9/7</td>
            <td className="flex w-60 justify-center py-4 border-2 whitespace-wrap overflow-auto">
  vvvvvvvvvvvvvvvvvvvvv
</td>



            <td className="flex w-48 justify-center py-4 border-2">hello1</td>
            <td className="flex w-48 justify-center py-4 border-2">hello1</td>
            <td className="flex w-48 justify-center py-4 border-2">hello1</td>
            <td className="flex w-48 justify-center py-4 border-2">hello1</td>
            <td className="flex w-48 justify-center py-4 border-2 overflow-auto">su3333@gmai.com</td>
            <td className="flex w-48 justify-center py-4 border-2">hello1</td>
        
       
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </Alayout>
  );
}
