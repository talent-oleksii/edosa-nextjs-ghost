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
        "main-person": "url('/assets/images/home.png')"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "def-color": "#F3F8FE",
        "text-color": "#475467",
        "l-main-color": "#5c76ff",
        "l-demo-color": "#f3f8fe",
        "r-main-color": "#f15f31",
        "r-demo-color": "#FFF7F4",
        "m-main-color": "#95da79",
        "m-demo-color": "#f2faec",
        "w-main-color": "#7f56d9",
        "w-demo-color": "#F7F6FF"
      }
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
