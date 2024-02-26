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
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Daniela y JosePablo",
  description: "Bodas",
};

const IndexPage = () => {
  const fechaEvento = new Date("2024-05-18T00:00:00");

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
      <ConfirmacionForm />
      <SongPlayer />
    </InvitationContainer>
  );
};

export default IndexPage;
