export default defineNuxtConfig({
  modules: ['../src/module'],
  // This is only required because of the symlinked package setup in the monorepo
  imports: {
    transform: {
      exclude: [/bootstrap-vue.*/],
    },
  },
  css: ['bootstrap/dist/css/bootstrap.min.css'],
  compatibilityDate: 'latest',
  bootstrapVueNext: {
    directives: { all: true },
    plugin: {
      components: {
        BAlert: {
          variant: 'danger',
        },
      },
    },
  },
})
