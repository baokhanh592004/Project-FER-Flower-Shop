// MyButton.js
import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default function MyButton() {
    const { toggleTheme, theme } = useContext(ThemeContext);

    return (
        <>
            {/* BUTTON TAILWIND */}
            <button
                onClick={toggleTheme}
                className={`px-4 py-2 rounded-full font-semibold transition duration-300 ${
                    theme === 'light' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'
                }`}
            >
                Toggle Theme
            </button>
        </>
    )
}
