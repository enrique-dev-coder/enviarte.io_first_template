// @ts-nocheck
"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { dancing, inter } from "@/fonts";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import ConfirmationModal from "./ConfirmationModal";
import { Loader } from "lucide-react";

type ConfirmacionFormInputs = {
  nombre: string;
  tel: string;
  pasesAsignados: number;
  pasesConfirmados: number;
};

const ConfirmacionForm = ({
  invitationId,
  pasesAsignados,
  nombreInvitado,
  telInvitado,
  styling,
}: {
  invitationId: { id: string };
  pasesAsignados?: string;
  nombreInvitado?: string;
  telInvitado?: string;
  styling: {
    section: {
      backgroundColor: string;
    };
    confirmButton: {
      backgroundColor: string;
      disabledBackgroundColor: string;
    };
  };
}) => {
  const [confirmacion, setConfirmacion] = useState(false);
  // NOTE: dejo este log por si acaso se necesita para debugear
  console.log(invitationId);
  // TODO: deberia guardar un cookie para bloquear el form si ya confirmaste????
  // porque puedo hacer que aparezca otro mensaje si el cookie trae el nombre de usuario y el tel igual a los params del url
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { mutate: registrarInvitado, isPending } = useMutation({
    mutationFn: (invitadoRegistrado) => {
      return axios.post("/api/invitados/register", invitadoRegistrado);
    },
    onSuccess: () => {
      // mostrar modal de confirmacion de evento
      setConfirmacion(true);
    },
    // spinner mientras carga
    onError: (err) => console.log(err),
  });
  const onSubmit: SubmitHandler<ConfirmacionFormInputs> = (data) =>
    registrarInvitado({
      ...data,
      ppasesConfirmados: Number(data.pasesConfirmados),
      pasesAsignados: Number(pasesAsignados),
      invitacionId: invitationId?.id,
    });

  const usuarioClickEnPases = watch("pasesConfirmados");

  const ArrayPases = Array.from(
    { length: Number(pasesAsignados) || 2 },
    (_, index) => index + 1
  ); // [1,2]

  return (
    <section className={`h-auto py-8 ${styling.section.backgroundColor}`}>
      <p
        className={`${dancing.className} underline font-bold  text-center text-5xl cell:text-3xl cell:px-4 `}
      >
        {nombreInvitado}
      </p>
      <p
        className={`${dancing.className}    font-bold  text-center text-4xl cell:text-3xl cell:px-4 `}
      >
        Por favor, confirma tu asistencia.
      </p>
      <p className="text-center text-xl my-3 cell:text-xl cell:px-4 ">
        Hemos contemplado{" "}
        <span className="font-bold text-2xl">{pasesAsignados}</span> pases para
        ti
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
            value={nombreInvitado}
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
            value={telInvitado}
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
          <div className="flex gap-2 cell:flex-col flex-wrap">
            <div className="flex gap-2  items-center">
              <div className="flex gap-2 items-center">
                <input
                  {...register("pasesConfirmados")}
                  type="radio"
                  id="0"
                  value="0"
                />
                <label className=" font-bold">No asistiré 😥</label>
              </div>
            </div>
            {ArrayPases.map((i) => (
              <div key={i} className="flex gap-2 items-center">
                <input
                  {...register("pasesConfirmados")}
                  type="radio"
                  id={i}
                  value={i}
                  className=""
                />
                <label className=" font-bold">{`${i} ${
                  i === 1 ? "persona" : "personas"
                }`}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="py-2 cell:w-full">
          {!isPending ? (
            <button
              type="submit"
              disabled={!usuarioClickEnPases}
              className={`${styling.confirmButton.backgroundColor} ${styling.confirmButton.disabledBackgroundColor} text-white px-6 text-lg rounded-full py-2 cell:w-full`}
            >
              Confirmar
            </button>
          ) : (
            <div className="flex  gap-2">
              <Loader className=" animate-spin" />
              <p>Confirmando ...</p>
            </div>
          )}
        </div>
      </form>
      {confirmacion ? (
        <ConfirmationModal
          pasesConfirmados={Number(watch("pasesConfirmados"))}
          closeModal={() => setConfirmacion(false)}
        />
      ) : null}
    </section>
  );
};

export default ConfirmacionForm;
