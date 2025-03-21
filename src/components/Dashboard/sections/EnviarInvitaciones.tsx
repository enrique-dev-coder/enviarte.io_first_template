import React from "react";
import Image from "next/image";
import EnviarInvManual from "../modales/EnviarInvManual";
import EnviarInvWhatsApp from "../modales/EnviarInvWhatsApp";
import ExcelIcon from "/public/assets/images/icons8-ms-excel.svg";
import UploadZone from "../EnviarLista/UploadZone";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import prisma from "../../../../prisma";

// REVIEW
// Cuando se usa la api que se quede registrado en la base de datos de enviados
// para que no envien mensajes al mismo y no saturar la API
// limitar el numero de usos de la api por usuario  a unos 20 por dia o aumentar por paquete
// TODO:
// FEATURES
// la doble confirmacion que dice lalito mediante un updgrade a la cloud  API
// esa doble confirmacion que sea un diseño muy chiquito nomas que diga si o no
// y esa doble confirmacion que aparezca en otra tab del menu

const EnviarInvitaciones = async () => {
  const cookieStore = cookies().get("invitandofacil");
  if (!cookieStore) {
    redirect("/");
  }
  const parsedCookie = cookieStore && JSON.parse(cookieStore.value);
  console.log(parsedCookie);
  const user = await prisma.user.findFirst({
    where: {
      invitacionId: parsedCookie.verificarUsuario.invitacionId,
    },
    select: {
      evento: true,
      nombreWhats: true,
    },
  });

  const invitationLink = await prisma.invitacion.findFirst({
    where: {
      id: parsedCookie.verificarUsuario.invitacionId,
    },
    select: {
      link: true,
      linkFoto: true,
    },
  });
  const linkParaEnviar =
    invitationLink?.link ||
    "Si no aparece tu link favor de comunicarse al 8441753173";
  return (
    <div className="p-2 flex flex-col h-full gap-2">
      <div className="flex gap-4  justify-between">
        <div className="w-4/12">
          <EnviarInvManual invitacionLink={linkParaEnviar} />
        </div>
        <div className="w-4/12">
          <EnviarInvWhatsApp
            nombreWhats={user?.nombreWhats}
            linkParaEnviar={linkParaEnviar}
            evento={user?.evento}
            linkFoto={invitationLink?.linkFoto}
          />
        </div>
        {/*TODO: esto abre instrucciones de envio*/}
        <button className="shadow-sm rounded-md bg-gray-100 border-emerald-500  border-2 flex flex-col items-center justify-center w-4/12 text-black gap-1 py-2">
          <Image
            src={ExcelIcon}
            alt="Enviar lista de invitaciones"
            width={30}
          />
          <p className="w-11/12 font-medium">
            Enviar una lista de invitaciones usando un archivo de excel o google
            sheets
          </p>
        </button>
      </div>
      <div className=" flex-1">
        <UploadZone
          nombreWhats={user?.nombreWhats}
          linkParaEnviar={linkParaEnviar}
          evento={user?.evento}
          linkFoto={invitationLink?.linkFoto}
        />
      </div>

      {/*TODO: Modal para subir el archivo de xlsx y convertir a tabla, la tabla trae lo del modal pero como lista*/}
      {/*TODO: USAR EL SCROLLABLE VIEW DE SHADCN PARA NO BATALLAR TANTO CON LA TABLA SOLO HAY QIE VER COMO GAURDAR EL ESTADO  */}
      {/*TODO: poner como una opcion del submenu la de ver la lsita de invitaciones enviadas*/}

      {/*TODO: En esa tabla validar si ya se mando antes la invitacion  ?? igual y al momento de subir usar un findmany o algo asi, de todas formas se valida al enviar la peticion  */}
    </div>
  );
};

export default EnviarInvitaciones;
