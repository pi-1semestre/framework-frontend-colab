import { ExternalLink, Headphones, Play } from "lucide-react";
import { songs } from "../_data/songs";
import { Portrait } from "./Portrait";

export function MusicSection() {
  return <section className="music-section" id="musicas"><div className="music-decoration" aria-hidden="true">♫</div><div className="section"><div className="section-heading music-heading"><div><span className="eyebrow light"><Headphones size={14}/> TRILHA SONORA</span><h2>Músicas do universo</h2></div><p>Cada botão abre diretamente uma publicação oficial, pronta para ouvir — sem player cenográfico ou busca genérica.</p></div><div className="music-grid">{songs.map((item,index)=><article className="song-card" key={item.id}><Portrait portrait={item.portrait} name={item.character}/><span className="song-number">{String(index+1).padStart(2,"0")}</span><div><small>{item.character}</small><h3>{item.title}</h3><p><b>{item.episode}</b> — {item.context}</p></div><time>{item.duration}</time><a href={item.youtube} target="_blank" rel="noreferrer" aria-label={`Ouvir ${item.title} no YouTube`}><Play/> Ouvir música <ExternalLink/></a></article>)}</div></div></section>;
}
