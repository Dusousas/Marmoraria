import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Oswald: ['Oswald', 'sans-serif'],
        Releway: ['Releway', 'sans-serif'],

      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        GrayP:"#222222",
        GrayS: "#505050",
        OrangeP: "#F94A29",
        GrayPP: "#989898"
      },
    },
  },
  plugins: [],
};
export default config;
