import React from "react";
import InvitationContainer from "@/components/wrappers/InvitationContainer";
import SongButtonPlayer from "@/app/InvitationTemplates/Common/SongButtonPlayer";
import IngresarBoton from "@/app/InvitationTemplates/TemplateComponents/Customized/CommonComponents/IngresarBoton";
import { lora, montse } from "@/fonts";
import img1 from "/public/assets/images/micayrosy/introupdate.png";
import imgAnillo from "/public/assets/images/micayrosy/anillo.jpg";
import imgCarro from "/public/assets/images/micayrosy/carro.jpeg";
import imgLogo from "/public/assets/images/micayrosy/logo-removebg-preview.png";
import imgCalle from "/public/assets/images/micayrosy/calle.jpg";
import imgPago1 from "/public/assets/images/micayrosy/pago1.jpeg";
import imgPago2 from "/public/assets/images/micayrosy/pago2.jpeg";
import imgPago3 from "/public/assets/images/micayrosy/pago3.jpeg";
import imgEscaleras1 from "/public/assets/images/micayrosy/Escaleras1.jpg";
import imgEscaleras2 from "/public/assets/images/micayrosy/escaleras2.jpg";
import imgAmorEterno from "/public/assets/images/micayrosy/amorEterno.jpg";
import imgFut from "/public/assets/images/micayrosy/Fut.jpg";
import { Metadata } from "next/types";
import whatsLogo from "/public/assets/images/micayrosy/whatslogo-removebg-preview.png";

import Image from "next/image";
export const metadata: Metadata = {
  title: "Mica y Rosy",
  description: "Bodas",
};
const page = () => {
  const invitationData = {
    IngresarBotonProps: {
      font: lora,
      novia: "Mica",
      novio: "Rosy",
      join: "&",
      color: {
        titleColor: "text-[#AB765A]",
        bgColor: "bg-[#AB765A]",
        textButtonColor: "text-white",
      },
    },
  };
  const { IngresarBotonProps } = invitationData;
  // comentario alvvvv x2
  return (
    <InvitationContainer songLink="/assets/songs/micayrosy.m4a">
      <IngresarBoton
        buttonText="Ingresar"
        font={IngresarBotonProps.font}
        novia={IngresarBotonProps.novia}
        novio={IngresarBotonProps.novio}
        join={IngresarBotonProps.join}
        color={IngresarBotonProps.color}
      />
      <div className=" w-full  bg-[#A48066]  py-8">
        {/*Intro*/}
        <div className="text-center mx-auto">
          <h1 className=" uppercase  text-white font-semibold  text-[48px] leading-[60px] ">
            Mica
            <span className=" text-[64px]">&</span>
            Rosy
          </h1>
          <p className="uppercase text-white my-2 text-[40px]">Nos Casamos</p>
        </div>
      </div>
      {/*Picture 1*/}
      <div>
        <Image alt="boda" src={img1} />
      </div>
      <div className="bg-stone-50 text-[#AB765A] text-center text-[22px] px-4 py-6">
        <p className={`${montse.className}`}>
          "El destino nos ha unido, y ahora queremos que tú formes parte de
          nuestra historia en un lugar mágico."
        </p>
        <p className={`${montse.className}`}>
          ¡Nos encantaría contar con tu presencia, nuestra boda es en playa!
        </p>
      </div>
      {/*Poner el contador, despues cuando haya mas tiempo??*/}
      <div className=" w-full  bg-[#A48066] py-4">
        <div className="text-center mx-auto flex flex-col gap-4">
          <h1 className="   text-white  text-[44px] leading-[60px] ">
            Save the date!
          </h1>
          <h1
            className={`${montse.className} text-white  text-[64px] leading-[60px]`}
          >
            16 de Mayo
            <br />
            2026
          </h1>
          <div className="w-10/12 mx-auto h-[3px] bg-white"></div>
          <p className="uppercase text-white my-2 text-[32px] px-3">
            PUERTO VALLARTA, JALISCO
          </p>
        </div>
      </div>
      {/*Mas Fotos*/}
      <div>
        <Image alt="boda" src={imgAnillo} />
      </div>
      <div
        style={{
          backgroundImage: `url(${imgCarro.src})`,
        }}
        className=" h-screen bg-cover bg-center  bg-no-repeat  bg-black/20 bg-blend-overlay "
      >
        <div className=" h-full flex flex-col justify-between items-center">
          <Image alt="boda" src={imgLogo} className=" w-8/12" />
          <div className=" text-[28px] text-white font-bold pb-10">
            <p>Save the date</p>
            <p>16 Mayo 2026 </p>
          </div>
        </div>
      </div>
      <div>
        <Image alt="boda" src={imgCalle} />
      </div>
      {/* {Hoteles y precios} */}
      <div
        className={`${montse.className} bg-stone-50 text-[#AB765A] text-center text-[28px] px-4 py-6`}
      >
        <p>PUERTO VALLARTA, JALISCO</p>
        <p className=" font-bold text-[36px]">15, 16 y 17</p>
        <p className=" font-bold">Mayo 2026</p>
        <p>Hotel Krystal Grand Nuevo Vallarta</p>
      </div>
      {/* Tarifas y plan de pagos*/}
      <div>
        <Image alt="boda" src={imgPago2} />
      </div>
      <div>
        <Image alt="boda" src={imgPago1} />
      </div>
      <div>
        <Image alt="boda" src={imgPago3} />
      </div>
      {/*Reservar asistencia*/}
      <div
        className={`${montse.className} bg-stone-50 text-[#AB765A] text-center text-[28px] px-4 py-6`}
      >
        <p className="uppercase font-bold mb-2">HABITACIONES TODO INCLUIDO</p>
        <p className=" text-[22px]">
          Para <span className=" font-bold">RESERVAR TU ASISTENCIA</span> es
          necesario contactes nuestra agencia de viaje, aquí te dejamos el
          contacto
        </p>
        <a href="https://api.whatsapp.com/send?phone=5218441180895&text=Hola!%20Estoy%20interesado%20en%20la%20reservaci%C3%B3n%20para%20la%20boda%20de%20Mica%20y%20Rosy%20">
          <div className="flex bg-[#AB765A] text-white items-center justify-around my-4 p-2 rounded-md text-[20px]">
            <Image alt="whats logo" src={whatsLogo} className="w-[20%]" />
            Whatssapp Alisson Viajes
          </div>
        </a>
        <p className=" text-[24px]">
          Inicias tu contrato con el pago de tu primer mensualidad.
        </p>
        <p className=" font-bold">FECHA LIMITE DE RESERVACIÓN </p>
        <p className=" font-bold underline">30 DE MARZO 2025</p>
      </div>
      {/*Mas fotos*/}
      <div>
        <Image alt="boda" src={imgEscaleras2} />
      </div>
      <div>
        <Image alt="boda" src={imgEscaleras1} />
      </div>
      <div>
        <Image alt="boda" src={imgAmorEterno} />
      </div>
      {/*Final*/}
      <div className="bg-stone-50 text-[#AB765A] text-center text-[28px] px-4 py-6">
        <p>Nos encantará,</p>
        <p>contar con tu presencia...</p>
        <h1 className=" uppercase  text-[#AB765A]  text-[64px] leading-[60px]  my-4">
          Mica
          <span className="">&</span>
          Rosy
        </h1>
      </div>
      <div>
        <Image alt="boda" src={imgFut} />
      </div>
      <SongButtonPlayer backgroundColor="bg-[#AB765A]" />
    </InvitationContainer>
  );
};

export default page;
