import React from "react";
import DashboardAuthClientValidator from "@/components/wrappers/DashboardAuthClientValidator";
import DashboardLayout from "@/components/wrappers/DashboardWrapper";
import Mesas from "@/components/Dashboard/sections/MesasDeinvitados";

const page = () => {
  return (
    <DashboardAuthClientValidator>
      <DashboardLayout>
        <Mesas />
      </DashboardLayout>
    </DashboardAuthClientValidator>
  );
};

export default page;
