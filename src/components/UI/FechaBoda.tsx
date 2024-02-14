import { lora } from "@/fonts";

const FechaBoda = ({
  day,
  numberDate,
  hour,
  mes,
  year,
}: {
  day: string;
  numberDate: number;
  hour: string;
  mes: string;
  year: number;
}) => {
  return (
    // <div className="flex flex-col items-center justify-center">
    //   <h3 className="text-white text-2xl">{mes}</h3>
    //   <h3 className={` text-white text-4xl`}>
    //     <span>{day}</span> <span>{numberDate}</span> <span>{hour} hrs</span>
    //   </h3>
    //   <h3 className="text-white text-2xl">{year}</h3>
    // </div>
    <div className="flex  items-center justify-center">
      <h3 className={` text-white text-4xl cell:text-2xl`}>{day}</h3>
      <div className=" flex flex-col items-center justify-center  p-2">
        <h3 className="text-white text-2xl">{mes}</h3>
        <h3 className="text-5xl py-2 border-x-2 border-x-white/85 px-4  font-semibold text-complentary">
          {numberDate}
        </h3>
        <h3 className="text-white text-2xl">{year}</h3>
      </div>
      <h3 className={` text-white text-4xl cell:text-2xl`}>{hour} hrs</h3>
    </div>
  );
};

export default FechaBoda;
