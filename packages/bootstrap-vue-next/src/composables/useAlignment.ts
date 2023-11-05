import {computed, type MaybeRefOrGetter, toValue} from 'vue'
import type {AlignmentJustifyContent} from '../types'

export default (align: MaybeRefOrGetter<AlignmentJustifyContent | undefined>) =>
  computed(() => {
    const value = toValue(align)
    return !value ? '' : `justify-content-${value}`
  })
