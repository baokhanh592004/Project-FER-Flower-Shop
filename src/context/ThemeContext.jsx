// ThemeContext.js
import { createContext, useState, useEffect } from "react";

//1
export const ThemeContext = createContext();

//2
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    // 1. HÀM ĐƯỢC GỌI TỪ NÚT BẤM
    const toggleTheme = () => {
        // Nó thay đổi state từ 'light' thành 'dark' hoặc ngược lại
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    // 2. PHẦN QUAN TRỌNG NHẤT XẢY RA Ở ĐÂY!
    // Mỗi khi state `theme` thay đổi, `useEffect` này sẽ được chạy lại.
    useEffect(() => {
        const html = document.documentElement; // Lấy thẻ <html> của toàn bộ trang web

        // Nếu theme là 'dark', nó thêm class="dark" vào thẻ <html>
        if (theme === 'dark') {
            html.classList.add('dark');
        } else {
            // Nếu không, nó xóa class="dark" đi
            html.classList.remove('dark');
        }
    }, [theme]); // Phụ thuộc vào `theme`

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};