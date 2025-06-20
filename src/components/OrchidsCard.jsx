import React from 'react';

export default function OrchidsCard({ orchid, onDetail }) {
  return (
    <div className="w-[300px] rounded-[12px] overflow-hidden bg-white shadow-md flex flex-col">
      <div
        className="h-[180px] bg-cover bg-center"
        style={{ backgroundImage: `url('${orchid.image}')` }}
      />

      <div className="p-4">
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

        {/* TITLE + SUBTITLE */}
        <h3 className="text-xl font-bold mb-1">{orchid.name}</h3>
        <div className="text-sm text-gray-500 mb-3">{orchid.category}</div>

        {/* DESCRIPTION */}
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          <strong>Rating:</strong> {orchid.rating} <br />
          <strong>Color:</strong> {orchid.color} <br />
          <strong>Origin:</strong> {orchid.origin} <br />
          <strong>Likes:</strong> {orchid.numberOfLike}
        </p>

        {/* BUTTONS */}
        <div className="flex justify-between">
          <button
            onClick={onDetail}
            className="px-4 py-2 text-sm font-medium text-gray-800 bg-gray-200 rounded-md hover:bg-gray-300 transition"
          >
            Details
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition">
            Like
          </button>
        </div>
      </div>
    </div>
  );
}
