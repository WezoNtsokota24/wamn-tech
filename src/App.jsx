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
    <div className="antialiased selection:bg-[#76B900] selection:text-black bg-black text-gray-200 font-sans">
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
  );
};

export default App;
