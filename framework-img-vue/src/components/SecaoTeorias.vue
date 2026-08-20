<script setup lang="ts">
interface Theory {
  title: string
  text: string
}

const theories: Theory[] = [
  {
    title: 'A simulação prestes a ser deletada',
    text: 'Muitos fãs acreditam que Elmore é uma simulação que está falhando — e que o universo pode ser "reiniciado" a qualquer momento.',
  },
  {
    title: 'O Vácuo como metáfora do cancelamento',
    text: 'A dimensão que apaga quem é esquecido é vista como uma crítica ao cancelamento e ao esquecimento na cultura pop.',
  },
  {
    title: 'O destino do filme pós-cliffhanger',
    text: 'Após o gancho final, teorias sugerem uma continuação ou filme que revelaria a natureza do mundo e o papel de Rob.',
  },
]
</script>

<template>
  <section id="teorias" class="scroll-mt-20 bg-vacuum-purple py-20 text-elmore-bg">
    <div class="mx-auto max-w-6xl px-4">
      <header class="mb-10 text-center">
        <p class="mb-2 text-xs font-bold uppercase tracking-widest text-banana-yellow">
          Arquivos Secretos de Elmore
        </p>
        <h2 class="font-display text-3xl font-bold text-banana-yellow sm:text-4xl">
          Teorias dos Fãs
        </h2>
        <p class="mt-2 text-sm font-medium text-elmore-bg/70">
          O que se esconde por trás do caos cotidiano da cidade?
        </p>
      </header>

      <div class="grid gap-6 md:grid-cols-3">
        <article
          v-for="(theory, i) in theories"
          :key="theory.title"
          class="flex flex-col rounded-2xl border border-banana-yellow/30 bg-white/5 p-6 backdrop-blur-sm transition-colors duration-200 hover:border-banana-yellow"
        >
          <span class="mb-3 font-display text-3xl font-bold text-banana-yellow">
            {{ String(i + 1).padStart(2, '0') }}
          </span>
          <h3 class="mb-2 font-display text-lg font-bold text-banana-yellow">
            {{ theory.title }}
          </h3>
          <p class="text-sm leading-relaxed text-elmore-bg/85">
            {{ theory.text }}
          </p>
        </article>
      </div>

      <p class="mt-10 text-center text-xs text-elmore-bg/50">
        ⚠️ Conteúdo especulativo criado por fãs. Nenhuma destas teorias reflete oficialmente a obra.
      </p>
    </div>
  </section>
</template>
