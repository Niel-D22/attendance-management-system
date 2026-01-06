import React, { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Pastikan install react-icons
import ISGLOGO from "../../assets/LOGOISG.png";
import ISGNAME from "../../assets/Group 5.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* =================================================================================
          1. TAMPILAN DESKTOP (Layar Besar)
          - Menggunakan kode ASLI Anda.
          - Hilang saat layar kecil (hidden lg:block).
      ================================================================================= */}
      <div className="hidden lg:block">
        {/* Container Logo Kiri & Button Kanan */}
        <div className="absolute top-6 left-0 right-0 z-40 px-6">
          <div className="max-w-[1300px] mx-auto flex items-center justify-between">
            {/* Logo Kiri */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center overflow-hidden">
                <img src={ISGLOGO} alt="Logo ISG" />
              </div>
              <img src={ISGNAME} width="90" alt="ISG" />
            </div>

            {/* Button Masuk Kanan */}
            <button className="px-6 py-2.5 rounded-full text-sm font-medium bg-black text-white hover:bg-gray-800 transition">
              Masuk
            </button>
          </div>
        </div>

        {/* Navigasi Pill Tengah (Link Menu) */}
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
          <div
            className={`flex items-center gap-1 px-2 py-1 rounded-full transition-all duration-300
              ${
                scrolled
                  ? "bg-white shadow-md"
                  : "bg-white/10 backdrop-blur-md"
              }`}
          >
            {["Beranda", "Tentang", "Kegiatan", "Kontak"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition
                  ${
                    scrolled
                      ? "text-gray-800 hover:bg-black/5"
                      : "text-white hover:bg-white/10"
                  }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* =================================================================================
          2. TAMPILAN MOBILE & TABLET (Layar Kecil)
          - Muncul HANYA di HP (lg:hidden).
      ================================================================================= */}
      <div className="lg:hidden">
        
        {/* A. PILL TENGAH (Isi: Logo + Button Masuk) */}
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-max">
          <div
            className={`flex items-center gap-3 px-3 py-2 rounded-full transition-all duration-300
              ${
                scrolled
                  ? "bg-white shadow-md"
                  : "bg-white/20 backdrop-blur-md border border-white/20"
              }`}
          >
            {/* Logo Kecil */}
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm overflow-hidden">
               <img src={ISGLOGO} alt="Logo" className="h-6 w-auto object-contain" />
            </div>
            
            {/* Button Masuk (Di dalam Pill) */}
            <button className="px-4 py-1.5 rounded-full text-xs font-bold bg-black text-white hover:bg-gray-800 transition">
              Masuk
            </button>
          </div>
        </div>

        {/* B. ICON SIDEBAR (Di Sebelah Kanan, Luar Navbar) */}
        <div className="fixed top-6 right-6 z-50">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className={`p-3 rounded-full shadow-lg text-2xl transition-transform active:scale-90
              ${scrolled ? "bg-white text-[#11C4D4]" : "bg-white/20 backdrop-blur-md text-white border border-white/20"}`}
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </div>

      {/* =================================================================================
          3. SIDEBAR DRAWER (Overlay Menu)
          - Muncul saat tombol hamburger diklik.
      ================================================================================= */}
      <div
        className={`fixed inset-0 z-[60] transform transition-transform duration-300 lg:hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Background Gelap (Klik tutup sidebar) */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        ></div>

        {/* Panel Sidebar Putih */}
        <div className="absolute right-0 top-0 h-full w-[280px] bg-white shadow-2xl p-6 flex flex-col gap-6">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <img src={ISGLOGO} className="h-8" alt="logo" />
              <img src={ISGNAME} className="h-4" alt="ISG" />
            </div>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-3xl text-gray-500 hover:text-red-500"
            >
              <HiX />
            </button>
          </div>
          
          {/* Menu Link Sidebar */}
          <nav className="flex flex-col gap-4 font-bold text-lg text-gray-700 mt-4">
            {["Beranda", "Tentang", "Kegiatan", "Kontak"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsSidebarOpen(false)}
                className="hover:text-[#11C4D4] border-b border-gray-100 pb-3"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;