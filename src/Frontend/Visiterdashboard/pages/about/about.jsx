import React, { useState } from 'react'
import t1 from "./image/t1.png"
import t2 from "./image/t2.png"
import t3 from "./image/t3.png"
import t4 from "./image/t4.png"
import Layout from '../../component/layout/layout'

export default function About() {
  const [getupload, setupload] = useState("");

  // const imageupdate = () => {
  //   const data = new FormData();
  //   data.append("file", getupload);
  //   data.append("upload_preset", "nirajan"); // Replace with your Cloudinary upload preset
  //   data.append("cloud_name","dy6obggnfn"); 
  
  //   console.log("FormData:", data); // Log FormData to check the content
  
  //   fetch("https://api.cloudinary.com/v1_1/dy6obggnf/image/upload", {
  //     method: "POST",
  //     body: data,
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       alert("Image upload completed!");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       alert("Image upload failed. Please try again.");
  //     });
  // };
  
  
    const demo = () => [
        {
          title: "Nirajan Sigdel",
          image: t1,
          des: "CEO",
        },
    
        {
          title: "Yuvraj Badu",
          image: t2,
          des: "Legal Expert",
        },
    
        {
          title: "Sostika Upreti",
          image: t3,
          des: "Manager",
        },
    
        {
          title: "Suzal Sigdel",
          image: t4,
          des: "Data Protection Officer",
        },
    
        {
          title: "Unique Badu",
          image: t4,
          des:"Registration Specialist",
        },
      ];
  return (
    <Layout>



    <div className="mt-0.5 flex px-24 py-6 ">
    <div className="mt-0.5 flex px-10 py-6 flex-col gap-5 bg-bg-[#F2F5FF] ">
      <span className='text-3xl font-bold text-center'>Our team{" "}</span>
      <div className=" flex  py-12">
        {demo().map((demo) => (
          <span className="flex  flex-col  w-[230px]  justify-center items-center py-7 gap-1">
            <img src={demo.image} alt="" srcset="" className="w-[80px] h-[90px]" />
            <span className='flex flex-col text-center gap-1'>
              <span  className="font-normal" key={demo.title}>{demo.title}</span>
            <span className='font-semibold'>{demo.des}</span></span>
            
          </span>
        ))}
      </div>
    </div>
      
  
      </div>

    </Layout>
  )
}


 

  
