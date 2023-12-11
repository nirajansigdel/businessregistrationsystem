import React from "react";
import Layout from "../../layout/layout";

import HeroSection from "./herosection";
import Stream from "./stream";
import Grule from "./rule";
import CompanyReg from "./companyreg";



export default function Home() {
  return (
    <Layout>
      <HeroSection/>
      <Stream/>
      <Grule/>
      <CompanyReg/>
      
    </Layout>
  );
}
