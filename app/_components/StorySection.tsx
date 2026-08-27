import Image from "next/image";
import { ArrowRight, Heart, Shield, Star } from "lucide-react";
import storyArt from "../../public/story-cast.webp";

export function StorySection() {
  return <section className="story-section section" id="historia">
    <div className="story-copy"><span className="eyebrow">CONHEÇA A OBRA</span><h2>Crescer também é descobrir quem você é.</h2><p><strong>Steven Universo</strong> vive em Beach City com as Crystal Gems: Garnet, Pérola e Ametista. Enquanto aprende a usar a pedra que herdou de sua mãe, ele atravessa aventuras mágicas, conhece novas famílias e percebe que ouvir, cuidar e mudar podem ser tão poderosos quanto qualquer arma.</p><p>A série começa como uma comédia cotidiana e abre espaço para mistérios cósmicos, relações complexas e escolhas que transformam mundos, sempre pelo olhar curioso e acolhedor de Steven.</p><div className="series-facts"><span><b>2013</b> estreia nos EUA</span><span><b>5</b> temporadas</span><span><b>Cartoon Network</b> emissora original</span><span><b>Rebecca Sugar</b> criadora</span></div><p className="series-path"><strong>Ordem da jornada:</strong> série original → <em>Steven Universe: The Movie</em> (2019) → <em>Steven Universe Future</em> (2019 a 2020).</p><a className="text-link" href="#universo">Explorar este universo <ArrowRight/></a><div className="story-values"><span><Heart/> Afeto</span><span><Shield/> Coragem</span><span><Star/> Identidade</span></div></div>
    <div className="story-ensemble"><span className="story-orbit" aria-hidden="true"/><Image src={storyArt} alt="Steven, Garnet, Pérola, Ametista, Peridot, Lápis, Connie, Bismuto e Leão reunidos" sizes="(max-width: 760px) 100vw, 52vw"/><strong>UMA FAMÍLIA ESCOLHIDA</strong><small>Da Terra a Homeworld</small></div>
  </section>;
}
