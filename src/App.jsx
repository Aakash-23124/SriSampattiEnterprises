import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Banner from './components/Banner';
import Products from './components/Products';
import ColorProfiles from './components/ColorProfiles';
import WhyUs from './components/WhyUs';
import CompanyHistory from './components/CompanyHistory';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Banner />
        <Products />
        <ColorProfiles />
        <WhyUs />
        <CompanyHistory />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
