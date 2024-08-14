import React from "react";
import { analogist, dancing } from "@/fonts";
import Image from "next/image";
// componentes
import InvitationContainer from "@/components/wrappers/InvitationContainer";
import IngresarBoton from "@/app/InvitationTemplates/TemplateComponents/Customized/CommonComponents/IngresarBoton";
import Contador from "@/components/xv/Contador";
import ConfirmacionForm from "@/components/sections/ConfirmacionForm";
import { MapPin } from "lucide-react";
// imagenes para adornar
import adorno1 from "/public/assets/images/xvs/patita/adorno_1_sin_fondo.png";
import adorno2 from "/public/assets/images/xvs/patita/adorno_2_sin_fondo.png";
import adorno3 from "/public/assets/images/xvs/patita/adorno_3_sin_fondo.png";
import adorno4 from "/public/assets/images/xvs/patita/adorno_4_sin_fondo.png";
// imagenes de la quinceañera
import quince1 from "/public/assets/images/xvs/patita/patita_1.jpeg";
import quince2 from "/public/assets/images/xvs/patita/patita_2.jpeg";
import SongButtonPlayer from "@/app/InvitationTemplates/Common/SongButtonPlayer";

const IngresarBotonProps = {
  font: dancing,
  novia: "XVs",
  novio: "Ana Patricia",
  join: "",
  color: {
    titleColor: "text-[#9650b3]",
    bgColor: "bg-[#9650b3]",
    textButtonColor: "text-white",
  },
};
const page = async ({ searchParams }: any) => {
  const nombre = searchParams?.nombre;
  const tel = searchParams?.tel;
  const pasesAsignados = searchParams?.pasesAsignados;

  return (
    <InvitationContainer
      spBackground="none"
      songLink="/assets/songs/patita.mp3"
    >
      <SongButtonPlayer backgroundColor="bg-[#9650b3]" />
      <IngresarBoton
        color={IngresarBotonProps.color}
        font={IngresarBotonProps.font}
        novia={IngresarBotonProps.novia}
        novio={IngresarBotonProps.novio}
        join={IngresarBotonProps.join}
      />
      <Image
        alt="adorno"
        src={adorno1}
        className=" absolute top-0 left-0 right-0 z-10"
      />
      <Image
        alt="adorno"
        src={adorno3}
        className=" absolute top-[30%] opacity-80  left-0 right-0"
      />
      {/* Hero container */}
      <div className=" flex flex-col gap-4 relative items-center justify-center cell:w-full h-[70vh] z-20">
        <div className={` text-[#654ca7]  text-[44px] leading-[60px]  italic `}>
          <p className=" -translate-x-6">Mis</p>
          <p className=" italic  text-[84px]">XV</p>
          <p className=" translate-x-10">años</p>
        </div>
        <div>
          <p
            className={`${dancing.className} text-[#9650b3] font-bold text-center text-[48px]`}
          >
            Ana Patricia
          </p>
          {/* <div className="text-[#9650b3] text-center text-[22px]">
            <p className="">
              Te invito a celebrar conmigo este día tan especial
            </p>
            <p>¡No faltes!</p>
          </div> */}
          <p
            className={`${dancing.className} text-[#654ca7] font-bold text-center text-[48px]`}
          >
            Octubre 5
          </p>
        </div>
      </div>
      <div className="-mt-4 z-20 relative">
        <Image src={quince1} alt="invitaciones digitales" />
      </div>
      <div className="relative">
        <Image
          alt="adorno"
          src={adorno3}
          className=" absolute top-0 opacity-80  left-0 right-0"
        />
        <p
          className={`w-[80%] mx-auto my-10 ${dancing.className} text-[#654ca7]  text-center relative z-20 text-3xl`}
        >
          <span className="text-[#9650b3]">
            Con la bendición de Dios y de mis papás
          </span>
          <br />
          <b>
            Patrick Abram Quinn
            <br /> y Ana María Rosas Fonseca.
          </b>
        </p>
      </div>
      <Contador
        color="pinkPalette"
        fechaEvento={new Date("2024-10-05T00:00:00")}
        fechaString="Sábado, 5 de Octubre de 2024"
        fotoContador="bg-[url('/assets/images/xvs/patita/contador.jpeg')]"
      />
      {/*Placecards con iglesia y fiesta*/}
      <div className="relative">
        <Image
          alt="adorno"
          src={adorno3}
          className=" absolute top-[40%] opacity-80  left-0 right-0 z-0"
        />
        <Image
          alt="adorno"
          src={adorno1}
          className=" absolute top-0 left-0 right-0 z-10"
        />
        <Image
          alt="adorno"
          src={adorno4}
          className=" absolute bottom-0 left-0 right-0 z-10"
        />
        <section className="py-4 relative z-20">
          <div className="flex flex-col gap-2 justify-center items-center w-[45%] py-4  mx-auto cell:w-full">
            <h2
              className={` ${dancing.className} 
           font-bold  text-center text-5xl py-1 text-[#654ca7]
            cell:text-5xl cell:px-4`}
            >
              Misa
            </h2>
            <p
              className={`
           text-2xl text-center cell:text-xl cell:px-2 cell:font-bold  font-bold 
          `}
            >
              Iglesia del Ranchito del Rey y María Madre (Juaninos)
            </p>
            <p className=" text-2xl cell:text-xl cell:px-2 cell:font-bold">
              3:00 pm
            </p>
            <div className=" flex items-center cell:w-[90%] cell:mx-auto cell:flex-col">
              <MapPin className="  text-gray-700 font-bold " />
              <p className=" text-xl text-center cell:text-base ">
                Blvd. José Narro Robles s/n. Saltillo, Coah.
              </p>
            </div>
            <a href="https://maps.app.goo.gl/6uoGd4EwyddUgVz4A">
              <button
                className={` bg-[#654ca7] text-white py-2 px-4 rounded-full`}
              >
                Cómo llegar
              </button>
            </a>
          </div>
        </section>
        <section className="py-4 relative z-20">
          <div className="flex flex-col gap-2 justify-center items-center w-[45%] py-4  mx-auto cell:w-full">
            <h2
              className={` ${dancing.className} 
           font-bold  text-center text-5xl py-1 text-[#654ca7]
            cell:text-5xl cell:px-4`}
            >
              Recepción
            </h2>
            <p
              className={`
           text-2xl text-center cell:text-xl cell:px-2 cell:font-bold  font-bold 
          `}
            >
              Quinta Los Pastores{" "}
            </p>
            <p className=" text-2xl cell:text-xl cell:px-2 cell:font-bold">
              8:00 pm
            </p>
            <div className=" flex items-center cell:w-[90%] cell:mx-auto cell:flex-col">
              <MapPin className="  text-gray-700 font-bold " />
              <p className=" text-xl text-center cell:text-base ">
                Blvd. Los Pastores 3731. Saltillo, Coah{" "}
              </p>
            </div>
            <a href="https://maps.app.goo.gl/pRUN6jyjZHNyoaa59">
              <button
                className={` bg-[#654ca7] text-white py-2 px-4 rounded-full`}
              >
                Cómo llegar
              </button>
            </a>
          </div>
        </section>
      </div>
      {/*fotos banner*/}
      <div className="-mt-4 z-20 relative">
        <Image src={quince2} alt="invitaciones digitales" />
      </div>
      <section className="py-4 relative z-20">
        <div className="flex flex-col gap-2 justify-center items-center w-[45%] py-4  mx-auto cell:w-full">
          <h2
            className={` ${dancing.className} 
           font-bold  text-center text-5xl py-1 text-[#654ca7]
            cell:text-5xl cell:px-4`}
          >
            Dresscode
          </h2>
          <h2
            className={` ${dancing.className} 
           font-bold  text-center text-5xl py-1 text-[#9650b3]
            cell:text-5xl cell:px-4`}
          >
            Formal
          </h2>
        </div>
      </section>
      {/*Confirmacion*/}
      <ConfirmacionForm
        invitationId={{ id: "1" }}
        nombreInvitado={nombre}
        pasesAsignados={pasesAsignados}
        telInvitado={tel}
        styling={{
          section: {
            backgroundColor: "bg-purple-50",
          },
          confirmButton: {
            backgroundColor: "bg-[#654ca7]",
            disabledBackgroundColor: "disabled:bg-[#654ca7]/50",
          },
        }}
      />
    </InvitationContainer>
  );
};

export default page;
