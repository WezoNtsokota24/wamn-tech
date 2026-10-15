import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-bold tracking-tighter text-white block mb-4">
              WAMN<span className="text-[#76B900]">TECH</span>
            </span>
            <p className="text-gray-500 text-sm mb-4 leading-relaxed">Empowering enterprises with cutting-edge software solutions and digital infrastructure.</p>
            <p className="text-gray-400 text-sm">Johannesburg, South Africa</p>
            <p className="text-gray-400 text-sm">info@wamntech.com</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Solutions</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-[#76B900] transition-colors">Application Development</a></li>
              <li><a href="#services" className="hover:text-[#76B900] transition-colors">Website Architecture</a></li>
              <li><a href="#services" className="hover:text-[#76B900] transition-colors">System Upgrades</a></li>
              <li><a href="#services" className="hover:text-[#76B900] transition-colors">Cloud Deployments</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#76B900] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#76B900] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#76B900] transition-colors">Newsroom</a></li>
              <li><a href="#contact" className="hover:text-[#76B900] transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Subscribe</h4>
            <p className="text-gray-500 text-sm mb-4">Get the latest news and tech insights.</p>
            <div className="flex bg-white/[0.05] border border-white/10 rounded-xl overflow-hidden backdrop-blur-md focus-within:border-[#76B900]/50 transition-all">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent border-none text-white px-4 py-3 w-full focus:outline-none text-sm placeholder-gray-500"
              />
              <button className="bg-[#76B900] text-black px-6 font-bold hover:bg-green-400 transition-colors uppercase text-xs tracking-widest">Go</button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-gray-500">
          <p>&copy; 2026 Wamn Technologies. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Acceptable Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
