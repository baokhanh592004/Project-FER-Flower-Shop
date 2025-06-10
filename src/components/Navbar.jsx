import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import About from "../pages/About"; // Import About component
import { ThemeContext } from "../context/ThemeContext";
export default function Header() {

  const { theme } = useContext(ThemeContext);

  return (
    <>
    <Navbar bg={theme} variant={theme === 'light' ? 'light' : 'dark'} expand="lg">
      {/* Thanh trên cùng (Thông tin liên hệ) */}
      <div className="bg-light text-dark py-1 small border-bottom">
        <Container className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3">
            <FaPhone className="me-1 text-secondary" />
            <span>(+84) 888-0228</span>
            <span className="mx-2 text-muted">|</span>
            <FaEnvelope className="me-1 text-secondary" />
            <span>contact@flowergarden.vn</span>
          </div>
          <div>
            <a href="#" className="text-muted me-3 fs-5" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="text-muted me-3 fs-5" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="text-muted fs-5" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </Container>
      </div>
      </Navbar>

    
      {/* Thanh điều hướng chính */}
      <Navbar expand="lg" style={{ backgroundColor: "#fff0f5" }} className="shadow-sm py-3">
        <Container>
          <Navbar.Brand href="/" className="d-flex align-items-center fw-semibold text-danger fs-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/765/765619.png"
              alt="logo"
              width="60"
              className="me-3 rounded-circle border border-danger"
              />
            <span style={{ color: "#d63384", fontFamily: "cursive" }}>Flower Garden</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto fw-medium" style={{ gap: "1.5rem" }}>
              <Nav.Link as={Link} to="/" style={{ color: "#6f42c1" }}>
                Trang chủ
              </Nav.Link>
              <Nav.Link as={Link} to="/about" style={{ color: "#6f42c1" }}>
                Giới thiệu
              </Nav.Link>
              <Nav.Link href="/products" style={{ color: "#6f42c1" }}>
                Sản phẩm
              </Nav.Link>
              <Nav.Link href="/services" style={{ color: "#6f42c1" }}>
                Dịch vụ
              </Nav.Link>
              <Nav.Link href="/blog" style={{ color: "#6f42c1" }}>
                Blog
              </Nav.Link>
              <Nav.Link href="/contact" style={{ color: "#6f42c1" }}>
                Liên hệ
              </Nav.Link>
              <Nav.Link href="/login" className="text-white fw-bold px-3 rounded-pill" style={{ backgroundColor: "#e83e8c" }}>
                Đăng nhập
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
