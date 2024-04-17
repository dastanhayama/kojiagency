/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D1F21",
        darkGray: "#909090",
        lightGray: "#F8F8F8",
        darklightGray: "#e7e7e7",
        accent: "#0000E0",
      },
    },
  },
  plugins: [],
};
