import React from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import { motion } from "framer-motion";
import { dancing } from "@/fonts";
const ConfirmationModal = ({
  closeModal,
  pasesConfirmados,
}: {
  closeModal: () => void;
  pasesConfirmados: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className=" fixed  w-full  h-screen bg-black/70 z-50 top-0 bottom-0 left-0 right-0 flex justify-center items-center"
    >
      {pasesConfirmados !== 0 ? (
        <>
          <div className="flex flex-col justify-center items-center gap-4 z-50">
            <h2
              className={`${dancing.className} text-center   text-white text-8xl cell:text-5xl cell:px-2`}
            >
              Gracias por confirmar tu asistencia!
            </h2>
            <div>
              <button
                onClick={closeModal}
                className=" text-white text-3xl rounded-lg px-3 py-1 bg-complementaryDark cell:text-xl"
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
        </>
      ) : (
        <div
          className="flex bg-white flex-col justify-center items-center gap-4 z-50 w-6/12 rounded-lg p-4
        cell:w-10/12 cell:p-2 
        "
        >
          <h2 className={` text-center   text-3xl cell:text-lg`}>
            Lamentamos que no puedas acompañarnos, porfavor contáctanos si
            cambias de opinión.
          </h2>
          <div>
            <button
              onClick={closeModal}
              className=" text-white  text-2xl rounded-lg px-3 py-1 bg-black cell:text-lg"
            >
              Regresar
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ConfirmationModal;
