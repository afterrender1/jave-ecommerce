import React from "react";
import Link from "next/link";
import { Menu, Search, HelpCircle, User, Handbag } from "lucide-react";
import { Poppins, Raleway } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Navbar() {
  return (
    <header className="backdrop-blur-md bg-white/40 sticky top-0 z-50 shadow-sm">
      <div className="mx-6 md:mx-50 py-3">
        <nav className="flex items-center justify-between">
          {/* LEFT: Menu + Brand */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu */}
            <button className="flex  h-10 w-10 items-center justify-center text-gray-800 hover:text-gray-600 transition">
              <Menu className="h-8 w-8" />
            </button>

            {/* Brand */}
            <Link
              href="/"
              className="text-gray-900 text-2xl md:text-6xl tracking-tight"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              JAVÉ
            </Link>
          </div>

          {/* RIGHT: Icons and Links */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Search (hidden on mobile) */}
            <div className="hidden md:flex items-center border border-gray-300 rounded-md px-3 py-1 text-gray-700">
              <Search className="h-4 w-4 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent w-32 md:w-48 text-sm focus:outline-none placeholder-gray-400"
              />
            </div>

            {/* Help */}
            <Link
              href="/help"
              className="hidden sm:inline text-sm text-gray-700 hover:text-gray-900 transition"
            >
              HELP
            </Link>

            {/* Login */}
            <Link
              href="/account/login"
              className="text-sm text-gray-700 hover:text-gray-900 transition"
            >
              LOGIN
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900 transition"
            >
              <Handbag className="h-5 w-5" />
              <span className="hidden sm:inline">BAG</span>
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-gray-900 text-[10px] text-white">
                3
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
