import React from "react";
import EnviarInvManualPublic from "@/components/Dashboard/modales/EnviarInvManualPublic";
import UploadZonePublic from "@/components/Dashboard/EnviarLista/UploadZonePublic";
const page = () => {
  return (
    <>
      <div className="relative  h-[20vh] bg-gradient-to-br from-purple-600 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4 cell:text-lg">
            Crea links para tus invitaciones 💌
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-center font-bold text-2xl my-4 cell:text-lg">
          ¿Qué quieres hacer hoy?
        </h2>
        <div className="flex justify-center rounded-md    items-center  w-full bg-purple-100 max-w-[1140px] ">
          <div className="py-8 flex justify-around w-full gap-4 cell:flex-col ">
            <EnviarInvManualPublic invitacionLink="https://www.invitandofacil.com/xvs/patita" />
            <button className=" shadow-sm rounded-full  bg-white flex flex-col items-center justify-center   gap-1 py-3 px-4 ">
              <p className="font-medium">📊 Genera una lista de links</p>{" "}
            </button>
          </div>
        </div>
        <div className="w-full max-w-[1140px] my-4">
          <UploadZonePublic
            linkParaEnviar={"https://www.invitandofacil.com/xvs/Dairy"}
          />
        </div>
      </div>
    </>
  );
};

export default page;
