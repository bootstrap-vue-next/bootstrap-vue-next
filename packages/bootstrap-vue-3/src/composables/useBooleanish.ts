import type {Booleanish} from '../types'
import {computed, ComputedRef, reactive, Ref, toRef} from 'vue'
import {resolveBooleanish} from '../utils'

// export const useBooleanish = (el: Ref<Booleanish>): ComputedRef<boolean> =>
//   computed(() => resolveBooleanish(el.value))

// export const useBooleanishUndefined = (
//   el: Ref<Booleanish | undefined>
// ): ComputedRef<boolean | undefined> =>
//   computed(() => (el.value !== undefined ? resolveBooleanish(el.value) : undefined))

function useBooleanish(el: Ref<Booleanish>): ComputedRef<boolean>
function useBooleanish(el: Ref<Booleanish | undefined>): ComputedRef<boolean | undefined>
function useBooleanish(
  el: Ref<Booleanish> | Ref<Booleanish | undefined>
): ComputedRef<boolean> | ComputedRef<boolean | undefined> {
  return computed(() => {
    if (el.value === undefined) {
      return undefined
    }
    return resolveBooleanish(el.value)
  })
}

export default useBooleanish
