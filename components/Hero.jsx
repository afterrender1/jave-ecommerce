import React from 'react'

const Hero = () => {
  return (
    <>
    
    <section className="w-full relative overflow-hidden flex items-center justify-center">
      {/* Hero Image */}
      <img
        src="/images/heroimg2.png" // Replace with your image path
        alt="Plus size fashion model wearing elegant outfit"
        className="w-full object-cover object-center"
      />

      {/* Overlay Text with backdrop blur */}

    </section>
          <div className="absolute left-120 top-188 z-50 flex flex-col items-center justify-end text-center text-white px-4 pb-0">
        <div className="backdrop-blur bg-black/20 rounded px-6 py-6 md:px-10 md:py-8">
          <p className="text-sm md:text-base tracking-widest uppercase mb-3">
            Discover new collection
          </p>
          <h1 className="text-4xl md:text-6xl font-light tracking-[0.2em] mb-6">
            WEAR THE SUNSHINE
          </h1>
          <div className="flex gap-8 text-white text-sm md:text-base justify-center ">
            <button className="border-b border-white hover:border-gray-300 transition cursor-pointer">
              Shop Dresses
            </button>
            <button className="border-b border-white hover:border-gray-300 transition cursor-pointer">
              Shop Bags
            </button>
          </div>
        </div>
      </div>
    </>

  )
}

export default Hero
