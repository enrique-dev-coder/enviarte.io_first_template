"use client";
import NoviosName from "../../UI/NoviosName";
import NoviosIniciales from "../../UI/NoviosIniciales";
import FechaBoda from "../../UI/FechaBoda";
import { motion } from "framer-motion";
import { useContext } from "react";
import { StartAnimation } from "@/contexts/AnimationContext";
import { bavaria, dancing, lora } from "@/fonts";

const InvitationHero1 = () => {
  const { controls } = useContext(StartAnimation);

  return (
    <div
      className="
      bg-[url('/assets/images/Taniaydiego/herotaniaydiego.jpg')]
      cell:bg-[url('/assets/images/Taniaydiego/herocell_tania.jpg')]
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
          <motion.h2
            initial={{ opacity: 0, y: 5 }}
            animate={controls}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
            className={`${bavaria.className} text-8xl text-white my-2  font-light cell:text-4xl `}
          >
            Tania{""}
            <span
              className={`${lora.className} text-complentary  text-[124px] cell:text-[60px]`}
            >
              &
            </span>
            {""}
            Diego
          </motion.h2>
          <FechaBoda
            day="Sábado"
            numberDate={18}
            hour="18:00"
            year={2024}
            mes="Mayo"
          />
        </div>
      </div>
    </div>
  );
};

export default InvitationHero1;
