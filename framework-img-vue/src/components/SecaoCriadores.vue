<script setup lang="ts">
interface Creator {
  name: string
  role: string
  bio: string
  accent: 'gumball-blue' | 'darwin-orange' | 'banana-yellow'
}

const creators: Creator[] = [
  {
    name: 'Ben Bocquelet',
    role: 'Criador',
    bio: 'Idealizou a série reciclando personagens de comerciais rejeitados, criando o universo único e surreal de Elmore.',
    accent: 'gumball-blue',
  },
  {
    name: 'Mic Graves',
    role: 'Diretor',
    bio: 'Responsável pela direção da série, moldando o ritmo, o humor e a estética que definem o cartoon.',
    accent: 'darwin-orange',
  },
  {
    name: 'Cartoon Network Europe / Hanna-Barbera Studios Europe',
    role: 'Estúdios Responsáveis',
    bio: 'Estúdios por trás da produção, unindo talentos britânicos e americanos na animação.',
    accent: 'banana-yellow',
  },
]

const accentBg: Record<Creator['accent'], string> = {
  'gumball-blue': 'bg-gumball-blue/15 text-gumball-blue',
  'darwin-orange': 'bg-darwin-orange/15 text-darwin-orange',
  'banana-yellow': 'bg-banana-yellow/25 text-dark-text',
}
</script>

<template>
  <section id="criadores" class="scroll-mt-20 bg-elmore-bg py-20">
    <div class="mx-auto max-w-6xl px-4">
      <header class="mb-10 text-center">
        <h2 class="font-display text-3xl font-bold text-vacuum-purple sm:text-4xl">
          Autores & Criadores
        </h2>
        <p class="mt-2 text-sm font-medium text-dark-text/70">
          As mentes por trás da loucura de Elmore.
        </p>
      </header>

      <div class="grid gap-6 md:grid-cols-3">
        <article
          v-for="creator in creators"
          :key="creator.name"
          class="flex flex-col items-center rounded-2xl border border-black/5 bg-white p-6 text-center shadow-md transition-shadow duration-200 hover:shadow-xl"
        >
          <div
            class="mb-4 flex h-20 w-20 items-center justify-center rounded-full font-display text-3xl font-bold"
            :class="accentBg[creator.accent]"
            aria-hidden="true"
          >
            {{ creator.name.charAt(0) }}
          </div>
          <h3 class="font-display text-lg font-bold text-vacuum-purple">
            {{ creator.name }}
          </h3>
          <span
            class="mb-3 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide"
            :class="creator.accent === 'banana-yellow'
              ? 'bg-banana-yellow text-vacuum-purple'
              : creator.accent === 'darwin-orange'
                ? 'bg-darwin-orange text-white'
                : 'bg-gumball-blue text-white'"
          >
            {{ creator.role }}
          </span>
          <p class="text-sm leading-relaxed text-dark-text/80">
            {{ creator.bio }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
