"use client";
import React from "react";
import { Invitados } from "@prisma/client";
import WhatsAppIcon from "/public/assets/images/icons8-whatsapp.svg";
import Image from "next/image";
import axios from "axios";

const TablitaMesa = ({
  nombre,
  numeroMesa,
  invitadosJSON,
}: {
  nombre: string;
  numeroMesa: string;
  invitadosJSON: string;
}) => {
  const invitados: Invitados[] = JSON.parse(invitadosJSON);

  const totalPasesConfirmados = invitados.reduce((total, invitado) => {
    return total + invitado.pasesConfirmados;
  }, 0);
  const enviarNofitificacionWhats = (
    telInvitado: string,
    numeroMesa: string
  ) => {
    return axios.post("/api/mesas/notificacion/enviar", {
      tel: telInvitado,
      nombreEvento: "los XV de Ana Patricia",
      fechaEvento: "sábado 05 de octubre",
      numeroMesa: numeroMesa,
    });
  };

  const onClickEnviarNofitificacionButton = () => {
    invitados.map((invitado) =>
      enviarNofitificacionWhats(invitado.tel, numeroMesa)
    );
  };
  return (
    <div className=" w-[32%]">
      <div className="bg-purple-200 text-purple-950 p-1">
        <p>
          Nombre de la mesa: <span className=" font-bold">{nombre}</span>
        </p>
        <p>
          Número de la mesa: <span className=" font-bold">{numeroMesa}</span>
        </p>
        <p>
          Total Pases:{" "}
          <span className=" font-bold">{totalPasesConfirmados}</span>
        </p>
      </div>
      <div>
        {invitados.map((invitado, i) => (
          <div key={i}>
            <div className="flex flex-col gap-1 border p-1">
              <p>{invitado.nombre}</p>
              <p> Pases: {invitado.pasesConfirmados}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => onClickEnviarNofitificacionButton()}
        className=" bg-green-100 shadow-sm hover:bg-green-200 flex items-center justify-start p-1 cursor-pointer transition-all ease-in-out"
      >
        <Image src={WhatsAppIcon} width={38} alt="usa nuestro whatsapp" />
        <p>Enviar Notificacion a tus invitados</p>
      </button>
    </div>
  );
};

export default TablitaMesa;
