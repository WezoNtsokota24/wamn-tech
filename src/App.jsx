import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import Methodology from './pages/Methodology';
import Company from './pages/Company';
import ContactPage from './pages/ContactPage';
import ClientPortal from './pages/ClientPortal';

const App = () => {
  return (
    <Router>
      <div className="antialiased selection:bg-[#76B900] selection:text-black bg-[#050505] text-gray-200 font-sans min-h-screen relative overflow-x-hidden">
        {/* Ambient Background Glows */}
        <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-[#76B900]/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>
        <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-[#76B900]/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none z-0"></div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/methodology" element={<Methodology />} />
              <Route path="/company" element={<Company />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/portal" element={<ClientPortal />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
