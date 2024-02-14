import { dancing } from "@/fonts";

const NoviosName = ({ novio1, novio2 }: { novio1: string; novio2: string }) => {
  return (
    <h2
      className={`${dancing.className} text-8xl text-white my-2  font-light cell:text-7xl `}
    >
      {novio1} y <br /> {novio2}
    </h2>
  );
};

export default NoviosName;
