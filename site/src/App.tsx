import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LandmarkPage from "./pages/pSEO/LandmarkPage";
import Proposal from "./pages/Proposal";
import ModeToggle from "./components/ModeToggle";
import { ThemeProvider } from "./components/theme-provider";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[9999]">
          <ModeToggle />
        </div>
        <Routes>
          <Route path="/" element={<Proposal />} />
          <Route path="/preview" element={<Home />} />
          <Route path="/proposal" element={<Proposal />} />
          <Route path="/guide/:slug" element={<LandmarkPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}


