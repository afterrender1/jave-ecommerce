import Image from 'next/image';
import React from 'react';

const heroImages = [
  {
    id: 1,
    src: '/images/mainhero1.png',
    title: 'SUMMER COLLECTION',
    subtitle: 'Light & breezy outfits',
  },
  {
    id: 2,
    src: '/images/mainhero2.png',
    title: 'FORMAL WEAR',
    subtitle: 'Elegant & classy suits',
  },
];

const Hero = () => {
  return (
    <section className="w-full py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {heroImages.map((img) => (
          <div key={img.id} className="relative group">
            <Image
              src={img.src}
              alt={img.title}
              width={800}
              height={1000}
              className="w-full h-auto rounded-lg object-cover "
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
              <div className="backdrop-blur bg-black/20 rounded px-6 py-6 md:px-10 md:py-8 transition-opacity opacity-0 group-hover:opacity-100">
                <p className="text-sm md:text-base tracking-widest uppercase mb-3">
                  {img.subtitle}
                </p>
                <h1 className="text-3xl md:text-5xl font-light transition duration-700 tracking-widest mb-6">
                  {img.title}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
