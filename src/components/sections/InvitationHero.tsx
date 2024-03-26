"use client";
import NoviosName from "../UI/NoviosName";
import NoviosIniciales from "../UI/NoviosIniciales";
import FechaBoda from "../UI/FechaBoda";
import { motion } from "framer-motion";
import { useContext } from "react";
import { StartAnimation } from "@/contexts/AnimationContext";

const InvitationHero = () => {
  const { controls } = useContext(StartAnimation);

  return (
    <div
      style={{
        backgroundImage: "url(../../../assets/images/hero.jpeg)",
      }}
      className="
       w-full h-screen
      bg-center bg-no-repeat bg-cover bg-stone-300 bg-blend-multiply
       flex flex-col items-center justify-center    
      "
    >
      {/*informacion de la boda*/}
      <div className="flex flex-col  items-center  justify-between h-full pt-6 pb-10">
        <div className="flex flex-col justify-center items-center">
          <NoviosIniciales novio1="D" novio2="JP" />
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={controls}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-white  my-2  text-2xl cell:text-base cell:text-center cell:px-4"
          >
            Tenemos el honor de invitarte a celebrar Nuestra Boda
          </motion.p>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center">
          <NoviosName novio1="Daniela" novio2="José Pablo" />
          <FechaBoda
            day="Sábado"
            numberDate={18}
            hour="20:30"
            year={2024}
            mes="Mayo"
          />
        </div>
      </div>
    </div>
  );
};

export default InvitationHero;
