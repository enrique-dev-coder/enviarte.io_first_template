import React from "react";
import CustomizedTemplate from "@/app/InvitationTemplates/TemplateComponents/Customized";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Karla & Hector",
  description: "Bodas",
  icons: {
    icon: "/assets/images/Taniaydiego/TyD_logo.png",
  },
};
const PageIndex = () => {
  return <CustomizedTemplate />;
};

export default PageIndex;
