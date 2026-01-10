import CardSwap, {
  Card,
} from "../../Components/Public Componnet/Tentang/CardSwap";
import FallingText from "../../Components/Public Componnet/Tentang/FallingText";
import Lanyard from "../../Components/Public Componnet/Tentang/Lanyard";
import ScrollVelocity from "../../Components/Public Componnet/Tentang/ScrollText";
import { BsTerminal } from "react-icons/bs";
import { LuGlobe } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
import Foto1 from "../../Assets/Foto2/foto1.svg";
import Foto2 from "../../assets/Foto2/foto2.svg";
import Foto3 from "../../assets/Foto2/foto3.svg";

const Tentang = () => {
  return (
    <>
      <div className="relative w-full flex flex-col h-170 bg-black space-y-10 overflow-hidden font-Space">
        <div className="flex items-center justify-center px-30 pt-50">
          {/* --- LAYER 1: LANYARD (Ditaruh di belakang) --- */}
          <div className="absolute inset-0 z-0">
            {/* Kamu bisa atur posisi manual di sini jika ingin digeser */}
            <div className="relative w-full h-full left-90">
              <Lanyard position={[0, 0, 40]} gravity={[0, -40, 0]} />
            </div>
          </div>

          {/* --- LAYER 2: KONTEN TULISAN (Ditaruh di depan) --- */}
          {/* pointer-events-none sangat penting agar mouse bisa "tembus" klik lanyard di belakang tulisan */}
          <div className="relative z-10 w-full h-full pointer-events-none flex items-center">
            <div className="px-8 md:px-20 max-w-4xl pointer-events-auto">
              {/* pointer-events-auto di sini agar tulisan tetap bisa diklik (misal FallingText) */}
              <h1 className="text-white font-bold text-4xl md:text-6xl">
                INFORMATICS <br />
                STUDY GROUP
              </h1>
              <div className="mt-3 w-xl h-60">
                <FallingText trigger="click" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-30  -mt-12 mb-[-3rem]">
        <ScrollVelocity
          texts={["ISG - UKDLSM", "Informatics Study Group"]}
          className="custom-scroll-text text-gray-300 text-5xl "
        />
      </div>

      <div
        className=" bg-black w-ful overflow-hidden flex"
        style={{ height: "720px", position: "relative" }}
      >
        <div className="font-Space text-white w-135 absolute left-50 top-50 ">
          <h1 className="text-5xl">
            Elevate Your Tech Skills, Build Your Future
          </h1>
          <p className="text-xl text-gray-300">
            Komunitas belajar yang interaktif untuk menciptakan mahasiswa yang
            pintar, kreatif, dan saling mendukung di bidang informatika.
          </p>
        </div>
        <CardSwap
          cardDistance={20}
          verticalDistance={75}
          delay={2000}
          pauseOnHover={true}
          width={890}
          height={600}
        >
          <Card className="text-white font-Space text-center p-2 flex flex-col justify-start items-center">
            {/* Header: Sekarang di tengah atas karena items-center dan justify-start */}
            <h3 className="border-b-2 w-60 p-2 border-white flex justify-center items-center gap-2 ">
              <div className="">
                <BsTerminal size={20} />
              </div>
              Fundamental Programing
            </h3>

            {/* Jarak antara header dan gambar */}
            <div className="mt-3 flex justify-center w-full">
              <div className="absolute w-180 top-80 text-left space-y-2">
                <h3 className="text-3xl font-bold">Fundamental Programing</h3>
                <p>
                  Fokus pada penguatan logika dasar menggunakan bahasa
                  JavaScript. Anggota akan mempelajari fundamental pemrograman
                  mulai dari variabel, tipe data, dan operator, hingga struktur
                  kontrol yang lebih kompleks seperti looping dan functions
                  dasar hingga lanjutan.
                </p>
              </div>
              <img
                height={201}
                src={Foto2}
                alt="ISG Project Session"
                className="object-cover"
              />
            </div>
          </Card>

          <Card className="text-white font-Space text-center p-2 flex flex-col justify-start items-center">
            {/* Header: Sekarang di tengah atas karena items-center dan justify-start */}
            <h3 className="border-b-2 w-54 p-2 border-white flex justify-center items-center gap-2 ">
              <div className="">
                <LuGlobe size={20} />
              </div>
              Website Development
            </h3>

            {/* Jarak antara header dan gambar */}
            <div className="mt-3 flex justify-center w-full">
              <div className="absolute w-180 top-80 text-left space-y-2">
                <h3 className="text-3xl font-bold">Website Development</h3>
                <p>
                  Mempelajari ekosistem pengembangan web modern mulai dari
                  struktur HTML, styling dengan CSS, hingga manipulasi DOM.
                  Dilanjutkan dengan implementasi API Dasar menggunakan fetch
                  untuk membangun aplikasi web yang dinamis dan interaktif.
                </p>
              </div>
              <img
                height={201}
                src={Foto3}
                alt="ISG Project Session"
                className="object-cover"
              />
            </div>
          </Card>

          <Card className="text-white font-Space text-center p-2 flex flex-col justify-start items-center">
            {/* Header: Sekarang di tengah atas karena items-center dan justify-start */}
            <h3 className="border-b-2 w-45 p-2 border-white flex justify-center items-center gap-2 ">
              <div className="">
                <FaUsers size={20} />
              </div>
              Project & Sharing
            </h3>

            {/* Jarak antara header dan gambar */}
            <div className="mt-3 flex justify-center w-full">
              <div className="absolute w-180 top-80 text-left space-y-2">
                <h3 className="text-3xl font-bold">Project & Sharing</h3>
                <p>
                  Wadah kolaborasi melalui Sharing Session bersama guest star
                  atau alumni untuk berbagi wawasan industri. Anggota juga
                  ditantang mengimplementasikan ilmu melalui Mini Project
                  Assignment untuk mengasah soft skills dan kreativitas.
                </p>
              </div>
              <img
                height={201}
                src={Foto1}
                alt="ISG Project Session"
                className="object-cover"
              />
            </div>
          </Card>
        </CardSwap>
      </div>
    </>
  );
};

export default Tentang;
