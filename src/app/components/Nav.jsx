// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { Search, ShoppingCart, Menu, X } from "lucide-react";

// const Nav = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="bg-[#F4EAE3] border-b border-[#e5d8cf]">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12">
//         <div className="flex items-center justify-between h-20">
          
//           {/* Logo */}
//           <div className="text-2xl md:text-3xl font-bold tracking-wide">
//             <Link href="/" className="hover:opacity-80 transition">
//               Logo
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center gap-12">
//             <ul className="flex items-center gap-10 text-lg font-medium">
//               <li>
//                 <Link
//                   href="/"
//                   className="relative after:absolute after:w-0 after:h-0.5 after:bg-black after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
//                 >
//                   Shop
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/"
//                   className="relative after:absolute after:w-0 after:h-0.5 after:bg-black after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
//                 >
//                   Contact
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/"
//                   className="relative after:absolute after:w-0 after:h-0.5 after:bg-black after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
//                 >
//                   About
//                 </Link>
//               </li>
//             </ul>

//             {/* Icons */}
//             <div className="flex items-center gap-7">
//               <button className="hover:scale-110 transition">
//                 <Search size={24} />
//               </button>

//               <button className="relative hover:scale-110 transition">
//                 <ShoppingCart size={24} />
//                 <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
//                   2
//                 </span>
//               </button>
//             </div>
//           </div>

//           {/* Mobile Toggle */}
//           <button
//             onClick={() => setOpen(!open)}
//             className="md:hidden hover:scale-110 transition"
//           >
//             {open ? <X size={30} /> : <Menu size={30} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden bg-[#F4EAE3] px-6 pb-6 border-t border-[#e5d8cf]">
//           <ul className="flex flex-col gap-6 text-lg font-medium pt-6">
//             <li>
//               <Link href="/" onClick={() => setOpen(false)}>
//                 Shop
//               </Link>
//             </li>
//             <li>
//               <Link href="/" onClick={() => setOpen(false)}>
//                 Contact
//               </Link>
//             </li>
//             <li>
//               <Link href="/" onClick={() => setOpen(false)}>
//                 About
//               </Link>
//             </li>
//           </ul>

//           <div className="flex gap-8 mt-8">
//             <Search size={24} />
//             <ShoppingCart size={24} />
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Nav;


"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, Menu, X, ChevronDown } from "lucide-react";

const categories = [
  { id: 1, name: "Nose Pins", href: "/category/nose-pins" },
  { id: 2, name: "Earrings", href: "/category/earrings" },
  { id: 3, name: "Rings", href: "/category/rings" },
  { id: 4, name: "Bracelets", href: "/category/bracelets" },
  { id: 5, name: "Anklets", href: "/category/anklets" },
  { id: 6, name: "Necklaces", href: "/category/necklaces" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);

  return (
    <nav className="bg-[#F4EAE3] border-b border-[#e5d8cf] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="text-2xl md:text-3xl font-bold tracking-wide">
            <Link href="/" className="hover:opacity-80 transition">
              Logo
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            <ul className="flex items-center gap-10 text-lg font-medium">
              {/* Category Dropdown */}
              <li className="relative">
                <button
                  onClick={() => setCatOpen(!catOpen)}
                  className="flex items-center gap-1 hover:opacity-80 transition"
                >
                  Categories <ChevronDown size={16} />
                </button>

                {catOpen && (
                  <div className="absolute top-10 left-0 w-48 bg-white shadow-lg border border-gray-200 rounded-md py-2 z-50">
                    {categories.map((cat) => (
                      <Link
                        key={cat.id}
                        href={cat.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                        onClick={() => setCatOpen(false)}
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              {/* Other Links */}
              <li>
                <Link
                  href="/"
                  className="relative after:absolute after:w-0 after:h-0.5 after:bg-black after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="relative after:absolute after:w-0 after:h-0.5 after:bg-black after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="relative after:absolute after:w-0 after:h-0.5 after:bg-black after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
                >
                  About
                </Link>
              </li>
            </ul>

            {/* Icons */}
            <div className="flex items-center gap-7">
              <button className="hover:scale-110 transition">
                <Search size={24} />
              </button>

              <button className="relative hover:scale-110 transition">
                <ShoppingCart size={24} />
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  2
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden hover:scale-110 transition"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#F4EAE3] px-6 pb-6 border-t border-[#e5d8cf]">
          <ul className="flex flex-col gap-6 text-lg font-medium pt-6">
            {/* Categories */}
            <li>
              <button
                onClick={() => setCatOpen(!catOpen)}
                className="flex items-center justify-between w-full"
              >
                Categories <ChevronDown size={16} />
              </button>
              {catOpen && (
                <div className="flex flex-col gap-2 mt-2 pl-4">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={cat.href}
                      className="text-gray-700 hover:underline"
                      onClick={() => setOpen(false)}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            {/* Other Links */}
            <li>
              <Link href="/" onClick={() => setOpen(false)}>
                Shop
              </Link>
            </li>
            <li>
              <Link href="/" onClick={() => setOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/" onClick={() => setOpen(false)}>
                About
              </Link>
            </li>
          </ul>

          <div className="flex gap-8 mt-8">
            <Search size={24} />
            <ShoppingCart size={24} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
