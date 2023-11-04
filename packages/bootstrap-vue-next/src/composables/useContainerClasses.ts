import type {Breakpoint} from '../types'
import {computed, type MaybeRefOrGetter, toValue} from 'vue'

export default (value: MaybeRefOrGetter<boolean | Breakpoint | 'fluid'>) =>
  computed(() => {
    const resolvedValue = toValue(value)
    return {
      container: resolvedValue === true,
      [`container-${resolvedValue}`]: typeof resolvedValue === 'string',
    }
  })
