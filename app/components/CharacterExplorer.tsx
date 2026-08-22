"use client";

import { Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { characterFilters, characters } from "../data/characters";
import { Portrait } from "./Portrait";

export function CharacterExplorer() {
  const [filter, setFilter] = useState<(typeof characterFilters)[number]>("Todos");
  const visible = useMemo(() => filter === "Todos" ? characters : characters.filter(item => item.category === filter), [filter]);
  return <section className="characters-section section" id="personagens">
    <div className="section-heading"><div><span className="eyebrow"><Sparkles size={14}/> ELENCO DO UNIVERSO</span><h2>Personagens</h2></div><p>Informações essenciais à primeira vista, sem etapas ou botões desnecessários.</p></div>
    <div className="filter-row" role="group" aria-label="Filtrar personagens">{characterFilters.map(item=><button type="button" className={filter===item?"active":""} aria-pressed={filter===item} key={item} onClick={()=>setFilter(item)}>{item}</button>)}</div>
    <div className="character-grid">{visible.map(character=><article className="character-card character-card-direct" key={character.id} style={{"--accent":character.color} as React.CSSProperties}><div className="character-image"><Portrait portrait={character.portrait} name={character.name}/></div><span className="category-pill">{character.category}</span><h3>{character.name}</h3><p>{character.description}</p><div className="character-essentials"><span><small>{character.gem!=="Não possui Gem"?"GEM":"DESTAQUE"}</small>{character.gem!=="Não possui Gem"?character.gem:character.weapon}</span></div></article>)}</div>
  </section>;
}
