import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ServiceModal from './components/ServiceModal';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services setSelectedService={setSelectedService} />
      <Footer />
      
      <AnimatePresence>
        {selectedService && (
          <ServiceModal 
            service={selectedService} 
            onClose={() => setSelectedService(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
