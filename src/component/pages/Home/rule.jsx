import React from "react";

export default function Grule() {
  return (
    <div className="pl-16 flex flex-col justify-center gap-12 py-12 bg-[#405698] px-24 ">
      <p className="flex  justify-center text-center text-[#FFBB00]  text-2xl font-bold ">Company Registration in Nepal: Quick Requirements</p>
      <div className="flex items-start flex-col gap-6 text-white pl-16">
        <span className="flex justify-center gap-2  w-5/6">
          When initiating the company registration process in Nepal, certain
          legal requirements and specific documents are necessary. Here's an
          overview of the essential information and documentation you'll need:
        </span>
        <div className="flex flex-col gap-4">
            <span className="font-medium" >Legal Requirements:</span>
            <ol className="flex flex-col gap-1 list-decimal pl-6">
                <li>Shareholders must be over 16 years with Nepali citizenship or a valid passport.</li>
                <li>The company must have a unique name.</li>
                </ol>
            </div>
            <div className="flex flex-col gap-4">
            <span className="font-medium">Required Documents:</span>
            <ol className="flex flex-col gap-1 list-decimal pl-6 " >
            <li>Memorandum and Articles of Association.</li>
                <li>Identification documents (citizenship certificates or passports) for directors and shareholders..</li>   
                 <li>Photographs of directors and shareholders.</li>
                <li>Certificate of Incorporation for foreign companies.</li>
                <li>Co-authorization letter for third-party submissions.</li>   
                 <li>Partnership deed for partnership companies.</li>
                <li>Prospectus for public companies.</li>
                </ol>
            </div>
            <div className="flex flex-col gap-1">
         <span>Ensure documents are signed, notarized, and details match. Seek legal advice for compliance.</span>
         <span>Note: Verify requirements with authorities for updates before proceeding.</span>
         

            </div>

      </div>
    </div>
  );
}
