"use client";
import { ReactNode, createContext } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";

export const InvitationData = createContext({ pathname: "" });

const InvitationDataProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  return (
    <InvitationData.Provider value={{ pathname }}>
      {children}
    </InvitationData.Provider>
  );
};

export default InvitationDataProvider;
