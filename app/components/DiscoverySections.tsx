"use client";

import { Atom, BookOpen, ChevronRight, Crown, Diamond, Gem, Heart, Landmark, Lightbulb, Orbit, RotateCcw, Sparkles, Star, ThumbsUp, Waves } from "lucide-react";
import { useState } from "react";
import { curiosities, fusions, quotes, theories, universeItems } from "../data/content";

const iconMap = { Waves, Landmark, Orbit, Gem, Sparkles, Crown, Diamond };

export function UniverseAndFusions() {
  const [fusion, setFusion] = useState<number | null>(null);
  return <>
    <section className="universe-section section" id="universo"><div className="section-heading"><div><span className="eyebrow"><Orbit size={14} /> ALÉM DE BEACH CITY</span><h2>Explore o universo</h2></div><p>Lugares, conceitos e estruturas que fazem a história crescer muito além da Terra.</p></div><div className="universe-grid">{universeItems.map((item, index) => { const Icon = iconMap[item.icon as keyof typeof iconMap]; return <article className={`universe-item universe-${index}`} key={item.title}><Icon /><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>; })}</div></section>
    <section className="fusion-section"><div className="section"><div className="section-heading fusion-heading"><div><span className="eyebrow light"><Atom size={14} /> CONEXÃO EM FORMA DE PODER</span><h2>Fusões inesquecíveis</h2></div><p>Mais do que força: cada fusão expressa uma relação única.</p></div><div className="fusion-track">{fusions.map((item, index) => <button type="button" className={fusion === index ? "fusion-card open" : "fusion-card"} key={item[0]} onClick={() => setFusion(fusion === index ? null : index)}><span className="fusion-gem">◆</span><small>{item[1]}</small><h3>{item[0]}</h3><p>{item[2]}</p><b>{fusion === index ? "Fechar" : "Ver detalhes"} <ChevronRight /></b></button>)}</div></div></section>
  </>;
}

export function CuriositiesAndQuote() {
  const [curiosity, setCuriosity] = useState(0);
  const [quote, setQuote] = useState(0);
  return <section className="curiosity-section section" id="curiosidades"><div className="curiosity-card"><span className="eyebrow"><Lightbulb size={14} /> VOCÊ SABIA?</span><div className="curiosity-number">0{curiosity + 1}</div><h2>{curiosities[curiosity]}</h2><p>Pequenos detalhes que tornam a criação e o universo da série ainda mais especiais.</p><button className="button primary" type="button" onClick={() => setCuriosity((curiosity + 1) % curiosities.length)}><RotateCcw /> Mostrar outra curiosidade</button></div><div className="quote-card"><Star /><span className="eyebrow light">CITAÇÃO DO DIA</span><blockquote>“{quotes[quote][0]}”</blockquote><p>— {quotes[quote][1]}</p><button type="button" onClick={() => setQuote((quote + 1) % quotes.length)}>Nova frase <ChevronRight /></button></div></section>;
}

export function Theories({ votes, onVote }: { votes: Record<string, number>; onVote: (id: string) => void }) {
  return <section className="theories-section section" id="teorias"><div className="section-heading"><div><span className="eyebrow"><BookOpen size={14} /> COMUNIDADE</span><h2>Teorias do universo</h2></div><p>Ideias de fãs para continuar olhando além das estrelas. Os votos ficam salvos neste dispositivo.</p></div><div className="theory-grid">{theories.map((theory) => <article className={votes[theory.id] ? "theory-card believed" : "theory-card"} key={theory.id}><span>{theory.category}</span><h3>{theory.title}</h3><p>{theory.description}</p><button type="button" onClick={() => onVote(theory.id)}><ThumbsUp /> Eu acredito <b>{theory.votes + (votes[theory.id] || 0)}</b></button></article>)}</div></section>;
}

export function Creators() {
  const creators = [["Rebecca Sugar", "Criadora, roteirista e compositora", "RS"], ["Cartoon Network Studios", "Estúdio de produção", "CN"], ["Equipe de produção", "Artistas, roteiristas e músicos", "✦"]];
  return <section className="creators-section section"><div className="section-heading"><div><span className="eyebrow"><Heart size={14} /> POR TRÁS DA OBRA</span><h2>Quem fez esse universo brilhar</h2></div></div><div className="creator-grid">{creators.map((creator) => <article key={creator[0]}><span>{creator[2]}</span><div><h3>{creator[0]}</h3><p>{creator[1]}</p></div></article>)}</div></section>;
}
