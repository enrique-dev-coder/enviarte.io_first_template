"use client";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useQuery } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";
import { LoaderIcon } from "lucide-react";
import { DataTable } from "../MainTable";
import TableMenu from "../TableMenu";
import axios from "axios";
// types
import { Invitado } from "@/types";
//utils
import { sumarPasesConfirmados } from "@/utils/operaciones";

// TODO: preguntar a lalito o a dani que filtros quisieran agregar aparte del buscador por nombre

const InvitadosConfirmados = () => {
  const [cookies] = useCookies(["invitandofacil"]);

  const invitacionId = cookies?.invitandofacil.verificarUsuario.invitacionId;
  const [invitadosConfirmadosTotales, setInvitadosConfirmadosTotales] =
    useState(0);
  const {
    error,
    data: invitadosConfirmados,
    isLoading,
  } = useQuery({
    queryKey: ["invitationData"],
    queryFn: () => {
      return axios.get(`/api/invitados/${invitacionId}`);
    },
  });
  const columns: ColumnDef<Invitado>[] = [
    {
      accessorKey: "nombre",
      header: "Nombre",
      cell: (info) => (
        <b>
          <>{info.getValue()}</>
        </b>
      ),
    },
    {
      accessorKey: "tel",
      header: "Teléfonos",
    },
    {
      accessorKey: "pasesAsignados",
      header: "Pases Asignados",
    },
    {
      accessorKey: "pasesConfirmados",
      header: "Pases Confirmados",
      cell: (info) => {
        const number = info.getValue();
        return (
          <div
            className={`${number === 0 ? " text-red-500" : "text-emerald-700"}`}
          >
            <b>
              <>{number}</>
            </b>
          </div>
        );
      },
    },
    {
      accessorKey: "pasesConfirmados",
      header: "Asistencia",
      id: "1",
      cell: (info) => {
        const number = info.getValue();
        return (
          <div
            className={`${number === 0 ? " text-red-500" : "text-emerald-700"}`}
          >
            <b>
              <>{number === 0 ? "NO" : "SI"}</>
            </b>
          </div>
        );
      },
    },
  ];

  // TODO: agregar buscador por nombre , falta que funcione xd
  // console.log(invitadosConfirmados?.data);

  useEffect(() => {
    // validar que no este undefined el array, si no empieza a mamar
    if (invitadosConfirmados?.data) {
      setInvitadosConfirmadosTotales(
        sumarPasesConfirmados(invitadosConfirmados.data)
      );
    }
  }, [invitadosConfirmados]);

  return (
    <>
      {isLoading ? (
        <div className="w-full h-full flex justify-center items-center">
          <LoaderIcon className=" animate-spin  text-dashboardMainDark" />
        </div>
      ) : (
        <div className="flex flex-col w-full  px-2">
          {/*menu de la tabla con buscador por nombre y cantidad de pases confirmados*/}
          <TableMenu sumatoriaPasesConfirmados={invitadosConfirmadosTotales} />
          <DataTable data={invitadosConfirmados?.data} columns={columns} />
        </div>
      )}
    </>
  );
};

export default InvitadosConfirmados;
