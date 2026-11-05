"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const TABS = [
  { id: "background", label: "Background" },
  { id: "second", label: "2nd Year" },
  { id: "third", label: "3rd Year ★★★" },
];

export default function Navbar({ activeTab, onTabChange }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[var(--nav)] backdrop-blur-md border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => onTabChange("background")}
          className="text-white font-extrabold text-lg sm:text-xl tracking-tight shrink-0"
        >
          Marcus Amahan
        </button>

        {/* Desktop tabs */}
        <div className="hidden sm:flex items-center gap-1 flex-wrap justify-center">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="sm:hidden text-white p-2 rounded-md hover:bg-white/10"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile tabs */}
      {open && (
        <div className="sm:hidden border-t border-white/10 bg-[var(--nav)]">
          <div className="flex flex-col px-4 py-3 gap-1">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  onTabChange(tab.id);
                  setOpen(false);
                }}
                className={`tab-btn text-left w-full ${activeTab === tab.id ? "active" : ""}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
