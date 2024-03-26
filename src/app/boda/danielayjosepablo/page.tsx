import InvitationContainer from "@/components/wrappers/InvitationContainer";
import InvitationHero from "@/components/sections/InvitationHero";
import Versiculos from "@/components/UI/Versiculos";
import Contador from "@/components/sections/Contador";
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
// db
import prisma from "../../../../prisma";

export const metadata: Metadata = {
  title: "Daniela y JosePablo",
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
      <IngresarBoton />
      <InvitationHero />
      <Versiculos
        frase="Así que ya no son dos, sino uno solo. Por tanto, lo que Dios ha unido, que no lo separe el hombre"
        autor="Mateo 19,6"
      />
      <Contador fechaEvento={fechaEvento} />
      <Padres />
      <Iglesia />
      <Recepción />
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
