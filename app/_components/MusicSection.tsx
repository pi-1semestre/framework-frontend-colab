"use client";

import { Disc3, ExternalLink, Headphones, Music2, Play, Sparkles } from "lucide-react";
import { songs } from "../_data/songs";
import { HorizontalControls } from "./HorizontalControls";
import { Portrait } from "./Portrait";
import { useHorizontalScroll } from "./useHorizontalScroll";

export function MusicSection() {
  const { trackRef, atStart, atEnd, move } = useHorizontalScroll<HTMLDivElement>();

  return (
    <section className="music-section" id="musicas">
      <div className="music-decoration" aria-hidden="true">♫</div>
      <div className="section">
        <div className="section-heading music-heading">
          <div>
            <span className="eyebrow light"><Headphones size={14}/> TRILHA SONORA</span>
            <h2>Músicas do universo</h2>
          </div>
          <p>Canções para cada fase da jornada: amizade, identidade, coragem, perda e recomeço.</p>
        </div>

        <div className="music-showcase">
          <div className="music-showcase-copy">
            <span><Sparkles/> COLEÇÃO EXPANDIDA</span>
            <h3>Uma trilha para sentir junto.</h3>
            <p>Da primeira aventura em Beach City ao filme, escolha uma faixa e abra diretamente no YouTube.</p>
            <div className="music-showcase-stats">
              <span><Music2/> <b>{songs.length}</b> faixas</span>
              <span><Disc3/> série + filme</span>
            </div>
          </div>
          <div className="music-vinyl" aria-hidden="true">
            <Disc3/>
            <span className="music-equalizer"><i/><i/><i/><i/><i/></span>
          </div>
        </div>

        <div className="music-collection-heading">
          <div><small>APERTE O PLAY</small><strong>Escolha sua música</strong></div>
          <span>Arraste para o lado <b aria-hidden="true">→</b></span>
        </div>

        <div className="horizontal-carousel-frame music-carousel">
          <div className="music-grid" ref={trackRef} tabIndex={0} aria-label="Músicas de Steven Universo">
            {songs.map((item,index) => (
              <article className="song-card" key={item.id}>
                <div className="song-card-topline">
                  <span className="song-number">{String(index+1).padStart(2,"0")}</span>
                  <time>{item.duration}</time>
                </div>
                <div className="song-card-identity">
                  <Portrait portrait={item.portrait} name={item.character}/>
                  <div>
                    <small>{item.character}</small>
                    <h3>{item.title}</h3>
                  </div>
                </div>
                <p className="song-card-context"><b>{item.episode}</b> · {item.context}</p>
                <a href={item.youtube} target="_blank" rel="noreferrer" aria-label={`Ouvir ${item.title} no YouTube`}>
                  <span><Play/></span> Ouvir no YouTube <ExternalLink/>
                </a>
              </article>
            ))}
          </div>
          <HorizontalControls className="side-controls" label="músicas" atStart={atStart} atEnd={atEnd} onPrevious={() => move(-1)} onNext={() => move(1)} />
        </div>
      </div>
    </section>
  );
}
