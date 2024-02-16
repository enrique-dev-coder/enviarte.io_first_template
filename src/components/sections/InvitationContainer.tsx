import React, { ReactNode } from "react";
import { play } from "@/fonts";

const InvitationContainer = ({ children }: { children: ReactNode }) => {
  return (
    <main
      className={`${play.className} max-w-screen-xl mx-auto grainy relative`}
    >
      {children}
    </main>
  );
};

export default InvitationContainer;
