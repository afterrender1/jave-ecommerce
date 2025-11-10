"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";

// Hero Carousel
const heroImages = [
  { src: "/images/women/womenhero1.png", title: "Summer Elegance", subtitle: "Light. Airy. Timeless." },
  { src: "/images/women/womenhero2.png", title: "Evening Glow", subtitle: "Dressed in starlight." },
  { src: "/images/women/womenhero3.png", title: "Modern Muse", subtitle: "Bold. Refined. You." },
];

// Categories
const categories = [
  { name: "Pakistani", image: "/categories/pakistani.png" },
  { name: "Western", image: "/categories/west2.png" },
  { name: "Casual", image: "/categories/casual4.png" },
  { name: "Formal", image: "/categories/formal1.png" },
  { name: "Wedding", image: "/categories/wedd.png" },
];

// Featured Products
const featured = [
  {
    id: 1,
    name: "Silk Embroidered Kurta",
    title: "Handcrafted Detailing",
    price: "$280",
    color: "Emerald Green",
    image: "/images/women/d1.png",
    hoverImage: "/images/women/d2.png",
  },
  {
    id: 2,
    name: "Linen Summer Blouse",
    title: "Effortless Style",
    price: "$85",
    color: "Off White",
    image: "/images/women/d3.png",
    hoverImage: "/images/women/d4.png",
  },
  {
    id: 3,
    name: "Velvet Evening Gown",
    title: "Luxury Edition",
    price: "$450",
    color: "Wine Red",
    image: "/images/women/d5.png",
    hoverImage: "/images/women/d6.png",
  },
  {
    id: 4,
    name: "Tailored Wool Blazer",
    title: "Refined Silhouette",
    price: "$320",
    color: "Navy Blue",
    image: "/images/women/d7.png",
    hoverImage: "/images/women/d8.png",
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
  className="relative h-[90vh] flex items-center justify-center overflow-hidden"
  onMouseEnter={() => setIsAutoPlaying(false)}
  onMouseLeave={() => setIsAutoPlaying(true)}
>
  {/* Carousel Container */}
  <div className="relative flex items-center justify-center w-full h-full">
    {heroImages.map((img, idx) => {
      const isActive = idx === currentIndex;
      const isPrev = idx === (currentIndex - 1 + heroImages.length) % heroImages.length;
      const isNext = idx === (currentIndex + 1) % heroImages.length;

      return (
        <div
          key={idx}
          className={`absolute transition-all duration-700 ease-in-out ${
            isActive
              ? "z-30 scale-100 opacity-100"
              : isPrev || isNext
              ? "z-20 scale-90 opacity-90"
              : "z-0 scale-75 opacity-0"
          }`}
          style={{
            transform: isActive
              ? "translateX(0)"
              : isPrev
              ? "translateX(-45%)"
              : isNext
              ? "translateX(45%)"
              : "translateX(0)",
          }}
        >
          <div className="relative w-[58vw] h-[70vh] rounded-2xl overflow-hidden ">
            <Image
              src={img.src}
              alt={img.title}
              fill
              priority
              className={`object-contain transition-transform duration-1200 ease-in-out ${
                isActive ? "scale-100 brightness-[1]" : "scale-90 brightness-[0.8]"
              }`}
            />
            <div className="absolute inset-0 " />
          </div>
        </div>
      );
    })}
  </div>

  {/* Text Overlay */}
  <div className="absolute bottom-16 z-40 text-center text-white px-6 max-w-5xl mx-auto">
    <p className="text-sm md:text-lg uppercase mb-3 flex items-center justify-center gap-2 text-[#ffff] tracking-wide">
      <Sparkles className="w-5 h-5 text-[#48A2FF]" /> The New Gentleman Edit
    </p>
    <h1 className="text-4xl md:text-6xl font-light mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
      {heroImages[currentIndex].title}
    </h1>
    <p className="text-lg md:text-xl text-black font-light">
      {heroImages[currentIndex].subtitle}
    </p>
  </div>

  {/* Navigation Controls */}
  <button
    onClick={prevSlide}
    className="absolute left-10 top-1/2 -translate-y-1/2 
    bg-white/40 backdrop-blur-xl 
    p-7 rounded-full hover:scale-110 cursor-pointer hover:bg-white/60 
    transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.3)] z-50"
  >
    <ChevronLeft className="w-8 h-8 text-black" />
  </button>

  <button
    onClick={nextSlide}
    className="absolute right-10 top-1/2 -translate-y-1/2 
    bg-white/40 backdrop-blur-xl 
    p-7 rounded-full hover:scale-110 cursor-pointer hover:bg-white/60 
    transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.3)] z-50"
  >
    <ChevronRight className="w-8 h-8 text-black" />
  </button>
