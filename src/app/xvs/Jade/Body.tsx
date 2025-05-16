"use client";
import React from "react";
import InvitationContainer from "@/components/wrappers/InvitationContainer";
import IngresarBoton from "@/app/InvitationTemplates/TemplateComponents/Customized/CommonComponents/IngresarBoton";
import PlaceCard from "@/app/InvitationTemplates/TemplateComponents/Modern/PlaceCard";
import MesaDeRegalos from "@/app/InvitationTemplates/TemplateComponents/Customized/CommonComponents/MesaDeRegalos";
import SongButtonPlayer from "@/app/InvitationTemplates/Common/SongButtonPlayer";
import ItinerarioScrollable from "@/app/InvitationTemplates/TemplateComponents/Customized/Itinerarios/ItinerarioScrollable";
import { lora, champagne, montse, dancing, paris } from "@/fonts";
import { motion } from "framer-motion";
import Hero from "./Hero";
import Contador from "./Contador";
import { WhatsIcon } from "@/components/Dashboard/EnviarLista/Icons";
import Sobre from "/public/assets/images/email.png";

import Papas from "./Papas";

const textOlive = "text-[#b579ae]";
const bgOlive = "bg-[#cc90c7]";
const lilaFuerte = "text-[#b579ae]";

const COLORS = {
  purpleLight: "#D6B5EB", // Lavanda claro
  purple: "#A569BD", // Púrpura mediano
  violet: "#7D3C98", // Violeta profundo
  pinkLight: "#F8C6DE", // Rosa claro pastel
  pink: "#E27EA6", // Rosa vibrante
  orangeLight: "#F9D1A6", // Durazno claro
  orange: "#E67E22", // Naranja fuerte
  coral: "#F1948A", // Coral suave

  // Colores de fondo/texto
  cream: "#FDF9F4", // Fondo claro
  white: "#FFFFFF", // Blanco
  lilacText: "#A084CA", // Lila para texto decorativo
  softGray: "#C0B9BD", // Gris suave para detalles
};

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
      spBackground="none"
      songLink="/assets/songs/xvsjade.mp3"
    >
      <IngresarBoton
        buttonText="Ingresar"
        extraClases="  !bg-transparent"
        font={dancing}
        novia="XVs"
        novio="Jade"
        join=""
        color={{
          bgColor: bgOlive,
          titleColor: textOlive,
          textButtonColor: "text-white",
        }}
      />
      <Hero />
      <Papas />
      <Contador
        fechaEvento={new Date("2025-05-30T00:00:00")}
        fechaString="Viernes, 30 de Mayo de 2025"
        fotoContador=""
      />
      <div className="relative">
        {/* Círculos decorativos */}
        <div className="absolute z-[-1] top-[20%] left-[20%] h-[200px] w-[200px] rounded-full bg-gradient-radial from-[#E27EA6]/60 to-transparent blur-2xl sm:h-[300px] sm:w-[300px]"></div>
        <div className="absolute z-[-1] bottom-[10%] right-[10%] h-[180px] w-[180px] rounded-full bg-gradient-radial from-[#E67E22]/50 to-transparent blur-2xl sm:h-[280px] sm:w-[280px]"></div>

        <PlaceCard
          bgCard="transparent"
          shadowCard={false}
          show={true}
          titleColor={"text-[#A569BD]"}
          titleFont={dancing}
          bgButtonColor={bgOlive}
          borderColor=""
          buttonTextColor={"text-white"}
          desc={"Misa de Acción de Gracias"}
          direccion={
            "Guillermo Purcell 10, Altos de Bella Unión, 25350 Arteaga, Coah."
          }
          hora={"6:30 pm "}
          nombre={{
            content: "Hacienda La Concepción",
            color: textOlive,
            font: lora,
          }}
          ubicacion={"https://maps.app.goo.gl/owDgPK6sM9hg4bbc8"}
        />
      </div>
      <div className="relative">
        <div className="absolute z-[-1] top-[20%] left-[20%] h-[200px] w-[200px] rounded-full bg-gradient-radial from-[#E27EA6]/60 to-transparent blur-2xl sm:h-[300px] sm:w-[300px]"></div>
        <div className="absolute z-[-1] bottom-[10%] right-[10%] h-[180px] w-[180px] rounded-full bg-gradient-radial from-[#E67E22]/50 to-transparent blur-2xl sm:h-[280px] sm:w-[280px]"></div>

        <PlaceCard
          bgCard="transparent"
          shadowCard={false}
          show={true}
          titleColor={"text-[#A569BD]"}
          titleFont={dancing}
          bgButtonColor={bgOlive}
          borderColor=""
          buttonTextColor={"text-white"}
          desc={"Recepción"}
          direccion={
            "Calle Gral. Manuel Pérez Treviño 425, Zona Centro, 25000 Saltillo, Coah."
          }
          hora={"8:30 pm "}
          nombre={{
            content: "Hacienda La Concepción",
            color: textOlive,
            font: lora,
          }}
          ubicacion={"https://maps.app.goo.gl/owDgPK6sM9hg4bbc8"}
        />
      </div>
      <ItinerarioScrollable
        showItinerario={true}
        eventData={[
          {
            id: 2,
            evento: "Ceremonia Acción \n de Gracias ",
            hora: "6:30 pm",
            Icon: "church",
          },
          {
            id: 4,
            evento: " Cena",
            hora: "8:00 pm",
            Icon: "dinner",
          },
          {
            id: 1,
            evento: `Inicio de Fiesta`,
            hora: "9:00 pm",
            Icon: "party",
          },
          {
            id: 5,
            evento: "Pastel",
            hora: "9:00 pm",
            Icon: "cake",
          },
          {
            id: 5,
            evento: "Regalo Sorpresa",
            hora: "12:00 am",
            Icon: "regalo",
          },
          {
            id: 6,
            evento: "Final del evento",
            hora: "1:00 am",
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
      <div className="relative">
        <div className="absolute z-[-1] top-[20%] left-[20%] h-[200px] w-[200px] rounded-full bg-gradient-radial from-[#F8C6DE]/60 to-transparent blur-2xl sm:h-[300px] sm:w-[300px]"></div>
        <div className="absolute z-[-1] bottom-[10%] right-[10%] h-[180px] w-[180px] rounded-full bg-gradient-radial from-[#E27EA6]/50 to-transparent blur-2xl sm:h-[280px] sm:w-[280px]"></div>

        <MesaDeRegalos
          bgCard="transparent"
          customBorder={"border-[#b579ae]"}
          FraseAgradecimientoFinalColor=""
          FraseAgradecimientoFinalFont={undefined}
          FraseAgradecimientoFinalSize=""
          FraseAgradecimientoFinalText=""
          FraseAgradecimientoInicioColor={textOlive}
          FraseAgradecimientoInicioFont={undefined}
          FraseAgradecimientoInicioSize="text-xl"
          FraseAgradecimientoInicioText=""
          SectionTitleColor={"text-[#A569BD]"}
          SectionTitleFont={dancing}
          ShowFraseDeAgradecimientoFinal={false}
          ShowFraseDeAgradecimientoInicio={false}
          ShowRegalo={true}
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
      </div>
      <div>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`text-[#7D3C98]   text-center ${dancing.className}  text-[32px] p-4 font-bold`}
        >
          Este momento es tan especial para mí que quiero vivirlo a tu lado,
          Deseando contar con tu presencia.{" "}
        </motion.p>
      </div>
      <div>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`text-[#A569BD]  uppercase text-center ${dancing.className}  text-[28px] p-4 font-bold`}
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
              Planner <br /> Viviana Amare
            </p>
            <a href="https://api.whatsapp.com/send?phone=5218447006000&text=Hola!%20Me%20gustar%C3%ADa%20confirmar%20mi%20asistencia%20a%20los%20quinces%20de%20Jade">
              <button
                className={`bg-[#A569BD] border border-[#b579ae] flex items-center gap-3  my-3 rounded-full px-4 py-2`}
              >
                <WhatsIcon className="fill-white text-2xl " />
                <p className=" text-3xl text-white ">844 700 6000</p>
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
