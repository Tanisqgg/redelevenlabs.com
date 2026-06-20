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
          DEFAULT: "1.25rem",
          sm: "1.5rem",
          lg: "2rem",
          xl: "2.5rem",
          "2xl": "3rem"
        },
        screens: {
          "2xl": "1280px"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      opacity: {
        2: "0.02",
        3: "0.03",
        4: "0.04",
        6: "0.06",
        8: "0.08",
        12: "0.12",
        15: "0.15"
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
        },
        // Electric iris — the "agent / intelligence" accent
        iris: {
          DEFAULT: "#7c5cff",
          300: "#a594ff",
          400: "#917bff",
          500: "#7c5cff",
          600: "#6745e6"
        },
        // Verified / safe signal
        signal: {
          DEFAULT: "#2ee6c5",
          400: "#5cf0d6",
          500: "#2ee6c5"
        },
        ink: {
          950: "#07070b",
          900: "#0b0b12",
          850: "#0f0f18",
          800: "#14141f"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.30)",
        glow: "0 0 0 1px rgba(255,46,99,0.25), 0 18px 60px -12px rgba(255,46,99,0.45)",
        "glow-iris": "0 0 0 1px rgba(124,92,255,0.25), 0 18px 60px -12px rgba(124,92,255,0.45)"
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
        "radial-fade": "radial-gradient(60% 60% at 50% 0%, rgba(255,255,255,0.06), transparent 70%)"
      },
      keyframes: {
        aurora: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)", opacity: "0.7" },
          "50%": { transform: "translate3d(4%, -3%, 0) scale(1.12)", opacity: "1" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        scanline: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "10%, 90%": { opacity: "1" },
          "100%": { transform: "translateY(2200%)", opacity: "0" }
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" }
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%, 100%": { transform: "scale(1.8)", opacity: "0" }
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        aurora: "aurora 16s ease-in-out infinite",
        "aurora-slow": "aurora 24s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
        shimmer: "shimmer 2.4s linear infinite",
        scanline: "scanline 4.5s linear infinite",
        blink: "blink 1.1s step-end infinite",
        "pulse-ring": "pulse-ring 2.2s ease-out infinite",
        "fade-up": "fade-up 0.6s ease-out both"
      }
    }
  },
  plugins: []
};
