import { Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import Beranda from "./pages/Public/Beranda";

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Beranda />} />
      </Route>
    </Routes>
  );
}

export default App;
