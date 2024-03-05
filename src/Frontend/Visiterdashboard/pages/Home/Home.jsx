import React from "react";
import Layout from "../../component/layout/layout";
import HeroSection from "./herosection";
import Grule from "./rule";
import Stream from "./stream";
import CompanyReg from "./companyreg";
import WhyChoose from "./whychoose";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <Stream />
      <CompanyReg />
      <WhyChoose />
      <Grule />
    </Layout>
  );
}
