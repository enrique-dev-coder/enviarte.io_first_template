import { NextFont } from "next/dist/compiled/@next/font";

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
  fechaEvento: Date;
  Hero: { frase: string; fecha: string };
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
}
