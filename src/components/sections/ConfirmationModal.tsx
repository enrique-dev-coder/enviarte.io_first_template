import React from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import { motion } from "framer-motion";
import { dancing } from "@/fonts";
const ConfirmationModal = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className=" fixed  w-full  h-screen bg-black/70 z-50 top-0 bottom-0 left-0 right-0 flex justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center gap-4 z-50">
        <h2
          className={`${dancing.className} text-center   text-white text-8xl`}
        >
          Gracias por confirmar tu asistencia!
        </h2>
        <div>
          <button
            onClick={closeModal}
            className=" text-white text-3xl rounded-lg px-3 py-1 bg-complementaryDark"
          >
            Regresar
          </button>
        </div>
      </div>
      <DotLottiePlayer
        src="https://lottie.host/dbbaece5-0c28-4263-aca3-4d3beeb4edb5/5veN07gUqt.json"
        background="transparent"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: 0,
        }}
        loop
        autoplay
      />
    </motion.div>
  );
};

export default ConfirmationModal;
