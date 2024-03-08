import React from "react";
import DashboardAuthClientValidator from "@/components/wrappers/DashboardAuthClientValidator";
import DashboardLayout from "@/components/wrappers/DashboardWrapper";
import Home from "@/components/Dashboard/sections/Home";
const page = () => {
  return (
    <DashboardAuthClientValidator>
      <DashboardLayout>
        <Home />
      </DashboardLayout>
    </DashboardAuthClientValidator>
  );
};

export default page;
