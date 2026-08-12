"use client";

import { useRef } from "react";
import type { ReactNode } from "react";

import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";

import { DanceIcon, RecepcionIcon } from "../../CustomIcons";

import { ChurchIcon, PartyPopperIcon, UtensilsCrossedIcon } from "lucide-react";

import { EventoItinerario } from "../types";

import CivilImg from "/public/assets/images/couple.png";
import Coctel from "/public/assets/images/champagne-glass.png";
import Flowers from "/public/assets/images/bouquet.png";
import Regalo from "/public/assets/images/gift.png";
import cake from "/public/assets/images/cake.png";

// ======================================================
// ICONOS
// ======================================================

const CivilIcon = () => <Image src={CivilImg} alt="boda" width={36} />;

const CoctelIcon = () => <Image src={Coctel} alt="coctel" width={36} />;

const FlowersIcon = () => <Image src={Flowers} alt="flores" width={36} />;

const RegaloIcon = () => <Image src={Regalo} alt="regalo" width={36} />;

const CakeIcon = () => <Image src={cake} alt="pastel" width={36} />;

const Icons = {
  church: <ChurchIcon size={36} />,
  party: <PartyPopperIcon size={36} />,
  dinner: <UtensilsCrossedIcon size={36} />,
  dance: <DanceIcon />,
  recepcion: <RecepcionIcon />,
  civil: <CivilIcon />,
  coctel: <CoctelIcon />,
  flores: <FlowersIcon />,
  regalo: <RegaloIcon />,
  cake: <CakeIcon />,
};

type IconKey = keyof typeof Icons;

// ======================================================
// PROPS DEL ITEM
// ======================================================

type ItemProps = {
  Icon: ReactNode;

  position: "right" | "left";

  actividad: string;
  hora: string;
  lugar?: string;

  // Estilos originales
  circleColor?: string;
  iconColor?: string;
  circleBg?: string;
  circleSoftStroke?: string;
  cardBg?: string;

  // Nuevas props opcionales
  cardGradient?: boolean;
  textFont?: string;
  textColor?: string;

  // Mostrar u ocultar el piquito
  showRombito?: boolean;

  // Tamaño del texto
  textSize?: string;
};

// ======================================================
// ITEM DEL ITINERARIO
// ======================================================

