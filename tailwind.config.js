/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        red: "#FC6060",
        blue: "#4E8AFF",
        purple: {
          100: "#F5EDFD",
          200: "#BD8AEF",
          300: "#8F3AE4",
          400: "#701BC5",
          500: "#541494",
          600: "#2C0C54",
          700: "#1C0834",
        },
        contrast: {
          100: "#ffffff",
          200: "#D7D7D7",
          300: "#949494",
          400: "#656565",
          500: "#505050",
          600: "#323232",
          700: "#1F1F1F",
          800: "#000000",
        },
      },
      boxShadow: {
        sm: "0 4px 4px 0 rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
