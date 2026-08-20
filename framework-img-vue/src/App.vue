<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import HeroBanner from './components/HeroBanner.vue'
import Synopsis from './components/Synopsis.vue'
import CharactersSection from './components/CharactersSection.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col bg-elmore-bg text-dark-text">
    <Header />

    <main class="mx-auto w-full max-w-6xl flex-1 px-4">
      <HeroBanner />
      <Synopsis />
      <CharactersSection />
    </main>

    <Footer />
  </div>
</template>
