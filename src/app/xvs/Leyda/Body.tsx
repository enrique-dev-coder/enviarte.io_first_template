"use client";
import React from "react";
import InvitationContainer from "@/components/wrappers/InvitationContainer";
import IngresarBoton from "@/app/InvitationTemplates/TemplateComponents/Customized/CommonComponents/IngresarBoton";
import PlaceCard from "@/app/InvitationTemplates/TemplateComponents/Modern/PlaceCard";
import MesaDeRegalos from "@/app/InvitationTemplates/TemplateComponents/Customized/CommonComponents/MesaDeRegalos";
import SongButtonPlayer from "@/app/InvitationTemplates/Common/SongButtonPlayer";
import ItinerarioScrollable from "@/app/InvitationTemplates/TemplateComponents/Customized/Itinerarios/ItinerarioScrollable";
import { lora, champagne, montse } from "@/fonts";
import Image from "next/image";
import { motion } from "framer-motion";
import Hero from "./Hero";
import Contador from "./Contador";
//images
import img1 from "/public/assets/images/xvs/Leyda/Hero.jpeg";
import img1v1 from "/public/assets/images/xvs/Leyda/img1.jpeg";
import img2 from "/public/assets/images/xvs/Leyda/img2.jpeg";
import img5 from "/public/assets/images/xvs/Leyda/img5.jpeg";
import img6 from "/public/assets/images/xvs/Leyda/img6.jpeg";
import img7 from "/public/assets/images/xvs/Leyda/img7.jpeg";
import img8 from "/public/assets/images/xvs/Leyda/img8.jpeg";
import img11 from "/public/assets/images/xvs/Leyda/img11.jpeg";
import img12 from "/public/assets/images/xvs/Leyda/img12.jpeg";

import { WhatsIcon } from "@/components/Dashboard/EnviarLista/Icons";
import Sobre from "/public/assets/images/email.png";
import DressCodeMujeres from "/public/assets/images/vestidolargo.png";
import DressCodeHombres from "/public/assets/images/suit_icon-removebg-preview.png";

