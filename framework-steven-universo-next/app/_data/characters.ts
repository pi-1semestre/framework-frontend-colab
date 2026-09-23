export type CharacterCategory = "Gems" | "Crystal Gems" | "Diamantes" | "Fusões" | "Humanos" | "Outros";

export type Character = {
  id: string; name: string; categories: CharacterCategory[]; color: string; portrait: string;
  description: string; history: string; personality: string; powers: string; weapon: string;
  gem: string; curiosity: string; relations: string;
};

type CharacterSeed = Omit<Character, "portrait" | "history" | "personality" | "powers" | "weapon" | "gem" | "curiosity" | "relations"> & Partial<Character>;

const character = (seed: CharacterSeed): Character => ({
  portrait: seed.id,
  history: "Sua trajetória acompanha as mudanças que Steven provoca na Terra e em Homeworld.",
  personality: "Uma personalidade marcante, moldada por escolhas, afetos e conflitos.",
  powers: "Habilidades únicas que refletem sua origem e suas experiências.",
  weapon: "Talentos e recursos próprios.", gem: "Não possui Gem",
  curiosity: "Seu visual e sua identidade musical ajudam a contar sua história.",
  relations: "Conecta-se a Steven e aos demais personagens ao longo da série.",
  ...seed,
});

export const characters: Character[] = [
  character({id:"steven",name:"Steven Universe",categories:["Gems","Crystal Gems","Humanos"],color:"#f4589c",description:"O coração da história: meio-humano, meio-Gem e inteiramente empático.",history:"Filho de Greg Universe e Rose Quartz, Steven cresce protegendo a Terra e aprendendo quem deseja ser.",personality:"Otimista, acolhedor e determinado a resolver conflitos sem violência.",powers:"Escudo, bolha, cura, flutuação e empatia psíquica.",weapon:"Escudo rosa",gem:"Diamante Rosa",relations:"Filho de Greg e Rose; melhor amigo de Connie; membro das Crystal Gems."}),
  character({id:"garnet",name:"Garnet",categories:["Gems","Crystal Gems","Fusões"],color:"#a62979",description:"A líder firme que representa confiança, escolha e amor.",personality:"Calma, segura e protetora.",powers:"Visão do futuro, força e resistência.",weapon:"Manoplas",gem:"Rubi e Safira",relations:"Fusão estável de Rubi e Safira."}),
  character({id:"amethyst",name:"Ametista",categories:["Gems","Crystal Gems"],color:"#9870d0",description:"Espontânea, irreverente e muito mais sensível do que demonstra.",personality:"Divertida, impulsiva e leal.",powers:"Metamorfose, força e flexibilidade.",weapon:"Chicote",gem:"Ametista"}),
  character({id:"pearl",name:"Pérola",categories:["Gems","Crystal Gems"],color:"#53d6d7",description:"Estrategista elegante, dedicada e apaixonada pela Terra.",personality:"Precisa, cuidadosa e inteligente.",powers:"Agilidade, hologramas e domínio de combate.",weapon:"Lança",gem:"Pérola"}),
  character({id:"greg",name:"Greg Universe",categories:["Humanos"],color:"#e4ad50",description:"Pai amoroso de Steven e músico de coração livre.",personality:"Gentil, descontraído e emocionalmente inteligente.",weapon:"Violão",relations:"Pai de Steven e antigo amor de Rose Quartz."}),
  character({id:"connie",name:"Connie Maheswaran",categories:["Crystal Gems","Humanos"],color:"#d98c62",description:"Melhor amiga de Steven, leitora voraz e habilidosa espadachim.",personality:"Curiosa, estudiosa e corajosa.",weapon:"Espada",relations:"Melhor amiga de Steven e metade de Stevonnie."}),

  character({id:"peridot",name:"Peridot",categories:["Gems","Crystal Gems"],color:"#93cf3b",description:"Uma técnica brilhante que aprende a amar a Terra.",powers:"Ferrocinese e tecnologia Gem.",weapon:"Controle de metal",gem:"Peridoto",relations:"Amiga de Lápis e aliada das Crystal Gems."}),
  character({id:"lapis",name:"Lápis Lazúli",categories:["Gems","Crystal Gems"],color:"#2da7e8",description:"Poderosa, introspectiva e profundamente conectada ao oceano.",powers:"Hidrocinese, asas de água e voo.",weapon:"Água",gem:"Lápis-lazúli"}),
  character({id:"rose",name:"Rose Quartz",categories:["Gems","Crystal Gems","Diamantes"],color:"#f49abd",description:"A identidade assumida por Pink Diamond para liderar a rebelião e proteger a Terra.",powers:"Cura, escudo, força e plantas.",weapon:"Espada e escudo",gem:"Diamante Rosa",relations:"Mãe de Steven, antiga líder das Crystal Gems e identidade de Pink Diamond."}),
  character({id:"pink",name:"Pink Diamond",categories:["Gems","Diamantes"],color:"#ff78b0",description:"A mais jovem das Diamantes, que assumiu a identidade de Rose Quartz e mudou o destino da Terra.",powers:"Aura destrutiva, cura e metamorfose.",gem:"Diamante Rosa"}),
  character({id:"ruby",name:"Rubi",categories:["Gems","Crystal Gems"],color:"#e84f5b",description:"Pequena, impulsiva e dona de uma paixão gigantesca.",powers:"Calor, força e resistência.",weapon:"Manopla",gem:"Rubi",relations:"Ama Safira e forma Garnet com ela."}),
  character({id:"sapphire",name:"Safira",categories:["Gems","Crystal Gems"],color:"#5ba8e8",description:"Serena e capaz de enxergar possibilidades do futuro.",powers:"Visão do futuro e criocinese.",gem:"Safira",relations:"Ama Rubi e forma Garnet com ela."}),
  character({id:"bismuth",name:"Bismuto",categories:["Gems","Crystal Gems"],color:"#63c5b0",description:"Ferreira das Crystal Gems, forte, criativa e apaixonada pela liberdade.",powers:"Força e manipulação de metal aquecido.",weapon:"Martelos e ferramentas",gem:"Bismuto"}),

  character({id:"yellow",name:"Yellow Diamond",categories:["Gems","Diamantes"],color:"#e7cd44",description:"Comandante rígida e poderosa da antiga ordem Gem.",powers:"Desestabilização elétrica e alteração física.",gem:"Diamante Amarelo"}),
  character({id:"blue",name:"Blue Diamond",categories:["Gems","Diamantes"],color:"#609fe2",description:"Uma Diamante marcada pelo luto e por emoções intensas.",powers:"Aura emocional e alteração física.",gem:"Diamante Azul"}),
  character({id:"white",name:"White Diamond",categories:["Gems","Diamantes"],color:"#e9e1f2",description:"A autoridade máxima e símbolo do perfeccionismo de Homeworld.",powers:"Controle mental e projeção de luz.",gem:"Diamante Branco"}),
  character({id:"spinel",name:"Spinel",categories:["Gems","Outros"],color:"#e33c88",description:"Uma antiga companheira de Pink Diamond que transforma abandono em caos e recomeço.",powers:"Elasticidade extrema.",weapon:"Rejuvenecedor",gem:"Espinélio"}),
  character({id:"jasper",name:"Jasper",categories:["Gems","Outros"],color:"#e58b42",description:"Uma guerreira feroz obcecada por força e hierarquia.",powers:"Força extrema, giro e corrupção parcial.",weapon:"Capacete",gem:"Jaspe"}),
  character({id:"aquamarine",name:"Aquamarine",categories:["Gems","Outros"],color:"#79cde5",description:"Pequena agente de Homeworld, calculista e perigosa.",powers:"Voo e tecnologia de contenção.",weapon:"Varinha",gem:"Água-marinha"}),
  character({id:"topaz",name:"Topázio",categories:["Gems","Fusões","Outros"],color:"#e6c941",description:"Uma fusão de duas Topázios usada em missões de captura.",powers:"Força, resistência e fusão estável.",gem:"Duas Topázios"}),

  character({id:"lars",name:"Lars Barriga",categories:["Humanos"],color:"#c95c72",description:"De adolescente inseguro a capitão corajoso das Off Colors."}),
  character({id:"sadie",name:"Sadie Miller",categories:["Humanos"],color:"#d9a653",description:"Ex-funcionária do Big Donut que encontra sua voz na música."}),
  character({id:"ronaldo",name:"Ronaldo Fryman",categories:["Humanos"],color:"#cf8b55",description:"Blogueiro local sempre em busca de conspirações e fenômenos estranhos."}),
  character({id:"onion",name:"Onion",categories:["Humanos"],color:"#efe2a7",description:"Misterioso, imprevisível e dono de uma lógica muito particular."}),
  character({id:"sour-cream",name:"Sour Cream",categories:["Humanos"],color:"#d5d07a",description:"DJ tranquilo que transforma Beach City em uma grande pista."}),
  character({id:"buck",name:"Buck Dewey",categories:["Humanos"],color:"#65537f",description:"Descolado, observador e filho do antigo prefeito da cidade."}),
  character({id:"jenny",name:"Jenny Pizza",categories:["Humanos"],color:"#df6a91",description:"Uma das Cool Kids, confiante e sempre pronta para se divertir."}),
  character({id:"kiki",name:"Kiki Pizza",categories:["Humanos"],color:"#7fc4c9",description:"Responsável, trabalhadora e dedicada à família Pizza."}),
  character({id:"mayor-dewey",name:"Prefeito Dewey",categories:["Humanos"],color:"#6e89bc",description:"O antigo prefeito que tenta manter Beach City sob controle."}),
  character({id:"smiley",name:"Sr. Smiley",categories:["Humanos"],color:"#7b5b9e",description:"Administrador incansável do parque e fliperama de Beach City."}),
  character({id:"vidalia",name:"Vidalia",categories:["Humanos"],color:"#c88f66",description:"Artista, mãe de Sour Cream e Onion e velha amiga de Ametista."}),
  character({id:"nanefua",name:"Nanefua Pizza",categories:["Humanos"],color:"#d98271",description:"Matriarca da família Pizza e futura prefeita da cidade."}),
  character({id:"lion",name:"Lion",categories:["Outros"],color:"#ef82ad",description:"O leão mágico de Steven, guardião silencioso de portais e segredos de Rose.",powers:"Portais dimensionais, caminhada sobre água e rugido sônico.",weapon:"Rugido",relations:"Companheiro de Steven e ligado ao passado de Rose Quartz."}),

  character({id:"stevonnie",name:"Stevonnie",categories:["Gems","Fusões"],color:"#bb70a6",description:"Steven e Connie unidos em confiança, descoberta e parceria.",gem:"Diamante Rosa",relations:"Fusão de Steven e Connie."}),
  character({id:"opal",name:"Opal",categories:["Gems","Fusões"],color:"#9d78cf",description:"Precisão e espontaneidade em perfeito equilíbrio.",weapon:"Arco",gem:"Pérola e Ametista",relations:"Fusão de Pérola e Ametista."}),
  character({id:"alexandrite",name:"Alexandrite",categories:["Gems","Fusões"],color:"#704a9c",description:"A força coletiva das Crystal Gems originais.",gem:"Rubi, Safira, Pérola e Ametista",relations:"Fusão de Garnet, Pérola e Ametista."}),
  character({id:"sardonyx",name:"Sardonyx",categories:["Gems","Fusões"],color:"#d45280",description:"Elegância teatral, inteligência e presença de palco.",weapon:"Martelo",gem:"Rubi, Safira e Pérola",relations:"Fusão de Garnet e Pérola."}),
  character({id:"sugilite",name:"Sugilite",categories:["Gems","Fusões"],color:"#7e3a9b",description:"Poder imenso, intensidade e confiança explosiva.",weapon:"Mangual",gem:"Rubi, Safira e Ametista",relations:"Fusão de Garnet e Ametista."}),
  character({id:"smoky",name:"Smoky Quartz",categories:["Gems","Fusões"],color:"#9a79ba",description:"Humor e autoaceitação unidos em uma só pessoa.",weapon:"Ioiô",gem:"Diamante Rosa e Ametista",relations:"Fusão de Steven e Ametista."}),
  character({id:"malachite",name:"Malachite",categories:["Gems","Fusões"],color:"#4fc0a7",description:"Uma fusão instável que representa controle, dor e conflito.",gem:"Jaspe e Lápis-lazúli",relations:"Fusão de Jasper e Lápis."}),
];

export const characterFilters = ["Todos", "Gems", "Crystal Gems", "Diamantes", "Fusões", "Humanos", "Outros"] as const;
