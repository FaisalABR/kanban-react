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
    },
  },
  plugins: [],
};
