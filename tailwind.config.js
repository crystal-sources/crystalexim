/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        golden: "#CAA960",
        // brown: "#483C32",
        brown: "#2F312F",
        brown1: "#8D7643",
        lightbrown: "#373938",
        cornsilk: "#EBE3D2",
        ebony: "#414833",
        espresso: "#482E1D",
        dun: "#CCBFA3",
        saga: "#A4AC86",
        gren: "#15cc96",
        grenbox: "#04664b",
      },
    },
  },
  plugins: [],
};
