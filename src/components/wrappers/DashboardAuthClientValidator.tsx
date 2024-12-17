"use client";
import React, { useEffect, ReactNode } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

// TODO: el metodo de verificacion esta muy rustico pero es algo
// TODO: verificar con cookies desde el server con funciones de next
// TODO: esta mejor usar un metodo tipo el que use en the planners

const DashboardAuthClientValidator = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { push } = useRouter();

  const [cookies] = useCookies(["invitandofacil"]);

  useEffect(() => {
    if (Object.keys(cookies).length === 0) {
      push("/login");
    }
  }, [cookies]);

  return <>{Object.keys(cookies).length === 0 ? null : <>{children}</>}</>;
};

export default DashboardAuthClientValidator;
