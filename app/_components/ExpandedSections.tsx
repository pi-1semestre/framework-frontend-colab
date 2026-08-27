"use client";

import Image from "next/image";
import { ChevronRight, ExternalLink, Gamepad2, Heart, Play, Sparkles, Star, VideoOff } from "lucide-react";
import { useState } from "react";
import { fusionGuide, fusionVideos, games, moments, seriesThemes } from "../_data/expanded";
import { HorizontalControls } from "./HorizontalControls";
import { useHorizontalScroll } from "./useHorizontalScroll";

export function UniverseGuide() {
  const [leadTheme, ...themes] = seriesThemes;

  return (
    <section className="expanded-section themes-section section" id="universo">
      <div className="section-heading themes-heading">
        <div>
          <span className="eyebrow"><Heart size={14}/> O CORAÇÃO DA SÉRIE</span>
          <h2>Muito além das estrelas</h2>
        </div>
        <p>Os temas que fazem Steven Universe continuar especial mesmo quando a batalha termina.</p>
      </div>

      <div className="themes-story">
        <article className="theme-lead">
          <div className="theme-lead-copy">
            <span>{leadTheme.number} · {leadTheme.label}</span>
            <h3>{leadTheme.title}</h3>
            <p>{leadTheme.text}</p>
          </div>
          <div className="theme-lead-art">
            <span className="theme-orbit" aria-hidden="true"/>
            <Image src={leadTheme.image} alt="Steven com sua família escolhida" fill sizes="(max-width: 800px) 100vw, 50vw"/>
          </div>
        </article>

        <div className="themes-grid">
          {themes.map((theme) => (
            <article className={`theme-card theme-card-${theme.id}`} key={theme.id}>
              <div className="theme-card-art">
                <Image src={theme.image} alt={theme.title} fill sizes="(max-width: 520px) 90vw, (max-width: 900px) 45vw, 28vw"/>
              </div>
              <div className="theme-card-copy">
                <span><Sparkles/> {theme.number} · {theme.label}</span>
                <h3>{theme.title}</h3>
                <p>{theme.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FusionGuide() {
  const [activeVideo, setActiveVideo] = useState(0);
  const { trackRef: videoTrackRef, atStart: videoAtStart, atEnd: videoAtEnd, move: moveVideo } = useHorizontalScroll<HTMLDivElement>();
  const { trackRef: fusionTrackRef, atStart: fusionAtStart, atEnd: fusionAtEnd, move: moveFusion } = useHorizontalScroll<HTMLDivElement>();
  const video = fusionVideos[activeVideo];
  return <section className="fusion-atlas" id="fusoes"><div className="section"><div className="section-heading fusion-heading"><div><span className="eyebrow light"><Sparkles size={14}/> ATLAS DAS FUSÕES</span><h2>Conexões que ganham forma</h2></div><p>Quem forma cada fusão, quando ela surge e o que sua relação expressa. Os vídeos mostram a cena correspondente.</p></div>
    <div className="fusion-video-library">
      <div className="fusion-video-player"><iframe key={video.id} src={`https://www.youtube-nocookie.com/embed/${video.id}`} title={video.title} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/><div><small>{video.episode}</small><h3>{video.title}</h3><p>{video.text}</p></div></div>
      <div className="horizontal-carousel-frame fusion-video-row-frame"><div className="fusion-video-list" ref={videoTrackRef} role="group" aria-label="Escolher vídeo sobre fusões">{fusionVideos.map((item,index)=><button type="button" className={index===activeVideo?"active":""} aria-pressed={index===activeVideo} onClick={()=>setActiveVideo(index)} key={item.id}><span>{String(index+1).padStart(2,"0")}</span><div><small>{item.episode}</small><strong>{item.title}</strong></div><Play/></button>)}</div><HorizontalControls className="side-controls fusion-video-controls" label="vídeos" atStart={videoAtStart} atEnd={videoAtEnd} onPrevious={() => moveVideo(-1)} onNext={() => moveVideo(1)} /></div>
    </div>
    <div className="horizontal-carousel-frame fusion-row-frame"><div className="fusion-grid" ref={fusionTrackRef} tabIndex={0} aria-label="Fusões do universo">{fusionGuide.map(f=><article key={f.name}><div className="fusion-art"><Image src={f.image} alt={f.name} width={420} height={500}/></div><div className="fusion-copy"><small>{f.parts}</small><h3>{f.name}</h3><p>{f.text}</p><dl><div><dt>Primeira aparição</dt><dd>{f.episode}</dd></div><div><dt>Fase</dt><dd>{f.season}</dd></div></dl>{f.youtubeId?<a href={`https://www.youtube.com/watch?v=${f.youtubeId}`} target="_blank" rel="noreferrer" aria-label={`Assistir ao momento de ${f.name}, ${f.videoLanguage}`}><Play/> Ver fusão · {f.videoLanguage} <ExternalLink/></a>:<span className="pending-video"><VideoOff/> Sem vídeo da cena</span>}</div></article>)}</div><HorizontalControls className="side-controls" label="fusões" atStart={fusionAtStart} atEnd={fusionAtEnd} onPrevious={() => moveFusion(-1)} onNext={() => moveFusion(1)} /></div></div></section>;
}

export function MomentsTimeline() {
  const [open, setOpen] = useState<number | null>(null);
  const { trackRef, atStart, atEnd, move } = useHorizontalScroll<HTMLDivElement>();

  return (
    <section className="expanded-section moments-section section" id="momentos">
      <div className="section-heading">
        <div>
          <span className="eyebrow"><Star size={14}/> SEM SPOILERS À PRIMEIRA VISTA</span>
          <h2>Momentos marcantes</h2>
        </div>
        <p>Explore a linha do tempo e abra cada capítulo quando quiser revelar sua importância.</p>
      </div>

      <div className="horizontal-carousel-frame moments-row-frame">
        <div className="timeline" ref={trackRef} tabIndex={0} aria-label="Momentos marcantes da série">
          {moments.map((moment, index) => {
            const isOpen = open === index;
            const detailsId = `moment-details-${index}`;

            return (
              <article className={isOpen ? "open" : ""} key={moment.title}>
                <span className="timeline-dot">{String(index + 1).padStart(2, "0")}</span>
                <div className="moment-image">
                  <Image src={moment.image} alt="" width={360} height={260}/>
                </div>
                <div>
                  <small>{moment.season} · {moment.episode}</small>
                  <h3>{moment.title}</h3>
                  <p>{moment.teaser}</p>
                  {isOpen && (
                    <p className="spoiler-copy" id={detailsId}>
                      <strong>Revelação:</strong> {moment.spoiler}
                    </p>
                  )}
                  <div className="moment-actions">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={detailsId}
                      onClick={() => setOpen((current) => current === index ? null : index)}
                    >
                      {isOpen ? "Ocultar detalhes" : "Revelar momento"}
                      <ChevronRight aria-hidden="true"/>
                    </button>
                    <a
                      href={moment.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Assistir à cena “${moment.title}” no YouTube`}
                    >
                      <Play aria-hidden="true"/> Assistir à cena <ExternalLink aria-hidden="true"/>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <HorizontalControls
          className="side-controls"
          label="momentos"
          atStart={atStart}
          atEnd={atEnd}
          onPrevious={() => move(-1)}
          onNext={() => move(1)}
        />
      </div>
    </section>
  );
}

export function GamesSection() {
  const { trackRef, atStart, atEnd, move } = useHorizontalScroll<HTMLDivElement>();
  return <section className="expanded-section games-section section" id="jogos"><div className="section-heading"><div><span className="eyebrow"><Gamepad2 size={14}/> JOGOS OFICIAIS</span><h2>Aventuras além da TV</h2></div><p>Conheça os jogos da franquia e acesse somente páginas oficiais ou da desenvolvedora.</p></div><div className="game-carousel horizontal-carousel-frame"><div className="games-track" ref={trackRef} tabIndex={0} aria-label="Jogos da franquia">{games.map(g=><article key={g.id}><div className="game-cover"><Image src={`/expanded/${g.id}.webp`} alt={`Capa de ${g.title}`} width={600} height={420}/><span>{g.year}</span></div><div><small>{g.genre}</small><h3>{g.title}</h3><p>{g.text}</p><dl><div><dt>Plataformas</dt><dd>{g.platform}</dd></div><div><dt>Elenco</dt><dd>{g.cast}</dd></div></dl>{g.url?<a className="game-link" href={g.url} target="_blank" rel="noreferrer">{g.status}<ExternalLink/></a>:<span className="game-status">{g.status}</span>}</div></article>)}</div><HorizontalControls className="side-controls" label="jogos" atStart={atStart} atEnd={atEnd} onPrevious={() => move(-1)} onNext={() => move(1)} /></div></section>;
}

export function RebeccaSection() {
  return <section className="rebecca-section" id="rebecca"><div className="section rebecca-layout"><div className="rebecca-photo"><Image src="/expanded/rebecca-sugar-hd.jpg" alt="Rebecca Sugar durante um painel da New York Comic Con" width={1420} height={945}/><span>CRIADORA · ARTISTA · COMPOSITORA</span></div><div className="rebecca-copy"><span className="eyebrow light">POR TRÁS DO UNIVERSO</span><h2>Rebecca Sugar</h2><p className="lead">A artista que transformou sentimentos íntimos em uma aventura cósmica sobre identidade, afeto, escolha e liberdade.</p><p>Depois de trabalhar como roteirista e storyboard artist em <em>Adventure Time</em>, Rebecca criou <em>Steven Universe</em> e conduziu sua linguagem visual, musical e narrativa. O protagonista foi inspirado em seu irmão mais novo, Steven Sugar.</p><div className="rebecca-facts"><article><strong>Narrativa</strong><p>Canções, silêncios e ficção científica revelam o mundo pela perspectiva emocional de Steven.</p></article><article><strong>Impacto</strong><p>A série ampliou a representação LGBTQIA+ na animação familiar e recebeu reconhecimento do Peabody e da Television Academy.</p></article><article><strong>Autoria múltipla</strong><p>Rebecca atuou como criadora, produtora executiva, diretora, roteirista, artista de storyboard e compositora.</p></article><article><strong>Inspiração</strong><p>Steven Sugar inspirou o protagonista e também trabalhou como designer de cenários da série.</p></article></div><div className="rebecca-links"><a className="button ghost-light" href="https://rebeccasugar.com/" target="_blank" rel="noreferrer">Site oficial <ExternalLink/></a><a href="https://www.televisionacademy.com/bios/rebecca-sugar" target="_blank" rel="noreferrer">Biografia verificada <ExternalLink/></a></div></div></div></section>;
}
