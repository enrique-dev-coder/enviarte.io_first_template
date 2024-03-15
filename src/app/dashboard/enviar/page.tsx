import React from "react";
import DashboardAuthClientValidator from "@/components/wrappers/DashboardAuthClientValidator";
import DashboardLayout from "@/components/wrappers/DashboardWrapper";
import EnviarInvitaciones from "@/components/Dashboard/sections/EnviarInvitaciones";
const page = () => {
  return (
    <DashboardAuthClientValidator>
      <DashboardLayout>
        <EnviarInvitaciones />
      </DashboardLayout>
    </DashboardAuthClientValidator>
  );
};

export default page;
