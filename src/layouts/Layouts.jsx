// src/layouts/Layouts.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

export default function Layouts() {
  return (
    // Đặt màu nền và màu chữ mặc định cho toàn bộ trang
    // bg-gray-100 (hoặc bg-white) -> bg-gray-900
    // Thêm transition-colors để hiệu ứng chuyển màu mượt mà
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-6">
        <Outlet /> {/* Các trang của bạn sẽ được render ở đây */}
      </main>
      <Footer />
    </div>
  );
}