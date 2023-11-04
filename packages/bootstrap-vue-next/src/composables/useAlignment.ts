import {computed, type MaybeRefOrGetter, type Ref, toValue} from 'vue'
import type {AlignmentJustifyContent} from '../types'

export default (
  align: MaybeRefOrGetter<AlignmentJustifyContent | undefined>
): Readonly<Ref<string>> =>
  computed(() => {
    const value = toValue(align)
    return !value ? '' : `justify-content-${value}`
  })
