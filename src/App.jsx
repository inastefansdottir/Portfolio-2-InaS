import { Routes, Route } from "react-router-dom";
import DarkLayout from "./layout/DarkLayout";
import ProjectLayout from "./layout/ProjectLayout";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import HolidazePage from "./pages/HolidazePage";
import BidversePage from "./pages/BidversePage";
import ShopPage from "./pages/ShopPage";
import PetifyPage from "./pages/PetifyPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={
            <DarkLayout logoHidden>
              <HomePage />
            </DarkLayout>
          }
        />

        <Route
          path="/about"
          element={
            <DarkLayout>
              <AboutPage />
            </DarkLayout>
          }
        />

        <Route
          path="/projects/holidaze"
          element={
            <ProjectLayout className="bg-[#558C91]">
              <HolidazePage />
            </ProjectLayout>
          }
        />
        <Route
          path="/projects/bidverse"
          element={
            <ProjectLayout className="bg-[#6666FF]">
              <BidversePage />
            </ProjectLayout>
          }
        />
        <Route
          path="/projects/shop"
          element={
            <ProjectLayout className="bg-[#3B82F6]">
              <ShopPage />
            </ProjectLayout>
          }
        />
        <Route
          path="/projects/petify"
          element={
            <ProjectLayout className="bg-[#A796E3]">
              <PetifyPage />
            </ProjectLayout>
          }
        />
        <Route
          path="/not-found"
          element={
            <ProjectLayout>
              <NotFound />
            </ProjectLayout>
          }
        />
      </Routes>
    </div>
  );
}
