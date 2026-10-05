import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-w-dark border-b border-gray-800 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold tracking-tighter text-white">
              WAMN<span className="text-w-green">TECH</span>
            </span>
          </div>
          {/* Mega Menu Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="nav-link text-sm font-semibold text-gray-300 hover:text-white uppercase tracking-wider">Products & Services</a>
            <a href="#solutions" className="nav-link text-sm font-semibold text-gray-300 hover:text-white uppercase tracking-wider">Solutions</a>
            <a href="#industries" className="nav-link text-sm font-semibold text-gray-300 hover:text-white uppercase tracking-wider">Industries</a>
            <a href="#support" className="nav-link text-sm font-semibold text-gray-300 hover:text-white uppercase tracking-wider">Support</a>
          </div>
          {/* Action Button */}
          <div className="hidden md:flex">
            <a href="#contact" className="bg-w-green text-black font-bold text-sm px-5 py-2 rounded-sm hover:bg-green-400 transition-colors">GET STARTED</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
