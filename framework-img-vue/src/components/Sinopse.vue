<script setup lang="ts">
const blocks = [
  {
    id: 'apresentacao',
    icon: '🎬',
    title: 'Apresentação',
    accent: 'banana-yellow',
    text: 'Animação britânico-americana surrealista, misturando humor absurdista e sátira social em cada episódio.',
  },
  {
    id: 'sinopse',
    icon: '🌀',
    title: 'Sinopse',
    accent: 'darwin-orange',
    text: 'Em meio ao caos absoluto de Elmore, o sarcástico gato azul Gumball e seu inseparável irmão peixe-com-pernas, Darwin, transformam qualquer dilema cotidiano na aventura mais surreal, imprevisível e desastrosa do ensino fundamental.',
  },
  {
    id: 'origem',
    icon: '🛠️',
    title: 'Origem e Produção',
    accent: 'banana-yellow',
    text: 'Criado por Ben Bocquelet a partir de personagens rejeitados de comerciais, unindo 2D, 3D, stop-motion e live-action.',
  },
] as const
</script>

<template>
  <section id="sinopse" class="scroll-mt-20 bg-elmore-bg py-20">
    <div class="mx-auto max-w-6xl px-4">
      <header class="mb-10 text-center">
        <h2 class="font-display text-3xl font-bold text-vacuum-purple sm:text-4xl">
          Conhecendo a Obra
        </h2>
        <p class="mt-2 text-sm font-medium text-dark-text/70">
          Um resumo sobre o que torna Elmore tão único.
        </p>
      </header>

      <div class="grid gap-6 md:grid-cols-3">
        <article
          v-for="block in blocks"
          :key="block.id"
          class="flex flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-md transition-shadow duration-200 hover:shadow-xl"
        >
          <div
            class="mb-4 flex h-14 w-14 items-center justify-center rounded-full text-2xl"
            :class="block.accent === 'banana-yellow'
              ? 'bg-banana-yellow/20'
              : 'bg-darwin-orange/20'"
          >
            <span aria-hidden="true">{{ block.icon }}</span>
          </div>

          <h3
            class="mb-2 font-display text-xl font-bold"
            :class="block.accent === 'banana-yellow'
              ? 'text-dark-text'
              : 'text-darwin-orange'"
          >
            {{ block.title }}
          </h3>

          <p class="text-sm leading-relaxed text-dark-text/80">
            {{ block.text }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
