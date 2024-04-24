"use client";
import React from "react";
import Image from "next/image";
import FloralDivider from "/public/assets/images/floral/white_floral_divider-removebg-preview.png";
import Flowers from "/public/assets/images/floral/white_flower_1-removebg-preview.png";
import { greatVibes } from "@/fonts";
import { motion } from "framer-motion";

const PadresVersion2 = () => {
  return (
    <div className=" flex flex-col pt-10 pb-4 items-center justify-center cell:h-auto">
      <Image
        src={Flowers}
        alt="invitaciones para eventos"
        className="absolute w-[280px] top-[-80px] z-0"
      />
      <motion.h2
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
        className={`${greatVibes.className}   
      text-white font-bold  text-center text-5xl mt-8 py-2 
      cell:text-3xl cell:px-4`}
      >
        Con la bendición de <br /> nuestra familia
      </motion.h2>
      <div className="flex flex-col justify-evenly py-4 gap-4 mx-auto cell:w-full cell:px-4 cell:flex-col cell:items-center ">
        <div className="flex flex-col gap-1 text-3xl cell:text-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            NOVIA
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            viewport={{ once: true }}
          >
            Sergio Vázquez
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            viewport={{ once: true }}
          >
            Marissa Gaytan
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
        >
          <Image
            src={FloralDivider}
            width={200}
            alt="invitaciones digitales"
            className="mx-auto"
          />
        </motion.div>

        <div className="flex flex-col gap-1 text-3xl cell:text-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            NOVIO
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            viewport={{ once: true }}
          >
            José Herrera
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            viewport={{ once: true }}
          >
            Laura Cepeda
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default PadresVersion2;
