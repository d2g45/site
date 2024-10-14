import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      fontFamily: {
        "fira-code": ["var(--font-fira-code)"],
        mono: ["var(--font-fira-code)"],
      },

      screens: {
        sm: "375px",
        md: "768px",
        lg: "1024px",
        xl: "1366px",
        "2xl": "1440px",
        "3xl": "1600px",
        "4xl": "1920px",
        huge: "1920px",
        "5xl": "2560px",
        tremendous: "2560px",
        "6xl": "3840px",
        gargantuan: "3840px",
        print: { raw: "print" },
      },
    },
  },
};
export default config;
