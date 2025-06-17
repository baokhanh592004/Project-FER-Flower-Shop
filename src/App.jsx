// src/App.js
// Cấu trúc này đảm bảo context được cung cấp cho toàn bộ ứng dụng.

import { ThemeProvider } from './context/ThemeContext'; // Import ThemeProvider
import AppRoutes from './routers/AppRoutes'; // Import AppRoutes
import React from 'react';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    // 1. BrowserRouter bao bọc tất cả để routing hoạt động.
    <BrowserRouter>
      {/* 2. ThemeProvider bao bọc AppRoutes. Đây là mấu chốt! */}
      {/* Mọi component bên trong AppRoutes sẽ là "con cháu" của ThemeProvider. */}
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;