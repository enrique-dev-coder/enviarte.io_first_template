"use client";
import React from "react";
import InvitationContainer from "@/components/wrappers/InvitationContainer";
import IngresarBoton from "@/app/InvitationTemplates/TemplateComponents/Customized/CommonComponents/IngresarBoton";
import PlaceCard from "@/app/InvitationTemplates/TemplateComponents/Modern/PlaceCard";
import Padres from "@/app/InvitationTemplates/TemplateComponents/Modern/Padres";
import ItinerarioScrollable from "@/app/InvitationTemplates/TemplateComponents/Customized/Itinerarios/ItinerarioScrollable";
import PadrinosDeBoda from "@/app/InvitationTemplates/TemplateComponents/Customized/PadrinosDeBoda";
import MesaDeRegalos from "@/app/InvitationTemplates/TemplateComponents/Customized/CommonComponents/MesaDeRegalos";
import ConfirmacionForm from "@/components/sections/ConfirmacionForm";
import SongButtonPlayer from "@/app/InvitationTemplates/Common/SongButtonPlayer";

import { lora, montse, dancing } from "@/fonts";
import Image from "next/image";
import { motion } from "framer-motion";

import Hero from "./Hero";
import Contador from "./Contador";
//images
import imgBanner from "/public/assets/images/vianey&oscar/banner.png";
import DressCodeMujeres from "/public/assets/images/Dress_icon.png";
import DressCodeHombres from "/public/assets/images/suit_icon-removebg-preview.png";
import Sobre from "/public/assets/images/email.png";
import whatsLogo from "/public/assets/images/micayrosy/whatslogo-removebg-preview.png";
import imgCas from "/public/assets/images/vianey&oscar/cas.jpeg";

