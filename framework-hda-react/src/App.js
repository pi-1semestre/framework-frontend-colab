import React, { useState } from "react";
import "./App.css";
import finnImg from "./assets/finn-icon.png";
import jakeImg from "./assets/jake-icon.png";
import marcelineImg from "./assets/marceline-icon.png";
import jujubaImg from "./assets/jujuba-icon.png";
import bmoImg from "./assets/bmo-icon.png";
import fogoImg from "./assets/princesa-de-fogo-icon.png";
import reiGeladoImg from "./assets/rei-gelado-icon.png";
import lemongrabImg from "./assets/lemongrab-icon.png";
import golbImg from "./assets/golb-icon.png";
import pendletonImg from "./assets/pendleton.jpg";

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
      "A história acontece na Terra de Ooo, um mundo fantástico com vários reinos, criaturas mágicas e lugares misteriosos. Apesar de não aparentar, sua origem é bem mais sombria do que parece...",
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
          <button onClick={() => irPara("sobre")}>Sobre</button>

          <button onClick={() => irPara("universo")}>Universo</button>

          <button onClick={() => irPara("personagens")}>Personagens</button>

          <button onClick={() => irPara("curiosidades")}>Curiosidades</button>

          <button onClick={() => irPara("trilha")}>Trilha sonora</button>

          <button onClick={() => irPara("criador")}>Criador</button>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <span className="tag">UMA AVENTURA INCRÍVEL</span>

          <h1>
            Hora de
            <br />
            <span>Aventura!</span>
          </h1>

          <p>
            Entre na Terra de Ooo e conheça Finn, Jake, seus amigos e todas as
            aventuras que fizeram de Hora de Aventura uma das animações mais
            marcantes do Cartoon Network.
          </p>

          <div className="buttons">
            <button className="button-primary" onClick={() => irPara("sobre")}>
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
              <strong>Hora de Aventura</strong> é uma série de animação criada
              por <strong>Pendleton Ward</strong>.
            </p>

            <p>
              A história acompanha Finn, um garoto humano, e Jake, seu melhor
              amigo e irmão adotivo, enquanto eles exploram a fantástica Terra
              de Ooo.
            </p>

            <p>
              Durante suas aventuras, eles encontram princesas, reis, monstros,
              vampiros, cientistas e diversos personagens completamente
              diferentes.
            </p>

            <p>
              Uma das características mais marcantes da série é sua capacidade
              de misturar humor absurdo com histórias emocionantes e assuntos
              mais profundos.
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

      {/* UNIVERSO */}
      <section id="universo" className="universe-section">
        <div className="universe-container">
          {/* CABEÇALHO */}

          <div className="section-header universe-header">
            <span>02</span>

            <div>
              <small>EXPLORE O MUNDO DE OOO</small>

              <h2>
                Um universo muito
                <br />
                <span>maior do que parece.</span>
              </h2>

              <p>
                Por trás das aventuras de Finn e Jake existe um mundo cheio de
                reinos, criaturas, magia, mistérios e histórias escondidas.
              </p>
            </div>
          </div>

          {/* ==================================================
        O MUNDO DE OOO
    ================================================== */}

          <div className="universe-world">
            <div className="universe-world-icon">🌎</div>

            <div className="universe-world-content">
              <span className="universe-label">O MUNDO</span>

              <h3>A Terra de Ooo</h3>

              <p>
                A história de Hora de Aventura acontece principalmente na Terra
                de Ooo, um continente fantástico habitado por humanos, criaturas
                mágicas, monstros e diferentes reinos.
              </p>

              <p>
                Embora pareça um mundo colorido e divertido, Ooo possui uma
                história muito mais profunda. O mundo foi transformado por
                acontecimentos antigos que misturaram elementos de fantasia,
                magia e vestígios de uma civilização anterior.
              </p>
            </div>

            <div className="universe-world-facts">
              <div>
                <strong>OOO</strong>
                <span>Terra das aventuras</span>
              </div>

              <div>
                <strong>♾️</strong>
                <span>Histórias e mistérios</span>
              </div>

              <div>
                <strong>✨</strong>
                <span>Magia e fantasia</span>
              </div>
            </div>
          </div>

          {/* ==================================================
        LUGARES IMPORTANTES
    ================================================== */}

          <div className="universe-block">
            <div className="universe-block-header">
              <span>01</span>

              <div>
                <h3>Lugares importantes</h3>

                <p>
                  Alguns dos lugares mais marcantes encontrados durante as
                  aventuras.
                </p>
              </div>
            </div>

            <div className="places-grid">
              <article className="place-card candy-place">
                <div className="place-icon">🍬</div>

                <div>
                  <span>REINO</span>

                  <h4>Reino Doce</h4>

                  <p>
                    Lar da Princesa Jujuba e de uma grande população formada por
                    habitantes feitos de doces.
                  </p>
                </div>
              </article>

              <article className="place-card ice-place">
                <div className="place-icon">❄️</div>

                <div>
                  <span>REINO</span>

                  <h4>Reino Gelado</h4>

                  <p>
                    Uma região congelada associada ao Rei Gelado e à sua
                    poderosa coroa.
                  </p>
                </div>
              </article>

              <article className="place-card fire-place">
                <div className="place-icon">🔥</div>

                <div>
                  <span>REINO</span>

                  <h4>Reino de Fogo</h4>

                  <p>
                    Um reino habitado por seres de fogo e governado pela
                    Princesa de Fogo.
                  </p>
                </div>
              </article>

              <article className="place-card tree-place">
                <div className="place-icon">🌳</div>

                <div>
                  <span>LAR</span>

                  <h4>Casa na Árvore</h4>

                  <p>
                    O lar de Finn e Jake e um dos lugares mais importantes para
                    as aventuras dos dois.
                  </p>
                </div>
              </article>
            </div>
          </div>

          {/* ==================================================
        ELEMENTOS E CONCEITOS
    ================================================== */}

          <div className="universe-block concepts-block">
            <div className="universe-block-header">
              <span>02</span>

              <div>
                <h3>Elementos e conceitos</h3>

                <p>
                  Ideias que fazem o universo de Hora de Aventura ser tão
                  diferente.
                </p>
              </div>
            </div>

            <div className="concepts-grid">
              <article className="concept-card">
                <div className="concept-number">01</div>

                <div className="concept-icon">✨</div>

                <h4>Magia</h4>

                <p>
                  A magia está presente em praticamente todos os cantos de Ooo,
                  influenciando personagens, objetos e acontecimentos.
                </p>
              </article>

              <article className="concept-card">
                <div className="concept-number">02</div>

                <div className="concept-icon">👑</div>

                <h4>Reinos</h4>

                <p>
                  Ooo é dividido em diferentes territórios, cada um com sua
                  própria cultura, habitantes e governantes.
                </p>
              </article>

              <article className="concept-card">
                <div className="concept-number">03</div>

                <div className="concept-icon">☢️</div>

                <h4>O passado de Ooo</h4>

                <p>
                  Ao longo da série descobrimos que o mundo possui uma história
                  antiga e acontecimentos que ajudam a explicar sua realidade.
                </p>
              </article>

              <article className="concept-card">
                <div className="concept-number">04</div>

                <div className="concept-icon">🧠</div>

                <h4>Amadurecimento</h4>

                <p>
                  Por trás da fantasia existem histórias sobre amizade,
                  identidade, perdas, escolhas e crescimento pessoal.
                </p>
              </article>
            </div>
          </div>

          {/* FRASE FINAL */}

          <div className="universe-quote">
            <span>“</span>

            <p>Em Ooo, praticamente qualquer coisa pode acontecer.</p>

            <small>
              E é justamente isso que torna cada aventura imprevisível.
            </small>
          </div>
        </div>
      </section>

      {/* PERSONAGENS */}
      <section id="personagens" className="characters-section">
        <div className="characters-container">
          {/* CABEÇALHO */}
          <div className="section-header characters-header">
            <span>02</span>

            <div>
              <small>OS HABITANTES DE OOO</small>

              <h2>
                Conheça os personagens
                <br />
                de <span>Hora de Aventura.</span>
              </h2>

              <p>
                Heróis, amigos, princesas e criaturas que tornam a Terra de Ooo
                um lugar único.
              </p>
            </div>
          </div>

          {/* ==================================================
        PROTAGONISTAS
    ================================================== */}

          <div className="character-category">
            <div className="category-title">
              <div className="category-icon protagonist-icon">⚔️</div>

              <div>
                <span>01</span>
                <h3>Protagonistas</h3>
                <p>Os grandes aventureiros da Terra de Ooo.</p>
              </div>
            </div>

            <div className="character-grid protagonist-grid">
              {/* FINN */}
              <article className="character-card finn-card">
                <div className="character-image">
                  <img
                    src={finnImg}
                    alt="Finn, personagem de Hora de Aventura"
                  />
                </div>

                <div className="character-content">
                  <span className="character-tag">HUMANO</span>

                  <h4>Finn</h4>

                  <p>
                    Um jovem herói que percorre Ooo em busca de aventuras e
                    sempre tenta fazer o que é certo.
                  </p>
                </div>

                <div className="character-number">01</div>
              </article>

              {/* JAKE */}
              <article className="character-card jake-card">
                <div className="character-image">
                  <img
                    src={jakeImg}
                    alt="Jake, personagem de Hora de Aventura"
                  />
                </div>

                <div className="character-content">
                  <span className="character-tag">CÃO MÁGICO</span>

                  <h4>Jake</h4>

                  <p>
                    Melhor amigo e irmão adotivo de Finn. Seus poderes permitem
                    que ele estique e transforme seu corpo.
                  </p>
                </div>

                <div className="character-number">02</div>
              </article>
            </div>
          </div>

          {/* ==================================================
        PERSONAGENS SECUNDÁRIOS
    ================================================== */}

          <div className="character-category">
            <div className="category-title">
              <div className="category-icon secondary-icon">✨</div>

              <div>
                <span>02</span>
                <h3>Personagens secundários</h3>
                <p>Amigos, aliados e figuras importantes de Ooo.</p>
              </div>
            </div>

            <div className="character-grid secondary-grid">
              {/* MARCELINE */}
              <article className="character-card marceline-card">
                <div className="character-image">
                  <img
                    src={marcelineImg}
                    alt="Marceline, personagem de Hora de Aventura"
                  />
                </div>

                <div className="character-content">
                  <span className="character-tag">VAMPIRO</span>

                  <h4>Marceline</h4>

                  <p>
                    A Rainha dos Vampiros é uma musicista apaixonada por rock e
                    uma das personagens mais complexas da série.
                  </p>
                </div>

                <div className="character-number">03</div>
              </article>

              {/* PRINCESA JUJUBA */}
              <article className="character-card bubblegum-card">
                <div className="character-image">
                  <img
                    src={jujubaImg}
                    alt="Princesa Jujuba, personagem de Hora de Aventura"
                  />
                </div>

                <div className="character-content">
                  <span className="character-tag">PRINCESA</span>

                  <h4>Princesa Jujuba</h4>

                  <p>
                    Governante do Reino Doce, cientista brilhante e uma das
                    figuras mais importantes da Terra de Ooo.
                  </p>
                </div>

                <div className="character-number">04</div>
              </article>

              {/* BMO */}
              <article className="character-card bmo-card">
                <div className="character-image">
                  <img src={bmoImg} alt="BMO, personagem de Hora de Aventura" />
                </div>

                <div className="character-content">
                  <span className="character-tag">ROBÔ</span>

                  <h4>BMO</h4>

                  <p>
                    Um pequeno videogame vivo que mora com Finn e Jake e possui
                    uma personalidade inocente e divertida.
                  </p>
                </div>

                <div className="character-number">05</div>
              </article>

              {/* PRINCESA DE FOGO */}
              <article className="character-card flame-card">
                <div className="character-image">
                  <img src={fogoImg} alt="Princesa de Fogo" />
                </div>

                <div className="character-content">
                  <span className="character-tag">ELEMENTAL</span>

                  <h4>Princesa de Fogo</h4>

                  <p>
                    Uma poderosa elemental de fogo e antiga paixão de Finn, com
                    uma personalidade forte e independente.
                  </p>
                </div>

                <div className="character-number">06</div>
              </article>
            </div>
          </div>

          {/* ==================================================
        VILÕES
    ================================================== */}

          <div className="character-category villains-category">
            <div className="category-title">
              <div className="category-icon villain-icon">☠️</div>

              <div>
                <span>03</span>
                <h3>Vilões</h3>
                <p>Aqueles que desafiam os heróis de Ooo.</p>
              </div>
            </div>

            <div className="character-grid villain-grid">
              {/* REI GELADO */}
              <article className="character-card ice-card">
                <div className="character-image">
                  <img src={reiGeladoImg} alt="Rei Gelado" />
                </div>

                <div className="character-content">
                  <span className="character-tag">REINO GELADO</span>

                  <h4>Rei Gelado</h4>

                  <p>
                    Um antigo antagonista que usa uma coroa mágica para
                    controlar o gelo e possui uma história muito mais triste do
                    que parece.
                  </p>
                </div>

                <div className="character-number">07</div>
              </article>

              {/* LEMONGRAB */}
              <article className="character-card lemon-card">
                <div className="character-image">
                  <img src={lemongrabImg} alt="Lemongrab" />
                </div>

                <div className="character-content">
                  <span className="character-tag">REINO LIMÃO</span>

                  <h4>Lemongrab</h4>

                  <p>
                    Um dos personagens mais excêntricos de Ooo, conhecido por
                    seu comportamento exagerado e pelo famoso "UNACCEPTABLE!".
                  </p>
                </div>

                <div className="character-number">08</div>
              </article>

              {/* GOLB */}
              <article className="character-card golb-card">
                <div className="character-image">
                  <img src={golbImg} alt="GOLB" />
                </div>

                <div className="character-content">
                  <span className="character-tag">ENTIDADE CÓSMICA</span>

                  <h4>GOLB</h4>

                  <p>
                    Uma entidade cósmica extremamente poderosa, associada ao
                    caos e à destruição.
                  </p>
                </div>

                <div className="character-number">09</div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* CURIOSIDADES */}
      <section id="curiosidades" className="section curiosidades">
        <div className="section-header">
          <span>03</span>

          <div>
            <small>VOCÊ SABIA?</small>
            <h2>Curiosidades de Ooo</h2>
          </div>
        </div>

        <div className="curiosidade-grid">
          {curiosidades.map((curiosidade) => (
            <article className="curiosidade" key={curiosidade.titulo}>
              <div className="curiosidade-icon">{curiosidade.emoji}</div>

              <h3>{curiosidade.titulo}</h3>

              <p>{curiosidade.texto}</p>
            </article>
          ))}
        </div>
      </section>

      {/* TRILHA SONORA */}
      <section id="trilha" className="section soundtrack-section">
        <div className="soundtrack-container">
          {/* CABEÇALHO */}
          <div className="section-header soundtrack-header">
            <span>05</span>

            <div>
              <small>A MÚSICA DE OOO</small>

              <h2>
                Uma aventura que
                <br />
                <span>também se ouve.</span>
              </h2>

              <p>
                A música é uma parte essencial de Hora de Aventura. Entre
                canções divertidas, momentos emocionantes e uma trilha sonora
                cheia de personalidade, cada música ajuda a contar a história de
                Ooo.
              </p>
            </div>
          </div>

          {/* ==================================================
        ABERTURA
    ================================================== */}

          <div className="soundtrack-feature opening-song">
            <div className="song-visual">
              <div className="music-disc">
                <div className="music-disc-center">♪</div>
              </div>

              <span className="song-floating-note">♫</span>
              <span className="song-floating-note second">♪</span>
            </div>

            <div className="song-info">
              <span className="song-tag">ABERTURA</span>

              <h3>Adventure Time</h3>

              <p className="song-description">
                A abertura que acompanha Finn e Jake em suas aventuras pela
                Terra de Ooo. O tema foi criado por Pendleton Ward e conta com
                participação musical de Casey James Basichis.
              </p>

              <div className="song-meta">
                <div>
                  <span>COMPOSIÇÃO</span>
                  <strong>Pendleton Ward</strong>
                </div>

                <div>
                  <span>MÚSICA</span>
                  <strong>Casey James Basichis</strong>
                </div>
              </div>

              <a
                className="music-button"
                href="https://www.youtube.com/watch?v=cvDxko2Zm0Q"
                target="_blank"
                rel="noreferrer"
              >
                ▶ Ouvir abertura
              </a>
            </div>
          </div>

          {/* ==================================================
        ENCERRAMENTO
    ================================================== */}

          <div className="soundtrack-feature ending-song">
            <div className="song-info">
              <span className="song-tag">ENCERRAMENTO</span>

              <h3>Island Song</h3>

              <p className="song-description">
                Também conhecida como “Come Along With Me”, a música de
                encerramento traz um clima muito mais tranquilo e contemplativo
                para finalizar as aventuras.
              </p>

              <div className="song-meta">
                <div>
                  <span>COMPOSIÇÃO</span>
                  <strong>Ashley Eriksson</strong>
                </div>

                <div>
                  <span>ARTISTA</span>
                  <strong>Ashley Eriksson / LAKE</strong>
                </div>
              </div>

              <a
                className="music-button"
                href="https://www.youtube.com/watch?v=Lr0UOKd1dd0"
                target="_blank"
                rel="noreferrer"
              >
                ▶ Ouvir música
              </a>
            </div>

            <div className="song-visual island-visual">
              <div className="island-sun">☀</div>

              <div className="island-water">~ ~ ~ ~</div>

              <div className="island-tree">🌴</div>
            </div>
          </div>

          {/* ==================================================
        MÚSICAS MARCANTES
    ================================================== */}

          <div className="soundtrack-block">
            <div className="soundtrack-block-header">
              <span>01</span>

              <div>
                <h3>Músicas marcantes</h3>

                <p>Algumas das canções que ficaram na memória dos fãs.</p>
              </div>
            </div>

            <div className="songs-grid">
              <article className="song-card song-card-pink">
                <div className="song-card-top">
                  <span>01</span>

                  <div className="mini-music-icon">♪</div>
                </div>

                <h4>Everything Stays</h4>

                <p>
                  Uma das músicas mais emocionantes da série, associada a
                  Marceline e à Princesa Jujuba.
                </p>

                <div className="song-card-footer">
                  <span>Rebecca Sugar</span>

                  <a
                    href="https://www.youtube.com/watch?v=bNnfuvC1LlU"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ▶ Ouvir
                  </a>
                </div>
              </article>

              <article className="song-card song-card-yellow">
                <div className="song-card-top">
                  <span>02</span>

                  <div className="mini-music-icon">♫</div>
                </div>

                <h4>Time Adventure</h4>

                <p>
                  Uma música especial do encerramento da série, com uma
                  atmosfera nostálgica e emocional.
                </p>

                <div className="song-card-footer">
                  <span>Rebecca Sugar</span>

                  <a
                    href="https://www.youtube.com/results?search_query=Adventure+Time+Time+Adventure"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ▶ Ouvir
                  </a>
                </div>
              </article>

              <article className="song-card song-card-purple">
                <div className="song-card-top">
                  <span>03</span>

                  <div className="mini-music-icon">♩</div>
                </div>

                <h4>I'm Just Your Problem</h4>

                <p>
                  Uma das músicas mais conhecidas de Marceline, apresentada no
                  episódio “What Was Missing”.
                </p>

                <div className="song-card-footer">
                  <span>Marceline</span>

                  <a
                    href="https://www.youtube.com/results?search_query=Adventure+Time+Im+Just+Your+Problem"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ▶ Ouvir
                  </a>
                </div>
              </article>

              <article className="song-card song-card-blue">
                <div className="song-card-top">
                  <span>04</span>

                  <div className="mini-music-icon">♪</div>
                </div>

                <h4>Bacon Pancakes</h4>

                <p>
                  Uma das músicas mais simples e memoráveis cantadas por Jake
                  durante a série.
                </p>

                <div className="song-card-footer">
                  <span>Jake</span>

                  <a
                    href="https://www.youtube.com/results?search_query=Adventure+Time+Bacon+Pancakes"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ▶ Ouvir
                  </a>
                </div>
              </article>
            </div>
          </div>

          {/* ==================================================
        COMPOSITORES
    ================================================== */}

          <div className="soundtrack-composers">
            <div className="soundtrack-block-header">
              <span>02</span>

              <div>
                <h3>Compositores</h3>

                <p>Os responsáveis por construir a identidade sonora de Ooo.</p>
              </div>
            </div>

            <div className="composers-grid">
              <article className="composer-card">
                <div className="composer-avatar">♪</div>

                <div>
                  <span>COMPOSITOR</span>

                  <h4>Casey James Basichis</h4>

                  <p>
                    Um dos principais responsáveis pela trilha instrumental e
                    pelo tema musical da série.
                  </p>
                </div>
              </article>

              <article className="composer-card">
                <div className="composer-avatar">♫</div>

                <div>
                  <span>COMPOSITOR</span>

                  <h4>Tim Kiefer</h4>

                  <p>
                    Compositor que trabalhou na música de fundo e em diversas
                    composições ao longo da série.
                  </p>
                </div>
              </article>

              <article className="composer-card">
                <div className="composer-avatar">🎵</div>

                <div>
                  <span>COMPOSITORA</span>

                  <h4>Rebecca Sugar</h4>

                  <p>
                    Escritora e compositora responsável por várias das canções
                    mais marcantes de Hora de Aventura.
                  </p>
                </div>
              </article>

              <article className="composer-card">
                <div className="composer-avatar">🌴</div>

                <div>
                  <span>ARTISTA</span>

                  <h4>Ashley Eriksson</h4>

                  <p>
                    Sua música “Island Song” tornou-se o clássico encerramento
                    de Hora de Aventura.
                  </p>
                </div>
              </article>
            </div>
          </div>

          {/* ==================================================
        FRASE
    ================================================== */}

          <div className="soundtrack-ending">
            <div className="sound-wave">♪ ♫ ♪ ♫ ♪</div>

            <h3>
              Algumas aventuras são lembradas
              <span> pela música.</span>
            </h3>

            <p>E em Ooo, praticamente toda história pode virar uma canção.</p>
          </div>
        </div>
      </section>

      {/* CRIADOR */}
      <section id="criador" className="criador">
        <div className="criador-ilustracao">
          <img
            src={pendletonImg}
            alt="Pendleton Ward, criador de Hora de Aventura"
          />
        </div>

        <div className="criador-texto">
          <span className="tag">POR TRÁS DA AVENTURA</span>

          <h2>Pendleton Ward</h2>

          <h3>Criador de Hora de Aventura</h3>

          <p>
            Pendleton Ward é o criador de Hora de Aventura e uma das principais
            figuras por trás do desenvolvimento da série.
          </p>

          <p>
            O projeto começou como um curta de animação e posteriormente foi
            transformado em uma série para o Cartoon Network.
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
                O primeiro curta de Hora de Aventura é produzido e apresentado
                no projeto Random! Cartoons.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <strong>2010</strong>

            <div>
              <h3>A série estreia</h3>

              <p>Finn e Jake chegam oficialmente ao Cartoon Network.</p>
            </div>
          </div>

          <div className="timeline-item">
            <strong>2018</strong>

            <div>
              <h3>O final</h3>

              <p>
                Depois de dez temporadas, a série original chega ao seu
                encerramento.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <strong>2020+</strong>

            <div>
              <h3>O universo continua</h3>

              <p>
                Novas produções continuam expandindo o universo de Hora de
                Aventura.
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
          <small>Uma homenagem à série.</small>

          <small>© Cartoon Network / Warner Bros.</small>
        </div>
      </footer>
    </div>
  );
}

export default App;
