import React from "react";
import DashboardAuthClientValidator from "@/components/wrappers/DashboardAuthClientValidator";
import DashboardLayout from "@/components/wrappers/DashboardWrapper";
import InvitacionesEnviadasNoConfirmadas from "@/components/Dashboard/sections/InvitacionesEnviadas";
import Recordatorio from "@/components/Dashboard/sections/Recordatorio";
const page = () => {
  return (
    <DashboardAuthClientValidator>
      <DashboardLayout>
        <Recordatorio />
      </DashboardLayout>
    </DashboardAuthClientValidator>
  );
};

export default page;
