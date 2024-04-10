"use client";
import React from "react";
import { useCookies } from "react-cookie";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import InvitadosConfirmados from "./InvitadosConfirmadosTabla";

const InvitadosConfirmadosDataContainer = () => {
  // NOTE: esta fue la unica forma que encontre de manipular la data que fetchea react query
  //TODO:
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
  return (
    <>
      <InvitadosConfirmados
        dataInvitados={dataInvitados}
        isLoading={isLoading}
        isSuccess={isSuccess}
      />
    </>
  );
};

export default InvitadosConfirmadosDataContainer;
