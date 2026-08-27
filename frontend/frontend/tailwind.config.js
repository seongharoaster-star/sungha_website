/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkbg: "#14131a",
        orange: "#fe722c",
      },
      fontFamily: {
        serifKr: ["Gowun Batang", "Nanum Myeongjo", "serif"],
        brush: ["Nanum Brush Script", "cursive"],
        playfair: ["Playfair Display", "serif"],
        kopub: ["KoPubBatang", "serif"],
        JoseonBoldMyongjo: ["JoseonBoldMyongjo", "serif"],
        BookkMyungjo: ["BookkMyungjo", "serif"],
        Bonmyeongjo: ["BonmyeongjoSourceHanSerif", "serif"],
        SchoolSafetyWave:["SchoolSafetyWave", "serif"]

      },
    },
  },
  plugins: [],
};
