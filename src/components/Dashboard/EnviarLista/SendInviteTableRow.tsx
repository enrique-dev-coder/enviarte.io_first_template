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
}: {
  nombre: string;
  tel: string;
  pasesAsignados: string;
  invitacionId: string;
}) => {
  // TODO: aqui se tiene que mandar el nombre de invitacion para hacer link
  // por el momento lo dejare hardcodeado

  const generatedLinkRef = useRef(null);
  console.log(tel);
  const {
    mutate: enviarInvitacionPorApiWhats,
    isPending,
    error,
  } = useMutation({
    mutationFn: (invitacionEnviada: TypesForSendingWhatsAppInvite) => {
      return axios.post("/api/invitacion/enviar", invitacionEnviada);
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });
  const disableButton = !nombre || !tel || !pasesAsignados;
  return (
    <div className=" grid grid-cols-12 border border-slate-500 py-1 px-2">
      <div className="col-span-3 flex items-center">
        <p>{nombre}</p>
      </div>
      <div className="col-span-2 flex items-center">
        <p>{tel}</p>
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
          className="col-span-4 overflow-hidden flex items-center cursor-pointer gap-2"
          onClick={() => {
            const textToCopy = generatedLinkRef.current.outerText;
            navigator.clipboard.writeText(textToCopy);
          }}
        >
          <p
            ref={generatedLinkRef}
            className="w-10/12 overflow-hidden p-1 border border-slate-300"
          >{`${objetoAParametrosURL({ nombre, tel, pasesAsignados })}`}</p>

          <div className="flex flex-col justify-center items-center ">
            <ClipboardCopyIcon />
            <p className=" text-xs">Copiar</p>
          </div>
        </button>
      )}

      <div className="col-span-2 flex gap-2 justify-center items-center group">
        {error ? (
          <p className=" text-xs font-bold text-red-600">
            {error?.response.data.message}
          </p>
        ) : (
          <>
            <button
              disabled={disableButton}
              onClick={() =>
                enviarInvitacionPorApiWhats({
                  invitacionId,
                  nombre,
                  tel: tel.toString(),
                  whatsMessage: `https://www.invitandofacil.com/boda/danielayjosepablo?${objetoAParametrosURL(
                    { nombre, tel, pasesAsignados }
                  )}`,
                })
              }
              className=" w-full flex items-center justify-center px-1 gap-1 disabled:cursor-not-allowed disabled:bg-red-100 disabled:group-hover:bg-red-100  bg-emerald-200 group-hover:bg-emerald-600  rounded-lg py-2 font-medium"
            >
              {isPending ? (
                <LoaderIcon className="animate-spin" />
              ) : (
                <>
                  <WhatsIcon
                    className={
                      "group-hover:fill-emerald-50 disabled:group-hover:fill-black"
                    }
                  />
                  <p className=" text-lg group-hover:text-emerald-50 disabled:group-hover:text-black">
                    Enviar
                  </p>
                </>
              )}
            </button>
            <button>
              <Popover>
                <PopoverTrigger>
                  <HelpCircleIcon />
                </PopoverTrigger>
                <PopoverContent className=" bg-white">
                  <p className=" text-xs">
                    {" "}
                    Te ayudamos enviando a tu contacto el link personalizado
                    para tu invitacion, el mensaje llega del numero{" "}
                    <b>524462132882</b>, tu invitado puede confirmar su
                    asistencia entrando a el link de tu invitación
                  </p>
                </PopoverContent>
              </Popover>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default SendInviteTableRow;
