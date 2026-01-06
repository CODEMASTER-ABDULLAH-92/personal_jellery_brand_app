"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  MapPin,
  Phone,
  Heart,
  Share2,
  Minus,
  Plus,
  ShieldCheck,
  Truck,
  Gem,
} from "lucide-react";

import ring from "../../../../public/ring.svg";

/* -------------------- PRODUCT DATA -------------------- */
const product = {
  name: "Diamond Halo Ring",
  collection: "Blossom Collection",
  price: "₹1,85,000",
  description:
    "A tribute to timeless sophistication, this Diamond Halo Ring features a brilliant-cut central diamond encircled by a delicate pavé halo. Crafted in 18kt white gold, it reflects the Maison’s heritage of excellence.",
  images: [ring, ring, ring],
  sku: "Q93655",
  details: [
    {
      title: "Product Specifications",
      content:
        "18kt White Gold. Central Diamond: 0.50 cts. Pavé Diamonds: ~0.30 cts. Color: F–G. Clarity: VS.",
    },
    {
      title: "Delivery & Returns",
      content:
        "Complimentary shipping worldwide. Returns accepted within 30 days of delivery.",
    },
    {
      title: "Product Care",
      content:
        "Clean with warm water and a soft brush. Store separately to preserve brilliance.",
    },
  ],
};




/* -------------------- COMPONENT -------------------- */
const ProductDetail = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [openSection, setOpenSection] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);
  const imageRotations = [0, -20, 20, 40];

  return (
    <>
      {/* ---------------- SEO ---------------- */}
      <head>
        <title>{product.name} | Luxury Jewelry</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.description} />
        <meta property="og:type" content="product" />
      </head>

      {/* ---------------- PAGE ---------------- */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white min-h-screen text-[#191919]"
      >
        {/* Breadcrumb */}
        <nav className="px-6 lg:px-12 py-4 text-[10px] uppercase tracking-[0.25em] text-gray-500">
          Home / Jewelry / Rings /{" "}
          <span className="text-black">{product.name}</span>
        </nav>

        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* ---------------- LEFT : IMAGE ---------------- */}
<div className="lg:col-span-7 bg-[#F6F5F3] px-6 py-10 lg:px-20 lg:py-24">
  <div className="sticky top-20">
    {/* Main Image */}
    <motion.div
      key={activeImage}
      initial={{ opacity: 0, rotate: -5, scale: 0.96 }}
      animate={{
        opacity: 1,
        rotate: imageRotations[activeImage],
        scale: 1,
      }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative aspect-square flex items-center justify-center"
    >
      <Image
        src={product.images[0]} // SAME IMAGE
        alt={product.name}
        fill
        priority
        className="object-contain"
      />
    </motion.div>

    {/* Rotation Thumbnails */}
    <div className="flex justify-center gap-4 mt-6">
      {imageRotations.map((rotation, index) => (
        <button
          key={index}
          onClick={() => setActiveImage(index)}
          className={`relative w-16 h-16 border transition ${
            activeImage === index ? "border-black" : "border-gray-300"
          } flex items-center justify-center bg-white`}
        >
          <motion.div
            animate={{ rotate: rotation }}
            transition={{ duration: 0.5 }}
            className="w-full h-full relative"
          >
            <Image
              src={product.images[0]} // SAME IMAGE
              alt="Product view"
              fill
              className="object-contain"
            />
          </motion.div>
        </button>
      ))}
    </div>
  </div>
</div>


          {/* ---------------- RIGHT : DETAILS ---------------- */}
          <div className="lg:col-span-5 px-6 lg:px-16 py-10 lg:py-24">
            {/* Header */}
            <div className="flex justify-between items-start mb-3">
              <span className="text-[11px] uppercase tracking-[0.3em] text-gray-600">
                {product.collection}
              </span>
              <div className="flex gap-4">
                <Share2 className="w-4 h-4 cursor-pointer" />
                <Heart
                  onClick={() => setWishlist(!wishlist)}
                  className={`w-4 h-4 cursor-pointer transition ${
                    wishlist ? "text-red-500" : ""
                  }`}
                />
              </div>
            </div>

            <motion.h1
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-3xl lg:text-4xl font-serif mb-4"
            >
              {product.name}
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-xl font-light mb-6"
            >
              {product.price}
            </motion.p>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-sm text-gray-700 leading-relaxed max-w-md mb-8"
            >
              {product.description}
            </motion.p>

            {/* Quantity */}
            <div className="flex items-center gap-6 mb-8">
              <span className="text-xs uppercase tracking-widest">Quantity</span>
              <div className="flex border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 flex items-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-3 mb-10">
              <button className="w-full bg-[#191919] text-white py-5 text-[12px] uppercase tracking-[0.25em] hover:bg-[#333] transition">
                Add to Cart
              </button>
              <button className="w-full border py-5 text-[12px] uppercase tracking-[0.25em] flex justify-center gap-2 hover:bg-gray-50">
                <MapPin className="w-4 h-4" />
                Find in Store
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <Gem className="w-4 h-4" /> Certified Diamonds
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Secure Payment
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4" /> Free Shipping
              </div>
            </div>

            {/* Contact */}
            <div className="border-t border-b py-6 mb-8">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4" />
                <span>Client Advisor:</span>
                <span className="underline text-gray-500 cursor-pointer">
                  +1.866.VUITTON
                </span>
              </div>
            </div>

            {/* Accordion */}
            <div className="space-y-4">
              {product.details.map((item, index) => (
                <div key={index} className="border-b pb-4">
                  <button
                    onClick={() =>
                      setOpenSection(openSection === index ? null : index)
                    }
                    className="w-full flex justify-between items-center text-[12px] uppercase tracking-widest font-semibold py-2"
                  >
                    {item.title}
                    {openSection === index ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>

                  {openSection === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                        {item.content}
                      </p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-8 text-[11px] text-gray-400">
              SKU: {product.sku}
            </p>
          </div>
        </div>
      </motion.section>
      <div>
        {/* Related Products  */}
      </div>
    </>
  );
};

export default ProductDetail;
