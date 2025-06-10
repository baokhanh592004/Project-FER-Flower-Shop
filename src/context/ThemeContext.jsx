// ThemeContext.js
import { createContext, useState, useEffect } from "react";

//1
export const ThemeContext = createContext();

//2
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        //CONDITIONAL RENDERING
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    // ÁP DỤNG CLASS CHO HTML ĐỂ SỬ DỤNG DARK MODE CỦA TAILWIND
    useEffect(() => {
        const html = document.documentElement;
        if (theme === 'dark') {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
    }, [theme]);

    //3
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
