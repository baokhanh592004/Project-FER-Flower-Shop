// ThemeToggle.jsx
import React from 'react';

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="text-purple-700 dark:text-purple-300 hover:text-pink-500 dark:hover:text-pink-300 border border-gray-300 dark:border-gray-500 rounded px-2"
    >
      {theme === 'dark' ? '☀️ Sáng' : '🌙 Tối'}
    </button>
  );
}

export default ThemeToggle;