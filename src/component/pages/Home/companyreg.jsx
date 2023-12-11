import React from "react";
import cr1 from "../Home/image/cr1.png";
import cr2 from "../Home/image/cr2.png";
import cr3 from "../Home/image/cr3.png";
import cr4 from "../Home/image/cr4.png";
import cr5 from "../Home/image/cr5.png";
import cr6 from "../Home/image/cr6.png";
import cr7 from "../Home/image/cr7.png";

export default function CompanyReg() {
  const demo = () => [
    { title: "Real State", image: cr1 },
    { title: "Import/Export", image: cr2 },
    { title: "Online Shopping", image: cr3 },
    { title: "IT Company", image: cr4 },
    { title: "Hotel And Resort", image: cr5 },
    { title: "Media / News", image: cr6 },
    { title: "Job Agency", image: cr7 },
    { title: "Remittance", image: cr7 },
    { title: "NGO", image: cr7 },
    { title: "Consultancy", image: cr7 },
    { title: "Travel Agency", image: cr7 },
    { title: "Furniture", image: cr7 },
    { title: "Hospital / Clinic", image: cr7 },
    { title: "Agricultural Farm", image: cr7 },
    { title: "Montessori / College", image: cr7 },
    { title: "Auto Servicing, Reconditio", image: cr7 },
  ];

  return (
    <div className="flex flex-col gap-4">
      {demo().map((hello) => (
        <span key={hello.title}>{hello.title}{hello.image}</span>
      ))}
    </div>
  );
}
