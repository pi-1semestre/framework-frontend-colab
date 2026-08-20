import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Steven Universo",
  description: "Página sobre Steven Universo - série animada do Cartoon Network",
};

export default function StevenUniversePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-white dark:from-purple-950 dark:via-pink-950 dark:to-black">
      {/* Banner / Início */}
      <section className="relative h-[500px] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
            Steven Universo
          </h1>
          <p className="text-xl md:text-2xl italic max-w-2xl mx-auto font-light">
            &ldquo;Se você não consegue mudar o passado, precisa aprender a seguir em frente.&rdquo;
          </p>
        </div>
      </section>

      {/* Sinopse / História da Obra */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-purple-900 dark:text-purple-300 mb-8 flex items-center gap-3">
          📖 Sinopse / História da Obra
        </h2>

        <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <div>
            <h3 className="text-2xl font-semibold text-purple-800 dark:text-purple-400 mb-3">
              Apresentação do desenho
            </h3>
            <p className="mb-4">
              <strong>Steven Universo</strong> é uma série de animação criada por{" "}
              <strong>Rebecca Sugar</strong> e produzida pelo <strong>Cartoon Network Studios</strong>.
              A história acompanha Steven, um garoto meio humano e meio Gem que vive na cidade de Beach City
              ao lado das Crystal Gems: Garnet, Ametista e Pérola.
            </p>
            <p>
              A série mistura aventura, ficção científica, fantasia e comédia com temas como amizade, família,
              identidade, amadurecimento, amor e superação.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-purple-800 dark:text-purple-400 mb-3">
              Sinopse
            </h3>
            <p className="mb-4">
              Steven é filho de <strong>Rose Quartz</strong>, uma Crystal Gem que abriu mão de sua forma física
              para que ele pudesse nascer. Após a morte de sua mãe, Steven passa a viver com Garnet, Ametista e
              Pérola, que precisam ensiná-lo a controlar seus poderes e compreender sua origem.
            </p>
            <p>
              Enquanto enfrenta ameaças vindas do espaço e descobre cada vez mais sobre o passado de sua mãe,
              Steven percebe que a história das Crystal Gems é muito mais complexa do que imaginava. Ao longo da
              série, ele descobre segredos sobre Rose Quartz, as Diamantes e o planeta natal das Gems,
              tornando-se cada vez mais importante para o futuro de humanos e Gems.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-purple-800 dark:text-purple-400 mb-3">
              Origem e história da produção
            </h3>
            <p>
              A série foi criada por <strong>Rebecca Sugar</strong>, que anteriormente trabalhou como roteirista
              e artista de storyboard em <em>Hora de Aventura</em>. <strong>Steven Universo</strong> estreou no
              Cartoon Network em <strong>2013</strong> e se tornou uma das produções mais marcantes do canal.
              A obra posteriormente ganhou o filme <strong>Steven Universo: O Filme</strong> e a continuação{" "}
              <strong>Steven Universo Futuro</strong>, que funciona como um epílogo para a história principal.
            </p>
          </div>
        </div>
      </section>

      {/* Personagens */}
      <section className="bg-gradient-to-b from-transparent via-purple-100 to-transparent dark:from-transparent dark:via-purple-900/30 dark:to-transparent py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-purple-900 dark:text-purple-300 mb-10 flex items-center gap-3">
            👥 Personagens
          </h2>

          <div className="space-y-12">
            {/* Protagonista */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-400 mb-3">
                Protagonista
              </h3>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Steven Universo
              </h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Steven é o protagonista da série. Ele é metade humano e metade Gem e possui a pedra de{" "}
                <strong>Rose Quartz</strong> em seu umbigo. Apesar de inicialmente não saber controlar seus
                poderes, Steven desenvolve habilidades como escudos, cura, formação de bolhas e manipulação de
                sua própria forma. Sua principal característica é a empatia. Em vez de simplesmente derrotar seus
                inimigos, ele frequentemente tenta compreender seus sentimentos e encontrar uma solução pacífica.
              </p>
            </div>

            {/* Personagens secundários */}
            <div>
              <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-400 mb-6">
                Personagens secundários
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Garnet
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Uma das Crystal Gems e representa a fusão permanente de <strong>Rubi e Safira</strong>.
                    Ela é forte, determinada e possui a capacidade de prever diferentes possibilidades do futuro.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Ametista
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Impulsiva, divertida e extremamente descontraída. Apesar de suas inseguranças, demonstra
                    grande lealdade aos amigos e à família.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Pérola
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Inteligente, organizada e habilidosa. Ela possui uma forte ligação com Rose Quartz e carrega
                    muitos sentimentos relacionados ao passado das Crystal Gems.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Connie Maheswaran
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Melhor amiga de Steven. Ela aprende a lutar com espada e se torna uma importante parceira
                    de Steven em diversas aventuras.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Greg Universo
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Pai de Steven. Ex-músico e dono de uma van, ele representa a parte humana da vida de Steven
                    e possui uma relação muito próxima com o filho.
                  </p>
                </div>
              </div>
            </div>

            {/* Vilões */}
            <div>
              <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-400 mb-6">
                Vilões
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-900 dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-700">
                  <h4 className="text-lg font-semibold text-gray-100 mb-2">
                    Diamante Branco (White Diamond)
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Uma das entidades mais poderosas do Império Gem. Representa a autoridade máxima entre as
                    Diamantes e acredita que todas as Gems devem seguir padrões rígidos.
                  </p>
                </div>
                <div className="bg-gray-900 dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-700">
                  <h4 className="text-lg font-semibold text-gray-100 mb-2">
                    Diamante Amarelo (Yellow Diamond)
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Responsável por grande parte das operações militares do Império Gem. Extremamente poderosa
                    e possui uma personalidade autoritária.
                  </p>
                </div>
                <div className="bg-gray-900 dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-700">
                  <h4 className="text-lg font-semibold text-gray-100 mb-2">
                    Diamante Azul (Blue Diamond)
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Associada à tristeza e ao luto pela perda de Pink Diamond. Apesar de sua posição de poder,
                    demonstra grande sensibilidade emocional.
                  </p>
                </div>
                <div className="bg-gray-900 dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-700">
                  <h4 className="text-lg font-semibold text-gray-100 mb-2">
                    Spinel
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Aparece como uma das principais antagonistas de <em>Steven Universo: O Filme</em>.
                    Possui uma ligação com Pink Diamond e retorna buscando vingança após se sentir abandonada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Universo */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-purple-900 dark:text-purple-300 mb-10 flex items-center gap-3">
          🌎 Universo
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-purple-800 dark:text-purple-400 mb-4">
              Mundo onde a história acontece
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              A maior parte da história acontece em <strong>Beach City</strong>, uma cidade localizada na Terra
              onde humanos e Gems convivem. A Terra também foi palco de uma antiga guerra entre as Crystal Gems
              e o Império Gem.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-purple-800 dark:text-purple-400 mb-4">
              Lugares importantes
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>Templo das Crystal Gems</strong> — residência e base das Crystal Gems.</li>
              <li><strong>Beach City</strong> — cidade onde Steven vive.</li>
              <li><strong>Big Donut</strong> — estabelecimento conhecido da cidade.</li>
              <li><strong>The Boardwalk</strong> — área de entretenimento de Beach City.</li>
              <li><strong>Homeworld</strong> — planeta de origem das Gems.</li>
              <li><strong>Reino das Diamantes</strong> — região associada ao poder central do Império Gem.</li>
              <li><strong>Jardim de Spinel</strong> — local apresentado em <em>Steven Universo: O Filme</em>.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-purple-800 dark:text-purple-400 mb-4">
              Elementos e conceitos do desenho
            </h3>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
                <h4 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-3">
                  Gems
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  As Gems são seres alienígenas que utilizam pedras preciosas como núcleo de sua existência.
                  Seus corpos físicos são projeções de energia.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
                <h4 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-3">
                  Fusão
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  A fusão acontece quando duas ou mais Gems combinam seus corpos e consciências, criando uma
                  nova entidade.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li><strong>Garnet</strong> = Rubi + Safira</li>
                  <li><strong>Opal</strong> = Pérola + Ametista</li>
                  <li><strong>Sugilite</strong> = Garnet + Ametista</li>
                  <li><strong>Sardonyx</strong> = Garnet + Pérola</li>
                  <li><strong>Stevonnie</strong> = Steven + Connie</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
                <h4 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-3">
                  Bolhas
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Steven e as Crystal Gems podem utilizar bolhas para proteger e armazenar Gems derrotadas
                  ou objetos importantes.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
                <h4 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-3">
                  Império Gem
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  É a grande sociedade formada pelas Gems fora da Terra. O sistema é organizado de maneira
                  extremamente hierárquica, com as Diamantes ocupando o topo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trilha Sonora */}
      <section className="bg-gradient-to-b from-transparent via-pink-100 to-transparent dark:from-transparent dark:via-pink-900/30 dark:to-transparent py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-purple-900 dark:text-purple-300 mb-10 flex items-center gap-3">
            🎵 Trilha Sonora
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-purple-800 dark:text-purple-400 mb-3">
                Abertura
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                A abertura apresenta Steven e as Crystal Gems e utiliza a música <strong>“We Are the Crystal Gems”</strong>,
                uma das músicas mais reconhecidas da série.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-purple-800 dark:text-purple-400 mb-3">
                Encerramento
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                A série possui diferentes versões e encerramentos ao longo de sua produção, acompanhando mudanças
                de temporadas e momentos da história.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-purple-800 dark:text-purple-400 mb-3">
                Músicas marcantes
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>“Stronger Than You”</li>
                <li>“Love Like You”</li>
                <li>“Here Comes a Thought”</li>
                <li>“It&rsquo;s Over, Isn&rsquo;t It?”</li>
                <li>“Peace and Love on the Planet Earth”</li>
                <li>“Other Friends”</li>
                <li>“Change Your Mind”</li>
                <li>“We Are the Crystal Gems”</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-purple-800 dark:text-purple-400 mb-3">
                Compositores
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                A trilha sonora contou com a participação de diversos compositores, músicos e artistas,
                com destaque para <strong>Rebecca Sugar</strong>, <strong>Aivi &amp; Surasshu</strong> e outros
                colaboradores da produção.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Autores / Criadores */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-purple-900 dark:text-purple-300 mb-10 flex items-center gap-3">
          ✍️ Autores / Criadores
        </h2>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-3">
              Criadora
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Rebecca Sugar</strong> — criadora de <em>Steven Universo</em> e responsável por grande parte
              da identidade artística e narrativa da série.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-3">
              Roteiristas
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              A série contou com diversos roteiristas e artistas de storyboard ao longo de suas temporadas,
              incluindo a própria Rebecca Sugar e outros membros da equipe criativa.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-3">
              Diretores
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              A produção teve diferentes diretores e supervisores durante suas temporadas, acompanhando a
              evolução da série.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-3">
              Estúdio responsável
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Cartoon Network Studios</strong> — A série foi produzida para o <strong>Cartoon Network</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Curiosidades */}
      <section className="bg-gradient-to-b from-transparent via-purple-100 to-transparent dark:from-transparent dark:via-purple-900/30 dark:to-transparent py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-purple-900 dark:text-purple-300 mb-10 flex items-center gap-3">
            🔎 Curiosidades
          </h2>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-3">
                Easter eggs
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                A série possui diversas referências escondidas relacionadas a episódios anteriores, personagens
                e acontecimentos do passado das Crystal Gems.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-3">
                Referências
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <em>Steven Universo</em> apresenta referências a música, cultura pop, ficção científica,
                anime e outras obras de animação.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-3">
                Bastidores
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Rebecca Sugar foi a <strong>primeira mulher a criar sozinha uma série original para o Cartoon Network</strong>.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-4">
                Detalhes interessantes
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Steven recebeu seu nome em homenagem ao irmão de Rebecca Sugar.</li>
                <li>As Gems possuem inspiração em diferentes conceitos de pedras preciosas e elementos visuais.</li>
                <li>A música possui um papel fundamental na narrativa.</li>
                <li>Muitas informações importantes sobre os personagens são apresentadas através de músicas.</li>
                <li>A série aborda temas complexos utilizando uma linguagem acessível para diferentes idades.</li>
                <li>A história foi planejada para revelar gradualmente os mistérios envolvendo Rose Quartz e as Diamantes.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Teorias */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-purple-900 dark:text-purple-300 mb-10 flex items-center gap-3">
          💭 Teorias
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-purple-800 dark:text-purple-400 mb-4">
              Teorias dos fãs
            </h3>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Steven poderia perder o controle de seus poderes
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Uma das interpretações relacionadas à fase final da série é que os poderes de Steven estão
                  diretamente ligados ao seu estado emocional. Quando suas emoções ficam descontroladas,
                  suas habilidades também podem sofrer alterações.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Rose Quartz sempre foi Pink Diamond?
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Essa teoria se tornou uma das maiores especulações da série antes de sua confirmação.
                  A identidade de Rose Quartz estava diretamente relacionada aos grandes mistérios da história.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  As Gems possuem diferentes níveis de consciência
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  A maneira como as fusões funcionam levou muitos fãs a interpretar que uma fusão representa
                  mais do que simplesmente a combinação física de duas Gems, funcionando também como uma nova
                  identidade formada pela relação entre elas.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-purple-800 dark:text-purple-400 mb-4">
              Interpretações
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              A série pode ser interpretada como uma história sobre <strong>amadurecimento, identidade e aceitação</strong>.
              Steven passa grande parte da história tentando entender quem ele é e qual é o seu lugar no mundo.
              Ao descobrir os erros e segredos de sua mãe, ele precisa aprender que não é obrigado a repetir
              o passado dela.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-purple-800 dark:text-purple-400 mb-4">
              Possibilidades sobre a história
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Uma das principais ideias exploradas pela série é que conflitos antigos podem ser resolvidos
              por meio de compreensão e mudança, em vez de simplesmente destruir o inimigo.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 via-pink-800 to-purple-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <p className="text-2xl italic">
            &ldquo;Você é uma parte de tudo que vive.&rdquo;
          </p>

          <div className="space-y-2">
            <p className="text-lg font-semibold">Steven Universo</p>
            <p className="text-sm opacity-90">Criado por <strong>Rebecca Sugar</strong></p>
            <p className="text-sm opacity-90">Produção: <strong>Cartoon Network Studios</strong></p>
          </div>

          <div className="space-y-1 text-sm opacity-80">
            <p>Redes sociais: Cartoon Network • Steven Universo • Rebecca Sugar</p>
          </div>

          <div className="border-t border-white/20 pt-6 text-xs opacity-70">
            <p>
              &copy; Cartoon Network Studios. <em>Steven Universo</em> e seus personagens são propriedades de
              seus respectivos detentores de direitos. Este conteúdo possui finalidade informativa e não comercial.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
