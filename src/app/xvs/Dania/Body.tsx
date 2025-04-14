"use client";
import React from "react";
import InvitationContainer from "@/components/wrappers/InvitationContainer";
import IngresarBoton from "@/app/InvitationTemplates/TemplateComponents/Customized/CommonComponents/IngresarBoton";
import PlaceCard from "@/app/InvitationTemplates/TemplateComponents/Modern/PlaceCard";
import MesaDeRegalos from "@/app/InvitationTemplates/TemplateComponents/Customized/CommonComponents/MesaDeRegalos";
import SongButtonPlayer from "@/app/InvitationTemplates/Common/SongButtonPlayer";
import ItinerarioScrollable from "@/app/InvitationTemplates/TemplateComponents/Customized/Itinerarios/ItinerarioScrollable";
import ConfirmacionForm from "@/components/sections/ConfirmacionForm";
import GraciasBanner from "@/app/InvitationTemplates/TemplateComponents/Customized/Agradecimientos/GraciasBanner";
import {
  lora,
  champagne,
  dancing,
  paris,
  allura,
  adorage,
  cambria,
  bavaria,
  montse,
} from "@/fonts";
import Image from "next/image";
import { motion } from "framer-motion";
import PadrinosDeBoda from "@/app/InvitationTemplates/TemplateComponents/Customized/PadrinosDeBoda";
import Hero from "./Hero";
import Contador from "./Contador";
//images
import img1 from "/public/assets/images/xvs/Dania/img1.jpeg";
import img2 from "/public/assets/images/xvs/Dania/img2.jpeg";
import img3 from "/public/assets/images/xvs/Dania/img3.jpeg";
import img4 from "/public/assets/images/xvs/Dania/img5.jpeg";

import { WhatsIcon } from "@/components/Dashboard/EnviarLista/Icons";
import Sobre from "/public/assets/images/email.png";
import DressCodeMujeres from "/public/assets/images/vestidolargo.png";
import DressCodeHombres from "/public/assets/images/suit_icon-removebg-preview.png";

