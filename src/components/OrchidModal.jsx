import React from 'react';
import { Modal, Button } from 'react-bootstrap';


// MODAL DÙNG CHO MỖI HOA LAN => NHẬN PROP orchid, show, onClose
export default function OrchidModal({ orchid, show, onClose }) {
  if (!orchid) return null; // TRÁNH LỖI KHI CHƯA CÓ HOA LAN ĐƯỢC CHỌN

  return (
    <Modal show={show} onHide={onClose} centered size="md">
      <Modal.Header closeButton className="bg-light">
        <Modal.Title className="fw-bold text-primary">
          {orchid.name}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="bg-white">
        {/* HIỂN THỊ THÔNG TIN HOA LAN */}
        <div className="text-center mb-3">
          <img
            src={orchid.image}
            alt={orchid.name}
            className="img-thumbnail shadow-sm rounded modal-orchid-img"
          />
        </div>

        <div className="px-3">
          <div className="text-muted fst-italic mb-2">
            {orchid.category}
          </div>
          <div className="card-badges">
          {orchid.isSpecial && <span className="badge special">Special</span>}
          {orchid.isNatuaral && <span className="badge natural">Natural</span>}
        </div>

          <ul className="list-unstyled">
            <li><strong>🌟 Rating:</strong> {orchid.rating}</li>
            <li><strong>🎨 Color:</strong> {orchid.color}</li>
            <li><strong>📍 Origin:</strong> {orchid.origin}</li>
            <li><strong>❤️ Likes:</strong> {orchid.numberOfLike}</li>
          </ul>
        </div>
      </Modal.Body>

      <Modal.Footer className="bg-light">
        {/* NÚT ĐÓNG MODAL */}
        <Button variant="secondary" onClick={onClose}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
