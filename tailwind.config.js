// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Dòng này sẽ quét tất cả các file trong thư mục src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}