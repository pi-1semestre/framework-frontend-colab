import { Award, ExternalLink, Trophy } from "lucide-react";

const awards = [
  {year:"2018",name:"Peabody Award",result:"VENCEDORA",work:"Steven Universe",text:"Reconhecimento pela narrativa acolhedora e pela forma como a série explora identidade e comunidade.",url:"https://peabodyawards.com/award-profile/steven-universe/"},
  {year:"2018",name:"Primetime Emmy",result:"VENCEDORA",work:"Jungle Moon",text:"Patrick Bryson recebeu o prêmio de Outstanding Individual Achievement in Animation.",url:"https://www.televisionacademy.com/shows/steven-universe"},
  {year:"2015–2019",name:"Primetime Emmy",result:"6 INDICAÇÕES · 1 VITÓRIA",work:"Série original",text:"A Television Academy registra trabalhos como Lion 3, The Answer, Mr. Greg, Jungle Moon e Reunited.",url:"https://www.televisionacademy.com/shows/steven-universe"},
  {year:"2018",name:"GLAAD Media Awards",result:"INDICADA",work:"Steven Universe",text:"Indicada na categoria Outstanding Kids & Family Programming.",url:"https://glaad.org/releases/disney-channels-andi-mack-wins-inaugural-glaad-media-award-outstanding-kids-family/"},
  {year:"2020",name:"GLAAD Media Awards",result:"INDICADO",work:"Steven Universe: The Movie",text:"O filme apareceu entre os indicados de Outstanding Kids & Family Programming.",url:"https://glaad.org/mediaawards/31/nominees/"},
  {year:"2021",name:"GLAAD Media Awards",result:"INDICADA",work:"Steven Universe / Future",text:"A franquia voltou à seleção de programação infantil e familiar do prêmio.",url:"https://glaad.org/releases/glaad-announces-nominees-32nd-annual-glaad-media-awards/"},
];

export function AwardsSection(){return <section className="awards-section" id="premios"><div className="section"><div className="section-heading awards-heading"><div><span className="eyebrow light"><Trophy size={14}/> PRÊMIOS E INDICAÇÕES</span><h2>Reconhecimento verificado</h2></div><p>Registros oficiais da Television Academy, Peabody Awards e GLAAD.</p></div><div className="awards-grid">{awards.map(item=><a href={item.url} target="_blank" rel="noreferrer" key={`${item.name}-${item.year}-${item.work}`}><Award/><small>{item.year} · {item.result}</small><h3>{item.name}</h3><strong>{item.work}</strong><p>{item.text}</p><span>Consultar fonte <ExternalLink/></span></a>)}</div></div></section>}
