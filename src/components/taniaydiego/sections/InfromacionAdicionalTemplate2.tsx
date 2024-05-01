import Image from "next/image";
import noninos from "/public/assets/images/noninos.webp";
import DressCode from "/public/assets/images/Taniaydiego/dresscode-removebg-preview.png";
import Suit from "/public/assets/images/suit_icon-removebg-preview.png";
import { lora } from "@/fonts";
import AnimatedTitle from "../UI/AnimatedTitle";

const InfromacionAdicionalTemplate2 = () => {
  return (
    <section className="w-full pt-10 pb-4 cell:pb-4">
      <AnimatedTitle
        title="Código de vestimenta"
        extraStyles={`${lora.className} font-medium`}
      />
      <p className=" uppercase  text-center text-slate-950  text-lg font-semibold py-4 cell:text-base">
        LOS COLORES beige y blanco son exclusivos PARA LA NOVIA
      </p>
      <div className="flex  flex-col items-center justify-center cell:w-full">
        <div className=" w-8/12 flex justify-center my-10  cell:h-auto  cell:flex-col cell:w-12/12 cell:gap-4">
          <div className="w-6/12 flex flex-col justify-center items-center cell:w-full">
            {" "}
            <p className=" font-bold text-4xl text-complementaryDark cell:text-2xl">
              Mujeres
            </p>
            <p className="  text-4xl mb-4 cell:text-xl cell:mb-1">Vestido</p>
          </div>
          <div className="w-6/12 flex flex-col justify-center items-center cell:w-full">
            {" "}
            <p className=" font-bold text-4xl text-complementaryDark cell:text-2xl">
              Hombres
            </p>
            <p className="  text-4xl mb-4 cell:mb-1 cell:text-xl">Traje</p>
          </div>
        </div>
        <div>
          <Image
            src={DressCode}
            className="w-[80%] mx-auto cell:w-[80%]"
            alt="eventos digitales"
          />
        </div>
      </div>
      <div className="w-8/12 mx-auto flex items-center py-2 justify-center  cell:w-full cell:flex-col">
        <div className="flex   items-center justify-center cell:flex-col    cell:w-full">
          <Image alt="no niños" src={noninos} />
          <div>
            <p className=" font-bold text-4xl text-complementaryDark  cell:text-xl cell: text-center">
              No niños
            </p>
            <p className="text-3xl text-center  cell:w-full cell:px-4 cell:text-lg">
              ¡Queremos que disfrutes junto con nosotros esa noche especial!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfromacionAdicionalTemplate2;
