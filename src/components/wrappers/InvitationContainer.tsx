"use client";
import { ReactNode, useContext } from "react";
import AudioContextProvider from "@/contexts/AudioContext";
import StartAnimationProvider from "@/contexts/AnimationContext";
import StylingContextProvider, {
  StylesContext,
} from "@/contexts/StylingContext";
import { play } from "@/fonts";

const InvitationContainer = ({ children }: { children: ReactNode }) => {
  return (
    <AudioContextProvider>
      <StartAnimationProvider>
        <StylingContextProvider>
          <MainContainer>{children}</MainContainer>
        </StylingContextProvider>
      </StartAnimationProvider>
    </AudioContextProvider>
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
