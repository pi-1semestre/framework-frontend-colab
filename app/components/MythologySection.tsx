import Image from "next/image";
import { Compass, Sparkles } from "lucide-react";

const mythology = [
  {title:"Beach City",label:"TERRA",image:"/expanded/guide-beach-city.webp",text:"A pequena cidade costeira mantém a história humana, íntima e cotidiana — mesmo quando o universo bate à porta.",className:"myth-wide"},
  {title:"Homeworld",label:"SOCIEDADE GEM",image:"/expanded/guide-homeworld.webp",text:"O planeta de origem das Gems foi organizado por funções, castas e uma ideia rígida de perfeição.",className:"myth-tall"},
  {title:"Crystal Gems",label:"REBELIÃO",image:"/expanded/guide-gems.webp",text:"Uma família escolhida que rompeu com Homeworld para defender a vida na Terra.",className:"myth-standard"},
  {title:"A Autoridade Diamante",label:"PODER",image:"/expanded/guide-diamonds.webp",text:"Quatro líderes moldaram a antiga ordem Gem e suas colônias por milhares de anos.",className:"myth-standard"},
  {title:"Kindergartens",label:"COLONIZAÇÃO",image:"/expanded/guide-kindergarten.webp",text:"Estruturas de extração mostram o custo ambiental da criação artificial de novas Gems.",className:"myth-wide"},
  {title:"O Templo",label:"LAR",image:"/expanded/guide-temple.webp",text:"Casa, quartel e monumento vivo à história compartilhada pelas Crystal Gems.",className:"myth-standard"},
  {title:"Fusão",label:"CONEXÃO",image:"/characters/opal.webp",text:"Mais do que força: uma linguagem visual para confiança, equilíbrio, conflito e consentimento.",className:"myth-standard"},
];

export function MythologySection(){return <section className="mythology-section" id="mitologia"><div className="section mythology-intro"><div><span className="eyebrow light"><Compass size={14}/> MAPA DA MITOLOGIA</span><h2>Explore o universo<br/>de Steven</h2></div><p>Da vida tranquila em Beach City à estrutura de Homeworld, cada lugar e conceito revela uma parte da história — e das escolhas que transformam esse mundo.</p></div><div className="section mythology-grid">{mythology.map((item,index)=><article className={`myth-card ${item.className}`} key={item.title}><Image src={item.image} alt={item.title} width={900} height={620}/><div><small>{String(index+1).padStart(2,"0")} · {item.label}</small><h3>{item.title}</h3><p>{item.text}</p></div><Sparkles className="myth-gem" aria-hidden="true"/></article>)}</div></section>}
