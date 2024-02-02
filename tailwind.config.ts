import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "home-zzzzzz": "1320px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "in-and-out": {
          "0%, 100%": {
            "transform": "scale(1)",
          },
          "50%": {
            "transform": "scale(1.4)",
          }
        }
      },
      animation: {
        "in-and-out": "in-and-out 2s ease-in-out infinite"
      }
    },
  },
  plugins: [],
};