const textOlive = "text-blue-700";
const bgOlive = "bg-blue-700";

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
    <InvitationContainer
      spBackground="flowers"
      songLink="/assets/songs/xvdania.mp3"
    >
      <IngresarBoton
        buttonText="Ingresar"
        extraClases="!justify-start !mt-[16px] !bg-transparent"
        font={champagne}
        novia="XVs"
        novio="Dania"
        join=""
        color={{
          bgColor: bgOlive,
          titleColor: textOlive,
          textButtonColor: "text-white",
        }}
      />
      <Hero />
      <div className="my-5">
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`w-full ${textOlive} text-center cell:text-4xl my-4 py-4 `}
        >
          "<span className={`${dancing.className}  text-6xl`}>Guárdame</span>
          <br />
          <span className={`${montse.className}  text-2xl uppercase`}>
            {" "}
            como a la
          </span>
          <br />
          <span className={`${dancing.className}  text-5xl `}>
            {" "}
            niña de tus ojos
          </span>
          <br />
          <span className={`${montse.className}  text-2xl uppercase`}>
            escóndeme{" "}
          </span>
          <br />
          <span className={`${montse.className}  text-2xl uppercase`}>
            bajo la{" "}
          </span>
          <br />
          <span className={`${dancing.className}  text-5xl `}>
            {" "}
            sombra de tus{" "}
          </span>
          <br />
          <span className={`${dancing.className}  text-5xl uppercase`}>
            alas
          </span>
          "
          <br />
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`${montse.className} w-full ${textOlive} text-right cell:text-2xl my-4 px-2 `}
        >
          Salmo 17:8
        </motion.p>
      </div>
      {/* <div className=" bg-white py-8">
        <motion.h2
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={` ${textOlive} text-center  text-[28px]    py-4 `}
        >
          Con la bendición de nuestros padres
        </motion.h2>
        <div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-1 w-[300px] cell:w-full   py-4 my-2 text-center cell:text-2xl cell:text-center"
          >
            <p className={`text-2xl font-bold ${textOlive}`}>
              Papás de la novia
            </p>
            <p className={`${dancing.className} text-[28px]  font-medium`}>
              Matilde Sánchez Medina{" "}
            </p>
            <p
              className={`${dancing.className} text-[28px] text-gray-800 font-medium`}
            >
              y
            </p>
            <p
              className={`${dancing.className} text-[28px] text-gray-800 font-medium`}
            >
              Ramón Morales Reyna
            </p>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-1 my-2 w-[300px] cell:w-full bg-white py-4 text-center cell:text-2xl cell:text-center"
          >
            <p className={`text-2xl font-bold ${textOlive}`}>Papás del novio</p>
            <p className={`${dancing.className} text-[28px]  font-medium`}>
              Julia Esther Fernández Arteaga
            </p>
            <p
              className={`${dancing.className} text-[28px] text-gray-800 font-medium`}
            >
              y
            </p>
            <p
              className={`${dancing.className} text-[28px] text-gray-800 font-medium`}
            >
              Lucano García Pérez{" "}
            </p>
          </motion.div>
        </div>
      </div> */}
      <Contador
        fechaEvento={new Date("2025-05-31T00:00:00")}
        fechaString="Sábado, 31 de Mayo de 2025"
        fotoContador="bg-[url('/assets/images/xvs/Dania/img6.jpeg')]"
      />
      <PlaceCard
        show={true}
        titleColor={textOlive}
        titleFont={champagne}
        bgButtonColor={bgOlive}
        borderColor=""
        buttonTextColor={"text-white"}
        desc={"Misa"}
        direccion={"Calle María Trinidad Sánchez s/n los Valdez "}
        hora={"3:00 pm "}
        nombre={{
          content: "Parroquia Santiago Apóstol",
          color: textOlive,
          font: lora,
        }}
        ubicacion={"https://maps.app.goo.gl/LpPc2Xprn94L7KiFA"}
      />
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img1} alt="boda" />
      </motion.div>
      <PlaceCard
        show={true}
        titleColor={textOlive}
        titleFont={champagne}
        bgButtonColor={bgOlive}
        borderColor=""
        buttonTextColor={"text-white"}
        desc={"Fiesta"}
        direccion={
          "Prolongación peral #335 Fraccionamiento el Llano, Arteaga Coahuila "
        }
        hora={"8:00 pm "}
        nombre={{
          content: "Salón Los marfiles ",
          color: textOlive,
          font: lora,
        }}
        ubicacion={"https://maps.app.goo.gl/aQpnHk4xppMvNsaHA"}
      />
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img2} alt="boda" />
      </motion.div>

      {/* <ItinerarioScrollable
        showItinerario={true}
        eventData={[
          {
            id: 2,
            evento: "Misa ",
            hora: "4:30 pm",
            Icon: "church",
          },
          {
            id: 1,
            evento: `Recepción`,
            hora: "8:00 pm",
            Icon: "recepcion",
          },
          {
            id: 4,
            evento: " Cena",
            hora: "8:45 pm",
            Icon: "dinner",
          },
          {
            id: 5,
            evento: "Baile!",
            hora: "9:30 pm",
            Icon: "party",
          },
          {
            id: 6,
            evento: "Cierre del evento",
            hora: "1:00 am",
            Icon: "flores",
          },
        ]}
        sectionStyling={{
          lineColor: "bg-[#a54068]",
          lineBg: "bg-[#a54068]/20",
          circleColor: "stroke-[#a54068]",
          circleBg: "bg-gray-50",
          circleSoftStroke: "stroke-[#a54068]/20",
          iconColor: "text-gray-900",
          cardBg: "bg-white",
        }}
      /> */}

      {/* <PadrinosDeBoda
        showSlider={true}
        cardStyling={{ titleColor: textOlive, titleFont: dancing }}
        padrinos={[
          {
            madrinasRamos: false,
            madrina: "Rosa Eugenia Fernández Arteaga",
            padrino: "Luis Horacio Maury Maya",
            tema: "Padrinos de Velación",
          },
          {
            madrinasRamos: false,
            madrina: "María Luisa Guadalupe Zafra de Chapa",
            padrino: "Eduardo Chapa Escamilla",
            tema: "Padrinos de Anillos",
          },
          {
            madrinasRamos: false,
            madrina: "Olivia Esther Hernández Sánchez",
            padrino: "Hiram Abbif Villegas Gómez",
            tema: "Padrinos de Arras",
          },
          {
            madrinasRamos: false,
            madrina: "Eva Marina Morales Reyna",
            padrino: "Aaron Reyna Saldaña",
            tema: "Padrinos de Lazo",
          },
        ]}
      /> */}
      <MesaDeRegalos
        customBorder={"border-blue-700"}
        FraseAgradecimientoFinalColor=""
        FraseAgradecimientoFinalFont={undefined}
        FraseAgradecimientoFinalSize=""
        FraseAgradecimientoFinalText=""
        FraseAgradecimientoInicioColor={textOlive}
        FraseAgradecimientoInicioFont={undefined}
        FraseAgradecimientoInicioSize="text-xl"
        FraseAgradecimientoInicioText=""
        SectionTitleColor={textOlive}
        SectionTitleFont={champagne}
        ShowFraseDeAgradecimientoFinal={false}
        ShowFraseDeAgradecimientoInicio={false}
        ShowRegalo={false}
        ShowSobres={true}
        ShowTransferencia={true}
        datosTransferencia={{
          numero: `Cuenta Banorte\n 4189 1430 1947 2664`,
          owner: "",
        }}
        SobresImg={Sobre}
        SobresTextColor={textOlive}
        SobresTextContent="Lluvia de sobres"
        SobresType="modern"
        backGround=""
        ShowLiverpool={false}
        liverpoolNoEvento="51605247"
        showAmazon={false}
        bgLiverpoolButton={bgOlive}
        linkLiverpool=""
      />
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img3} alt="boda" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
        className={`${champagne.className} text-center ${textOlive} font-bold   text-5xl cell:text-4xl py-4 `}
      >
        Dress Code
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
        className={`${montse.className} text-center ${textOlive} font-bold underline   text-5xl cell:text-4xl py-4 `}
      >
        Formal
      </motion.h2>
      <div className="w-6/12 flex flex-col justify-center items-center cell:w-full">
        {" "}
        <Image alt="boda" src={DressCodeMujeres} className="w-[50%]" />
        <p className={`font-bold text-4xl ${textOlive} cell:text-2xl`}>
          Mujeres
        </p>
        <p className="  text-4xl mb-4 cell:text-xl cell:mb-1">Vestido</p>
        <p className="  underline text-4xl mb-4 cell:text-2xl cell:mb-1 text-center py-4">
          **Favor de NO usar vestido color azul rey y beige{" "}
        </p>
      </div>
      <div className="w-6/12 flex flex-col justify-center items-center cell:w-full">
        {" "}
        <Image alt="boda" src={DressCodeHombres} className="w-[35%]" />
        <p className={`font-bold text-4xl ${textOlive} cell:text-2xl`}>
          Hombres
        </p>
        <p className="  text-4xl mb-4 cell:mb-1 cell:text-xl">Traje Formal</p>
      </div>
      {/* <motion.h2
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
        className={`${dancing.className} text-center ${textOlive} font-bold   text-5xl cell:text-4xl py-4 `}
      >
        Recomendación de hospedaje{" "}
      </motion.h2> */}
      {/* <div className="flex flex-col justify-center items-center py-4">
        <div className=" w-[80%]">
          <Image src={FiestaLogo} alt="hotel" />
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`${lora.className} text-center ${textOlive} font-bold   text-5xl cell:text-4xl py-4 `}
        >
          Fiesta Inn Saltillo{" "}
        </motion.h2>

        <div>
          <p
            className={`${lora.className} text-center ${textOlive} font-medium  text-5xl cell:text-2xl py-4 px-2 `}
          >
            CODIGO:
            <br /> G1TED7
          </p>
        </div>
        <div className={`w-[88%] ${textOlive}  rounded-md py-2 px-4`}>
          <div className="mb-2 text-center text-xl font-semibold">
            <h2>Reservaciones:</h2>
            <p>443 310 8073</p>
            <p>443 310 8052</p>
          </div>

          <div className="mb-2 text-center text-xl font-semibold">
            <p>Dirección:</p>
            <p>
              Carr. Monterrey - Saltillo No. 6607, Zona Industrial, 25270
              Saltillo, Coah.{" "}
            </p>
            <div className="w-full my-4">
              <a href="https://maps.app.goo.gl/hEuSbe5J7m1Lpqb56">
                <button
                  className={`${bgOlive}  w-full text-center text-white font-medium text-xl py-2 rounded-lg`}
                >
                  Como llegar
                </button>
              </a>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className=" shadow-md text-center border-2  rounded-md m-2 p-2 border-[#a54068] ">
        <motion.h2
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`${dancing.className} text-center ${textOlive}    text-5xl cell:text-3xl py-1 `}
        >
          No Niños
        </motion.h2>
        <p>Niños en casa descansando y padres disfrutando.</p>
        <p>
          Queremos que vivas este momento tan especial junto a nosotros, por
          ello hemos decidido que el evento sea solo para adultos.
        </p>
      </div> */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img4} alt="boda" />
      </motion.div>
      <ConfirmacionForm
        invitationId={{ id: invitationIdForQuery.id }}
        nombreInvitado={nombre}
        pasesAsignados={pasesAsignados}
        telInvitado={tel}
        styling={{
          confirmButton: {
            backgroundColor: bgOlive,
            disabledBackgroundColor: "bg-blue-700/50",
          },
          section: {
            backgroundColor: "bg-white",
            carita: "no",
            textColor: textOlive,
          },
        }}
      />
      <SongButtonPlayer backgroundColor={bgOlive} />
    </InvitationContainer>
  );
};

export default Body;
