import React from "react";
import { analogist, dancing, lora } from "@/fonts";
import Image from "next/image";
// componentes
import InvitationContainer from "@/components/wrappers/InvitationContainer";
import IngresarBoton from "@/app/InvitationTemplates/TemplateComponents/Customized/CommonComponents/IngresarBoton";
import Contador from "@/components/xv/en/Contador";
import ConfirmacionForm from "@/components/sections/en/ConfirmacionForm";
import { MapPin } from "lucide-react";
// imagenes para adornar
import adorno1 from "/public/assets/images/xvs/patita/adorno_1_sin_fondo.png";
import adorno2 from "/public/assets/images/xvs/patita/adorno_2_sin_fondo.png";
import adorno3 from "/public/assets/images/xvs/patita/adorno_3_sin_fondo.png";
import adorno4 from "/public/assets/images/xvs/patita/adorno_4_sin_fondo.png";
import sobre from "/public/assets/images/xvs/patita/sobre.svg";

// imagenes de la quinceañera
import quince1 from "/public/assets/images/xvs/patita/patita_1.jpeg";
import quince2 from "/public/assets/images/xvs/patita/patita_2.jpeg";
import SongButtonPlayer from "@/app/InvitationTemplates/Common/SongButtonPlayer";

const IngresarBotonProps = {
  font: dancing,
  novia: "XV's",
  novio: "Ana Patricia",
  join: "",
  color: {
    titleColor: "text-[#9650b3]",
    bgColor: "bg-[#9650b3]",
    textButtonColor: "text-white",
  },
};
const page = async ({ searchParams }: any) => {
  const name = searchParams?.name;

  return (
    <InvitationContainer
      spBackground="none"
      songLink="/assets/songs/patita2.mp3"
    >
      <SongButtonPlayer backgroundColor="bg-[#9650b3]" />
      <IngresarBoton
        buttonText="Enter"
        color={IngresarBotonProps.color}
        font={IngresarBotonProps.font}
        novia={IngresarBotonProps.novia}
        novio={IngresarBotonProps.novio}
        join={IngresarBotonProps.join}
      />

      <section className="max-w-[650px] mx-auto">
        {/* Hero container */}
        <div className=" flex flex-col gap-4 relative items-center justify-center cell:w-full h-auto py-10 z-20">
          <Image
            alt="adorno"
            src={adorno1}
            className=" absolute top-0 left-0 right-0 z-10"
          />
          <Image
            alt="adorno"
            src={adorno3}
            className=" absolute top-[30%] opacity-80 z-0 left-0 right-0"
          />
          <p
            className={`w-full mx-auto mt-[80px] ${dancing.className} text-[#654ca7] font-bold  text-center relative z-20 text-3xl`}
          >
            Patrick Abram{" "}
            <span className={`${analogist.className} font-light`}>&</span> Ana
            María
          </p>
          <div
            className={`  text-purple-900 relative z-20 text-[18px] font-bold w-10/12 mx-auto  `}
          >
            <p className=" text-center">
              are happy to invite you and your family to celebrate the 15th
              birthday
            </p>
            <p
              className={`w-[90%] mx-auto mt-[20px] ${dancing.className} text-[#654ca7]   text-center relative z-20 text-3xl`}
            >
              <b className=" text-5xl">Quinceañera</b>
            </p>
            <p className=" text-center">of their daughter</p>
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
          <div className="py-10">
            <p
              className={`${dancing.className} relative z-20 text-[#9650b3] font-bold text-center text-[64px]`}
            >
              Ana Patricia
            </p>
          </div>
        </div>
        <Contador
          color="pinkPalette"
          fechaEvento={new Date("2024-10-05T00:00:00")}
          fechaString=" Saturday October 5th"
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
                Church
              </h2>
              <p
                className={`
           text-2xl text-center cell:text-xl cell:px-2 cell:font-bold  font-bold text-purple-900
          `}
              >
                Iglesia del Ranchito del Rey y María Madre (Juaninos)
              </p>
              <p className=" text-2xl cell:text-xl cell:px-2 cell:font-bold text-purple-900">
                3:00 pm
              </p>
              <div className=" flex items-center cell:w-[90%] cell:mx-auto cell:flex-col">
                <MapPin className="  text-purple-900 font-bold " />
                <p className=" text-xl text-center cell:text-base text-purple-900 ">
                  Blvd. José Narro Robles s/n. Saltillo, Coah.
                </p>
              </div>
              <a href="https://maps.app.goo.gl/6uoGd4EwyddUgVz4A">
                <button
                  className={` bg-[#654ca7] text-white py-2 px-4 rounded-full`}
                >
                  location
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
                Party
              </h2>
              <p
                className={`
           text-2xl text-center cell:text-xl cell:px-2 cell:font-bold  font-bold text-purple-900
          `}
              >
                Quinta Los Pastores{" "}
              </p>
              <p className=" text-2xl cell:text-xl cell:px-2 cell:font-bold text-purple-900">
                8:00 pm
              </p>
              <div className=" flex items-center cell:w-[90%] cell:mx-auto cell:flex-col">
                <MapPin className="  text-purple-900  font-bold " />
                <p className=" text-xl text-center cell:text-base text-purple-900 ">
                  Blvd. Los Pastores 3731. Saltillo, Coah{" "}
                </p>
              </div>
              <a href="https://maps.app.goo.gl/pRUN6jyjZHNyoaa59">
                <button
                  className={` bg-[#654ca7] text-white py-2 px-4 rounded-full `}
                >
                  Location
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
            <p
              className={` 
           font-bold  text-center text-5xl py-1 text-[#9650b3]
            cell:text-3xl cell:px-4`}
            >
              * Sky blue color reserved
            </p>
          </div>
        </section>
        <section className="py-4 relative z-20">
          <div className="flex flex-col gap-2 justify-center items-center w-[45%] py-4  mx-auto cell:w-full">
            <h2
              className={` ${dancing.className} 
           font-bold  text-center text-5xl py-1 text-[#654ca7]
            cell:text-5xl cell:px-4`}
            >
              Gift Suggestion
            </h2>
            <Image src={sobre} alt="sobre" className="w-[30%] p-4" />
          </div>
        </section>
        {/*Confirmacion*/}
        <div className="bg-purple-50  py-20 px-10">
          <p
            className={` 
           font-bold  text-center text-5xl py-1 mb-4 text-purple-900
            cell:text-2xl cell:px-4`}
          >
            We are happy to invite you
          </p>
          <p
            className={` text-center text-5xl font-bold ${dancing.className} text-purple-900`}
          >
            {name}
          </p>
        </div>
      </section>
    </InvitationContainer>
  );
};

export default page;
