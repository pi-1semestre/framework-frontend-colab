export type GalleryItem = { id: string; title: string; category: string; image: string; position: string };

export const galleryItems: GalleryItem[] = [
  { id: "g1", title: "As Crystal Gems", category: "Crystal Gems", image: "/crystal-gems-hero.png", position: "50% 45%" },
  { id: "g2", title: "Steven em ação", category: "Personagens", image: "/crystal-gems-sprite.png", position: "0% 0%" },
  { id: "g3", title: "Beach City", category: "Beach City", image: "/crystal-gems-hero.png", position: "45% 70%" },
  { id: "g4", title: "Garnet", category: "Fusões", image: "/crystal-gems-sprite.png", position: "100% 0%" },
  { id: "g5", title: "Homeworld", category: "Homeworld", image: "/crystal-gems-hero.png", position: "80% 15%" },
  { id: "g6", title: "Pérola e Ametista", category: "Momentos", image: "/crystal-gems-sprite.png", position: "50% 100%" },
];

export const universeItems = [
  { icon: "Waves", title: "Beach City", text: "A cidade litorânea onde Steven vive e onde o extraordinário faz parte do cotidiano." },
  { icon: "Landmark", title: "Templo das Crystal Gems", text: "Base, lar e portal para diferentes regiões ligadas à história das Gems." },
  { icon: "Orbit", title: "Homeworld", text: "Planeta de origem das Gems e centro do antigo império intergaláctico." },
  { icon: "Gem", title: "Gemas", text: "Seres de luz cuja forma física nasce de uma pedra preciosa consciente." },
  { icon: "Sparkles", title: "Fusão", text: "A união de duas ou mais Gems, expressão de confiança, conexão e identidade." },
  { icon: "Crown", title: "Império Gem", text: "Uma sociedade hierárquica que colonizou mundos antes da transformação liderada por Steven." },
  { icon: "Diamond", title: "Diamantes", text: "White, Yellow, Blue e Pink formavam a autoridade máxima de Homeworld." },
];

export const fusions = [
  ["Garnet", "Rubi + Safira", "Uma relação estável transformada em força e visão."],
  ["Opal", "Pérola + Ametista", "Precisão e espontaneidade em perfeito equilíbrio."],
  ["Sugilite", "Garnet + Ametista", "Poder imenso, intensidade e confiança explosiva."],
  ["Sardonyx", "Garnet + Pérola", "Elegância teatral, inteligência e presença de palco."],
  ["Alexandrite", "Garnet + Pérola + Ametista", "A força coletiva das Crystal Gems originais."],
  ["Rainbow Quartz", "Pérola + Rose", "Graça, beleza e uma conexão carregada de história."],
  ["Stevonnie", "Steven + Connie", "Uma experiência de confiança, descoberta e parceria."],
  ["Smoky Quartz", "Steven + Ametista", "Humor e autoaceitação unidos em uma só pessoa."],
];

export const curiosities = [
  "Steven foi inspirado em Steven Sugar, irmão mais novo de Rebecca Sugar.",
  "Rebecca Sugar foi a primeira mulher a criar uma série para o Cartoon Network.",
  "Cada personagem possui instrumentos e temas musicais que ajudam a contar sua história.",
  "Beach City reúne inspirações de cidades litorâneas de Delaware, nos Estados Unidos.",
  "As fusões funcionam como metáforas para relações, confiança e identidade compartilhada.",
  "Muitos detalhes de episódios antigos ganham novo significado após grandes revelações.",
];

export const quotes = [
  ["Se cada porco fosse perfeito, não haveria cachorro-quente.", "Steven"],
  ["O amor leva tempo e trabalho.", "Garnet"],
  ["Você precisa ser honesto sobre como se sente para seguir em frente.", "Steven"],
  ["Eu nunca pedi para ser feita, mas estou feliz por estar aqui.", "Ametista"],
  ["Quando você muda, muda para melhor.", "Steven"],
];

export const theories = [
  { id: "t1", title: "A música como memória Gem", category: "Gems", description: "Melodias poderiam funcionar como registros emocionais e ativar lembranças profundas.", votes: 328 },
  { id: "t2", title: "O futuro de Homeworld", category: "Homeworld", description: "A nova sociedade Gem pode evoluir para comunidades independentes conectadas por Steven.", votes: 241 },
  { id: "t3", title: "Os poderes de Steven continuam crescendo", category: "Steven", description: "Sua empatia pode alcançar formas ainda desconhecidas de vida pelo universo.", votes: 416 },
  { id: "t4", title: "Pink deixou mais segredos na Terra", category: "Pink Diamond", description: "Estruturas antigas podem guardar mensagens que nem mesmo Pérola conhece.", votes: 189 },
];

export const quizQuestions = [
  { question: "Como você reage diante de um problema?", answers: ["Converso com todos", "Analiso o futuro", "Crio um plano", "Improviso", "Estudo a situação", "Preciso de espaço"] },
  { question: "Qual qualidade mais combina com você?", answers: ["Empatia", "Confiança", "Dedicação", "Autenticidade", "Curiosidade", "Sensibilidade"] },
  { question: "Como você trabalha em equipe?", answers: ["Uno as pessoas", "Assumo a liderança", "Organizo tudo", "Elevo o humor", "Resolvo a parte técnica", "Ajudo no meu ritmo"] },
  { question: "Qual lugar você escolheria?", answers: ["Beach City", "Templo", "Biblioteca", "Kindergarten", "Celeiro", "Oceano"] },
  { question: "Qual cor representa você?", answers: ["Rosa", "Magenta", "Turquesa", "Lilás", "Verde", "Azul"] },
  { question: "O que é mais importante?", answers: ["Amizade", "Verdade", "Propósito", "Liberdade", "Descoberta", "Paz"] },
];
