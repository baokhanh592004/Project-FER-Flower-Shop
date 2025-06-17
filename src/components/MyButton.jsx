// src/components/MyButton.js
// PHIÊN BẢN TỐI ƯU: Chỉ lấy hàm `toggleTheme` và dùng class của Tailwind.

import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function MyButton() {
    // Chỉ cần lấy hàm toggleTheme từ context.
    const { toggleTheme } = useContext(ThemeContext);

    // Khi được click, nó sẽ gọi hàm này.
    // Nếu context bị undefined, lỗi sẽ xảy ra ở đây.
    // Nhưng vì cấu trúc App.js đã đúng nên nó sẽ không còn undefined nữa.
    return (
        <button
            onClick={toggleTheme}
            className={`
                px-4 py-2 rounded-full font-semibold transition-colors duration-300
                bg-gray-800 text-white
                dark:bg-gray-200 dark:text-gray-900
                hover:bg-gray-600 dark:hover:bg-white
            `}
        >
            Toggle Theme
        </button>
    );
}