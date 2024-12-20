

import banner from "../public/banner.jpg";
import Image from "next/image";

function Hero() {
  return (
    <main className="relative">
      {/* Background Image */}
      <div className="relative w-full h-[70vh] sm:h-[80vh] lg:h-screen">
        <Image
          src={banner}
          alt="banner"
          layout="fill"
          className="object-cover"
          priority
        />

        {/* Overlay Box */}
        <div className="absolute top-1/4 left-8 md:left-16 lg:left-24 xl:left-32 bg-[rgb(241,227,201)] p-4 sm:p-6 rounded-lg w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 h-auto max-h-[50vh] overflow-hidden shadow-lg">
          {/* Tagline */}
          <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-700">
            New Arrival
          </p>

     
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[rgb(184,142,47)] mt-2">
            Discover Our <br /> New Collection
          </h2>


          <p className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed">
            Explore our latest range of premium furniture designed to elevate
            your space. Crafted with care, our collection blends modern style
            with timeless elegance.
          </p>

      
          <button className="bg-[rgb(184,142,47)] hover:bg-[rgb(160,120,40)] transition-all text-white px-4 py-2 text-xs sm:text-sm md:text-base font-semibold rounded mt-4">
            Buy Now
          </button>
        </div>
      </div>
    </main>
  );
}

export default Hero;
