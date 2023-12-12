import React from "react";
import Layout from "../../layout/layout";

import HeroSection from "./herosection";
import Stream from "./stream";
import Grule from "./rule";
import CompanyReg from "./companyreg";
import WhyChoose from "./whychoose";
import OurTeam from "./ourteam";



export default function Home() {
  return (
    <Layout>
      <HeroSection/>
      <Stream/>
      <CompanyReg/>
      <WhyChoose/>
      <Grule/>
    <OurTeam/>
      
    </Layout>
  );
}