const Body = ({
  nombre,
  tel,
  pasesAsignados,
  invitationIdForQuery,
}: {
  nombre: string;
  tel: string;
  pasesAsignados: string;
  invitationIdForQuery: { id: string };
}) => {
  return (
    <InvitationContainer songLink="/assets/songs/vianeyoscar.mp3">
      <IngresarBoton
        buttonText="Ingresar"
        font={lora}
        novia="Vianey"
        novio="Oscar"
        join="&"
        color={{
          bgColor: "bg-[#014b66]",
          titleColor: "text-[#014b66]",
          textButtonColor: "text-white",
        }}
      />
      <Hero />
      <div className="  py-8 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`${lora.className} text-center text-[#014b66] font-bold   text-5xl cell:text-4xl py-4 `}
        >
          Corintios 13:7 :
        </motion.h2>
        <motion.q
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`${montse.className} text-[#014b66] text-center py-4 px-8 text-3xl cell:text-2xl`}
        >
          El amor nunca se da por vencido, jamás pierde la Fe, siempre tiene
          esperanza y se mantiene firme en toda circunstancia
        </motion.q>
      </div>
      <Contador
        fechaEvento={new Date("2025-09-20T00:00:00")}
        fechaString="20 Septiembre 2025"
        fotoContador="bg-[url('/assets/images/vianey&oscar/contador.png')]"
      />
      <div className=" bg-white py-8">
        <motion.h2
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`text-[#014b66] text-center  text-[28px]    py-4 `}
        >
          Estas cordialmente invitado
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={` text-center text-[28px] font-bold py-4 px-8`}
        >
          {nombre}
        </motion.p>
      </div>
      <Padres />

      <PlaceCard
        show={true}
        titleColor={"text-[#014b66]"}
        titleFont={lora}
        bgButtonColor={"bg-[#014b66]"}
        desc={"Ceremonia Religiosa"}
        direccion={
          "Huitzilopochtli 591, Los Pinos 2do y 3er Sector, 25204 Saltillo, Coah."
        }
        hora={"4:00 pm"}
        nombre={{
          content:
            "Parroquia, Santa María Reina de los Apóstoles, SAMARA Saltillo",
          font: montse,
        }}
        ubicacion={"https://maps.app.goo.gl/cVbigs6uhxaEWE2B8"}
      />
      <div className="  p-4 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`${lora.className} text-center text-[#00AEAE] font-bold   text-5xl cell:text-lg  `}
        >
          ¡Sabemos que la ceremonia de una boda puede ser tediosa para los más
          pequeños de la casa y para evitar conflictos en esta ocasión los
          pequeños NO están invitados a la misa!
        </motion.h2>
      </div>
      <PlaceCard
        show={true}
        titleColor={"text-[#014b66]"}
        titleFont={lora}
        bgButtonColor={"bg-[#014b66]"}
        desc={"Recepción"}
        direccion={
          "Blvd. Eulalio Gutiérrez Treviño 1695-N° 1695, El Rosario, 25297 Saltillo, Coah."
        }
        hora={"Civil: 7:00 pm "}
        horaDos="Fiesta: 8:00 pm"
        nombre={{
          content: "Recepciones El Nogal",
          font: montse,
        }}
        ubicacion={"https://maps.app.goo.gl/N7Q935PSz4eEBR2J6"}
      />
      {/* Info Extra */}
      <div className="bg-white">
        <p className="text-center  text-xl mb-4 cell:text-xl cell:mb-1">
          ¿Hace cuanto no tienen una noche solos?
        </p>
        <p className="text-center  text-lg mb-4  cell:mb-1">
          Ya tienen a quien echarle la culpa, ¡díganles a sus hijos que no
          dejaremos entrar a los niños!{" "}
        </p>
        <p className="text-center  text-lg mb-4 cell:mb-1">NO NIÑOS</p>
        <p className="text-center  text-lg mb-6 cell:mb-1">
          (Evítanos la pena de que se les niegue la entrada)
        </p>
        <div className="w-full h-[2px] my-4 bg-[#014b66]"></div>
        <p className="text-center px-4 text-lg">
          ¡Para ayudarte podemos recomendarte a una agencia para el cuidado de
          tus niños, va hasta tu hotel o casa!
          <br /> Agenda con tiempo y pregunta por nuestros precios especiales
          mencionando que es para la boda de Vianey & Alejandro
        </p>
        <div>
          <Image src={imgCas} alt="Cas" className="w-[50%] mx-auto" />
        </div>
        <motion.a
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          href="https://api.whatsapp.com/send?phone=5218442762180&text=Servicio%20de%20ni%C3%B1era%20para%20la%20boda%20de%20Vianey%20y%20Oscar"
        >
          <div className="flex bg-[#014b66] text-white items-center justify-around m-4 p-2 rounded-md text-[20px]">
            <Image alt="whats logo" src={whatsLogo} className="w-[20%]" />
            Casandra Cárdenas
            <br /> “Babysitter CAS”
          </div>
        </motion.a>
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
        className={`${lora.className} text-center text-[#014b66] font-bold   text-5xl cell:text-4xl py-4 `}
      >
        Itinerario
      </motion.h2>
      <ItinerarioScrollable
        showItinerario={true}
        eventData={[
          {
            id: 1,
            evento: "⛪️ Ceremonia Religiosa",
            hora: "4:00 pm",
            Icon: "church",
          },
          {
            id: 3,
            evento: "🥂 Civil",
            hora: "7:00 pm",
            Icon: "recepcion",
          },
          {
            id: 2,
            evento: "🥳 Recepción",
            hora: "8:00 pm",
            Icon: "party",
          },
        ]}
        sectionStyling={{
          lineColor: "bg-[#014b66]",
          lineBg: "bg-[#00AEAE]/20",
          circleColor: "stroke-[#014b66]",
          circleBg: "bg-gray-50",
          circleSoftStroke: "stroke-[#00AEAE]/20",
          iconColor: "text-gray-900",
          cardBg: "bg-white",
        }}
      />
      <div>
        <Image src={imgBanner} alt="boda" />
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
        className={`${lora.className} text-center text-[#014b66] font-bold   text-5xl cell:text-4xl py-4 `}
      >
        Padrinos de Boda
      </motion.h2>
      {/* Padrinos */}

      <PadrinosDeBoda
        cardStyling={{ titleColor: "text-[#014b66]", titleFont: lora }}
        showSlider={true}
        padrinos={[
          {
            madrinasRamos: false,
            madrina: "Rosa Clementina Nieto Velázquez ",
            padrino: "José Luis Alcalá González",
            tema: "Padrinos de Velación",
          },
          {
            madrinasRamos: false,
            madrina: "Jonatan Isai Valdez Alvarez",
            padrino: "Ricardo David Martínez Hernández ",
            tema: "PADRINOS DE ANILLOS",
          },
          {
            madrinasRamos: false,
            madrina: "Carolina Elizabeth Aleman Castro",
            padrino: "Abraham Anibal Aleman Castro",
            tema: "PADRINOS DE ARRAS",
          },
          {
            madrinasRamos: false,
            madrina: "Patricia Alejandra Urzua Flores",
            padrino: "",
            tema: "MADRINA DE BIBLIA Y ROSARIO",
          },
          {
            madrinasRamos: false,
            madrina: "María Fernanda Sánchez Aguillón",
            padrino: "Natalia María Gómez Herrera",
            tema: "MADRINAS DE COJIN",
          },
          {
            madrinasRamos: false,
            madrina: "María Fernanda Murua Ceja",
            padrino: "José Efraín Gaona Flores",
            tema: "PADRINOS DE LAZO",
          },
          {
            madrinasRamos: true,
            madrina:
              "Monserrat Nieto Acosta Andrea Guadalupe Vega Méndez María Fernanda Ramírez Nieto ",
            padrino: "",
            tema: "MADRINAS DE RAMO",
          },
        ]}
      />
      {/* Sugerencia de Regalos */}

      <motion.h2
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
        className={`${lora.className} text-center text-[#014b66] font-bold   text-5xl cell:text-4xl py-4 `}
      >
        Dress Code
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
        className={`${lora.className} text-center text-[#014b66] font-bold underline   text-5xl cell:text-4xl py-4 `}
      >
        Formal Riguroso
      </motion.h2>
      <div className="flex  flex-col items-center justify-center cell:w-full">
        <div className=" w-11/12 flex justify-center my-4  cell:h-auto  cell:flex-col cell:w-12/12 cell:gap-10">
          <div className="w-6/12 flex flex-col justify-center items-center cell:w-full">
            {" "}
            <Image alt="boda" src={DressCodeMujeres} className="w-[50%]" />
            <p className={`font-bold text-4xl text-[#014b66] cell:text-2xl`}>
              Mujeres
            </p>
            <p className="  text-4xl mb-4 cell:text-xl cell:mb-1">
              Vestido Largo
            </p>
          </div>
          <p className="text-center uppercase underline text-xl mb-4 cell:text-xl cell:mb-1">
            COLORES EXCLUSIVOS DE LAS DAMAS FAVOR DE NO UTILIZAR
          </p>
          <div className="w-6/12 mx-auto text-xl">
            <div className="flex gap-2">
              <div className=" w-[20px] h-[20px] rounded-full bg-[#00AEAE]"></div>
              <p>Teal</p>
            </div>
            <div className="flex gap-2">
              <div className=" w-[20px] h-[20px] rounded-full bg-[#014b66]"></div>
              <p>Blue green</p>
            </div>
          </div>
          <p className="text-center uppercase underline text-xl mb-4 cell:text-xl cell:mb-1">
            Queda prohibido llevar
          </p>
          <div className="w-6/12 mx-auto text-xl">
            <ul className=" list-disc">
              <li>Rojo</li>
              <li>Champagne Claro</li>
              <li>Blush Pink muy claro</li>
              <li>Baby Blue muy claro</li>
              <li>Gris claro</li>
              <li>Perla</li>
              <li>Color hueso</li>
              <li>Color Beige</li>
              <li>Rosa Palo</li>
            </ul>
          </div>
          <p className="text-center text-xl mb-4 cell:text-xl cell:mb-1">
            ¡Prepárense para una boda llena de colores!
          </p>
          <p className="text-center text-[#014b66] underline text-xl mb-4 cell:text-xl cell:mb-1">
            DEJEN EL BLANCO PARA LA NOVIA
          </p>
          <div className="w-6/12 flex flex-col justify-center items-center cell:w-full">
            {" "}
            <Image alt="boda" src={DressCodeHombres} className="w-[35%]" />
            <p className={`font-bold text-4xl text-[#014b66] cell:text-2xl`}>
              Hombres
            </p>
            <p className="  text-4xl mb-4 cell:mb-1 cell:text-xl">
              Traje Formal
            </p>
            <p className="text-center uppercase underline text-xl mb-4 cell:text-xl cell:mb-1">
              Queda prohibido llevar
            </p>
            <div className="w-6/12 mx-auto text-xl">
              <ul className=" list-disc">
                <li>Botas vaqueras</li>
                <li>Pantalones de mezclilla </li>
              </ul>
            </div>
          </div>
          <div>
            <p className="text-center text-[#014b66]  text-xl cell:text-xl cell:mb-1">
              ¡Nuestro equipo escoltara a los infractores hasta la puerta!
            </p>
            <p className="text-center text-[#014b66]  text-xl cell:text-xl cell:mb-1">
              (Evítanos la pena de que se le niegue la entrada)
            </p>
          </div>
        </div>
      </div>
      <MesaDeRegalos
        FraseAgradecimientoFinalColor=""
        FraseAgradecimientoFinalFont={undefined}
        FraseAgradecimientoFinalSize=""
        FraseAgradecimientoFinalText=""
        FraseAgradecimientoInicioColor=""
        FraseAgradecimientoInicioFont={undefined}
        FraseAgradecimientoInicioSize=""
        FraseAgradecimientoInicioText=""
        SectionTitleColor="text-[#014b66]"
        SectionTitleFont={lora}
        ShowFraseDeAgradecimientoFinal={false}
        ShowFraseDeAgradecimientoInicio={false}
        ShowRegalo={false}
        ShowSobres={true}
        ShowTransferencia={true}
        datosTransferencia={{
          numero: "4152 3142 3205 7730 BBVA",
          owner: "Oscar Alejandro Alemán",
        }}
        SobresImg={Sobre}
        SobresTextColor=""
        SobresTextContent="Lluvia de sobres"
        SobresType="modern"
        backGround=""
        ShowLiverpool={true}
        liverpoolNoEvento="51579492"
        showAmazon={false}
      />
      <ConfirmacionForm
        invitationId={{ id: invitationIdForQuery.id }}
        nombreInvitado={nombre}
        pasesAsignados={pasesAsignados}
        telInvitado={tel}
        styling={{
          section: {
            backgroundColor: "bg-white",
            textColor: "text-[#014b66]",
          },
          confirmButton: {
            backgroundColor: "bg-[#014b66]",
            disabledBackgroundColor: "bg-[#014b66]/60",
          },
        }}
      />
      <SongButtonPlayer backgroundColor="bg-[#014b66]" />
    </InvitationContainer>
  );
};

export default Body;
