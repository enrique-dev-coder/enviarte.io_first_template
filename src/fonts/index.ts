import {
  Inter,
  Dancing_Script,
  Lora,
  Playfair_Display,
  Great_Vibes,
} from "next/font/google";
import localFont from "next/font/local";
export const bavaria = localFont({
  src: "../../public/customFonts/BavariaGates.otf",
});
export const inter = Inter({ subsets: ["latin"] });
export const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"] });
export const dancing = Dancing_Script({ subsets: ["latin"] });
export const lora = Lora({ subsets: ["latin"] });
export const play = Playfair_Display({ subsets: ["latin"] });
