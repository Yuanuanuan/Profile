import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#f0f0f0",
        primary: "#e9b588",
      },
      screens: {
        xs: "480px",
        lg: "1180px",
        "700": "700px",
        "300": "300px",
      },
    },
  },
  plugins: [],
};
export default config;
