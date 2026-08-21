import React from 'react';

import config from '../config/index.json';

const repositoryUrl =
  'https://github.com/pi-1semestre/framework-frontend-colab';

const About = () => {
  const { company } = config;

  return (
    <footer id="about" className="border-t-4 border-black bg-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 text-center md:flex-row md:text-left">
        <div className="flex items-center gap-4">
          <div
            className="flex border-2 border-white font-black text-2xl"
            aria-hidden="true"
          >
            <span className="bg-white px-2 py-1 text-black">C</span>
            <span className="bg-black px-2 py-1 text-white">N</span>
          </div>

          <div>
            <p className="font-black uppercase tracking-wide">{company.name}</p>
            <p className="mt-1 text-sm text-gray-400">
              Quatro desenhos, quatro frameworks e uma só coleção.
            </p>
          </div>
        </div>

        <a
          href={repositoryUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 border-2 border-white px-5 py-3 font-bold uppercase transition-colors hover:bg-white hover:text-black"
          aria-label="Abrir o repositório do projeto no GitHub"
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 .7a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .7Z" />
          </svg>
          Repositório no GitHub
        </a>
      </div>

      <div className="border-t border-gray-800 px-6 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} {company.name}
      </div>
    </footer>
  );
};

export default About;
