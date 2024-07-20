import LoginForm from "@/components/sections/LoginForm";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
      <div className=" text-4xl">InvitandoFacil</div>
      <LoginForm />
      <div>
        <p>
          Si olvidaste tu contraseña envia un mensaje al correro
          titealvarado@gmail.com
        </p>
      </div>
    </div>
  );
};

export default page;
