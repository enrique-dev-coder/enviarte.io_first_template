// animation
import type { Metadata } from "next";

import Body from "./Body";

export const metadata: Metadata = {
  title: "Mica & Rosy",
  description: "Invitaciones digitales para eventos",
};

const page = () => {
  return <Body />;
};

export default page;
