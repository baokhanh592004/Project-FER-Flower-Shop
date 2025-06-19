// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ⚠️ Cái này là BẮT BUỘC để dùng class "dark:"
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Đảm bảo đúng đường dẫn
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}