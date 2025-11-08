"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles, Heart, ShoppingBag } from "lucide-react";

// Hero Carousel Images
const heroImages = [
  { src: "/images/h2big.png", title: "Summer Elegance", subtitle: "Light. Airy. Timeless." },
  { src: "/images/heroimg2.png", title: "Evening Glow", subtitle: "Dressed in starlight." },
  { src: "/images/h2side2.png", title: "Modern Muse", subtitle: "Bold. Refined. You." },
];

// Categories
const categories = [
  { name: "Pakistani", image: "/categories/pakistani.png" },
  { name: "Western", image: "/categories/west.png" },
  { name: "Casual", image: "/categories/casual.png" },
  { name: "Formal", image: "/categories/formal.png" },
  { name: "Wedding", image: "/categories/wedding.png" },
];

// Sample Products
const products = [
  { name: "Silk Embroidered Kurta", price: "$280", image: "/products/dress1.png", tag: "New" },
  { name: "Linen Summer Blouse", price: "$85", image: "/products/top1.png", tag: "Bestseller" },
  { name: "Velvet Evening Gown", price: "$450", image: "/products/dress2.png", tag: "Limited" },
  { name: "Leather Crossbody Bag", price: "$180", image: "/products/bag1.png" },
  { name: "Tailored Wool Blazer", price: "$320", image: "/products/suit1.png", tag: "Sale" },
];

const WomenPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full font-sans text-gray-900 antialiased">

      {/* HERO CAROUSEL */}
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Background Image with Parallax Feel */}
        <div className="absolute inset-0 -z-10">
          {heroImages.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                idx === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover brightness-[0.85]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
          <p className="text-sm md:text-lg tracking-widest uppercase mb-3 opacity-90 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" /> New Season Arrival
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wide mb-4">
            {heroImages[currentIndex].title}
          </h1>
          <p className="text-lg md:text-xl font-light tracking-wide mb-8 text-gray-200">
            {heroImages[currentIndex].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition flex items-center gap-2 justify-center">
              Shop Collection <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
            <button className="border border-white/70 px-8 py-4 rounded-full font-medium hover:bg-white/10 backdrop-blur transition">
              Explore Styles
            </button>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/20 transition z-20"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/20 transition z-20"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex ? "bg-white w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-4">Shop by Category</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Curated collections for every mood and moment.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="group cursor-pointer transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative w-full aspect-square mb-4 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
                </div>
                <p className="text-center font-medium text-lg tracking-wide">{cat.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light">Featured Pieces</h2>
            <button className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest hover:gap-3 transition-all">
              View All <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {products.map((prod, index) => (
              <div
                key={index}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {prod.tag && (
                    <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium text-white ${
                      prod.tag === "Sale" ? "bg-red-500" : prod.tag === "New" ? "bg-emerald-500" : "bg-amber-500"
                    }`}>
                      {prod.tag}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
                  <button className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all bg-white p-3 rounded-full shadow-lg">
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-5">
                  <h3 className="font-medium text-lg mb-1">{prod.name}</h3>
                  <p className="text-xl font-light text-gray-700">{prod.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMOTION BANNER */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-rose-50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-light mb-4">The Golden Hour Collection</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Limited-edition pieces crafted with 24K gold thread and hand-embroidered details.
          </p>
          <button className="bg-gradient-to-r from-amber-600 to-rose-600 text-white px-10 py-4 rounded-full font-medium hover:shadow-xl transition-shadow flex items-center gap-2 mx-auto">
            Discover Now <Sparkles className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-4">Stay Inspired</h2>
          <p className="text-gray-400 mb-8">
            Be the first to know about new drops, private sales, and style secrets.
          </p>
          <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-6 py-4 rounded-full bg-gray-800 border border-gray-700 focus:border-amber-500 focus:outline-none transition"
            />
            <button className="bg-amber-500 hover:bg-amber-600 text-gray-900 px-8 py-4 rounded-full font-medium transition">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-white mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition">New Arrivals</li>
              <li className="hover:text-white transition">Best Sellers</li>
              <li className="hover:text-white transition">Sale</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition">Our Story</li>
              <li className="hover:text-white transition">Sustainability</li>
              <li className="hover:text-white transition">Craftsmanship</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition">Contact</li>
              <li className="hover:text-white transition">Shipping</li>
              <li className="hover:text-white transition">Returns</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Follow</h3>
            <div className="flex gap-4 text-sm">
              <span className="hover:text-white transition">Instagram</span>
              <span className="hover:text-white transition">Pinterest</span>
            </div>
          </div>
        </div>
        <p className="text-center text-xs mt-12 text-gray-600">
          © 2025 Lumière. Crafted with care in Lahore.
        </p>
      </footer>
    </div>
  );
};

export default WomenPage;