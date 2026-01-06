import React, { useEffect, useState } from "react";
import svgRaw from "../../assets/online-tech-talks-animate.svg?raw";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Pastikan install react-icons
import Profile1 from "../../assets/Frame 10.svg";
import Profile2 from "../../assets/Frame 11.svg";
import Profile3 from "../../assets/Frame 12.svg";
import ISG from "../../assets/LOGOISG.png";
import DLSU from "../../assets/DLSU.png";

const Beranda = () => {
  const [percent, setPercent] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showCard, setShowCard] = useState(false);

  setTimeout(() => {
    setShowCard(true);
  }, 800);

  useEffect(() => {
    // animasi svg
    setTimeout(() => {
      document
        .querySelector("#freepik_stories-online-tech-talks")
        ?.classList.add("animated");
    }, 1000);

    // animasi angka
    let start = 0;
    const end = 92;
    const duration = 1200;
    const stepTime = Math.max(Math.floor(duration / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setPercent(start);
      if (start === end) {
        clearInterval(timer);
        setTimeout(() => setShowText(true), 200);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#11C4D4] font-Space min-h-screen lg:h-screen relative flex flex-col items-center justify-center overflow-x-hidden pt-10 lg:pt-0">
      
    

      {/* --- SIDEBAR COMPONENT --- */}
      <div className={`fixed inset-0 z-[60] transform transition-transform duration-300 lg:hidden ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)}></div>
        <div className="absolute right-0 top-0 h-full w-[250px] bg-white shadow-2xl p-6 flex flex-col gap-6">
            <button onClick={() => setIsSidebarOpen(false)} className="self-end text-3xl text-gray-500"><HiX /></button>
            <nav className="flex flex-col gap-4 font-bold text-lg text-gray-700 mt-4">
                <a href="#" className="hover:text-[#11C4D4]">Beranda</a>
                <a href="#" className="hover:text-[#11C4D4]">Tentang</a>
                <a href="#" className="hover:text-[#11C4D4]">Kegiatan</a>
                <a href="#" className="hover:text-[#11C4D4]">Kontak</a>
            </nav>
            <button className="bg-black text-white py-3 rounded-full font-bold mt-auto">Masuk</button>
        </div>
      </div>

      {/* --- HEADER TEXT --- */}
     <h1 className="flex flex-col items-center justify-center text-center font-bold text-[40px] md:text-[80px] lg:text-[110px] px-4 lg:w-300 mt-10 lg:mt-10 [text-shadow:1px_1px_1px_rgba(255,255,255,255)] lg:[text-shadow:2px_2px_1px_rgba(255,255,255,255)] [letter-spacing:-0.05em] lg:[letter-spacing:-0.10em] [line-height:0.9] lg:[line-height:0.8] z-20">
  
  {/* Baris Teks Utama */}
  <span>
    Komunitas Mahasiswa Informatika{" "}
    <span className="relative inline-block mt-2 lg:mt-0">
      UKDLSM
      
      {/* --- VERSI DESKTOP (Sticker Absolute) --- */}
      {/* Class 'hidden lg:block' membuatnya HILANG di Tablet/HP */}
      <div className="hidden lg:block absolute animate-sway top-14 left-84 -translate-x-1/2 -translate-y-1/2 bg-white px-2 py-0.5 lg:px-3 lg:py-1 z-10 whitespace-nowrap shadow-sm border border-gray-100">
        <span className="block text-[14px] text-[#11C4D4] font-bold tracking-normal leading-normal [text-shadow:none]">
          Universitas Katolik De La Salle Manado
        </span>
      </div>
    </span>
  </span>

  {/* --- VERSI TABLET & HP (Block di Bawah) --- */}
  {/* Class 'lg:hidden' membuatnya MUNCUL di Tablet/HP, tapi HILANG di Desktop */}
  <div className="lg:hidden mt-4  bg-white px-3 py-1.5 rounded-sm shadow-sm border border-gray-100 w-max mx-auto">
    <span className="block text-[10px] md:text-[12px] text-[#11C4D4] font-bold tracking-normal leading-normal [text-shadow:none]">
      Universitas Katolik De La Salle Manado
    </span>
  </div>

</h1>

      {/* --- CONTAINER AREA KIRI & KANAN --- */}
      {/* Mobile: Flex Column (Turun ke bawah). Desktop (lg): Block/Relative (Sesuai aslinya) */}
      <div className="relative w-full max-w-[1200px] flex flex-col lg:block h-auto lg:h-[400px] items-center pb-10 mt-10 lg:mt-0 lg:justify-center lg:items-end">
        
        {/* SISI KIRI: FEEDBACK & 92% */}
        {/* Mobile: Order 2 (di bawah gambar). Desktop: Absolute positioned */}
        <div className="order-2 flex flex-col items-center lg:block lg:absolute lg:left-10 lg:bottom-10 lg:items-start mt-10 lg:mt-0">
          {/* Card Feedback */}
          <div className="bg-[#FFFFFF66] animate-floating backdrop-blur-md p-3 rounded-2xl border border-white/30 w-[240px] shadow-sm">
            <div className="flex -space-x-2 mb-3">
              <img src={Profile1} className="w-8 h-8 rounded-full border border-white" alt="p1" />
              <img src={Profile2} className="w-8 h-8 rounded-full border border-white" alt="p2" />
              <img src={Profile3} className="w-8 h-8 rounded-full border border-white" alt="p3" />
            </div>
            <p className="text-[13px] font-bold leading-tight">
              Feedback Mahasiswa di Tahun 2025
            </p>
          </div>

          {/* --- GARIS L-SHAPE KIRI (HANYA MUNCUL DI DESKTOP / lg:block) --- */}
          <div className="hidden lg:block">
            <div className="ml-24 h-16 w-16 border-l-2 border-black/20 "></div>
            <div className="absolute left-73 top-42 h-16 w-22 border-t-2 border-l-2 rounded-tl-xl border-black/20 "></div>
            <div className="absolute left-[204px] top-48 h-10 w-22 border-black/20 border-b-2 "></div>
            <div className="ml-24 left-[106px] top-50 absolute h-16 w-16 border-l-2 border-black/20 "></div>
          </div>

          {/* Angka Persentase */}
          <div className="flex flex-col mt-4 lg:mt-2 items-center lg:items-start">
            <h2 className="text-[80px] lg:text-[100px] font-bold leading-[0.8] tracking-tighter">
              {percent}%
            </h2>
            <p className="text-[14px] font-medium max-w-[200px] mt-2 leading-tight text-center lg:text-left">
              sebagian besar Mahasiswa merasa percaya diri setelah bulan pertama
            </p>
          </div>
        </div>

        {/* TENGAH: ILUSTRASI (SVG) */}
        {/* Mobile: Order 1 (Paling atas). Scale dikecilkan di mobile */}
        <div className="order-1 lg:order-none z-10 mb-0 lg:mb-[-20px] flex flex-col justify-center items-center scale-90 lg:scale-100 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:bottom-0">
          <div
            className="w-[320px] lg:w-[400px]"
            dangerouslySetInnerHTML={{ __html: svgRaw }}
          />
          <button className="h-[47px] w-[272px] mt-4 lg:mt-0 duration-100 hover:scale-95 rounded-full bg-black text-white z-20 font-bold text-sm">
            Bergabung sekarang
          </button>
        </div>

        {/* SISI KANAN: TAHUN & WADAH BELAJAR */}
        {/* Mobile: Order 3. Desktop: Absolute positioned */}
        <div className="order-3 flex flex-col items-center lg:block lg:absolute lg:right-10 lg:bottom-10 lg:items-end mt-10 lg:mt-0">
          {/* Card Tahun */}
          <div className="bg-[#FFFFFF66] w-70 backdrop-blur-md p-3 rounded-2xl border border-white/30 flex flex-col gap-2 shadow-sm relative lg:self-end lg:absolute lg:bottom-39 lg:left-18 animate-floating">
            <div className="flex gap-1 justify-center lg:justify-start">
              <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-white text-xl">
                <img src={ISG} className="h-7" alt="" />
              </div>
              <div className=" h-9 w-9 bg-white rounded-full flex items-center justify-center text-white text-xl">
                <img src={DLSU} className="h-7" alt="" />
              </div>
            </div>
            <p className="text-[13px] font-bold text-center lg:text-left">
              Komunitas ISG (informatics study group) Dibentuk pada tahun 2019
            </p>
          </div>

          {/* --- GARIS L-SHAPE KANAN (HANYA MUNCUL DI DESKTOP / lg:flex) --- */}
          <div className="hidden lg:flex mr-50">
            <div className="mr- h-30 w-15 border-l-2 border-t-2 border-black/20 rounded-tl-xl mt-[-5px]"></div>
            <div className=" h-13 w-15 border-l-2 border-black/20 mt-[-29px]"></div>
          </div>

          {/* Deskripsi Bawah */}
          <div className="mt-4 lg:mt-1 lg:mr-18">
            <p className="text-[16px] font-bold max-w-[250px] leading-tight text-center lg:text-left">
              Wadah Belajar untuk Mahasiswa Prodi Teknik Informatika di UKDLSM
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Beranda;