import React from "react";
import DashboardAuthClientValidator from "@/components/wrappers/DashboardAuthClientValidator";
import DashboardLayout from "@/components/wrappers/DashboardWrapper";
import InvitacionesEnviadasNoConfirmadas from "@/components/Dashboard/sections/InvitacionesEnviadas";

const page = () => {
  return (
    <DashboardAuthClientValidator>
      <DashboardLayout>
        <div className="w-full bg-purple-200  text-purple-900 font-bold text-center  p-6 m-4 rounded-md ">
          ❗❗NOTA: Estas son invitaciones enviadas con nuestra funcion de
          whatsapp y que todavia ❌NO han sido confirmadas
        </div>
        <InvitacionesEnviadasNoConfirmadas />
      </DashboardLayout>
    </DashboardAuthClientValidator>
  );
};

export default page;
