// src/context/ThemeContext.jsx
// sử dụng cont
import React, { createContext, useState, useEffect, useContext } from 'react'; // Nhớ thêm useContext

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Ưu tiên lấy theme đã lưu trong localStorage, nếu không có thì mặc định là false (sáng)
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    const root = window.document.documentElement; // Lấy thẻ <html>

    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Lưu lựa chọn của người dùng vào localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]); // Chỉ chạy lại effect này khi state `darkMode` thay đổi

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook tùy chỉnh để sử dụng context dễ dàng hơn
export const useTheme = () => useContext(ThemeContext);