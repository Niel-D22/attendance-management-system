import { Outlet } from "react-router-dom";
import Navbar from "../Components/Public Componnet/Navbar";

export default function PublicLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
