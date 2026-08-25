import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

type CategoriaPersonagem =
  'Principais' | 'Amigos' | 'Secundários' | 'Sobrenaturais' | 'Antagonistas';

interface Personagem {
  id: string;
  nome: string;
  categoria: CategoriaPersonagem;
  subtitulo: string;
  descricao: string;
  imagem: string;
}

interface ItemUniverso {
  icone: string;
  titulo: string;
  descricao: string;
}

interface Curiosidade {
  numero: string;
  titulo: string;
  texto: string;
}

interface Teoria {
  numero: string;
  titulo: string;
  texto: string;
  spoiler?: boolean;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  menuAberto = false;
  categoriaSelecionada = 'Todos';
  playerVisivel = false;
  readonly anoAtual = new Date().getFullYear();

  readonly categorias = [
    'Todos',
    'Principais',
    'Amigos',
    'Secundários',
    'Sobrenaturais',
    'Antagonistas',
  ];

  readonly personagens: Personagem[] = [
    {
      id: 'pepe',
      nome: 'Pepe',
      categoria: 'Principais',
      subtitulo: 'O entregador de poções',
      descricao:
        'Garoto de 11 anos que ajuda a Vó nas entregas mágicas — e transforma quase toda missão em uma aventura sobrenatural.',
      imagem: 'assets/images/pepe.jpg',
    },
    {
      id: 'vo',
      nome: 'Vó',
      categoria: 'Principais',
      subtitulo: 'A bruxa das encomendas',
      descricao:
        'Avó de Pepe, prepara poções, negocia artefatos e conhece regras do mundo sobrenatural que nem sempre explica.',
      imagem: 'assets/images/vo.jpg',
    },
    {
      id: 'marilu',
      nome: 'Marilu',
      categoria: 'Principais',
      subtitulo: 'A melhor amiga',
      descricao:
        'Leal e corajosa, acompanha Pepe quando as ideias dele atravessam a fronteira entre confusão e perigo.',
      imagem: 'assets/images/marilu.jpg',
    },
    {
      id: 'ramirez',
      nome: 'Ramirez',
      categoria: 'Principais',
      subtitulo: 'O companheiro canino',
      descricao:
        'Husky siberiano de Pepe, é um companheiro leal e atento às ameaças que rondam a mansão da Vó.',
      imagem: 'assets/images/ramirez.png',
    },
    {
      id: 'beto',
      nome: 'Beto',
      categoria: 'Amigos',
      subtitulo: 'O fortão gentil',
      descricao:
        'Também conhecido como Roberto Massa, é o amigo esportista da turma e, apesar da força, deixou o bullying para trás.',
      imagem: 'assets/images/beto.jpg',
    },
    {
      id: 'ritinha',
      nome: 'Ritinha',
      categoria: 'Amigos',
      subtitulo: 'A amiga observadora',
      descricao:
        'Gentil e atenta, participa das aventuras com um olhar diferente sobre as estranhezas ao redor.',
      imagem: 'assets/images/ritinha.jpg',
    },
    {
      id: 'guto',
      nome: 'Guto',
      categoria: 'Amigos',
      subtitulo: 'O gêmeo otimista',
      descricao:
        'Irmão siamês de Gastón, divide com ele o mesmo corpo — e nem sempre a mesma opinião sobre os planos de Pepe.',
      imagem: 'assets/images/guto.jpg',
    },
    {
      id: 'gaston',
      nome: 'Gastón',
      categoria: 'Amigos',
      subtitulo: 'O gêmeo desconfiado',
      descricao:
        'Irmão siamês de Guto, costuma reagir às confusões da turma com um temperamento bem menos paciente.',
      imagem: 'assets/images/gaston.jpg',
    },
    {
      id: 'mario',
      nome: 'Mário',
      categoria: 'Secundários',
      subtitulo: 'O rival involuntário',
      descricao:
        'Educado e estudioso, vira rival de Pepe justamente por parecer seu completo oposto.',
      imagem: 'assets/images/mario.jpg',
    },
    {
      id: 'morte',
      nome: 'A Morte',
      categoria: 'Sobrenaturais',
      subtitulo: 'Mensageira do além',
      descricao:
        'Irmã mais nova da Vó e tia-avó de Pepe, atua como porteira interdimensional entre vivos e mortos.',
      imagem: 'assets/images/morte.jpg',
    },
    {
      id: 'loira-do-banheiro',
      nome: 'Loira do Banheiro',
      categoria: 'Sobrenaturais',
      subtitulo: 'A lenda do espelho',
      descricao:
        'Uma versão traiçoeira da famosa lenda escolar, chamada quando uma ideia de Pepe sai do controle.',
      imagem: 'assets/images/loira-do-banheiro.jpg',
    },
    {
      id: 'cupido',
      nome: 'Cupido',
      categoria: 'Sobrenaturais',
      subtitulo: 'O agente do amor',
      descricao:
        'Criatura do Túnel do Amor cujos poderes transformam sentimentos em uma confusão difícil de desfazer.',
      imagem: 'assets/images/cupido.jpg',
    },
    {
      id: 'diabo',
      nome: 'Diabo',
      categoria: 'Sobrenaturais',
      subtitulo: 'O negociante misterioso',
      descricao:
        'Uma criatura do universo da série que transforma acordos e desejos em problemas cheios de efeitos colaterais.',
      imagem: 'assets/images/diabo.jpg',
    },
    {
      id: 'sergio',
      nome: 'Sérgio',
      categoria: 'Secundários',
      subtitulo: 'A criatura responsável',
      descricao:
        'A antiga tartaruga de Mário vira um mutante forte, exigente e surpreendentemente responsável após uma magia de Pepe.',
      imagem: 'assets/images/sergio.jpg',
    },
    {
      id: 'antagonista',
      nome: 'Edmundo',
      categoria: 'Antagonistas',
      subtitulo: 'O antagonista do filme',
      descricao:
        'Vilão biomecânico que precisa da energia de Pepe para tentar alcançar a imortalidade de sua espécie.',
      imagem: 'assets/images/antagonista.jpg',
    },
    {
      id: 'bicho-papao',
      nome: 'Bicho-Papão',
      categoria: 'Antagonistas',
      subtitulo: 'A criatura de Faroeste Cachorro',
      descricao:
        'Criatura que sequestra Pepe em “Faroeste Cachorro” e obriga Ramirez a enfrentar seus medos para salvar o dono.',
      imagem: 'assets/images/bicho-papao.jpg',
    },
    {
      id: 'homem-anta',
      nome: 'Homem-Anta',
      categoria: 'Antagonistas',
      subtitulo: 'O terror do dia da foto',
      descricao:
        'Aluno misterioso que foge da detenção no dia da foto para sujar as roupas e arruinar o visual da turma.',
      imagem: 'assets/images/homem-anta.jpg',
    },
  ];

