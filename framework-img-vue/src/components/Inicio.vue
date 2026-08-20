<script setup lang="ts">
const ctaLinks = [
  { label: 'Conheça os Personagens', href: '#personagens', style: 'primary' },
  { label: 'Explore o Universo', href: '#universo', style: 'secondary' },
] as const
</script>

<template>
  <section
    id="inicio"
    class="relative scroll-mt-20 overflow-hidden bg-gradient-to-br from-gumball-blue via-gumball-blue to-vacuum-purple py-20"
  >
    <div class="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-16 sm:py-20 lg:flex-row lg:items-center lg:gap-12">
      <div class="flex-1 text-center lg:text-left">
        <p class="mb-3 text-sm font-bold uppercase tracking-widest text-banana-yellow">
          Fã-site • Elmore
        </p>
        <h1 class="font-display text-4xl font-extrabold leading-tight text-white drop-shadow-sm sm:text-5xl md:text-6xl">
          O Incrível Mundo de
          <span class="block text-darwin-orange">Gumball</span>
        </h1>

        <p class="mx-auto mt-6 max-w-xl text-base font-medium text-white/90 sm:text-lg lg:mx-0">
          A vida é uma loucura em Elmore... e o cotidiano nunca foi tão insano!
        </p>

        <div class="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
          <a
            v-for="cta in ctaLinks"
            :key="cta.label"
            :href="cta.href"
            class="rounded-full px-6 py-3 text-sm font-bold transition-transform duration-200 hover:-translate-y-0.5"
            :class="cta.style === 'primary'
              ? 'bg-darwin-orange text-white shadow-lg shadow-darwin-orange/30'
              : 'border-2 border-banana-yellow bg-transparent text-banana-yellow hover:bg-banana-yellow hover:text-vacuum-purple'"
          >
            {{ cta.label }}
          </a>
        </div>
      </div>

      <div class="w-full">
        <div
          class="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl border-4 border-banana-yellow bg-white/10 shadow-2xl backdrop-blur-sm"
        >
          <img
            src="/hero-gumball.jpg"
            alt="Gumball e Darwin correndo pelo corredor da Elmore High"
            class="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>
