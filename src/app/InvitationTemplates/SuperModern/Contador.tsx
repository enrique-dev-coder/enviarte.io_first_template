"use client";

import { useEffect, useMemo, useState } from "react";
import { lora, paris } from "@/fonts";
import { withOpacity } from "./color";

const Contador = ({
  fechaEvento,
  fechaString,
  textureImageUrl,
  mainColor,
  optionalTitle,
  optionalDatePrefix,
  optionalDaysLabel,
  optionalHoursLabel,
  optionalMinutesLabel,
  optionalSecondsLabel,
  titleColorSecondary,
  textColorSecondary,
}: {
  fechaEvento: string | Date;
  fechaString: string;
  textureImageUrl?: string;
  mainColor: string;
  optionalTitle?: string;
  optionalDatePrefix?: string;
  optionalDaysLabel?: string;
  optionalHoursLabel?: string;
  optionalMinutesLabel?: string;
  optionalSecondsLabel?: string;
  titleColorSecondary?: string;
  textColorSecondary?: string;
}) => {
  const target = useMemo(() => new Date(fechaEvento).getTime(), [fechaEvento]);
  const [remaining, setRemaining] = useState(() =>
    Math.max(0, target - Date.now()),
  );
  useEffect(() => {
    const timer = window.setInterval(
      () => setRemaining(Math.max(0, target - Date.now())),
      1000,
    );
    return () => window.clearInterval(timer);
  }, [target]);
  const seconds = Math.floor(remaining / 1000);
  const values = [
    [Math.floor(seconds / 86400), optionalDaysLabel ?? "días"],
    [Math.floor((seconds % 86400) / 3600), optionalHoursLabel ?? "horas"],
    [Math.floor((seconds % 3600) / 60), optionalMinutesLabel ?? "minutos"],
    [seconds % 60, optionalSecondsLabel ?? "segundos"],
  ] as const;
  return (
    <div
      className="w-full max-w-sm rounded-xl bg-cover bg-center bg-blend-multiply text-white shadow-xl"
      style={{
        backgroundColor: withOpacity(mainColor, 80),
        backgroundImage: textureImageUrl ? `url(${textureImageUrl})` : undefined,
      }}
    >
      <div className="px-4 pt-4 text-center">
        <p style={titleColorSecondary ? { color: titleColorSecondary } : undefined} className={`${paris.className} text-4xl font-bold`}>{optionalTitle ?? "¡Prepárate!"}</p>
        <p style={textColorSecondary ? { color: textColorSecondary } : undefined} className={`${lora.className} text-xs uppercase`}>
          {optionalDatePrefix ?? "Nos vemos el"} {fechaString}
        </p>
      </div>
      <div className="flex justify-center gap-2 px-3 pb-4 pt-3 sm:gap-4">
        {values.map(([number, label]) => (
          <div style={textColorSecondary ? { color: textColorSecondary } : undefined} key={label} className="text-center">
            <p className="text-3xl sm:text-5xl">
              {String(Math.max(0, number)).padStart(2, "0")}
            </p>
            <p className="text-[10px] uppercase sm:text-sm">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contador;
