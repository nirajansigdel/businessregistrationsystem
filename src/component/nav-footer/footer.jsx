import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";

export default function Footer() {
  return (
    <div>
        <div className="flex justify-between">
            <div className="">BRS</div>
            



            <div className="">
             <span>Quick Links</span>
            <span>
            <span>About Us</span>
            <span>Notice</span>
            <span>Darta</span>
            </span>
            </div>
            



            <div className="">
             <span>Contact US</span>
            <span>
            <span>:9840000000</span>
            <span>:abc@gmail.com</span>
            <span>:texas</span>
            </span>
            </div>
            <div className="">
             <span>Follow Us</span>
            <span className="flex">
            <CiFacebook />
            <CiInstagram />
            <CiTwitter />
            </span>
            </div>
           
        </div>
        <div className="2"></div>
    </div>
  )
}
