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
          Heróis, amigos, princesas e criaturas que
          tornam a Terra de Ooo um lugar único.
        </p>
      </div>

    </div>


    {/* ==================================================
        PROTAGONISTAS
    ================================================== */}

    <div className="character-category">

      <div className="category-title">

        <div className="category-icon protagonist-icon">
          ⚔️
        </div>

        <div>
          <span>01</span>
          <h3>Protagonistas</h3>
          <p>
            Os grandes aventureiros da Terra de Ooo.
          </p>
        </div>

      </div>


      <div className="character-grid protagonist-grid">

        {/* FINN */}
        <article className="character-card finn-card">

          <div className="character-image">

            <img
              src="https://www.pngkey.com/png/detail/470-4709860_original-finn-character-adventure-time.png"
              alt="Finn, personagem de Hora de Aventura"
            />

          </div>

          <div className="character-content">

            <span className="character-tag">
              HUMANO
            </span>

            <h4>Finn</h4>

            <p>
              Um jovem herói que percorre Ooo em busca
              de aventuras e sempre tenta fazer o que é
              certo.
            </p>

          </div>

          <div className="character-number">
            01
          </div>

        </article>


        {/* JAKE */}
        <article className="character-card jake-card">

          <div className="character-image">

            <img
              src="https://www.pngkey.com/png/detail/246-2469158_png-adventure-time-jake.png"
              alt="Jake, personagem de Hora de Aventura"
            />

          </div>

          <div className="character-content">

            <span className="character-tag">
              CÃO MÁGICO
            </span>

            <h4>Jake</h4>

            <p>
              Melhor amigo e irmão adotivo de Finn.
              Seus poderes permitem que ele estique e
              transforme seu corpo.
            </p>

          </div>

          <div className="character-number">
            02
          </div>

        </article>

      </div>

    </div>


    {/* ==================================================
        PERSONAGENS SECUNDÁRIOS
    ================================================== */}

    <div className="character-category">

      <div className="category-title">

        <div className="category-icon secondary-icon">
          ✨
        </div>

        <div>
          <span>02</span>
          <h3>Personagens secundários</h3>
          <p>
            Amigos, aliados e figuras importantes de Ooo.
          </p>
        </div>

      </div>


      <div className="character-grid secondary-grid">

        {/* MARCELINE */}
        <article className="character-card marceline-card">

          <div className="character-image">

            <img
              src="https://www.pngkey.com/png/detail/989-9897154_adventure-time-stickers-marceline.png"
              alt="Marceline, personagem de Hora de Aventura"
            />

          </div>

          <div className="character-content">

            <span className="character-tag">
              VAMPIRO
            </span>

            <h4>Marceline</h4>

            <p>
              A Rainha dos Vampiros é uma musicista
              apaixonada por rock e uma das personagens
              mais complexas da série.
            </p>

          </div>

          <div className="character-number">
            03
          </div>

        </article>


        {/* PRINCESA JUJUBA */}
        <article className="character-card bubblegum-card">

          <div className="character-image">

            <img
              src="https://www.pngkey.com/png/detail/233-2335727_adventure-time-princess-bubblegum.png"
              alt="Princesa Jujuba"
            />

          </div>

          <div className="character-content">

            <span className="character-tag">
              PRINCESA
            </span>

            <h4>Princesa Jujuba</h4>

            <p>
              Governante do Reino Doce, cientista
              brilhante e uma das figuras mais importantes
              da Terra de Ooo.
            </p>

          </div>

          <div className="character-number">
            04
          </div>

        </article>


        {/* BMO */}
        <article className="character-card bmo-card">

          <div className="character-image">

            <img
              src="https://www.pngkey.com/png/detail/225-2253569_adventure-time-bmo-adventure-time-bimo.png"
              alt="BMO, personagem de Hora de Aventura"
            />

          </div>

          <div className="character-content">

            <span className="character-tag">
              ROBÔ
            </span>

            <h4>BMO</h4>

            <p>
              Um pequeno videogame vivo que mora com
              Finn e Jake e possui uma personalidade
              inocente e divertida.
            </p>

          </div>

          <div className="character-number">
            05
          </div>

        </article>


        {/* PRINCESA DE FOGO */}
        <article className="character-card flame-card">

          <div className="character-image">

            <img
              src="https://www.pngkey.com/png/detail/219-2190277_adventure-time-flame-princess.png"
              alt="Princesa de Fogo"
            />

          </div>

          <div className="character-content">

            <span className="character-tag">
              ELEMENTAL
            </span>

            <h4>Princesa de Fogo</h4>

            <p>
              Uma poderosa elemental de fogo e antiga
              paixão de Finn, com uma personalidade
              forte e independente.
            </p>

          </div>

          <div className="character-number">
            06
          </div>

        </article>

      </div>

    </div>


    {/* ==================================================
        VILÕES
    ================================================== */}

    <div className="character-category villains-category">

      <div className="category-title">

        <div className="category-icon villain-icon">
          ☠️
        </div>

        <div>
          <span>03</span>
          <h3>Vilões</h3>
          <p>
            Aqueles que desafiam os heróis de Ooo.
          </p>
        </div>

      </div>


      <div className="character-grid villain-grid">

        {/* REI GELADO */}
        <article className="character-card ice-card">

          <div className="character-image">

            <img
              src="https://www.pngkit.com/png/detail/219-2190065_image-icekingspecialeyes-wiki-fandom-hora-de-aventura-rey.png"
              alt="Rei Gelado"
            />

          </div>

          <div className="character-content">

            <span className="character-tag">
              REINO GELADO
            </span>

            <h4>Rei Gelado</h4>

            <p>
              Um antigo antagonista que usa uma coroa
              mágica para controlar o gelo e possui uma
              história muito mais triste do que parece.
            </p>

          </div>

          <div className="character-number">
            07
          </div>

        </article>


        {/* LEMONGRAB */}
        <article className="character-card lemon-card">

          <div className="character-image">

            <img
              src="https://www.kindpng.com/picc/m/153-1532943_adventure-time-lemongrab-png-transparent-png.png"
              alt="Lemongrab"
            />

          </div>

          <div className="character-content">

            <span className="character-tag">
              REINO LIMÃO
            </span>

            <h4>Lemongrab</h4>

            <p>
              Um dos personagens mais excêntricos de Ooo,
              conhecido por seu comportamento exagerado
              e pelo famoso "UNACCEPTABLE!".
            </p>

          </div>

          <div className="character-number">
            08
          </div>

        </article>


        {/* GOLB */}
        <article className="character-card golb-card">

          <div className="character-image">

            <img
              src="https://image.pngaaa.com/922/3423922-middle.png"
              alt="GOLB"
            />

          </div>

          <div className="character-content">

            <span className="character-tag">
              ENTIDADE CÓSMICA
            </span>

            <h4>GOLB</h4>

            <p>
              Uma entidade cósmica extremamente poderosa,
              associada ao caos e à destruição.
            </p>

          </div>

          <div className="character-number">
            09
          </div>

        </article>

      </div>

    </div>

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