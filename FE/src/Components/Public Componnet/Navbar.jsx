import React from "react";
import ISGLOGO from "../../assets/LOGOISG.png";
const Navbar = () => {
  return (
    // Container Luar: Mengatur posisi navbar di tengah & floating
    // Saya ubah 'bg-[#11C4D4]' menjadi transparan agar navbar terlihat mengambang
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      {/* Container Utama (Si "Pil" Putih) */}
      <div className="bg-white rounded-full w-full max-w-[880px] h-[64px] px-10 flex items-center justify-between shadow-sm">
        <div className="flex  justify-center items-center gap-3 pl-2">
          {/* Lingkaran Logo (Placeholder) */}
          <div className="w-12 h-12 shadow rounded-full flex items-center justify-center text-white overflow-hidden">
            {/* Ganti img ini dengan logo asli Anda */}
            <img  src={ISGLOGO} alt="Logo ISG" />
          </div> 
          <span className="font-bold text-3xl [text-shadow:1px_1px_4px_rgba(0,0,0,0.4)] text-[#11C4D4] tracking-tight">
            I<span className="text-[#0C81E4]">S</span>
            <span className="text-[#4FE7AF]">G</span>
          </span>
        </div>

        {/* --- 2. BAGIAN TENGAH: MENU --- */}
        <div className="hidden md:flex items-center gap-1">
          {/* Menu: Beranda (Aktif) */}
          <a
            href="#"
            className="flex items-center gap-2 hover:bg-[#E6E6E6] px-5 py-2 rounded-full transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span className="text-sm font-medium text-black">Beranda</span>
          </a>

          {/* Menu: Tentang */}
          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            <span className="text-sm font-medium">Tentang</span>
          </a>

          {/* Menu: Kegiatan */}
          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
            <span className="text-sm font-medium">Kegiatan</span>
          </a>

          {/* Menu: Kontak */}
          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="text-sm font-medium">Kontak</span>
          </a>
        </div>

        {/* --- 3. BAGIAN KANAN: TOMBOL --- */}
        <div>
          <button className="bg-black w-[126px] text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-gray-800 transition-colors">
            Masuk
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
