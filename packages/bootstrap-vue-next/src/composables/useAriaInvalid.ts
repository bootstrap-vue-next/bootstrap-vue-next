import type {AriaInvalid} from '../types'
import {computed, type MaybeRefOrGetter, toValue} from 'vue'
import type {StringAriaInvalid} from '../types/AriaInvalid'

export const useAriaInvalid = (
  ariaInvalid: MaybeRefOrGetter<AriaInvalid | undefined>,
  state: MaybeRefOrGetter<boolean | null | undefined>
) =>
  computed<StringAriaInvalid | undefined>(() => {
    const resolvedAriaInvalid = toValue(ariaInvalid)
    const resolvedState = toValue(state)

    return resolvedAriaInvalid === true
      ? 'true'
      : typeof resolvedAriaInvalid === 'string'
        ? resolvedAriaInvalid
        : resolvedState === false
          ? 'true'
          : resolvedAriaInvalid === false
            ? 'false'
            : undefined
  })
