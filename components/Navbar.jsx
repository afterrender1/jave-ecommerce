import React from "react";
import Link from "next/link";
import {
  Menu,
  Search,
  HelpCircle,
  User,
  ShoppingCart,
  Handbag
} from "lucide-react";
import {Poppins ,  Libre_Barcode_128} from "next/font/google";


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
    <header className="w-full bg-white p-8">
      <div className=" mx-10">
        <nav className="flex items-center justify-between ">

          {/* LEFT: slim vertical bar + brand */}
          <div className="flex items-center gap-4">
            {/* slim left bar with menu icon */}
            <div className="flex h-12 w-12 items-center justify-center rounded-sm  -">
              <Menu className="h-10 w-10 font-light text-gray-700" />
            </div>

            {/* Brand (big, classic) */}
          <Link href="/" className="text-[12rem] text-gray-900" style={{ fontFamily: 'libreBarcode' }}>
  <h1 className="leading-none">JAVÉ</h1>
</Link>
          </div>

          {/* RIGHT: search, help, login, cart */}
          <div className="flex items-center gap-5">
            {/* Search */}
            <div className="hidden md:flex items-center border-gray-200  border-b bg-white px-6 py-2">
              <Search className="mr-2 h-4 w-4 text-gray-500" />
              <input
                aria-label="Search"
                placeholder="Search products, styles..."
                className="w-60 bg-white text-base placeholder-gray-400 outline-none"
              />
            </div>

            {/* Help link */}
            <Link href="/help" className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
                <span className="hidden sm:inline">HELP</span>
            </Link>

            {/* Login */}
            <Link href="/account/login" className="flex items-center gap-2 rounded-md   px-3 py-2 text-sm text-gray-600 ">
                <span>LOGIN</span>
            </Link>

            {/* Cart */}
            <Link href="/cart" className="relative flex items-center gap-2 rounded-md   px-3 py-2 text-sm text-gray-600 ">
                <Handbag className="h-5 w-5" />
                <span className="hidden sm:inline">SHOPPING BAG</span>

                {/* example badge */}
                <span className="absolute -right-2 -top-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-800 text-xs text-white">3</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
