"use client";

import { ExternalLink, Headphones, Music2, Pause, Play, SkipBack, SkipForward, X } from "lucide-react";
import { useState } from "react";
import { songs } from "../data/songs";
import { Portrait } from "./Portrait";

export function MusicSection() {
  const [active, setActive] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);
  const song = active === null ? null : songs[active];
  const choose = (index: number) => { setActive(index); setPlaying(true); };
  const next = (direction: number) => { setActive((current) => current === null ? 0 : (current + direction + songs.length) % songs.length); setPlaying(true); };
  return (
    <section className="music-section" id="musicas">
      <div className="music-decoration" aria-hidden="true">♫</div>
      <div className="section"><div className="section-heading music-heading"><div><span className="eyebrow light"><Headphones size={14} /> TRILHA SONORA</span><h2>Músicas do universo</h2></div><p>Uma seleção visual de canções que contam sentimentos, relações e grandes mudanças.</p></div>
        <div className="music-grid">{songs.map((item, index) => <article className={active === index ? "song-card active" : "song-card"} key={item.id}><Portrait portrait={item.portrait} name={item.character} /><button className="song-play" type="button" aria-label={`Selecionar ${item.title}`} onClick={() => choose(index)}>{active === index && playing ? <Pause /> : <Play />}</button><div><small>{String(index + 1).padStart(2, "0")} · {item.character}</small><h3>{item.title}</h3></div><time>{item.duration}</time><a href={item.youtube} target="_blank" rel="noreferrer" aria-label={`Ouvir ${item.title} no YouTube`}><ExternalLink /> YouTube</a></article>)}</div>
      </div>
      {song && <div className="fixed-player" role="region" aria-label="Player visual"><button className="close-player" type="button" aria-label="Fechar player" onClick={() => { setActive(null); setPlaying(false); }}><X /></button><Portrait portrait={song.portrait} name={song.character} /><div className="player-song"><small>TOCANDO AGORA</small><strong>{song.title}</strong><span>{song.character}</span></div><div className="player-controls"><button type="button" aria-label="Anterior" onClick={() => next(-1)}><SkipBack /></button><button className="main-play" type="button" aria-label={playing ? "Pausar" : "Reproduzir"} onClick={() => setPlaying((value) => !value)}>{playing ? <Pause /> : <Play />}</button><button type="button" aria-label="Próxima" onClick={() => next(1)}><SkipForward /></button></div><div className="player-progress"><span className={playing ? "moving" : ""} /><small>0:08</small><small>{song.duration}</small></div><a href={song.youtube} target="_blank" rel="noreferrer"><Music2 /> Ouvir no YouTube</a></div>}
    </section>
  );
}
