import React, { useState } from "react";
import "./App.css";

const personagens = [
  {
    nome: "Finn",
    apelido: "O humano",
    emoji: "⚔️",
    cor: "#5cc9ee",
    descricao:
      "Finn é um jovem humano aventureiro que vive na Terra de Ooo. Ele é corajoso, divertido e está sempre disposto a ajudar seus amigos.",
  },
  {
    nome: "Jake",
    apelido: "O cão mágico",
    emoji: "🐶",
    cor: "#f5c842",
    descricao:
      "Jake é o melhor amigo e irmão adotivo de Finn. Seu corpo possui poderes mágicos que permitem que ele estique e transforme seu corpo.",
  },
  {
    nome: "Marceline",
    apelido: "A Rainha Vampira",
    emoji: "🎸",
    cor: "#b9a8e8",
    descricao:
      "Marceline é uma vampira roqueira que toca baixo e possui uma das histórias mais profundas e emocionantes da série.",
  },
  {
    nome: "Princesa Jujuba",
    apelido: "Princesa do Reino Doce",
    emoji: "🍬",
    cor: "#ff91bd",
    descricao:
      "A Princesa Jujuba governa o Reino Doce. Ela é extremamente inteligente e possui grande conhecimento científico.",
  },
];

const curiosidades = [
  {
    titulo: "Começou como um curta",
    emoji: "🎬",
    texto:
      "Antes de se tornar uma série, Hora de Aventura surgiu como um curta de animação criado por Pendleton Ward.",
  },
  {
    titulo: "A Terra de Ooo",
    emoji: "🌎",
    texto:
      "A história acontece na Terra de Ooo, um mundo fantástico com vários reinos, criaturas mágicas e lugares misteriosos.",
  },
  {
    titulo: "Temas profundos",
    emoji: "💭",
    texto:
      "Apesar de ser uma animação, a série aborda temas como amadurecimento, amizade, perda, relacionamentos e identidade.",
  },
  {
    titulo: "10 temporadas",
    emoji: "🏆",
    texto:
      "A série original teve 10 temporadas e foi exibida entre 2010 e 2018.",
  },
];

