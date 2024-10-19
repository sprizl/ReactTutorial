/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "san-serif"],
        neue: ["Comic Neue", "cursive"],
        roberto: ["Roboto Mono", "monospace"],
      },
      colors: {
        newpurple: {
          200: "#BB86FC",
          400: "#3700B3",
          700: "#332940",
          800: "#1F1A24",
          900: "#1F1B24",
        },
        newTeal: {
          200: "#03DAC5",
          400: "#018786",
        },
        newBlue: {
          700: "#0336FF",
        },
        newPink: {
          200: "#FF7597",
          500: "#FF0266",
          600: "#B00020",
          700: "#CF6679",
        },
        newYellow: {
          500: "#FFDE03",
        },
      },
    },
  },
  plugins: [],
};
