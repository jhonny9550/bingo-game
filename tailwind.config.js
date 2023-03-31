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
          50: "#f3f5fc",
          100: "#e7ecf7",
          200: "#c9d5ee",
          300: "#9ab2df",
          400: "#5880c8",
          500: "#406ab7",
          600: "#2f529a",
          700: "#27417d",
          800: "#243968",
          900: "#223258",
        },
        secondary: {
          50: "#eefbfd",
          100: "#d4f3f9",
          200: "#afe7f2",
          300: "#78d4e8",
          400: "#3ab8d6",
          500: "#1e9bbc",
          600: "#1d82a5",
          700: "#1d6581",
          800: "#20536a",
          900: "#1f465a",
        },
        warning: {
          50: "#f9faec",
          100: "#f0f4cd",
          200: "#e8eb9d",
          300: "#dfdf65",
          400: "#d5d03f",
          500: "#c5b92d",
          600: "#a99425",
          700: "#886e20",
          800: "#715922",
          900: "#614b22",
        },
        danger: {
          50: "#fef2f2",
          100: "#fee3e2",
          200: "#ffcac9",
          300: "#fda6a4",
          400: "#fa726f",
          500: "#f24541",
          600: "#df2823",
          700: "#c01e1a",
          800: "#9b1c19",
          900: "#811d1b",
        },
      },
    },
  },
  plugins: [],
};
