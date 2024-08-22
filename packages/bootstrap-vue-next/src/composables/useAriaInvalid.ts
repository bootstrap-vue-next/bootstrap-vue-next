import type {AriaInvalid} from '../types/AriaInvalid'
import {computed, type MaybeRefOrGetter, toValue} from 'vue'

export const useAriaInvalid = (
  ariaInvalid: MaybeRefOrGetter<AriaInvalid | undefined>,
  state: MaybeRefOrGetter<boolean | null | undefined>
) =>
  computed(() => {
    const resolvedAriaInvalid = toValue(ariaInvalid)
    const resolvedState = toValue(state)

    const resolvedAriaInvalidValue =
      resolvedAriaInvalid === true
        ? 'true'
        : typeof resolvedAriaInvalid === 'string'
          ? resolvedAriaInvalid
          : resolvedState === false
            ? 'true'
            : resolvedAriaInvalid === false
              ? 'false'
              : undefined

    return resolvedAriaInvalidValue
  })
