import type {Booleanish} from '../types'
import {computed, ComputedRef, Ref} from 'vue'
import {resolveBooleanish} from '../utils'

export default (el: Ref<Booleanish>): ComputedRef<boolean> =>
  computed(() => resolveBooleanish(el.value))
