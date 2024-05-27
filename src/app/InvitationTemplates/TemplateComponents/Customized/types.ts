import { NextFont } from "next/dist/compiled/@next/font";

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
}
