"use client";

import { useState } from "react";

type Person = "Steven" | "Garnet" | "Ametista" | "Pérola" | "Peridot" | "Lápis";

const people: Person[] = ["Steven", "Garnet", "Ametista", "Pérola", "Peridot", "Lápis"];
const tracks = [
  ["We Are The Crystal Gems", "Steven Universe", "0:26", "Steven"],
  ["Here Comes a Thought", "Steven Universe", "2:58", "Lápis"],
  ["Stronger Than You", "Garnet", "2:52", "Garnet"],
  ["It’s Over, Isn’t It?", "Steven Universe", "2:18", "Pérola"],
  ["Love Like You", "Rebecca Sugar", "2:06", "Ametista"],
] as const;

function Star() { return <span className="star" aria-hidden="true">★</span>; }

function ImageSlot({ label, path, className = "" }: { label: string; path: string; className?: string }) {
  return <div className={`image-slot ${className}`} aria-label={`Espaço para imagem: ${label}`}><span>▧</span><strong>{label}</strong><small>{path}</small></div>;
}

function SectionTitle({ icon, title, action }: { icon: string; title: string; action?: string }) {
  return <div className="card-title"><h2><span>{icon}</span>{title}</h2>{action && <a href="#">{action} →</a>}</div>;
}

export default function Home() {
  const [team, setTeam] = useState<Person[]>(["Steven", "Garnet", "Ametista", "Pérola"]);
  const [activeTrack, setActiveTrack] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [gem, setGem] = useState(0);
  const gemNames = ["Rubi", "Ametista", "Safira", "Diamante", "Peridot", "Topázio", "Pérola"];

  function togglePerson(person: Person) {
    setTeam((current) => current.includes(person) ? current.filter((item) => item !== person) : current.length < 4 ? [...current, person] : [...current.slice(1), person]);
  }

  return (
    <main className="site-shell">
      <div className="cloud cloud-one"/><div className="cloud cloud-two"/><div className="cloud cloud-three"/>
      <header className="top-header">
        <a className="brand" href="#inicio"><span>STEVEN</span>UNIVERSE <Star/></a>
        <nav aria-label="Navegação principal"><a className="active" href="#inicio">⌂ Início</a><a href="#personagens">◉ Personagens</a><a href="#musicas">♫ Músicas</a><a href="#galeria">▣ Galeria</a><a href="#sobre">⌘ Sobre</a></nav>
        <div className="account"><span className="diamond">◆</span><button>Entrar</button><ImageSlot label="Avatar" path="/images/avatar.png"/></div>
      </header>

      <section className="dashboard" id="inicio">
        <div className="left-stack">
          <div className="welcome"><span>BEM-VINDO AO</span><h1>UNIVERSO!</h1><p>Explore personagens, ouça músicas <Star/> e mergulhe nas histórias incríveis de Steven Universe!</p></div>
          <section className="panel team-builder">
            <SectionTitle icon="★" title="MONTE SEU TIME"/>
            <p className="microcopy">Adicione seus personagens favoritos e monte seu time!</p>
            <div className="builder-grid">
              <label className="upload-slot"><input type="file" accept="image/*"/><span>↥</span><strong>Clique ou arraste<br/>a imagem aqui</strong><small>PNG, JPG ou GIF</small></label>
              <div className="people-grid">{people.map((person) => <button key={person} className={team.includes(person) ? "picked" : ""} onClick={() => togglePerson(person)}><ImageSlot label={person} path={`/images/${person.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}.png`}/></button>)}</div>
            </div>
            <button className="pink-button save-team">SALVAR TIME <Star/></button>
          </section>
        </div>

        <section className="panel music-panel" id="musicas">
          <SectionTitle icon="♫" title="MÚSICAS DO UNIVERSO" action="VER TODAS"/>
          <div className="track-list">{tracks.map((track, index) => <button className={index === activeTrack ? "track selected-track" : "track"} key={track[0]} onClick={() => { setActiveTrack(index); setPlaying(true); }}><ImageSlot label={track[3]} path={`/images/musicas/faixa-${index + 1}.jpg`}/><span><strong>{track[0]}</strong><small>{track[1]}</small></span><time>{track[2]}</time><b>▶</b></button>)}</div>
          <div className="player"><ImageSlot label="Capa" path="/images/musicas/capa-atual.jpg"/><span><strong>{tracks[activeTrack][0]}</strong><small>{tracks[activeTrack][1]}</small></span><button onClick={() => setActiveTrack((activeTrack + tracks.length - 1) % tracks.length)}>◀</button><button className="play" onClick={() => setPlaying(!playing)}>{playing ? "Ⅱ" : "▶"}</button><button onClick={() => setActiveTrack((activeTrack + 1) % tracks.length)}>▶</button><i>◖ ━━━●</i></div>
        </section>

        <aside className="panel team-panel">
          <SectionTitle icon="" title="MEU TIME ★"/>
          <div className="team-list">{team.length ? team.map((person, index) => <div className="team-item" key={person}><ImageSlot label={person} path={`/images/${person.toLowerCase()}.png`}/><span><strong>{person}</strong><i className={`mini-gem mini-${index}`}>◆</i></span><button onClick={() => togglePerson(person)}>×</button></div>) : <p className="empty">Seu time está vazio.</p>}</div>
          <button className="outline-button" onClick={() => setTeam([])}>♲ LIMPAR TIME</button>
        </aside>
      </section>

      <section className="mini-grid">
        <article className="panel quote-card"><SectionTitle icon="" title="CITA DO DIA ❝"/><blockquote>“Mesmo que você não seja perfeito, você ainda pode ser incrível.”</blockquote><span>— Steven</span><ImageSlot label="Steven" path="/images/steven-corpo.png"/></article>
        <section className="panel gallery-card" id="galeria"><SectionTitle icon="▣" title="GALERIA DE MOMENTOS" action="VER MAIS"/><div className="gallery-row">{[1,2,3].map((item) => <ImageSlot key={item} label={`Momento ${item}`} path={`/images/galeria/momento-${item}.jpg`}/>)}</div><div className="gallery-dots">● ○ ○ ○</div></section>
        <article className="panel about-card"><SectionTitle icon="◆" title="SOBRE STEVEN UNIVERSE"/><p>Uma série criada por Rebecca Sugar que fala sobre amizade, amor, aceitação e crescimento.</p><a className="pink-button" href="#sobre">SAIBA MAIS <Star/></a><ImageSlot label="Gema rosa" path="/images/gema-rosa.png"/></article>
      </section>

      <section className="gem-test"><h2>QUAL SUA GEMA?</h2><p>Descubra qual gema combina com você!</p><div>{gemNames.map((name, index) => <button title={name} className={index === gem ? "current-gem" : ""} key={name} onClick={() => setGem(index)}>◆</button>)}</div><button className="test-button" onClick={() => setGem((gem + 1) % gemNames.length)}>FAZER TESTE <Star/></button><span>Resultado: <strong>{gemNames[gem]}</strong></span></section>

      <div className="content-wrap">
        <section className="info-section" id="historia">
          <div><span className="eyebrow">📖 CONHEÇA A OBRA</span><h2>Sinopse &amp; história</h2><p><strong>Steven Universo</strong> acompanha Steven, um garoto meio-humano e meio-Gem que vive em Beach City ao lado das Crystal Gems. Enquanto aprende a controlar seus poderes, ele conhece sua origem e ajuda a proteger a Terra.</p><p>Criada por Rebecca Sugar, a série estreou em 2013 e teve cinco temporadas, um filme e o epílogo <em>Steven Universe Future</em>.</p><a href="https://peabodyawards.com/award-profile/steven-universe/?utm_source=chatgpt.com" target="_blank" rel="noreferrer">VER NO PEABODY AWARDS →</a></div>
          <ImageSlot label="Banner da história" path="/images/historia-beach-city.jpg"/>
        </section>

        <section className="content-card" id="personagens"><SectionTitle icon="◉" title="PERSONAGENS"/><div className="character-cards">{[
          ["Steven Universe","Protagonista otimista, gentil e determinado."],
          ["Crystal Gems","Garnet, Pérola e Ametista protegem a Terra."],
          ["Humanos de Beach City","Connie, Greg, Lars, Sadie e os moradores."],
          ["Antagonistas","Jasper, Peridot, Lápis-Lazúli e as Diamonds."],
        ].map((item,index) => <article key={item[0]}><ImageSlot label={item[0]} path={`/images/personagens/grupo-${index + 1}.jpg`}/><span>0{index + 1}</span><h3>{item[0]}</h3><p>{item[1]}</p></article>)}</div></section>

        <section className="universe-card" id="universo"><div><span className="eyebrow">🌎 ALÉM DE BEACH CITY</span><h2>Um universo inteiro</h2><p>A história acontece principalmente em <strong>Beach City</strong>, onde fica o Templo das Crystal Gems. Ela também alcança o Planeta Natal, o antigo Império Gem e diversos mundos.</p><div className="tags"><span>Gems</span><span>Fusões</span><span>Armas mágicas</span><span>Corrupção</span><span>Leões mágicos</span><span>Warp Pads</span><span>Guerra pela Terra</span></div></div><ImageSlot label="Mapa do universo" path="/images/universo/mapa.jpg"/></section>

        <section className="content-card soundtrack"><SectionTitle icon="♫" title="TRILHA SONORA"/><div className="soundtrack-grid"><div><p>A música ajuda a desenvolver personagens, relações e sentimentos durante toda a história.</p><dl><dt>ABERTURA</dt><dd>Tema de Steven Universo</dd><dt>COMPOSITORES</dt><dd>Rebecca Sugar e Aivi &amp; Surasshu</dd></dl><a href="https://www.televisionacademy.com/shows/steven-universe?utm_source=chatgpt.com" target="_blank" rel="noreferrer">TELEVISION ACADEMY →</a></div><ImageSlot label="Capa da trilha sonora" path="/images/musicas/capa-album.jpg"/></div></section>

        <section className="two-columns" id="sobre"><article className="content-card"><SectionTitle icon="✎" title="AUTORES / CRIADORES"/><div className="creator"><ImageSlot label="Rebecca Sugar" path="/images/criadores/rebecca-sugar.jpg"/><div><small>CRIADORA</small><h3>Rebecca Sugar</h3><p><strong>História:</strong> Ben Levin, Matt Burnett, Kat Morris, Joe Johnston, Jeff Liu e equipe.</p><p><strong>Estúdio:</strong> Cartoon Network Studios.</p></div></div></article><article className="content-card"><SectionTitle icon="⌕" title="CURIOSIDADES"/><ul><li>Steven foi inspirado no irmão de Rebecca Sugar.</li><li>Beach City foi inspirada em praias de Delaware.</li><li>Cada personagem possui uma identidade musical.</li><li>Rebecca Sugar fez história no Cartoon Network.</li></ul></article></section>

        <section className="theory-card"><span>⚠ PODE CONTER SPOILERS</span><h2>💭 Teorias dos fãs</h2><div><p>A origem e os segredos das Gems ainda inspiram discussões.</p><p>As fusões são interpretadas como representações de confiança, conexão e identidade.</p><p>Fãs imaginam histórias paralelas e o futuro do Império Gem.</p></div></section>
      </div>

      <footer><p>© 2025 Steven Universe Fan Site • Feito com amor por fãs 💕 • Este site não é oficial.</p><div><a href="#">YouTube</a><a href="#">Instagram</a><a href="#">TikTok</a><a href="#">Discord</a></div><small>© Cartoon Network Studios / Warner Bros. Discovery. Personagens pertencem aos seus respectivos detentores.</small></footer>
    </main>
  );
}
