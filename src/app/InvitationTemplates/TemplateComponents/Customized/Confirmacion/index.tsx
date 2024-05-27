import React from "react";
import SoloPlanner from "./SoloPlanner";

type ConfirmacionModel = "soloPlanner";
const Confirmacion = ({ model }: { model: ConfirmacionModel }) => {
  switch (model) {
    case "soloPlanner":
      return <SoloPlanner />;
    default:
      break;
  }
};

export default Confirmacion;
