import React from "react";
import { inter } from "@/fonts";
const Button = ({ text }: { text: string }) => {
  return (
    <button
      className={`${inter.className} bg-slate-950 my-1 px-4 py-2  text-white rounded-full`}
    >
      {text}
    </button>
  );
};

export default Button;
