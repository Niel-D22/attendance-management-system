import { Outlet } from "react-router-dom";
import Navbar from "../Components/Public Componnet/Navbar";

export default function PublicLayout() {
  return (
    <>
      <div className="relative w-full h-full">
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}
