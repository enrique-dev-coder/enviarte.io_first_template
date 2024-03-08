"use client";
import React from "react";
import DashboardLayout from "@/components/wrappers/DashboardWrapper";
import DashboardAuthClientValidator from "@/components/wrappers/DashboardAuthClientValidator";

const page = () => {
  return (
    <DashboardAuthClientValidator>
      <DashboardLayout>dashboard</DashboardLayout>
    </DashboardAuthClientValidator>
  );
};

export default page;
