import InvitationContainer from "@/components/wrappers/InvitationContainer";
import InvitationHero1 from "@/components/taniaydiego/sections/InvitationHero/InvitationHero1";
import Contador2 from "@/components/taniaydiego/sections/ContadorFecha/Contador2";
import Padres from "@/components/taniaydiego/sections/Padres";
import Iglesia from "@/components/taniaydiego/sections/Iglesia";
import Recepción from "@/components/taniaydiego/sections/Recepcion";
import MesaDeRegalos from "@/components/taniaydiego/sections/MesaDeRegalos";
import SongPlayer from "@/components/sections/SongPlayer";
import IngresarBoton from "@/components/taniaydiego/sections/IngresarBoton";
import WhatsIcon from "/public/assets/images/Taniaydiego/whats_icon.png";
// next js
import { Metadata } from "next/types";
import { headers } from "next/headers";
import Image from "next/image";
// db
import prisma from "../../../../prisma";
import { bavaria, lora } from "@/fonts";
import InfromacionAdicionalTemplate2 from "@/components/taniaydiego/sections/InfromacionAdicionalTemplate2";
import AnimatedTitle from "@/components/UI/AnimatedTitle";
import GaleriaFotos from "@/components/sections/GaleriaFotos";

export const metadata: Metadata = {
  title: "Tania & Diego",
  description: "Bodas",
  icons: {
    icon: "/assets/images/Taniaydiego/TyD_logo.png",
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
    <InvitationContainer songLink="/taniaydiego.mp4">
      <div className={`!${bavaria.className}`}>
        <IngresarBoton novia="Tania" novio="Diego" />
        <InvitationHero1 />
        {/* <Versiculos
          frase="Así que ya no son dos, sino uno solo. Por tanto, lo que Dios ha unido, que no lo separe el hombre"
          autor="Mateo 19,6"
        /> */}
        <Contador2 fechaEvento={fechaEvento} />
        {/* <BannerConFoto /> */}
        <GaleriaFotos />
        <Padres />
        <Iglesia />
        <Recepción />
        {/* <Itinerario /> */}
        <MesaDeRegalos />
        <InfromacionAdicionalTemplate2 />
        <div className="pt-4 pb-10 flex flex-col  items-center justify-center">
          <AnimatedTitle
            title="Favor de confirmar tu asistencia a los siguientes teléfonos"
            extraStyles={`${lora.className} font-medium cell:text-xl`}
          />
          <p className=" text-3xl cell:text-lg cell:text-center">
            Al dar click seras redirigido a WhatsApp
          </p>
          <div className="flex flex-col justify-center items-center py-8">
            <p className={`${bavaria.className} text-4xl font-bold`}>Planner</p>
            <a href="https://api.whatsapp.com/send?phone=5218441339405">
              <button className="flex items-center border-4 my-3 rounded-full px-4 py-2  border-complementaryDark">
                <Image src={WhatsIcon} alt="invitacione para boda" width={48} />
                <p className=" text-3xl">844 133 9405</p>
              </button>
            </a>
          </div>
        </div>
        <SongPlayer />
      </div>
    </InvitationContainer>
  );
};

export default IndexPage;
