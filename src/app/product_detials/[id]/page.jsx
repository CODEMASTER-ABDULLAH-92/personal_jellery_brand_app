"use client";
import Image from "next/image";
import React from "react";
import ring from "../../../../public/ring.svg"; // Replace with dynamic image later

const product = {
  name: "Diamond Halo Ring",
  price: "₹18,999",
  description:
    "This exquisite Diamond Halo Ring features a halo of brilliant diamonds surrounding a stunning central stone, crafted in premium gold. Timeless elegance for every occasion.",
  image: ring,
  sku: "LV-RG-001",
};

const ProductDetail = () => {
  return (
    <section className="bg-[#F4EAE3] min-h-screen py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* LEFT – Product Image */}
        <div className="relative flex justify-center">
          {/* Glow / Shine Effect */}
          <div className="absolute w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px] h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] bg-gradient-to-br from-white/70 via-yellow-100/30 to-transparent blur-3xl rounded-full"></div>
          <Image
            src={product.image}
            alt={product.name}
            className="w-[220px] sm:w-[300px] md:w-[360px] lg:w-[420px] h-auto drop-shadow-[0_30px_40px_rgba(0,0,0,0.25)] transition-transform duration-500 hover:scale-105 hover:rotate-1"
          />
        </div>

        {/* RIGHT – Product Details */}
        <div className="flex flex-col justify-start">
          {/* SKU */}
          <p className="text-xs sm:text-sm text-gray-600 tracking-widest mb-2">
            SKU: {product.sku}
          </p>

          {/* Product Title */}
          <h1 className="eb text-2xl sm:text-3xl md:text-4xl uppercase tracking-wide mb-4">
            {product.name}
          </h1>

          {/* Price */}
          <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-6">
            {product.price}
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-700 mb-8 leading-relaxed">
            {product.description}
          </p>

          {/* Add to Cart Button */}
          <button className="w-full sm:w-auto bg-black text-white uppercase tracking-widest py-3 px-6 sm:px-10 text-sm sm:text-base transition-all duration-300 hover:bg-gray-800">
            Add to Cart
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProductDetail;
