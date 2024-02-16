import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        cell: { max: "479px" },
        // => @media (max-width: 479px) { ... }
      },
      colors: {
        complentary: "#ffcf40",
        complementaryBright: "#fde68a",
        complementaryDark: "#a67c00",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
