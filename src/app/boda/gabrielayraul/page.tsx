import InvitationSimplified from "@/app/InvitationTemplates/InvitationSimplified";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Gabriela y Raul",
  description: "Bodas",
  icons: {
    icon: "/assets/images/Taniaydiego/TyD_logo.png",
  },
};
const IndexPage = () => {
  return <InvitationSimplified />;
};

export default IndexPage;
