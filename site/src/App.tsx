import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LandmarkPage from "./pages/pSEO/LandmarkPage";
import Proposal from "./pages/Proposal";
import ModeToggle from "./components/ModeToggle";
import { ThemeProvider } from "@/components/theme-provider";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ModeToggle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proposal" element={<Proposal />} />
          <Route path="/guide/:slug" element={<LandmarkPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

