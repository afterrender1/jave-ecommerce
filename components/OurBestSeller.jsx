import React from 'react'
import Image from 'next/image' 
import { Poppins } from 'next/font/google'

const poppins = Poppins({
   subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    style: ['normal', 'italic'], 

})

const OurBestSeller = () => {
  const products = [
    {
      id: 1,
      name: 'Linen Summer Dress',
      title: 'Light & Flowy',
      price: '$89',
      color: 'Beige',
      image: '/images/bestseller/l1.png',
      hoverImage: '/images/bestseller/l2.png',
    },
    {
      id: 2,
      name: 'Classic Blazer',
      title: 'Tailored Fit',
      price: '$129',
      color: 'Ivory',
      image: '/images/bestseller/blazer1.png',
      hoverImage: '/images/bestseller/blazer2.png',
    },
    {
      id: 3,
      name: 'Cotton Midi Dress',
      title: 'Soft Texture',
      price: '$99',
      color: 'Olive',
      image: '/images/bestseller/midi1.png',
      hoverImage: '/images/bestseller/midi2.png',
    },
    {
      id: 4,
      name: 'Chic Evening Gown',
      title: 'Elegant Silhouette',
      price: '$159',
      color: 'Black',
      image: '/images/bestseller/chic1.png',
      hoverImage: '/images/bestseller/chec2.png',
    },
  ]

  return (
    <section className="w-full bg-white pt-40">
      <div className="mx-40 px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-serif text-center text-gray-900 mb-14 tracking-wide">
          Our Best Sellers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 cursor-pointer">
          {products.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded border border-gray-100 bg-white transition-all"
            >
              {/* Image wrapper */}
              <div className="relative w-full h-[500px] overflow-hidden">
                {/* Default image */}
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover object-center absolute inset-0 transition-opacity  group-hover:opacity-0"
                />
                {/* Hover image */}
                <Image
                  src={item.hoverImage}
                  alt={`${item.name} hover`}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="absolute inset-0 w-full h-full object-cover opacity-0  transition duration-700  group-hover:opacity-100 group-hover:scale-100"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center" style={{fontFamily : "Poppins"}}>
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
  )
}

export default OurBestSeller
 