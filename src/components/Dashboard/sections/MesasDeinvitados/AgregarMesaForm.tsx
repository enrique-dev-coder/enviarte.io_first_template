import React, { useState } from "react";
import SearchSelectDropdownCustom from "@/components/UI/SearchSelectDropdown";
import { Invitados } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const AgregarMesaForm = ({ invitacionId }: { invitacionId: string }) => {
  interface agregarMesaDataProps {
    nombreMesa: string;
    invitadosSeleccionados: Invitados[];
    invitacionId: string;
    numeroMesa: string;
  }
  const [agregarMesaData, setAgregarMesaData] = useState<agregarMesaDataProps>({
    nombreMesa: "",
    invitadosSeleccionados: [],
    invitacionId: invitacionId,
    numeroMesa: "",
  });

  const { mutate: agregarMesa, isPending } = useMutation({
    mutationFn: (agregarMesaData) => {
      return axios.post("/api/mesas/agregar", agregarMesaData);
    },
    onSuccess: () => {
      // mostrar mensaje de confirmacion
    },
    // spinner mientras carga
    onError: (err) => console.log(err),
  });

  const submitMesaForm = (
    e: React.FormEvent<HTMLFormElement>,
    formData: any
  ) => {
    e.preventDefault();
    agregarMesa(formData);
  };

  return (
    <form
      onSubmit={(e) => submitMesaForm(e, agregarMesaData)}
      className=" flex flex-col gap-2"
    >
      <div className="flex flex-col">
        <label className=" text-purple-950 ">Nombre de la Mesa</label>
        <input
          onChange={(e) =>
            setAgregarMesaData({
              ...agregarMesaData,
              nombreMesa: e.target.value,
            })
          }
          className=" rounded-sm"
          type="text"
          placeholder="ej. mesa familia,mesa 1, mesa profesores, etc."
        />
      </div>
      <div>
        <SearchSelectDropdownCustom
          agregarOpcionesAlFormulario={(data: Invitados[]) =>
            setAgregarMesaData({
              ...agregarMesaData,
              invitadosSeleccionados: data,
            })
          }
        />
      </div>
      <div className="flex flex-col">
        <label className=" text-purple-950 ">Numero de la mesa:</label>
        <input
          onChange={(e) =>
            setAgregarMesaData({
              ...agregarMesaData,
              numeroMesa: e.target.value,
            })
          }
          className=" rounded-sm"
          type="number"
          placeholder="ej. mesa familia,mesa 1, mesa profesores, etc."
        />
      </div>
      <button type="submit">Agregar !</button>
    </form>
  );
};

export default AgregarMesaForm;
