import React from 'react';

import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;
  return (
    <main>
      <div className="text-left">
        <p className="mb-5 inline-block border-2 border-black bg-white px-4 py-2 text-xs font-black uppercase tracking-widest shadow-hard">
          {mainHero.eyebrow}
        </p>
        <h1 className="text-5xl tracking-tight font-black uppercase leading-none text-gray-900 sm:text-6xl xl:text-7xl">
          <span className="block">{mainHero.title}</span>{' '}
          <span className="block text-secondary">{mainHero.subtitle}</span>
        </h1>
        <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-gray-800 sm:text-lg md:text-xl">
          {mainHero.description}
        </p>
        <div className="mt-8 sm:flex">
          <div>
            <a
              href={mainHero.primaryAction.href}
              className="w-full flex items-center justify-center border-2 border-black bg-black px-8 py-3 text-base font-black uppercase text-white shadow-hard transition-transform hover:-translate-y-1 md:py-4 md:text-lg md:px-10"
            >
              {mainHero.primaryAction.text}
            </a>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a
              href={mainHero.secondaryAction.href}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center border-2 border-black bg-white px-8 py-3 text-base font-black uppercase text-black shadow-hard transition-transform hover:-translate-y-1 md:py-4 md:text-lg md:px-10"
            >
              {mainHero.secondaryAction.text}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainHero;
