"use client";
import { ReactNode, useContext } from "react";
import AudioContextProvider from "@/contexts/AudioContext";
import StartAnimationProvider from "@/contexts/AnimationContext";
import StylingContextProvider, {
  StylesContext,
} from "@/contexts/StylingContext";
import { play } from "@/fonts";
import InvitationDataProvider from "@/contexts/InvitationDataContext";

const InvitationContainer = ({ children }: { children: ReactNode }) => {
  return (
    <InvitationDataProvider>
      <AudioContextProvider>
        <StartAnimationProvider>
          <StylingContextProvider>
            <MainContainer>{children}</MainContainer>
          </StylingContextProvider>
        </StartAnimationProvider>
      </AudioContextProvider>
    </InvitationDataProvider>
  );
};

const MainContainer = ({ children }: { children: ReactNode }) => {
  const { allowScroll } = useContext(StylesContext);
  return (
    <main
      className={`${play.className} max-w-screen-xl mx-auto grainy relative 
      ${!allowScroll && "w-screen h-screen !overflow-hidden"}`}
    >
      {children}
    </main>
  );
};

export default InvitationContainer;
