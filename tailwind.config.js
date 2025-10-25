/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      container: { 
        center: true, 
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
          xl: "2.5rem",
          "2xl": "3rem"
        }
      },
      colors: {
        brand: {
          DEFAULT: "#ff2e63",
          50: "#fff0f4",
          100: "#ffe1e9",
          200: "#ffb8cb",
          300: "#ff8eac",
          400: "#ff6490",
          500: "#ff2e63",
          600: "#d4214e",
          700: "#a9163b",
          800: "#7e0c29",
          900: "#530515"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.12)"
      },
      backgroundImage: {
        "grid": "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
