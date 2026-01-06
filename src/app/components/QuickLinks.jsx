"use client";
import Image from "next/image";
import React from "react";
import nosePin from "../../../public/ring.svg"; // replace with actual images
const categories = [
  { id: 1, name: "Nose Pins", image: nosePin },
  { id: 2, name: "Earrings", image: nosePin },
  { id: 3, name: "Rings", image: nosePin },
  { id: 4, name: "Bracelets", image: nosePin },
  { id: 5, name: "Anklets", image: nosePin },
  { id: 6, name: "Necklaces", image: nosePin },
];

const QuickLinks = () => {
  return (
    <section className="bg-[#F4EAE3] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-gray-600 mb-2">
            Explore Categories
          </p>
          <h2 className="eb text-2xl sm:text-3xl md:text-4xl uppercase tracking-wide">
            Quick Links
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group flex flex-col items-center text-center bg-[#F9F6F2] p-4 sm:p-6 border border-black/10 hover:border-black transition-all duration-300 rounded-md"
            >
              {/* Category Image */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-4">
                <Image
                  src={category.image}
                  alt={category.name}
                  className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Category Name */}
              <h3 className="text-sm sm:text-base font-medium uppercase tracking-wide">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
