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
    <nav className="fixed top-0 left-0 w-full z-[999] flex justify-between items-center px-6 py-4 bg-black border-b border-white/10">
      {/* Logo Container */}
      <div className="flex items-center">
        <Link to="/" className="flex items-center group">
          <img
            src={logo}
            alt="WAMN TECH Logo"
            className="h-20 md:h-24 lg:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.href}
            className={({ isActive }) =>
              `relative text-sm font-semibold uppercase tracking-wider transition-colors duration-300 group ${
                isActive ? 'text-w-green' : 'text-white hover:text-w-green'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-w-green transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </>
            )}
          </NavLink>
        ))}
      </div>

      {/* Desktop CTA / Login Button */}
      <div className="hidden md:flex items-center gap-6">
        <Link
          to="/portal"
          className="text-xs font-bold text-white border border-white/20 px-4 py-2 rounded-lg backdrop-blur-md transition-all duration-300 hover:border-w-green/50 hover:bg-white/5"
        >
          CLIENT LOGIN
        </Link>
        <Link to="/contact" className="bg-w-green text-black font-bold text-sm px-6 py-2 rounded-full hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(118,185,0,0.4)] transition-all duration-300">
          GET STARTED
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
      <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="flex md:hidden text-white">
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed top-[70px] left-0 w-full h-screen bg-black/95 backdrop-blur-2xl z-[990] flex flex-col items-center pt-12 gap-8 md:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `text-xl font-semibold uppercase tracking-widest transition-colors duration-300 ${
                  isActive ? 'text-w-green' : 'text-white hover:text-w-green'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/portal"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-bold text-white border border-white/20 px-8 py-3 rounded-lg backdrop-blur-md transition-all duration-300 hover:border-w-green/50 hover:bg-white/5"
          >
            CLIENT LOGIN
          </Link>
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-w-green text-black font-bold text-lg px-10 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            GET STARTED
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
