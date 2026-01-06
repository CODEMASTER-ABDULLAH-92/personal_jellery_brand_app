"use client";
import React from "react";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white  border-t border-[#e5d8cf] pt-12 sm:pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-16">

          {/* About / Branding */}
          <div>
            <h3 className="text-lg font-bold uppercase mb-4">Logo</h3>
            <p className="text-sm text-[#AAAAAA]">
              Luxury inspired jewelry for every occasion. Timeless pieces, crafted with care.
            </p>
          </div>

          {/* Quick Links / Categories */}
          <div>
            <h4 className="text-md font-semibold uppercase mb-4">Categories</h4>
            <ul className="flex text-[#AAAAAA] flex-col gap-2 text-sm">
              <li><a href="/category/nose-pins" className="hover:underline">Nose Pins</a></li>
              <li><a href="/category/earrings" className="hover:underline">Earrings</a></li>
              <li><a href="/category/rings" className="hover:underline">Rings</a></li>
              <li><a href="/category/bracelets" className="hover:underline">Bracelets</a></li>
              <li><a href="/category/anklets" className="hover:underline">Anklets</a></li>
              <li><a href="/category/necklaces" className="hover:underline">Necklaces</a></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="text-md font-semibold uppercase mb-4">Support</h4>
            <ul className="flex text-[#AAAAAA] flex-col gap-2 text-sm">
              <li><a href="/faq" className="hover:underline">FAQ</a></li>
              <li><a href="/shipping" className="hover:underline">Shipping</a></li>
              <li><a href="/returns" className="hover:underline">Returns</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter / Socials */}
          <div>
            <h4 className="text-md font-semibold uppercase mb-4">Subscribe</h4>
            <p className="text-sm text-[#AAAAAA] mb-4">Get the latest updates & offers.</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm w-full"
              />
              <button className="bg-black text-white px-4 py-2 rounded-md uppercase text-sm hover:bg-gray-800 transition">
                Subscribe
              </button>
            </form>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-black transition"><Instagram size={20} /></a>
              <a href="#" className="hover:text-black transition"><Facebook size={20} /></a>
              <a href="#" className="hover:text-black transition"><Twitter size={20} /></a>
              <a href="#" className="hover:text-black transition"><Youtube size={20} /></a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-black/10 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Logo. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