</section>


      {/* SHOP BY CATEGORY */}
      <section className="py-20 bg-linear-to-b from-gray-50 to-white">
     

      <Categories />
      </section>

    

      {/* CATEGORY COLLECTION SECTION */}
<section className="w-full bg-white py-28">
  <div className="mx-auto max-w-7xl px-6">
    <h2 className="text-3xl md:text-4xl font-serif text-center text-gray-900 mb-14 tracking-wide">
      Explore by Style
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 cursor-pointer">
      {[
        // Pakistani
        {
          id: 1,
          category: "Pakistani",
          name: "Embroidered Lawn Set",
          title: "Traditional Chic",
          price: "$95",
          color: "Ivory & Gold",
          image: "/images/explore/lawnset2.png",
          hoverImage: "/images/explore/lawn.png",
        },
        {
          id: 2,
          category: "Pakistani",
          name: "Handcrafted Kurta",
          title: "Classic Heritage",
          price: "$89",
          color: "Blush Pink",
          image: "/images/explore/handc.png",
          hoverImage: "/images/explore/handc2.png",
        },

        // Western
        {
          id: 3,
          category: "Western",
          name: "Denim Midi Dress",
          title: "Everyday Comfort",
          price: "$79",
          color: "Blue Denim",
          image: "/images/explore/midi.png",
          hoverImage: "/images/explore/midi2.png",
        },
        {
          id: 4,
          category: "Western",
          name: "Blazer Set",
          title: "Effortless Elegance",
          price: "$130",
          color: "Cream",
          image: "/images/explore/blazer.png",
          hoverImage: "/images/explore/blazer2.png",
        },

        // Casual
        {
          id: 5,
          category: "Casual",
          name: "Cotton Top & Jeans",
          title: "Laid-back Look",
          price: "$65",
          color: "Beige",
          image: "/images/explore/ctop.png",
          hoverImage: "/images/explore/ctop2.png",
        },
        {
          id: 6,
          category: "Casual",
          name: "Floral Skirt Set",
          title: "Everyday Bloom",
          price: "$72",
          color: "Soft Floral",
          image: "/images/explore/floral.png",
          hoverImage: "/images/explore/floral2.png",
        },

        // Formal
        {
          id: 7,
          category: "Formal",
          name: "Satin Evening Gown",
          title: "Luxury Edit",
          price: "$210",
          color: "Emerald Green",
          image: "/images/explore/gown.png",
          hoverImage: "/images/explore/gown2.png",
        },
        {
          id: 8,
          category: "Formal",
          name: "Velvet Suit",
          title: "Classic Cut",
          price: "$185",
          color: "Deep Maroon",
          image: "/images/explore/velvet.png",
          hoverImage: "/images/explore/velvet2.png",
        },

        // Wedding
        {
          id: 9,
          category: "Wedding",
          name: "Bridal Lehenga",
          title: "Royal Elegance",
          price: "$450",
          color: "Champagne",
          image: "/images/explore/lehenga.png",
          hoverImage: "/images/explore/lehenga2.png",
        },
        {
          id: 10,
          category: "Wedding",
          name: "Reception Gown",
          title: "Timeless Beauty",
          price: "$399",
          color: "Silver Grey",
          image: "/images/explore/wedd.png",
          hoverImage: "/images/explore/wedd2.png",
        },
      ].map((item) => (
        <div
          key={item.id}
          className="group relative overflow-hidden rounded border border-gray-100 transition-all"
        >
          {/* Image with Hover Animation */}
          <div className="relative w-full h-[450px] overflow-hidden group">
            <img
              src={item.image}
              alt={item.name}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:opacity-0 group-hover:scale-105"
            />
            <img
              src={item.hoverImage}
              alt={`${item.name} hover`}
              className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-100"
            />
          </div>

          {/* Details */}
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
                className="group relative overflow-hidden rounded border border-gray-100  transition-all"
              >
        <div className="relative w-full h-[450px] overflow-hidden group">
  {/* Default Image */}
  <img
    src={item.image}
    alt={item.name}
    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:opacity-0 group-hover:scale-105"
  />

  {/* Hover Image */}
  <img
    src={item.hoverImage}
    alt={`${item.name} hover`}
    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-100"
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

 

      {/* FOOTER */}
      {/* <footer className="bg-gray-950 text-gray-400 py-14">
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
      </footer> */}
      <Footer/>
    </>
  );
};

export default WomenPage;