const textOlive = "text-[#b579ae]";
const bgOlive = "bg-[#cc90c7]";
const lilaFuerte = "text-[#b579ae]";

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
      songLink="/assets/songs/xvleyda.mp3"
    >
      <IngresarBoton
        buttonText="Ingresar"
        extraClases="  !bg-transparent"
        font={champagne}
        novia="XVs"
        novio="Leyda"
        join=""
        color={{
          bgColor: bgOlive,
          titleColor: textOlive,
          textButtonColor: "text-white",
        }}
      />
      <Hero />
      {/* <div className="my-5">
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`w-full ${textOlive} text-center cell:text-4xl my-4 py-4 `}
        >
          &quot;
          <span className={`${dancing.className}  text-6xl`}>Guárdame</span>
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
          &quot;
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
      </div> */}
      <div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex bg-white flex-col gap-1 w-[300px] cell:w-full   py-4 my-2 text-center cell:text-2xl cell:text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            viewport={{ once: true }}
            className={` ${textOlive} ${champagne.className} font-semibold text-center  text-[28px]    py-4 `}
          >
            Con la bendición de mis papás
          </motion.h2>
          <p className={`text-2xl font-bold ${lilaFuerte}`}>
            Johana Elizabeth Vázquez <br />y <br /> Pedro Alejandro López
            Perales
          </p>
        </motion.div>
      </div>
      <Contador
        fechaEvento={new Date("2025-06-13T00:00:00")}
        fechaString="Viernes, 13 de Junio de 2025"
        fotoContador="bg-[url('/assets/images/xvs/Leyda/img5.jpeg')]"
      />

      <PlaceCard
        show={true}
        titleColor={textOlive}
        titleFont={champagne}
        bgButtonColor={bgOlive}
        borderColor=""
        buttonTextColor={"text-white"}
        desc={"Misa"}
        direccion={
          "Calle Gral. Manuel Pérez Treviño 425, Zona Centro, 25000 Saltillo, Coah."
        }
        hora={"5:20 pm "}
        nombre={{
          content: "Santuario Guadalupe",
          color: textOlive,
          font: lora,
        }}
        ubicacion={"https://maps.app.goo.gl/CLTg9FkwtbLUTpg86"}
      />
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img1} alt="boda" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img2} alt="boda" />
      </motion.div>
      <PlaceCard
        show={true}
        titleColor={textOlive}
        titleFont={champagne}
        bgButtonColor={bgOlive}
        borderColor=""
        buttonTextColor={"text-white"}
        desc={"Fiesta"}
        direccion={"Calle 5 #2785, Lourdes, 25070 Saltillo, Coah."}
        hora={"8:30 pm "}
        nombre={{
          content: "Cazamya Recepciones",
          color: textOlive,
          font: lora,
        }}
        ubicacion={"https://maps.app.goo.gl/n97bLnpHF4b4nCPq6"}
      />
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img1v1} alt="boda" />
      </motion.div>

      <ItinerarioScrollable
        showItinerario={true}
        eventData={[
          {
            id: 2,
            evento: "Misa ",
            hora: "5:20 pm",
            Icon: "church",
          },
          {
            id: 1,
            evento: `Recepción`,
            hora: "8:30 pm",
            Icon: "recepcion",
          },
          {
            id: 4,
            evento: " Cena",
            hora: "9:30 pm",
            Icon: "dinner",
          },
          {
            id: 5,
            evento: "Fiesta",
            hora: "10:20 pm",
            Icon: "party",
          },
          {
            id: 6,
            evento: "Cierre del evento",
            hora: "1:30 am",
            Icon: "flores",
          },
        ]}
        sectionStyling={{
          lineColor: "bg-[#cc90c7]",
          lineBg: "bg-[#cc90c7]/20",
          circleColor: "stroke-[#cc90c7]",
          circleBg: "bg-gray-50",
          circleSoftStroke: "stroke-[#cc90c7]/20",
          iconColor: "text-gray-900",
          cardBg: "bg-white",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img7} alt="boda" />
      </motion.div>

      <MesaDeRegalos
        customBorder={"border-[#b579ae]"}
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
        ShowTransferencia={false}
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
        <Image src={img12} alt="boda" />
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
        <p
          className={`${textOlive} text-4xl mb-4  font-semibold cell:text-3xl cell:mb-1 text-center px-4 my-2"`}
        >
          Nos reservamos los colores lila, morado y rosa para la quinceañera.{" "}
        </p>
      </div>
      <div className="w-6/12 flex flex-col justify-center items-center cell:w-full">
        {" "}
        <Image alt="boda" src={DressCodeHombres} className="w-[35%]" />
        <p className={`font-bold text-4xl ${textOlive} cell:text-2xl`}>
          Hombres
        </p>
        <p className="  text-4xl mb-4 cell:mb-1 cell:text-xl">Traje </p>
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
        className={`${champagne.className} text-center ${textOlive} px-4 font-bold   text-5xl cell:text-3xl py-3 `}
      >
        Sabemos que los niños son importantes, pero creemos que papá y mamá
        también necesitan un día libre.
        <br /> Por favor no niños.{" "}
      </motion.h2>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img11} alt="boda" />
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img8} alt="boda" />
      </motion.div>
      <div>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`${textOlive}  uppercase text-center ${champagne.className}  text-[28px] p-4 font-bold`}
        >
          Confirma tu asistencia en el siguiente botón
        </motion.p>
      </div>
      <div>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`${textOlive}  uppercase text-center ${champagne.className}  text-[28px] p-4 font-bold`}
        >
          Fecha límite de confirmación 10 de mayo de 2025
        </motion.p>
      </div>
      <div className="relative">
        <div className="  py-2">
          <div className="flex flex-col justify-center items-center py-2">
            <p
              className={`${lora.className} ${textOlive} text-4xl cell:text-2xl text-center font-bold`}
            >
              Planner <br /> Viviana Amare
            </p>
            <a href="https://api.whatsapp.com/send?phone=5218447006000&text=Hola!%20Me%20gustar%C3%ADa%20confirmar%20mi%20asistencia%20a%20los%20quinces%20de%20Leyda">
              <button
                className={`${bgOlive} border border-[#b579ae] flex items-center gap-3  my-3 rounded-full px-4 py-2`}
              >
                <WhatsIcon className="fill-white text-2xl " />
                <p className=" text-3xl text-white ">844 700 6000</p>
              </button>
            </a>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img6} alt="boda" />
      </motion.div>
      <SongButtonPlayer backgroundColor={bgOlive} />
    </InvitationContainer>
  );
};

export default Body;
