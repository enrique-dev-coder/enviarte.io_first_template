//@ts-nocheck
"use client";
import React, { useEffect, useState } from "react";
import { LoaderIcon, SearchIcon } from "lucide-react";

const InvitadosConfirmadosTabla = ({ dataInvitados, isLoading, isSuccess }) => {
  const [tableData, setTableData] = useState([]);
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    if (isSuccess) {
      setTableData(dataInvitados);
      setInitialData(dataInvitados);
    }
  }, [dataInvitados, isSuccess]);

  function filtrarPorNombreContiene(subcadena) {
    setTableData(
      initialData.filter((item) =>
        item.nombre.toLowerCase().includes(subcadena.toLowerCase())
      )
    );
  }

  return (
    <>
      {isLoading ? (
        <div className="w-full h-full flex justify-center items-center">
          <LoaderIcon className="animate-spin text-dashboardMainDark" />
        </div>
      ) : (
        <div className="flex flex-col w-full px-2">
          {/* Buscador */}
          <div className="py-2 rounded-lg flex items-center gap-4 w-full bg-violet-50 my-2 shadow-sm">
            <div className="flex gap-2 items-center p-1 ml-2">
              <SearchIcon size={20} className="text-violet-900" />
              <input
                onChange={(e) => filtrarPorNombreContiene(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Backspace") {
                    setTableData(initialData);
                  }
                }}
                className="m-0 p-0 border-0 border-b-2 border-violet-800 bg-transparent  
                  placeholder:text-gray-700  
                  focus:ring-0 focus:border-violet-950"
                placeholder="Buscar por nombre"
              />
            </div>
          </div>

          {/* Tabla manual */}
          <div className="overflow-x-auto shadow-sm rounded-lg border border-gray-200">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-violet-100 text-violet-900">
                <tr>
                  <th className="px-4 py-2 font-semibold">Nombre</th>
                  <th className="px-4 py-2 font-semibold">Teléfono</th>
                </tr>
              </thead>
              <tbody>
                {tableData.length > 0 ? (
                  tableData.map((item, idx) => (
                    <tr
                      key={idx}
                      className="border-t border-gray-200 hover:bg-violet-50"
                    >
                      <td className="px-4 py-2 font-medium">{item.nombre}</td>
                      <td className="px-4 py-2">{item.tel}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={2}
                      className="px-4 py-4 text-center text-gray-500"
                    >
                      No se encontraron registros
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default InvitadosConfirmadosTabla;
