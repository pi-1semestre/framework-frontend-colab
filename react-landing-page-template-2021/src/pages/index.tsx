import React from 'react';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Features from '../components/Features';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Pricing from '../components/Pricing';
import Product from '../components/Product';

const App = () => {
  return (
    <div className="bg-background grid gap-y-16 overflow-hidden">
      <div className="relative bg-primary border-b-4 border-border">
        <div className="max-w-7xl mx-auto">
          <Header />
          <div className="grid items-center gap-10 px-4 pb-14 pt-10 sm:px-6 sm:pb-20 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:pb-24 lg:pt-16">
            <MainHero />
            <MainHeroImage />
          </div>
        </div>
      </div>
      <LazyShow>
        <>
          <Product />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Features />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <Pricing />
      </LazyShow>
      <LazyShow>
        <>
          <Canvas />
          <About />
        </>
      </LazyShow>
      <Analytics />
    </div>
  );
};

export default App;
