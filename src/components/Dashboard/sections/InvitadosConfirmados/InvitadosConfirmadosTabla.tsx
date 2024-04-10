//@ts-nocheck
"use client";
import React, { useEffect, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { LoaderIcon, SearchIcon } from "lucide-react";
import { DataTable } from "../../MainTable";
// types
import { Invitado } from "@/types";
//utils
import { sumarPasesConfirmados } from "@/utils/operaciones";

// TODO: preguntar a lalito o a dani que filtros quisieran agregar aparte del buscador por nombre
// TODO: es una fumadota lo de el friltro de la tabla, lo mejor es cambiar a server component y fitrar por search params en la url ?nombre="ejemplo"

const InvitadosConfirmadosTabla = ({ dataInvitados, isLoading, isSuccess }) => {
  const [invitadosConfirmadosTotales, setInvitadosConfirmadosTotales] =
    useState(0);
  // manejar dos estados por separado para filtrar de lado del cliente, no es lo mejor pero asi encontre esa solucion con react query
  const [tableData, setTableData] = useState([]);
  const [initialData, setInitialData] = useState([]);
  useEffect(() => {
    if (isSuccess) {
      setTableData(dataInvitados);
      setInitialData(dataInvitados);
    }
  }, [dataInvitados, isSuccess]);
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

  useEffect(() => {
    // usar este validacion para que no este mamando con el undefined.reduce
    if (isSuccess && dataInvitados.length > 0) {
      setInvitadosConfirmadosTotales(sumarPasesConfirmados(dataInvitados));
    } else null;
  }, [dataInvitados, isSuccess]);

  function filtrarPorNombreContiene(subcadena) {
    const dataCopy = [...tableData];
    setTableData(
      dataCopy.filter((item) =>
        item.nombre.toLowerCase().includes(subcadena.toLowerCase())
      )
    );
  }
  return (
    <>
      {isLoading ? (
        <div className="w-full h-full flex justify-center items-center">
          <LoaderIcon className=" animate-spin  text-dashboardMainDark" />
        </div>
      ) : (
        <div className="flex flex-col w-full  px-2">
          {/*menu de la tabla con buscador por nombre y cantidad de pases confirmados*/}
          <div className="py-2 rounded-lg flex items-center gap-4 w-full bg-violet-50 my-2  shadow-sm">
            <div>
              <div className="flex gap-2 items-center p-1 ml-2">
                <SearchIcon size={20} className=" text-violet-900" />
                <input
                  onChange={(e) => {
                    filtrarPorNombreContiene(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Backspace") {
                      // Código de tecla para la tecla de retroceso
                      setTableData(initialData);
                    }
                  }}
                  className="m-0 p-0 border-0 border-b-2 border-violet-800 bg-transparent  
              placeholder:text-gray-700  
              focus:ring-0 focus:border-violet-950"
                  placeholder="Buscar por nombre "
                />
              </div>
            </div>
            <div className="flex mr-1 gap-1 items-center">
              <p className=" font-medium text-violet-900 text-lg">
                Pases Confirmados:
              </p>
              <p className="font-bold text-violet-950 text-xl">
                {invitadosConfirmadosTotales}
              </p>
            </div>
          </div>
          <DataTable data={tableData} columns={columns} />
        </div>
      )}
    </>
  );
};

export default InvitadosConfirmadosTabla;
