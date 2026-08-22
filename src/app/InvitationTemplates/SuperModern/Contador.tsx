"use client";

import { useEffect, useMemo, useState } from "react";
import { lora, paris } from "@/fonts";

const Contador = ({ fechaEvento, fechaString, textureImageUrl }: { fechaEvento: string | Date; fechaString: string; textureImageUrl?: string }) => {
  const target = useMemo(() => new Date(fechaEvento).getTime(), [fechaEvento]);
  const [remaining, setRemaining] = useState(() => Math.max(0, target - Date.now()));
  useEffect(() => { const timer = window.setInterval(() => setRemaining(Math.max(0, target - Date.now())), 1000); return () => window.clearInterval(timer); }, [target]);
  const seconds = Math.floor(remaining / 1000);
  const values = [[Math.floor(seconds / 86400), "días"], [Math.floor((seconds % 86400) / 3600), "horas"], [Math.floor((seconds % 3600) / 60), "minutos"], [seconds % 60, "segundos"]] as const;
  return <div className="w-full max-w-sm rounded-xl bg-[#6b705c]/80 bg-cover bg-center bg-blend-multiply text-white shadow-xl" style={textureImageUrl ? { backgroundImage: `url(${textureImageUrl})` } : undefined}>
    <div className="px-4 pt-4 text-center"><p className={`${paris.className} text-4xl font-bold`}>¡Prepárate!</p><p className={`${lora.className} text-xs uppercase`}>Nos vemos el {fechaString}</p></div>
    <div className="flex justify-center gap-2 px-3 pb-4 pt-3 sm:gap-4">{values.map(([number, label]) => <div key={label} className="text-center"><p className="text-3xl sm:text-5xl">{String(Math.max(0, number)).padStart(2, "0")}</p><p className="text-[10px] uppercase sm:text-sm">{label}</p></div>)}</div>
  </div>;
};

export default Contador;
