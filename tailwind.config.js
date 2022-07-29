/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "fade": 'fade 0.5s',
        "pop": 'pop 0.3s cubic-bezier(.26,.53,.74,1.48)',
      },
      keyframes: {
        fade: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        pop: {
          '0%': { opacity: 0, transform: "scale(0.5, 0.5)" },
          '100%': { opacity: 1,  transform: "scale(1, 1)" },
        },
        slide: {
          '0%': { opacity: 0, transform: "translateX(3000px)" },
          '100%': { opacity: 1,  transform: "translateX(0)" },
        },
      }
    },
  },
  plugins: []
}
