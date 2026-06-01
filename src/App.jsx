import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import HolidazePage from "./pages/HolidazePage";
import BidversePage from "./pages/Bidverse";
import ShopPage from "./pages/ShopPage";
import PetifyPage from "./pages/PetifyPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects/holidaze" element={<HolidazePage />} />
      <Route path="/projects/bidverse" element={<BidversePage />} />
      <Route path="/projects/shop" element={<ShopPage />} />
      <Route path="/projects/petify" element={<PetifyPage />} />
      <Route path="/not-found" element={<NotFound />} />
    </Routes>
  );
}
