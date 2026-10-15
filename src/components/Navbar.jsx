import React, { useState, useEffect } from 'react';
import logo from '../assets/branding/WAMN_TECH_Logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Estimator', href: '#estimator' },
    { name: 'Leadership', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-[#0a0a0a]/75 backdrop-blur-xl border-b border-[#76B900]/30 shadow-[0_8px_30px_rgb(0,0,0,0.6)] py-3'
        : 'bg-black/30 backdrop-blur-md border-b border-white/5 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center group">
              <img src={logo} alt="WAMN TECH Logo" className="h-14 md:h-16 w-auto transition-transform duration-300 group-hover:scale-105" />
              <span className="text-xl md:text-2xl font-bold tracking-wider text-white ml-3 md:ml-4">
                WAMN <span className="text-[#76B900]">TECH</span>
              </span>
            </a>
          </div>

          {/* Desktop navigation links inside a frosted pill container */}
          <div className="hidden md:flex items-center bg-white/[0.03] border border-white/10 rounded-full px-6 py-2 backdrop-blur-md space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-semibold text-gray-300 hover:text-white uppercase tracking-wider transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#76B900] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Action Button (Desktop) */}
          <div className="hidden md:flex">
            <a href="#contact" className="bg-[#76B900] text-black font-bold text-sm px-6 py-2 rounded-full hover:bg-green-400 hover:shadow-[0_0_20px_rgba(118,185,0,0.4)] transition-all duration-300">
              GET STARTED
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown Drawer */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 bg-[#0a0a0a]/90 backdrop-blur-2xl border-b border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-[#76B900] hover:bg-white/5 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center bg-[#76B900] text-black font-bold py-3 rounded-lg mt-4"
          >
            GET STARTED
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
