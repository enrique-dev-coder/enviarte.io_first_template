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

const EnviarInvManual = ({ invitacionLink }: { invitacionLink: string }) => {
  console.log(invitacionLink);
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
  console.log(generatedLink);
  const [linkEnglish, setLinkEnglish] = useState(false);
  console.log(linkEnglish);
  const generatedLinkRef = useRef(null);

  // TODO: mejorar el multidioma

  const validacionIngles =
    invitacionLink === "https://www.invitandofacil.com/xvs/patita";
  console.log(validacionIngles);

  // TODO: ver si puedo quitar que se cierre el modal cuando se le pica en el overlay
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <button className=" shadow-sm rounded-md h-[110px] bg-purple-200 flex flex-col items-center justify-center  text-purple-950 gap-1 py-2 px-6 ">
            <PencilRulerIcon size={40} />
            <p className="font-medium">
              Genera un link personalizado para un invitado
            </p>{" "}
          </button>
        </DialogTrigger>
        <DialogContent
          className="bg-white "
          clearFormState={() => {
            reset({ nombre: "", tel: "", pasesAsignados: "" });
            setShowLink(false);
          }}
        >
          <DialogHeader>
            <DialogTitle>
              <p className=" tracking-wide">
                Rellena los campos, después envia tu link personalizado usando
                tu WhatsApp 🥳
              </p>
            </DialogTitle>
            <DialogDescription>
              <form
                onSubmit={handleSubmit((data) => {
                  setShowLink(true);
                  setGeneratedLink(
                    `${
                      !linkEnglish
                        ? invitacionLink
                        : "https://www.invitandofacil.com/xvs/en/patita"
                    }?${objetoAParametrosURL(data)}`
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
                    className="rounded focus:ring-purple-950  focus:border-1 focus:border-purple-950 placeholder:text-sm"
                    placeholder="ej. Enrique Alvarado, Dra. Anabell Alvarado, Sr. Gustavo"
                  />
                </div>
                <div className="flex w-[95%] gap-2">
                  <div className="flex flex-col gap-1 w-[70%]">
                    <label className="font-medium">
                      Teléfono de tu invitado {"(Opcional)"}
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
                      className="rounded  focus:ring-purple-950  focus:border-1 focus:border-purple-950 placeholder:text-sm"
                      placeholder="ej. 8441753174"
                    />
                    <>
                      <p className=" text-sm  text-red-500 px-2">
                        {errors?.tel?.message}
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
                      className="rounded focus:ring-purple-950  focus:border-1 focus:border-purple-950"
                      type="number"
                      placeholder="ej. 2"
                    />
                  </div>
                </div>
                {validacionIngles ? (
                  <div>
                    <button
                      onClick={() => setLinkEnglish(!linkEnglish)}
                      className={`cursor-pointer ${
                        linkEnglish ? "bg-purple-900" : "bg-purple-900/40"
                      }  text-white rounded-full px-4`}
                    >
                      Usa Link en Ingles
                    </button>
                  </div>
                ) : null}
                <button
                  // dato curioso:
                  // usar el type submit para que no se pongan lo que envias como params en la url
                  // nombre=Enrique&tel=8441753173&pasesAsignados=1
                  type="submit"
                  disabled={disableButton}
                  className=" disabled:bg-purple-950/50 bg-purple-950 w-[95%] text-white flex justify-center items-center py-2 rounded-md shadow-sm gap-1"
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
                    {/*si esto empieza ya con el link se desborda el texto , por obras misteriosas de html y css*/}
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

export default EnviarInvManual;
