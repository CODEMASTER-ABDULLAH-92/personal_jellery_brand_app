import Image from "next/image";
import React from "react";
import ring from "../../../public/ring.svg";

const bestSellers = [
  { id: 1, name: "Diamond Halo Ring", price: "₹18,999", image: ring },
  { id: 2, name: "Emerald Cut Ring", price: "₹21,499", image: ring },
  { id: 3, name: "Gold Promise Ring", price: "₹14,999", image: ring },
  { id: 4, name: "Vintage Pearl Ring", price: "₹16,299", image: ring },
  { id: 5, name: "Rose Gold Ring", price: "₹19,999", image: ring },
  { id: 6, name: "Classic Solitaire", price: "₹24,999", image: ring },
  { id: 7, name: "Floral Diamond Ring", price: "₹22,499", image: ring },
  { id: 8, name: "Minimal Gold Band", price: "₹12,999", image: ring },
];

const BestSeller = () => {
  return (
    <section className="bg-[#F4EAE3] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-gray-600 mb-4">
            Timeless Collection
          </p>
          <h2 className="eb text-2xl sm:text-3xl md:text-4xl uppercase tracking-wide">
            Best Sellers
          </h2>
        </div>

        {/* Grid */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-x-8
          gap-y-12
        ">
          {bestSellers.map((product) => (
            <div
              key={product.id}
              className="
                group
                bg-[#F9F6F2]
                border border-black/10
                p-6 sm:p-7
                transition-all duration-500
                hover:border-black
              "
            >
              {/* Image */}
              <div className="relative flex justify-center mb-6 sm:mb-8">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="
                    w-[120px]
                    sm:w-[140px]
                    md:w-[150px]
                    h-auto
                    transition-transform duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Divider */}
              <div className="w-full h-[1px] bg-black/10 mb-4"></div>

              {/* Product Info */}
              <h3 className="text-xs sm:text-sm uppercase tracking-wide mb-2">
                {product.name}
              </h3>

              <p className="text-sm sm:text-base font-medium">
                {product.price}
              </p>

              {/* Hover CTA */}
              <div className="mt-4 overflow-hidden h-5">
                <span
                  className="
                    block text-[10px] sm:text-xs uppercase tracking-widest
                    translate-y-6 opacity-0
                    transition-all duration-500
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  View Details
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BestSeller;
