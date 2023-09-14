// /** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "col-gray": "#1F2533",
        "col-white": "#F5F5F5",
        "col-pink": "#F84464",
        "col-bgnav": "#333545",
      },
    },
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [require("daisyui")],
};
