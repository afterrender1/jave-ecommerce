"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";

// Hero Carousel
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

// Featured Products
const featured = [
  {
    id: 1,
    name: "Silk Embroidered Kurta",
    title: "Handcrafted Detailing",
    price: "$280",
    color: "Emerald Green",
    image: "/products/dress1.png",
    hoverImage: "/products/dress2.png",
  },
  {
    id: 2,
    name: "Linen Summer Blouse",
    title: "Effortless Style",
    price: "$85",
    color: "Off White",
    image: "/products/top1.png",
    hoverImage: "/products/top2.png",
  },
  {
    id: 3,
    name: "Velvet Evening Gown",
    title: "Luxury Edition",
    price: "$450",
    color: "Wine Red",
    image: "/products/dress3.png",
    hoverImage: "/products/dress4.png",
  },
  {
    id: 4,
    name: "Tailored Wool Blazer",
    title: "Refined Silhouette",
    price: "$320",
    color: "Navy Blue",
    image: "/products/suit1.png",
    hoverImage: "/products/suit2.png",
  },
];

const WomenPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const nextSlide = () => setCurrentIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));

  return (
    <>
      <Navbar />

      {/* HERO SECTION (smaller height) */}
      <section
        className="relative h-[80vh] flex items-center justify-center overflow-hidden"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {heroImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src={img.src} alt={img.title} fill className="object-cover brightness-[0.85]" />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/20" />
          </div>
        ))}

        {/* Hero Text */}
        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
          <p className="text-sm md:text-lg uppercase mb-2 flex items-center justify-center gap-2 opacity-90">
            <Sparkles className="w-4 h-4" /> New Season Arrival
          </p>
          <h1 className="text-4xl md:text-6xl font-light mb-3">{heroImages[currentIndex].title}</h1>
          <p className="text-lg md:text-xl text-gray-200">{heroImages[currentIndex].subtitle}</p>
        </div>

        {/* Controls */}
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
      </section>

      {/* SHOP BY CATEGORY */}
      <section className="py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6 md:gap-35 ">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer "
            >
              <div className="w-32 h-32 md:w-60 md:h-110 mb-3 relative rounded overflow-hidden border-2 border-gray-200">
                <Image
                  height={194} // match w/h for optimization
                  width={194}
                  src={cat.image}
                  alt={cat.name}
                  className="object-cover hover:scale-105 transition ease-in-out duration-300 w-full h-full rounded"
                />
              </div>
              <p className="text-sm md:text-base font-medium text-gray-700">
                {cat.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      </section>

      {/* FEATURED PIECES (MenSweater style) */}
      <section className="w-full bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-gray-900 mb-14 tracking-wide">
            Featured Pieces
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 cursor-pointer">
            {featured.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded border border-gray-100 bg-white transition-all"
              >
                <div className="relative w-full h-[450px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity group-hover:opacity-0"
                  />
                  <img
                    src={item.hoverImage}
                    alt={`${item.name} hover`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </div>
                <div className="p-6 text-center" style={{ fontFamily: "Poppins" }}>
                  <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-500 mb-1">{item.title}</p>
                  <p className="text-gray-900 font-semibold">{item.price}</p>
                  <p className="text-sm text-gray-400">{item.color}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIMITED TIME OFFERS */}
      <section className="py-20 bg-linear-to-r from-pink-50 to-rose-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            Limited-Time Offers
          </h2>
          <p className="text-gray-600 mb-12">
            Discover stunning styles at exclusive prices — only for this week.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["dress5.png", "top3.png", "bag2.png", "heels1.png"].map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl shadow-md bg-white cursor-pointer hover:scale-105 transition"
              >
                <Image
                  src={`/offers/${img}`}
                  alt="Offer"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER FAVORITES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-10">
            Customer Favorites
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["fav1.png", "fav2.png", "fav3.png", "fav4.png"].map((fav, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition bg-gray-50 cursor-pointer"
              >
                <Image
                  src={`/favorites/${fav}`}
                  alt="Favorite"
                  width={400}
                  height={400}
                  className="object-cover w-full h-[400px]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-400 py-14">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-white mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white">New Arrivals</li>
              <li className="hover:text-white">Best Sellers</li>
              <li className="hover:text-white">Sale</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white">Our Story</li>
              <li className="hover:text-white">Sustainability</li>
              <li className="hover:text-white">Craftsmanship</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white">Contact</li>
              <li className="hover:text-white">Shipping</li>
              <li className="hover:text-white">Returns</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Follow</h3>
            <div className="flex gap-4 text-sm">
              <span className="hover:text-white">Instagram</span>
              <span className="hover:text-white">Pinterest</span>
            </div>
          </div>
        </div>
        <p className="text-center text-xs mt-12 text-gray-600">
          © 2025 Lumière. Crafted with care in Lahore.
        </p>
      </footer>
    </>
  );
};

export default WomenPage;
