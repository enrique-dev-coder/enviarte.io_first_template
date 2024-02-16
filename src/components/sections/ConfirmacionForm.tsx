import React from "react";
import { dancing, inter } from "@/fonts";

const ConfirmacionForm = () => {
  return (
    <section className=" h-auto py-8 bg-[#f8f4f1]">
      <p
        className={`${dancing.className}    font-bold  text-center text-4xl cell:text-3xl cell:px-4 `}
      >
        Por favor, confirma tu asistencia.
      </p>
      <p className="text-center text-xl my-3 cell:text-xl cell:px-4 ">
        Hemos contemplado <span className="font-bold text-2xl">2</span> pases
        para ti
      </p>
      <form
        className={`${inter.className} flex flex-col justify-center  items-center  gap-4 w-[50%] mx-auto
        cell:w-full cell:px-8
        `}
      >
        <div className="flex flex-col w-full">
          <label className=" text-xl font-medium cell:text-lg">Nombre *</label>
          <input
            type="text"
            required
            className="bg-transparent border-b-2 border-x-0 border-t-0 border-black  focus:ring-0 focus:border-complementaryDark"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className=" text-xl font-medium cell:text-xl">
            Teléfono *
          </label>
          <input
            type="tel"
            required
            className="bg-transparent border-b-2 border-x-0 border-t-0 border-black  focus:ring-0 focus:border-complementaryDark"
          />
        </div>
        {/* seccion de confirmacion de pases */}
        <div className={`${inter.className} flex w-full gap-4 items-center`}>
          <label className="text-xl font-medium cell:text-lg">
            Personas que asistirán:
          </label>
          <div className="flex gap-2 items-center">
            <input
              type="radio"
              id="huey"
              name="drone"
              value="huey"
              className=""
            />
            <label className="text-lg font-bold">1</label>
          </div>
          <div className="flex gap-2 items-center">
            <input type="radio" id="huey" name="drone" value="huey" />
            <label className="text-lg font-bold">2</label>
          </div>
        </div>
        <div className="w-full">
          <label className="text-xl font-medium cell:text-lg">
            <input
              type="checkbox"
              id="cbox1"
              value="first_checkbox"
              className="mr-2 accent-red-500"
            />
            Lo siento, NO podré asistir 😥
          </label>
        </div>
        <div className="py-2 cell:w-full">
          <button
            type="submit"
            className=" bg-complementaryDark text-white px-6 text-lg rounded-full py-2 cell:w-full"
          >
            Confirmar
          </button>
        </div>
      </form>
    </section>
  );
};

export default ConfirmacionForm;
