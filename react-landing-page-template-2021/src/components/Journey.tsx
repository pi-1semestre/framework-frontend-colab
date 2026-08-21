import React from 'react';

import config from '../config/index.json';

const stepColors = [
  'bg-tertiary',
  'bg-secondary',
  'bg-blue-500',
  'bg-purple-500',
];

const Journey = () => {
  const { journey } = config;

  return (
    <section
      className="border-y-4 border-black bg-primary px-4 py-14 sm:px-6 lg:px-8 lg:py-24"
      id="journey"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-secondary">
              {journey.eyebrow}
            </p>
            <h2 className="mt-3 text-4xl font-black uppercase leading-tight text-black sm:text-5xl">
              {journey.title}
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-800 lg:justify-self-end">
            {journey.description}
          </p>
        </div>

        <div className="relative mt-14">
          <div
            className="absolute left-0 right-0 top-9 hidden h-1 bg-black xl:block"
            aria-hidden="true"
          />

          <ol className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {journey.items.map((step, index) => (
              <li key={step.number} className="relative flex">
                <article className="flex w-full flex-col border-2 border-black bg-background p-6 shadow-hard">
                  <div className="relative z-10 flex items-center justify-between gap-4">
                    <span
                      className={`${stepColors[index]} flex h-16 w-16 items-center justify-center border-2 border-black text-2xl font-black`}
                    >
                      {step.number}
                    </span>
                    <span className="border-2 border-black bg-black px-3 py-2 text-xs font-black uppercase tracking-wider text-white">
                      {step.label}
                    </span>
                  </div>

                  <h3 className="mt-8 text-2xl font-black uppercase leading-tight text-black">
                    {step.title}
                  </h3>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-gray-600">
                    {step.description}
                  </p>

                  <div className="mt-8 border-t-2 border-black pt-4">
                    <p className="text-xs font-black uppercase tracking-widest text-gray-500">
                      Resultado
                    </p>
                    <p className="mt-1 font-bold text-black">{step.result}</p>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 grid border-2 border-black bg-black text-white sm:grid-cols-3">
          <div className="border-b-2 border-white p-6 text-center sm:border-b-0 sm:border-r-2">
            <strong className="block text-4xl font-black text-tertiary">
              4
            </strong>
            <span className="mt-1 block text-xs font-black uppercase tracking-widest">
              Tecnologias
            </span>
          </div>
          <div className="border-b-2 border-white p-6 text-center sm:border-b-0 sm:border-r-2">
            <strong className="block text-4xl font-black text-secondary">
              4
            </strong>
            <span className="mt-1 block text-xs font-black uppercase tracking-widest">
              Universos
            </span>
          </div>
          <div className="p-6 text-center">
            <strong className="block text-4xl font-black text-primary">
              1
            </strong>
            <span className="mt-1 block text-xs font-black uppercase tracking-widest">
              Coleção
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
