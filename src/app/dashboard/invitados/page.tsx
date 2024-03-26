import React from "react";
import DashboardAuthClientValidator from "@/components/wrappers/DashboardAuthClientValidator";
import DashboardLayout from "@/components/wrappers/DashboardWrapper";
import InvitadosConfirmados from "@/components/Dashboard/sections/InvitadosConfirmados";

const page = () => {
  return (
    <DashboardAuthClientValidator>
      <DashboardLayout>
        <InvitadosConfirmados />
      </DashboardLayout>
    </DashboardAuthClientValidator>
  );
};

export default page;
