import React from "react";
import { SearchIcon } from "lucide-react";
const TableMenu = ({
  sumatoriaPasesConfirmados,
}: {
  sumatoriaPasesConfirmados: number;
}) => {
  return (
    <div className="py-2 rounded-lg flex items-center gap-4 w-full bg-violet-50 my-2  shadow-sm">
      <div>
        <form>
          <div className="flex gap-2 items-center p-1 ml-2">
            <SearchIcon size={20} className=" text-violet-900" />
            <input
              className="m-0 p-0 border-0 border-b-2 border-violet-800 bg-transparent  
              placeholder:text-gray-700  
              focus:ring-0 focus:border-violet-950"
              placeholder="Buscar por nombre "
            />
          </div>
        </form>
      </div>
      <div className="flex mr-1 gap-1 items-center">
        <p className=" font-medium text-violet-900 text-lg">
          Pases Confirmados:
        </p>
        <p className="font-bold text-violet-950 text-xl">
          {sumatoriaPasesConfirmados}
        </p>
      </div>
    </div>
  );
};

export default TableMenu;
