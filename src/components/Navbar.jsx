import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
    { name: 'Home', href: '/' },
    { name: 'Solutions', href: '/services' },
    { name: 'Process', href: '/methodology' },
    { name: 'Leadership', href: '/company' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
      isScrolled
        ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-[#76B900]/30 shadow-[0_8px_30px_rgb(0,0,0,0.6)] py-3'
        : 'bg-black/40 backdrop-blur-md border-b border-white/5 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex justify-between items-center w-full h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center group">
              <img src={logo} alt="WAMN TECH Logo" className="h-14 md:h-16 w-auto transition-transform duration-300 group-hover:scale-105" />
              <span className="text-xl md:text-2xl font-bold tracking-wider text-white ml-3 md:ml-4">
                WAMN <span className="text-[#76B900]">TECH</span>
              </span>
            </Link>
          </div>

          {/* Desktop navigation links inside a frosted pill container */}
          <div className="hidden md:flex items-center bg-white/[0.03] border border-white/10 rounded-full px-6 py-2 backdrop-blur-md space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `relative text-sm font-semibold uppercase tracking-wider transition-colors duration-300 group ${
                    isActive ? 'text-[#76B900]' : 'text-gray-300 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#76B900] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-6 text-white">
            <Link
              to="/portal"
              className="text-xs font-bold text-gray-300 hover:text-white border border-white/20 px-4 py-2 rounded-lg backdrop-blur-md transition-all duration-300 hover:border-[#76B900]/50 hover:bg-white/5"
            >
              CLIENT LOGIN
            </Link>
            <Link to="/contact" className="bg-[#76B900] text-black font-bold text-sm px-6 py-2 rounded-full hover:bg-green-400 hover:shadow-[0_0_20px_rgba(118,185,0,0.4)] transition-all duration-300">
              GET STARTED
            </Link>
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
            <NavLink
              key={link.name}
              to={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-3 text-base font-medium rounded-lg transition-colors ${
                  isActive ? 'text-[#76B900] bg-white/5' : 'text-gray-300 hover:text-[#76B900] hover:bg-white/5'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/portal"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center text-gray-400 font-bold py-3 border border-white/10 rounded-lg mt-4 hover:text-white hover:border-[#76B900]/50 transition-all"
          >
            CLIENT LOGIN
          </Link>
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center bg-[#76B900] text-black font-bold py-3 rounded-lg mt-2"
          >
            GET STARTED
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
