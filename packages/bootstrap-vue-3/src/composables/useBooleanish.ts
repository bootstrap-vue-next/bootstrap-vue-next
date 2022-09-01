import type {Booleanish} from '../types'
import {computed, ComputedRef, Ref} from 'vue'
import {resolveBooleanish} from '../utils'

function useBooleanish(el: Ref<Booleanish>): ComputedRef<boolean>
function useBooleanish(el: Ref<Booleanish | undefined>): ComputedRef<boolean | undefined>
function useBooleanish(
  el: Ref<Booleanish> | Ref<Booleanish | undefined>
): ComputedRef<boolean> | ComputedRef<boolean | undefined> {
  return computed(() => (el.value === undefined ? undefined : resolveBooleanish(el.value)))
}

export default useBooleanish
