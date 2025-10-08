/// @ts-nocheck
"use client";
// styling
import React, { useRef } from "react";
import { objetoAParametrosURL } from "@/utils/operaciones";
import {
  ClipboardCopyIcon,
  HelpCircleIcon,
  LoaderIcon,
  FrownIcon,
} from "lucide-react";
import { WhatsIcon } from "./Icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/UI/Popover";
// communication
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { TypesForSendingWhatsAppInvite } from "@/types";

const SendInviteTableRow = ({
  nombre,
  tel,
  pasesAsignados,
  invitacionId,
  nombreWhats,
  linkParaEnviar,
  evento,
  linkFoto,
}: {
  nombre: string;
  tel: string;
  pasesAsignados: string;
  invitacionId: string;
  nombreWhats: string;
  linkParaEnviar: string;
  evento: string;
  linkFoto: string;
}) => {
  // TODO: aqui se tiene que mandar el nombre de invitacion para hacer link
  // por el momento lo dejare hardcodeado

  const generatedLinkRef = useRef(null);
  const {
    mutate: enviarInvitacionPorApiWhats,
    isPending,
    isSuccess,
    error,
  } = useMutation({
    mutationFn: (invitacionEnviada: TypesForSendingWhatsAppInvite) => {
      return axios.post("/api/invitacion/enviar", invitacionEnviada);
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });
  const disableButton = !nombre || !pasesAsignados;
  return (
    <div className=" grid grid-cols-12 border border-slate-500 py-1 px-2">
      <div className="col-span-3 flex items-center">
        <p>{nombre}</p>
      </div>
      <div className="col-span-1 flex items-center">
        <p>{pasesAsignados}</p>
      </div>

      {disableButton ? (
        <button className="col-span-4 overflow-hidden flex items-center cursor-pointer gap-2">
          <p className="w-10/12 overflow-hidden p-1 text-red-600 border border-slate-300  text-sm">
            Disculpa, para generar tu link necesitas tener en tu archivo el
            nombre, teléfono{" (10 dígitos)"} y los pases asignados por invitado
          </p>
          <div className="flex flex-col justify-center items-center ">
            <FrownIcon />
          </div>
        </button>
      ) : (
        <button
          className="col-span-8 overflow-hidden flex items-center cursor-pointer gap-2"
          onClick={() => {
            const textToCopy = generatedLinkRef.current.outerText;
            navigator.clipboard.writeText(textToCopy);
          }}
        >
          <p
            ref={generatedLinkRef}
            className="w-10/12 overflow-hidden p-1 border border-slate-300"
          >{`${linkParaEnviar}?${objetoAParametrosURL({
            nombre,
            pasesAsignados,
          })}`}</p>

          <div className="flex flex-col justify-center items-center ">
            <ClipboardCopyIcon />
            <p className=" text-xs">Copiar</p>
          </div>
        </button>
      )}
    </div>
  );
};

export default SendInviteTableRow;
