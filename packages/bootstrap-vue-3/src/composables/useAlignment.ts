import {computed, ComputedRef, Ref} from 'vue'
import type {Alignment} from '../types'

/**
 *
 * @param props
 * @returns
 */
export default (align: Ref<Alignment>): ComputedRef<string> =>
  computed(() => {
    if (align.value === 'center') {
      return 'justify-content-center'
    } else if (align.value === 'end') {
      return 'justify-content-end'
    } else if (align.value === 'start') {
      return 'justify-content-start'
    }
    return 'justify-content-start'
  })
