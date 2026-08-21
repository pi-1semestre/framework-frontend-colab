import React from 'react';

import config from '../config/index.json';

const accentColors = [
  'bg-tertiary',
  'bg-secondary',
  'bg-blue-500',
  'bg-purple-500',
];

const Product = () => {
  const { product } = config;

  return (
    <section
      className="bg-background px-4 py-12 sm:px-6 lg:px-8 lg:py-20"
      id="product"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-widest text-secondary">
            {product.eyebrow}
          </p>
          <h2 className="mt-3 text-4xl font-black uppercase leading-tight text-black sm:text-5xl">
            {product.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            {product.description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {product.items.map((item, index) => (
            <article
              key={item.framework}
              className="group flex min-h-80 flex-col border-2 border-black bg-white shadow-hard transition-transform hover:-translate-y-1"
            >
              <div
                className={`${accentColors[index]} flex items-center justify-between border-b-2 border-black px-6 py-4`}
              >
                <span className="text-3xl font-black">{item.number}</span>
                <span className="border-2 border-black bg-black px-3 py-1 text-xs font-black uppercase tracking-wider text-white">
                  {item.framework}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h3 className="text-2xl font-black uppercase leading-tight text-black sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-gray-600">
                  {item.description}
                </p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Abrir o projeto ${item.title} no GitHub`}
                  className="mt-8 inline-flex items-center justify-between border-t-2 border-black pt-5 text-sm font-black uppercase tracking-wider text-black"
                >
                  <span>Ver código no GitHub</span>
                  <span
                    className="text-2xl transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
