import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGrayishBlue: "hsl(var(--Very-Dark-Grayish-Blue)/<alpha-value>)",
        desaturatedDarkBlue: "hsl(var(--Desaturated-Dark-Blue/<alpha-value>)",
        grayishBlue: "hsl(var(--Grayish-Blue)/<alpha-value>)",
        lightGrayishBlue: "hsl(var(--Light-Grayish-Blue)/<alpha-value>)",
      },
    },
  },
  plugins: [],
};
export default config;
