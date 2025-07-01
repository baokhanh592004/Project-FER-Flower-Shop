import React from 'react';

// Dùng biểu tượng 'X' từ thư viện react-icons cho nút đóng
import { FaTimes } from 'react-icons/fa';

export default function OrchidModal({ orchid, show, onClose }) {
  // Nếu prop 'show' là false, không render gì cả.
  if (!show) {
    return null;
  }

  return (
    // Backdrop: Lớp nền mờ bao phủ toàn bộ màn hình
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 transition-opacity duration-300"
      onClick={onClose} // Bấm vào nền mờ để đóng Modal
      role="dialog"
      aria-modal="true"
    >
      {/* Panel Modal: Nội dung chính của modal */}
      <div
        className="relative w-full max-w-lg rounded-xl bg-white dark:bg-gray-800 shadow-xl transition-all duration-300"
        onClick={(e) => e.stopPropagation()} // Ngăn việc bấm vào nội dung modal làm đóng modal
      >
        {/* Header */}
        <div className="flex items-start justify-between rounded-t-xl border-b border-gray-200 dark:border-gray-700 p-4">
          <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300">
            {orchid.name}
          </h3>
          <button
            type="button"
            className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={onClose}
            aria-label="Đóng"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <div className="mb-4 text-center">
            <img
              src={orchid.image}
              alt={orchid.name}
              className="mx-auto h-64 w-auto rounded-lg border-2 border-gray-200 dark:border-gray-600 object-cover shadow-md"
            />
          </div>

          <div className="space-y-3">
            <p className="italic text-gray-500 dark:text-gray-400">{orchid.category}</p>
            
            <div className="flex gap-2">
              {orchid.isSpecial && (
                <span className="rounded bg-pink-500 px-2 py-1 text-xs font-bold text-white">
                  Special
                </span>
              )}
              {orchid.isNatuaral && (
                <span className="rounded bg-green-600 px-2 py-1 text-xs font-bold text-white">
                  Natural
                </span>
              )}
            </div>

            <ul className="space-y-1 text-gray-700 dark:text-gray-300">
              <li><strong className="text-gray-900 dark:text-gray-100">🌟 Rating:</strong> {orchid.rating}</li>
              <li><strong className="text-gray-900 dark:text-gray-100">🎨 Color:</strong> {orchid.color}</li>
              <li><strong className="text-gray-900 dark:text-gray-100">📍 Origin:</strong> {orchid.origin}</li>
              <li><strong className="text-gray-900 dark:text-gray-100">❤️ Likes:</strong> {orchid.numberOfLike}</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end rounded-b-xl border-t border-gray-200 dark:border-gray-700 p-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-gray-200 px-5 py-2.5 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}