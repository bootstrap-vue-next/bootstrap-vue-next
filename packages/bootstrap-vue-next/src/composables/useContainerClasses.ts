import type {Breakpoint} from '../types/BreakpointProps'
import {computed, type MaybeRefOrGetter, toValue} from 'vue'

export const useContainerClasses = (value: MaybeRefOrGetter<boolean | Breakpoint | 'fluid'>) =>
  computed(() => {
    const resolvedValue = toValue(value)
    return {
      container: resolvedValue === true,
      [`container-${resolvedValue}`]: typeof resolvedValue === 'string',
    }
  })
