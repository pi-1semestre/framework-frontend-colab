import React from 'react';

import config from '../config/index.json';

const visualStyles = ['bg-tertiary', 'bg-white', 'bg-blue-500', 'bg-primary'];

const Features = () => {
  const { features } = config;

  return (
    <section
      className="border-y-4 border-black bg-black px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-24"
      id="features"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-primary">
              {features.eyebrow}
            </p>
            <h2 className="mt-3 text-4xl font-black uppercase leading-tight sm:text-5xl">
              {features.title}
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-300 lg:justify-self-end">
            {features.description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {features.items.map((feature, index) => {
            const accent = visualStyles[index];

            return (
              <article
                key={feature.name}
                className="flex flex-col border-2 border-white bg-background p-6 text-black sm:p-8"
              >
                <div className="flex items-start justify-between gap-5">
                  <div
                    className={`${accent} flex h-20 w-32 flex-shrink-0 items-center justify-center border-2 border-black p-3 shadow-hard`}
                  >
                    <img
                      src={feature.logo}
                      alt={`Logo do ${feature.name}`}
                      className="max-h-12 max-w-full object-contain"
                    />
                  </div>
                  <span className="border-2 border-black px-3 py-2 text-right text-xs font-black uppercase tracking-wider">
                    {feature.role}
                  </span>
                </div>

                <h3 className="mt-8 text-3xl font-black uppercase">
                  {feature.name}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-gray-600">
                  {feature.description}
                </p>

                <div className="mt-7 border-y-2 border-black py-4">
                  <p className="text-xs font-black uppercase tracking-widest text-gray-500">
                    Projeto associado
                  </p>
                  <p className="mt-1 font-bold">{feature.project}</p>
                </div>

                <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                  {feature.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-start gap-2 text-sm font-bold leading-snug"
                    >
                      <span className="text-secondary" aria-hidden="true">
                        +
                      </span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
