import { NextFont } from "next/dist/compiled/@next/font";
import { StaticImageData } from "next/image";

export type templateModel = "simplified" | "modern" | "dafult" | "floral";

export interface InfoSectionTypes {
  backGround: string;
  title: {
    font: NextFont;
    textColor: string;
  };
  sectionTextColor: string;
  nombre: string;
  horas: string;
  direccion: string;
  ubicacion: string;
  buttonStyles: {
    bg: string;
    textColor: string;
    font: NextFont;
  };
}
export interface MesaRegalosPropsTypes {
  backGround: string;
  title: {
    font: NextFont;
    textColor: string;
  };
  sobres: {
    enabled: boolean;
    textColor: string;
    type: string;
    img?: StaticImageData;
  };
  transferencia: {
    enabled: boolean;
  };
  regalo: {
    enabled: boolean;
  };
  fraseDeAgradecimientoInicio?: {
    enabled: boolean;
    text: string;
    styling: {
      font: NextFont;
      size: string;
      color: string;
    };
  };
  fraseDeAgradecimientoFinal?: {
    enabled: boolean;
    text: string;
    styling: {
      font: NextFont;
      size: string;
      color: string;
    };
  };
}

export interface DressCodeProps {
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
      dressCodeImg: StaticImageData | undefined;
      textColor: string;
      extraDesc: string | undefined;
    };
    Hombres: {
      dressCodeImg: StaticImageData | undefined;
      textColor: string;
    };
  };
}

export interface EventoItinerario {
  id: number;
  evento: string;
  hora: string;
  lugar?: string;
  Icon: string;
}
