import Image from "next/image";
import noninos from "../../../public/assets/images/noninos.webp";
import Dress from "/public/assets/images/Dress_icon.png";
import Suit from "/public/assets/images/suit_icon-removebg-preview.png";
import { greatVibes } from "@/fonts";
import AnimatedTitle from "../UI/AnimatedTitle";

const InfromacionAdicionalTemplate2 = () => {
  return (
    <section className="w-full pt-10 pb-20">
      <AnimatedTitle
        title="Código de vestimenta"
        extraStyles={`${greatVibes.className}  text-6xl `}
      />
      <p className=" uppercase  text-center text-slate-950  text-lg font-semibold py-4">
        LOS COLORES beige y blanco son exclusivos PARA LA NOVIA
      </p>
      <div className="flex  flex-col items-center justify-center cell:w-full">
        <div className=" w-8/12 flex justify-center my-10  h-[300px]  cell:flex-col cell:w-12/12 cell:gap-4">
          <div className="w-6/12 flex flex-col justify-center items-center cell:w-full">
            {" "}
            <p className=" font-bold text-2xl text-complementaryDark">
              Mujeres
            </p>
            <p className="  text-2xl mb-4">Vestido</p>
            <Image
              src={Dress}
              alt="invitaciones digitales"
              className="w-[50%]"
            />
          </div>
          <div className="w-6/12 flex flex-col justify-center items-center cell:w-full">
            {" "}
            <p className=" font-bold text-2xl text-complementaryDark">
              Hombres
            </p>
            <p className="  text-2xl mb-4">Traje</p>
            <Image
              src={Suit}
              alt="invitaciones digitales"
              className="w-[36%]"
            />
          </div>
        </div>
      </div>
      <div className="w-8/12 mx-auto flex items-center py-4 justify-center  cell:w-full cell:flex-col">
        <div className="flex  flex-col items-center justify-center  cell:w-full">
          <Image alt="no niños" src={noninos} />
          <p className="text-lg font-bold">No niños</p>
          <p className="text-lg text-center  cell:w-full cell:px-4">
            ¡Queremos que disfrutes junto con nosotros esa noche especial!
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfromacionAdicionalTemplate2;
