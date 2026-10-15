import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="antialiased selection:bg-w-green selection:text-black bg-w-dark text-w-light-gray font-sans">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
