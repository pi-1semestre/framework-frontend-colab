import React from 'react';

const projects = [
  {
    number: '01',
    framework: 'Vue',
    title: 'O Incrível Mundo de Gumball',
    color: 'bg-tertiary',
  },
  {
    number: '02',
    framework: 'Angular',
    title: 'Historietas Assombradas',
    color: 'bg-secondary',
  },
  {
    number: '03',
    framework: 'React',
    title: 'Hora de Aventura',
    color: 'bg-white',
  },
  {
    number: '04',
    framework: 'Next.js',
    title: 'Steven Universo',
    color: 'bg-purple-500',
  },
];

const MainHeroImage = () => {
  return (
    <aside>
      <div
        className="grid gap-3 sm:grid-cols-2"
        aria-label="Os quatro universos da coleção: Gumball, Historietas Assombradas, Hora de Aventura e Steven Universo"
      >
        {projects.map((project) => (
          <article
            key={project.framework}
            className={`${project.color} flex min-h-44 flex-col justify-between border-2 border-black p-5 shadow-hard`}
          >
            <div className="flex items-start justify-between gap-4">
              <span className="text-3xl font-black leading-none">
                {project.number}
              </span>
              <span className="border-2 border-black bg-black px-3 py-1 text-xs font-black uppercase tracking-wider text-white">
                {project.framework}
              </span>
            </div>
            <h2
              className={`mt-10 text-xl font-black uppercase leading-tight ${
                project.framework === 'Next.js' ? 'text-white' : 'text-black'
              }`}
            >
              {project.title}
            </h2>
          </article>
        ))}
      </div>
      <p className="mt-5 text-sm font-bold leading-relaxed">
        Quatro experiências, cada uma construída com uma tecnologia diferente.
      </p>
    </aside>
  );
};

export default MainHeroImage;
