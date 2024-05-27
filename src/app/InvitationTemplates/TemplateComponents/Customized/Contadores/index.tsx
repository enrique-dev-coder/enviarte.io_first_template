import React from "react";
import { templateModel } from "../types";
import ContadorFloral from "./Floral";
import { NextFont } from "next/dist/compiled/@next/font";

export interface ContadorPropsFloralType {
  fecha: Date;
  fechaTexto: {
    color: string;
    desc: string;
    font: NextFont;
  };
  showSeparator: boolean;
  backGround: string;
  showCornerImg: boolean;
  textColor: string;
}

const Contador = ({
  model,
  contadorPropsFloral,
}: {
  model: templateModel;
  contadorPropsFloral: ContadorPropsFloralType;
}) => {
  switch (model) {
    case "floral":
      return <ContadorFloral data={contadorPropsFloral} />;
    default:
      return <div>Agrega el contador bro</div>;
  }
};

export default Contador;
