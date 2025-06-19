// LẤY TOÀN BỘ DỮ LIỆU TỪ DATA
// DUYỆT QUA MẢNG OrchidsData CHO TỪNG HOA
// QUẢN LÝ DANH SÁCH TỔNG

// TRUYỀN DỮ LIỆU THÔNG QUA PROPS orchid
import React, { useState } from 'react';
import orchidsData from '../data/ListOfOrchid';
import OrchidsCard from '../components/OrchidsCard';
import OrchidModal from '../components/OrchidModal';

// HIỂN THỊ TOÀN BỘ HOA LAN BẰNG CÁCH MAP DỮ LIỆU
export default function Orchids() {
  const [selectedOrchid, setSelectedOrchid] = useState(null); // HOA LAN ĐƯỢC CHỌN
  const [showModal, setShowModal] = useState(false); // TRẠNG THÁI MỞ MODAL

  // KHI CLICK DETAILS => MỞ MODAL VỚI HOA LAN ĐƯỢC CHỌN
  const handleOpenModal = (orchid) => {
    setSelectedOrchid(orchid);
    setShowModal(true);
  };

  // ĐÓNG MODAL VÀ RESET HOA LAN
  const handleCloseModal = () => {
    setSelectedOrchid(null);
    setShowModal(false);
  };

  return (
    <div className="hero-section">
      <div className="card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {orchidsData.map((orchid) => (
          <div key={orchid.id}>
            {/* CẬP NHẬT Orchid ĐỂ MỞ MODAL */}
            <OrchidsCard orchid={orchid} onDetail={() => handleOpenModal(orchid)} />
          </div>
        ))}
      </div>

      {/* MODAL NHẬN HOA LAN + SHOW + ONCLOSE */}
      <OrchidModal
        orchid={selectedOrchid}
        show={showModal}
        onClose={handleCloseModal}
      />
    </div>
  );
}
