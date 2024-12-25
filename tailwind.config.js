/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Lato: ["Lato", "sans-serif"],
      },
      colors: {
        secondary: {
          100: "#0454e7",
          200: "#0749c3",
          300: "#0741ad",
          400: "#053896",
          500: "#042e7c",
          600: "#032058",
        },
      },
    },
  },
  plugins: [],
}
