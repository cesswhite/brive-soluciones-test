// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  modules: [
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode'
  ],
  unocss: {
    preflight: true,
    icons: true
  },
  css: [
    '@/assets/main.css',
  ],
  colorMode: {
    classSuffix: ''
  },
  typescript: {
    shim: false,
  },
})
