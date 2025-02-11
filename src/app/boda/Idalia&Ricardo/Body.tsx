"use client";
import React from "react";
import InvitationContainer from "@/components/wrappers/InvitationContainer";
import IngresarBoton from "@/app/InvitationTemplates/TemplateComponents/Customized/CommonComponents/IngresarBoton";
import PlaceCard from "@/app/InvitationTemplates/TemplateComponents/Modern/PlaceCard";
import MesaDeRegalos from "@/app/InvitationTemplates/TemplateComponents/Customized/CommonComponents/MesaDeRegalos";
import SongButtonPlayer from "@/app/InvitationTemplates/Common/SongButtonPlayer";
import ItinerarioScrollable from "@/app/InvitationTemplates/TemplateComponents/Customized/Itinerarios/ItinerarioScrollable";

import { lora, champagne } from "@/fonts";
import Image from "next/image";
import { motion } from "framer-motion";

import Hero from "./Hero";
import Contador from "./Contador";
//images
import imgBanner from "/public/assets/images/idaliayricardo/img2.png";
import img3 from "/public/assets/images/idaliayricardo/img4.png";
import img5 from "/public/assets/images/idaliayricardo/img5.png";
import img6 from "/public/assets/images/idaliayricardo/img6.png";
import img7 from "/public/assets/images/idaliayricardo/img7.png";
import img8 from "/public/assets/images/idaliayricardo/img8.png";
import img9 from "/public/assets/images/idaliayricardo/img9.png";
import img10 from "/public/assets/images/idaliayricardo/img10.png";
import { WhatsIcon } from "@/components/Dashboard/EnviarLista/Icons";
import Sobre from "/public/assets/images/email.png";
import HotelCard from "./HotelCard";
import DressCodeMujeres from "/public/assets/images/vestidolargo.png";
import DressCodeHombres from "/public/assets/images/suit_icon-removebg-preview.png";

const textOlive = "text-[#808000]";
const bgOlive = "bg-[#808000]";

