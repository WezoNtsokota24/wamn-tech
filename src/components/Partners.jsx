import React from 'react';

const Partners = () => {
  const partners = [
    'PBS TOMBSTONE FACTORY',
    'Wealthy Home',
    'GeoTronix',
    'Das Tech'
  ];

  return (
    <section className="w-full bg-white/[0.01] border-y border-white/5 backdrop-blur-md py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-gray-400 tracking-widest text-sm mb-6 uppercase">
          TRUSTED BY INNOVATIVE BRANDS & INSTITUTIONS
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {partners.map((partner) => (
            <span
              key={partner}
              className="text-white/40 text-xl md:text-2xl font-bold font-sans transition-all duration-300 cursor-default hover:text-[#76B900] hover:drop-shadow-[0_0_8px_rgba(118,185,0,0.8)]"
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
