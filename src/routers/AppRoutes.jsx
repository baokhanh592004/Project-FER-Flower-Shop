// src/routers/AppRoutes.jsx (SỬA LẠI)

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layouts from '../layouts/Layouts';
import OrchidPage from '../pages/OrchidPage'; // Trang chủ của chúng ta
import About from '../pages/About';
import OrchidDetail from '../pages/OrchidDetail';
import Naturals from '../pages/Naturals';
import Specials from '../pages/Specials';
import Contact from '../components/Contact';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Route cha sử dụng Layouts */}
      <Route element={<Layouts />}>
        {/* Khi người dùng vào đường dẫn "/", hiển thị OrchidPage */}
        <Route path="/" element={<OrchidPage />} />
        
        {/* Khi người dùng vào "/about", hiển thị About */}
        <Route path="/about" element={<About />} />

        {/* Khi người dùng vào "/orchids/:id", hiển thị OrchidDetail với id là tham số động */}
        <Route path="orchids/:id" element={<OrchidDetail/>} /> 

        {/* Các route con cho tự nhiên và đặc biệt */}
        <Route path="naturals" element={<Naturals />} /> 
        <Route path="specials" element={<Specials />} /> 

        {/* Route cho trang liên hệ */}
        <Route path="contacts" element={<Contact/>}/>
      </Route>
    </Routes>
  );
}