import React from "react";
import Link from "next/link";
import { Menu, Search, HelpCircle, User, Handbag } from "lucide-react";
import { Poppins, Libre_Barcode_128 } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const libreBarcode = Libre_Barcode_128({
  variable: "--font-libre-barcode",
  subsets: ["latin"],
  weight: ["400"],
});

export default function Navbar() {
  return (
    <header className="backdrop-blur-md bg-transparent">
      <div className="mx-20 px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* LEFT: Menu + Brand */}
          <div className="flex items-center gap-4">
            {/* Menu icon (visible only on mobile) */}
            <button className="flex  h-10 w-10 items-center justify-center cursor-pointer text-gray-800 hover:text-gray-600 transition">
              <Menu className="h-70 w-70" />
            </button>

            {/* Brand Name */}
            <Link
              href="/"
              className={`${libreBarcode.variable} text-gray-900 tracking-wide text-[8rem] sm:text-[10rem] md:text-[12rem]`}
              style={{ fontFamily: "Libre Barcode 128" }}
            >
              <h1 className="leading-none">JAVÉ</h1>
            </Link>
          </div>

          {/* RIGHT: Icons and Links */}
          <div className="flex items-center gap-6">
            {/* Search bar (hidden on mobile) */}
            <div className="hidden md:flex items-center border-b border-gray-300 px-4 py-1 text-gray-700">
              <Search className="h-4 w-4 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent w-40 md:w-60 text-sm focus:outline-none placeholder-gray-400"
              />
            </div>

            {/* Help link */}
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
              className="relative flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 transition"
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
