"use client";
import { useState, useRef, useEffect } from "react";
import { Volume2Icon, VolumeXIcon } from "lucide-react";

const SongPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef();

  useEffect(() => {
    if (playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [playing, audioRef]);
  const handleTouchStart = () => {
    setPlaying(!playing);
  };
  return (
    <div
      className="fixed   z-10 top-[50%] cel:top-0 right-0 mt-4 "
      onTouchStart={handleTouchStart}
    >
      <audio src="/song.mp3" ref={audioRef} />
      <button
        onClick={() => {
          setPlaying(!playing);
        }}
        className=" w-12 h-12 rounded-l-lg  flex justify-center items-center bg-complementaryDark/90"
      >
        {!playing ? (
          <Volume2Icon fill="#ffffff" className="  text-white  w-[60px]" />
        ) : (
          <VolumeXIcon fill="#ffffff" className="  text-white  w-[60px]" />
        )}
      </button>
    </div>
  );
};

export default SongPlayer;
