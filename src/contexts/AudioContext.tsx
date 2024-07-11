"use client";
import { useEffect, useState, useRef, createContext, ReactNode } from "react";

interface StartAudioContextType {
  playing: boolean;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AudioPlayerContext = createContext<StartAudioContextType>({
  playing: false,
  setPlaying: () => {},
});

const AudioContextProvider = ({
  children,
  songLink,
}: {
  children: ReactNode;
  songLink: string;
}) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Esto es para que TypeScript deje de quejarse
    if (audioRef.current) {
      if (playing) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [playing]);

  useEffect(() => {
    const handleEnded = () => {
      if (audioRef.current) {
        audioRef.current.currentTime = 0; // Reinicia el tiempo de reproducción
        audioRef.current.play(); // Vuelve a reproducir el audio
      }
    };

    const currentAudio = audioRef.current;
    if (currentAudio) {
      currentAudio.addEventListener("ended", handleEnded);
    }

    return () => {
      if (currentAudio) {
        currentAudio.removeEventListener("ended", handleEnded);
      }
    };
  }, []);

  return (
    <AudioPlayerContext.Provider value={{ playing, setPlaying }}>
      <>
        <audio src={songLink} ref={audioRef} />
        {children}
      </>
    </AudioPlayerContext.Provider>
  );
};

export default AudioContextProvider;
