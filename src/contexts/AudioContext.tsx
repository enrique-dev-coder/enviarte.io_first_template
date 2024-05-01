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
    // esto es para que ts deje de chillar
    if (audioRef.current) {
      if (playing) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [playing, audioRef]);

  return (
    <AudioPlayerContext.Provider value={{ playing, setPlaying }}>
      <>
        <audio
          src={songLink}
          // "/song.mp3"
          ref={audioRef}
        />
        {children}
      </>
    </AudioPlayerContext.Provider>
  );
};

export default AudioContextProvider;
