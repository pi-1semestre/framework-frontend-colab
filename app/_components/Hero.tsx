import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import garnetPortrait from "../../public/characters/garnet.webp";

const heroCharacters = [
  { name: "Garnet", src: garnetPortrait, className: "figure-garnet" },
  { name: "Pérola", src: "/characters/pearl.webp", className: "figure-pearl" },
  { name: "Ametista", src: "/characters/amethyst.webp", className: "figure-amethyst" },
  { name: "Steven", src: "/characters/steven.webp", className: "figure-steven" },
];

export function Hero() {
  return (
    <section className="hero hero-cutout-layout" id="inicio">
      <div className="hero-cutout-glow" aria-hidden="true" />

      <div className="hero-copy reveal">
        <span className="eyebrow">
          <Image
            className="hero-eyebrow-gem"
            src="/brand-gem.png"
            alt=""
            width={28}
            height={28}
            sizes="22px"
          />
          UMA AVENTURA EXTRAORDINÁRIA
        </span>
        <h1>
          <span>STEVEN</span>
          <br />
          UNIVERSO
        </h1>
        <h2>Sentir também é uma forma de poder.</h2>
        <p>
          Entre em Beach City, conheça as Crystal Gems e descubra uma história
          sobre amizade, identidade, coragem e pertencimento.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#universo">
            Explorar o universo <ArrowRight />
          </a>
          <a className="button secondary" href="#personagens">
            <Play /> Conhecer personagens
          </a>
        </div>
      </div>

      <div className="hero-cutout hero-figures reveal delay-one">
        <span className="hero-cutout-orbit" aria-hidden="true" />
        <div className="hero-character-stage">
          {heroCharacters.map((character) => (
            <figure className={`hero-character ${character.className}`} key={character.name}>
              <Image
                className="hero-character-art"
                src={character.src}
                alt={character.name}
                width={700}
                height={850}
                sizes="(max-width: 520px) 42vw, (max-width: 800px) 38vw, 18vw"
                loading="eager"
                fetchPriority={character.name === "Steven" ? "high" : "auto"}
                draggable={false}
              />
            </figure>
          ))}
        </div>
        <span className="float-badge">✦ Crystal Gems</span>
      </div>

      <div className="hero-sparkles" aria-hidden="true">
        <i>✦</i>
        <i>◆</i>
        <i>✧</i>
      </div>
    </section>
  );
}
