/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/*.{vue,js,ts,jsx,tsx}",
    "./components/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class",
};
