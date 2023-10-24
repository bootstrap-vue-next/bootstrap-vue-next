import type {Booleanish} from '../types'
import {type MaybeRefOrGetter, type Ref, toValue} from 'vue'
import {isBooleanish, resolveBooleanish} from '../utils'
import {computedEager} from '@vueuse/core'

/**
 * Resolves a Booleanish type reactively to type boolean
 */
export default <T>(el: MaybeRefOrGetter<T>): Readonly<Ref<T extends Booleanish ? boolean : T>> =>
  computedEager(() => {
    const value = toValue(el)
    return (isBooleanish(value) ? resolveBooleanish(value) : value) as T extends Booleanish
      ? boolean
      : T
  })
