"use client";
import { useEffect, useState } from "react";
import { Volume2Icon, VolumeXIcon } from "lucide-react";
const SpotifyPlayer = () => {
  const [controller, setController] = useState(undefined);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    window.onSpotifyIframeApiReady = (IFrameAPI) => {
      let element = document.getElementById("embed-iframe");
      let options = {
        uri: "spotify:track:6bUAaVkmBr9xrsWkeTLu03",
        width: "0%",
        height: "0px",
      };
      let callback = (EmbedController) => {
        setController(EmbedController);
      };
      IFrameAPI.createController(element, options, callback);
    };
  }, [controller]);

  return (
    <>
      <div>
        <div id="embed-iframe"></div>
      </div>
      <div className="fixed top-[50%] cel:top-0 right-0 mt-4 ">
        <button
          onClick={() => {
            controller?.togglePlay();
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
    </>
  );
};

export default SpotifyPlayer;
