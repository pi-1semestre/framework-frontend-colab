<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col bg-elmore-bg text-dark-text">
    <Header />

    <main class="mx-auto w-full max-w-6xl flex-1 px-4 py-10">
      <section id="inicio" class="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <h1 class="font-display text-3xl font-bold text-vacuum-purple sm:text-4xl md:text-5xl">
          O Incrível Mundo de <span class="text-gumball-blue">Gumball</span>
        </h1>
        <p class="mt-4 max-w-xl text-base text-dark-text/80">
          Bem-vindo a Elmore! Esta é a área central do blog — em breve
          novas seções serão adicionadas aqui.
        </p>
      </section>
    </main>

    <Footer />
  </div>
</template>
