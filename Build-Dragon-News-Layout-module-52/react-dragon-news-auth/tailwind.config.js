import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', serif",
      },
      colors: {
        customGray: "#F3F3F3",
      },
    },
  },
  plugins: [daisyui],
};
