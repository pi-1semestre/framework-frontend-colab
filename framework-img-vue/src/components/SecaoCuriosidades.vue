<script setup lang="ts">
interface Trivia {
  title: string
  text: string
  icon: string
  accent: 'banana-yellow' | 'darwin-orange'
}

const facts: Trivia[] = [
  {
    title: 'Easter Eggs da Nintendo',
    text: 'A série esconde referências a jogos clássicos da Nintendo espalhados pelos cenários de Elmore.',
    icon: '🎮',
    accent: 'banana-yellow',
  },
  {
    title: 'Referências em "O Sinal"',
    text: 'O episódio homenageia animes e jogos com citações visuais e metáforas culturais reconhecíveis aos fãs.',
    icon: '📺',
    accent: 'darwin-orange',
  },
  {
    title: 'Bastidores: Larry em tudo',
    text: 'Larry aparece trabalhando em quase todos os lugares de Elmore — uma piada interna sobre multifunção.',
    icon: '🛒',
    accent: 'banana-yellow',
  },
  {
    title: 'Evolução do estilo visual',
    text: 'A mistura de 2D, 3D, stop-motion e live-action evoluiu a cada temporada, tornando-se mais ousada.',
    icon: '🎨',
    accent: 'darwin-orange',
  },
]
</script>

<template>
  <section id="curiosidades" class="scroll-mt-20 bg-white py-20">
    <div class="mx-auto max-w-6xl px-4">
      <header class="mb-10 text-center">
        <h2 class="font-display text-3xl font-bold text-vacuum-purple sm:text-4xl">
          Curiosidades
        </h2>
        <p class="mt-2 text-sm font-medium text-dark-text/70">
          Pequenos detalhes que só os verdadeiros habitantes de Elmore percebem.
        </p>
      </header>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="fact in facts"
          :key="fact.title"
          class="flex flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div
            class="mb-4 flex h-14 w-14 items-center justify-center rounded-full text-2xl"
            :class="fact.accent === 'banana-yellow' ? 'bg-banana-yellow/25' : 'bg-darwin-orange/20'"
          >
            <span aria-hidden="true">{{ fact.icon }}</span>
          </div>
          <h3
            class="mb-2 font-display text-lg font-bold"
            :class="fact.accent === 'banana-yellow' ? 'text-dark-text' : 'text-darwin-orange'"
          >
            {{ fact.title }}
          </h3>
          <p class="text-sm leading-relaxed text-dark-text/80">
            {{ fact.text }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
