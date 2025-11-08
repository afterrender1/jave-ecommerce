"use client";
import Image from "next/image";
import React from "react";

const categories = [
  { name: "Pakistani", image: "/categories/pakistani.png" },
  { name: "Western", image: "/categories/west.png" },
  { name: "Casual", image: "/categories/casual.png" },
  { name: "Formal", image: "/categories/formal.png" },
  { name: "Wedding", image: "/categories/wedding.png" },
];

const Categories = () => {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6 md:gap-8">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer transition transform hover:scale-105"
            >
              <div className="w-32 h-32 md:w-36 md:h-55 mb-3 relative rounded overflow-hidden border-2 border-gray-200">
                <Image
                  height={194} // match w/h for optimization
                  width={194}
                  src={cat.image}
                  alt={cat.name}
                  className="object-cover w-full h-full rounded"
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
  );
};

export default Categories;
