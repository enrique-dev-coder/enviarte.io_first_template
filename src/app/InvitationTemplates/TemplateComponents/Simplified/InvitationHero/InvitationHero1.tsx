"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { StartAnimation } from "@/contexts/AnimationContext";
import { bavaria, dancing, lora } from "@/fonts";

const InvitationHero1 = () => {
  const { controls } = useContext(StartAnimation);

  return (
    <div
      className="
      bg-[url('/assets/images/Gabrielayraul/GyR_10.jpeg')]
      cell:bg-[url('/assets/images/Gabrielayraul/GyR_10.jpeg')]
       w-full h-screen
      bg-center bg-no-repeat bg-cover bg-stone-500 bg-blend-multiply
       flex flex-col items-center justify-center    
      "
    >
      {/*informacion de la boda*/}
      <div className="flex flex-col  items-center  justify-between h-full pt-6 pb-10">
        <div className="flex flex-col justify-center items-center">
          <>
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={controls}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-white  my-2  text-2xl cell:text-base cell:text-center cell:px-4"
            >
              Tenemos el honor de invitarte a celebrar Nuestra Boda
            </motion.p>
          </>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={controls}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
            className={`${bavaria.className} text-6xl text-white my-2 text-center  font-light cell:text-5xl `}
          >
            Gabriela{""}
            <div
              className={`${lora.className} text-complentary text-center  text-[100px] cell:text-[60px]`}
            >
              &
            </div>
            <div>Raul</div>
          </motion.div>
          {/* <FechaBoda
            day="Sábado"
            numberDate={18}
            hour="18:00"
            year={2024}
            mes="Mayo"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default InvitationHero1;
