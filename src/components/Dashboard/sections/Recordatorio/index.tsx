"use client";
import React from "react";
import { useCookies } from "react-cookie";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Recordatorio = () => {
  // obtener fecha de la boda, telefono de contacto
  // eso se envia a una plantilla de whats
  // el endpoint manda el mensaje a cada uno de los  numeros de los invitados
  // enviar array con numeros al back

  const [cookies] = useCookies(["invitandofacil"]);
  const invitacionId = cookies?.invitandofacil.verificarUsuario.invitacionId;
  const {
    error,
    data: invitadosConfirmados,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["invitationData"],
    queryFn: () => {
      return axios.get(`/api/invitados/${invitacionId}`);
    },
  });
  const dataInvitados = invitadosConfirmados?.data;
  console.log(dataInvitados);
  return <div></div>;
};

export default Recordatorio;
