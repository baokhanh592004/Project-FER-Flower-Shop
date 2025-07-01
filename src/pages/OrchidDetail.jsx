// src/pages/OrchidDetail.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import orchids from '../data/ListOfOrchid'; 

export default function OrchidDetail() {
  // 1. Dùng hook useParams để lấy tham số 'id' từ URL
  const { id } = useParams();

  // 2. Tìm hoa lan trong mảng dữ liệu dựa trên id.
  // Lưu ý: id từ URL là string, id trong dữ liệu có thể là number, nên cần chuyển đổi.
  const orchid = orchids.find(o => o.id.toString() === id);

  // 3. Nếu không tìm thấy hoa lan, hiển thị thông báo.
  if (!orchid) {
    return (
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold text-red-500">Orchid not found!</h1>
        <Link to="/" className="mt-4 inline-block text-lg text-blue-500 hover:underline">
          ← Back to Home
        </Link>
      </div>
    );
  }

  // 4. Nếu tìm thấy, render thông tin chi tiết
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Cột hình ảnh */}
          <div>
            <img
              src={orchid.image}
              alt={orchid.name}
              className="h-auto w-full rounded-lg border-2 border-gray-200 object-cover shadow-md dark:border-gray-600"
            />
          </div>

          {/* Cột thông tin */}
          <div className="flex flex-col space-y-4">
            <h1 className="text-4xl font-bold text-purple-700 dark:text-purple-300">
              {orchid.name}
            </h1>
            <p className="italic text-gray-500 dark:text-gray-400">{orchid.category}</p>

            <div className="flex flex-wrap gap-2">
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

            <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
              <ul className="space-y-2 text-lg text-gray-700 dark:text-gray-300">
                <li><strong className="font-semibold text-gray-900 dark:text-gray-100">🌟 Rating:</strong> {orchid.rating}</li>
                <li><strong className="font-semibold text-gray-900 dark:text-gray-100">🎨 Color:</strong> {orchid.color}</li>
                <li><strong className="font-semibold text-gray-900 dark:text-gray-100">📍 Origin:</strong> {orchid.origin}</li>
                <li><strong className="font-semibold text-gray-900 dark:text-gray-100">❤️ Likes:</strong> {orchid.numberOfLike}</li>
              </ul>
            </div>
            
            <div className="flex-grow"></div>

            <Link
              to="/"
              className="mt-4 inline-block w-full rounded-lg bg-gray-200 px-6 py-3 text-center font-semibold text-gray-800 transition hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500"
            >
              ← Back to all orchids
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}