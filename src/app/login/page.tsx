import LoginForm from "@/components/sections/LoginForm";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
      <div className=" text-4xl">LOGO</div>
      <LoginForm />
      <div>
        <p>Mensaje de si se te olvido tu clave contactes al admin</p>
      </div>
    </div>
  );
};

export default page;
