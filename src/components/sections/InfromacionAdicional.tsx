import Image from "next/image";
import noninos from "../../../public/assets/images/noninos.webp";
import dresscode from "../../../public/assets/images/dresscode.webp";
import hat from "../../../public/assets/images/hat.png";
const InfromacionAdicional = () => {
  return (
    <section className="w-full bg-[#f8f4f1]">
      <div className="w-8/12 mx-auto flex items-center py-4 justify-center  cell:w-full cell:flex-col">
        <div className="flex  flex-col items-center justify-center  cell:w-full">
          <Image alt="no niños" src={noninos} />
          <p className="text-lg font-bold">No niños</p>
          <p className="text-lg text-center  cell:w-full cell:px-4">
            ¡Queremos que disfrutes junto con nosotros esa noche especial!
          </p>
        </div>
      </div>
      <div className="flex  flex-col items-center justify-center  cell:w-full">
        <Image alt="dresscode" src={dresscode} />
        <p className="text-2xl font-bold">Dress Code Etiqueta</p>
        <div className=" w-8/12 flex justify-center my-10 cell:flex-col cell:w-12/12 cell:gap-4">
          <div className="w-6/12 flex flex-col justify-center items-center cell:w-full">
            {" "}
            <p className=" font-bold text-2xl">Mujeres</p>
            <p className=" font-bold text-2xl">Vestido largo de noche</p>
          </div>
          <div className="w-6/12 flex flex-col justify-center items-center cell:w-full">
            {" "}
            <p className=" font-bold text-2xl">Hombres</p>
            <p className=" font-bold text-2xl">Traje</p>
          </div>
        </div>
      </div>
      <div className="flex  flex-col items-center justify-center  cell:w-full">
        <p className="text-3xl font-bold  text-red-600 mb-4">No Usar </p>
        <div className=" w-full flex justify-center">
          <div className=" flex flex-col gap-4  justify-center items-center">
            {" "}
            <div className="flex w-full gap-2 items-center cell:flex-col">
              <div className="flex">
                <div className=" w-[60px] h-[60px] rounded-full  bg-amber-100 border border-black"></div>
                <div className=" w-[60px] h-[60px] rounded-full -ml-4 bg-white border border-black"></div>
              </div>

              <p className="  font-medium text-lg">
                Vestidos en tono blanco / similar
              </p>
            </div>
            <div className="flex w-full gap-2 items-center cell:flex-col">
              <div className=" w-[60px] h-[60px] rounded-full  bg-blue-400 border border-black"></div>
              <p className="  font-medium text-lg">Mezclilla</p>
            </div>
            <div className="flex w-full gap-2 items-center justify-center cell:flex-col">
              <p className="  font-medium text-xl text-center">
                Sombrero - Botas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfromacionAdicional;
