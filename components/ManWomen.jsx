import React from 'react'

const ManWomen = () => {
  const categories = [
    {
      id: 1,
      title: 'Women',
      image: '/images/women.jpg', // Replace with your image path
      link: '/women',
    },
    {
      id: 2,
      title: 'Men',
      image: '/images/men.jpg', // Replace with your image path
      link: '/men',
    },
  ]

  return (
    <section className="w-full bg-white py-20">
        <div className="text-3xl md:text-4xl font-serif text-center text-gray-900 mb-14 tracking-wide">
            Choose Your Style
        </div>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="group relative block overflow-hidden rounded"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full  object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />

              {/* Centered Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                <h2 className="text-4xl md:text-5xl font-light tracking-[0.2em] uppercase mb-4">
                  {item.title}
                </h2>
                <span className="border-b border-white text-sm tracking-widest uppercase opacity-80 group-hover:opacity-100 transition">
                  Explore Collection
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ManWomen
