// src/layouts/Layouts.js
// PHIÊN BẢN ĐÚNG: KHÔNG DÙNG useContext ở đây.

import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyButton from '../components/MyButton';

export default function Layouts() {
  return (
    // Nó chỉ định nghĩa khung sườn và đặt các class cho theme.
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300 flex flex-col">
      <Header />

      <main className="container mx-auto p-4 flex-grow">
        <div className="my-4 flex justify-center">
          {/* MyButton được đặt ở đây, là con của Layouts, cháu của AppRoutes, chắt của ThemeProvider */}
          <MyButton />
        </div>

        <Outlet />
      </main>

      <Footer />
    </div>
  );
}