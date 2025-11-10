"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Hero Carousel
const heroImages = [
  { src: "/images/men/menhero1.png", title: "Modern Tailoring", subtitle: "Sharp. Confident. Effortless." },
  { src: "/images/men/menhero2.png", title: "Urban Edge", subtitle: "For the man who leads the way." },
  { src: "/images/men/menhero3.png", title: "Classic Revival", subtitle: "Timeless fits, redefined." },
];

// Categories
const categories = [
  { name: "Eastern", image: "/categories/men-eastern.png" },
  { name: "Western", image: "/categories/men-western.png" },
  { name: "Casual", image: "/categories/men-casual.png" },
  { name: "Formal", image: "/categories/men-formal.png" },
  { name: "Wedding", image: "/categories/men-wedding.png" },
];

// Explore by Style
const explore = [
  // Eastern
  {
    id: 1,
    category: "Eastern",
    name: "Cotton Kurta Set",
    title: "Minimal Aesthetic",
    price: "$120",
    color: "Ivory",
    image: "/images/men/explore/kurta1.png",
    hoverImage: "/images/men/explore/kurta2.png",
  },
  {
    id: 2,
    category: "Eastern",
    name: "Embroidered Kurta",
    title: "Heritage Line",
    price: "$145",
    color: "Deep Olive",
    image: "/images/men/explore/embro1.png",
    hoverImage: "/images/men/explore/embro2.png",
  },

  // Western
  {
    id: 3,
    category: "Western",
    name: "Denim Jacket",
    title: "Everyday Icon",
    price: "$110",
    color: "Washed Blue",
    image: "/images/men/explore/jacket1.png",
    hoverImage: "/images/men/explore/jacket2.png",
  },
  {
    id: 4,
    category: "Western",
    name: "Tailored Blazer",
    title: "Power Cut",
    price: "$230",
    color: "Charcoal Gray",
    image: "/images/men/explore/blazer1.png",
    hoverImage: "/images/men/explore/blazer2.png",
  },

  // Casual
  {
    id: 5,
    category: "Casual",
    name: "Polo Shirt",
    title: "Smart Comfort",
    price: "$60",
    color: "Sky Blue",
    image: "/images/men/explore/polo1.png",
    hoverImage: "/images/men/explore/polo2.png",
  },
  {
    id: 6,
    category: "Casual",
    name: "Linen Pants",
    title: "Relaxed Fit",
    price: "$75",
    color: "Sand",
    image: "/images/men/explore/pants1.png",
    hoverImage: "/images/men/explore/pants2.png",
  },

  // Formal
  {
    id: 7,
    category: "Formal",
    name: "Classic Suit",
    title: "Precision Tailored",
    price: "$380",
    color: "Midnight Black",
    image: "/images/men/explore/suit1.png",
    hoverImage: "/images/men/explore/suit2.png",
  },
  {
    id: 8,
    category: "Formal",
    name: "Double Breasted Blazer",
    title: "Luxury Line",
    price: "$420",
    color: "Navy",
    image: "/images/men/explore/db1.png",
    hoverImage: "/images/men/explore/db2.png",
  },

  // Wedding
  {
    id: 9,
    category: "Wedding",
    name: "Sherwani Set",
    title: "Royal Edit",
    price: "$650",
    color: "Champagne Gold",
    image: "/images/men/explore/sherwani1.png",
    hoverImage: "/images/men/explore/sherwani2.png",
  },
  {
    id: 10,
    category: "Wedding",
    name: "Prince Coat",
    title: "Regal Sophistication",
    price: "$550",
    color: "Ivory Beige",
    image: "/images/men/explore/prince1.png",
    hoverImage: "/images/men/explore/prince2.png",
  },
];

