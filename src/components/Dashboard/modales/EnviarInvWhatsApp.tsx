// @ts-nocheck
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import { TypesForSendingWhatsAppInvite } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/UI/Dialog";

import WhatsAppIcon from "/public/assets/images/icons8-whatsapp.svg";

import { objetoAParametrosURL } from "@/utils/operaciones";

import axios from "axios";

// TODO: agregar un +tipo preview del whatsapp con la pantallita y un mensaje por default o igual y solo un mensajito en la parte de abajo
// TODO: ver con lalo y dani que debe decir el mensaje

const EnviarInvWhatsApp = ({
  nombreWhats,
  linkParaEnviar,
  evento,
  linkFoto,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const disableButton = !watch("nombre") || !watch("pasesAsignados");
  const [cookies] = useCookies(["invitandofacil"]);
  const [inviteSendCorrectly, setInviteSentCorrectly] = useState(false);
  const invitacionIdCookie =
    cookies?.invitandofacil.verificarUsuario.invitacionId;

  const {
    mutate: enviarInvitacionPorApiWhats,
    isPending,
    error,
  } = useMutation({
    mutationFn: (invitacionEnviada) => {
      return axios.post("/api/invitacion/enviar", invitacionEnviada);
    },
    onSuccess: () => {
      setInviteSentCorrectly(true);
      reset({ nombre: "", tel: "", pasesAsignados: "" });
    },
    onError: (err) => console.log(err),
  });

  const onSubmit: SubmitHandler<TypesForSendingWhatsAppInvite> = (data) => {
    enviarInvitacionPorApiWhats({
      nombre: data.nombre,
      nombreWhats: nombreWhats,
      linkInvitacion: linkParaEnviar,
      evento: evento,
      tel: data.tel,
      invitacionId: invitacionIdCookie,
      whatsMessage: `${objetoAParametrosURL(data)}`,
      linkFoto,
    });
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <button className="shadow-sm rounded-md h-[110px] bg-green-200 flex flex-col items-center justify-center  text-black gap-1 p-2">
            <Image src={WhatsAppIcon} width={48} alt="usa nuestro whatsapp" />
            <p className=" font-medium">
              Enviar con un solo click usando nuestro whatsapp
            </p>
          </button>
        </DialogTrigger>
        <DialogContent className="bg-white ">
          <DialogHeader>
            <DialogTitle>
              <div>
                <p className="w-[95%]">
                  Rellena los campos, después envia tu invitacion con un solo
                  click usando nuestro WhatsApp.
                </p>
                <p className="text-sm font-light py-1 w-[95%]">
                  Te ayudamos enviando a tu contacto el link personalizado para
                  tu invitacion, el mensaje llega del numero 524462132882, tu
                  invitado puede confirmar su asistencia entrando a el link de
                  tu invitación
                </p>
              </div>
            </DialogTitle>
            <DialogDescription>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="py-1 flex flex-col gap-4 "
              >
                <div className="flex flex-col gap-1  w-[95%]">
                  <label className="font-medium">
                    Nombre de tu invitado{" "}
                    <span className=" text-red-600 font-bold">*</span>
                  </label>
                  <input
                    {...register("nombre")}
                    type="text"
                    required
                    className="rounded focus:ring-green-500  focus:border-1 focus:border-green-500 placeholder:text-sm"
                    placeholder="ej. Enrique Alvarado, Dra. Anabell Alvarado, Sr. Gustavo"
                  />
                </div>
                <div className="flex w-[95%] gap-2">
                  <div className="flex flex-col gap-1 w-[70%]">
                    <label className="font-medium">
                      Teléfono de tu invitado {"(10 dígitos)"}
                      <span className=" text-red-600 font-bold">*</span>
                    </label>
                    <div className="flex items-center gap-1">
                      <input
                        {...register("tel", {
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message:
                              "Porfavor, escribe tu celular solo con números, recuerda deben ser 10 digitos :)",
                          },
                        })}
                        type="text"
                        required
                        className="rounded  focus:ring-green-500  focus:border-1 focus:border-green-500 placeholder:text-sm"
                        placeholder="ej. 8441753174"
                      />
                    </div>
                    <>
                      <p className=" text-sm  text-red-500 px-2">
                        {errors?.tel?.message}
                      </p>
                    </>
                  </div>
                  <div className="flex flex-col gap-1 w-[40%]  ">
                    <label className="font-medium">
                      Asigna los pases{" "}
                      <span className=" text-red-600 font-bold">*</span>
                    </label>
                    <input
                      {...register("pasesAsignados")}
                      required
                      className="rounded  focus:ring-green-500  focus:border-1 focus:border-green-500"
                      type="number"
                      placeholder="ej. 2"
                    />
                  </div>
                </div>
                {isPending ? (
                  <p>Enviando ...</p>
                ) : (
                  <button
                    // dato curioso:
                    // usar el type submit para que no se pongan lo que envias como params en la url
                    // nombre=Enrique&tel=8441753173&pasesAsignados=1
                    type="submit"
                    disabled={disableButton}
                    className=" disabled:bg-green-600/70 bg-green-600 w-[95%] text-white flex justify-center items-center py-2 rounded-md shadow-sm gap-1"
                  >
                    <Image
                      src={WhatsAppIcon}
                      width={24}
                      alt="usa nuestro whatsapp"
                    />
                    <p className="font-bold">Enviar !</p>
                  </button>
                )}
                <p className=" text-center font-medium text-red-500 w-[95%]">
                  {error?.response.data.message}
                </p>
                {inviteSendCorrectly && (
                  <p className=" text-center font-medium text-emerald-500 w-[95%]">
                    Invitación enviada Correctamente 🥳
                  </p>
                )}
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EnviarInvWhatsApp;