function Item({
  Icon,
  position,
  actividad,
  hora,
  lugar,

  circleColor,
  iconColor,
  circleBg,
  circleSoftStroke,
  cardBg,

  // Nuevas props
  cardGradient = false,
  textFont = "",
  textColor = "",
  showRombito = true,
  textSize = "text-lg",
}: ItemProps) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  // ======================================================
  // FONDO GRADIENTE DE LA TARJETA
  // ======================================================

  const cardStyle = cardGradient
    ? {
        background: `
          radial-gradient(
            ellipse at 0% 0%,
            rgba(244, 180, 190, 0.65) 0%,
            rgba(244, 180, 190, 0.30) 18%,
            transparent 45%
          ),
          radial-gradient(
            ellipse at 100% 20%,
            rgba(170, 215, 245, 0.60) 0%,
            rgba(170, 215, 245, 0.25) 20%,
            transparent 48%
          ),
          radial-gradient(
            ellipse at 50% 100%,
            rgba(205, 190, 240, 0.35) 0%,
            rgba(205, 190, 240, 0.15) 20%,
            transparent 50%
          ),
          rgba(255, 255, 255, 0.75)
        `,
      }
    : undefined;

  // ======================================================
  // CLASES DE LA TARJETA
  // ======================================================

  const cardClass = cardGradient
    ? `
        bg-white/70
        border
        border-white/70
        shadow-[0_8px_30px_rgba(150,190,220,0.18)]
      `
    : (cardBg ?? "");

  // Color del texto.
  // Si no se proporciona, conserva el comportamiento original.
  const finalTextColor = textColor || "text-neutral-900";

  // ======================================================
  // ITEM DERECHO
  // ======================================================

  if (position === "right") {
    return (
      <div className="flex justify-center items-center cell:ml-[0%] cell:gap-5 ml-[-82%] h-[200px] gap-10">
        {/* TARJETA */}
        <div
          className={`
            relative
            z-10
            w-[250px]
            cell:w-[184px]
            cell:mr-0
            cell:order-2
            px-4
            py-2
            rounded-md
            shadow-md
            ${cardClass}
            cell:h-auto
            h-[100px]
            cell:py-1
          `}
          style={cardStyle}
        >
          {/* ROMBITO */}
          {showRombito && (
            <div
              className={`
                absolute
                h-5
                w-5
                cell:right-[94%]
                right-[-3%]
                top-[40%]
                ${cardGradient ? "bg-white/70" : cardBg}
                rotate-45
                z-0
              `}
              style={cardGradient ? cardStyle : undefined}
            />
          )}

          {/* ACTIVIDAD */}
          <p
            className={`
              relative
              z-10
              ${textFont}
              ${finalTextColor}
              whitespace-pre-line
              font-bold
              ${textSize}
              cell: ${textSize}
            `}
          >
            {actividad}
          </p>

          {/* HORA */}
          <p
            className={`
              relative
              z-10
              ${textFont}
              ${finalTextColor}
              font-medium
              cell:text-lg
            `}
          >
            {hora}
          </p>

          {/* LUGAR */}
          <p
            className={`
              relative
              z-10
              ${textFont}
              ${finalTextColor}
              font-medium
              cell:text-sm
            `}
          >
            {lugar}
          </p>
        </div>

        {/* ICONO + CÍRCULO */}
        <section className="relative">
          {/* CÍRCULO DE PROGRESO */}
          <section className="absolute z-50 top-[-19px] right-[-5px]">
            <div ref={ref}>
              <figure className="progress">
                <svg
                  id="progress"
                  width="108"
                  height="108"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="30"
                    pathLength="1"
                    className={circleSoftStroke}
                  />

                  <motion.circle
                    cx="50"
                    cy="50"
                    r="30"
                    pathLength="1"
                    className={circleColor}
                    style={{
                      pathLength: scrollYProgress,
                    }}
                  />
                </svg>
              </figure>
            </div>
          </section>

          {/* ICONO */}
          <div>
            <div
              className={`
                ${circleBg}
                w-[70px]
                flex
                justify-center
                items-center
                h-[70px]
                z-30
                rounded-full
              `}
            >
              <div
                className={`
                  w-[61px]
                  h-[61px]
                  ${circleBg}
                  translate-x-[-15px]
                  z-30
                  rounded-full
                  flex
                  justify-center
                  items-center
                  ${iconColor ?? ""}
                `}
              >
                {Icon}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // ======================================================
  // ITEM IZQUIERDO
  // ======================================================

  return (
    <div className="flex justify-center items-center cell:mr-0 cell:cell:ml-[0%] mr-[-80%] h-[200px] cell:gap-4 gap-10">
      {/* ICONO + CÍRCULO */}
      <section className="relative">
        {/* CÍRCULO DE PROGRESO */}
        <section className="absolute z-50 top-[-19px] right-[-5px]">
          <div ref={ref}>
            <figure className="progress">
              <svg id="progress" width="108" height="108" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="30"
                  pathLength="1"
                  className={circleSoftStroke}
                />

                <motion.circle
                  cx="50"
                  cy="50"
                  r="30"
                  pathLength="1"
                  className={circleColor}
                  style={{
                    pathLength: scrollYProgress,
                  }}
                />
              </svg>
            </figure>
          </div>
        </section>

        {/* ICONO */}
        <div>
          <div
            className={`
              ${circleBg}
              w-[70px]
              shadow-sm
              flex
              justify-center
              items-center
              h-[70px]
              translate-x-[-15px]
              z-30
              rounded-full
            `}
          >
            <div className={iconColor ?? ""}>{Icon}</div>
          </div>
        </div>
      </section>

      {/* TARJETA */}
      <div
        className={`
          relative
          z-10
          w-[250px]
          cell:w-full
          cell:mr-0
          cell:order-2
          px-4
          py-2
          rounded-md
          shadow-md
          ${cardClass}
          cell:h-auto
          h-[100px]
          cell:py-1
        `}
        style={cardStyle}
      >
        {/* ROMBITO */}
        {showRombito && (
          <div
            className={`
              absolute
              h-5
              w-5
              left-[-3%]
              top-[40%]
              ${cardGradient ? "bg-white/70" : cardBg}
              rotate-45
              z-0
            `}
            style={cardGradient ? cardStyle : undefined}
          />
        )}

        {/* ACTIVIDAD */}
        <p
          className={`
            relative
            z-10
            ${textFont}
            ${finalTextColor}
            whitespace-pre-line
            font-bold
            ${textSize}
            cell:${textSize}
          `}
        >
          {actividad}
        </p>

        {/* HORA */}
        <p
          className={`
            relative
            z-10
            ${textFont}
            ${finalTextColor}
            font-medium
            cell:text-lg
          `}
        >
          {hora}
        </p>

        {/* LUGAR */}
        <p
          className={`
            relative
            z-10
            ${textFont}
            ${finalTextColor}
            font-medium
            cell:text-lg
          `}
        >
          {lugar}
        </p>
      </div>
    </div>
  );
}

// ======================================================
// PROPS DEL COMPONENTE PRINCIPAL
// ======================================================

type ItinerarioScrollableProps = {
  showItinerario: boolean;

  sectionStyling:
    | {
        lineColor: string;
        lineBg: string;
        circleColor: string;
        iconColor: string;
        circleBg: string;
        circleSoftStroke: string;
        cardBg: string;
      }
    | undefined;

  eventData: Array<EventoItinerario> | undefined;

  // ====================================================
  // PROPS OPCIONALES
  // ====================================================

  /**
   * Cambia el color de los iconos.
   *
   * Ejemplo:
   * iconColor="text-[#40566B]"
   */
  iconColor?: string;

  /**
   * Permite reemplazar iconos específicos.
   *
   * Ejemplo:
   *
   * customIcons={{
   *   church: <Image src={miImagen} alt="iglesia" width={36} />,
   *   civil: <Image src={otraImagen} alt="civil" width={36} />
   * }}
   */
  customIcons?: Partial<Record<IconKey, ReactNode>>;

  /**
   * Activa el fondo de vidrio con halos
   * rosa, celeste y lavanda.
   *
   * Por defecto: false
   */
  cardGradient?: boolean;

  /**
   * Cambia la fuente del texto.
   *
   * Ejemplo:
   * textFont={champagne.className}
   */
  textFont?: string;

  /**
   * Cambia el color del texto.
   *
   * Ejemplo:
   * textColor="text-[#40566B]"
   */
  textColor?: string;

  /**
   * Muestra u oculta el rombito
   * que conecta la tarjeta con la línea.
   *
   * Por defecto: true
   */
  showRombito?: boolean;

  /**
   * Cambia el tamaño del texto principal
   * de cada evento.
   *
   * Ejemplo:
   * textSize="text-xl"
   *
   * Por defecto: text-lg
   */
  textSize?: string;
};

// ======================================================
// COMPONENTE PRINCIPAL
// ======================================================

const ItinerarioScrollable = ({
  sectionStyling,
  eventData,
  showItinerario,

  // Props opcionales
  iconColor,
  customIcons,
  cardGradient = false,
  textFont,
  textColor,
  showRombito = true,
  textSize = "text-lg",
}: ItinerarioScrollableProps) => {
  // Referencia del itinerario
  const ItinerarioRef = useRef(null);

  const itemRef = useRef(null);

  // ====================================================
  // ANIMACIÓN DE LA LÍNEA
  // ====================================================

  const { scrollYProgress } = useScroll({
    offset: ["start center", "center start"],
    target: ItinerarioRef,
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 0.9]);

  // ====================================================
  // RENDER
  // ====================================================

  return showItinerario ? (
    <>
      <div
        ref={ItinerarioRef}
        className="
          max-w-[375px]
          mx-auto
          mt-10
          relative
          overflow-hidden
          flex
          gap-2
          items-center
          justify-center
        "
      >
        {/* LÍNEA ANIMADA */}

        <motion.div
          style={{
            scaleY: scale,
          }}
          className={`
            absolute
            w-[8px]
            top-[0]
            right-[50%]
            cell:right-[80%]
            z-10
            h-full
            origin-top
            ${sectionStyling?.lineColor}
          `}
        />

        {/* LÍNEA DE FONDO */}

        <motion.div
          className={`
            absolute
            w-[8px]
            top-[0]
            right-[50%]
            z-0
            h-[90%]
            origin-top
            ${sectionStyling?.lineBg}
            my-4
            shadow-md
            cell:right-[80%]
          `}
        />

        {/* EVENTOS */}

        <div ref={itemRef} className="flex flex-col z-10 pt-3">
          {eventData?.map((event) => {
            const eventIconKey = event.Icon as IconKey;

            /*
             * Si existe un icono personalizado usamos ese.
             * Si no, utilizamos el icono original.
             */
            const eventIcon =
              customIcons?.[eventIconKey] ?? Icons[eventIconKey];

            return (
              <Item
                key={event.id}
                position={event.id % 2 === 0 ? "right" : "left"}
                Icon={eventIcon}
                cardBg={sectionStyling?.cardBg}
                actividad={event.evento}
                hora={event.hora}
                circleColor={sectionStyling?.circleColor}
                iconColor={iconColor ?? sectionStyling?.iconColor}
                circleBg={sectionStyling?.circleBg}
                circleSoftStroke={sectionStyling?.circleSoftStroke}
                cardGradient={cardGradient}
                textFont={textFont}
                textColor={textColor}
                showRombito={showRombito}
                textSize={textSize}
              />
            );
          })}
        </div>
      </div>
    </>
  ) : null;
};

export default ItinerarioScrollable;
