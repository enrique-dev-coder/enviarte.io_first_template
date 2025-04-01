import {
  Inter,
  Dancing_Script,
  Lora,
  Playfair_Display,
  Courgette,
  Great_Vibes,
  Sofia,
  Allura,
  Montserrat,
  Parisienne,
} from "next/font/google";
import localFont from "next/font/local";
export const bavaria = localFont({
  src: "../../public/customFonts/BavariaGates.otf",
});

export const adorage = localFont({
  src: "../../public/customFonts/Adorage.ttf",
});
export const analogist = localFont({
  src: "../../public/customFonts/Analogist-Regular.ttf",
});
export const brilliant = localFont({
  src: "../../public/customFonts/BrilliantSoulmateRegular.ttf",
});
export const cambria = localFont({
  src: "../../public/customFonts/Cambria.ttf",
});

export const champagne = localFont({
  src: "../../public/customFonts/Champagne&Limousines.ttf",
});

export const inter = Inter({ subsets: ["latin"] });
export const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"] });
export const dancing = Dancing_Script({ subsets: ["latin"] });
export const lora = Lora({ subsets: ["latin"] });
export const play = Playfair_Display({ subsets: ["latin"] });
export const courgette = Courgette({ weight: "400", subsets: ["latin"] });
export const sofia = Sofia({ weight: "400", subsets: ["latin"] });
export const allura = Allura({ weight: "400", subsets: ["latin"] });
export const montse = Montserrat({ subsets: ["latin"] });
export const paris = Parisienne({ weight: "400", subsets: ["latin"] });
