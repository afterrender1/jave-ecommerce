import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Shop Links */}
        <div>
          <h3 className="text-lg font-medium mb-5 tracking-widest uppercase text-gray-200">Shop</h3>
          <ul className="space-y-3">
            {["Dresses", "Bags", "Shoes", "Accessories"].map((item) => (
              <li key={item}>
                <Link
                  href={`/shop/${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-white transition-all relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-white after:transition-all hover:after:w-full"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* About Links */}
        <div>
          <h3 className="text-lg font-medium mb-5 tracking-widest uppercase text-gray-200">About</h3>
          <ul className="space-y-3">
            {["Our Story", "Blog", "Careers"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase().replace(/\s/g, "")}`}
                  className="text-gray-400 hover:text-white transition-all relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-white after:transition-all hover:after:w-full"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Help Links */}
        <div>
          <h3 className="text-lg font-medium mb-5 tracking-widest uppercase text-gray-200">Help</h3>
          <ul className="space-y-3">
            {["FAQ", "Shipping", "Returns", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-white transition-all relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-white after:transition-all hover:after:w-full"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social & Newsletter */}
        <div>
          <h3 className="text-lg font-medium mb-5 tracking-widest uppercase text-gray-200">Follow Us</h3>
          <div className="flex gap-5 mb-5 text-gray-400">
            <Link href="https://instagram.com" target="_blank" className="hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="https://facebook.com" target="_blank" className="hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
          <p className="text-gray-400 text-sm mb-3">Subscribe to our newsletter</p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-black px-5 py-2 rounded-md hover:bg-gray-200 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-10 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} JAVÉ. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
