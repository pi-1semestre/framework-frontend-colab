"use client";

import { ArrowRight, CheckCircle2, RotateCcw, Sparkles, XCircle } from "lucide-react";
import { useState } from "react";
import { triviaQuestions } from "../_data/expanded";

const shuffled = () => [...triviaQuestions].sort(() => Math.random() - .5).slice(0, 8);

export function Quiz() {
  const [questions,setQuestions]=useState(()=>triviaQuestions.slice(0,8));
  const [step,setStep]=useState(0);
  const [selected,setSelected]=useState<number|null>(null);
  const [score,setScore]=useState(0);
  const done=step>=questions.length;
  const question=questions[Math.min(step,questions.length-1)];
  const choose=(index:number)=>{if(selected!==null)return;setSelected(index);if(index===question.correct)setScore(s=>s+1)};
  const next=()=>{setSelected(null);setStep(s=>s+1)};
  const restart=()=>{setStep(0);setSelected(null);setScore(0);setQuestions(shuffled())};
  return <section className="quiz-section" id="quiz"><div className="quiz-visual"><span>◆</span><i>✦</i><b>?</b></div><div className="quiz-card"><span className="eyebrow"><Sparkles size={14}/> DESAFIO CRYSTAL GEM</span><h2>Quanto você conhece?</h2>{!done?<><div className="quiz-meta"><span>{question.category}</span><span className="difficulty">{question.difficulty}</span><b>{score} pontos</b></div><div className="quiz-progress"><span style={{width:`${((step+1)/questions.length)*100}%`}}/><small>{step+1} de {questions.length}</small></div><h3>{question.question}</h3><div className="answer-grid">{question.answers.map((a,i)=>{const state=selected===null?"":i===question.correct?"correct":i===selected?"wrong":"muted";return <button className={state} key={a} onClick={()=>choose(i)}><span>{String.fromCharCode(65+i)}</span>{a}{selected!==null&&(i===question.correct?<CheckCircle2/>:i===selected?<XCircle/>:<ArrowRight/>)}</button>})}</div>{selected!==null&&<div className={selected===question.correct?"answer-feedback right":"answer-feedback wrong"}><strong>{selected===question.correct?"Resposta certa!":"Quase!"}</strong><p>{question.fact}</p><button className="button primary" onClick={next}>{step===questions.length-1?"Ver resultado":"Próxima pergunta"}<ArrowRight/></button></div>}</>:<div className="trivia-result"><small>RESULTADO FINAL</small><strong>{score}/{questions.length}</strong><h3>{score>=7?"Diamante do conhecimento!":score>=5?"Crystal Gem experiente":"Novo explorador de Beach City"}</h3><p>As perguntas mudam a cada tentativa, misturando personagens, lugares, episódios, música, jogos e bastidores.</p><button className="button primary" onClick={restart}><RotateCcw/> Jogar novamente</button></div>}</div></section>;
}
