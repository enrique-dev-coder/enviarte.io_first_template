import { colorPalette } from "@/types";

interface ThemeColor {
  [key: string]: {
    textDark: string;
    text: string;
    backgroundDark: string;
  };
}
export const themeColor: ThemeColor = {
  blackPalette: {
    textDark: "text-black",
    text: "text-white",
    backgroundDark: "bg-black",
  },
};
