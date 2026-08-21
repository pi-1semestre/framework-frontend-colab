import { Camera, Code2, Heart, Video } from "lucide-react";
import { Logo } from "./Header";

export function Footer() {
  return <footer><div className="footer-main"><div><Logo footer /><p>Um portal de fã para celebrar amizade, coragem e tudo aquilo que nos faz brilhar.</p></div><nav aria-label="Links do rodapé"><strong>Explorar</strong><a href="#inicio">Início</a><a href="#historia">História</a><a href="#personagens">Personagens</a><a href="#musicas">Músicas</a></nav><nav aria-label="Mais links"><strong>Descobrir</strong><a href="#galeria">Galeria</a><a href="#universo">Universo</a><a href="#curiosidades">Curiosidades</a><a href="#teorias">Teorias</a></nav><div className="footer-social"><strong>Comunidade</strong><div><a href="https://www.youtube.com/@cartoonnetwork" target="_blank" rel="noreferrer" aria-label="YouTube"><Video /></a><a href="#inicio" aria-label="Galeria"><Camera /></a><a href="#inicio" aria-label="Código"><Code2 /></a></div></div></div><div className="footer-bottom"><p>Até a próxima aventura, Crystal Gem. <Heart /></p><small>Projeto de fã, sem fins comerciais. Personagens pertencem aos seus respectivos detentores.</small></div></footer>;
}
