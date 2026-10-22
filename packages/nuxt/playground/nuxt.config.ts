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
  vite: {
    resolve: {
      alias: {
        'bootstrap/js/dist/datepicker.js': 'bootstrap-v6/js/dist/datepicker.js',
      },
    },
  },
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
