<script setup lang="ts">
interface Track {
  title: string
  type: string
  duration: string
}

const tracks: Track[] = [
  { title: 'Nobody\'s a Nobody', type: 'Música de abertura', duration: '1:02' },
  { title: 'Goodbye', type: 'Música de encerramento', duration: '0:58' },
  { title: 'I\'m On My Way', type: 'Tema marcante', duration: '1:45' },
]

const composers = ['Ben Locket', 'Neil Myers']
</script>

<template>
  <section id="trilha" class="scroll-mt-20 bg-white py-20">
    <div class="mx-auto max-w-6xl px-4">
      <header class="mb-10 text-center">
        <h2 class="font-display text-3xl font-bold text-vacuum-purple sm:text-4xl">
          Trilha Sonora
        </h2>
        <p class="mt-2 text-sm font-medium text-dark-text/70">
          As músicas que dão o ritmo caótico e emotivo a Elmore.
        </p>
      </header>

      <div class="overflow-hidden rounded-3xl border border-black/5 bg-elmore-bg shadow-lg">
        <div class="flex items-center gap-4 bg-vacuum-purple p-6 text-elmore-bg">
          <div class="flex h-16 w-16 items-center justify-center rounded-full bg-gumball-blue font-display text-2xl font-bold text-white">
            ♪
          </div>
          <div>
            <p class="text-xs uppercase tracking-widest text-banana-yellow">Agora tocando</p>
            <h3 class="font-display text-xl font-bold">Nobody's a Nobody</h3>
            <p class="text-sm text-elmore-bg/70">Tema de abertura • Ben Locket & Neil Myers</p>
          </div>
          <button
            type="button"
            class="ml-auto flex h-12 w-12 items-center justify-center rounded-full bg-darwin-orange text-white transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-banana-yellow"
            aria-label="Tocar"
          >
            ▶
          </button>
        </div>

        <div class="h-1.5 w-full bg-black/10">
          <div class="h-full w-1/3 bg-gumball-blue"></div>
        </div>

        <ul class="divide-y divide-black/5">
          <li
            v-for="track in tracks"
            :key="track.title"
            class="flex items-center gap-4 px-6 py-4 transition-colors duration-200 hover:bg-white"
          >
            <span class="flex h-9 w-9 items-center justify-center rounded-full bg-gumball-blue/15 text-gumball-blue">▶</span>
            <div class="flex-1">
              <p class="font-semibold text-dark-text">{{ track.title }}</p>
              <p class="text-xs text-dark-text/60">{{ track.type }}</p>
            </div>
            <span class="text-sm font-medium text-dark-text/60">{{ track.duration }}</span>
          </li>
        </ul>
      </div>

      <p class="mt-6 text-center text-sm text-dark-text/70">
        Compositores responsáveis:
        <span
          v-for="(composer, i) in composers"
          :key="composer"
          class="font-bold text-darwin-orange"
        >
          {{ composer }}<span v-if="i < composers.length - 1"> e </span>
        </span>
      </p>
    </div>
  </section>
</template>
