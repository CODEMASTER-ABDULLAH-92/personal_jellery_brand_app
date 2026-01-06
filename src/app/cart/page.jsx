"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Minus,
  Plus,
  Trash2,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";

import ring from "../../../public/ring.svg";

/* ---------------- CART MOCK DATA ---------------- */
const initialCart = [
  {
    id: 1,
    name: "Diamond Halo Ring",
    collection: "Blossom Collection",
    price: 185000,
    image: ring,
    quantity: 1,
  },
];

/* ---------------- COMPONENT ---------------- */
const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCart);

  const updateQuantity = (id, type) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "inc"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 0 : 0;
  const total = subtotal + shipping;

  return (
    <>
      {/* ---------------- SEO ---------------- */}
      <head>
        <title>Shopping Cart | Luxury Jewelry</title>
        <meta
          name="description"
          content="Review your selected luxury jewelry items before checkout."
        />
      </head>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="bg-white min-h-screen text-[#191919]"
      >
        {/* Header */}
        <div className="px-6 lg:px-16 py-10 border-b">
          <h1 className="text-3xl lg:text-4xl font-serif">Shopping Bag</h1>
          <p className="text-xs uppercase tracking-widest text-gray-500 mt-2">
            Review your selections
          </p>
        </div>

        {/* Content */}
        <div className="max-w-[1200px] mx-auto px-6 lg:px-0 grid grid-cols-1 lg:grid-cols-12 gap-12 py-12">
          {/* ---------------- CART ITEMS ---------------- */}
          <div className="lg:col-span-8">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <ShoppingBag className="w-10 h-10 text-gray-400 mb-4" />
                <p className="text-sm text-gray-500">
                  Your shopping bag is empty
                </p>
              </div>
            ) : (
              <AnimatePresence>
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="flex gap-6 py-8 border-b"
                  >
                    {/* Image */}
                    <div className="relative w-32 h-32 bg-[#F6F5F3]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1">
                      <p className="text-[11px] uppercase tracking-widest text-gray-500">
                        {item.collection}
                      </p>
                      <h3 className="text-lg font-serif mb-2">
                        {item.name}
                      </h3>

                      <p className="text-sm mb-4">
                        ₹{item.price.toLocaleString()}
                      </p>

                      {/* Quantity */}
                      <div className="flex items-center gap-4">
                        <div className="flex border">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, "dec")
                            }
                            className="p-2"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 flex items-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, "inc")
                            }
                            className="p-2"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-xs uppercase tracking-widest text-gray-500 hover:text-black flex items-center gap-1"
                        >
                          <Trash2 className="w-4 h-4" />
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Line Total */}
                    <div className="text-right text-sm font-medium">
                      ₹
                      {(item.price * item.quantity).toLocaleString()}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
          </div>

          {/* ---------------- SUMMARY ---------------- */}
          <div className="lg:col-span-4">
            <div className="border p-8 sticky top-24">
              <h2 className="text-lg font-serif mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>

                <div className="flex justify-between text-gray-500">
                  <span>Shipping</span>
                  <span>Complimentary</span>
                </div>

                <div className="border-t pt-4 flex justify-between font-medium">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>

              <button
                disabled={cartItems.length === 0}
                className="mt-8 w-full bg-[#191919] text-white py-4 text-[12px] uppercase tracking-[0.25em] flex items-center justify-center gap-2 hover:bg-[#333] transition disabled:opacity-40"
              >
                Proceed to Checkout
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-gray-500 mt-4 text-center">
                Taxes calculated at checkout
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default CartPage;
