import InvitationContainer from "@/components/wrappers/InvitationContainer";
import InvitationHeroManager from "@/components/sections/InvitationHero";
import ContadorManager from "@/components/sections/ContadorFecha";
import BannerConFoto from "@/components/sections/BannerConFoto";
import ConfirmacionForm from "@/components/sections/ConfirmacionForm";
import SongPlayer from "@/components/sections/SongPlayer";
import InfromacionAdicional from "@/components/sections/InfromacionAdicional";
import IngresarBoton from "@/components/sections/IngresarBoton";
// next js
import { Metadata } from "next/types";
import { headers } from "next/headers";
import Image from "next/image";
import { greatVibes } from "@/fonts";
// db
import prisma from "../../../../prisma";
import PadresVersion2 from "@/components/sections/PadresVersion2";
// Images
import FlowerDivider from "/public/assets/images/floral/floral_divider-removebg-preview.png";
import AnimatedTitle from "@/components/UI/AnimatedTitle";
import Button from "@/components/UI/Button";
import { MapPin } from "lucide-react";
import ItinerarioUpdated from "@/components/sections/ItinerarioUpdated";
import MesaDeRegalosTemplate2 from "@/components/sections/MesaDeRegalosTemplate2";
import InfromacionAdicionalTemplate2 from "@/components/sections/InfromacionAdicionalTemplate2";

export const metadata: Metadata = {
  title: "Edna y Abraham",
  description: "Bodas",
  icons: {
    icon: "/assets/images/floral/logo_boda_fix.png",
  },
};
// server fucntions
const getInvitationId = async (name: string) => {
  const invitationId = await prisma.invitacion.findFirst({
    where: {
      invitationName: name,
    },
    select: {
      id: true,
    },
  });
  return invitationId as { id: string };
};

const IndexPage = async ({ searchParams }: any) => {
  // obtener params para personalizar la invitacion
  // dejarlos como posiblemente undefined por si se usa una  invitacion sin search params
  const nombre = searchParams?.nombre;
  const tel = searchParams?.tel;
  const pasesAsignados = searchParams?.pasesAsignados;

  const fechaEvento = new Date("2024-05-18T00:00:00");
  // obtener  el pathname del middleware
  const headersList = headers();
  const pathname = headersList.get("x-pathname"); // ejemplo: /boda/danielayjosepablo
  const invitationIdForQuery = await getInvitationId(pathname as string); // { id: '65df62e264903d5c4bb5053e' }

  return (
    <InvitationContainer songLink="/song.mp3">
      <IngresarBoton text="Edna & Abraham" />
      <InvitationHeroManager model={2} />
      <ContadorManager model={2} fechaEvento={fechaEvento} />
      {/* <Versiculos
        frase="Así que ya no son dos, sino uno solo. Por tanto, lo que Dios ha unido, que no lo separe el hombre"
        autor="Mateo 19,6"
      /> */}
      <div className="bg-gradient-to-r from-[#DAB060]   relative to-[#C28E4D]  text-yellow-50">
        <PadresVersion2 />
      </div>
      <div>
        {/*Iglesia*/}
        <section className="py-6">
          <div className="flex flex-col gap-2 justify-center items-center ">
            <AnimatedTitle
              extraStyles={`${greatVibes.className}  text-6xl cell:text-5xl `}
              title="Ceremonia Religiosa"
            />
            <p className=" text-2xl cell:text-xl cell:px-2 cell:font-bold ">
              Iglesia San José de los Cerritos{" "}
            </p>
            <p className=" text-2xl cell:text-xl cell:px-2 cell:font-bold">
              17:00 hrs
            </p>
            <div className=" flex items-center cell:w-[90%] cell:mx-auto cell:flex-col">
              <MapPin className=" text-complementaryDark font-bold " />
              <p className=" text-xl text-center cell:text-base ">
                25019, Cam. Real SN-C DEPOSITO H.GOMEZ, San José de los
                Cerritos, Saltillo, Coah.
              </p>
            </div>
            <Button
              externalLink="https://maps.app.goo.gl/jjf2tmv5mme1ZreR8?g_st=iw"
              text="Ubicación"
              extraStyles={`${greatVibes.className} text-yellow-50 text-2xl !bg-complementaryDark`}
            />
          </div>
        </section>{" "}
        <Image
          src={FlowerDivider}
          alt="Invitaciones digitales"
          width={200}
          className="mx-auto"
        />
        <section className="py-6">
          <div className="flex flex-col gap-2 justify-center items-center ">
            <AnimatedTitle
              title="Recepción"
              extraStyles={`${greatVibes.className}  text-6xl cell:text-5xl `}
            />
            <p className=" text-2xl cell:text-xl cell:px-2 cell:font-bold">
              Quinta Veneto
            </p>
            <p className=" text-2xl cell:text-xl cell:px-2 cell:font-bold">
              20:30 hrs
            </p>
            <div className=" flex items-center cell:w-[90%] cell:mx-auto cell:flex-col">
              <MapPin className=" text-complementaryDark font-bold" />
              <p className=" text-xl text-center ">
                Cuarta Peral #311 san Ignacio, Arteaga coahuila
              </p>
            </div>
            <Button
              externalLink="https://maps.app.goo.gl/v2skNKmZkmViXQeM9?g_st=iw"
              text="Ubicación"
              extraStyles={`${greatVibes.className} text-yellow-50 text-2xl !bg-complementaryDark`}
            />
          </div>
          {/*TODO: Preguntar si quieren foto de la iglesia, no lo veo necesario peor bueno  */}
        </section>
      </div>
      <AnimatedTitle
        extraStyles={`${greatVibes.className}  text-6xl cell:text-5xl   `}
        title="Itinerario"
      />
      <div
        className=""
        style={{
          backgroundImage:
            'url("http://www.zingerbugimages.com/backgrounds/white_marble_background_seamless.jpg")',
        }}
      >
        <ItinerarioUpdated />
      </div>
      <BannerConFoto />
      <div className="bg-gradient-to-r from-[#DAB060]   relative to-[#C28E4D]  text-yellow-50">
        <MesaDeRegalosTemplate2 />
      </div>
      <InfromacionAdicionalTemplate2 />
      <ConfirmacionForm
        pasesAsignados={pasesAsignados}
        invitationId={invitationIdForQuery}
        nombreInvitado={nombre}
        telInvitado={tel}
      />
      <SongPlayer />
    </InvitationContainer>
  );
};

export default IndexPage;
