// @ts-nocheck
"use client";
import { useState, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/UI/Dialog";
// TODO: este ahorita trae hardcoded el de danielayjosepablo, este rebe ser una prop que se  pase para hacer un neuvo link
import {
  PencilRulerIcon,
  MousePointerClickIcon,
  CopyIcon,
  RotateCcwIcon,
} from "lucide-react";

import { objetoAParametrosURL } from "@/utils/operaciones";

const EnviarInvManualPublic = ({
  invitacionLink,
}: {
  invitacionLink: string;
}) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const disableButton = !watch("nombre") || !watch("pasesAsignados");
  const [showLink, setShowLink] = useState(false);
  const [generatedLink, setGeneratedLink] = useState("");
  const [linkEnglish, setLinkEnglish] = useState(false);

  const generatedLinkRef = useRef(null);

  // TODO: ver si puedo quitar que se cierre el modal cuando se le pica en el overlay
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <button className=" shadow-sm rounded-full  bg-white flex flex-col items-center justify-center   gap-1 py-3 px-4 ">
            <p className="font-medium ">
              ✨ Genera un link personalizado para un invitado
            </p>{" "}
          </button>
        </DialogTrigger>
        <DialogContent
          className="bg-white cell:w-[320px] "
          clearFormState={() => {
            reset({ nombre: "", tel: "", pasesAsignados: "" });
            setShowLink(false);
          }}
        >
          <DialogHeader>
            <DialogTitle>
              <p className=" tracking-wide cell:text-xs">
                Rellena los campos, después envía tu link personalizado usando
                tu WhatsApp 🥳
              </p>
            </DialogTitle>
            <DialogDescription className="w-[100%]">
              <form
                onSubmit={handleSubmit((data) => {
                  setShowLink(true);
                  setGeneratedLink(
                    `${data.linkInvitacion}?${objetoAParametrosURL({
                      nombre: data.nombre,
                      pasesAsignados: data.pasesAsignados,
                    })}`
                  );
                })}
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
                    className="rounded focus:ring-purple-950  focus:border-1 focus:border-purple-950 placeholder:text-sm cell:text-xs"
                    placeholder="ej. Enrique Alvarado, Dra. Anabell Alvarado"
                  />
                </div>
                <div className="flex w-[95%] gap-2">
                  <div className="flex flex-col gap-1 w-[70%]">
                    <label className="font-medium">Link de tu invitacion</label>
                    <input
                      {...register("linkInvitacion")}
                      type="text"
                      className="rounded  focus:ring-purple-950  focus:border-1 focus:border-purple-950 placeholder:text-sm"
                      placeholder="ej. https://www.invitandofacil.com/boda/mariana&roberto"
                    />
                    <>
                      <p className=" text-sm  text-red-500 px-2">
                        {errors?.linkInvitacion?.message}
                      </p>
                    </>
                  </div>
                  <div className="flex flex-col gap-1 w-[30%] ">
                    <label className="font-medium">
                      Asigna los pases{" "}
                      <span className=" text-red-600 font-bold">*</span>
                    </label>
                    <input
                      {...register("pasesAsignados")}
                      required
                      className="rounded focus:ring-purple-950  focus:border-1 focus:border-purple-950 cell:text-xs"
                      type="number"
                      placeholder="ej. 2"
                    />
                  </div>
                </div>
                <button
                  // dato curioso:
                  // usar el type submit para que no se pongan lo que envias como params en la url
                  // nombre=Enrique&tel=8441753173&pasesAsignados=1
                  type="submit"
                  disabled={disableButton}
                  className=" disabled:bg-purple-950/50 bg-purple-950 w-[95%] text-white flex justify-center items-center py-2 rounded-md shadow-sm gap-1 cell:text-xs"
                >
                  <MousePointerClickIcon />
                  <p>Link personalizado de tu invitacion</p>
                </button>
              </form>
            </DialogDescription>
            {/*Url personalizad con la opcion de copiar y pegar al clipboard*/}
            {/* Este cuadro aparece al picarle al boton , se borra cuando se le da reset o cuando se vuelve a escribir*/}
            {showLink ? (
              <>
                <div
                  className=" bg-purple-100 py-4 w-[95%] rounded-md cursor-pointer "
                  onClick={() => {
                    const textToCopy = generatedLinkRef.current.outerText;
                    navigator.clipboard.writeText(textToCopy);
                  }}
                >
                  <div>
                    <p className=" text-center font-medium">
                      Click para copiar tu link!
                    </p>
                  </div>

                  <div className="flex  border-2 border-solid  border-purple-950 rounded-sm  cursor-pointer items-center bg-white p-2 m-2 ">
                    <p
                      ref={generatedLinkRef}
                      className="text-sm  text-wrap w-[90%]"
                    >
                      {generatedLink}
                    </p>
                    <CopyIcon />
                  </div>
                </div>
                <button
                  className="flex text-red-700"
                  onClick={() =>
                    reset({ nombre: "", tel: "", pasesAsignados: "" })
                  }
                >
                  <RotateCcwIcon />
                  Reset
                </button>
              </>
            ) : null}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EnviarInvManualPublic;
