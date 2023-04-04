const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        sans: ["Inter var, sans-serif"],
      },
      colors: {
        theme: {
          light: "#f2f2e6",
          dark: "#07020a",
        },
        primary: {
          light: "#A680FF",
          DEFAULT: "#4C00FF",
        },
        success: {
          light: "rgb(var(--color-success) / 0.5)",
          DEFAULT: "rgb(var(--color-success) / 1)",
        },
        warning: {
          light: "rgb(var(--color-warning) / 0.5)",
          DEFAULT: "rgb(var(--color-warning) / 1)",
        },
        danger: {
          light: "rgb(var(--color-danger) / 0.5)",
          DEFAULT: "rgb(var(--color-danger) / 1)",
        },
        gray: {
          lighter: "#F9F9F9",
          light: "#E0E0E0",
          DEFAULT: "#AEAEAE",
          dark: "#636363",
        },
        black: colors.black,
        white: colors.white,
      },
    },
  },
  plugins: [],
};
