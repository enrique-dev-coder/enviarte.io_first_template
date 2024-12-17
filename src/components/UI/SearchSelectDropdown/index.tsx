"use client";
import React from "react";
import { useCookies } from "react-cookie";
import { useQuery } from "@tanstack/react-query";
import UI from "./UI";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Invitados } from "@prisma/client";

const SearchSelectDropdownCustom = ({
  agregarOpcionesAlFormulario,
}: {
  agregarOpcionesAlFormulario: (data: Invitados[]) => void;
}) => {
  const [cookies] = useCookies(["invitandofacil"]);
  const router = useRouter();

  if (!cookies?.invitandofacil) {
    router.push("/login");
  }
  const invitacionId = cookies?.invitandofacil.verificarUsuario.invitacionId;

  const {
    error,
    data: InvitadosConfirmados,
    isLoading,
  } = useQuery({
    queryKey: ["invitationData"],
    queryFn: () => {
      return axios.get(`/api/invitados/${invitacionId}`);
    },
  });

  return (
    <UI
      invitadosConfirmados={InvitadosConfirmados?.data}
      agregarOpcionesAlFormulario={agregarOpcionesAlFormulario}
    />
  );
};

export default SearchSelectDropdownCustom;
