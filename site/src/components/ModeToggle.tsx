import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function ModeToggle() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Strategy mode is default for root "/" and explicit "/proposal"
  // Site mode is for "/preview" and any sub-pages like "/guide/..."
  const isStrategy = location.pathname === "/" || location.pathname === "/proposal";
  const mode = isStrategy ? "strategy" : "site";

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] flex items-center bg-white/80 backdrop-blur-md border border-slate-200 p-1 rounded-full shadow-xl">
      <Button
        variant={mode === "strategy" ? "default" : "ghost"}
        size="sm"
        className={cn(
          "rounded-full px-6 transition-all duration-300",
          mode === "strategy" ? "bg-slate-900 text-white shadow-md" : "text-slate-500 hover:text-slate-900"
        )}
        onClick={() => navigate("/")}
      >
        Strategy
      </Button>
      <Button
        variant={mode === "site" ? "default" : "ghost"}
        size="sm"
        className={cn(
          "rounded-full px-6 transition-all duration-300",
          mode === "site" ? "bg-slate-900 text-white shadow-md" : "text-slate-500 hover:text-slate-900"
        )}
        onClick={() => navigate("/preview")}
      >
        Site Preview
      </Button>
    </div>
  );
}


