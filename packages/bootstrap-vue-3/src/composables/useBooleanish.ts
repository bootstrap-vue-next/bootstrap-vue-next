import type {Booleanish} from '../types'
import {Ref} from 'vue'
import {resolveBooleanish} from '../utils'
import eagerComputed from './eagerComputed'

// function useBooleanish<T>(el: Ref<Booleanish | T>): ComputedRef<boolean | T>
// This may possibily be used in Vue 3.3 to include Booleanish and complex types ie Booleanish | string
/**
 * Resolves a Booleanish type reactively to type boolean
 */
function useBooleanish(el: Ref<Booleanish>): Readonly<Ref<boolean>>
function useBooleanish(el: Ref<Booleanish | undefined>): Readonly<Ref<boolean | undefined>>
function useBooleanish(
  el: Ref<Booleanish> | Ref<Booleanish | undefined>
): Readonly<Ref<boolean>> | Readonly<Ref<boolean | undefined>> {
  return eagerComputed(() => (el.value === undefined ? undefined : resolveBooleanish(el.value)))
}

export default useBooleanish