  readonly universo: ItemUniverso[] = [
    {
      icone: '☠',
      titulo: 'Monstros',
      descricao:
        'Criaturas exageradas transformam medos infantis em desafios tão estranhos quanto divertidos.',
    },
    {
      icone: '◌',
      titulo: 'Fantasmas',
      descricao:
        'Aparições atravessam casas, escolas e espelhos como se o além morasse logo ao lado.',
    },
    {
      icone: '⚗',
      titulo: 'Poções',
      descricao:
        'Os produtos da Vó prometem soluções rápidas, mas uma dose errada costuma abrir a próxima aventura.',
    },
    {
      icone: '✦',
      titulo: 'Magia',
      descricao:
        'Feitiços e artefatos obedecem a regras próprias — quase sempre descobertas tarde demais.',
    },
    {
      icone: '☾',
      titulo: 'Lendas',
      descricao:
        'Medos contados no recreio, como a Loira do Banheiro, ganham novas versões e muito humor.',
    },
    {
      icone: '⌁',
      titulo: 'Folclore',
      descricao:
        'Referências brasileiras aproximam o fantástico da cultura popular e das histórias contadas em família.',
    },
    {
      icone: '◈',
      titulo: 'Mundo sobrenatural',
      descricao:
        'Um plano estranho cruza a cidade comum por meio de clientes, portais e criaturas inesperadas.',
    },
  ];

  readonly curiosidades: Curiosidade[] = [
    {
      numero: '01',
      titulo: 'Antes da TV',
      texto:
        'A obra nasceu de um curta-metragem lançado em 2005, escrito e dirigido por Victor-Hugo Borges.',
    },
    {
      numero: '02',
      titulo: 'Estreia em 2013',
      texto:
        'A série chegou ao Cartoon Network em março de 2013 com histórias de aproximadamente 11 minutos.',
    },
    {
      numero: '03',
      titulo: 'Duas temporadas',
      texto: 'A produção soma 40 episódios: 14 na primeira temporada e 26 na segunda.',
    },
    {
      numero: '04',
      titulo: 'Feita no Brasil',
      texto:
        'A série reuniu Glaz, Copa Studio, TV Brasil, Fundo Setorial do Audiovisual e Cartoon Network.',
    },
    {
      numero: '05',
      titulo: 'Tela grande',
      texto:
        'Em 2017, esse universo ganhou um longa-metragem de 90 minutos dirigido por Victor-Hugo Borges.',
    },
    {
      numero: '06',
      titulo: 'Som original',
      texto:
        'A abertura da série tem música de Julia Ghoulia e Corey Gorey e animação do Copa Studio.',
    },
  ];

  readonly teorias: Teoria[] = [
    {
      numero: '01',
      titulo: 'O passado da Vó',
      texto:
        'Quanto de sua longa experiência explica a intimidade com tantos feitiços, clientes e criaturas?',
    },
    {
      numero: '02',
      titulo: 'A família de Pepe',
      texto:
        'As revelações sobre a origem do garoto mudam a forma de interpretar seus encontros sobrenaturais?',
      spoiler: true,
    },
    {
      numero: '03',
      titulo: 'O segredo de Ramirez',
      texto:
        'Ele percebe magia antes dos humanos por puro instinto — ou por conhecer melhor a casa da Vó?',
    },
    {
      numero: '04',
      titulo: 'A origem das criaturas',
      texto:
        'Monstros e fantasmas poderiam atravessar os mesmos caminhos invisíveis espalhados pela cidade?',
    },
    {
      numero: '05',
      titulo: 'Vó e Morte',
      texto:
        'Que histórias as duas irmãs viveram juntas antes das aventuras acompanhadas por Pepe?',
    },
    {
      numero: '06',
      titulo: 'O plano do Antagonista',
      texto:
        'A busca de Edmundo pela imortalidade esconde apenas ambição ou também o medo de desaparecer?',
    },
  ];

  get personagensFiltrados(): Personagem[] {
    if (this.categoriaSelecionada === 'Todos') {
      return this.personagens;
    }

    return this.personagens.filter(
      (personagem) => personagem.categoria === this.categoriaSelecionada,
    );
  }

  selecionarCategoria(categoria: string): void {
    this.categoriaSelecionada = categoria;
  }

  alternarMenu(): void {
    this.menuAberto = !this.menuAberto;
  }

  fecharMenu(): void {
    this.menuAberto = false;
  }

  alternarPlayer(): void {
    this.playerVisivel = !this.playerVisivel;
  }

  @HostListener('document:keydown.escape')
  fecharComEscape(): void {
    this.menuAberto = false;
  }
}
