<script setup lang="ts">
import { ref, computed } from 'vue'

type Category = 'Protagonistas' | 'Secundários' | 'Vilões'

interface Character {
  name: string
  category: Category
  description: string
  image: string
}

const characters = ref<Character[]>([
  { name: 'Gumball Watterson', category: 'Protagonistas', description: 'Um gato azul de 12 anos, cheio de ideias mirabolantes e sempre metido em confusões.', image: '/characters/gumball-watterson.png' },
  { name: 'Darwin Watterson', category: 'Protagonistas', description: 'O peixe de estimação adotado que ganhou pernas e virou o irmão otimista e leal do Gumball.', image: '/characters/darwin-watterson.png' },

  { name: 'Nicole Watterson', category: 'Secundários', description: 'A mãe coelho, chefe de família, trabalhadora e temida por toda Elmore.', image: '/characters/nicole-watterson.png' },
  { name: 'Richard Watterson', category: 'Secundários', description: 'O pai coelho, grande, preguiçoso e infantil, mas de bom coração.', image: '/characters/richard-watterson.png' },
  { name: 'Anais Watterson', category: 'Secundários', description: 'A irmã caçula genial de 4 anos, muito mais madura que os irmãos.', image: '/characters/anais-watterson.png' },
  { name: 'Penny Fitzgerald', category: 'Secundários', description: 'A namorada do Gumball, uma fada em forma de antena cuja casca esconde segredos.', image: '/characters/penny-fitzgerald.png' },
  { name: 'Tobias', category: 'Secundários', description: 'O garoto rico e arrogante, sempre em busca de atenção e competição.', image: '/characters/tobias.png' },
  { name: 'Banana Joe', category: 'Secundários', description: 'Uma banana falante e hiperativa que adora piadas ruins.', image: '/characters/banana-joe.png' },
  { name: 'Boberto', category: 'Secundários', description: 'O robô taciturno e pessimista, contrastando com o caos de Elmore.', image: '/characters/boberto.png' },
  { name: 'Carrie', category: 'Secundários', description: 'Uma fantasma gótica e cínica, filha de um casal de assombrações.', image: '/characters/carrie.png' },
  { name: 'Carmen', category: 'Secundários', description: 'Cacto inteligente e perfeccionista.', image: '/characters/carmen.png' },
  { name: 'Alan', category: 'Secundários', description: 'Balão azul otimista e extremamente bondoso.', image: '/characters/alan.png' },
  { name: 'Leslie', category: 'Secundários', description: 'Vaso de flor vaidoso e delicado.', image: '/characters/leslie.png' },
  { name: 'Masami', category: 'Secundários', description: 'Nuvem mimada e filha do dono da fábrica da cidade.', image: '/characters/masami.png' },
  { name: 'Sussie', category: 'Secundários', description: 'Queixo invertido peculiar e hiperativa.', image: '/characters/sussie.webp' },
  { name: 'Ocho', category: 'Secundários', description: 'Aranha em pixel-art de 8 bits com temperamento forte.', image: '/characters/ocho.png' },
  { name: 'Hector', category: 'Secundários', description: 'Gigante gentil que precisa manter a calma para não causar estragos.', image: '/characters/hector.png' },
  { name: 'Teri', category: 'Secundários', description: 'Urso de papel obcecado por germes e limpeza.', image: '/characters/teri.png' },
  { name: 'Sarah', category: 'Secundários', description: 'Sorvete fã obcecada por Gumball e Darwin.', image: '/characters/sarah.png' },
  { name: 'Larry Needlemeyer', category: 'Secundários', description: 'O homem mais trabalhado de Elmore, presente em quase todo comércio.', image: '/characters/larry-needlemeyer.webp' },
  { name: 'Diretor Brown', category: 'Secundários', description: 'O diretor lesma de Elmore High.', image: '/characters/diretor-brown.png' },
  { name: 'Sr. Pequeno', category: 'Secundários', description: 'O orientador educacional hippie e místico.', image: '/characters/sr-pequeno.png' },
  { name: 'Juke', category: 'Secundários', description: 'Pedaço de caixa de som que só se comunica por beatbox.', image: '/characters/juke.webp' },
  { name: 'Anton', category: 'Secundários', description: 'Pedaço de pão que morre e renasce da torradeira o tempo todo.', image: '/characters/anton.webp' },
  { name: 'Idaho', category: 'Secundários', description: 'Uma batata caipira muito ingênua do interior.', image: '/characters/idaho.png' },
  { name: 'Jamie', category: 'Secundários', description: 'A valentona metade dinossauro da escola.', image: '/characters/jamie.webp' },
  { name: 'Clayton', category: 'Secundários', description: 'Pedaço de massinha de modelar mentiroso que muda de forma.', image: '/characters/clayton.webp' },
  { name: 'Banana Barbara', category: 'Secundários', description: 'A mãe do Banana Joe que pinta previsões do futuro.', image: '/characters/banana-barbara.webp' },
  { name: 'Vovó Jojo', category: 'Secundários', description: 'A avó rigorosa dos Watterson.', image: '/characters/vovo-jojo.png' },
  { name: 'Louie', category: 'Secundários', description: 'O camundongo idoso casado com a Vovó Jojo.', image: '/characters/louie.png' },
  { name: 'Guarda Donut', category: 'Secundários', description: 'O policial donut levemente incompetente da cidade.', image: '/characters/guarda-donut.png' },
  { name: 'Billy Parham', category: 'Secundários', description: 'O menino gênio de cabeça gigante e voz grossa.', image: '/characters/billy-parham.png' },
  { name: 'Marvin Finkleheimer', category: 'Secundários', description: 'O idoso rabugento da cidade.', image: '/characters/marvin-finkleheimer.png' },
  { name: 'Sr. Corneille', category: 'Secundários', description: 'O professor sapo de Elmore High.', image: '/characters/sr-corneille.png' },
  { name: 'Frankie Watterson', category: 'Secundários', description: 'O pai trambiqueiro do Richard e avô do Gumball.', image: '/characters/frankie-watterson.png' },
  { name: 'Patrick Fitzgerald', category: 'Secundários', description: 'O pai alce protetor e rígido da Penny.', image: '/characters/patrick-fitzgerald.webp' },
  { name: 'Felicity Parham', category: 'Secundários', description: 'A mãe rica, esnobe e elitista do Billy.', image: '/characters/felicity-parham.png' },
  { name: 'Molly Collins', category: 'Secundários', description: 'A dinossauro de pescoço longo que foi esquecida no Vácuo.', image: '/characters/molly-collins.png' },
  { name: 'Gary Hedges', category: 'Secundários', description: 'O vizinho idoso de pele roxa de quem ninguém lembra o nome.', image: '/characters/gary-hedges.png' },
  { name: 'Sal Azedo', category: 'Secundários', description: 'O famoso criminoso e assaltante de Elmore.', image: '/characters/sal-azedo.png' },
  { name: 'Treinador Russo', category: 'Secundários', description: 'O severo professor de educação física em forma de cubo.', image: '/characters/treinador-russo.png' },
  { name: 'Karen', category: 'Secundários', description: 'A axolote noiva do Larry que trabalha no supermercado.', image: '/characters/karen.png' },

  { name: 'Rob', category: 'Vilões', description: 'O ex-vilão da série, obcecado por destruir o Gumball por ser constantemente ignorado.', image: '/characters/rob.png' },
  { name: 'Sr. Robinson', category: 'Vilões', description: 'O idoso vizinho rabugento e pessimista, que adora atormentar os Watterson.', image: '/characters/sr-robinson.png' },
  { name: 'Sra. Simian', category: 'Vilões', description: 'A professora macaca, negligente e indiferente ao caos na escola.', image: '/characters/sra-simian.png' },
  { name: 'Margaret Robinson', category: 'Vilões', description: 'Esposa do Sr. Robinson, compartilha do humor ácido e ranzinza do marido.', image: '/characters/margaret-robinson.png' },
])

