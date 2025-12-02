/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        darkbg: '#14131a',
        orange:'#fe722c',
      },
    },
  },
  plugins: [],
}


