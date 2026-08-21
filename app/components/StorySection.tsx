import Image from "next/image";
import { ArrowRight, Heart, Shield, Star } from "lucide-react";
import heroArt from "../../public/crystal-gems-hero.png";

export function StorySection() {
  return (
    <section className="story-section section" id="historia">
      <div className="story-copy"><span className="eyebrow">CONHEÇA A OBRA</span><h2>Crescer também é descobrir quem você é.</h2><p><strong>Steven Universo</strong> acompanha um garoto meio-humano e meio-Gem que vive em Beach City ao lado de Garnet, Pérola e Ametista. Entre ameaças intergalácticas e conflitos do coração, ele aprende que empatia pode mudar mundos.</p><a className="text-link" href="#universo">Conheça a história <ArrowRight /></a><div className="story-values"><span><Heart /> Afeto</span><span><Shield /> Coragem</span><span><Star /> Identidade</span></div></div>
      <div className="story-image"><Image src={heroArt} alt="As Crystal Gems reunidas" sizes="(max-width: 760px) 100vw, 48vw" /><span>JUNTOS SOMOS MAIS FORTES ★</span></div>
    </section>
  );
}
