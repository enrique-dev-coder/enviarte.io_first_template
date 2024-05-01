"use client";

import { motion } from "framer-motion";

const Versiculos = ({ frase, autor }: { frase: string; autor: string }) => {
  return (
    <div
      className=" text-center text-4xl font-light my-10 h-[250px] flex flex-col justify-center items-center
    cell:h-auto cell:text-3xl cell:my-5
    "
    >
      <motion.q
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        viewport={{ once: true }}
        className="px-8"
      >
        {frase}
      </motion.q>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="my-4"
      >
        {autor}
      </motion.p>
    </div>
  );
};

export default Versiculos;
