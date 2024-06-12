import { NextFont } from "next/dist/compiled/@next/font";
import { StaticImageData } from "next/image";
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
  Hero: { frase: string; fecha: string; fotoDesktop: string; fotoCell: string };
  Iglesia: {
    desc: string;
    nombre: string;
    direccion: string;
    ubicacion: string;
    hora: string;
  };
  Recepcion: {
    desc: string;
    nombre: string;
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
}
