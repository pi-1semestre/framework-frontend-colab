<script setup lang="ts">
const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'Twitter / X', href: '#' },
  { label: 'YouTube', href: '#' },
  { label: 'TikTok', href: '#' },
]

const blogNav = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sinopse', href: '#sinopse' },
  { label: 'Personagens', href: '#personagens' },
  { label: 'Universo', href: '#universo' },
  { label: 'Curiosidades', href: '#curiosidades' },
  { label: 'Teorias', href: '#teorias' },
]

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-vacuum-purple text-elmore-bg">
    <div class="mx-auto max-w-6xl px-4 py-10">
      <p class="mb-8 text-center font-display text-lg font-bold text-banana-yellow">
        Obrigado por visitar Elmore! Volte sempre antes que o universo reinicie.
      </p>

      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 class="mb-3 text-sm font-bold uppercase tracking-wider text-gumball-blue">
            Navegação
          </h3>
          <ul class="space-y-2">
            <li v-for="link in blogNav" :key="link.href">
              <a
                :href="link.href"
                class="text-sm transition-colors duration-200 hover:text-darwin-orange"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="mb-3 text-sm font-bold uppercase tracking-wider text-gumball-blue">
            Redes Sociais
          </h3>
          <ul class="space-y-2">
            <li v-for="social in socialLinks" :key="social.label">
              <a
                :href="social.href"
                class="text-sm transition-colors duration-200 hover:text-darwin-orange"
              >
                {{ social.label }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="mb-3 text-sm font-bold uppercase tracking-wider text-gumball-blue">
            Créditos
          </h3>
          <p class="text-sm leading-relaxed opacity-90">
            Site de fãs não oficial criado por entusiastas do desenho.
            Todos os personagens pertencem aos seus respectivos criadores.
          </p>
        </div>
      </div>

      <div
        class="mt-10 border-t border-white/10 pt-6 text-center text-xs opacity-80"
      >
        <p>
          &copy; {{ currentYear }} O Incrível Mundo de Gumball — Fã-site.
          Todos os direitos sobre a obra pertencem à Cartoon Network e aos seus criadores.
          Este projeto não tem fins lucrativos.
        </p>
      </div>
    </div>
  </footer>
</template>
