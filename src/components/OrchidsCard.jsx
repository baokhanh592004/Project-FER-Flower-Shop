// src/components/OrchidsCard.jsx

import React from 'react';

export default function OrchidsCard({ orchid, onDetail }) {
  return (
    // Nền card: Trắng ở chế độ sáng, xám đậm (giống Header) ở chế độ tối
    // Thêm viền nhẹ để có sự tách biệt tinh tế
    <div className="w-[300px] rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg flex flex-col transition-colors duration-300 border border-gray-200 dark:border-gray-700">
      <div
        className="h-[180px] bg-cover bg-center"
        style={{ backgroundImage: `url('${orchid.image}')` }}
      />

      <div className="p-4 flex-grow flex flex-col">
        {/* BADGES */}
        <div className="flex gap-2 mb-2">
          {orchid.isSpecial && (
            <span className="text-xs font-bold text-white bg-pink-500 rounded px-2 py-1">
              Special
            </span>
          )}
          {orchid.isNatuaral && (
            <span className="text-xs font-bold text-white bg-green-600 rounded px-2 py-1">
              Natural
            </span>
          )}
        </div>

        {/* TITLE + SUBTITLE (ÁP DỤNG BẢNG MÀU CỦA HEADER) */}
        {/* Title: Áp dụng màu tím đặc trưng của Header */}
        <h3 className="text-xl font-bold mb-1 text-purple-700 dark:text-purple-300">{orchid.name}</h3>
        {/* Subtitle: Dùng màu xám dịu hơn */}
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">{orchid.category}</div>

        {/* DESCRIPTION */}
        {/* Văn bản chính: Dùng màu xám tiêu chuẩn để dễ đọc */}
        <p className="text-sm text-gray-700 dark:text-gray-400 leading-relaxed mb-4 flex-grow">
          <strong className="text-gray-800 dark:text-gray-200">Rating:</strong> {orchid.rating} <br />
          <strong className="text-gray-800 dark:text-gray-200">Color:</strong> {orchid.color} <br />
          <strong className="text-gray-800 dark:text-gray-200">Origin:</strong> {orchid.origin} <br />
          <strong className="text-gray-800 dark:text-gray-200">Likes:</strong> {orchid.numberOfLike}
        </p>

        {/* BUTTONS */}
        <div className="flex justify-between">
          <button
            onClick={onDetail}
            // Nút Details: Nền tím nhạt, chữ tím đậm -> đồng bộ với theme
            className="px-4 py-2 text-sm font-medium rounded-md transition-colors
                       bg-purple-100 text-purple-700 hover:bg-purple-200
                       dark:bg-purple-800 dark:text-purple-200 dark:hover:bg-purple-700"
          >
            Details
          </button>
          <button 
            // Nút Like: Dùng màu hồng làm điểm nhấn chính, giống nút Đăng nhập
            className="px-4 py-2 text-sm font-medium text-white rounded-md transition-colors
                       bg-pink-500 hover:bg-pink-600
                       dark:bg-pink-600 dark:hover:bg-pink-500"
          >
            Like
          </button>
        </div>
      </div>
    </div>
  );
}