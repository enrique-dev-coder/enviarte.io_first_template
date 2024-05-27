import InvitationContainer from "@/components/wrappers/InvitationContainer";
import { bavaria, lora, dancing } from "@/fonts";
import IngresarBoton from "./Common/IngresarBoton";
import InvitationHero1 from "./TemplateComponents/Simplified/InvitationHero/InvitationHero1";
import Contador2 from "./TemplateComponents/Simplified/ContadorFecha/Contador2";
import GaleriaFotos from "@/components/sections/GaleriaFotos";
import Padres from "./TemplateComponents/Simplified/Padres";
import Iglesia from "./TemplateComponents/Simplified/Iglesia";
import Recepción from "./TemplateComponents/Simplified/Recepcion";
import MesaDeRegalos from "./TemplateComponents/Simplified/MesaDeRegalos";
import InfromacionAdicionalTemplate2 from "./TemplateComponents/Simplified/InfromacionAdicionalTemplate2";
import AnimatedTitle from "./TemplateComponents/Simplified/AnimatedTitle";
import Image from "next/image";
import SongPlayer from "@/components/sections/SongPlayer";
import WhatsIcon from "/public/assets/images/Taniaydiego/whats_icon.png";

const InvitationSimplified = () => {
  const fechaEvento = new Date("2024-06-14T00:00:00");

  return (
    <InvitationContainer songLink="/taniaydiego.mp4">
      <div className={`!${bavaria.className}`}>
        <IngresarBoton
          color="goldPalette"
          font={dancing}
          novia="Gabriela"
          novio="Raul"
        />
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
            <p className={`${bavaria.className} text-4xl font-bold`}>
              Wedding Planner <br /> Viviana Amare
            </p>
            <a href="https://api.whatsapp.com/send?phone=5218441339405">
              <button className="flex items-center border-4 my-3 rounded-full px-4 py-2  border-complementaryDark">
                <Image src={WhatsIcon} alt="invitacione para boda" width={48} />
                <p className=" text-3xl"> 844 133 9405</p>
              </button>
            </a>
          </div>
        </div>
        <SongPlayer />
      </div>
    </InvitationContainer>
  );
};

export default InvitationSimplified;
