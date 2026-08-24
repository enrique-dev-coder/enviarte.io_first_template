"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { paris } from "@/fonts";
import type {
  InvitationLocation,
  InvitationScheduleItem,
  SuperModernInvitationProps,
} from "./types";
import { reveal } from "./animation";
import { withOpacity } from "./color";

const secondaryTextStyle = (color?: string): CSSProperties | undefined =>
  color ? { color } : undefined;

const titleTextStyle = (color?: string): CSSProperties | undefined =>
  color ? { color } : undefined;

const MainColorIcon = ({
  src,
  label,
  className,
}: {
  src: string;
  label: string;
  className: string;
}) => (
  <span
    role="img"
    aria-label={label}
    className={`block bg-[var(--super-modern-main-color)] ${className}`}
    style={{
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskSize: "contain",
      maskSize: "contain",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
    }}
  />
);

export function Invitacion({
  couple,
  families,
  quote,
  media,
  mainColor,
  secondaryColor,
  titleColorSecondary,
}: Pick<
  SuperModernInvitationProps,
  | "couple"
  | "families"
  | "quote"
  | "media"
  | "mainColor"
  | "secondaryColor"
  | "titleColorSecondary"
>) {
  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-[#f3ede5] via-[#ffffff] to-[#e9e2d8] py-10">
      <div className="relative w-full max-w-sm">
        <div className="absolute left-0 top-0 h-[16rem] w-full p-4 shadow-md">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${media.envelopeImageUrl})` }}
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: withOpacity(mainColor, 40) }}
          />
        </div>
        {media.sealImageUrl && (
          <div className="absolute left-1/2 top-28 z-10 -translate-x-1/2">
            <img src={media.sealImageUrl} alt="sello" className="w-16" />
          </div>
        )}
        <motion.div {...reveal}>
          <div className="relative mx-auto mt-[140px] w-11/12 border-gray-300 bg-white p-3 text-center shadow-lg">
            <div className="border-2 border-[var(--super-modern-main-color)] px-[20px] pb-[40px] pt-[60px]">
              <p
                style={secondaryTextStyle(secondaryColor)}
                className="mx-auto w-11/12 text-center text-[14px] uppercase tracking-widest text-gray-600"
              >
                Con la bendición de Dios y de nuestros padres
              </p>
              <div
                style={secondaryTextStyle(secondaryColor)}
                className="mt-6 text-[14px] leading-5 text-gray-700"
              >
                {families?.firstPersonParents?.length ? (
                  <>
                    <p className="uppercase font-semibold">
                      Padres de la novia
                    </p>
                    {families.firstPersonParents.map((parent) => (
                      <p className="uppercase" key={parent}>
                        {parent}
                      </p>
                    ))}
                  </>
                ) : null}
                {families?.secondPersonParents?.length ? (
                  <>
                    <p className="mt-4 uppercase font-semibold">
                      Padres de el novio
                    </p>
                    {families.secondPersonParents.map((parent) => (
                      <p className="uppercase" key={parent}>
                        {parent}
                      </p>
                    ))}
                  </>
                ) : null}
              </div>
              <div className="mt-8">
                <h1
                  className={`${paris.className} text-4xl font-bold text-[var(--super-modern-main-color)]`}
                  style={titleTextStyle(titleColorSecondary)}
                >
                  {couple.firstPerson}
                </h1>
                <p
                  className={`${paris.className} text-4xl font-bold text-[var(--super-modern-main-color)]`}
                  style={titleTextStyle(titleColorSecondary)}
                >
                  {couple.connector ?? "&"}
                </p>
                <h1
                  className={`${paris.className} text-4xl font-bold text-[var(--super-modern-main-color)]`}
                  style={titleTextStyle(titleColorSecondary)}
                >
                  {couple.secondPerson}
                </h1>
              </div>
              {quote && (
                <>
                  <p
                    style={secondaryTextStyle(secondaryColor)}
                    className="mt-6 text-[14px] uppercase italic text-gray-600"
                  >
                    &quot;{quote.text}&quot;
                  </p>
                  {quote.author && (
                    <p
                      style={secondaryTextStyle(secondaryColor)}
                      className="mt-1 text-[14px] uppercase text-gray-500"
                    >
                      — {quote.author}
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function SeccionCeremonia({
  location,
  eventDate,
  textureImageUrl,
  iconUrl,
  mainColor,
  secondaryColor,
  titleColorSecondary,
  textColorSecondary,
}: {
  location: InvitationLocation;
  eventDate: string | Date;
  textureImageUrl?: string;
  iconUrl?: string;
  mainColor: string;
  secondaryColor?: string;
  titleColorSecondary?: string;
  textColorSecondary?: string;
}) {
  const date = new Date(eventDate);
  const timeZone = "America/Mexico_City";
  const month = new Intl.DateTimeFormat("es-MX", {
    month: "long",
    timeZone,
  })
    .format(date)
    .toUpperCase();
  const weekday = new Intl.DateTimeFormat("es-MX", {
    weekday: "long",
    timeZone,
  }).format(date);
  const dateParts = new Intl.DateTimeFormat("es-MX", {
    timeZone,
  }).formatToParts(date);
  const day = dateParts.find((part) => part.type === "day")?.value;
  const year = dateParts.find((part) => part.type === "year")?.value;
  return (
    <motion.div {...reveal}>
      <div className="flex w-full justify-center">
        <div
          className="w-full max-w-sm rounded-t-[200px] bg-cover bg-center bg-blend-multiply px-6 pb-8 pt-10 text-white shadow-xl"
          style={{
            backgroundColor: withOpacity(mainColor, 80),
            backgroundImage: textureImageUrl
              ? `url(${textureImageUrl})`
              : undefined,
          }}
        >
          <p
            style={secondaryTextStyle(textColorSecondary)}
            className="pt-4 text-center text-[14px] tracking-wide"
          >
            ACOMPAÑANOS EL DÍA
          </p>
          <div className="mt-2 text-center">
            <p
              style={secondaryTextStyle(textColorSecondary)}
              className="font-bold tracking-widest"
            >
              {month}
            </p>
          </div>
          <div className="my-2 flex items-center justify-center gap-2 uppercase">
            <div
              style={secondaryTextStyle(textColorSecondary)}
              className="border-y-2 border-white text-[14px]"
            >
              {weekday}
            </div>
            <div
              className="mt-[-22px] text-[58px]"
              style={{
                lineHeight: "0px",
                ...secondaryTextStyle(textColorSecondary),
              }}
            >
              {day}
            </div>
            <div
              style={secondaryTextStyle(textColorSecondary)}
              className="border-y-2 border-white text-[14px]"
            >
              {location.time}
            </div>
          </div>
          <div className="text-center">
            <p
              style={secondaryTextStyle(textColorSecondary)}
              className="font-bold tracking-widest"
            >
              {year}
            </p>
          </div>
          <div className="mt-6 flex justify-center">
            {iconUrl && (
              <img src={iconUrl} alt="iglesia" className="w-[84px]" />
            )}
          </div>
          <div className="mt-4 text-center">
            <p
              style={titleTextStyle(titleColorSecondary)}
              className={`${paris.className} text-3xl`}
            >
              Ceremonia Religiosa
            </p>
            <p
              style={secondaryTextStyle(textColorSecondary)}
              className="mt-1 text-center tracking-widest"
            >
              {location.name}
            </p>
            <p
              style={secondaryTextStyle(textColorSecondary)}
              className="mt-1 text-center tracking-widest"
            >
              {location.address}
            </p>
          </div>
          <div className="mt-6 flex justify-center">
            <a
              href={location.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-white px-6 py-2 tracking-widest text-gray-700 shadow-md transition hover:shadow-lg"
              style={secondaryTextStyle(secondaryColor)}
            >
              ¿CÓMO LLEGAR?
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function TarjetitaRecepcion({
  location,
  iconUrl,
  secondaryColor,
  titleColorSecondary,
}: {
  location: InvitationLocation;
  iconUrl?: string;
  secondaryColor?: string;
  titleColorSecondary?: string;
}) {
  return (
    <motion.div {...reveal}>
      <div className="mx-auto my-8 w-[320px] max-w-sm rounded-3xl bg-white text-[var(--super-modern-main-color)] shadow-md">
        <div className="p-4 text-center">
          <p
            style={titleTextStyle(titleColorSecondary)}
            className={`${paris.className} text-3xl`}
          >
            Recepción
          </p>
          <p
            style={secondaryTextStyle(secondaryColor)}
            className="mt-1 text-center text-lg font-bold tracking-widest"
          >
            {location.name}
          </p>
          <p
            style={secondaryTextStyle(secondaryColor)}
            className="mt-1 text-center text-lg font-bold tracking-widest"
          >
            {location.time}
          </p>
          <div className="mt-6 flex justify-center">
            {iconUrl && (
              <MainColorIcon
                src={iconUrl}
                label="recepción"
                className="h-[64px] w-[64px]"
              />
            )}
          </div>
          <p
            style={secondaryTextStyle(secondaryColor)}
            className="mt-1 text-center tracking-widest"
          >
            {location.address}
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href={location.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-[var(--super-modern-main-color)] px-6 py-2 tracking-widest text-white shadow-md transition hover:shadow-lg"
            >
              ¿CÓMO LLEGAR?
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export function Tarjetita({
  title = "Evento solo para adultos",
  message,
  iconUrl,
  titleColorSecondary,
  textColorSecondary,
}: {
  title?: string;
  message: string;
  iconUrl?: string;
  titleColorSecondary?: string;
  textColorSecondary?: string;
}) {
  return (
    <motion.div {...reveal}>
      <div className="w-[280px] rounded-3xl bg-[var(--super-modern-main-color)] p-4 text-white shadow-md">
        <p
          style={titleTextStyle(titleColorSecondary)}
          className={`${paris.className} text-center text-xl`}
        >
          {title}
        </p>
        <div className="mt-2 flex justify-center">
          {iconUrl && (
            <img
              src={iconUrl}
              alt="evento solo para adultos"
              className="w-[72px]"
            />
          )}
        </div>
        <p
          style={secondaryTextStyle(textColorSecondary)}
          className="mt-1 text-center text-[10px] uppercase tracking-widest"
        >
          {message}
        </p>
      </div>
    </motion.div>
  );
}
export function TarjetitaDressCode({
  title = "Código de Vestimenta",
  details = [],
  restrictions,
  iconUrl,
  secondaryColor,
  titleColorSecondary,
}: {
  title?: string;
  details?: string[];
  restrictions?: string;
  iconUrl?: string;
  secondaryColor?: string;
  titleColorSecondary?: string;
}) {
  return (
    <motion.div {...reveal}>
      <div className="w-[280px] rounded-3xl bg-white p-4 text-[var(--super-modern-main-color)] shadow-md">
        <p
          style={titleTextStyle(titleColorSecondary)}
          className={`${paris.className} text-center text-xl`}
        >
          {title}
        </p>
        {details.slice(0, 1).map((detail) => (
          <p
            style={secondaryTextStyle(secondaryColor)}
            className="mt-1 text-center text-[14px] font-bold uppercase tracking-widest"
            key={detail}
          >
            {detail}
          </p>
        ))}
        <div className="mt-2 flex justify-center">
          {iconUrl && (
            <img
              src={iconUrl}
              alt="código de vestimenta"
              className="w-[72px]"
            />
          )}
        </div>
        {details.slice(1).map((detail) => (
          <p
            style={secondaryTextStyle(secondaryColor)}
            className="mt-1 text-center text-[14px] uppercase tracking-widest"
            key={detail}
          >
            {detail}
          </p>
        ))}
        {restrictions && (
          <p
            style={secondaryTextStyle(secondaryColor)}
            className="mt-2 text-center text-[14px] font-bold uppercase tracking-widest"
          >
            {restrictions}
          </p>
        )}
      </div>
    </motion.div>
  );
}
export function Tarjetita2({
  title = "Regalo",
  description,
  iconUrl,
  titleColorSecondary,
  textColorSecondary,
}: {
  title?: string;
  description: string;
  iconUrl?: string;
  titleColorSecondary?: string;
  textColorSecondary?: string;
}) {
  return (
    <motion.div {...reveal}>
      <div className="w-[280px] rounded-3xl bg-[var(--super-modern-main-color)] p-4 text-white shadow-md">
        <p
          style={titleTextStyle(titleColorSecondary)}
          className={`${paris.className} text-center text-xl`}
        >
          {title}
        </p>
        <div className="mt-6 flex justify-center">
          {iconUrl && <img src={iconUrl} alt="regalo" className="w-[64px]" />}
        </div>
        <p
          style={secondaryTextStyle(textColorSecondary)}
          className="mt-1 text-center text-[14px] uppercase tracking-widest"
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export function Itinerario({
  items,
  textureImageUrl,
  titleColorSecondary,
}: {
  items: InvitationScheduleItem[];
  textureImageUrl?: string;
  titleColorSecondary?: string;
}) {
  if (!items.length) return null;
  return (
    <motion.div {...reveal} className="relative">
      <div className="flex justify-center">
        <div
          className="relative w-full max-w-sm bg-white bg-cover bg-center pb-[68px] text-[var(--super-modern-main-color)]"
          style={
            textureImageUrl
              ? { backgroundImage: `url(${textureImageUrl})` }
              : undefined
          }
        >
          <div className="triangle-top h-[68px] bg-gradient-to-br from-[#f3ede5] via-[#ffffff] to-[#e9e2d8] shadow-xl" />
          <h2
            style={titleTextStyle(titleColorSecondary)}
            className={`${paris.className} my-10 text-center text-4xl font-bold`}
          >
            Itinerario
          </h2>
          <div className="relative mb-10">
            <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gray-400" />
            {items.map((item, index) => {
              const textFirst = index % 2 === 0;
              return (
                <motion.div
                  {...reveal}
                  key={`${item.time}-${item.title}`}
                  className="relative"
                >
                  <div className="relative mb-12 flex items-center">
                    <div
                      className={`w-1/2 ${textFirst ? "pr-6 text-right" : ""}`}
                    >
                      {textFirst ? (
                        <>
                          <p className="text-[14px]">{item.time}</p>
                          <p className="text-sm uppercase tracking-widest">
                            {item.title}
                          </p>
                        </>
                      ) : (
                        item.iconUrl && (
                          <MainColorIcon
                            src={item.iconUrl}
                            label={item.title}
                            className="ml-auto h-12 w-12 opacity-80"
                          />
                        )
                      )}
                    </div>
                    <div className="relative z-10">
                      <div className="h-3 w-3 rounded-full bg-gray-700" />
                    </div>
                    <div className={`w-1/2 ${textFirst ? "" : "pl-6"}`}>
                      {textFirst ? (
                        item.iconUrl && (
                          <MainColorIcon
                            src={item.iconUrl}
                            label={item.title}
                            className="ml-[24px] h-12 w-12 opacity-80"
                          />
                        )
                      ) : (
                        <>
                          <p className="text-[14px]">{item.time}</p>
                          <p className="text-sm uppercase tracking-widest">
                            {item.title}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="triangle-bottom absolute h-[68px] w-full translate-y-[-68px] bg-gradient-to-br from-[#f3ede5] via-[#ffffff] to-[#e9e2d8]" />
    </motion.div>
  );
}
export function TarjetitaConfirmacion({
  confirmation,
  secondaryColor,
  titleColorSecondary,
}: {
  confirmation: NonNullable<SuperModernInvitationProps["confirmation"]>;
  secondaryColor?: string;
  titleColorSecondary?: string;
}) {
  return (
    <motion.div {...reveal}>
      <div className="mx-auto my-8 w-[320px] max-w-sm rounded-3xl bg-white text-[var(--super-modern-main-color)] shadow-md">
        <div className="p-4 text-center">
          <p
            style={titleTextStyle(titleColorSecondary)}
            className={`${paris.className} text-3xl`}
          >
            Confirmación de Asistencia
          </p>
          <p
            style={secondaryTextStyle(secondaryColor)}
            className="mt-1 text-center text-sm tracking-widest uppercase"
          >
            {confirmation.message ?? "Nos encantará celebrar contigo."}
          </p>
          <p
            style={secondaryTextStyle(secondaryColor)}
            className="mt-3 text-center font-semibold uppercase tracking-widest"
          >
            Favor de confirmar tu asistencia antes del <br />
            <b>{confirmation.deadline}</b>
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href={confirmation.url}
              target="_blank"
              rel="noreferrer"
              className="bg-[var(--super-modern-main-color)] px-6 py-2 tracking-widest text-white shadow-md transition hover:shadow-lg"
            >
              Confirmar
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export function Foto({
  url,
  alt,
  imagesInGrayscale = true,
}: {
  url?: string;
  alt: string;
  imagesInGrayscale?: boolean;
}) {
  return url ? (
    <motion.div {...reveal}>
      <img src={url} alt={alt} className={imagesInGrayscale ? "grayscale" : ""} />
    </motion.div>
  ) : null;
}
