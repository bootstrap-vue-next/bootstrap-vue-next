import type {Booleanish} from '../types'
import {computed, type ComputedRef, type MaybeRefOrGetter, toValue} from 'vue'

const isBooleanish = (input: unknown): input is Booleanish =>
  typeof input === 'boolean' || input === '' || input === 'true' || input === 'false'

/**
 * Resolves a Booleanish type reactively to type boolean
 */
export default <T>(el: MaybeRefOrGetter<T>): ComputedRef<T extends Booleanish ? boolean : T> =>
  computed(() => {
    const value = toValue(el)
    return (
      !isBooleanish(value)
        ? value
        : typeof value === 'boolean'
        ? value
        : value === '' || value === 'true'
        ? true
        : false
    ) as T extends Booleanish ? boolean : T
  })
