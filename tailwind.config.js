/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Nunito"],
      secondary: ["Inter"],
    },
    backgroundImage:{
      'radial-gradient': 'radial-gradient(circle, rgba(4, 3, 64, 0.92) 13%, #020111 91%)',
    },
  },
  plugins: [],
}

