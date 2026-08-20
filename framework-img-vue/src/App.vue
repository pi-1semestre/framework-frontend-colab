<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import HeroBanner from './components/HeroBanner.vue'
import Synopsis from './components/Synopsis.vue'
import CharactersSection from './components/CharactersSection.vue'
import WorldSection from './components/WorldSection.vue'
import SoundtrackSection from './components/SoundtrackSection.vue'
import CreatorsSection from './components/CreatorsSection.vue'
import TriviaSection from './components/TriviaSection.vue'
import TheoriesSection from './components/TheoriesSection.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col bg-elmore-bg text-dark-text">
    <Header />

    <main class="mx-auto w-full max-w-6xl flex-1 px-4">
      <HeroBanner />
      <Synopsis />
      <CharactersSection />
      <WorldSection />
      <SoundtrackSection />
      <CreatorsSection />
      <TriviaSection />
      <TheoriesSection />
    </main>

    <Footer />
  </div>
</template>
