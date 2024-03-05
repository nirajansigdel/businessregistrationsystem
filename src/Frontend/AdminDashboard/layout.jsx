import React from "react";
import Anav from "./pages/anav";

export const Alayout = ({ children }) => {
  return (
    <div className="w-full max-w-[1440px] flex flex-col   min-h-[100vh]">
      <Anav />
      <div className="flex  flex-col gap-2">{children}</div>
    </div>
  );
};
