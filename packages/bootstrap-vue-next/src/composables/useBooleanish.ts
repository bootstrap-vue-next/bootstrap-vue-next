import type {Booleanish} from '../types'
import {computed, type ComputedRef, type MaybeRefOrGetter, toValue} from 'vue'

const isBooleanish = (input: unknown): input is Booleanish =>
  typeof input === 'boolean' || input === 'true' || input === 'false'

/**
 * Resolves a Booleanish type reactively to type boolean
 */
export default <T>(el: MaybeRefOrGetter<T>): ComputedRef<T extends Booleanish ? boolean : T> =>
  computed(() => {
    const value = toValue(el)
    return (isBooleanish(value) ? !!value : value) as T extends Booleanish ? boolean : T
  })
