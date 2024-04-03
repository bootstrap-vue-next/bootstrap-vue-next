import {inject, type InjectionKey, provide} from 'vue'

const GET_ID: InjectionKey<() => string> = Symbol('bootstrap-vue-next.getId')

export default (suffix = '') => {
  const getId = inject(GET_ID, () => Math.random().toString().slice(2, 8))
  return `__BVID__${getId()}___BV_${suffix}__`
}

/**
 * This function is allows users to provide a custom id generator
 * as a workaround for the lack of stable SSR IDs in Vue 3.x
 *
 * This lets users of Nuxt swap in the Nuxt `useId` function
 * which is stable across SSR and client.
 */
export const provideGetId = (fn: () => string) => provide(GET_ID, fn)
