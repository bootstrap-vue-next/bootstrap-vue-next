import useBooleanish from './useBooleanish'
import type {AriaInvalid} from '../types'
import {computed, type MaybeRefOrGetter, toRef} from 'vue'

export default (
  ariaInvalid: MaybeRefOrGetter<AriaInvalid | undefined>,
  state: MaybeRefOrGetter<boolean | null | undefined>
) => {
  const resolvedAriaInvalid = useBooleanish(ariaInvalid)
  const resolvedState = toRef(state)

  return computed(() =>
    resolvedAriaInvalid.value === true
      ? 'true'
      : typeof resolvedAriaInvalid.value === 'string'
      ? resolvedAriaInvalid.value
      : resolvedState.value === false
      ? 'true'
      : resolvedAriaInvalid.value === false
      ? 'false'
      : undefined
  )
}
