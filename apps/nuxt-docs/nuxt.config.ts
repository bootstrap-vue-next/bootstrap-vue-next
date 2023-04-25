// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['bootstrap/dist/css/bootstrap.min.css'],
  modules: ['@nuxt/content', '@bootstrap-vue-next/nuxt', 'unplugin-icons/nuxt', '@vueuse/nuxt'],
  content: {
    highlight: {
      theme: 'monokai',
    },
  },
})
