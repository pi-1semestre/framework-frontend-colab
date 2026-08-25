<script setup lang="ts">
interface Place {
  name: string
  description: string
  isVacuum?: boolean
  isHome?: boolean
  isSchool?: boolean
  isMarket?: boolean
  isForest?: boolean
}

const places: Place[] = [
  { name: 'Casa dos Watterson', description: 'O lar caótico de Gumball e sua família, palco da maioria das confusões diárias.', isHome: true },
  { name: 'Elmore High School', description: 'A escola onde Gumball, Darwin e os amigos vivem aventuras escolares absurdas.', isSchool: true },
  { name: 'Mercado do Larry', description: 'O mercadinho de conveniência administrado pelo trabalhador Larry, onipresente em Elmore.', isMarket: true },
  { name: 'Floresta do Destino', description: 'Lugar misterioso onde o destino dos personagens é selado de forma bem improvável.', isForest: true },
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
          class="relative flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white p-6 shadow-md transition-shadow duration-200 hover:shadow-xl"
          :class="[
            (place.isHome || place.isSchool || place.isMarket || place.isForest || place.isVacuum) ? 'bg-cover bg-center text-white' : '',
            place.isVacuum ? 'border-banana-yellow shadow-2xl' : ''
          ]"
          :style="(place.isHome || place.isSchool || place.isMarket || place.isForest || place.isVacuum)
            ? 'background-image: linear-gradient(rgba(26,11,46,0.22), rgba(26,11,46,0.22)), url(' + (place.isHome ? '/watterson-bg.jpg' : place.isSchool ? '/elmore-high-bg.jpg' : place.isMarket ? '/mercado-bg.jpg' : place.isForest ? '/floresta-bg.jpg' : '/vacuo-bg.png') + ')'
            : ''"
        >
          <div v-if="place.isHome || place.isSchool || place.isMarket || place.isForest || place.isVacuum" class="pointer-events-none absolute inset-0 bg-vacuum-purple/15"></div>
          <div class="relative z-10 flex flex-col drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
            <h3
              class="mb-2 font-display text-xl font-bold"
              :class="(place.isHome || place.isSchool || place.isMarket || place.isForest || place.isVacuum) ? 'text-banana-yellow' : 'text-darwin-orange'"
            >
              {{ place.name }}
            </h3>
            <p
              class="text-sm leading-relaxed"
              :class="(place.isHome || place.isSchool || place.isMarket || place.isForest || place.isVacuum) ? 'text-white/90' : 'text-dark-text/80'"
            >
              {{ place.description }}
            </p>
            <span
              v-if="place.isVacuum"
              class="mt-4 inline-block w-fit rounded-full bg-banana-yellow px-3 py-1 text-xs font-bold uppercase tracking-wide text-vacuum-purple"
            >
              Dimensão Crítica
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

