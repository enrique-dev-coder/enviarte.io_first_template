"use client";
import React from "react";
import {
  HomeIcon,
  PartyPopperIcon,
  SendIcon,
  UtensilsIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useCookies } from "react-cookie";
import Link from "next/link";

const menuLinks = [
  { id: "1", link: "/dashboard/home", icon: <HomeIcon />, title: "Inicio" },
  {
    id: "3",
    link: "/dashboard/enviar",
    icon: <SendIcon />,
    title: "Enviar Invitacion",
  },
  {
    id: "2",
    link: "/dashboard/invitados",
    icon: <PartyPopperIcon />,
    title: "Invitados Confirmados",
  },
  {
    id: "3",
    link: "/dashboard/mesas",
    icon: <UtensilsIcon />,
    title: "Mesas de Invitados",
  },
];

const SideBar = () => {
  const currentPath = usePathname();
  const [cookies] = useCookies(["invitandofacil"]);
  return (
    <div className="w-2/12  h-screen bg-purple-50 flex flex-col border-r-2">
      <div className="m-3 text-lg">
        <p>Usuario:</p>
        <p className=" font-medium">
          {cookies?.invitandofacil?.verificarUsuario.name}
        </p>
      </div>
      <div className="my-2">
        {menuLinks.map((menuItem) => {
          return (
            <Link href={menuItem.link} key={menuItem.id}>
              <div
                className={`flex px-3 py-2 items-center gap-2 cursor-pointer
            ${currentPath === menuItem.link && " bg-purple-950 text-white"}
            hover:text-white hover:bg-purple-950`}
              >
                {menuItem.icon}
                <p>{menuItem.title}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
