import React from "react";
import HeroSimplified from "./HeroSimplified";
import HeroDefault from "./HeroDefault";
import { NextFont } from "next/dist/compiled/@next/font";
import { templateModel } from "../types";

export interface HeroSectionDataTypesSimplified {
  fraseIncial: {
    text: string;
    size: string;
    color: string;
  };
  backgroundPictures: {
    desktop: string;
    cell: string;
  };
  nombreNovios: {
    font: NextFont;
    novia: string;
    novio: string;
    textColor: string;
    join: {
      color: string;
      symbolo: string;
    };
  };
}
const HeroSection = ({
  model,
  heroSectionDataSimplified,
}: {
  model: templateModel;
  heroSectionDataSimplified: HeroSectionDataTypesSimplified;
}) => {
  switch (model) {
    case "simplified":
      return <HeroSimplified heroData={heroSectionDataSimplified} />;
    default:
      return <HeroDefault />;
  }
};

export default HeroSection;
