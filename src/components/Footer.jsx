import React from "react";

export default function Footer() {
  return (
    // Nền footer: dùng màu xám đậm cho cả 2 chế độ để tạo sự vững chắc, có thể điều chỉnh nhẹ
    <footer className="bg-gray-800 dark:bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        {/* Dùng Grid để tạo layout 4 cột trên desktop, 2 cột trên tablet và 1 cột trên mobile */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Cột 1: Giới thiệu */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-pink-500 dark:text-pink-400">Flower Garden</h3>
            <p className="text-sm text-gray-400">
              Chào mừng bạn đến với Flower Garden – nơi hội tụ những loài hoa đẹp nhất.
              Chúng tôi mang đến cho bạn những sản phẩm hoa tươi chất lượng và dịch vụ tận tâm.
            </p>
          </div>

          {/* Cột 2: Liên kết nhanh */}
          <div className="space-y-4">
            <h4 className="font-semibold uppercase tracking-wider text-gray-100">Liên kết nhanh</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm hover:text-pink-400 transition-colors">Trang chủ</a></li>
              <li><a href="/about" className="text-sm hover:text-pink-400 transition-colors">Giới thiệu</a></li>
              <li><a href="/products" className="text-sm hover:text-pink-400 transition-colors">Sản phẩm</a></li>
              <li><a href="/contact" className="text-sm hover:text-pink-400 transition-colors">Liên hệ</a></li>
            </ul>
          </div>

          {/* Cột 3: Bài viết mới */}
          <div className="space-y-4">
            <h4 className="font-semibold uppercase tracking-wider text-gray-100">Bài viết mới</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-pink-400 transition-colors">Cách chọn hoa theo mùa</a></li>
              <li><a href="#" className="text-sm hover:text-pink-400 transition-colors">Ý nghĩa các loại hoa</a></li>
              <li><a href="#" className="text-sm hover:text-pink-400 transition-colors">Top 5 hoa được yêu thích</a></li>
            </ul>
          </div>

          {/* Cột 4: Đăng ký nhận tin */}
          <div className="space-y-4">
            <h4 className="font-semibold uppercase tracking-wider text-gray-100">Đăng ký nhận tin</h4>
            <form>
              <label htmlFor="newsletter-email" className="sr-only">Email</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Nhập email của bạn"
                className="w-full rounded-md border-gray-600 bg-gray-700 px-3 py-2 text-gray-200 placeholder-gray-400 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button
                type="submit"
                className="mt-2 w-full rounded-md bg-pink-500 px-4 py-2 font-bold text-white transition-colors hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Đăng ký
              </button>
            </form>
          </div>
        </div>

        {/* Đường kẻ ngang và Copyright */}
        <hr className="my-8 border-gray-700" />
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Flower Garden. Mọi quyền được bảo lưu.
        </div>
      </div>
    </footer>
  );
}