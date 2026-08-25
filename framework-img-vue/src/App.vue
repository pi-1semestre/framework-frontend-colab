<script setup lang="ts">
import Cabecalho from './components/Cabecalho.vue'
import Rodape from './components/Rodape.vue'
import Inicio from './components/Inicio.vue'
import Sinopse from './components/Sinopse.vue'
import SecaoPersonagens from './components/SecaoPersonagens.vue'
import SecaoUniverso from './components/SecaoUniverso.vue'
import SecaoTrilha from './components/SecaoTrilha.vue'
import SecaoCriadores from './components/SecaoCriadores.vue'
import SecaoCuriosidades from './components/SecaoCuriosidades.vue'
import SecaoTeorias from './components/SecaoTeorias.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col bg-elmore-bg text-dark-text">
    <Cabecalho />

    <main class="flex-1">
      <Inicio />
      <Sinopse />
      <SecaoPersonagens />
      <SecaoUniverso />
      <SecaoTrilha />
      <SecaoCriadores />
      <SecaoCuriosidades />
      <SecaoTeorias />
    </main>

    <Rodape />
  </div>
</template>

