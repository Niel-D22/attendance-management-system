import React from "react";
import { FaCode, FaUserShield, FaRocket, FaLightbulb, FaUsers } from "react-icons/fa";
import { HiOutlineBadgeCheck } from "react-icons/hi";

const Tentang = () => {
  const stats = [
    { label: "Anggota Aktif", value: "150+", icon: <FaUsers /> },
    { label: "Proyek Selesai", value: "25+", icon: <FaCode /> },
    { label: "Prestasi", value: "12", icon: <HiOutlineBadgeCheck /> },
  ];

  const focusArea = [
    {
      title: "Belajar Bersama",
      desc: "Kami mengadakan workshop mingguan dari tingkat dasar hingga mahir.",
      icon: <FaLightbulb className="text-yellow-400" />,
    },
    {
      title: "Proyek Riil",
      desc: "Mengerjakan proyek software nyata untuk membantu digitalisasi kampus.",
      icon: <FaRocket className="text-blue-500" />,
    },
    {
      title: "Keamanan Siber",
      desc: "Edukasi mengenai etika digital dan perlindungan data di era internet.",
      icon: <FaUserShield className="text-red-500" />,
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Section 1: Introduction */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2">Tentang Kami</h2>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Wadah Kolaborasi Mahasiswa <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                Pegiat Teknologi
              </span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Komunitas IT Kampus didirikan untuk menjembatani kesenjangan antara teori akademik 
              dan kebutuhan industri teknologi. Kami percaya bahwa belajar teknologi paling efektif 
              adalah melalui praktik langsung dan kolaborasi tim.
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            {stats.map((item, index) => (
              <div key={index} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center shadow-sm">
                <div className="text-2xl text-blue-600 mb-2">{item.icon}</div>
                <span className="text-3xl font-bold text-gray-800">{item.value}</span>
                <span className="text-gray-500 text-sm text-center font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: What We Do (Cards) */}
      <section className="bg-slate-900 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Apa yang Kami Lakukan?</h2>
            <p className="text-slate-400">Mendorong kreativitas melalui berbagai kegiatan positif.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {focusArea.map((item, index) => (
              <div key={index} className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Visi Misi Sederhana */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <div className="inline-block p-3 bg-blue-100 rounded-full text-blue-600 mb-6">
          <FaRocket className="text-2xl" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Visi Kami</h2>
        <p className="text-2xl text-gray-500 font-light leading-relaxed italic">
          "Menciptakan lingkungan belajar yang inklusif bagi seluruh mahasiswa untuk mengeksplorasi potensi teknologi dan menciptakan dampak sosial melalui inovasi digital."
        </p>
      </section>
    </div>
  );
};

export default Tentang;