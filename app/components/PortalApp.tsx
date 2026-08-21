"use client";

import { useEffect, useState } from "react";
import { CharacterExplorer } from "./CharacterExplorer";
import { Creators, CuriositiesAndQuote, Theories, UniverseAndFusions } from "./DiscoverySections";
import { Footer } from "./Footer";
import { Gallery, type UserImage } from "./Gallery";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { MusicSection } from "./MusicSection";
import { Quiz } from "./Quiz";
import { StorySection } from "./StorySection";
import { TeamBuilder } from "./TeamBuilder";

const defaultTeam = ["steven", "garnet", "amethyst", "pearl"];

export function PortalApp() {
  const [team, setTeam] = useState<string[]>(defaultTeam);
  const [votes, setVotes] = useState<Record<string, number>>({});
  const [userImages, setUserImages] = useState<UserImage[]>([]);
  const [quizResult, setQuizResult] = useState<string | null>(null);
  const [message, setMessage] = useState("Escolha até quatro personagens para sua equipe.");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    let restoredTeam: string[] | null = null;
    let restoredVotes: Record<string, number> | null = null;
    let restoredImages: UserImage[] | null = null;
    let restoredQuiz: string | null = null;
    try {
      const savedTeam = localStorage.getItem("su-team");
      const savedVotes = localStorage.getItem("su-votes");
      const savedImages = localStorage.getItem("su-gallery");
      const savedQuiz = localStorage.getItem("su-quiz");
      if (savedTeam) restoredTeam = JSON.parse(savedTeam);
      if (savedVotes) restoredVotes = JSON.parse(savedVotes);
      if (savedImages) restoredImages = JSON.parse(savedImages);
      if (savedQuiz) restoredQuiz = JSON.parse(savedQuiz);
    } catch { /* dados inválidos são ignorados e os padrões permanecem */ }
    const timer = window.setTimeout(() => {
      if (restoredTeam) setTeam(restoredTeam);
      if (restoredVotes) setVotes(restoredVotes);
      if (restoredImages) setUserImages(restoredImages);
      if (restoredQuiz) setQuizResult(restoredQuiz);
      setHydrated(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => { if (hydrated) localStorage.setItem("su-team", JSON.stringify(team)); }, [hydrated, team]);
  useEffect(() => { if (hydrated) localStorage.setItem("su-votes", JSON.stringify(votes)); }, [hydrated, votes]);
  useEffect(() => { if (hydrated) localStorage.setItem("su-quiz", JSON.stringify(quizResult)); }, [hydrated, quizResult]);

  const updateImages = (images: UserImage[]) => {
    setUserImages(images);
    try { localStorage.setItem("su-gallery", JSON.stringify(images)); }
    catch { setMessage("A imagem é grande demais para o armazenamento local. Tente um arquivo menor."); }
  };

  const toggleTeam = (id: string) => {
    if (team.includes(id)) { setTeam((current) => current.filter((item) => item !== id)); setMessage("Personagem removido do time."); return; }
    if (team.length >= 4) { setMessage("Sua equipe já tem quatro integrantes. Remova alguém para trocar."); return; }
    setTeam((current) => [...current, id]); setMessage("Personagem adicionado! Seu time ficou ainda mais forte.");
  };

  return <main className="site-shell"><Header teamCount={team.length} /><Hero /><StorySection /><CharacterExplorer team={team} onToggle={toggleTeam} /><TeamBuilder team={team} onToggle={toggleTeam} onClear={() => { setTeam([]); setMessage("Equipe limpa. Escolha uma nova formação!"); }} onSave={() => setMessage(team.length ? "Equipe salva neste dispositivo! ★" : "Escolha pelo menos um personagem.")} message={message} /><MusicSection /><Gallery userImages={userImages} onImagesChange={updateImages} /><UniverseAndFusions /><CuriositiesAndQuote /><Quiz savedResult={quizResult} onSave={setQuizResult} /><Theories votes={votes} onVote={(id) => setVotes((current) => ({ ...current, [id]: current[id] ? 0 : 1 }))} /><Creators /><Footer /></main>;
}
