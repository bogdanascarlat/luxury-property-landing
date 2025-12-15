/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        "primary-base": "rgb(28 28 28 / 0.2)",
        "secondary-base": "#ffffff",
        "innovation-accent": "rgb(0 68 136)",
        luxury: {
          gold: "#FAFAFA",
          darkGold: "#B8941F",
          navy: "#0A1931",
          charcoal: "#1A1A1A",
          cream: "#F5F5F0",
        },
      },
    },
  },
  plugins: [],
};