// Featured Pieces
const featured = [
  {
    id: 1,
    name: "Wool Trench Coat",
    title: "Autumn Classic",
    price: "$340",
    color: "Camel",
    image: "/images/men/featured/trench1.png",
    hoverImage: "/images/men/featured/trench2.png",
  },
  {
    id: 2,
    name: "Silk Shirt",
    title: "Luxury Casual",
    price: "$180",
    color: "Off White",
    image: "/images/men/featured/shirt1.png",
    hoverImage: "/images/men/featured/shirt2.png",
  },
  {
    id: 3,
    name: "Tweed Blazer",
    title: "British Edit",
    price: "$290",
    color: "Ash Gray",
    image: "/images/men/featured/tweed1.png",
    hoverImage: "/images/men/featured/tweed2.png",
  },
  {
    id: 4,
    name: "Linen Suit",
    title: "Summer Formal",
    price: "$310",
    color: "Ivory",
    image: "/images/men/featured/linen1.png",
    hoverImage: "/images/men/featured/linen2.png",
  },
];

const MenPage = () => {
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

      {/* HERO SECTION */}
<section
  className="relative h-[90vh] flex items-center justify-center overflow-hidden"
  onMouseEnter={() => setIsAutoPlaying(false)}
  onMouseLeave={() => setIsAutoPlaying(true)}
>
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
              ? "z-20 scale-100 opacity-100"
              : isPrev || isNext
              ? "z-10 scale-90 opacity-80"
              : "z-0 scale-75 opacity-0"
          }`}
          style={{
            transform: isActive
              ? "translateX(0)"
              : isPrev
              ? "translateX(-40%)"
              : isNext
              ? "translateX(40%)"
              : "translateX(0)",
          }}
        >
          <div className="relative w-[60vw] h-[70vh] rounded-2xl overflow-hidden ">
            <Image
              src={img.src}
              alt={img.title}
              fill
              priority
              className="object-contain brightness-[1] transition-transform duration-700"
            />
            <div className="absolute inset-0" />
          </div>
        </div>
      );
    })}
  </div>

  {/* Hero Text */}
  <div className="absolute bottom-16 z-30 text-center text-white px-6 max-w-5xl mx-auto">
    <p className="text-sm md:text-lg uppercase mb-2 flex items-center justify-center gap-2 opacity-90">
      <Sparkles className="w-5 h-5 text-yellow-300" /> The New Gentleman Edit
    </p>
    <h1 className="text-4xl md:text-6xl font-light mb-3 drop-shadow-lg">
      {heroImages[currentIndex].title}
    </h1>
    <p className="text-lg md:text-xl text-black">
      {heroImages[currentIndex].subtitle}
    </p>
  </div>

  {/* Controls */}
 <button
  onClick={prevSlide}
  className="absolute left-10 top-1/2 -translate-y-1/2 
   backdrop-blur-xl 
  p-6 rounded-full hover:scale-110 cursor-pointer transition-all duration-300 
  shadow-[0_0_25px_rgba(255,255,255,0.2)] z-40"
>
  <ChevronLeft className="w-8 h-8 text-black" />
</button>

<button
  onClick={nextSlide}
  className="absolute right-10 top-1/2 -translate-y-1/2 
   backdrop-blur-xl  
  p-6 rounded-full hover:scale-110 cursor-pointer transition-all duration-300 
  shadow-[0_0_25px_rgba(255,255,255,0.2)] z-40"
>
  <ChevronRight className="w-8 h-8 text-black " />
</button>

</section>


      {/* EXPLORE BY STYLE */}
      <section className="w-full bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-gray-900 mb-14 tracking-wide">
            Explore by Style
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 cursor-pointer">
            {explore.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded border border-gray-100 transition-all"
              >
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

      {/* FEATURED PIECES */}
      <section className="w-full bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-gray-900 mb-14 tracking-wide">
            Featured Pieces
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 cursor-pointer">
            {featured.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded border border-gray-100 transition-all"
              >
                <div className="relative w-full h-[450px] overflow-hidden group">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:opacity-0 group-hover:scale-105"
                  />
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

      <Footer />
    </>
  );
};

export default MenPage;
