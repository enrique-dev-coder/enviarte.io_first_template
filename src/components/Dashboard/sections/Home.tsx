"use client";
import React from "react";
import { useCookies } from "react-cookie";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import axios from "axios";
import { LoaderIcon, MousePointerClick } from "lucide-react";
const Home = () => {
  // obtener el cookie
  // hacer query por el invitation id del cookie
  // endpoint que me mande el link de la invitacion, pases confirmados etc

  const [cookies] = useCookies(["invitandofacil"]);
  const router = useRouter();

  if (!cookies?.invitandofacil) {
    router.push("/login");
  }

  const invitacionId = cookies?.invitandofacil.verificarUsuario.invitacionId;

  const {
    error,
    data: invitationInfo,
    isLoading,
  } = useQuery({
    queryKey: ["invitationData"],
    queryFn: () => {
      return axios.get(`/api/invitacion/id/${invitacionId}`);
    },
  });

  return (
    <>
      {isLoading ? (
        <div className="w-full h-full flex justify-center items-center">
          <LoaderIcon className=" animate-spin  text-dashboardMainDark" />
        </div>
      ) : (
        <div className="flex flex-col w-full gap-4">
          <div className=" bg-purple-100 mx-4 px-6 py-4 mt-6  rounded-lg">
            <p className=" font-bold text-lg pb-3">Visita tu invitacion:</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className=" cursor-pointer flex text-lg  bg-purple-900 text-white w-fit   px-2 py-1 rounded-md"
              href={`https://www.invitandofacil.com${invitationInfo?.data.invitationName}`}
            >
              <MousePointerClick />
              {`https://www.invitandofacil.com${invitationInfo?.data.invitationName}`}
            </a>
          </div>
          {/*info adicional*/}
          {/*TODO: hacer esta parte dinamica, por lo pronto se comenta para no confundir*/}
          {/* <div className="flex  mx-4 gap-2">
            <div className="w-4/12 bg-purple-100 rounded-lg h-[124px]  pl-6 py-4 ">
              <p className="text-lg font-bold">Invitados Confirmados</p>
              <p className=" text-6xl text-purple-900 ">200</p>
            </div>
            <div className="w-4/12 bg-purple-100 rounded-lg h-[124px]  pl-6 py-4 ">
              <p className="text-lg font-bold">Fecha???</p>
              <p className=" text-6xl text-purple-900 ">18-08-2024</p>
            </div>
            <div className="w-4/12 bg-purple-100 rounded-lg h-[124px]  pl-6 py-4 ">
              <p className="text-lg font-bold">que otra info?</p>
              <p className=" text-2xl text-purple-900 ">Instrucciones</p>
            </div>
          </div> */}
        </div>
      )}
    </>
  );
};

export default Home;
