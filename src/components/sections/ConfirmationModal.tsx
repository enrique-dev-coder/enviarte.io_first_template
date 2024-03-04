import React from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import { motion } from "framer-motion";
import { dancing } from "@/fonts";
const ConfirmationModal = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className=" fixed w-full  h-screen bg-black/70 z-50 top-0 bottom-0 left-0 right-0 flex justify-center items-center"
    >
      <h2
        className={`${dancing.className} text-center   text-white text-8xl w-1/2`}
      >
        Gracias por confirmar tu asistencia!
      </h2>
      <DotLottiePlayer
        src="https://lottie.host/dbbaece5-0c28-4263-aca3-4d3beeb4edb5/5veN07gUqt.json"
        background="transparent"
        style={{ width: "100%", height: "100%", position: "absolute" }}
        loop
        autoplay
      />
    </motion.div>
  );
};

export default ConfirmationModal;
