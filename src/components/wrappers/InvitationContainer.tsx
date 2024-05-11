"use client";
import { ReactNode, useContext } from "react";
import AudioContextProvider from "@/contexts/AudioContext";
import StartAnimationProvider from "@/contexts/AnimationContext";
import StylingContextProvider, {
  StylesContext,
} from "@/contexts/StylingContext";
import { play } from "@/fonts";
import InvitationDataProvider from "@/contexts/InvitationDataContext";
import { coolBackground } from "@/types";

const InvitationContainer = ({
  children,
  songLink,
  spBackground = "grainy",
}: {
  children: ReactNode;
  songLink: string;
  spBackground?: coolBackground;
}) => {
  return (
    <InvitationDataProvider>
      <AudioContextProvider songLink={songLink}>
        <StartAnimationProvider>
          <StylingContextProvider>
            <MainContainer spBackground={spBackground}>
              {children}
            </MainContainer>
          </StylingContextProvider>
        </StartAnimationProvider>
      </AudioContextProvider>
    </InvitationDataProvider>
  );
};

const MainContainer = ({
  children,
  spBackground,
}: {
  children: ReactNode;
  spBackground: string;
}) => {
  const { allowScroll } = useContext(StylesContext);
  return (
    <main
      className={`${
        play.className
      } max-w-[1580px] mx-auto ${spBackground} relative 
      ${!allowScroll && "w-screen h-screen !overflow-hidden"}`}
    >
      {children}
    </main>
  );
};

export default InvitationContainer;
