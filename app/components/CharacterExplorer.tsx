"use client";

import { Check, Info, Plus, Sparkles, X, Zap } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { characterFilters, characters, type Character } from "../data/characters";
import { Portrait } from "./Portrait";

function CharacterModal({ character, onClose }: { character: Character; onClose: () => void }) {
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", closeOnEscape);
    document.body.classList.add("modal-open");
    return () => { document.removeEventListener("keydown", closeOnEscape); document.body.classList.remove("modal-open"); };
  }, [onClose]);

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="character-modal" role="dialog" aria-modal="true" aria-labelledby="character-modal-title">
        <button className="modal-close" type="button" aria-label="Fechar detalhes" autoFocus onClick={onClose}><X /></button>
        <div className="modal-portrait" style={{ background: `linear-gradient(145deg, ${character.color}55, #fff)` }}><Portrait portrait={character.portrait} name={character.name} /></div>
        <div className="modal-copy"><span className="category-pill">{character.category}</span><h2 id="character-modal-title">{character.name}</h2><p className="modal-lead">{character.description}</p>
          <div className="modal-details"><article><small>HISTÓRIA</small><p>{character.history}</p></article><article><small>PERSONALIDADE</small><p>{character.personality}</p></article><article><small>PODERES</small><p>{character.powers}</p></article><article><small>ARMA</small><p>{character.weapon}</p></article><article><small>GEM</small><p>{character.gem}</p></article><article><small>CURIOSIDADE</small><p>{character.curiosity}</p></article></div>
          <p className="relations"><strong>Relações:</strong> {character.relations}</p>
        </div>
      </div>
    </div>
  );
}

export function CharacterExplorer({ team, onToggle }: { team: string[]; onToggle: (id: string) => void }) {
  const [filter, setFilter] = useState<(typeof characterFilters)[number]>("Todos");
  const [selected, setSelected] = useState<Character | null>(null);
  const visible = useMemo(() => filter === "Todos" ? characters : characters.filter((item) => item.category === filter), [filter]);

  return (
    <section className="characters-section section" id="personagens">
      <div className="section-heading"><div><span className="eyebrow"><Sparkles size={14} /> 39 PERSONAGENS</span><h2>Conheça todo o elenco</h2></div><p>Principais, Gems, moradores de Beach City, figuras de Homeworld, vilões e fusões importantes.</p></div>
      <div className="filter-row" role="group" aria-label="Filtrar personagens">{characterFilters.map((item) => <button type="button" className={filter === item ? "active" : ""} aria-pressed={filter === item} key={item} onClick={() => setFilter(item)}>{item}</button>)}</div>
      <div className="character-grid">
        {visible.map((character) => {
          const inTeam = team.includes(character.id);
          return <article className="character-card" key={character.id} style={{ "--accent": character.color } as React.CSSProperties}>
            <div className="character-image"><Portrait portrait={character.portrait} name={character.name} /><button type="button" onClick={() => setSelected(character)}><Info /> Ver detalhes</button></div>
            <span className="category-pill">{character.category}</span><h3>{character.name}</h3><p>{character.description}</p>
            <div className="card-actions"><button type="button" className={inTeam ? "added" : ""} aria-pressed={inTeam} onClick={() => onToggle(character.id)}>{inTeam ? <Check /> : <Plus />}{inTeam ? "No meu time" : "Adicionar"}</button><button type="button" aria-label={`Ver detalhes de ${character.name}`} onClick={() => setSelected(character)}><Zap /></button></div>
          </article>;
        })}
      </div>
      {selected && <CharacterModal character={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
