// src/components/Header.js
// PHIÊN BẢN HOÀN CHỈNH

import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ThemeContext } from '../context/ThemeContext';
// Sửa lại đường dẫn import sau khi di chuyển file ThemeToggle.jsx
import ThemeToggle from '../context/ThemeToggle'; // Đảm bảo đường dẫn đúng

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <header>

      {/* ===== Thanh trên cùng (Thông tin liên hệ) ===== */}
      <div className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-1 text-sm border-b border-gray-200 dark:border-gray-700">
        <Container className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3">
            <FaPhone className="me-1 text-secondary" />
            <span>(+84) 888-0228</span>
            <span className="mx-2 text-muted">|</span>
            <FaEnvelope className="me-1 text-secondary" />
            <span>contact@flowergarden.vn</span>
          </div>
          <div  className="flex">
            <a href="#" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 me-3 fs-5" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-500 hover:text-sky-500 dark:hover:text-sky-400 me-3 fs-5" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-500 hover:text-pink-500 dark:hover:text-pink-400 fs-5" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </Container>
      </div>

      {/* ===== Thanh điều hướng chính ===== */}
      <Navbar expand="lg" className="shadow-sm py-3 bg-pink-50 dark:bg-gray-700">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center fw-semibold fs-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/765/765619.png"
              alt="logo"
              width="60"
              className="me-3 rounded-circle border border-danger"
              />
            <span className="font-['cursive'] text-pink-600 dark:text-pink-400">
              Flower Garden
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar-nav" />
          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="ms-auto fw-medium d-flex align-items-center" style={{ gap: "1.5rem" }}>
              <Nav.Link as={Link} to="/" className="text-purple-700 dark:text-purple-300 hover:text-pink-500 dark:hover:text-pink-300">
                Trang chủ
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-purple-700 dark:text-purple-300 hover:text-pink-500 dark:hover:text-pink-300">
                Giới thiệu
              </Nav.Link>
              <Nav.Link href="/products" className="text-purple-700 dark:text-purple-300 hover:text-pink-500 dark:hover:text-pink-300">
                Sản phẩm
              </Nav.Link>
              <Nav.Link href="/login" className="text-white fw-bold px-3 rounded-pill bg-pink-500 hover:bg-pink-600 transition-colors">
                Đăng nhập
              </Nav.Link>
              
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}