const filters = ['Todos', 'Protagonistas', 'Secundários', 'Vilões'] as const
type Filter = (typeof filters)[number]

const activeFilter = ref<Filter>('Todos')

const filteredCharacters = computed<Character[]>(() => {
  if (activeFilter.value === 'Todos') return characters.value
  return characters.value.filter((c) => c.category === activeFilter.value)
})

const categoryStyles: Record<Category, string> = {
  Protagonistas: 'bg-gumball-blue text-white',
  Secundários: 'bg-banana-yellow text-vacuum-purple',
  Vilões: 'bg-darwin-orange text-white',
}
</script>

<template>
  <section id="personagens" class="scroll-mt-20 bg-white py-20">
    <div class="mx-auto max-w-6xl px-4">
      <header class="mb-8 text-center">
        <h2 class="font-display text-3xl font-bold text-vacuum-purple sm:text-4xl">
          Personagens de Elmore
        </h2>
        <p class="mt-2 text-sm font-medium text-dark-text/70">
          Filtre por categoria e explore os habitantes da cidade mais louca do mundo.
        </p>
      </header>

      <div class="mb-10 flex flex-wrap justify-center gap-3">
        <button
          v-for="filter in filters"
          :key="filter"
          type="button"
          class="rounded-full px-5 py-2 text-sm font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-darwin-orange"
          :class="activeFilter === filter
            ? 'bg-vacuum-purple text-banana-yellow shadow-md'
            : 'bg-elmore-bg text-dark-text hover:bg-gumball-blue hover:text-white'"
          :aria-pressed="activeFilter === filter"
          @click="activeFilter = filter"
        >
          {{ filter }}
        </button>
      </div>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <article
          v-for="character in filteredCharacters"
          :key="character.name"
          class="group relative flex flex-col rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <img
            :src="character.image"
            :alt="character.name"
            class="absolute top-2 right-2 h-20 w-20 object-contain transition-transform duration-300 hover:scale-110"
          />

          <span
            class="mb-2 inline-block w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide"
            :class="categoryStyles[character.category]"
          >
            {{ character.category }}
          </span>

          <h3 class="mb-2 font-display text-lg font-bold text-vacuum-purple">
            {{ character.name }}
          </h3>

          <p class="text-sm leading-relaxed text-dark-text/80">
            {{ character.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
