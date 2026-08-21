"use client";

import { Menu, Shield, Sparkles, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Início", "#inicio"], ["História", "#historia"], ["Personagens", "#personagens"],
  ["Músicas", "#musicas"], ["Galeria", "#galeria"], ["Universo", "#universo"],
  ["Curiosidades", "#curiosidades"], ["Teorias", "#teorias"],
];

export function Logo({ footer = false }: { footer?: boolean }) {
  return <a className={`brand ${footer ? "footer-brand" : ""}`} href="#inicio" aria-label="Steven Universo — início"><Sparkles /><span><strong>STEVEN</strong><small>UNIVERSO</small></span></a>;
}

export function Header({ teamCount }: { teamCount: number }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Logo />
      <nav className={open ? "nav-open" : ""} aria-label="Navegação principal">
        {links.map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
      <a className="team-link" href="#meu-time"><Shield size={16} /> Meu Time <b>{teamCount}</b></a>
      <button className="menu-toggle" type="button" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>{open ? <X /> : <Menu />}</button>
    </header>
  );
}
