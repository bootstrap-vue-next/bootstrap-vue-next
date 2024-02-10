export default defineNuxtConfig({
  modules: ['../src/module'],
  css: ['bootstrap/dist/css/bootstrap.min.css'],
  bootstrapVueNext: {
    directives: {all: true},
  },
})
