"use client";
import { DressCodeProps } from "../types";
import { motion } from "framer-motion";
import { sofia } from "@/fonts";
import Image from "next/image";

const DressCode = ({ dressCodeProps }: { dressCodeProps: DressCodeProps }) => {
  return (
    <section
      className={`${dressCodeProps.backGround} w-full  py-14   cell:pb-4`}
    >
      <motion.h2
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
        className={`
        ${dressCodeProps.title.font.className}
        ${dressCodeProps.title.textColor}
        font-bold  text-center text-5xl py-1 
        cell:text-3xl cell:px-4
      `}
      >
        Código de Vestimenta
      </motion.h2>
      <p
        className={`uppercase  text-center ${dressCodeProps.desc.color}  text-3xl font-semibold py-4 cell:text-xl`}
      >
        {dressCodeProps.desc.text}
      </p>
      {dressCodeProps.iconSection.show && (
        <div className="flex  flex-col items-center justify-center cell:w-full">
          <div className=" w-8/12 flex justify-center my-10  cell:h-auto  cell:flex-col cell:w-12/12 cell:gap-10">
            <div className="w-6/12 flex flex-col justify-center items-center cell:w-full">
              {" "}
              {dressCodeProps.iconSection.Mujeres.dressCodeImg && (
                <Image
                  alt="boda"
                  src={dressCodeProps.iconSection.Mujeres.dressCodeImg}
                  className="w-[50%]"
                />
              )}
              <p
                className={`font-bold text-4xl ${dressCodeProps.iconSection.Mujeres.textColor} cell:text-2xl`}
              >
                Mujeres
              </p>
              <p className="  text-4xl mb-4 cell:text-xl cell:mb-1">
                Vestido Largo
              </p>
              <p className="text-center text-4xl mb-4 cell:text-xl cell:mb-1">
                * Color lila esta reservado para las damas
              </p>
            </div>
            <div className="w-6/12 flex flex-col justify-center items-center cell:w-full">
              {" "}
              {dressCodeProps.iconSection.Hombres.dressCodeImg && (
                <Image
                  alt="boda"
                  src={dressCodeProps.iconSection.Hombres.dressCodeImg}
                  className="w-[35%]"
                />
              )}
              <p
                className={`font-bold text-4xl ${dressCodeProps.iconSection.Hombres.textColor} cell:text-2xl`}
              >
                Hombres
              </p>
              <p className="  text-4xl mb-4 cell:mb-1 cell:text-xl">Traje</p>
            </div>
          </div>
        </div>
      )}

      <div className="w-8/12 mx-auto flex items-center py-2 justify-center  cell:w-full cell:flex-col">
        <div className="flex   items-center justify-center cell:flex-col    cell:w-full">
          {/* <Image alt="no niños" src={noninos} /> */}
          <div>
            <p
              className={`${dressCodeProps.desc.color} ${sofia.className} w-8/12 mx-auto text-3xl text-center  cell:w-full cell:px-4 cell:text-2xl`}
            >
              Esperamos contar con tu presencia en nuestra boda y los niños les
              deseamos buenas noches en casa.{" "}
            </p>
            <p
              className={`${sofia.className} ${dressCodeProps.title.textColor} font-bold text-5xl cell:text-4xl text-center`}
            >
              No niños
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCode;
