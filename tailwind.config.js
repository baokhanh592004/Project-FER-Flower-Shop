// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  // 1. DÒNG QUAN TRỌNG NHẤT: Báo cho Tailwind sử dụng chiến lược class cho dark mode.
  darkMode: 'class', 

  // 2. Đảm bảo Tailwind quét tất cả các file có thể chứa class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Quét tất cả các file .js, .ts, .jsx, .tsx trong thư mục src
  ],
  
  theme: {
    extend: {},
  },
  plugins: [],
}