// src/routers/AppRoutes.jsx (SỬA LẠI)

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layouts from '../layouts/Layouts';
import OrchidPage from '../pages/OrchidPage'; // Trang chủ của chúng ta
import About from '../pages/About';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Route cha sử dụng Layouts */}
      <Route element={<Layouts />}>
        {/* Khi người dùng vào đường dẫn "/", hiển thị OrchidPage */}
        <Route path="/" element={<OrchidPage />} />
        
        {/* Khi người dùng vào "/about", hiển thị About */}
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}