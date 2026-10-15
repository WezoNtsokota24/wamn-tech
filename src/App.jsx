import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Process from './components/Process';
import Estimator from './components/Estimator';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuickConsult from './components/QuickConsult';

const App = () => {
  return (
    <div className="antialiased selection:bg-[#76B900] selection:text-black bg-[#050505] text-gray-200 font-sans min-h-screen relative overflow-x-hidden">
      {/* Ambient Background Glows */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-[#76B900]/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-[#76B900]/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none z-0"></div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <TechStack />
        <Process />
        <Estimator />
        <Team />
        <Contact />
        <Footer />
        <QuickConsult />
      </div>
    </div>
  );
};

export default App;