const Body = () => {
  return (
    <InvitationContainer
      spBackground="none"
      songLink="/assets/songs/idaliayricardo.mp3"
    >
      <IngresarBoton
        buttonText="Ingresar"
        font={champagne}
        novia="Idalia"
        novio="Ricardo"
        join="&"
        color={{
          bgColor: bgOlive,
          titleColor: textOlive,
          textButtonColor: "text-white",
        }}
      />
      <Hero />
      <div className=" bg-white py-8">
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
            className="flex flex-col gap-1 w-[300px] cell:w-full bg-white  py-4 my-2 text-center cell:text-2xl cell:text-center"
          >
            <p className={`text-2xl font-bold ${textOlive}`}>
              Papás de la novia
            </p>
            <p className={`${champagne.className} text-xl  font-medium`}>
              Francisco de la fuente
            </p>
            <p
              className={`${champagne.className} text-xl text-gray-800 font-medium`}
            >
              &
            </p>
            <p
              className={`${champagne.className} text-xl text-gray-800 font-medium`}
            >
              María Luisa Galindo{" "}
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
            <p className={`${champagne.className} text-xl  font-medium`}>
              Rosa María Sepúlveda{" "}
            </p>
            <p
              className={`${champagne.className} text-xl text-gray-800 font-medium`}
            >
              &
            </p>
            <p
              className={`${champagne.className} text-xl text-gray-800 font-medium`}
            >
              Rodolfo García de León{" "}
            </p>
          </motion.div>
        </div>
      </div>
      <Contador
        fechaEvento={new Date("2025-04-26T00:00:00")}
        fechaString="Sábado, 26 de Abril de 2025"
        fotoContador="bg-[url('/assets/images/idaliayricardo/img3.png')]"
      />
      <PlaceCard
        show={true}
        titleColor={textOlive}
        titleFont={champagne}
        bgButtonColor={bgOlive}
        desc={"Ceremonia de Bendición"}
        direccion={
          "Blvd. Jesús Valdez Sánchez 1861, El Olmo, 25294 Saltillo, Coah."
        }
        hora={"6:00 pm "}
        nombre={{
          content: "Xardin",
          color: textOlive,
          font: lora,
        }}
        ubicacion={"https://maps.app.goo.gl/M2cW7sXpfXp5Jk8E8"}
      />
      <PlaceCard
        show={true}
        titleColor={textOlive}
        titleFont={champagne}
        bgButtonColor={bgOlive}
        desc={"Ceremonia Civil"}
        direccion={
          "Blvd. Jesús Valdez Sánchez 1861, El Olmo, 25294 Saltillo, Coah."
        }
        hora={"6:30 pm "}
        nombre={{
          content: "Xardin",
          color: textOlive,
          font: lora,
        }}
        ubicacion={"https://maps.app.goo.gl/M2cW7sXpfXp5Jk8E8"}
      />

      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img10} alt="boda" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
        className={`${champagne.className} text-center ${textOlive} font-bold   text-5xl cell:text-4xl py-4 `}
      >
        Itinerario
      </motion.h2>
      <ItinerarioScrollable
        showItinerario={true}
        eventData={[
          {
            id: 1,
            evento: "Ceremonia Civil ",
            hora: "6:00 pm",
            Icon: "recepcion",
          },
          {
            id: 2,
            evento: `Ceremonia de \n Bendición`,
            hora: "6:30 pm",
            Icon: "church",
          },
          {
            id: 3,
            evento: `Cóctel de \n Bienvenida y Fotos`,
            hora: "7:00 pm",
            Icon: "coctel",
          },
          {
            id: 7,
            evento: "Entrada de novios",
            hora: "8:30 pm",
            Icon: "civil",
          },
          {
            id: 4,
            evento: " Cena",
            hora: "8:45 pm",
            Icon: "dinner",
          },
          {
            id: 5,
            evento: "Inicia la fiesta",
            hora: "10:00 pm",
            Icon: "party",
          },
          {
            id: 6,
            evento: "Cierre del evento",
            hora: "2:00 am",
            Icon: "flores",
          },
        ]}
        sectionStyling={{
          lineColor: bgOlive,
          lineBg: "bg-[#808000]/20",
          circleColor: "stroke-[#808000]",
          circleBg: "bg-gray-50",
          circleSoftStroke: "stroke-[#808000]/20",
          iconColor: "text-gray-900",
          cardBg: "bg-white",
        }}
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
        Sugerencia de hoteles
      </motion.h2>
      <HotelCard />
      <MesaDeRegalos
        FraseAgradecimientoFinalColor=""
        FraseAgradecimientoFinalFont={undefined}
        FraseAgradecimientoFinalSize=""
        FraseAgradecimientoFinalText=""
        FraseAgradecimientoInicioColor=""
        FraseAgradecimientoInicioFont={undefined}
        FraseAgradecimientoInicioSize=""
        FraseAgradecimientoInicioText=""
        SectionTitleColor={textOlive}
        SectionTitleFont={champagne}
        ShowFraseDeAgradecimientoFinal={false}
        ShowFraseDeAgradecimientoInicio={false}
        ShowRegalo={false}
        ShowSobres={true}
        ShowTransferencia={true}
        datosTransferencia={{
          numero: `Tarjeta\n 5579 0701 3285 9151 \n Clabe\n 014078606040656221`,
          owner: "Cuenta Santander",
        }}
        SobresImg={Sobre}
        SobresTextColor=""
        SobresTextContent="Lluvia de sobres"
        SobresType="modern"
        backGround=""
        ShowLiverpool={true}
        liverpoolNoEvento="51556397"
        showAmazon={false}
        linkLiverpool="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51556397"
      />

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img5} alt="boda" />
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img6} alt="boda" />
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img7} alt="boda" />
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img8} alt="boda" />
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img9} alt="boda" />
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={imgBanner} alt="boda" />
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
        className={`${lora.className} text-center ${textOlive} font-bold underline   text-5xl cell:text-4xl py-4 `}
      >
        Formal
      </motion.h2>
      <div className="w-6/12 flex flex-col justify-center items-center cell:w-full">
        {" "}
        <Image alt="boda" src={DressCodeMujeres} className="w-[50%]" />
        <p className={`font-bold text-4xl ${textOlive} cell:text-2xl`}>
          Mujeres
        </p>
        <p className="  text-4xl mb-4 cell:text-xl cell:mb-1">Vestido Largo</p>
      </div>

      <div className="w-6/12 flex flex-col justify-center items-center cell:w-full">
        {" "}
        <Image alt="boda" src={DressCodeHombres} className="w-[35%]" />
        <p className={`font-bold text-4xl ${textOlive} cell:text-2xl`}>
          Hombres
        </p>
        <p className="  text-4xl mb-4 cell:mb-1 cell:text-xl">Traje Formal</p>
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
        className={`${lora.className} text-center ${textOlive} font-bold underline   text-5xl cell:text-4xl py-4 `}
      >
        NO NIÑOS
      </motion.h2>
      <div>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`${textOlive} uppercase text-center ${champagne.className}  text-[40px]`}
        >
          Confirmación de Asistencia
        </motion.p>
      </div>
      <div className="relative">
        <div className="  py-2">
          <div className="flex flex-col justify-center items-center py-2">
            <p
              className={`${lora.className}  text-4xl cell:text-2xl text-center font-bold`}
            >
              Wedding Planner <br /> Viviana Amare
            </p>
            <a href="https://api.whatsapp.com/send?phone=5218447006000">
              <button
                className={`${bgOlive} flex items-center gap-3  my-3 rounded-full px-4 py-2`}
              >
                <WhatsIcon className="fill-white text-2xl " />
                <p className=" text-3xl text-white">844 700 6000</p>
              </button>
            </a>
          </div>
        </div>
      </div>
      <SongButtonPlayer backgroundColor={bgOlive} />
    </InvitationContainer>
  );
};

export default Body;
