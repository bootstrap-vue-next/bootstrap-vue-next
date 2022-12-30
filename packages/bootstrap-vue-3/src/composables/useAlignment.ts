import {computed, type ComputedRef, type Ref} from 'vue'
import type {Alignment} from '../types'

/**
 *
 * @param align
 * @returns
 */
export default (align: Ref<Alignment.JustifyContent | undefined>): ComputedRef<string> =>
  computed(() => (!align.value ? '' : `justify-content-${align.value}`))
