<script setup lang="ts">
interface Place {
  name: string
  description: string
  isVacuum?: boolean
}

const places: Place[] = [
  { name: 'Casa dos Watterson', description: 'O lar caótico de Gumball e sua família, palco da maioria das confusões diárias.' },
  { name: 'Elmore High School', description: 'A escola onde Gumball, Darwin e os amigos vivem aventuras escolares absurdas.' },
  { name: 'Mercado do Larry', description: 'O mercadinho de conveniência administrado pelo trabalhador Larry, onipresente em Elmore.' },
  { name: 'Floresta do Destino', description: 'Lugar misterioso onde o destino dos personagens é selado de forma bem improvável.' },
  { name: 'O Vácuo', description: 'Uma dimensão sombria que apaga da existência quem é esquecido. Onde personagens rejeitados desaparecem para sempre.', isVacuum: true },
]
</script>

<template>
  <section id="universo" class="scroll-mt-20 bg-elmore-bg py-20">
    <div class="mx-auto max-w-6xl px-4">
      <header class="mb-10 text-center">
        <h2 class="font-display text-3xl font-bold text-vacuum-purple sm:text-4xl">
          O Universo de Elmore
        </h2>
        <p class="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-dark-text/80">
          Elmore não é uma cidade comum: é um mundo onde 2D, 3D, stop-motion e
          live-action colidem. Cada morador é feito de um material diferente e
          nada segue as regras da lógica comum — só a lógica de Elmore.
        </p>
      </header>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="place in places"
          :key="place.name"
          class="flex flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-md transition-shadow duration-200 hover:shadow-xl"
          :class="place.isVacuum ? 'border-banana-yellow bg-vacuum-purple text-banana-yellow shadow-2xl' : ''"
        >
          <h3
            class="mb-2 font-display text-xl font-bold"
            :class="place.isVacuum ? 'text-banana-yellow' : 'text-darwin-orange'"
          >
            {{ place.name }}
          </h3>
          <p
            class="text-sm leading-relaxed"
            :class="place.isVacuum ? 'text-gray-200' : 'text-dark-text/80'"
          >
            {{ place.description }}
          </p>
          <span
            v-if="place.isVacuum"
            class="mt-4 inline-block w-fit rounded-full bg-banana-yellow px-3 py-1 text-xs font-bold uppercase tracking-wide text-vacuum-purple"
          >
            Dimensão Crítica
          </span>
        </article>
      </div>
    </div>
  </section>
</template>
