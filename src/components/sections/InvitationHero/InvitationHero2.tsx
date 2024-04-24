"use client";
import NoviosName2 from "@/components/UI/NoviosName2";
import Image from "next/image";
import { motion } from "framer-motion";
import { useContext } from "react";
import { StartAnimation } from "@/contexts/AnimationContext";
import WeedingRing from "/public/assets/images/wedding-ring-1.webp";
import LogoBoda from "/public/assets/images/floral/logo_boda.png";
import Divider from "/public/assets/images/floral/white_floral_divider_short.png";

const InvitationHero2 = () => {
  const { controls } = useContext(StartAnimation);

  return (
    <div
      style={{
        backgroundImage: "url(../../../assets/images/hero.jpeg)",
      }}
      className="
       w-full h-screen
      bg-center bg-no-repeat bg-cover bg-stone-500 bg-blend-multiply
       flex flex-col items-center justify-center    
      "
    >
      {/*informacion de la boda*/}
      <div className="flex flex-col  items-center  justify-between h-full pt-6 pb-10">
        <div className="flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={controls}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-white  my-1  text-2xl cell:text-base cell:text-center cell:px-4"
          >
            <Image
              src={LogoBoda}
              alt="invitaciones para bodas"
              className="w-[120px]"
            />
          </motion.div>
          <></>
        </div>
        <div className="flex-1 flex flex-col  justify-end  items-center">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={controls}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Image src={WeedingRing} alt="weeding" className=" w-20" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={controls}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className=" text-white uppercase font-bold text-2xl"
          >
            Nos casamos
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={controls}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Image src={Divider} alt="weeding" className=" w-[200px] my-4" />
          </motion.div>
          <NoviosName2 novio1="Edna" novio2="Abraham" />
        </div>
      </div>
    </div>
  );
};

export default InvitationHero2;
