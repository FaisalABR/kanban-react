/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "rgb(38,54,88)",
        "white-kanban": "#FEF4E3",
        "violet-kanban": "rgb(78,63,236)",
      },
      keyframes: {
        "card-out": {
          "0%": { left: "0" },
          "25%": { left: "5", opacity: "0.7" },
          "50%": { left: "10", opacity: "0.5" },
          "75%": { left: "16", opacity: "0.3" },
          "100%": { left: "20", opacity: "0" },
        },
      },
      animation: {
        "card-out": "card-out 1s ease-in 0",
      },
    },
  },
  plugins: [],
};
