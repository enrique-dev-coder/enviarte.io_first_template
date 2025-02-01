// @ts-nocheck
"use client";
import { useState } from "react";
import { FileUpIcon, LoaderIcon, FrownIcon } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { ScrollArea } from "@/components/UI/ScrollArea";
import SendInviteTableRow from "./SendInviteTableRow";
import axios from "axios";
import { useCookies } from "react-cookie";

const UploadZone = ({ nombreWhats, linkParaEnviar, evento, linkFoto }) => {
  console.log(linkFoto);
  const [listaDeInvitados, setListaDeInvitados] = useState([]);
  const {
    mutate: subirListaDeInvitados,
    isPending,
    error,
    isSuccess,
  } = useMutation({
    mutationFn: (file) => {
      const bodyFormData = new FormData();
      // hacer el append desde aqui, si no mama
      bodyFormData.append("file", file);
      return axios.post("/api/invitados/parsearlista", bodyFormData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    },
    onSuccess: (data) => setListaDeInvitados(data.data.data),
  });
  const [cookies] = useCookies(["invitandofacil"]);

  const invitacionIdCookie =
    cookies?.invitandofacil.verificarUsuario.invitacionId;

  return (
    <>
      {isSuccess ? (
        <ScrollArea>
          <div className=" grid grid-cols-12 bg-slate-500 text-slate-50 py-1 px-2 rounded-t-lg">
            <div className="col-span-3">
              <p>Nombre</p>
            </div>
            <div className="col-span-2">
              <p>Teléfono</p>
            </div>
            <div className="col-span-1">
              <p>Pases</p>
            </div>
            <div className="col-span-4">
              <p>Link Personalizado</p>
            </div>
            <div className="col-span-2">
              <p>Enviar con whatsapp</p>
            </div>
          </div>
          {listaDeInvitados.map((item, i) => (
            <SendInviteTableRow
              linkFoto={linkFoto}
              nombreWhats={nombreWhats}
              linkParaEnviar={linkParaEnviar}
              evento={evento}
              key={i}
              invitacionId={invitacionIdCookie}
              nombre={item.nombre}
              tel={item.tel}
              pasesAsignados={item.pasesAsignados}
            />
          ))}
        </ScrollArea>
      ) : (
        <div className=" w-full h-full relative bg-gray-100  rounded-md flex items-center justify-center border-2 border-dashed border-emerald-500 ">
          <div className=" text-gray-700 flex flex-col justify-center items-center gap-2">
            {isPending ? (
              <div>
                <LoaderIcon
                  className=" animate-spin  text-green-600"
                  size={100}
                />
              </div>
            ) : (
              <>
                <FileUpIcon size={50} />
                <p className=" text-lg  text-center">
                  Arrastra y suelta un archivo de tipo .csv,.xlsx para generar
                  tu lista de invitaciones.
                </p>
                <p className=" text-lg  text-center">
                  También puedes dar click en el botón para subir el archivo
                  desde tu computadora.
                </p>
                <button className=" bg-emerald-700 text-white text-base py-1 px-2 rounded-full">
                  Cargar Lista
                </button>
                <form>
                  <input
                    className=" opacity-0 w-full h-full absolute inset-0"
                    onChange={(e) => subirListaDeInvitados(e.target.files[0])}
                    type="file"
                  />
                </form>
                {error ? (
                  <div className=" bg-red-600 text-white flex items-center justify-center rounded-md p-2 gap-2">
                    <FrownIcon />
                    <p>{error?.response.data.message}</p>
                  </div>
                ) : null}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default UploadZone;
