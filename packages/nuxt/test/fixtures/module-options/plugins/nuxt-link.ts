import { defineNuxtPlugin } from '#app'
import { defineComponent, h } from 'vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component(
    'NuxtLink',
    defineComponent({
      name: 'NuxtLink',
      inheritAttrs: false,
      props: {
        to: {
          type: [String, Object],
          required: true,
        },
      },
      setup(props, { attrs, slots }) {
        return () =>
          h(
            'a',
            {
              ...attrs,
              'href': typeof props.to === 'string' ? props.to : '#',
              'data-router-component': 'NuxtLink',
            },
            slots.default?.(),
          )
      },
    }),
  )
})
