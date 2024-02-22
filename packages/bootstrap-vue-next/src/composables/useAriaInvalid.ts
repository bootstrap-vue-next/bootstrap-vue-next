import type {AriaInvalid} from '../types'
import {computed, type MaybeRefOrGetter, toRef, toValue} from 'vue'

export default (
  ariaInvalid: MaybeRefOrGetter<AriaInvalid | undefined>,
  state: MaybeRefOrGetter<boolean | null | undefined>
) =>
  computed(() => {
    const resolvedAriaInvalid = toValue(ariaInvalid)
    const resolvedState = toRef(state)

    const resolvedAriaInvalidValue =
      resolvedAriaInvalid === true
        ? 'true'
        : typeof resolvedAriaInvalid === 'string'
          ? resolvedAriaInvalid
          : resolvedState.value === false
            ? 'true'
            : resolvedAriaInvalid === false
              ? 'false'
              : undefined

    return resolvedAriaInvalidValue
  })
