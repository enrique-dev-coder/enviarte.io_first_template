import React from "react";
import Image from "next/image";
import {
  CopyIcon,
  Link2Icon,
  PencilRulerIcon,
  ListChecksIcon,
} from "lucide-react";
import EnviarInvManual from "../modales/EnviarInvManual";
import EnviarInvWhatsApp from "../modales/EnviarInvWhatsApp";

// TODO:
// hacer algo como modal para enviar mensaje mediante la api del digybot
// opcion de generar el link y copiar para que el usuario lo mande el solo (✔)
// Subir tus datos de invitados mediante un excel , igual y que te aparezca esa tablita lista
// por ejemplo --> subes datos en un excel ---> opcion de Guardar --> quedan guardados --> ahi se puede revisar si ya se envio mediante el telefono
// TODO:
// Validadiones
// Cuando se usa la api que se quede registrado en la base de datos de enviados
// para que no envien mensajes al mismo y no saturar la API
// limitar el numero de usos de la api por usuario  a unos 20 por dia o aumentar por paquete
// TODO:
// FEATURES
// la doble confirmacion que dice lalito mediante un updgrade a la cloud  API
// esa doble confirmacion que sea un diseño muy chiquito nomas que diga si o no
// y esa doble confirmacion que aparezca en otra tab del menu

const EnviarInvitaciones = () => {
  return (
    <div className="p-2">
      <div className="flex gap-4  justify-between">
        <div className="w-4/12">
          <EnviarInvManual />
        </div>
        <div className="w-4/12">
          <EnviarInvWhatsApp />
        </div>
        <button className="shadow-sm rounded-md bg-amber-200 flex flex-col items-center justify-center w-4/12 text-black gap-1 py-2">
          <ListChecksIcon size={40} />
          <p className="w-9/12 font-medium">
            Revisa la lista de invitaciones enviadas
          </p>
        </button>
      </div>
    </div>
  );
};

export default EnviarInvitaciones;
