import Image from "next/image";
import React from "react";
import flower from "../../../public/heroFlower.svg";
import ring from "../../../public/ring.svg";

const Hero = () => {
  return (
    <section className="relative bg-[#F4EAE3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center min-h-[420px] sm:min-h-[480px] py-16">

          {/* LEFT CONTENT */}
          <div className="relative flex items-center justify-center">
            
            {/* Flower Background */}
            <Image
              src={flower}
              alt="Decorative flower"
              width={360}
              height={360}
              priority
              className="opacity-60 select-none"
            />

            {/* Text Overlay */}
            <div className="absolute text-center">
              <p className="mb-4 text-sm sm:text-base tracking-widest uppercase text-gray-600">
                The hallway opens outward
              </p>

              <h1 className="eb uppercase tracking-wide leading-tight
                text-3xl sm:text-4xl md:text-5xl">
                Unique Jewellery,
                <br />
                Rare Gems, and
                <br />
                Exquisite Pieces!
              </h1>
            </div>
          </div>

          {/* RIGHT IMAGE – SHINING SHOWCASE */}
          <div className="relative mt-12 lg:mt-0 flex justify-center items-center">
            
            {/* Glow Effect */}
            <div className="absolute w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px]
              h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px]
              rounded-full bg-gradient-to-br from-white/70 via-yellow-100/40 to-transparent
              blur-3xl">
            </div>

            {/* Ring Image */}
            <Image
              src={ring}
              alt="Premium jewellery ring"
              priority
              className="
                relative
                w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px]
                h-auto
                drop-shadow-[0_30px_40px_rgba(0,0,0,0.25)]
                transition-transform duration-500
                hover:scale-105
                hover:rotate-1
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
