import { lora } from "@/fonts";

const NoviosIniciales = ({
  novio1,
  novio2,
}: {
  novio1: string;
  novio2: string;
}) => {
  return (
    <h2 className=" text-complentary text-7xl tracking-widest  my-1 ">
      <span className={`${lora.className} border-r-2 px-2 border-complentary`}>
        {novio1}
      </span>
      <span className={`${lora.className} px-2`}>{novio2}</span>
    </h2>
  );
};

export default NoviosIniciales;
