import React from "react";
import ModalAgregarMesa from "./ModalAgregarMesa";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import prisma from "../../../../../prisma";
import TablitaMesa from "./TablitaMesa";

const Mesas = async () => {
  const cookieStore = cookies().get("invitandofacil");

  if (!cookieStore) {
    redirect("/login");
  }

  const parsedCookie = JSON.parse(cookieStore.value);
  const invitacionId = parsedCookie.verificarUsuario.invitacionId;

  const mesasAgregadas = await prisma.mesa.findMany({
    where: {
      invitacionId: invitacionId,
    },
    select: {
      nombre: true,
      numeroMesa: true,
      invitadosJSON: true,
    },
  });

  return (
    <div className=" p-4">
      <ModalAgregarMesa invitacionId={invitacionId} />
      <div className="mt-4 flex gap-2 flex-wrap">
        {mesasAgregadas.map((mesa, i) => (
          <TablitaMesa
            key={i}
            nombre={mesa.nombre}
            numeroMesa={mesa.numeroMesa}
            invitadosJSON={mesa.invitadosJSON}
          />
        ))}
      </div>
    </div>
  );
};

export default Mesas;
