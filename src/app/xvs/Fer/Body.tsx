"use client";
import React from "react";
import InvitationContainer from "@/components/wrappers/InvitationContainer";
import IngresarBoton from "@/app/InvitationTemplates/TemplateComponents/Customized/CommonComponents/IngresarBoton";
import PlaceCard from "@/app/InvitationTemplates/TemplateComponents/Modern/PlaceCard";
import MesaDeRegalos from "@/app/InvitationTemplates/TemplateComponents/Customized/CommonComponents/MesaDeRegalos";
import SongButtonPlayer from "@/app/InvitationTemplates/Common/SongButtonPlayer";
import ItinerarioScrollable from "@/app/InvitationTemplates/TemplateComponents/Customized/Itinerarios/ItinerarioScrollable";
import { lora, champagne, montse, paris } from "@/fonts";
import Image from "next/image";
import { motion } from "framer-motion";
import Hero from "./Hero";
import Contador from "./Contador";
//images
import img1 from "/public/assets/images/xvs/Fer/img1.jpeg";
import img1v1 from "/public/assets/images/xvs/Fer/img2.jpeg";
import img3 from "/public/assets/images/xvs/Fer/img3.jpeg";
import img6 from "/public/assets/images/xvs/Fer/img5.jpeg";
import img4 from "/public/assets/images/xvs/Fer/img4.jpeg";
import img8 from "/public/assets/images/xvs/Fer/img10.jpeg";
import img11 from "/public/assets/images/xvs/Fer/img7.jpeg";
import img12 from "/public/assets/images/xvs/Fer/img6.jpeg";
import SobresImg from "/public/assets/images/xvs/Fer/sobrerojo.png";
import RegaloImg from "/public/assets/images/xvs/Fer/regalorojo.png";

import { WhatsIcon } from "@/components/Dashboard/EnviarLista/Icons";
import Sobre from "/public/assets/images/email.png";
import DressCodeMujeres from "/public/assets/images/xvs/Fer/vestidoBlanco.png";
import DressCodeHombres from "/public/assets/images/xvs/Fer/trajeBlanco.png";

const textOlive = "text-white";
const bgOlive = "bg-[#FF0000]";
const lilaFuerte = "text-[#FF0000]";

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
      songLink="/assets/songs/xvsFer.mp3"
    >
      <IngresarBoton
        showSobre={true}
        bgCuadrito="bg-black"
        buttonText="Ingresar"
        extraClases="!justify-start !mt-[16px]  !bg-transparent"
        font={paris}
        novia="XVs"
        novio="Fer"
        join=""
        color={{
          bgColor: bgOlive,
          titleColor: textOlive,
          textButtonColor: "text-white",
        }}
      />
      <div className=" bg-black">
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
            className="flex  flex-col gap-1 w-[300px] cell:w-full   py-4 my-2 text-center cell:text-2xl cell:text-center"
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
            <p className={`text-2xl font-bold ${textOlive}`}>
              Olga Patricia Escareño
              <br />y <br /> Angel Ramírez Salas
            </p>
          </motion.div>
        </div>
        <Contador
          textColor={textOlive}
          fechaEvento={new Date("2025-06-07T00:00:00")}
          fechaString="Sábado, 07 de Junio de 2025"
          fotoContador="bg-[url('/assets/images/xvs/Fer/img5.jpeg')]"
        />

        <PlaceCard
          show={true}
          bgCard="transparent"
          descColor={textOlive}
          titleColor={textOlive}
          titleFont={champagne}
          bgButtonColor={bgOlive}
          borderColor="border-[#FF0000]"
          buttonTextColor={textOlive}
          desc={"Misa"}
          direccion={
            "Gral. Nicolás Bravo 127, Zona Centro, 25000 Saltillo, Coah."
          }
          hora={"5:00 pm "}
          nombre={{
            content: "Catedral de Saltillo de Santiago Apóstol",
            color: textOlive,
            font: lora,
          }}
          ubicacion={"https://maps.app.goo.gl/oYMk9w2nFs1HoreAA"}
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
          <Image src={img3} alt="boda" />
        </motion.div>
        <PlaceCard
          bgCard="transparent"
          descColor={textOlive}
          show={true}
          titleColor={textOlive}
          titleFont={champagne}
          bgButtonColor={bgOlive}
          borderColor="border-[#FF0000]"
          buttonTextColor={textOlive}
          desc={"Fiesta"}
          direccion={"Los Rodríguez, 25200 Saltillo, Coahuila"}
          hora={"8:00 pm "}
          nombre={{
            content: "Trei Recepciones",
            color: textOlive,
            font: lora,
          }}
          ubicacion={"https://maps.app.goo.gl/dWsYxUFHbvvJUKPd7"}
        />
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
        >
          <Image src={img1v1} alt="boda" />
        </motion.div>

        {/* <ItinerarioScrollable
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
        /> */}
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
        >
          <Image src={img4} alt="boda" />
        </motion.div>

        {/* <MesaDeRegalos
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
        /> */}
        <motion.h2
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`
                ${champagne.className}
                ${textOlive}
                  text-center text-5xl py-1 
                cell:text-4xl cell:px-4 font-bold
              `}
        >
          Sugerencia de regalos
        </motion.h2>
        <div className="flex justify-evenly items-center py-4 gap-4 w-full  mx-auto cell:flex-col ">
          <div className=" flex items-center gap-2  cell:justify-center cell:flex-col">
            <Image alt="sobre" src={SobresImg} className="" width={100} />

            <p className={`text-3xl cell:text-xl ${textOlive}`}>
              Lluvia de sobres
            </p>
          </div>
          <div className=" flex items-center gap-2  cell:justify-center cell:flex-col">
            <Image alt="sobre" src={RegaloImg} className="" width={100} />

            <p className={`text-3xl cell:text-xl ${textOlive}`}>Regalo</p>
          </div>
        </div>
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
          <p className={`font-bold text-4xl ${textOlive} pb-8 cell:text-2xl`}>
            Vestido
          </p>
          {/* <p className="  underline text-4xl mb-4 cell:text-2xl cell:mb-1 text-center py-4">
            **Se reserva el color lila, morado y rosa.{" "}
          </p> */}
        </div>
        <div className="w-6/12 flex flex-col justify-center items-center cell:w-full">
          {" "}
          <Image alt="boda" src={DressCodeHombres} className="w-[35%]" />
          <p className={`font-bold text-4xl ${textOlive} cell:text-2xl`}>
            Hombres
          </p>
          <p className={`font-bold text-4xl ${textOlive} pb-8 cell:text-2xl`}>
            Formal{" "}
          </p>
        </div>
        {/* <motion.h2
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`${champagne.className} text-center ${textOlive}    text-5xl cell:text-3xl py-1 `}
        >
          No Niños
        </motion.h2> */}
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
            Fecha límite de confirmación 7 de mayo de 2025
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
              <a href="https://api.whatsapp.com/send?phone=5218447006000&text=Hola!%20Me%20gustar%C3%ADa%20confirmar%20mi%20asistencia%20a%20los%20quinces%20de%20Fer">
                <button
                  className={` ${bgOlive}  flex items-center gap-3  my-3 rounded-full px-4 py-2`}
                >
                  <WhatsIcon className="fill-white text-2xl " />
                  <p className={`text-3xl ${textOlive}`}>844 700 6000</p>
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
      </div>
      <SongButtonPlayer backgroundColor={bgOlive} />
    </InvitationContainer>
  );
};

export default Body;
