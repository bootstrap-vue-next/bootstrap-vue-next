import * as Directives from 'bootstrap-vue-next/directives'
import type { Directive } from 'vue'
import { defineNuxtPlugin, useRuntimeConfig } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const usedDirectives = useRuntimeConfig().public.bootstrapVueNext.directives
  const directiveValues = Object.entries(Directives)

  const result = directiveValues.reduce(
    (acc, [key, value]) => {
      if (usedDirectives.includes(key)) {
        acc[key] = value
      }
      return acc
    },
    {} as Record<string, Directive>,
  )

  const sliceName = (str: string) => (str.toLowerCase().startsWith('v') ? str.slice(1) : str)
  Object.entries(result).forEach(([key, value]) => {
    const parsedName = sliceName(key)
    nuxtApp.vueApp.directive(parsedName, value)
  })
})
