"use client";
import React from "react";
import { HomeIcon, PartyPopperIcon, SendIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCookies } from "react-cookie";
import Link from "next/link";

const SideBar = () => {
  const currentPath = usePathname();
  console.log(currentPath);
  const [cookies] = useCookies(["invitandofacil"]);
  console.log(cookies);
  return (
    <div className="w-2/12  h-screen bg-purple-50 flex flex-col border-r-2">
      <div className="m-3 text-lg">
        <p>Usuario:</p>
        <p className=" font-medium">
          {cookies?.invitandofacil?.verificarUsuario.name}
        </p>
      </div>
      <div className="my-2">
        <Link href="/dashboard/home">
          <div
            className={`flex px-3 py-2 items-center gap-2 cursor-pointer
          ${
            currentPath === "/dashboard/home" &&
            "bg-dashboardMainDark text-white"
          }
          hover:text-white hover:bg-dashboardMainDark/75`}
          >
            <HomeIcon />
            <p>Inicio</p>
          </div>
        </Link>
        <div className="flex px-3 py-2 items-center gap-2 cursor-pointer hover:text-white hover:bg-dashboardMainDark/75">
          <PartyPopperIcon />
          <p>Invitados Confirmados</p>
        </div>
        <div className="flex px-3 py-2 items-center gap-2 cursor-pointer hover:text-white hover:bg-dashboardMainDark/75">
          <SendIcon />
          <p>Enviar invitacion</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
