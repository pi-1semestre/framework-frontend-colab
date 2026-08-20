<script setup lang="ts">
import { ref, computed } from 'vue'

type Category = 'Protagonistas' | 'Secundários' | 'Vilões'

interface Character {
  name: string
  category: Category
  description: string
}

const characters = ref<Character[]>([
  { name: 'Gumball Watterson', category: 'Protagonistas', description: 'Um gato azul de 12 anos, cheio de ideias mirabolantes e sempre metido em confusões.' },
  { name: 'Darwin Watterson', category: 'Protagonistas', description: 'O peixe de estimação adotado que ganhou pernas e virou o irmão otimista e leal do Gumball.' },

  { name: 'Nicole Watterson', category: 'Secundários', description: 'A mãe coelho, chefe de família, trabalhadora e temida por toda Elmore.' },
  { name: 'Richard Watterson', category: 'Secundários', description: 'O pai coelho, grande, preguiçoso e infantil, mas de bom coração.' },
  { name: 'Anais Watterson', category: 'Secundários', description: 'A irmã caçula genial de 4 anos, muito mais madura que os irmãos.' },
  { name: 'Penny Fitzgerald', category: 'Secundários', description: 'A namorada do Gumball, uma fada em forma de antena cuja casca esconde segredos.' },
  { name: 'Tobias', category: 'Secundários', description: 'O garoto rico e arrogante, sempre em busca de atenção e competição.' },
  { name: 'Banana Joe', category: 'Secundários', description: 'Uma banana falante e hiperativa que adora piadas ruins.' },
  { name: 'Boberto', category: 'Secundários', description: 'O robô taciturno e pessimista, contrastando com o caos de Elmore.' },
  { name: 'Carrie', category: 'Secundários', description: 'Uma fantasma gótica e cínica, filha de um casal de assombrações.' },

  { name: 'Rob', category: 'Vilões', description: 'O ex-vilão da série, obcecado em destruir o Gumball por ser constantemente ignorado.' },
  { name: 'Sr. Robinson', category: 'Vilões', description: 'O idoso vizinho rabugento e pessimista, que adora atormentar os Watterson.' },
  { name: 'Sra. Simian', category: 'Vilões', description: 'A professora macaca, negligente e indiferente ao caos na escola.' },
  { name: 'Margaret Robinson', category: 'Vilões', description: 'Esposa do Sr. Robinson, compartilha do humor ácido e ranzinza do marido.' },
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

const avatarColor: Record<Category, string> = {
  Protagonistas: 'bg-gumball-blue/15 text-gumball-blue',
  Secundários: 'bg-banana-yellow/20 text-dark-text',
  Vilões: 'bg-darwin-orange/15 text-darwin-orange',
}
</script>

<template>
  <section id="personagens" class="bg-white py-16">
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
          class="group flex flex-col rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div
            class="mb-4 flex h-20 w-20 items-center justify-center rounded-full font-display text-3xl font-bold transition-transform duration-300 group-hover:scale-105"
            :class="avatarColor[character.category]"
            aria-hidden="true"
          >
            {{ character.name.charAt(0) }}
          </div>

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
