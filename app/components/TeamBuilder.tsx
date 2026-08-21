"use client";

import { Check, RotateCcw, Save, Shield, Sparkles, X } from "lucide-react";
import { characters } from "../data/characters";
import { Portrait } from "./Portrait";

export function TeamBuilder({ team, onToggle, onClear, onSave, message }: { team: string[]; onToggle: (id: string) => void; onClear: () => void; onSave: () => void; message: string }) {
  const selected = team.map((id) => characters.find((character) => character.id === id)).filter((character) => Boolean(character));
  return (
    <section className="team-section" id="meu-time">
      <div className="section team-layout"><div className="team-intro"><span className="eyebrow light"><Sparkles size={14} /> FORME SUA EQUIPE</span><h2>Monte um time que combina com você.</h2><p>Escolha até quatro personagens. Sua seleção fica salva neste dispositivo para a próxima aventura.</p><div className="team-counter"><Shield /> <strong>{team.length}/4</strong><span>integrantes</span></div></div>
        <div className="team-board"><div className="team-board-head"><span><small>MEU TIME</small><strong>{team.length ? "Equipe pronta para a missão" : "Escolha seus integrantes"}</strong></span><Check /></div>
          <div className="team-slots">{[0,1,2,3].map((index) => { const character = selected[index]; return character ? <div className="team-member" key={character.id}><Portrait portrait={character.portrait} name={character.name} /><span><strong>{character.name}</strong><small>{character.category}</small></span><button type="button" aria-label={`Remover ${character.name}`} onClick={() => onToggle(character.id)}><X /></button></div> : <a className="empty-team-slot" href="#personagens" key={index}><span>+</span> Espaço livre</a>; })}</div>
          <p className="team-message" aria-live="polite">{message}</p><div className="team-buttons"><button className="button primary" type="button" onClick={onSave}><Save /> Salvar time</button><button className="button ghost-light" type="button" onClick={onClear}><RotateCcw /> Limpar time</button></div>
        </div></div>
    </section>
  );
}
