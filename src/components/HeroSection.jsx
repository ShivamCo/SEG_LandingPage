import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const taglines = [
    "Creating creators.",
    "Leading leaders.",
    "Fueling futures."
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gray-900">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/90 via-sky-800/70 to-sky-700/60" />
        <img
          src="/heroBg4.png" // Replace with your actual image path
          alt="Saroj Educational Group Campus"
          className="w-full h-full object-cover object-center opacity-70"
          loading="eager"
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col">
        {/* Header with logo and contacts */}
        <header className="flex justify-between items-center py-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={loaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="w-24 md:w-32 hover:scale-105 transition-transform duration-300"
          >
            <img
              src="/seglogo.png" // Replace with your logo
              alt="Saroj Education Group Logo"
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={loaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-end space-y-1 text-white"
          >
            <ContactLink href="tel:9810054878" text="+91 9810054878" />
            <ContactLink href="tel:9555699988" text="+91 9555699988" />
            <ContactLink 
              href="mailto:admission.cell@seglko.org" 
              text="admission.cell@seglko.org"
              small
            />
          </motion.div>
        </header>

        {/* Main hero content */}
        <div className="flex-grow flex flex-col items-center justify-center text-center py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-xl md:text-2xl font-medium text-blue-200 mb-2">
              Welcome to Saroj Education Group
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
              Excellence in Education
            </h1>
          </motion.div>

          {/* Animated taglines */}
          <div className="space-y-4 md:space-y-6 mb-12">
            {taglines.map((line, index) => (
              <motion.h2
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={loaded ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2 + 0.3
                }}
                className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white"
              >
                {line}
              </motion.h2>
            ))}
          </div>

          
        </div>

        
      </div>
    </section>
  );
};

// Contact Link Component
const ContactLink = ({ href, text, small = false }) => (
  <a
    href={href}
    className={`
      font-medium hover:text-blue-300 transition-colors duration-200
      ${small ? 'text-sm md:text-base' : 'text-base md:text-lg'}
    `}
  >
    {text}
  </a>
);

export default HeroSection;