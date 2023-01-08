import {eagerComputed} from '@vueuse/core'
import type {Ref} from 'vue'
import type {Alignment} from '../types'

/**
 *
 * @param align
 * @returns
 */
export default (align: Ref<Alignment.JustifyContent | undefined>): Readonly<Ref<string>> =>
  eagerComputed(() => (!align.value ? '' : `justify-content-${align.value}`))
