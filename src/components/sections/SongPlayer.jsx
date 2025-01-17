"use client";
import { useContext } from "react";
import { Volume2Icon, VolumeXIcon } from "lucide-react";
import { AudioPlayerContext } from "@/contexts/AudioContext";
const SongPlayer = ({ color = "bg-complementaryDark/90" }) => {
  const { playing, setPlaying } = useContext(AudioPlayerContext);

  return (
    <div className="fixed   z-10 top-[50%] cel:top-0 right-0 mt-4 ">
      <button
        onClick={() => {
          setPlaying(!playing);
        }}
        className={`w-12 h-12 rounded-l-lg  flex justify-center items-center ${color}`}
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
