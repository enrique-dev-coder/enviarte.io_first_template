"use client";
import React from "react";
import InvitationContainer from "@/components/wrappers/InvitationContainer";
import IngresarBoton from "@/app/InvitationTemplates/TemplateComponents/Customized/CommonComponents/IngresarBoton";
import PlaceCard from "@/app/InvitationTemplates/TemplateComponents/Modern/PlaceCard";
import MesaDeRegalos from "@/app/InvitationTemplates/TemplateComponents/Customized/CommonComponents/MesaDeRegalos";
import SongButtonPlayer from "@/app/InvitationTemplates/Common/SongButtonPlayer";
import ItinerarioScrollable from "@/app/InvitationTemplates/TemplateComponents/Customized/Itinerarios/ItinerarioScrollable";

import { lora, champagne, dancing } from "@/fonts";
import Image from "next/image";
import { motion } from "framer-motion";

import Hero from "./Hero";
import Contador from "./Contador";
//images
import img1 from "/public/assets/images/fernandayluis/img1.jpeg";
import img2 from "/public/assets/images/fernandayluis/img2.jpeg";
import img3 from "/public/assets/images/fernandayluis/img3.jpeg";
import img4 from "/public/assets/images/fernandayluis/img4.jpeg";
import img5 from "/public/assets/images/fernandayluis/img5.jpeg";
import img6 from "/public/assets/images/fernandayluis/img6.jpeg";
import img7 from "/public/assets/images/fernandayluis/img7.jpeg";
import img8 from "/public/assets/images/fernandayluis/img8.jpeg";
import img9 from "/public/assets/images/fernandayluis/img9.jpeg";
import img10 from "/public/assets/images/fernandayluis/img10.jpeg";
import img11 from "/public/assets/images/fernandayluis/img11.jpeg";

import { WhatsIcon } from "@/components/Dashboard/EnviarLista/Icons";
import Sobre from "/public/assets/images/email.png";
import DressCodeMujeres from "/public/assets/images/vestidolargo.png";
import DressCodeHombres from "/public/assets/images/suit_icon-removebg-preview.png";

const textOlive = "text-[#b08968]";
const bgOlive = "bg-[#CC6844]";

const Body = () => {
  return (
    <InvitationContainer
      spBackground="none"
      songLink="/assets/songs/fernandayluis.mp3"
    >
      <IngresarBoton
        buttonText="Ingresar"
        extraClases=" !mt-[16px] !bg-transparent"
        font={dancing}
        novia="Fernanda"
        novio="Luis"
        join="y"
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
            <p className={`${dancing.className} text-[28px]  font-medium`}>
              Viviana del Consuelo Alvizar Padilla
            </p>
            <p
              className={`${dancing.className} text-[28px] text-gray-800 font-medium`}
            >
              y
            </p>
            <p
              className={`${dancing.className} text-[28px] text-gray-800 font-medium`}
            >
              Jaime Gabriel Méndez Hernández
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
              María de los Ángeles Huerta Sánchez
            </p>
            <p
              className={`${dancing.className} text-[28px] text-gray-800 font-medium`}
            >
              y
            </p>
            <p
              className={`${dancing.className} text-[28px] text-gray-800 font-medium`}
            >
              Marcelo Cervantes Anguiano
            </p>
          </motion.div>
        </div>
      </div>
      <Contador
        textColor={"text-black"}
        fechaEvento={new Date("2025-06-27T00:00:00")}
        fechaString="Viernes, 27 de Junio de 2025"
        fotoContador="bg-[url('/assets/images/fernandayluis/img12.jpeg')]"
      />
      <PlaceCard
        show={true}
        titleColor={textOlive}
        titleFont={dancing}
        bgButtonColor={bgOlive}
        desc={"Ceremonia Religiosa"}
        direccion={
          "Blvd. Pedro Figueroa s/n, Real de Peña, 25210 Saltillo, Coah."
        }
        hora={"6:00 pm "}
        nombre={{
          content: "Iglesia san Pablo Apóstol",
          color: textOlive,
          font: lora,
        }}
        ubicacion={"https://maps.app.goo.gl/hVNLwr29zPeKF7fe6"}
      />
      <PlaceCard
        show={true}
        titleColor={textOlive}
        titleFont={dancing}
        bgButtonColor={bgOlive}
        desc={"Ceremonia Civil"}
        direccion={"Eulalio Gutiérrez 381, La Palmilla, 25204 Saltillo, Coah."}
        hora={"8:30 pm "}
        nombre={{
          content: "Quinta El Portal",
          color: textOlive,
          font: lora,
        }}
        ubicacion={"https://maps.app.goo.gl/WUu1MGNRqXnjTrNR9"}
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
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
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
        className={`${dancing.className} text-center ${textOlive} font-bold   text-5xl cell:text-4xl py-4 `}
      >
        Itinerario
      </motion.h2>
      <ItinerarioScrollable
        showItinerario={true}
        eventData={[
          {
            id: 2,
            evento: "Ceremonia Religiosa ",
            hora: "6:00 pm",
            Icon: "recepcion",
          },
          {
            id: 1,
            evento: `Recepción`,
            hora: "8:30 pm",
            Icon: "church",
          },
          {
            id: 4,
            evento: " Cena",
            hora: "9:30 pm",
            Icon: "dinner",
          },
          {
            id: 5,
            evento: "Inicia la fiesta",
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
          lineColor: bgOlive,
          lineBg: "bg-[#CC6844]/20",
          circleColor: "stroke-[#CC6844]",
          circleBg: "bg-gray-50",
          circleSoftStroke: "stroke-[#CC6844]/20",
          iconColor: "text-gray-900",
          cardBg: "bg-white",
        }}
      />
      {/* <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img6} alt="boda" />
      </motion.div> */}

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
        SectionTitleFont={dancing}
        ShowFraseDeAgradecimientoFinal={false}
        ShowFraseDeAgradecimientoInicio={false}
        ShowRegalo={false}
        ShowSobres={true}
        ShowTransferencia={false}
        datosTransferencia={{
          numero: `Tarjeta Erika Gámez\n 5579 1003 9911 7124`,
          owner: "Cuenta Santander",
        }}
        SobresImg={Sobre}
        SobresTextColor=""
        SobresTextContent="Lluvia de sobres"
        SobresType="modern"
        backGround=""
        ShowLiverpool={false}
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
        <p className="  text-4xl text-center p-4 mb-4 cell:text-xl cell:mb-1">
          Los colores claros y sobre todo blanco quedan reservados para la novia
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
      <div>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`${textOlive}  uppercase text-center  text-[24px] p-4 font-bold`}
        >
          Confirma tu asistencia en el siguiente botón
        </motion.p>
      </div>

      <div className="relative">
        <div className="  py-2">
          <div className="flex flex-col justify-center items-center py-2">
            <p
              className={`${lora.className} ${textOlive} text-4xl cell:text-2xl text-center font-bold`}
            >
              Wedding Planner <br /> Viviana Amare
            </p>
            <a href="https://api.whatsapp.com/send?phone=5218421088081&text=Hola!%20Confirmo%20asistencia%20para%20la%20boda%20de%20Fer%20y%20Luis">
              <button
                className={` ${bgOlive}  flex items-center gap-3  my-3 rounded-full px-4 py-2`}
              >
                <WhatsIcon className="fill-white text-2xl " />
                <p className={`text-3xl text-white`}>842 108 8081</p>
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
        <Image src={img4} alt="boda" />
      </motion.div>
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
