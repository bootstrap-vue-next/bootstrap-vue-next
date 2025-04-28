import {computed, type MaybeRefOrGetter, toValue} from 'vue'
import type {ValidationState} from '../types/CommonTypes'

export const useStateClass = (value: MaybeRefOrGetter<ValidationState>) =>
  computed(() => {
    const resolvedValue = toValue(value)

    return resolvedValue === true ? 'is-valid' : resolvedValue === false ? 'is-invalid' : null
  })
