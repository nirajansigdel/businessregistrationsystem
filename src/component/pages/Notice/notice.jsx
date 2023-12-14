import React, { useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import Layout from "../../layout/layout";
import n1 from "./image/notice1.jpg";
import n2 from "./image/notice2.jpg";
import n3 from "./image/notice3.jpg";

export default function Notice() {
  const [selectedImage, setSelectedImage] = useState(null);

  const noticeimage = () => [
    {
      message:
        " We would like to inform you about an important update related to Policy. After careful consideration and planning, we are implementing changes to enhance your experience and improve our services.",
      image: n1,
    },
    {
      message:
        " We would like to inform you about an important update related to tax. After careful consideration and planning, we are implementing changes to enhance your experience and improve our services.",
      image: n2,
    },
    {
      message:
        " We would like to inform you about an important update related to Policy Change. After careful consideration and planning, we are implementing changes to enhance your experience and improve our services.",
      image: n3,
    },
   
  ];

  return (
    <Layout>
      <div className="mt-0.5 flex px-24 py-6 flex-col gap-12 bg-bg-[#F2F5FF] justify-center items-center">
        {noticeimage().map((demo, index) => (
          <span key={index}>
            <span
              onClick={() => setSelectedImage(demo.image)}
              className="flex flex-col shadow-md py-4 px-3 gap-4 justify-end font-normal text-2xl cursor-pointer"
            >
              <span>{demo.message}</span>
              <FaFilePdf />
            </span>

            {selectedImage === demo.image && (
              <img src={demo.image} alt="" className="w-full" />
            )}
          </span>
        ))}
      </div>
    </Layout>
  );
}
