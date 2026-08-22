"use client";

import InvitationContainer from "@/components/wrappers/InvitationContainer";
import IngresarBoton from "@/app/InvitationTemplates/TemplateComponents/Customized/CommonComponents/IngresarBoton";
import SongButtonPlayer from "@/app/InvitationTemplates/Common/SongButtonPlayer";
import { paris } from "@/fonts";
import type { SuperModernInvitationProps } from "./types";
import Hero from "./Hero";
import Contador from "./Contador";
import {
  Foto,
  Invitacion,
  Itinerario,
  SeccionCeremonia,
  Tarjetita,
  Tarjetita2,
  TarjetitaConfirmacion,
  TarjetitaDressCode,
  TarjetitaRecepcion,
} from "./Sections";

const Body = (props: SuperModernInvitationProps) => {
  const {
    couple,
    event,
    adultOnly,
    dressCode,
    gift,
    schedule = [],
    confirmation,
    media,
  } = props;
  const initials = couple.initials ?? {
    first: couple.firstPerson.charAt(0),
    second: couple.secondPerson.charAt(0),
  };
  const photos = media.galleryImageUrls ?? [];
  const alt = `Fotografía de ${couple.firstPerson} y ${couple.secondPerson}`;
  return (
    <InvitationContainer spBackground="none" songLink={media.songUrl ?? ""}>
      <IngresarBoton
        buttonText="Ingresar"
        bgCuadrito="bg-white"
        extraClases="!mt-[16px] !bg-transparent"
        font={paris}
        novia={couple.firstPerson}
        novio={couple.secondPerson}
        join={couple.connector === "&" ? "y" : (couple.connector ?? "y")}
        color={{
          bgColor: "bg-[#6b705c]",
          titleColor: "text-[#6b705c]",
          textButtonColor: "text-white",
        }}
      />
      <Hero imageUrl={media.heroImageUrl} initials={initials} />
      <Invitacion {...props} />
      <Foto url={photos[0]} alt={alt} />
      <section className="bg-gradient-to-br from-[#f3ede5] via-white to-[#e9e2d8] py-10">
        {event.ceremony && (
          <SeccionCeremonia
            location={event.ceremony}
            eventDate={event.date}
            textureImageUrl={media.textureImageUrl}
            iconUrl={media.icons?.church}
          />
        )}
        {event.reception && (
          <TarjetitaRecepcion
            location={event.reception}
            iconUrl={media.icons?.reception}
          />
        )}
      </section>
      <Foto url={photos[1]} alt={alt} />
      {(adultOnly || dressCode || gift) && (
        <section className="bg-gradient-to-br from-[#f3ede5] via-white to-[#e9e2d8] py-10">
          <div className="mx-auto max-w-sm">
            <div className="mb-4">
              {adultOnly && (
                <Tarjetita
                  title={adultOnly.title}
                  message={adultOnly.message}
                  iconUrl={media.icons?.adultOnly}
                />
              )}
            </div>
            <div className="mb-4 flex justify-end">
              {dressCode && (
                <TarjetitaDressCode
                  title={dressCode.title}
                  details={dressCode.details}
                  iconUrl={media.icons?.dressCode}
                />
              )}
            </div>
            <div>
              {gift && (
                <Tarjetita2
                  title={gift.title}
                  description={gift.description}
                  iconUrl={media.icons?.gift}
                />
              )}
            </div>
          </div>
        </section>
      )}
      <Foto url={photos[2]} alt={alt} />
      <Foto url={photos[3]} alt={alt} />
      <section className="bg-gradient-to-br from-[#f3ede5] via-white to-[#e9e2d8] py-10">
        <Itinerario items={schedule} textureImageUrl={media.textureImageUrl} />
      </section>
      <Foto url={photos[4]} alt={alt} />
      {confirmation && (
        <section className="bg-gradient-to-br from-[#f3ede5] via-white to-[#e9e2d8] py-10">
          <TarjetitaConfirmacion confirmation={confirmation} />
        </section>
      )}
      <Foto url={photos[5]} alt={alt} />
      <section className="bg-gradient-to-br from-[#f3ede5] via-white to-[#e9e2d8] py-10">
        <div className="mx-auto max-w-sm">
          <Contador
            fechaEvento={event.date}
            fechaString={event.displayDate}
            textureImageUrl={media.textureImageUrl}
          />
        </div>
      </section>
      <SongButtonPlayer backgroundColor="bg-[#6b705c]" />
      <Foto url={photos[6]} alt={alt} />
    </InvitationContainer>
  );
};

export default Body;
