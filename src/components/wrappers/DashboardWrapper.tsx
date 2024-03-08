import React, { ReactNode } from "react";
import SideBar from "../Dashboard/SideBar";
const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto flex">
      <SideBar />
      <div className=" bg-neutral-50 w-10/12 h-screen">{children}</div>
    </div>
  );
};

export default DashboardLayout;
