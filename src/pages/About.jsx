import React from 'react';

export default function About() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>🌸 Chào mừng đến với cửa hàng hoa (gần hoàn thiện 😅)</h2>
      <p>
        Đây là một trang web dành cho cửa hàng hoa <br />
        AI thích thì zô, không thích thì cũng... zô nha 😎 <br />
        Mà đừng có zô vì web còn chưa xong :)))
      </p>
      <img
        src="https://i.imgur.com/oCkEbrA.png" // ảnh meme ví dụ
        alt="funny flower meme"
        style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px', marginTop: '1rem', placeSelf: 'center' }}
      />
      <p style={{ fontStyle: 'italic', marginTop: '1rem' }}>
        "Hoa thì chưa thấy, chứ bug thì nở đầy code..." 💻🌹
      </p>
    </div>
  );
}
