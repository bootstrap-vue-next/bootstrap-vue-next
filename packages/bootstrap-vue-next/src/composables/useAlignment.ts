import {computedEager} from '@vueuse/core'
import type {Ref} from 'vue'
import type {AlignmentJustifyContent} from '../types'

export default (align: Ref<AlignmentJustifyContent | undefined>): Readonly<Ref<string>> =>
  computedEager(() => (!align.value ? '' : `justify-content-${align.value}`))
