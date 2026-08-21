"use client";

import { ArrowRight, RotateCcw, Sparkles } from "lucide-react";
import { useState } from "react";
import { characters } from "../data/characters";
import { quizQuestions } from "../data/content";
import { Portrait } from "./Portrait";

const resultIds = ["steven", "garnet", "pearl", "amethyst", "peridot", "lapis"];

export function Quiz({ savedResult, onSave }: { savedResult: string | null; onSave: (id: string | null) => void }) {
  const [step, setStep] = useState(savedResult ? quizQuestions.length : 0);
  const [scores, setScores] = useState([0,0,0,0,0,0]);
  const [result, setResult] = useState(savedResult);
  const answer = (index: number) => { const next = scores.map((score, scoreIndex) => score + (scoreIndex === index ? 1 : 0)); setScores(next); if (step === quizQuestions.length - 1) { const max = Math.max(...next); const id = resultIds[next.indexOf(max)]; setResult(id); onSave(id); setStep(quizQuestions.length); } else setStep((value) => value + 1); };
  const restart = () => { setStep(0); setScores([0,0,0,0,0,0]); setResult(null); onSave(null); };
  const character = result ? characters.find((item) => item.id === result) : null;
  return <section className="quiz-section" id="quiz"><div className="quiz-visual"><span>◆</span><i>✦</i><b>?</b></div><div className="quiz-card"><span className="eyebrow light"><Sparkles size={14} /> QUIZ INTERATIVO</span><h2>Qual é a sua Gem?</h2>{step < quizQuestions.length ? <><div className="quiz-progress"><span style={{ width: `${((step + 1) / quizQuestions.length) * 100}%` }} /><small>{step + 1} de {quizQuestions.length}</small></div><h3>{quizQuestions[step].question}</h3><div className="answer-grid">{quizQuestions[step].answers.map((item, index) => <button type="button" key={item} onClick={() => answer(index)}><span>{String.fromCharCode(65 + index)}</span>{item}<ArrowRight /></button>)}</div></> : character ? <div className="quiz-result"><small>SUA GEM É...</small><Portrait portrait={character.portrait} name={character.name} /><h3>{character.name}</h3><p>{character.description}</p><div><span>Empatia</span><span>Coragem</span><span>Autenticidade</span></div><button className="button secondary" type="button" onClick={restart}><RotateCcw /> Fazer novamente</button></div> : null}</div></section>;
}
