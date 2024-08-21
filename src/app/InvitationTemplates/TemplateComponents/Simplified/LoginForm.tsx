// @ts-nocheck
"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { AlertCircleIcon } from "lucide-react";
import { useCookies } from "react-cookie";
import { expirationDate } from "@/utils/time";
import axios from "axios";

type LoginFormInputs = {
  name: string;
  password: string;
};

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const { push } = useRouter();
  const [formError, setFormError] = useState(false);
  const [, setCookie] = useCookies();
  const { mutate: userLogin } = useMutation({
    mutationFn: (userLogin) => {
      return axios.post("/api/login", userLogin);
    },
    onSuccess: (response) => {
      // esto viene del NextResponse de 200 de la API,
      setCookie("invitandofacil", response.data, {
        expires: expirationDate,
      });
      push("/dashboard/home");
    },
    onError: (err) => {
      console.log("error:", err);
      setFormError(true);
    },
  });
  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => userLogin(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4  shadow-lg p-4 rounded-md bg-purple-50 w-3/12"
    >
      <div className="flex flex-col gap-1">
        <label className=" font-semibold">Nombre de usuario</label>
        <input
          {...register("name")}
          type="text"
          className="  border-dashboardMainSoft rounded-sm border-2  focus:border-dashboardMainDark focus:border-2 focus:ring-0"
          placeholder=""
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-semibold">Contraseña</label>
        <input
          {...register("password")}
          type="password"
          className="  border-dashboardMainSoft border-2 rounded-sm  focus:border-dashboardMainDark focus:border-2 focus:ring-0"
        />
      </div>
      {formError ? (
        <div className="bg-red-500 text-white flex items-center gap-2 p-1 rounded-full">
          <AlertCircleIcon />
          <p className=" text-sm">Nombre de usuario o contraseña incorrectos</p>
        </div>
      ) : null}

      <button
        type="submit"
        className=" bg-violet-900 text-white py-1 rounded-sm text-lg"
      >
        Entrar
      </button>
    </form>
  );
};

export default LoginForm;
