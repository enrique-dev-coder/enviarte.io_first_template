import InvitationContainer from "@/components/sections/InvitationContainer";
import InvitationHero from "@/components/sections/InvitationHero";
import Versiculos from "@/components/UI/Versiculos";
import Contador from "@/components/sections/Contador";
import Padres from "@/components/sections/Padres";
import Iglesia from "@/components/sections/Iglesia";
import Recepción from "@/components/sections/Recepcion";
import Itinerario from "@/components/sections/Itinerario";
import BannerConFoto from "@/components/sections/BannerConFoto";
import MesaDeRegalos from "@/components/sections/MesaDeRegalos";

const IndexPage = () => {
  const fechaEvento = new Date("2024-05-18T00:00:00");

  return (
    <InvitationContainer>
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
    </InvitationContainer>
  );
};

export default IndexPage;
