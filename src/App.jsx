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
  <div className="min-h-screen overflow-x-hidden text-slate-900" style={{paddingTop: '72px', background: 'linear-gradient(180deg, rgba(59,130,246,0.14) 0%, rgba(255,210,63,0.12) 40%, rgba(59,130,246,0.06) 100%)'}}>
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