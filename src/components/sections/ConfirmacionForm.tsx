// @ts-nocheck
"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { dancing, inter } from "@/fonts";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import ConfirmationModal from "./ConfirmationModal";

type ConfirmacionFormInputs = {
  nombre: string;
  tel: string;
  pasesAsignados: number;
  pasesConfirmados: number;
};

const ConfirmacionForm = ({
  invitationId,
  pasesAsignados = 2,
}: {
  invitationId: { id: string };
  pasesAsigandos: number;
}) => {
  const [confirmacion, setConfirmacion] = useState(false);
  console.log(invitationId);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { mutate: registrarInvitado } = useMutation({
    mutationFn: (invitadoRegistrado) => {
      return axios.post("/api/invitados/register", invitadoRegistrado);
    },
    onSuccess: () => {
      // mostrar modal de confirmacion de evento
      setConfirmacion(true);
    },
    onError: (err) => console.log(err),
  });

  const onSubmit: SubmitHandler<ConfirmacionFormInputs> = (data) =>
    registrarInvitado({
      ...data,
      ppasesConfirmados: Number(data.pasesConfirmados),
      pasesAsignados,
      invitacionId: invitationId?.id,
    });

  const usuarioClickEnPases = watch("pasesConfirmados");

  return (
    <section className=" h-auto py-8 bg-[#f8f4f1]">
      <p
        className={`${dancing.className}    font-bold  text-center text-4xl cell:text-3xl cell:px-4 `}
      >
        Por favor, confirma tu asistencia.
      </p>
      <p className="text-center text-xl my-3 cell:text-xl cell:px-4 ">
        Hemos contemplado <span className="font-bold text-2xl">2</span> pases
        para ti
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`${inter.className} flex flex-col justify-center  items-center  gap-4 w-[50%] mx-auto
        cell:w-full cell:px-8
        `}
      >
        <div className="flex flex-col w-full">
          <label className=" text-xl font-medium cell:text-lg">Nombre *</label>
          <input
            {...register("nombre")}
            type="text"
            required
            className="bg-transparent border-b-2 border-x-0 border-t-0 border-black  focus:ring-0 focus:border-complementaryDark"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className=" text-xl font-medium cell:text-xl">
            Teléfono *
          </label>
          <input
            {...register("tel", {
              pattern: {
                value: /^[0-9]{10}$/,
                message:
                  "Porfavor, escribe tu celular solo con números, recuerda deben ser 10 digitos :)",
              },
            })}
            type="text"
            placeholder="8441753174"
            required
            className="bg-transparent border-b-2 border-x-0 border-t-0 border-black  focus:ring-0 focus:border-complementaryDark"
          />
          <p className=" text-sm  text-red-500 px-2">{errors?.tel?.message}</p>
        </div>
        {/* seccion de confirmacion de pases */}
        <div className={`${inter.className} flex flex-col  w-full gap-4 `}>
          <label className="text-xl font-medium cell:text-lg">
            Personas que asistirán:
          </label>
          <div className="flex gap-2">
            <div className="flex gap-2 items-center">
              <div className="flex gap-2 items-center">
                <input
                  {...register("pasesConfirmados")}
                  type="radio"
                  id="0"
                  value="0"
                />
                <label className=" font-bold">No asistiré 😥</label>
              </div>
              <input
                {...register("pasesConfirmados")}
                type="radio"
                id="1"
                value="1"
                className=""
              />
              <label className=" font-bold">1 pase</label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                {...register("pasesConfirmados")}
                type="radio"
                id="2"
                value="2"
              />
              <label className="font-bold">2 pases</label>
            </div>
          </div>
        </div>
        <div className="py-2 cell:w-full">
          <button
            type="submit"
            disabled={!usuarioClickEnPases}
            className=" disabled:bg-complementaryDark/50 bg-complementaryDark text-white px-6 text-lg rounded-full py-2 cell:w-full"
          >
            Confirmar
          </button>
        </div>
      </form>
      {confirmacion ? (
        <ConfirmationModal closeModal={() => setConfirmacion(false)} />
      ) : null}
    </section>
  );
};

export default ConfirmacionForm;
