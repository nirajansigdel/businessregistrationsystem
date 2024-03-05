import React from "react";
import { Alayout } from "../AdminDashboard/layout";
import { downloadCSVReport } from "./api";

const DownloadReport = () => {

  const downloadReport = async (isVerify) => {
    const response= await downloadCSVReport(isVerify)
  };
  return (
    <Alayout>
    <div className="p-4 inline-grid">
      <button
        type="button"
        onClick={() => downloadReport(true)}
        className="text-white items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
      >
        Download Verified Darta
      </button>
      <button
        type="button"
        onClick={() => downloadReport(false)}
        className="text-white items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Download Unverified Darta
      </button>
    </div>
    </Alayout>
  );
};

export default DownloadReport;
