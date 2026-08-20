<script setup lang="ts">
import { ref } from 'vue'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sinopse', href: '#sinopse' },
  { label: 'Personagens', href: '#personagens' },
  { label: 'Universo', href: '#universo' },
  { label: 'Curiosidades', href: '#curiosidades' },
  { label: 'Teorias', href: '#teorias' },
]

const isMenuOpen = ref(false)

function toggleMenu(): void {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="bg-vacuum-purple text-elmore-bg shadow-lg">
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
      <a
        href="#inicio"
        class="font-display text-lg font-bold tracking-tight sm:text-xl"
      >
        O Incrível Mundo de
        <span class="text-gumball-blue">Gumball</span>
      </a>

      <button
        type="button"
        class="inline-flex items-center justify-center rounded-md p-2 text-banana-yellow focus:outline-none focus:ring-2 focus:ring-darwin-orange md:hidden"
        aria-label="Abrir menu de navegação"
        :aria-expanded="isMenuOpen"
        @click="toggleMenu"
      >
        <svg
          v-if="!isMenuOpen"
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          v-else
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <ul class="hidden gap-6 md:flex">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="text-sm font-medium transition-colors duration-200 hover:text-darwin-orange focus:text-darwin-orange"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
    </nav>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <ul
        v-if="isMenuOpen"
        class="border-t border-white/10 px-4 py-2 md:hidden"
      >
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="block py-2 text-sm font-medium transition-colors duration-200 hover:text-darwin-orange"
            @click="isMenuOpen = false"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
    </transition>
  </header>
</template>
