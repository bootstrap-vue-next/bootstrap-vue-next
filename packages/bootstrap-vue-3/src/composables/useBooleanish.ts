import type {Booleanish} from '../types'
import {computed, ComputedRef, Ref} from 'vue'
import {resolveBooleanish} from '../utils'

// function useBooleanish<T>(el: Ref<Booleanish | T>): ComputedRef<boolean | T>
// This may possibily be used in Vue 3.3 to include Booleanish and complex types ie Booleanish | string
function useBooleanish(el: Ref<Booleanish>): ComputedRef<boolean>
function useBooleanish(el: Ref<Booleanish | undefined>): ComputedRef<boolean | undefined>
function useBooleanish(
  el: Ref<Booleanish> | Ref<Booleanish | undefined>
): ComputedRef<boolean> | ComputedRef<boolean | undefined> {
  return computed(() => (el.value === undefined ? undefined : resolveBooleanish(el.value)))
}

export default useBooleanish
