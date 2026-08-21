import Image from "next/image";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import heroArt from "../../public/crystal-gems-hero.png";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="cloud cloud-a" /><div className="cloud cloud-b" /><div className="hero-stars" aria-hidden="true">✦ · ✧ · ✦</div>
      <div className="hero-copy reveal">
        <span className="eyebrow"><Sparkles size={14} /> UMA AVENTURA EXTRAORDINÁRIA</span>
        <h1><span>STEVEN</span><br />UNIVERSO</h1>
        <h2>Uma história sobre amizade, identidade, coragem e pertencimento.</h2>
        <p>Entre em Beach City, conheça as Crystal Gems e descubra um universo onde sentir também é uma forma de poder.</p>
        <div className="hero-actions"><a className="button primary" href="#universo">Explorar o universo <ArrowRight /></a><a className="button secondary" href="#personagens"><Play /> Conhecer personagens</a></div>
        <div className="hero-stats"><span><b>39</b> personagens</span><span><b>8</b> músicas</span><span><b>∞</b> aventuras</span></div>
      </div>
      <div className="hero-visual reveal delay-one">
        <div className="gem-orbit" /><Image src={heroArt} alt="Steven com Garnet, Pérola, Ametista, Peridot e Lápis Lazúli" priority sizes="(max-width: 760px) 100vw, 55vw" />
        <span className="float-badge badge-one">✦ Crystal Gems</span><span className="float-badge badge-two">◆ Beach City</span>
      </div>
    </section>
  );
}
