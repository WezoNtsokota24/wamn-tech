import React from 'react';

const Partners = () => {
  const partners = [
    'PBS TOMBSTONE FACTORY',
    'Wealthy Home',
    'GeoTronix',
    'Das Tech'
  ];

  // Duplicate for seamless loop
  const displayPartners = [...partners, ...partners];

  return (
    <section className="w-full bg-white/[0.01] border-y border-white/5 backdrop-blur-md py-12 overflow-hidden">
      <div className="container mx-auto px-4 mb-6">
        <h2 className="text-center text-gray-400 tracking-widest text-sm uppercase">
          TRUSTED BY INNOVATIVE BRANDS & INSTITUTIONS
        </h2>
      </div>
      <div className="flex relative">
        <div className="flex animate-marquee whitespace-nowrap gap-12 md:gap-24 items-center hover:[animation-play-state:paused] motion-reduce:animate-none">
          {displayPartners.map((partner, index) => (
            <span
              key={`${partner}-${index}`}
              className="text-white/40 text-sm md:text-2xl font-bold font-sans uppercase transition-all duration-300 cursor-default hover:text-[#76B900] hover:drop-shadow-[0_0_8px_rgba(118,185,0,0.8)] inline-block px-4"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
