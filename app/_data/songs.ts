export type Song = {
  id: string;
  title: string;
  character: string;
  duration: string;
  portrait: string;
  youtube: string;
  episode: string;
  context: string;
};

export const songs: Song[] = [
  { id:"crystal-gems",title:"We Are the Crystal Gems",character:"Crystal Gems",duration:"0:26",portrait:"steven",youtube:"https://www.youtube.com/watch?v=eSD5hjpyBO0",episode:"Abertura da série",context:"Apresenta a missão e a união das Crystal Gems." },
  { id:"stronger",title:"Stronger Than You",character:"Garnet",duration:"2:52",portrait:"garnet",youtube:"https://www.youtube.com/watch?v=F4AJfasBRxA",episode:"Jail Break",context:"Garnet afirma sua identidade e o poder de sua relação." },
  { id:"love",title:"Love Like You",character:"Rebecca Sugar",duration:"2:06",portrait:"rose",youtube:"https://www.youtube.com/watch?v=9vPYLsjVc-M",episode:"Créditos das temporadas 1 a 3",context:"Canção de encerramento que ganhou versos ao longo da série." },
  { id:"thought",title:"Here Comes a Thought",character:"Garnet & Stevonnie",duration:"3:22",portrait:"garnet",youtube:"https://www.youtube.com/watch?v=o_Bb6iLLLkU",episode:"Mindful Education",context:"Uma meditação musical sobre ansiedade, culpa e acolhimento." },
  { id:"peace",title:"Peace and Love on the Planet Earth",character:"Peridot e Crystal Gems",duration:"2:35",portrait:"peridot",youtube:"https://www.youtube.com/watch?v=412rXbG0xwk",episode:"It Could've Been Great",context:"Peridot descobre a beleza da música e da vida na Terra." },
  { id:"change",title:"Change Your Mind",character:"Steven",duration:"1:30",portrait:"steven",youtube:"https://www.youtube.com/watch?v=aA-o2vmlCOM",episode:"Change Your Mind",context:"Um encerramento íntimo sobre respeito, mudança e amor próprio." },
];
