import React from "react";
import Contador1 from "./Contador1";
import Contador2 from "./Contador2";
const ContadorManager = ({
  model,
  fechaEvento,
}: {
  model: number;
  fechaEvento: any;
}) => {
  switch (model) {
    case 1:
      return <Contador1 fechaEvento={fechaEvento} />;
    case 2:
      return <Contador2 fechaEvento={fechaEvento} />;
    default:
      return <p>Ejemplo de contador </p>;
  }
};

export default ContadorManager;
