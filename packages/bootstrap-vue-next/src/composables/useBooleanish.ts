import type {Booleanish} from '../types'
import {type MaybeRefOrGetter, type Ref, toValue} from 'vue'
import {resolveBooleanish} from '../utils'
import {computedEager} from '@vueuse/core'

// function useBooleanish<T>(el: Ref<Booleanish | T>): ComputedRef<boolean | T>
// This may possibily be used in Vue 3.3 to include Booleanish and complex types ie Booleanish | string
/**
 * Resolves a Booleanish type reactively to type boolean
 */
function useBooleanish(el: MaybeRefOrGetter<Booleanish>): Readonly<Ref<boolean>>
function useBooleanish(el: MaybeRefOrGetter<Booleanish | null>): Readonly<Ref<boolean | null>>
function useBooleanish(
  el: MaybeRefOrGetter<Booleanish | undefined>
): Readonly<Ref<boolean | undefined>>
function useBooleanish(
  el: MaybeRefOrGetter<Booleanish | undefined | null>
): Readonly<Ref<boolean | undefined | null>>
function useBooleanish(
  el:
    | MaybeRefOrGetter<Booleanish>
    | MaybeRefOrGetter<Booleanish | undefined>
    | MaybeRefOrGetter<Booleanish | null>
    | MaybeRefOrGetter<Booleanish | undefined | null>
):
  | Readonly<Ref<boolean>>
  | Readonly<Ref<boolean | undefined>>
  | Readonly<Ref<boolean | null>>
  | Readonly<Ref<boolean | undefined | null>> {
  return computedEager(() => {
    const value = toValue(el)
    return value === undefined || value === null ? value : resolveBooleanish(value)
  })
}

export default useBooleanish
