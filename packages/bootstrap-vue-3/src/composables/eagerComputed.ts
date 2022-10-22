import {readonly, Ref, shallowRef, watchEffect, WatchOptionsBase} from 'vue'

/**
 * Eagerly loaded version of Vue computed. Code ported from Vueuse
 *
 * @link https://dev.to/linusborg/vue-when-a-computed-property-can-be-the-wrong-tool-195j
 */
export default <T>(fn: () => T, options?: WatchOptionsBase): Readonly<Ref<T>> => {
  const result = shallowRef()
  watchEffect(
    () => {
      result.value = fn()
    },
    {
      ...options,
      flush: options?.flush ?? 'sync',
    }
  )

  return readonly(result)
}
