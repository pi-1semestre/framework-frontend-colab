"use client";

import { BookOpen, Gem, Heart, Info, Sparkles, Swords, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Character, characterFilters, characters } from "../_data/characters";
import { HorizontalControls } from "./HorizontalControls";
import { Portrait } from "./Portrait";
import { useHorizontalScroll } from "./useHorizontalScroll";

function CharacterRow({ items, row, onSelect }: { items: Character[]; row: number; onSelect: (character: Character) => void }) {
  const { trackRef, atStart, atEnd, move } = useHorizontalScroll<HTMLDivElement>();

  return (
    <div className="horizontal-carousel-frame character-row-frame">
      <div className="character-row" ref={trackRef} tabIndex={0} aria-label={`Linha ${row} de personagens`}>
        {items.map((character) => (
          <article className="character-card character-card-direct" key={character.id} style={{ "--accent": character.color } as React.CSSProperties}>
            <div className="character-image"><Portrait portrait={character.portrait} name={character.name}/></div>
            <div className="category-list" aria-label={`Categorias de ${character.name}`}>
              {character.categories.map((category) => <span className="category-pill" key={category}>{category}</span>)}
            </div>
            <h3>{character.name}</h3>
            <p>{character.description}</p>
            <div className="character-essentials"><span><small>{character.gem !== "Não possui Gem" ? "GEM" : "DESTAQUE"}</small>{character.gem !== "Não possui Gem" ? character.gem : character.weapon}</span></div>
            <button className="character-details-trigger" type="button" onClick={() => onSelect(character)} aria-label={`Ver perfil completo de ${character.name}`}><Info/> Ver perfil completo</button>
          </article>
        ))}
      </div>
      <HorizontalControls className="side-controls" label={`personagens da linha ${row}`} atStart={atStart} atEnd={atEnd} onPrevious={() => move(-1)} onNext={() => move(1)} />
    </div>
  );
}

export function CharacterExplorer() {
  const [filter, setFilter] = useState<(typeof characterFilters)[number]>("Todos");
  const [selected, setSelected] = useState<Character | null>(null);
  const visible = useMemo(
    () => filter === "Todos" ? characters : characters.filter((item) => item.categories.includes(filter)),
    [filter],
  );
  const rows = useMemo(() => {
    const rowCount = visible.length > 18 ? 3 : visible.length > 8 ? 2 : 1;
    return Array.from({ length: rowCount }, (_, row) => visible.filter((_, index) => index % rowCount === row));
  }, [visible]);

  useEffect(() => {
    if (!selected) return;
    document.body.classList.add("modal-open");
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selected]);

  return (
    <section className="characters-section section" id="personagens">
      <div className="section-heading">
        <div>
          <span className="eyebrow"><Sparkles size={14}/> ELENCO DO UNIVERSO</span>
          <h2>Personagens</h2>
        </div>
        <p>Conheça a história, a personalidade, os poderes e as relações de cada personagem.</p>
      </div>

      <div className="filter-row character-filters" role="group" aria-label="Filtrar personagens">
        {characterFilters.map((item) => (
          <button type="button" className={filter === item ? "active" : ""} aria-pressed={filter === item} key={item} onClick={() => setFilter(item)}>{item}</button>
        ))}
      </div>
      <p className="horizontal-hint">Três linhas de personagens — deslize para explorar todo o elenco <span aria-hidden="true">→</span></p>

      <div className="character-rows">
        {rows.map((items, index) => <CharacterRow key={`${filter}-${index}`} items={items} row={index + 1} onSelect={setSelected} />)}
      </div>

      {selected && (
        <div className="character-dialog-backdrop" role="presentation" onPointerDown={(event) => { if (event.currentTarget === event.target) setSelected(null); }}>
          <div className="character-dialog" role="dialog" aria-modal="true" aria-labelledby="character-dialog-title">
            <button className="character-dialog-close" type="button" aria-label="Fechar perfil" onClick={() => setSelected(null)}><X/></button>
            <div className="character-dialog-art" style={{ "--accent": selected.color } as React.CSSProperties}><Portrait portrait={selected.portrait} name={selected.name}/></div>
            <div className="character-dialog-copy">
              <div className="category-list" aria-label={`Categorias de ${selected.name}`}>
                {selected.categories.map((category) => <span className="category-pill" key={category}>{category}</span>)}
              </div>
              <h2 id="character-dialog-title">{selected.name}</h2>
              <p className="character-dialog-lead">{selected.description}</p>
              <div className="character-profile-grid">
                <article><BookOpen/><div><small>História</small><p>{selected.history}</p></div></article>
                <article><Heart/><div><small>Personalidade</small><p>{selected.personality}</p></div></article>
                <article><Sparkles/><div><small>Poderes</small><p>{selected.powers}</p></div></article>
                <article><Swords/><div><small>Arma ou talento</small><p>{selected.weapon}</p></div></article>
                <article><Gem/><div><small>Gem</small><p>{selected.gem}</p></div></article>
                <article><Heart/><div><small>Relações</small><p>{selected.relations}</p></div></article>
              </div>
              <p className="character-curiosity"><Sparkles/><span><strong>Curiosidade</strong>{selected.curiosity}</span></p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
