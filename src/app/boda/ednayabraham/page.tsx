import InvitationContainer from "@/components/wrappers/InvitationContainer";
import InvitationHeroManager from "@/components/sections/InvitationHero";
import Versiculos from "@/components/UI/Versiculos";
import ContadorManager from "@/components/sections/ContadorFecha";
import Padres from "@/components/sections/Padres";
import Iglesia from "@/components/sections/Iglesia";
import Recepción from "@/components/sections/Recepcion";
import Itinerario from "@/components/sections/Itinerario";
import BannerConFoto from "@/components/sections/BannerConFoto";
import MesaDeRegalos from "@/components/sections/MesaDeRegalos";
import ConfirmacionForm from "@/components/sections/ConfirmacionForm";
import SongPlayer from "@/components/sections/SongPlayer";
import InfromacionAdicional from "@/components/sections/InfromacionAdicional";
import IngresarBoton from "@/components/sections/IngresarBoton";
// next js
import { Metadata } from "next/types";
import { headers } from "next/headers";
import Image from "next/image";
// db
import prisma from "../../../../prisma";
import PadresVersion2 from "@/components/sections/PadresVersion2";
// Images
import FlowerDivider from "/public/assets/images/floral/floral_divider-removebg-preview.png";
export const metadata: Metadata = {
  title: "Edna y Abraham",
  description: "Bodas",
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
    <InvitationContainer>
      <IngresarBoton text="Edna y Abraham" />
      <InvitationHeroManager model={2} />
      <ContadorManager model={2} fechaEvento={fechaEvento} />
      {/* <Versiculos
        frase="Así que ya no son dos, sino uno solo. Por tanto, lo que Dios ha unido, que no lo separe el hombre"
        autor="Mateo 19,6"
      /> */}
      <div className="bg-gradient-to-r from-[#DAB060]   relative to-[#C28E4D]  text-white">
        <PadresVersion2 />
        <p className="text-center">
          Aqui pueden poner mas nombre como padrinos etc
        </p>
      </div>
      <div>
        <Iglesia />
        <Image
          src={FlowerDivider}
          alt="Invitaciones digitales"
          width={200}
          className="mx-auto"
        />
        <Recepción />
      </div>
      <Itinerario />
      <BannerConFoto />
      <MesaDeRegalos />
      <InfromacionAdicional />
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
