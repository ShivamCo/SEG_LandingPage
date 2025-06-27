import React from "react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[700px] w-full">
      {/* Background image with all text elements */}
      <div className="absolute w-full inset-0 z-0">
        <img
          src="/heroBg4.png" // This image contains all the ranking text
          alt="Saroj Educational Group Rankings"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Only logo and contact as actual text elements */}
      <div className="relative z-10 h-full flex flex-col justify-between px-6 py-12 sm:px-12 lg:px-24">
        {/* Top Bar - Logo and Contact */}
        <div className="flex justify-between items-start">
          <div>
            <img
              src="/seglogo.png" // Logo image
              alt="Saroj Education Group Logo"
              
              className="h-auto  w-24"
            />
          </div>

          <div className="p-4 text-white text-right">
            <a
              href="tel:9810054878"
              className="text-xl font-bold hover:text-red-500 block"
            >
              +91 9810054878
            </a>
            <a
              href="tel:9555699988"
              className="text-xl font-bold hover:text-red-500 block"
            >
              +91 9555699988
            </a>
            <a
              href="mailto:admission.cell@seglko.org"
              className="text-sm mt-1 hover:text-red-500 block"
            >
              admission.cell@seglko.org
            </a>
          </div>
        </div>

        {/* Empty space where image text will appear naturally */}
        <div className="flex-1"></div>

        {/* Optional: Add something at the bottom if needed */}
        <div className="opacity-0">
          {/* Hidden spacer to maintain layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="p-4"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
