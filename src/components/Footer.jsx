import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-w-dark pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-bold tracking-tighter text-white block mb-4">
              WAMN<span className="text-w-green">TECH</span>
            </span>
            <p className="text-gray-500 text-sm">Empowering enterprises with cutting-edge software solutions and digital infrastructure.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Solutions</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-w-green transition-colors">Application Development</a></li>
              <li><a href="#" className="hover:text-w-green transition-colors">Website Architecture</a></li>
              <li><a href="#" className="hover:text-w-green transition-colors">System Upgrades</a></li>
              <li><a href="#" className="hover:text-w-green transition-colors">Cloud Deployments</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-w-green transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-w-green transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-w-green transition-colors">Newsroom</a></li>
              <li><a href="#" className="hover:text-w-green transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Subscribe</h4>
            <p className="text-gray-500 text-sm mb-4">Get the latest news and tech insights.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-gray-900 border border-gray-700 text-white px-4 py-2 w-full focus:outline-none focus:border-w-green text-sm"
              />
              <button className="bg-w-green text-black px-4 font-bold hover:bg-green-400 transition-colors">Go</button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2026 Wamn Tech. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
