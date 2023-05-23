/** @type {import('tailwindcss').Config} */
// const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Cinzel", ...defaultTheme.fontFamily.sans],
        cinzel: "Cinzel",
      },
      colors: {
        "dark-01": "#151515",
        "dark-02": "#444444",
        "dark-03": "#737373",
        "dark-04": "#A1A1A1",
        "dark-05": "#D0D0D0",
        "dark-06": "#E8E8E8",
        "dark-07": "#F3F3F3",
        "boss-yellow": "#EEFF25",
        "boss-blue": "#007AFF",
        "boss-title": "#D99904",
        "boss-btn-color": "#1F2937",
        "boss-rating": "#CD9003",
        "boss-footer": "#111827",
      },
    },
  },
  plugins: [require("daisyui")],
};
