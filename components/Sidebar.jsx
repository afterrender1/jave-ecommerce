"use client";
import React, { useState } from "react";
import { X, Filter , Menu } from "lucide-react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const categories = [
    "Pakistani",
    "Western",
    "Casual",
    "Formal",
    "Wedding",
    "Accessories",
  ];
  const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = ["Black", "White", "Beige", "Blue", "Pink"];
  const priceRanges = ["Under $50", "$50 - $150", "$150 - $300", "Above $300"];

  return (
    <>
      {/* Toggle Button (visible on all devices) */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-5 left-5 z-50 flex items-center gap-2  text-[#07203a] px-4 py-2 rounded-lg cursor-pointer transition-all duration-300"
      >
       <Menu className="w-5 h-5"/>
      </button>

      {/* Overlay (dark background on open) */}
      {open && (
        <div
          className="fixed inset-0 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-80 bg-white shadow-xl border-r border-gray-100 z-999 transition-transform duration-500 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
          <button
            onClick={() => setOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto h-[calc(100%-64px)] px-6 py-6 space-y-8">
          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
              Categories
            </h3>
            <ul className="space-y-2">
              {categories.map((item, i) => (
                <li key={i}>
                  <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 hover:text-black transition">
                    <input type="checkbox" className="accent-black" />
                    {item}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
              Sizes
            </h3>
            <div className="flex flex-wrap gap-2">
              {sizes.map((s, i) => (
                <button
                  key={i}
                  className="border border-gray-200 px-3 py-1 rounded-md text-sm hover:border-black hover:text-black transition"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
              Colors
            </h3>
            <div className="flex gap-3 flex-wrap">
              {colors.map((c, i) => (
                <button
                  key={i}
                  className="px-3 py-1 border border-gray-200 rounded-full text-sm hover:border-black hover:text-black transition"
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
              Price Range
            </h3>
            <ul className="space-y-2">
              {priceRanges.map((range, i) => (
                <li key={i}>
                  <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 hover:text-black transition">
                    <input type="checkbox" className="accent-black" />
                    {range}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-8">
            <button
              className="flex-1 py-2 rounded-md bg-gray-100 text-gray-700 cursor-pointer hover:bg-gray-200 transition"
              onClick={() => alert("Filters reset")}
            >
              Reset
            </button>
            <button
              className="flex-1 py-2 rounded-md bg-green-200 text-[#07203a] cursor-pointer font-semibold hover:brightness-110 transition"
              onClick={() => setOpen(false)}
            >
              Apply
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
