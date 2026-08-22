"use client";

import { ChevronDown, Menu, Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const primaryLinks = [
  ["Início", "#inicio"],
  ["Personagens", "#personagens"],
  ["Temas", "#universo"],
  ["Músicas", "#musicas"],
];

const secondaryLinks = [
  ["História", "#historia"],
  ["Fusões", "#fusoes"],
  ["Momentos", "#momentos"],
  ["Jogos", "#jogos"],
  ["Curiosidades", "#curiosidades"],
  ["Quiz", "#quiz"],
  ["Prêmios", "#premios"],
  ["Rebecca Sugar", "#rebecca"],
];

const allLinks = [...primaryLinks, ...secondaryLinks];

export function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <a
      className={`brand ${footer ? "footer-brand" : ""}`}
      href="#inicio"
      aria-label="Steven Universo — início"
    >
      <Sparkles />
      <span>
        <strong>STEVEN</strong>
        <small>UNIVERSO</small>
      </span>
    </a>
  );
}

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [active, setActive] = useState("#inicio");

  useEffect(() => {
    const nodes = allLinks
      .map(([, href]) => document.querySelector(href))
      .filter(Boolean) as Element[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-25% 0px -60%", threshold: [0, 0.2, 0.6] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open && !moreOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setMoreOpen(false);
      }
    };
    const closeOutside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpen(false);
        setMoreOpen(false);
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("pointerdown", closeOutside);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("pointerdown", closeOutside);
    };
  }, [open, moreOpen]);

  const closeMenus = () => {
    setOpen(false);
    setMoreOpen(false);
  };

  const secondaryActive = secondaryLinks.some(([, href]) => href === active);

  return (
    <header className="site-header" ref={headerRef}>
      <Logo />

      <nav
        id="primary-navigation"
        className={open ? "nav-open" : ""}
        aria-label="Navegação principal"
      >
        {primaryLinks.map(([label, href]) => (
          <a
            href={href}
            className={active === href ? "active" : ""}
            aria-current={active === href ? "location" : undefined}
            key={href}
            onClick={closeMenus}
          >
            {label}
          </a>
        ))}
        <div className="header-more">
          <button
            className={secondaryActive ? "header-more-button active" : "header-more-button"}
            type="button"
            aria-expanded={moreOpen}
            aria-controls="secondary-navigation"
            onClick={() => setMoreOpen((value) => !value)}
          >
            Explorar <ChevronDown />
          </button>
          <span className="header-more-label">Mais seções</span>
          <div
            className={moreOpen ? "header-more-menu open" : "header-more-menu"}
            id="secondary-navigation"
          >
            {secondaryLinks.map(([label, href]) => (
              <a
                href={href}
                className={active === href ? "active" : ""}
                aria-current={active === href ? "location" : undefined}
                key={href}
                onClick={closeMenus}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-controls="primary-navigation"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
