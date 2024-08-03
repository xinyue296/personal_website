import type { Config } from "tailwindcss";
// import { createThemes } from "tw-colors";
// import colors from "tailwindcss/colors";

// const baseColors = [
//   "stone",
//   "yellow"
// ];

// const shadeMapping = {
//   "50": "950",
//   "100": "900",
//   "200": "800",
//   "300": "700",
//   "400": "600",
//   "500": "500",
//   "600": "400",
//   "700": "300",
//   "800": "200",
//   "900": "100",
//   "950": "50"
// };

// const generateThemeObject = (colors: any, mapping: any, invert = false) => {
//   const theme: any = {};
//   baseColors.forEach((color) => {
//     theme[color] = {};
//     Object.entries(mapping).forEach(([key, value]: any) => {
//       const shadeKey = invert ? value : key;
//       theme[color][key] = colors[color][shadeKey];
//     });
//   });
//   return theme;
// }

// const lightTheme = generateThemeObject(colors, shadeMapping);
// const darkTheme = generateThemeObject(colors, shadeMapping, true);

// const themes = {
//   light : {
//     ...lightTheme
//   },
//   dark : {
//     ...darkTheme
//   }
// }

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "poppins": ["Poppins", "sans-serif"]
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: []
  // plugins: [createThemes(themes)],
};
export default config;
