import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <Container>
        <Row>
          {/* Cột giới thiệu */}
          <Col md={3}>
            <h4 className="text-danger fw-bold">Flower Garden</h4>
            <p>
              Chào mừng bạn đến với Flower Garden – nơi hội tụ những loài hoa đẹp nhất.
              Chúng tôi mang đến cho bạn những sản phẩm hoa tươi chất lượng và dịch vụ tận tâm.
            </p>
          </Col>

          {/* Cột liên kết */}
          <Col md={3}>
            <h6 className="text-uppercase fw-bold">Liên kết nhanh</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Trang chủ</a></li>
              <li><a href="/about" className="text-white text-decoration-none">Giới thiệu</a></li>
              <li><a href="/products" className="text-white text-decoration-none">Sản phẩm</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Liên hệ</a></li>
            </ul>
          </Col>

          {/* Cột bài viết mới */}
          <Col md={3}>
            <h6 className="text-uppercase fw-bold">Bài viết mới</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Cách chọn hoa theo mùa</a></li>
              <li><a href="#" className="text-white text-decoration-none">Ý nghĩa các loại hoa</a></li>
              <li><a href="#" className="text-white text-decoration-none">Top 5 hoa được yêu thích</a></li>
            </ul>
          </Col>

          {/* Cột đăng ký nhận tin */}
          <Col md={3}>
            <h6 className="text-uppercase fw-bold">Đăng ký nhận tin</h6>
            <Form>
              <Form.Group controlId="formNewsletter">
                <Form.Control type="email" placeholder="Nhập email của bạn" className="mb-2" />
              </Form.Group>
              <Button variant="danger" type="submit" className="w-100">Đăng ký</Button>
            </Form>
          </Col>
        </Row>

        <hr className="bg-white my-4" />
        <div className="text-center small">
          &copy; 2025 Flower Garden. Mọi quyền được bảo lưu.
        </div>
      </Container>
    </footer>
  );
}