function App() {
  const [personagemSelecionado, setPersonagemSelecionado] = useState(null);

  function mostrarPersonagem(personagem) {
    if (personagemSelecionado === personagem.nome) {
      setPersonagemSelecionado(null);
    } else {
      setPersonagemSelecionado(personagem.nome);
    }
  }

  function irPara(id) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div className="app">

      {/* MENU */}
      <header className="navbar">
        <div className="logo">
          <span>HORA DE</span>
          <strong>AVENTURA</strong>
        </div>

        <nav>
          <button onClick={() => irPara("sobre")}>
            Sobre
          </button>

          <button onClick={() => irPara("personagens")}>
            Personagens
          </button>

          <button onClick={() => irPara("curiosidades")}>
            Curiosidades
          </button>

          <button onClick={() => irPara("criador")}>
            Criador
          </button>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">

        <div className="hero-text">

          <span className="tag">
            UMA AVENTURA INCRÍVEL
          </span>

          <h1>
            Hora de
            <br />
            <span>Aventura!</span>
          </h1>

          <p>
            Entre na Terra de Ooo e conheça Finn, Jake,
            seus amigos e todas as aventuras que fizeram
            de Hora de Aventura uma das animações mais
            marcantes do Cartoon Network.
          </p>

          <div className="buttons">

            <button
              className="button-primary"
              onClick={() => irPara("sobre")}
            >
              Explorar Ooo →
            </button>

            <button
              className="button-secondary"
              onClick={() => irPara("curiosidades")}
            >
              ✨ Curiosidades
            </button>

          </div>

        </div>

      </section>

      {/* SOBRE */}
      <section id="sobre" className="section">

        <div className="section-header">
          <span>01</span>

          <div>
            <small>CONHEÇA A SÉRIE</small>
            <h2>Uma aventura que vai muito além.</h2>
          </div>
        </div>

        <div className="about">

          <div className="about-text">

            <p>
              <strong>Hora de Aventura</strong> é uma série
              de animação criada por{" "}
              <strong>Pendleton Ward</strong>.
            </p>

            <p>
              A história acompanha Finn, um garoto humano,
              e Jake, seu melhor amigo e irmão adotivo,
              enquanto eles exploram a fantástica Terra
              de Ooo.
            </p>

            <p>
              Durante suas aventuras, eles encontram
              princesas, reis, monstros, vampiros,
              cientistas e diversos personagens
              completamente diferentes.
            </p>

            <p>
              Uma das características mais marcantes da
              série é sua capacidade de misturar humor
              absurdo com histórias emocionantes e
              assuntos mais profundos.
            </p>

          </div>

          <div className="stats">

            <div className="stat">
              <strong>2010</strong>
              <span>Estreia</span>
            </div>

            <div className="stat">
              <strong>2018</strong>
              <span>Final da série original</span>
            </div>

            <div className="stat">
              <strong>10</strong>
              <span>Temporadas</span>
            </div>

            <div className="stat">
              <strong>Ooo</strong>
              <span>Terra das aventuras</span>
            </div>

          </div>

        </div>

      </section>

      {/* PERSONAGENS */}
      <section
        id="personagens"
        className="section personagens"
      >

        <div className="section-header">

          <span>02</span>

          <div>
            <small>OS HERÓIS DE OOO</small>
            <h2>Personagens inesquecíveis</h2>
          </div>

        </div>

        <div className="personagem-grid">

          {personagens.map((personagem) => (

            <div
              key={personagem.nome}
              className="personagem-card"
              style={{
                backgroundColor: personagem.cor,
              }}
              onClick={() =>
                mostrarPersonagem(personagem)
              }
            >

              <div className="personagem-emoji">
                {personagem.emoji}
              </div>

              <h3>{personagem.nome}</h3>

              <span>{personagem.apelido}</span>

              {personagemSelecionado === personagem.nome && (
                <p>
                  {personagem.descricao}
                </p>
              )}

              <button>
                {personagemSelecionado === personagem.nome
                  ? "Fechar ↑"
                  : "Saiba mais ↓"}
              </button>

            </div>

          ))}

        </div>

      </section>

      {/* CURIOSIDADES */}
      <section
        id="curiosidades"
        className="section curiosidades"
      >

        <div className="section-header">

          <span>03</span>

          <div>
            <small>VOCÊ SABIA?</small>
            <h2>Curiosidades de Ooo</h2>
          </div>

        </div>

        <div className="curiosidade-grid">

          {curiosidades.map((curiosidade) => (

            <article
              className="curiosidade"
              key={curiosidade.titulo}
            >

              <div className="curiosidade-icon">
                {curiosidade.emoji}
              </div>

              <h3>
                {curiosidade.titulo}
              </h3>

              <p>
                {curiosidade.texto}
              </p>

            </article>

          ))}

        </div>

      </section>

      {/* CRIADOR */}
      <section
        id="criador"
        className="criador"
      >

        <div className="criador-ilustracao">
          ✏️
        </div>

        <div className="criador-texto">

          <span className="tag">
            POR TRÁS DA AVENTURA
          </span>

          <h2>Pendleton Ward</h2>

          <h3>
            Criador de Hora de Aventura
          </h3>

          <p>
            Pendleton Ward é o criador de Hora de
            Aventura e uma das principais figuras por
            trás do desenvolvimento da série.
          </p>

          <p>
            O projeto começou como um curta de animação
            e posteriormente foi transformado em uma
            série para o Cartoon Network.
          </p>

          <div className="creator-facts">

            <div>
              <strong>🎨</strong>
              <span>Animador</span>
            </div>

            <div>
              <strong>✍️</strong>
              <span>Roteirista</span>
            </div>

            <div>
              <strong>🎬</strong>
              <span>Diretor</span>
            </div>

          </div>

        </div>

      </section>

      {/* LINHA DO TEMPO */}
      <section className="section timeline">

        <div className="section-header">

          <span>04</span>

          <div>
            <small>UMA LONGA JORNADA</small>
            <h2>A aventura ao longo dos anos</h2>
          </div>

        </div>

        <div className="timeline-list">

          <div className="timeline-item">

            <strong>2007</strong>

            <div>
              <h3>O curta</h3>

              <p>
                O primeiro curta de Hora de Aventura
                é produzido e apresentado no projeto
                Random! Cartoons.
              </p>
            </div>

          </div>

          <div className="timeline-item">

            <strong>2010</strong>

            <div>
              <h3>A série estreia</h3>

              <p>
                Finn e Jake chegam oficialmente ao
                Cartoon Network.
              </p>
            </div>

          </div>

          <div className="timeline-item">

            <strong>2018</strong>

            <div>
              <h3>O final</h3>

              <p>
                Depois de dez temporadas, a série
                original chega ao seu encerramento.
              </p>
            </div>

          </div>

          <div className="timeline-item">

            <strong>2020+</strong>

            <div>
              <h3>O universo continua</h3>

              <p>
                Novas produções continuam expandindo
                o universo de Hora de Aventura.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer>

        <div>
          <h3>Hora de Aventura</h3>
          <p>Mathematical! ⚔️</p>
        </div>

        <div>
          <small>
            Uma homenagem à série.
          </small>

          <small>
            © Cartoon Network / Warner Bros.
          </small>
        </div>

      </footer>

    </div>
  );
}

export default App;