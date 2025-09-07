/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkTeal: "#75be44",
        bgRequest: "#F3FFF5"
      },
      animation: {
        "fade-in-up": "fadeInUp 0.3s ease-out",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
    },
  },
  plugins: [],
  }
}
