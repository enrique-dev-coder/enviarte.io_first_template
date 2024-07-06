import { NextFont } from "next/dist/compiled/@next/font";
import { StaticImageData } from "next/image";
import { EventoItinerario } from "@/app/InvitationTemplates/TemplateComponents/Customized/types";
export type Invitado = {
  name: string;
  tel: string;
  pasesAsignados: number;
  pasesConfirmados: number;
};

export type InvitadoParaLink = {
  name: string;
  tel?: string;
  pasesAsignados: number;
};

export interface TypesForSendingWhatsAppInvite {
  nombre: string;
  tel: string;
  invitacionId: string;
  whatsMessage: string;
}

export type colorPalette = "blackPalette" | "goldPalette";
export type joinChar = "y" | "+" | "&";
export type coolBackground = "grainy" | "flowers";
export interface InvitationDataTypes {
  novia: string;
  join: joinChar;
  novio: string;
  titleFont: NextFont;
  fechaString?: string;
  spBackground?: coolBackground;
  color: colorPalette;
  fotoContador: string;
  songLink: string;
  fechaEvento: Date;
  Hero: {
    frase: {
      content: string;
      font: NextFont;
    };
    fecha: {
      content: string;
      font: NextFont;
    };
    fotoDesktop: string;
    fotoCell: string;
  };
  Iglesia: {
    desc: string;
    nombre: {
      content: string;
      font: NextFont;
    };
    direccion: string;
    ubicacion: string;
    hora: string;
  };
  GraciasBanner: {
    frase: {
      content: string;
      font: NextFont;
      styling: { color: string; size: string };
    };
    name: {
      content: string;
      font: NextFont;
      styling: { color: string; size: string };
    };
  };
  Recepcion: {
    desc: string;
    nombre: {
      content: string;
      font: NextFont;
    };
    direccion: string;
    ubicacion: string;
    hora: string;
  };
  MesaRegalosProps: {
    backGround: string;
    title: {
      font: NextFont;
      textColor: string;
    };
    sobres: {
      enabled: boolean;
      textColor: string;
      type: string;
      img: StaticImageData;
    };
    transferencia: {
      enabled: boolean;
    };
    fraseDeAgradecimientoInicio: {
      enabled: boolean;
      text: string;
      styling: {
        font: NextFont;
        size: string;
        color: string;
      };
    };
    fraseDeAgradecimientoFinal: {
      enabled: boolean;
      text: string;
      styling: {
        font: NextFont;
        size: string;
        color: string;
      };
    };
  };
  DressCodeProps: {
    backGround: string;
    title: {
      font: NextFont;
      textColor: string;
    };
    desc: {
      text: string;
      color: string;
    };
    iconSection: {
      show: boolean;
      Mujeres: {
        dressCodeImg: StaticImageData;
        textColor: string;
      };
      Hombres: {
        dressCodeImg: StaticImageData;
        textColor: string;
      };
    };
  };
  ConfirmacionForm: {
    nombre: string;
    tel: string;
    pasesAsignados: string;
    invitationId: string;
    styling: {
      section: {
        backgroundColor: string;
      };
      confirmButton: {
        backgroundColor: string;
        disabledBackgroundColor: string;
      };
    };
  };
  ItinerarioScrollable: {
    sectionStyling: {
      lineColor: string;
      lineBg: string;
      circleColor: string;
      circleBg: string;
      circleSoftStroke: string;
      iconColor: string;
      cardBg: string;
    };
    data: Array<EventoItinerario>;
  };
}
