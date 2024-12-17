"use client";
import { useState, useEffect } from "react";
import { SearchIcon, ChevronsUpDownIcon, CheckCircle2Icon } from "lucide-react";
import { Invitados } from "@prisma/client";

const SearchSelectRow = ({
  label,
  isSelected,
  onClickFn,
  pases,
}: {
  label: string;
  isSelected: boolean;
  onClickFn: VoidFunction;
  pases: number;
}) => (
  <>
    <div
      onClick={onClickFn}
      className={`cursor-pointer  py-1 px-2 ${
        isSelected
          ? "bg-purple-200 text-purple-950"
          : "hover:bg-purple-200 hover:text-purple-950"
      }`}
    >
      <div className="flex gap-2 items-center">
        {isSelected && <CheckCircle2Icon size={16} />}
        {label}
      </div>
      <div>Pases: {pases}</div>
    </div>
  </>
);

const UI = ({
  invitadosConfirmados,
  agregarOpcionesAlFormulario,
}: {
  invitadosConfirmados: Invitados[];
  agregarOpcionesAlFormulario: (data: Invitados[]) => void;
}) => {
  const [showAllOptionsBox, setShowAllOptionsBox] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Invitados[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const onClickOption = (value: Invitados) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };
  console.log(selectedOptions);
  // Filtrar opciones según el término de búsqueda
  const filteredInvitados = invitadosConfirmados?.filter((invitado) =>
    invitado.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    agregarOpcionesAlFormulario(selectedOptions);
  }, [selectedOptions]);

  // TODO: mejorar los invitados seleccionados que no se muestrna bien
  return (
    <>
      <div className="w-full relative">
        <div
          onClick={() => setShowAllOptionsBox(!showAllOptionsBox)}
          className="border w-full flex justify-center items-center py-2 border-purple-900 rounded-sm shadow-sm cursor-pointer"
        >
          <ChevronsUpDownIcon />
          Selecciona un invitado ...
        </div>
        {showAllOptionsBox && (
          <div className="border shadow-md absolute w-full p-4 rounded-lg translate-y-2 z-50 h-[300px] bg-white">
            {/*Search input*/}
            <div className="w-full flex gap-2 items-center">
              <SearchIcon className="text-purple-950" />
              <input
                className="w-full border rounded-md border-gray-300 focus:ring-0 focus:border-purple-500"
                placeholder="Buscar Invitado"
                onChange={(e) => setSearchTerm(e.target.value)} // Actualizar el valor de búsqueda
              />
            </div>
            <div
              className="
              h-[200px] my-4 overflow-y-scroll
              [&::-webkit-scrollbar]:w-2
              [&::-webkit-scrollbar-track]:bg-gray-100
              [&::-webkit-scrollbar-thumb]:bg-gray-300
            "
            >
              {filteredInvitados?.length > 0 ? (
                filteredInvitados.map((item, i) => (
                  <SearchSelectRow
                    key={i}
                    label={item.nombre}
                    pases={item.pasesConfirmados}
                    isSelected={selectedOptions.includes(item)}
                    onClickFn={() => onClickOption(item)}
                  />
                ))
              ) : (
                <div className="text-center py-2">
                  No se encontraron resultados
                </div>
              )}
            </div>
          </div>
        )}
        {selectedOptions.length > 0 && (
          <div>
            <p>Invitados en la mesa:</p>
            <div>
              {selectedOptions.map((option) => (
                <p key={option.id}>{option.nombre}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UI;
