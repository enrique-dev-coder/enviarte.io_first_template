"use client";
import { useState, useEffect, createContext, ReactNode } from "react";
import { useAnimationControls } from "framer-motion";

interface StartAnimationContextType {
  animateNow: boolean;
  setAnimateNow: React.Dispatch<React.SetStateAction<boolean>>;
  controls: any; // Puedes ajustar esto según el tipo real de `controls` que estés utilizando
}

export const StartAnimation = createContext<StartAnimationContextType>({
  animateNow: false,
  setAnimateNow: () => {},
  controls: null, // Ajusta este valor según el tipo real de `controls`
});

const StartAnimationProvider = ({ children }: { children: ReactNode }) => {
  const [animateNow, setAnimateNow] = useState(false);
  const controls = useAnimationControls();

  useEffect(() => {
    if (animateNow) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [animateNow]);

  return (
    <StartAnimation.Provider value={{ animateNow, setAnimateNow, controls }}>
      {children}
    </StartAnimation.Provider>
  );
};

export default StartAnimationProvider;
