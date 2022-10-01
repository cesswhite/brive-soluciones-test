<template>
  <main role="main" class="h-auto w-full relative">
    <NuxtPage />
  </main>
</template>

<script setup>
useHead({
  title: 'Brivé Soluciones | Test',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'App Test made by César Armando López Lozano' }
  ],
  htmlAttrs: {
    lang: 'es'
  },
})
</script>
