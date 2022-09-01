import type {Booleanish} from '../types'
import {computed, ComputedRef, Ref} from 'vue'
import {resolveBooleanish} from '../utils'

export const useBooleanish = (el: Ref<Booleanish>): ComputedRef<boolean> =>
  computed(() => resolveBooleanish(el.value))

export const useBooleanishUndefined = (
  el: Ref<Booleanish | undefined>
): ComputedRef<boolean | undefined> =>
  computed(() => (el.value !== undefined ? resolveBooleanish(el.value) : undefined))
