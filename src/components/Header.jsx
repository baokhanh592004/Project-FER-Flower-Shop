import React, { useState, useContext } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ThemeContext } from '../context/ThemeContext';
import ThemeToggle from '../context/ThemeToggle';

export default function Header() {
  // Dùng state để quản lý việc mở/đóng menu trên mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Dùng context để lấy theme, logic không thay đổi
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Hàm này giúp tự động đóng menu khi người dùng bấm vào một link trên mobile
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50">

      {/* ===== Thanh trên cùng (Thông tin liên hệ) ===== */}
      <div className="bg-gray-100 dark:bg-gray-900 text-sm text-gray-700 dark:text-gray-300 transition-colors">
        <div className="container mx-auto px-4 py-1 flex justify-between items-center">
          {/* Ẩn trên màn hình nhỏ (mobile) */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <FaPhone className="text-gray-500" />
              <span>(+84) 888-0228</span>
            </div>
            <div className="text-gray-300 dark:text-gray-600">|</div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-gray-500" />
              <span>contact@flowergarden.vn</span>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto justify-center">
            <a href="#" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" className="text-gray-500 hover:text-sky-500 dark:hover:text-sky-400" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" className="text-gray-500 hover:text-pink-500 dark:hover:text-pink-400" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* ===== Thanh điều hướng chính ===== */}
      <nav className="relative bg-pink-50 dark:bg-gray-800 shadow-md transition-colors">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" onClick={closeMobileMenu} className="flex items-center gap-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/765/765619.png"
              alt="logo"
              width="60"
              className="rounded-full border-2 border-pink-200 dark:border-pink-500"
            />
            <span className="text-2xl font-['cursive'] font-semibold text-pink-600 dark:text-pink-400">
              Flower Garden
            </span>
          </Link>

          {/* Nav links cho màn hình lớn (Desktop) */}
          <div className="hidden lg:flex items-center gap-6 font-medium">
            <Link to="/" className="text-purple-700 dark:text-purple-300 hover:text-pink-500 dark:hover:text-pink-300 transition-colors">Trang chủ</Link>
            <Link to="/about" className="text-purple-700 dark:text-purple-300 hover:text-pink-500 dark:hover:text-pink-300 transition-colors">Giới thiệu</Link>
            <Link to="/specials" className="text-purple-700 dark:text-purple-300 hover:text-pink-500 dark:hover:text-pink-300 transition-colors">Specials</Link>
            <Link to="/contacts" className="text-purple-700 dark:text-purple-300 hover:text-pink-500 dark:hover:text-pink-300 transition-colors">Contacts</Link>
            <Link to="/naturals" className="text-purple-700 dark:text-purple-300 hover:text-pink-500 dark:hover:text-pink-300 transition-colors">Naturals</Link>
            <Link to="/login" className="text-white font-bold px-4 py-2 rounded-full bg-pink-500 hover:bg-pink-600 transition-colors">Đăng nhập</Link>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>

          {/* Nút Hamburger cho màn hình nhỏ (Mobile) */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-purple-700 dark:text-purple-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500"
              aria-label="Mở menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            </button>
          </div>
        </div>

        {/* Menu mobile (hiện ra khi bấm nút hamburger) */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-pink-50 dark:bg-gray-800 shadow-lg z-20">
            <div className="px-4 pt-2 pb-4 flex flex-col items-center gap-4">
              <Link to="/" onClick={closeMobileMenu} className="text-purple-700 dark:text-purple-300 w-full text-center py-2 rounded hover:bg-pink-100 dark:hover:bg-gray-700">Trang chủ</Link>
              <Link to="/about" onClick={closeMobileMenu} className="text-purple-700 dark:text-purple-300 w-full text-center py-2 rounded hover:bg-pink-100 dark:hover:bg-gray-700">Giới thiệu</Link>
              <Link to="/specials" className="text-purple-700 dark:text-purple-300 hover:text-pink-500 dark:hover:text-pink-300 transition-colors">Specials</Link>
              <Link to="/naturals" className="text-purple-700 dark:text-purple-300 hover:text-pink-500 dark:hover:text-pink-300 transition-colors">Naturals</Link>
              <Link to="/contacts" className="text-purple-700 dark:text-purple-300 hover:text-pink-500 dark:hover:text-pink-300 transition-colors">Contacts</Link>
              <Link to="/login" onClick={closeMobileMenu} className="text-white font-bold w-full text-center py-2 rounded-full bg-pink-500 hover:bg-pink-600">Đăng nhập</Link>
              <div className="mt-2">
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}