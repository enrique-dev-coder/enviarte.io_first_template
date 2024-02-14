const Versiculos = ({ frase, autor }: { frase: string; autor: string }) => {
  return (
    <div
      className=" text-center text-4xl font-light my-10 h-[250px] flex flex-col justify-center items-center
    cell:h-auto cell:text-3xl cell:my-5
    "
    >
      <q className="px-8">{frase}</q>
      <p className="my-4">{autor}</p>
    </div>
  );
};

export default Versiculos;
