"use client";
import React, { useEffect, ReactNode } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

// TODO: el metodo de verificacion esta muy rustico pero es algo

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
