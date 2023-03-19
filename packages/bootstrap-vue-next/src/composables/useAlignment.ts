import {eagerComputed} from '@vueuse/core'
import type {Ref} from 'vue'
import type {AlignmentJustifyContent} from '../types'

/**
 *
 * @param align
 * @returns
 */
export default (align: Ref<AlignmentJustifyContent | undefined>): Readonly<Ref<string>> =>
  eagerComputed(() => (!align.value ? '' : `justify-content-${align.value}`))
