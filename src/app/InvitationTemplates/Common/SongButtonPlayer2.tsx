"use client";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Volume2Icon, VolumeXIcon } from "lucide-react";
import { AudioPlayerContext } from "@/contexts/AudioContext";

const SongButtonPlayer = ({ backgroundColor }: { backgroundColor: string }) => {
  const { playing, setPlaying } = useContext(AudioPlayerContext);

  return (
    <div className="fixed top-6 left-6 z-50">
      <div className="fixed top-6 left-6 z-50 group">
        <div className="relative flex items-center justify-center">
          {/* 💬 Tooltip */}

          {/* 🎵 Botón */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setPlaying(!playing)}
            className={`w-12 h-12 rounded-full flex items-center justify-center 
          shadow-lg border-4 border-white ${backgroundColor}`}
          >
            {!playing ? (
              <Volume2Icon fill="#fff" className="w-6 h-6 text-white" />
            ) : (
              <VolumeXIcon fill="#fff" className="w-6 h-6 text-white" />
            )}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default SongButtonPlayer;
