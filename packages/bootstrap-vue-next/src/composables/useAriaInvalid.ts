import {resolveAriaInvalid} from '../utils'
import type {AriaInvalid} from '../types'
import {computed, type MaybeRefOrGetter, toRef} from 'vue'

export default (
  ariaInvalid: MaybeRefOrGetter<AriaInvalid | undefined>,
  state: MaybeRefOrGetter<boolean | null | undefined>
) =>
  computed(() => {
    const resolvedAriaInvalid = toRef(ariaInvalid)
    const resolvedState = toRef(state)

    return resolveAriaInvalid(resolvedAriaInvalid.value, resolvedState.value)
  })
