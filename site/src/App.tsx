import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import LandmarkPage from "./pages/pSEO/LandmarkPage";
import Proposal from "./pages/Proposal";
import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { IconBook, IconLayout } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

function ModeToggle() {
  const location = useLocation();
  const [mode, setMode] = useState<"strategy" | "site">("strategy");

  // On first load of the root, default to strategy
  useEffect(() => {
    if (location.pathname === "/") {
      setMode("strategy");
    } else {
      setMode("site");
    }
  }, [location.pathname]);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] bg-background/80 backdrop-blur-md border border-border p-1.5 rounded-full shadow-2xl flex items-center gap-1">
      <Button
        variant={mode === "strategy" ? "default" : "ghost"}
        size="sm"
        className={cn("rounded-full px-6 transition-all", mode === "strategy" ? "shadow-lg" : "")}
        onClick={() => {
          setMode("strategy");
          window.location.href = "/proposal";
        }}
      >
        <IconBook className="w-4 h-4 mr-2" />
        THE STRATEGY
      </Button>
      <Button
        variant={mode === "site" ? "default" : "ghost"}
        size="sm"
        className={cn("rounded-full px-6 transition-all", mode === "site" ? "shadow-lg" : "")}
        onClick={() => {
          setMode("site");
          window.location.href = "/";
        }}
      >
        <IconLayout className="w-4 h-4 mr-2" />
        THE SITE
      </Button>
    </div>
  );
}

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

