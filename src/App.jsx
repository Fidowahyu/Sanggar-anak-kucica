import React from 'react';
import useInjectStyles from './hooks/useInjectStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Facilities from './components/Facilities';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useInjectStyles();

  return (
    <div className="bg-white text-slate-700 overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Programs />
      <Facilities />
      <Pricing />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}