"use client";
import React, { useEffect, ReactNode } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

const ClientSide = ({ children }: { children: ReactNode }) => {
  const [cookies] = useCookies(["invitandofacil"]);
  console.log(cookies);
  const { push } = useRouter();
  const isAdmin = cookies.invitandofacil?.verificarUsuario.rol === "admin";
  console.log(isAdmin);
  useEffect(() => {
    if (Object.keys(cookies).length === 0) {
      push("/login");
    }
  }, [cookies]);

  return (
    <div>
      {cookies?.invitandofacil?.verificarUsuario.rol !== "admin"
        ? "No eres el admin bro 😡"
        : children}
    </div>
  );
};

export default ClientSide;
